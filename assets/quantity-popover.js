class QuantityPopover extends HTMLElement {
  constructor() {
    super();
    this.infoButton = this.querySelector('.variant-item__quantity-info');
    this.popoverInfo = this.querySelector('.quantity-popover__info');
    this.closeButton = this.querySelector('.button-close');
    this.qtyInput = this.querySelector('.quantity__input');

    this.infoButton.addEventListener('click', this.togglePopover.bind(this));
    this.closeButton.addEventListener('click', this.togglePopover.bind(this));
    this.infoButton.addEventListener('focusout', this.closePopover.bind(this));
    this.qtyInput.addEventListener('focusout', this.closePopover.bind(this));
    this.popoverInfo.addEventListener('focusout', this.closePopover.bind(this));

  }

  togglePopover(event) {
    event.preventDefault();

    this.infoButton.setAttribute(
      'aria-expanded',
      (this.infoButton.getAttribute('aria-expanded') === 'false').toString()
    );

    if (this.infoButton.getAttribute('aria-expanded') === 'true') {
      this.closeButton.focus();
    }
    this.popoverInfo.toggleAttribute('hidden');
  }

  closePopover(event) {
    event.preventDefault();
    const isChild = this.popoverInfo.contains(event.relatedTarget) || this.querySelector('.variant-item__info').contains(event.relatedTarget);
    console.log(isChild, event.relatedTarget, 'ehhehehe')
    if (!event.relatedTarget || !isChild) {
      this.popoverInfo.setAttribute('hidden', true);
    }
  }

}

customElements.define('quantity-popover', QuantityPopover);

