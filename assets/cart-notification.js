class CartNotification extends HTMLElement {
  constructor() {
    super();

    this.notification = document.getElementById('cart-notification');
    this.header = document.querySelector('sticky-header');
    this.onBodyClick = this.handleBodyClick.bind(this);

    this.notification.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());
    this.querySelectorAll('button[type="button"]').forEach((closeButton) =>
      closeButton.addEventListener('click', this.close.bind(this))
    );
  }

  open() {
    this.notification.classList.add('animate', 'active');

    this.notification.addEventListener(
      'transitionend',
      () => {
        this.notification.focus();
        trapFocus(this.notification);
      },
      { once: true }
    );

    document.body.addEventListener('click', this.onBodyClick);
  }

  close() {
    this.notification.classList.remove('active');
    document.body.removeEventListener('click', this.onBodyClick);

    removeTrapFocus(this.activeElement);
  }

  renderContents(parsedState) {
    // this.cartItemKey = parsedState.key;
    // console.log(parsedState);
    if (parsedState.sections) {
      this.getSectionsToRender().forEach((section) => {
        document.getElementById(section.id).innerHTML = this.getSectionInnerHTML(
          parsedState.sections[section.id],
          section.selector
        );
      });
    }

    const recommendedProducts = fetch(
      `${this.dataset.recommendedProductsUrl}&product_id=${parsedState.id}&section_id=${this.dataset.sectionId}&intent=complementary&limit=1`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // const html = document.createElement('div');
        // html.innerHTML = text;
        // const recommendations = html.querySelector('product-recommendations');

        // if (recommendations?.innerHTML.trim().length) {
        //   this.innerHTML = recommendations.innerHTML;
        // }

        // if (!this.querySelector('slideshow-component') && this.classList.contains('complementary-products')) {
        //   this.remove();
        // }

        // if (html.querySelector('.grid__item')) {
        //   this.classList.add('product-recommendations--loaded');
        // }
      })
      .catch((e) => {
        console.error(e);
      });

    if (this.header) this.header.reveal();
    this.open();
  }

  getSectionsToRender() {
    return [
      {
        id: 'cart-notification-product',
        selector: `[id^="cart-notification-product-"]`,
      },
      {
        id: 'cart-notification-button',
      },
      {
        id: 'cart-icon-bubble',
      },
    ];
  }

  getSectionInnerHTML(html, selector = '.shopify-section') {
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector).innerHTML;
  }

  handleBodyClick(evt) {
    const target = evt.target;
    if (target !== this.notification && !target.closest('cart-notification')) {
      const disclosure = target.closest('details-disclosure, header-menu');
      this.activeElement = disclosure ? disclosure.querySelector('summary') : null;
      this.close();
    }
  }

  setActiveElement(element) {
    this.activeElement = element;
  }
}

customElements.define('cart-notification', CartNotification);
