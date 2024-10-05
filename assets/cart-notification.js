/**
 * Cart Notification custom element class.
 * @extends HTMLElement
 */
class CartNotification extends HTMLElement {
  constructor() {
    super();

    /** @type {HTMLElement} */
    this.notification = document.getElementById('cart-notification');
    /** @type {HTMLElement} */
    this.header = document.querySelector('sticky-header');
    this.onBodyClick = this.handleBodyClick.bind(this);

    this.notification.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());
    this.querySelectorAll('button[type="button"]').forEach((closeButton) =>
      closeButton.addEventListener('click', this.close.bind(this))
    );
  }

  /**
   * Open the cart notification.
   */
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

  /**
   * Close the cart notification.
   */
  close() {
    this.notification.classList.remove('active');
    document.body.removeEventListener('click', this.onBodyClick);

    removeTrapFocus(this.activeElement);
  }

  /**
   * Replace DOM with parsed state from Sections API.
   * @param {Object} parsedState - The parsed state object from Sections API.
   */
  renderContents(parsedState) {
    this.cartItemKey = parsedState.key;
    this.getSectionsToRender().forEach((section) => {
      document.getElementById(section.id).innerHTML = this.getSectionInnerHTML(
        parsedState.sections[section.id],
        section.selector
      );
    });

    if (this.header) this.header.reveal();
    this.open();
  }

  /**
   * Array of sections to fetch from the Sections API.
   * @returns {Array<Object>} Array of sections to fetch from the Sections API.
   */
  getSectionsToRender() {
    return [
      {
        id: 'cart-notification-product',
        selector: `[id="cart-notification-product-${this.cartItemKey}"]`,
      },
      {
        id: 'cart-notification-button',
      },
      {
        id: 'cart-icon-bubble',
      },
    ];
  }

  /**
   * Gets the inner HTML of a cart section.
   * @param {string} html - The HTML string to parse.
   * @param {string} [selector='.shopify-section'] - The selector to query for.
   * @returns {string} The inner HTML of the matched section.
   */
  getSectionInnerHTML(html, selector = '.shopify-section') {
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector).innerHTML;
  }

  /**
   * Handle body click events to close the cart notification if clicked outside.
   * @param {MouseEvent} evt - The click event.
   */
  handleBodyClick(evt) {
    const target = evt.target;
    if (target !== this.notification && !target.closest('cart-notification')) {
      const disclosure = target.closest('details-disclosure, header-menu');
      this.activeElement = disclosure ? disclosure.querySelector('summary') : null;
      this.close();
    }
  }

  /**
   * Sets the active element.
   * @param {HTMLElement} element - The element to set as active.
   */
  setActiveElement(element) {
    this.activeElement = element;
  }
}

customElements.define('cart-notification', CartNotification);
