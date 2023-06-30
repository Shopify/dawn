if (!customElements.get('quantity-popover')) {
  customElements.define(
    'quantity-popover',
    class QuantityPopover extends HTMLElement {
      constructor() {
        super();
        this.mql = window.matchMedia('(min-width: 750px)');
        this.infoButtonDesktop = this.querySelector('.variant-item__quantity-info.small-hide');
        this.infoButtonMobile = this.querySelector('.variant-item__quantity-info.medium-hide');
        this.popoverInfo = this.querySelector('.quantity-popover__info');
        this.closeButton = this.querySelector('.button-close');
        this.variantInfo = this.querySelector('.variant-item__quantity-wrap');

        if (this.closeButton) {
          this.closeButton.addEventListener('click', this.closePopover.bind(this));
        }

        if (this.popoverInfo) {
          this.popoverInfo.addEventListener('focusout', this.closePopover.bind(this));
        }

        if (this.infoButtonDesktop && this.infoButtonMobile) {
          this.infoButtonDesktop.addEventListener('click', this.togglePopover.bind(this));
          this.infoButtonMobile.addEventListener('click', this.togglePopover.bind(this));
          this.infoButtonDesktop.addEventListener('focusout', this.closePopover.bind(this));
          this.infoButtonMobile.addEventListener('focusout', this.closePopover.bind(this));
        }

        if (this.infoButtonDesktop && this.mql.matches) {
          this.addEventListener('mouseenter', this.toggleAccessibility.bind(this));
          this.addEventListener('mouseleave', this.closePopover.bind(this));
        }
      }

      togglePopover(event) {
        event.preventDefault();

        const button = this.mql.matches ? this.infoButtonDesktop : this.infoButtonMobile;
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        
        button.setAttribute('aria-expanded', !isExpanded);

        this.toggleAccessibility(event);
      }

      toggleAccessibility(event) {
        event.preventDefault();
        this.popoverInfo.toggleAttribute('hidden');

        const button = this.mql.matches ? this.infoButtonDesktop : this.infoButtonMobile;
        const isOpen = button.getAttribute('aria-expanded') === 'true';

        button.classList.toggle('variant-item__quantity-info--open');

        if (isOpen) {
          this.closeButton.focus();
        }
      }

      closePopover(event) {
        event.preventDefault();
        const isChild = this.popoverInfo.contains(event.relatedTarget) || this.variantInfo.contains(event.relatedTarget);

        const button = this.mql.matches ? this.infoButtonDesktop : this.infoButtonMobile;

        button.setAttribute('aria-expanded', 'true');
        button.classList.remove('variant-item__quantity-info--open');
      }

    })
}

