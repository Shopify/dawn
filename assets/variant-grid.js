class VariantGridRemoveButton extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('click', (event) => {
      event.preventDefault();
      const cartItems = this.closest('variant-grid-items');
      cartItems.updateQuantity(this.dataset.index, 0);
    });
  }
}

customElements.define('variant-grid-remove-button', VariantGridRemoveButton);

class VariantGridItems extends HTMLElement {
  constructor() {
    super();
    this.variantItemStatusElement = document.getElementById('shopping-cart-variant-item-status');
    const debouncedOnChange = debounce((event) => {
      this.onChange(event);
    }, ON_CHANGE_DEBOUNCE_TIMER);
    this.addEventListener('change', debouncedOnChange.bind(this));
  }

  cartUpdateUnsubscriber = undefined;

  connectedCallback() {
    this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, (event) => {
      if (event.source === 'variant-grid-items') {
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
    fetch(`${window.location.pathname}?section_id=variant-grid`)
      .then((response) => response.text())
      .then((responseText) => {
        const html = new DOMParser().parseFromString(responseText, 'text/html');
        const sourceQty = html.querySelector('variant-grid-items');
        this.innerHTML = sourceQty.innerHTML;
      })
      .catch(e => {
        console.error(e);
      });
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
        id: 'variantgrid-total',
        section: document.getElementById('variant-grid').dataset.id,
        selector: '.variantgrid-total'
      }
    ];
  }

  updateQuantity(id, quantity, name, action) {
    this.enableLoading(id);

    const body = JSON.stringify({
      quantity,
      id,
      sections: this.getSectionsToRender().map((section) => section.section),
      sections_url: window.location.pathname
    });
    let routeUrl = routes.cart_change_url
    if (action === 'ADD') {
      routeUrl = routes.cart_add_url
    }

    fetch(`${routeUrl}`, { ...fetchConfig(), ...{ body } })
      .then((response) => {
        return response.text();
      })
      .then((state) => {
        const parsedState = JSON.parse(state);
        const quantityElement = document.getElementById(`Quantity-${id}`);
        const items = document.querySelectorAll('.variant-item');

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
        if (action === 'ADD') {
          const updatedValue = parsedState.quantity ? parsedState.quantity : undefined;
          if (parsedState.quantity !== parseInt(quantityElement.value)) {
            if (typeof updatedValue === 'undefined') {
              message = window.cartStrings.error;
            } else {
              message = window.cartStrings.quantityError.replace('[quantity]', updatedValue);
            }
            this.updateLiveRegions(id, message);
          }

        } else {
          const currentItem = parsedState.items.find((item) => item.variant_id === parseInt(id));
          const updatedValue = currentItem ? currentItem.quantity : undefined;

          if (items.length === parsedState.items.length && updatedValue !== parseInt(quantityElement.value)) {
            if (typeof updatedValue === 'undefined') {
              message = window.cartStrings.error;
            } else {
              message = window.cartStrings.quantityError.replace('[quantity]', updatedValue);
            }
            this.updateLiveRegions(id, message);
          }
        }

        const variantItem = document.getElementById(`Variant-${id}`);
        if (variantItem && variantItem.querySelector(`[name="${name}"]`)) {
          variantItem.querySelector(`[name="${name}"]`).focus();
        }
        publish(PUB_SUB_EVENTS.cartUpdate, {source: 'variant-grid-items'});
      }).catch(() => {
        this.querySelectorAll('.loading-overlay').forEach((overlay) => overlay.classList.add('hidden'));
        const errors = document.getElementById('variantgrid-errors');
        errors.textContent = window.cartStrings.error;
      })
      .finally(() => {
        this.disableLoading(id);
      });

  }

  updateLiveRegions(id, message) {
    console.log(id, message, 'hehehhe')
    const variantItemError = document.getElementById(`Variant-item-error-${id}`);
    if (variantItemError) variantItemError.querySelector('.variant-grid__error-text').innerHTML = message;

    this.variantItemStatusElement.setAttribute('aria-hidden', true);

    const cartStatus = document.getElementById('cart-live-region-text');
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
    const variantGrid = document.getElementById('variant-grid');
    variantGrid.classList.add('cart__items--disabled');

    const variantGridItems = this.querySelectorAll(`#Variant-${id} .loading-overlay`);

    [...variantGridItems].forEach((overlay) => overlay.classList.remove('hidden'));

    document.activeElement.blur();
    this.variantItemStatusElement.setAttribute('aria-hidden', false);
  }

  disableLoading(id) {
    const variantGrid = document.getElementById('variant-grid');
    variantGrid.classList.remove('cart__items--disabled');

    const variantGridItems = this.querySelectorAll(`#Variant-${id} .loading-overlay`);

    variantGridItems.forEach((overlay) => overlay.classList.add('hidden'));
  }
}

customElements.define('variant-grid-items', VariantGridItems);
