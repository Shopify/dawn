class VariantListRemoveButton extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', (event) => {
      event.preventDefault();
      const variantList = this.closest('variant-list');
      variantList.updateQuantity(this.dataset.index, 0);
    });
  }
}

customElements.define('variant-list-remove-button', VariantListRemoveButton);

class VariantListRemoveAllButton extends HTMLElement {
  constructor() {
    super();
    const allVariants = Array.from(document.querySelectorAll('[data-variant-id]'));
    const items = {}
    let hasVariantsInCart = false;
    this.variantList = this.closest('variant-list');

    allVariants.forEach((variant) => {
      const cartQty = parseInt(variant.dataset.cartQty);
      if (cartQty > 0) {
        hasVariantsInCart = true;
        items[parseInt(variant.dataset.variantId)] = 0;
      }
    });

    if (!hasVariantsInCart) {
      this.classList.add('hidden');
    }

    this.actions = {
      confirm: 'confirm',
      remove: 'remove',
      cancel: 'cancel'
    }

    this.actions = {
      confirm: 'confirm',
      remove: 'remove',
      cancel: 'cancel'
    }

    this.addEventListener('click', (event) => {
      event.preventDefault();
      if (this.dataset.action === this.actions.confirm) {
        this.toggleConfirmation(false, true);
      } else if (this.dataset.action === this.actions.remove) {
        this.variantList.updateMultipleQty(items);
        this.toggleConfirmation(true, false);
      } else if (this.dataset.action === this.actions.cancel) {
        this.toggleConfirmation(true, false);
      }
    });
  }

  toggleConfirmation(showConfirmation, showInfo) {
    this.variantList.querySelector('.variant-list-total__confirmation').classList.toggle('hidden', showConfirmation);
    this.variantList.querySelector('.variant-list-total__info').classList.toggle('hidden', showInfo)
  }
}

customElements.define('variant-list-remove-all-button', VariantListRemoveAllButton);


class VariantList extends HTMLElement {
  constructor() {
    super();
    this.actions = {
      add: 'ADD',
      update: 'UPDATE'
    }
    this.variantListId = 'variant-list'
    this.variantItemStatusElement = document.getElementById('shopping-cart-variant-item-status');
    const debouncedOnChange = debounce((event) => {
      this.onChange(event);
    }, ON_CHANGE_DEBOUNCE_TIMER);
    this.addEventListener('change', debouncedOnChange.bind(this));
  }

  cartUpdateUnsubscriber = undefined;

  connectedCallback() {
    this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, (event) => {
      if (event.source === this.variantListId) {
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
    const inputValue = parseInt(event.target.value);
    const cartQuantity = parseInt(event.target.dataset.cartQuantity);
    const index = event.target.dataset.index;
    const name = document.activeElement.getAttribute('name');

    const quantity = inputValue - cartQuantity;

    if (cartQuantity > 0) {
      this.updateQuantity(index, inputValue, name, this.actions.update);
    } else {
      this.updateQuantity(index, quantity, name, this.actions.add);
    }
  }

  onCartUpdate() {
    fetch(`${window.location.pathname}?section_id=variant-list`)
      .then((response) => response.text())
      .then((responseText) => {
        const html = new DOMParser().parseFromString(responseText, 'text/html');
        const sourceQty = html.querySelector(this.variantListId);
        this.innerHTML = sourceQty.innerHTML;
      })
      .catch(e => {
        console.error(e);
      });
  }

  getSectionsToRender() {
    return [
      {
        id: this.variantListId,
        section: document.getElementById(this.variantListId).dataset.id,
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
        id: 'variant-list-total',
        section: document.getElementById(this.variantListId).dataset.id,
        selector: '.variant-list__total'
      }
    ];
  }

  updateMultipleQty(items) {
    this.querySelector('.variant-remove-total .loading-overlay').classList.remove('hidden');

    const body = JSON.stringify({
      updates: items,
      sections: this.getSectionsToRender().map((section) => section.section),
      sections_url: window.location.pathname
    });

    fetch(`${routes.cart_update_url}`, { ...fetchConfig(), ...{ body } })
      .then((response) => {
        return response.text();
      })
      .then((state) => {
        const parsedState = JSON.parse(state);
        this.getSectionsToRender().forEach((section => {
          const elementToReplace =
            document.getElementById(section.id).querySelector(section.selector) || document.getElementById(section.id);
          elementToReplace.innerHTML =
            this.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
        }));
      }).catch(() => {
        const errors = document.getElementById('variantlist-errors');
        errors.textContent = window.cartStrings.error;
      })
      .finally(() => {
        this.querySelector('.variant-remove-total .loading-overlay').classList.add('hidden');
      });
  }

  updateQuantity(id, quantity, name, action) {
    this.toggleLoading(id, true);

    const body = JSON.stringify({
      quantity,
      id,
      sections: this.getSectionsToRender().map((section) => section.section),
      sections_url: window.location.pathname
    });

    let routeUrl = routes.cart_change_url
    if (action === this.actions.add) {
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

        if (action === this.actions.add) {
          const updatedValue = parsedState.quantity ? parsedState.quantity : undefined;
          if (parsedState.quantity !== parseInt(quantityElement.value)) {
            this.updateError(updatedValue, id, message)
          }
        } else {
          const currentItem = parsedState.items.find((item) => item.variant_id === parseInt(id));
          const updatedValue = currentItem ? currentItem.quantity : undefined;

          if (items.length === parsedState.items.length && updatedValue !== parseInt(quantityElement.value)) {
            this.updateError(updatedValue, id)
          }
        }

        const variantItem = document.getElementById(`Variant-${id}`);
        if (variantItem && variantItem.querySelector(`[name="${name}"]`)) {
          variantItem.querySelector(`[name="${name}"]`).focus();
        }
        publish(PUB_SUB_EVENTS.cartUpdate, { source: this.variantListId });

        if (action === this.actions.add) {
          this.updateMessage(parseInt(quantity))
        } else if (action === this.actions.update) {
          this.updateMessage(parseInt(quantity - quantityElement.dataset.cartQuantity))
        } else {
          this.updateMessage(-parseInt(quantityElement.dataset.cartQuantity))
        }
      }).catch(() => {
        this.querySelectorAll('.loading-overlay').forEach((overlay) => overlay.classList.add('hidden'));
        const errors = document.getElementById('variantlist-errors');
        errors.textContent = window.cartStrings.error;
      })
      .finally(() => {
        this.toggleLoading(id);
      });
  }

  updateMessage(quantity) {
    const messages = this.querySelectorAll('.variant-list__message-text');
    const icons = this.querySelectorAll('.variant-list__message-icon');

    const isQuantityNegative = quantity < 0;
    const absQuantity = Math.abs(quantity);

    const textTemplate = isQuantityNegative
      ? (absQuantity === 1 ? window.variantListStrings.itemRemoved : window.variantListStrings.itemsRemoved)
      : (quantity === 1 ? window.variantListStrings.itemAdded : window.variantListStrings.itemsAdded);

    messages.forEach((msg) => msg.innerHTML = textTemplate.replace('[quantity]', absQuantity));

    if (!isQuantityNegative) {
      icons.forEach((i) => i.classList.remove('hidden'));
    }

  }


  replaceContent() {
    setTimeout(() => {
      this.querySelector('.variant-list__button-text').innerHTML = window.variantListStrings.viewCart;
      this.querySelector('.variant-list__button-icon').classList.add('hidden');
    }, 5000);
  }

  updateError(updatedValue, id, message) {
    if (typeof updatedValue === 'undefined') {
      message = window.cartStrings.error;
    } else {
      message = window.cartStrings.quantityError.replace('[quantity]', updatedValue);
    }
    this.updateLiveRegions(id, message);
  }

  updateLiveRegions(id, message) {
    const variantItemError = document.getElementById(`Variant-item-list-${id}`);
    if (variantItemError) variantItemError.querySelector('.variant-list__error-text').innerHTML = message;

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

  toggleLoading(id, enable) {
    const variantList = document.getElementById(this.variantListId);
    const variantListItems = this.querySelectorAll(`#Variant-${id} .loading-overlay`);

    if (enable) {
      variantList.classList.add('cart__items--disabled');
      [...variantListItems].forEach((overlay) => overlay.classList.remove('hidden'));
      document.activeElement.blur();
      this.variantItemStatusElement.setAttribute('aria-hidden', false);
    } else {
      variantList.classList.remove('cart__items--disabled');
      variantListItems.forEach((overlay) => overlay.classList.add('hidden'));
    }
  }
}

customElements.define('variant-list', VariantList);
