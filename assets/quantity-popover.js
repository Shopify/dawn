if (!customElements.get('quantity-popover')) {
  customElements.define(
    'quantity-popover',
    class QuantityPopover extends HTMLElement {
      constructor() {
        super();
        this.mql = window.matchMedia('(min-width: 750px)');
        this.infoButton = this.querySelector('.variant-item__quantity-info.medium-hide');
        this.popoverInfo = this.querySelector('.quantity-popover__info');
        this.closeButton = this.querySelector('.button-close');
        this.variantInfo = this.querySelector('.variant-item__quantity-wrap');

        this.infoButton.addEventListener('click', this.togglePopover.bind(this));
        this.closeButton.addEventListener('click', this.closePopover.bind(this));
        this.infoButton.addEventListener('focusout', this.closePopover.bind(this));
        this.popoverInfo.addEventListener('focusout', this.closePopover.bind(this));

        if (this.mql.matches) {
          this.addEventListener('mouseenter', this.toggleAccessibility.bind(this));
          this.addEventListener('mouseleave', this.closePopover.bind(this));
        }
      }

      togglePopover(event) {
        event.preventDefault();
        const isExpanded = this.infoButton.getAttribute('aria-expanded') === 'true';

        this.infoButton.setAttribute(
          'aria-expanded',
          !isExpanded
        );

        this.toggleAccessibility(event);
      }

      toggleAccessibility(event) {
        event.preventDefault();
        this.popoverInfo.toggleAttribute('hidden');
        this.infoButton.classList.toggle('variant-item__quantity-info--open');

        const isOpen = this.infoButton.classList.contains('variant-item__quantity-info--open');
        if (isOpen) {
          this.closeButton.focus();
        }
      }

      closePopover(event) {
        event.preventDefault();
        const isChild = this.popoverInfo.contains(event.relatedTarget) || this.variantInfo.contains(event.relatedTarget);

        if (!event.relatedTarget || !isChild) {
          this.popoverInfo.setAttribute('hidden', true);
          this.infoButton.setAttribute('aria-expanded', 'true');
          this.infoButton.classList.remove('variant-item__quantity-info--open');
        }
      }

    })
}

