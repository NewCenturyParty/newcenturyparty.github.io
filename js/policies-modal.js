(function () {
    // Cache fetched policy detail HTML by policy id.
    const policyCache = new Map();
    const pendingRequests = new Map();

    const getDetailUrl = (modal, policyId) => {
        if (!policyId) {
            return null;
        }

        if (modal) {
            const { detailTemplate, detailBase } = modal.dataset;

            if (detailTemplate) {
                return detailTemplate.includes('{id}')
                    ? detailTemplate.replace('{id}', policyId)
                    : detailTemplate;
            }

            if (detailBase) {
                const normalizedBase = detailBase.endsWith('/')
                    ? detailBase.slice(0, -1)
                    : detailBase;

                return `${normalizedBase}/policy-${policyId}.html`;
            }
        }

        return null;
    };

    const fetchPolicyHTML = async (modal, policyId) => {
        if (!policyId) {
            return '';
        }

        if (policyCache.has(policyId)) {
            return policyCache.get(policyId);
        }

        if (pendingRequests.has(policyId)) {
            return pendingRequests.get(policyId);
        }

        const url = getDetailUrl(modal, policyId);

        if (!url) {
            policyCache.set(policyId, '');
            return '';
        }

        const request = fetch(url, { credentials: 'same-origin' })
            .then((response) => {
                if (response.status === 404) {
                    return '';
                }

                if (!response.ok) {
                    throw new Error(`Unable to load policy ${policyId} details (status ${response.status}).`);
                }

                return response.text();
            })
            .then((html) => {
                policyCache.set(policyId, html);
                pendingRequests.delete(policyId);
                return html;
            })
            .catch((error) => {
                pendingRequests.delete(policyId);
                throw error;
            });

        pendingRequests.set(policyId, request);
        return request;
    };

    const getPolicyId = (card) => {
        const numberEl = card.querySelector('.policy-card__number');
        if (!numberEl) {
            return null;
        }
        const raw = numberEl.textContent.trim();
        const digits = raw.replace(/\D/g, '');
        if (!digits) {
            return null;
        }
        return digits.padStart(2, '0');
    };

    const initPoliciesModal = () => {
        const modal = document.querySelector('.policy-modal');
        if (!modal) {
            return;
        }

        const dialog = modal.querySelector('.policy-modal__dialog');
        const numberEl = document.getElementById('policy-modal-number');
        const titleEl = document.getElementById('policy-modal-title');
        const bodyEl = document.getElementById('policy-modal-body');
        const closeTriggers = modal.querySelectorAll('[data-policy-close]');
        const cards = document.querySelectorAll('.policy-card');
        const closeButton = modal.querySelector('.policy-modal__close');

        const loadingMarkup = '<p class="policy-modal__status">Loading full policy...</p>';
        const fallbackMarkup = '<p class="policy-modal__status">Full policy write-up coming soon.</p>';
        const errorMarkup = '<p class="policy-modal__status policy-modal__status--error">We could not load that policy right now. Refresh and try again, or make sure you are running a local web server when previewing.</p>';

        if (!dialog || !numberEl || !titleEl || !bodyEl || cards.length === 0) {
            return;
        }

        let lastFocusedElement = null;
        let activeCard = null;

        const openModal = async (card) => {
            lastFocusedElement = card;
            activeCard = card;

            const number = card.querySelector('.policy-card__number');
            const title = card.querySelector('.policy-card__title');
            const policyId = getPolicyId(card);

            numberEl.textContent = number ? number.textContent.trim() : '';
            titleEl.textContent = title ? title.textContent.trim() : '';

            bodyEl.innerHTML = loadingMarkup;

            modal.removeAttribute('hidden');
            modal.dataset.open = 'true';
            modal.setAttribute('aria-hidden', 'false');
            card.setAttribute('aria-expanded', 'true');

            document.body.style.overflow = 'hidden';

            dialog.focus();

            if (closeButton) {
                if (typeof requestAnimationFrame === 'function') {
                    requestAnimationFrame(() => closeButton.focus());
                } else {
                    closeButton.focus();
                }
            }

            if (!policyId) {
                bodyEl.innerHTML = fallbackMarkup;
                return;
            }

            try {
                const detailHTML = await fetchPolicyHTML(modal, policyId);
                bodyEl.innerHTML = detailHTML || fallbackMarkup;
            } catch (error) {
                console.error(error);
                bodyEl.innerHTML = errorMarkup;
            }
        };

        const closeModal = () => {
            modal.dataset.open = 'false';
            modal.setAttribute('aria-hidden', 'true');
            modal.setAttribute('hidden', '');
            document.body.style.overflow = '';
            bodyEl.innerHTML = '';
            numberEl.textContent = '';
            titleEl.textContent = '';

            if (activeCard) {
                activeCard.setAttribute('aria-expanded', 'false');
                activeCard = null;
            }

            if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
                lastFocusedElement.focus();
            }
        };

        cards.forEach((card) => {
            card.setAttribute('aria-haspopup', 'dialog');
            card.setAttribute('aria-expanded', 'false');

            card.addEventListener('click', () => openModal(card));
            card.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
                    event.preventDefault();
                    openModal(card);
                }
            });
        });

        closeTriggers.forEach((trigger) => {
            trigger.addEventListener('click', closeModal);
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.dataset.open === 'true') {
                closeModal();
            }
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPoliciesModal);
    } else {
        initPoliciesModal();
    }
})();
