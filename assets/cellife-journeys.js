/* Category preference only. No inferred destination, redirects or commerce rules. */
(() => {
  if (window.cellifeJourneysInitialized) return;
  window.cellifeJourneysInitialized = true;

  const preferenceKey = 'cellife:journey:v1';
  const entryKey = 'cellife:journey-entry:v1';
  let firstEntry = false;
  // If storage is unavailable, keep ordinary navigation and skip interruptions.
  try {
    firstEntry = sessionStorage.getItem(entryKey) === null;
    sessionStorage.setItem(entryKey, 'visited');
    firstEntry = firstEntry && localStorage.getItem(preferenceKey) === null;
  } catch {
    firstEntry = false;
  }

  const remember = (choice) => {
    try { localStorage.setItem(preferenceKey, choice); } catch { /* Navigation still works. */ }
  };

  // Listen globally so selection via persistent links or the gateway also settles it.
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[data-cellife-choice]');
    if (link) remember(link.dataset.cellifeChoice);
  });

  if (customElements.get('cellife-journey-dialog')) return;
  customElements.define('cellife-journey-dialog', class extends HTMLElement {
    connectedCallback() {
      if (this.controller) return;
      this.controller = new AbortController();
      const options = { signal: this.controller.signal };
      this.dialog = this.querySelector('dialog');
      if (!this.dialog || typeof this.dialog.showModal !== 'function') return;

      const close = () => {
        if (this.dialog.open) {
          remember(this.selectedChoice || 'dismissed');
          this.dialog.close();
        }
        document.documentElement.classList.remove('cellife-journey-modal-open');
      };
      this.closeDialog = close;
      this.dialog.addEventListener('close', () => {
        remember(this.selectedChoice || 'dismissed');
        document.documentElement.classList.remove('cellife-journey-modal-open');
        if (this.previousFocus?.isConnected) this.previousFocus.focus({ preventScroll: true });
      }, options);
      // Native Escape closes the dialog and fires close, recording dismissal.
      this.dialog.addEventListener('cancel', () => remember('dismissed'), options);
      this.querySelector('[data-cellife-dismiss]').addEventListener('click', close, options);
      this.dialog.addEventListener('keydown', (event) => {
        if (event.key !== 'Tab') return;
        const controls = [...this.dialog.querySelectorAll('a[href], button:not([disabled])')];
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }, options);
      this.dialog.addEventListener('click', (event) => {
        if (event.target.closest('a[data-cellife-choice]')) {
          // Do not prevent default or alter normal/modified-link navigation.
          const choice = event.target.closest('a[data-cellife-choice]').dataset.cellifeChoice;
          this.selectedChoice = choice;
          close();
        }
        if (event.target === this.dialog) close();
      }, options);
      window.addEventListener('pagehide', close, options);
      window.addEventListener('pageshow', (event) => { if (event.persisted) close(); }, options);
      window.addEventListener('storage', (event) => {
        if (event.key === preferenceKey && event.newValue !== null) close();
      }, options);

      let internalReferrer = false;
      try { internalReferrer = Boolean(document.referrer) && new URL(document.referrer).origin === location.origin; } catch { /* No usable referrer. */ }
      const navigation = performance.getEntriesByType('navigation')[0];
      if (!firstEntry || internalReferrer || (navigation && navigation.type !== 'navigate') || window.Shopify?.designMode) return;
      // Consume once even if the editor or another script reconnects the element.
      firstEntry = false;
      this.previousFocus = document.activeElement;
      this.dialog.showModal();
      document.documentElement.classList.add('cellife-journey-modal-open');
    }

    disconnectedCallback() {
      this.closeDialog?.();
      this.controller?.abort();
      this.controller = null;
    }
  });
})();
