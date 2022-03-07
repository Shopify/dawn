class CartDrawer extends HTMLElement {
  constructor() {
    super();

    this.onOverlayClick = this.handleOverlayClick.bind(this);
    this.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());
    this.querySelector('#cart-drawer-overlay').addEventListener('click', this.close.bind(this));
  }

  open() {
    this.classList.add('animate', 'active');

    this.addEventListener('transitionend', () => {
      this.focus();
      const cartDrawer = document.getElementById('cart-drawer');
      const focusElement = cartDrawer.querySelector('.cart-item__link') || cartDrawer.querySelector('.drawer__close');
      trapFocus(cartDrawer, focusElement);
    }, { once: true });
  }

  close() {
    this.classList.remove('active');
    removeTrapFocus(this.activeElement);
  }

  renderContents(parsedState) {
      this.productId = parsedState.id;
      this.getSectionsToRender().forEach((section => {
        console.log(this.getSectionDOM(parsedState.sections[section.id], section.selector));
        document.getElementById(section.id).querySelector('#cart-drawer').innerHTML =
          this.getSectionDOM(parsedState.sections[section.id], section.selector).querySelector('#cart-drawer').innerHTML;
      }));

      this.open();
  }

  getSectionsToRender() {
    return [
      {
        id: 'cart-drawer',
        selector: 'cart-drawer'
      }
    ];
  }

  getSectionDOM(html, selector = '.shopify-section') {
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector(selector);
  }

  handleOverlayClick(evt) {
    const target = evt.target;
    console.log(target);
    // if (target !== this && !target.closest('cart-notification')) {
    //   const disclosure = target.closest('details-disclosure');
    //   this.activeElement = disclosure ? disclosure.querySelector('summary') : null;
    //   this.close();
    // }
  }

  setActiveElement(element) {
    this.activeElement = element;
  }
}

customElements.define('cart-drawer', CartDrawer);
