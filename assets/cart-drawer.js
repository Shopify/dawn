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
      this.querySelector('thead').style.top = `${ document.querySelector('.drawer__header').offsetHeight }px`;
    }, { once: true });
    document.body.classList.add(`overflow-hidden`);
  }

  close() {
    this.classList.remove('active');
    removeTrapFocus(this.activeElement);
    document.body.classList.remove(`overflow-hidden`);
  }

  renderContents(parsedState) {
    this.querySelector('.drawer__inner').classList.contains('is-empty') && this.querySelector('.drawer__inner').classList.remove('is-empty');
    this.productId = parsedState.id;
    this.getSectionsToRender().forEach((section => {
      const elementToReplace = document.getElementById(section.id).querySelector(section.selector) || document.getElementById(section.id);
      elementToReplace.innerHTML = this.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
    }));

    setTimeout(() => {
      this.querySelector('#cart-drawer-overlay').addEventListener('click', this.close.bind(this));
      this.open();
    });
  }

  getSectionInnerHTML(html, selector = '.shopify-section') {
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector(selector).innerHTML;
  }

  getSectionsToRender() {
    return [
      {
        id: 'cart-drawer',
        section: 'cart-drawer',
        selector: 'cart-drawer'
      },
      {
        id: 'cart-icon-bubble',
        section: 'cart-icon-bubble',
        selector: '.shopify-section'
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
