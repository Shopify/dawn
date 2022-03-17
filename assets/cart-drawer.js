class CartDrawer extends HTMLElement {
  constructor() {
    super();

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
    document.body.classList.add(`overflow-hidden`);
  }

  close() {
    this.classList.remove('active');
    removeTrapFocus(this.activeElement);
    document.body.classList.remove(`overflow-hidden`);
  }

  renderContents(parsedState) {
      this.productId = parsedState.id;
      this.getSectionsToRender().forEach((section => {
        console.log(this.getSectionDOM(parsedState.sections[section.id], section.selector));
        document.getElementById('cart-drawer-inner').innerHTML =
          this.getSectionDOM(parsedState.sections[section.id], section.selector).querySelector('#cart-drawer-inner').innerHTML;
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

  setActiveElement(element) {
    this.activeElement = element;
  }
}

customElements.define('cart-drawer', CartDrawer);
