(function () {
    const initFlyover = () => {
        const header = document.querySelector('.site-flyover');
        if (!header) {
            return;
        }

        const nav = header.querySelector('.site-flyover__nav');
        const toggleButton = header.querySelector('.site-flyover__toggle');
        const closeButton = header.querySelector('.site-flyover__close');
        const overlay = header.querySelector('.site-flyover__overlay');
        const navLinks = nav ? Array.from(nav.querySelectorAll('a')) : [];
        const mobileQuery = window.matchMedia('(max-width: 720px)');
        const isStatic = header.classList.contains('site-flyover--static');

        if (!nav || !toggleButton) {
            return;
        }

        let threshold = 0;

        const findTrigger = () =>
            document.querySelector('[data-flyover-trigger]') ||
            document.querySelector('.content-landing') ||
            document.querySelector('.intro-container');

        const updateThreshold = () => {
            if (isStatic) {
                threshold = 0;
                return;
            }

            const trigger = findTrigger();
            const headerHeight = header.offsetHeight;

            if (!trigger) {
                threshold = headerHeight;
                return;
            }

            const rect = trigger.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
            threshold = rect.top + scrollTop - headerHeight;
            if (threshold < 0) {
                threshold = 0;
            }
        };

        const syncMenuState = () => {
            const isMobile = mobileQuery.matches;
            if (!isMobile) {
                header.classList.remove('is-menu-open');
            }

            const isOpen = header.classList.contains('is-menu-open') && isMobile;

            toggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

            if (closeButton) {
                if (isOpen) {
                    closeButton.setAttribute('aria-hidden', 'false');
                    closeButton.removeAttribute('tabindex');
                } else {
                    closeButton.setAttribute('aria-hidden', 'true');
                    closeButton.setAttribute('tabindex', '-1');
                }
            }

            if (nav) {
                if (isMobile) {
                    nav.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
                    navLinks.forEach((link) => {
                        if (isOpen) {
                            link.removeAttribute('tabindex');
                        } else {
                            link.setAttribute('tabindex', '-1');
                        }
                    });
                } else {
                    nav.removeAttribute('aria-hidden');
                    navLinks.forEach((link) => link.removeAttribute('tabindex'));
                }
            }

            if (overlay) {
                overlay.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
            }

            document.body.classList.toggle('has-flyover-menu', isOpen);
        };

        const setMenuState = (shouldOpen) => {
            if (!mobileQuery.matches && shouldOpen) {
                return;
            }

            header.classList.toggle('is-menu-open', shouldOpen);
            syncMenuState();
        };

        const toggleHeaderVisibility = () => {
            if (isStatic) {
                header.classList.add('is-visible');
                return;
            }

            if (window.scrollY >= threshold) {
                header.classList.add('is-visible');
            } else {
                header.classList.remove('is-visible');
                header.classList.remove('is-menu-open');
                syncMenuState();
            }
        };

        const handleToggleClick = () => {
            const shouldOpen = !header.classList.contains('is-menu-open');
            setMenuState(shouldOpen);
        };

        toggleButton.addEventListener('click', handleToggleClick);

        if (closeButton) {
            closeButton.addEventListener('click', () => setMenuState(false));
        }

        if (overlay) {
            overlay.addEventListener('click', () => setMenuState(false));
        }

        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (mobileQuery.matches) {
                    setMenuState(false);
                }
            });
        });

        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && header.classList.contains('is-menu-open')) {
                setMenuState(false);
            }
        });

        const handleMediaChange = () => {
            syncMenuState();
        };

        if (typeof mobileQuery.addEventListener === 'function') {
            mobileQuery.addEventListener('change', handleMediaChange);
        } else if (typeof mobileQuery.addListener === 'function') {
            mobileQuery.addListener(handleMediaChange);
        }

        window.addEventListener('scroll', toggleHeaderVisibility, { passive: true });
        window.addEventListener('resize', () => {
            updateThreshold();
            toggleHeaderVisibility();
            syncMenuState();
        });
        window.addEventListener('load', () => {
            updateThreshold();
            toggleHeaderVisibility();
            syncMenuState();
        });

        if (isStatic) {
            header.classList.add('is-visible');
        }

        updateThreshold();
        toggleHeaderVisibility();
        syncMenuState();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFlyover);
    } else {
        initFlyover();
    }
})();
