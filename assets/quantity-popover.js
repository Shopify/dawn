if (!customElements.get('quantity-popover')) {
  customElements.define(
    'quantity-popover',
    class QuantityPopover extends HTMLElement {
      constructor() {
        super();
        this.mql = window.matchMedia('(min-width: 750px)');
        this.infoButtonDesktop = this.querySelector('.quantity-popover__info-button.small-hide');
        this.infoButtonMobile = this.querySelector('.quantity-popover__info-button.medium-hide');
        this.popoverInfo = this.querySelector('.quantity-popover__info');
        this.closeButton = this.querySelector('.button-close');
        this.variantInfo = this.querySelector('.quantity-popover-container');

        if (this.closeButton) {
          this.closeButton.addEventListener('click', this.closePopover.bind(this));
        }

        if (this.popoverInfo) {
          this.popoverInfo.addEventListener('mouseenter', this.closePopover.bind(this));
        }

        if (this.infoButtonDesktop && this.infoButtonMobile) {
          this.infoButtonDesktop.addEventListener('click', this.togglePopover.bind(this));
          this.infoButtonMobile.addEventListener('click', this.togglePopover.bind(this));
          this.infoButtonDesktop.addEventListener('focusout', this.closePopover.bind(this));
          this.infoButtonMobile.addEventListener('focusout', this.closePopover.bind(this));
        }

        if (this.infoButtonDesktop && this.mql.matches) {
          this.variantInfo.addEventListener('mouseenter', this.togglePopover.bind(this));
          this.variantInfo.addEventListener('mouseleave', this.closePopover.bind(this));
        }
      }

      togglePopover(event) {
        event.preventDefault();

        const button = this.mql.matches ? this.infoButtonDesktop : this.infoButtonMobile;
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        button.setAttribute('aria-expanded', !isExpanded);

        this.popoverInfo.toggleAttribute('hidden');

        const isOpen = button.getAttribute('aria-expanded') === 'true';

        button.classList.toggle('quantity-popover__info-button--open');

        if (isOpen) {
          button.focus();
        }
      }

      closePopover(event) {
        event.preventDefault();
        const isChild = this.variantInfo.contains(event.relatedTarget);

        const button = this.mql.matches ? this.infoButtonDesktop : this.infoButtonMobile;

        if (!event.relatedTarget || !isChild) {
          button.setAttribute('aria-expanded', 'false');
          button.classList.remove('quantity-popover__info-button--open');
          this.popoverInfo.setAttribute('hidden', '');
        }
      }
    }
  );
}
