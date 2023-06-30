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

        if (this.mql.matches) {
          const isExpanded = this.infoButtonDesktop.getAttribute('aria-expanded') === 'true';
          this.infoButtonDesktop.setAttribute(
            'aria-expanded',
            !isExpanded
          );
        } else {
          const isExpanded = this.infoButtonMobile.getAttribute('aria-expanded') === 'true';
          this.infoButtonMobile.setAttribute(
            'aria-expanded',
            !isExpanded
          );
        }

        this.toggleAccessibility(event);
      }

      toggleAccessibility(event) {
        event.preventDefault();
        this.popoverInfo.toggleAttribute('hidden');

        let isOpen = this.infoButtonMobile.getAttribute('aria-expanded') === 'true';
        this.infoButtonMobile.classList.toggle('variant-item__quantity-info--open');

        if (this.mql.matches) {
          isOpen = this.infoButtonDesktop.getAttribute('aria-expanded') === 'true';
          this.infoButtonDesktop.classList.toggle('variant-item__quantity-info--open');
        }

        if (isOpen) {
          this.closeButton.focus();
        }
      }

      closePopover(event) {
        event.preventDefault();
        const isChild = this.popoverInfo.contains(event.relatedTarget) || this.variantInfo.contains(event.relatedTarget);

        if (!event.relatedTarget || !isChild) {
          this.popoverInfo.setAttribute('hidden', true);
          if (this.mql.matches) {
            this.infoButtonDesktop.setAttribute('aria-expanded', 'true');
            this.infoButtonDesktop.classList.remove('variant-item__quantity-info--open');
          } else {
            this.infoButtonMobile.setAttribute('aria-expanded', 'true');
            this.infoButtonMobile.classList.remove('variant-item__quantity-info--open');
          }

        }
      }

    })
}

