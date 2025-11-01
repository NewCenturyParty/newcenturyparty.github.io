(function () {
    const policyDetails = {
        // Policy 01 – add rich HTML describing the Human Dignity policy.
        '01': ``,
        // Policy 02 – add detailed content for The Saskatchewan Dignity Dividend.
        '02': ``,
        // Policy 03 – add detailed content for Universal Health.
        '03': ``,
        // Policy 04 – add detailed content for the policy shown as number 04.
        '04': ``,
        // Policy 05 – add detailed content for the policy shown as number 05.
        '05': ``,
        // Policy 06 – add detailed content for 21st Century Connected Communities.
        '06': ``,
        // Policy 07 – add detailed content for Public Safety.
        '07': ``,
        // Policy 08 – add detailed content for the policy shown as number 08.
        '08': ``,
        // Policy 09 – add detailed content for the policy shown as number 09.
        '09': ``,
        // Policy 10 – add detailed content for the policy shown as number 10.
        '10': ``,
        // Policy 11 – add detailed content for the policy shown as number 11.
        '11': ``,
        // Policy 12 – add detailed content for the policy shown as number 12.
        '12': ``,
        // Policy 13 – add detailed content for the policy shown as number 13.
        '13': ``,
        // Policy 14 – add detailed content for the policy shown as number 14.
        '14': ``,
        // Policy 15 – add detailed content for the policy shown as number 15.
        '15': ``,
        // Policy 16 – add detailed content for the policy shown as number 16.
        '16': ``,
        // Policy 17 – add detailed content for the policy shown as number 17.
        '17': ``,
        // Policy 18 – add detailed content for the policy shown as number 18.
        '18': ``,
        // Policy 19 – add detailed content for the policy shown as number 19.
        '19': ``,
        // Policy 20 – add detailed content for Disaster Resilience.
        '20': ``,
        // Policy 21 – add detailed content for Funding: Taxes, Royalties, and METR.
        '21': ``,
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

        if (!dialog || !numberEl || !titleEl || !bodyEl || cards.length === 0) {
            return;
        }

        let lastFocusedElement = null;
        let activeCard = null;

        const openModal = (card) => {
            lastFocusedElement = card;
            activeCard = card;

            const number = card.querySelector('.policy-card__number');
            const title = card.querySelector('.policy-card__title');
            const policyId = getPolicyId(card);

            numberEl.textContent = number ? number.textContent.trim() : '';
            titleEl.textContent = title ? title.textContent.trim() : '';

            const detail = policyId ? policyDetails[policyId] : '';
            bodyEl.innerHTML = detail ? detail : '';

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
