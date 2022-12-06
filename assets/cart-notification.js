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

    this.notification.addEventListener('transitionend', () => {
      this.notification.focus();
      trapFocus(this.notification);
    }, { once: true });

    document.body.addEventListener('click', this.onBodyClick);
  }

  close() {
    this.notification.classList.remove('active');

    document.body.removeEventListener('click', this.onBodyClick);

    removeTrapFocus(this.activeElement);
  }

  renderContents(parsedState) {
      this.cartItemKey = parsedState.key;
      this.getSectionsToRender().forEach((section => {
        let innerHtml = this.getSectionInnerHTML(parsedState.sections[section.id], section.selector);

        if (section.id == 'cart-live-region-text')
        {
          this.setNoficationMessage(innerHtml);
          innerHtml = innerHtml.replace(" GBP", "");
          innerHtml = innerHtml.replace("New subtotal: ", "Subtotal<br>");
        }
        
        document.getElementById(section.id).innerHTML = innerHtml;
      }));

      if (this.header) this.header.reveal();
      this.open();
  }

  setNoficationMessage(html) {
    let messageElement = document.getElementById('cart-notification__message');
    if (!messageElement) {
      return;
    }

    let totalPrice = html.match(/New subtotal: £([\d\.]+) GBP/)[1];
    let notificationMessage;
    if (Number(totalPrice) >= 60)
    {
      notificationMessage = 'Congratulations! You are entitled to free nationwide delivery.';
    }
    else
    {
      notificationMessage = 'Buy more and save: get free delivery when buying additional items over £60.';
    }
    messageElement.innerHTML = notificationMessage;
  }

  getSectionsToRender() {
    return [
      {
        id: 'cart-notification-product',
        selector: `[id="cart-notification-product-${this.cartItemKey}"]`,
      },
      {
        id: 'cart-notification-button'
      },
      {
        id: 'cart-icon-bubble'
      },
      {
        id: 'cart-live-region-text'
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
