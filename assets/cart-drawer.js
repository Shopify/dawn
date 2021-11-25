class CartDrawer extends HTMLElement {
  constructor() {
    super();

    this.onBodyClick = this.handleBodyClick.bind(this);
    this.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());

    this.querySelectorAll('.drawer__close').forEach((closeButton) =>
      closeButton.addEventListener('click', this.close.bind(this))
    );
  }

  open() {
    this.classList.add('animate', 'active');

    this.addEventListener('transitionend', () => {
      this.focus();
      const cartDrawer = document.getElementById('cart-drawer');
      const focusElement = cartDrawer.querySelector('.cart-item__link');
      trapFocus(cartDrawer, focusElement);
    }, { once: true });
  }

  close() {
    console.log('Close');
    this.classList.remove('active');

    document.body.removeEventListener('click', this.onBodyClick);

    removeTrapFocus(this.activeElement);
  }

  renderContents(parsedState) {
      this.productId = parsedState.id;
      this.getSectionsToRender().forEach((section => {
        document.getElementById(section.id).innerHTML =
          this.getSectionInnerHTML(parsedState.sections[section.id], section.selector);
      }));

      if (this.header) this.header.reveal();
      this.open();
  }

  getSectionsToRender() {
    return [
      {
        id: 'cart-drawer'
      }
    ];
  }

  getSectionInnerHTML(html, selector = '.shopify-section') {
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector(selector).innerHTML;
  }

  handleBodyClick(evt) {
    const target = evt.target;
    if (target !== this && !target.closest('cart-notification')) {
      const disclosure = target.closest('details-disclosure');
      this.activeElement = disclosure ? disclosure.querySelector('summary') : null;
      this.close();
    }
  }

  setActiveElement(element) {
    this.activeElement = element;
  }
}

customElements.define('cart-drawer', CartDrawer);
