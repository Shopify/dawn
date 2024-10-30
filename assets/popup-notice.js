class CustomPopup extends HTMLElement {
  constructor() {
    super();
    this.closeButton = this.querySelector('.close-popup');
    this.popupContent = this.querySelector('.popup-notice__content');
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<slot></slot>`;
    this.isOpen = false;

    // Check sessionStorage to see if popup has already been closed
    if (!sessionStorage.getItem('popupClosed')) {
      this.open();
    }

    this.closeButton.addEventListener('click', this.close.bind(this));
    this.addEventListener('click', this.handleOutsideClick.bind(this));
    document.addEventListener('keydown', this.handleKeydown.bind(this));
  }

  open() {
    this.setAttribute('open', '');
    this.setAttribute('aria-hidden', 'false');
    this.isOpen = true;
    this.focus();
    this.focusTrap();
  }

  close() {
    this.removeAttribute('open');
    this.setAttribute('aria-hidden', 'true');
    this.isOpen = false;

    // Store the popup closed state in sessionStorage
    sessionStorage.setItem('popupClosed', 'true');
  }

  focusTrap() {
    const focusableElements = this.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    });
  }

  handleOutsideClick(e) {
    if (e.target === this && !this.popupContent.contains(e.target)) {
      this.close();
    }
  }

  handleKeydown(e) {
    if (e.key === 'Escape' && this.isOpen) {
      this.close();
    }
  }
}

customElements.define('popup-notice', CustomPopup);
