class VariantGridRemoveButton extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('click', (event) => {
      event.preventDefault();
      const cartItems = this.closest('variantgrid-items');
      cartItems.updateQuantity(this.dataset.index, 0);
    });
  }
}

customElements.define('variantgrid-remove-button', VariantGridRemoveButton);

class VariantGridItems extends HTMLElement {
  constructor() {
    super();
    this.lineItemStatusElement = document.getElementById('shopping-cart-line-item-status') || document.getElementById('CartDrawer-LineItemStatus');
    const debouncedOnChange = debounce((event) => {
      this.onChange(event);
    }, ON_CHANGE_DEBOUNCE_TIMER);
    this.addEventListener('change', debouncedOnChange.bind(this));
  }

  cartUpdateUnsubscriber = undefined;

  connectedCallback() {
    this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, (event) => {
      if (event.source === 'variantgrid-items') {
        return;
      }
      // If its another section that made the update
      this.onCartUpdate();
    });
  }

  disconnectedCallback() {
    if (this.cartUpdateUnsubscriber) {
      this.cartUpdateUnsubscriber();
    }
  }

  onChange(event) {
    const qty = parseInt(event.target.value) - parseInt(event.target.dataset.cartQuantity)
    if (parseInt(event.target.dataset.cartQuantity) > 0) {
      this.updateQuantity(event.target.dataset.index, event.target.value, document.activeElement.getAttribute('name'), 'UPDATE');
    } else {
      this.updateQuantity(event.target.dataset.index, qty, document.activeElement.getAttribute('name'), 'ADD');
    }
  }

  onCartUpdate() {
    // let rootUrl = this.dataset.rootUrl;
    // if (!rootUrl.endsWith("/")) {
    //   rootUrl = rootUrl + "/";
    // }

    // console.log(rootUrl, 'HEY')
    // const variantSectionUrl = `${rootUrl}variants/${variantId}/?section_id=variant-grid`;

    // fetch(`${routes.cart_url}?section_id=main-cart-items`)
    //   .then((response) => response.text())
    //   .then((responseText) => {
    //     const html = new DOMParser().parseFromString(responseText, 'text/html');
    //     const sourceQty = html.querySelector('cart-items');
    //     this.innerHTML = sourceQty.innerHTML;
    //   })
    //   .catch(e => {
    //     console.error(e);
    //   });
  }

  getSectionsToRender() {
    return [
      {
        id: 'variant-grid',
        section: document.getElementById('variant-grid').dataset.id,
        selector: '.js-contents'
      },
      {
        id: 'cart-icon-bubble',
        section: 'cart-icon-bubble',
        selector: '.shopify-section'
      },
      {
        id: 'cart-live-region-text',
        section: 'cart-live-region-text',
        selector: '.shopify-section'
      },
      {
        id: 'total-test',
        section: document.getElementById('variant-grid').dataset.id,
        selector: '.total-variant-grid'
      }
    ];
  }

  updateQuantity(id, quantity, name, action) {
    if (action === 'ADD') {
      this.enableLoading(id);

      const body = JSON.stringify({
        quantity,
        id,
        sections: this.getSectionsToRender().map((section) => section.section),
        sections_url: window.location.pathname
      });
  
      fetch(`${routes.cart_add_url}`, { ...fetchConfig(), ...{ body } })
        .then((response) => {
          return response.text();
        })
        .then((state) => {
          const parsedState = JSON.parse(state);
          const quantityElement = document.getElementById(`Quantity-${id}`);
          const items = document.querySelectorAll('.cart-item');
  
          if (parsedState.errors) {
            quantityElement.value = quantityElement.getAttribute('value');
            this.updateLiveRegions(id, parsedState.errors);
            return;
          }
  
          this.classList.toggle('is-empty', parsedState.item_count === 0);
  
          this.getSectionsToRender().forEach((section => {
            const elementToReplace =
              document.getElementById(section.id).querySelector(section.selector) || document.getElementById(section.id);
            elementToReplace.innerHTML =
              this.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
          }));
          let message = '';
          if (parsedState.quantity !== parseInt(quantityElement.value)) {
            if (typeof updatedValue === 'undefined') {
              message = window.cartStrings.error;
            } else {
              message = window.cartStrings.quantityError.replace('[quantity]', updatedValue);
            }
          }
          this.updateLiveRegions(id, message);
  
          const lineItem = document.getElementById(`CartItem-${id}`);
          if (lineItem && lineItem.querySelector(`[name="${name}"]`)) {
            lineItem.querySelector(`[name="${name}"]`).focus();
          }
          publish(PUB_SUB_EVENTS.cartUpdate, {source: 'cart-items'});
        }).catch(() => {
          this.querySelectorAll('.loading-overlay').forEach((overlay) => overlay.classList.add('hidden'));
          const errors = document.getElementById('variantgrid-errors');
          errors.textContent = window.cartStrings.error;
        })
        .finally(() => {
          this.disableLoading(id);
        });
    } else {
      this.enableLoading(id);

      const body = JSON.stringify({
        id,
        quantity,
        sections: this.getSectionsToRender().map((section) => section.section),
        sections_url: window.location.pathname
      });
  
      fetch(`${routes.cart_change_url}`, { ...fetchConfig(), ...{ body } })
        .then((response) => {
          return response.text();
        })
        .then((state) => {
          const parsedState = JSON.parse(state);
          const quantityElement = document.getElementById(`Quantity-${id}`);
          const items = document.querySelectorAll('.cart-item');
          if (parsedState.errors) {
            quantityElement.value = quantityElement.getAttribute('value');
            this.updateLiveRegions(id, parsedState.errors);
            return;
          }
          this.classList.toggle('is-empty', parsedState.item_count === 0);
  
          this.getSectionsToRender().forEach((section => {
            const elementToReplace =
              document.getElementById(section.id).querySelector(section.selector) || document.getElementById(section.id);
            elementToReplace.innerHTML =
              this.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
          }));

          const currentItem = parsedState.items.find((item) => item.variant_id === parseInt(id))
          const updatedValue = currentItem ? currentItem.quantity : undefined;
          let message = '';
          if (items.length === parsedState.items.length && updatedValue !== parseInt(quantityElement.value)) {
            if (typeof updatedValue === 'undefined') {
              message = window.cartStrings.error;
            } else {
              message = window.cartStrings.quantityError.replace('[quantity]', updatedValue);
            }
          }
          this.updateLiveRegions(id, message);
  
          const lineItem = document.getElementById(`CartItem-${id}`);
          if (lineItem && lineItem.querySelector(`[name="${name}"]`)) {
            lineItem.querySelector(`[name="${name}"]`).focus();
          }
          publish(PUB_SUB_EVENTS.cartUpdate, {source: 'cart-items'});
        }).catch(() => {
          this.querySelectorAll('.loading-overlay').forEach((overlay) => overlay.classList.add('hidden'));
          const errors = document.getElementById('variantgrid-errors');
          errors.textContent = window.cartStrings.error;
        })
        .finally(() => {
          this.disableLoading(id);
        });
    }

  }

  updateLiveRegions(line, message) {
    const lineItemError = document.getElementById(`Line-item-error-${line}`) || document.getElementById(`CartDrawer-LineItemError-${line}`);
    if (lineItemError) lineItemError.querySelector('.cart-item__error-text').innerHTML = message;

    this.lineItemStatusElement.setAttribute('aria-hidden', true);

    const cartStatus = document.getElementById('cart-live-region-text') || document.getElementById('CartDrawer-LiveRegionText');
    cartStatus.setAttribute('aria-hidden', false);

    setTimeout(() => {
      cartStatus.setAttribute('aria-hidden', true);
    }, 1000);
  }

  getSectionInnerHTML(html, selector) {
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector(selector).innerHTML;
  }

  enableLoading(id) {
    const mainCartItems = document.getElementById('variant-grid');
    mainCartItems.classList.add('cart__items--disabled');

    const cartItemElements = this.querySelectorAll(`#Variant-${id} .loading-overlay`);

    [...cartItemElements].forEach((overlay) => overlay.classList.remove('hidden'));

    document.activeElement.blur();
    this.lineItemStatusElement.setAttribute('aria-hidden', false);
  }

  disableLoading(id) {
    const mainCartItems = document.getElementById('variant-grid') || document.getElementById('CartDrawer-CartItems');
    mainCartItems.classList.remove('cart__items--disabled');

    const cartItemElements = this.querySelectorAll(`#Variant-${id} .loading-overlay`);

    cartItemElements.forEach((overlay) => overlay.classList.add('hidden'));
  }
}

customElements.define('variantgrid-items', VariantGridItems);
