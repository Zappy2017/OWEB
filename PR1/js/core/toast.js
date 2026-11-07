/* toast.js - shared toast helper */
(function () {
    function ensureContainer() {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            document.body.appendChild(container);
        }
        return container;
    }

    function showToast(message, type = 'error', duration = 3200) {
        const container = ensureContainer();
        const toast = document.createElement('div');
        toast.className = 'toast ' + type;
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        toast.textContent = String(message || '');
        container.appendChild(toast);

        // force browser to apply initial styles
        toast.getBoundingClientRect();
        // now animate
        toast.classList.add("show");

        window.setTimeout(function () {
            toast.classList.add('hide');
            window.setTimeout(function () {
                toast.remove();
            }, 220);
        }, duration);
    }

    window.showToast = showToast;
})();
