(function () {

    const enhancePolicyDetailContent = (container) => {
        if (!container) {
            return;
        }

        container.querySelectorAll('table').forEach((table) => {
            const parent = table.parentElement;
            if (parent && parent.classList.contains('policy-page__table-wrap')) {
                return;
            }

            const wrapper = document.createElement('div');
            wrapper.className = 'policy-page__table-wrap';
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        });
    };

    const fitPolicyHeroTitle = (title) => {
        if (!title) {
            return;
        }

        title.style.fontSize = '';

        const computed = window.getComputedStyle(title);
        const initialSize = Number.parseFloat(computed.fontSize);
        const minSize = 40;

        if (!Number.isFinite(initialSize)) {
            return;
        }

        let nextSize = initialSize;

        while (title.scrollWidth > title.clientWidth && nextSize > minSize) {
            nextSize -= 1;
            title.style.fontSize = `${nextSize}px`;
        }
    };

    const fitPolicyHeroTitles = () => {
        document.querySelectorAll('.policy-detail-hero .intro-title').forEach(fitPolicyHeroTitle);
    };

    const initPolicyDetailPage = () => {
        document.querySelectorAll('.policy-page__body').forEach(enhancePolicyDetailContent);
        fitPolicyHeroTitles();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPolicyDetailPage);
    } else {
        initPolicyDetailPage();
    }

    window.addEventListener('resize', fitPolicyHeroTitles);

    if (document.fonts && typeof document.fonts.ready?.then === 'function') {
        document.fonts.ready.then(fitPolicyHeroTitles);
    }
})();
