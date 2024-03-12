class QuickOrderListRemoveButton extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', (event) => {
      event.preventDefault();
      const quickOrderList = this.closest('quick-order-list');
      quickOrderList.updateQuantity(this.dataset.index, 0);
    });
  }
}

customElements.define('quick-order-list-remove-button', QuickOrderListRemoveButton);

class QuickOrderListRemoveAllButton extends HTMLElement {
  constructor() {
    super();
    const allVariants = Array.from(document.querySelectorAll('[data-quantity-variant-id]'));
    const items = {}
    let hasVariantsInCart = false;
    this.quickOrderList = this.closest('quick-order-list');
    allVariants.forEach((variant) => {
      const cartQty = parseInt(variant.dataset.cartQuantity);
      if (cartQty > 0) {
        hasVariantsInCart = true;
        items[parseInt(variant.dataset.quantityVariantId)] = 0;
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

    this.addEventListener('click', (event) => {
      event.preventDefault();
      if (this.dataset.action === this.actions.confirm) {
        this.toggleConfirmation(false, true);
      } else if (this.dataset.action === this.actions.remove) {
        this.quickOrderList.updateMultipleQty(items);
        this.toggleConfirmation(true, false);
      } else if (this.dataset.action === this.actions.cancel) {
        this.toggleConfirmation(true, false);
      }
    });
  }

  toggleConfirmation(showConfirmation, showInfo) {
    this.quickOrderList.querySelector('.quick-order-list-total__confirmation').classList.toggle('hidden', showConfirmation);
    this.quickOrderList.querySelector('.quick-order-list-total__info').classList.toggle('hidden', showInfo)
  }
}

customElements.define('quick-order-list-remove-all-button', QuickOrderListRemoveAllButton);


class QuickOrderList extends HTMLElement {
  constructor() {
    super();
    this.cart = document.querySelector('cart-drawer');
    this.actions = {
      add: 'ADD',
      update: 'UPDATE'
    }
    this.defineInputsAndQuickOrderTable();
    this.quickOrderListId = 'quick-order-list'
    this.variantItemStatusElement = document.getElementById('shopping-cart-variant-item-status');
    const form = this.querySelector('form');
    this.inputFieldHeight = this.querySelector('.variant-item__quantity-wrapper').offsetHeight;
    this.stickyHeaderElement = document.querySelector('sticky-header');

    if (this.stickyHeaderElement) {
      this.stickyHeader = {
        height: this.stickyHeaderElement.offsetHeight,
        type: `${this.stickyHeaderElement.getAttribute('data-sticky-type')}`
      };
    }

    this.totalBarPosition = window.innerHeight - this.querySelector('.quick-order-list__total').offsetHeight;

    window.addEventListener('resize', () => {
      this.totalBarPosition = window.innerHeight - this.querySelector('.quick-order-list__total').offsetHeight;
      this.stickyHeader.height = this.stickyHeaderElement ? this.stickyHeaderElement.offsetHeight: null;
    });

    form.addEventListener('submit', this.onSubmit.bind(this));
    const debouncedOnChange = debounce((event) => {
      this.onChange(event);
    }, ON_CHANGE_DEBOUNCE_TIMER);
    this.addEventListener('change', debouncedOnChange.bind(this));
  }

  cartUpdateUnsubscriber = undefined;

  onSubmit(event) {
    event.preventDefault();
  }

  connectedCallback() {
    this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, (event) => {
      if (event.source === this.quickOrderListId) {
        return;
      }
      // If its another section that made the update
      this.onCartUpdate();
    });
    this.sectionId = this.dataset.id;
  }

  disconnectedCallback() {
    if (this.cartUpdateUnsubscriber) {
      this.cartUpdateUnsubscriber();
    }
  }

  defineInputsAndQuickOrderTable() {
    this.allInputsArray = Array.from(this.querySelectorAll('input[type="number"]'));
    this.quickOrderListTable = this.querySelector('.quick-order-list__table');
    this.quickOrderListTable.addEventListener('focusin', this.switchVariants.bind(this));
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
    fetch(`${window.location.pathname}?section_id=${this.sectionId}`)
      .then((response) => response.text())
      .then((responseText) => {
        const html = new DOMParser().parseFromString(responseText, 'text/html');
        const sourceQty = html.querySelector(this.quickOrderListId);
        this.innerHTML = sourceQty.innerHTML;
      })
      .catch(e => {
        console.error(e);
      });
  }

  getSectionsToRender() {
    return [
      {
        id: this.quickOrderListId,
        section: document.getElementById(this.quickOrderListId).dataset.id,
        selector: '.js-contents'
      },
      {
        id: 'cart-icon-bubble',
        section: 'cart-icon-bubble',
        selector: '.shopify-section'
      },
      {
        id: 'quick-order-list-live-region-text',
        section: 'cart-live-region-text',
        selector: '.shopify-section'
      },
      {
        id: 'quick-order-list-total',
        section: document.getElementById(this.quickOrderListId).dataset.id,
        selector: '.quick-order-list__total'
      },
      {
        id: 'CartDrawer',
        selector: '#CartDrawer',
        section: 'cart-drawer'
      }
    ];
  }

  renderSections(parsedState, id) {
    this.getSectionsToRender().forEach((section => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement && sectionElement.parentElement && sectionElement.parentElement.classList.contains('drawer')) {
        parsedState.items.length > 0 ? sectionElement.parentElement.classList.remove('is-empty') : sectionElement.parentElement.classList.add('is-empty');
        setTimeout(() => {
          document.querySelector('#CartDrawer-Overlay').addEventListener('click', this.cart.close.bind(this.cart));
        });
      }
      const elementToReplace = sectionElement && sectionElement.querySelector(section.selector) ? sectionElement.querySelector(section.selector) : sectionElement;
      if (elementToReplace) {
        if (section.selector === '.js-contents' && id !== undefined) {
          elementToReplace.querySelector(`#Variant-${id}`).innerHTML =
          this.getSectionInnerHTML(parsedState.sections[section.section], `#Variant-${id}`);
        } else {
          elementToReplace.innerHTML = this.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
        }
      }
    }));
    this.defineInputsAndQuickOrderTable();
  }

  switchVariants(event) {
    if (event.target.tagName !== 'INPUT') {
      return;
    }
    this.variantListInput = event.target;
    this.variantListInput.select()
    this.variantListInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.target.blur();
        const currentIndex = this.allInputsArray.indexOf(e.target);

        if (!e.shiftKey) {
          const nextIndex = currentIndex + 1;
          const nextVariant = this.allInputsArray[nextIndex] || this.allInputsArray[0];
          nextVariant.select();
        } else {
          const previousIndex = currentIndex - 1;
          const previousVariant = this.allInputsArray[previousIndex] || this.allInputsArray[this.allInputsArray.length - 1];
          previousVariant.select();
        }
      }
    });

    const inputTopBorder = this.variantListInput.getBoundingClientRect().top;
    const inputBottomBorder = this.variantListInput.getBoundingClientRect().bottom;
    const stickyHeaderBottomBorder = this.stickyHeaderElement && this.stickyHeaderElement.getBoundingClientRect().bottom;
    const totalBarCrossesInput = inputBottomBorder > this.totalBarPosition;
    const inputOutsideOfViewPort = inputBottomBorder < this.inputFieldHeight;
    const stickyHeaderCrossesInput = this.stickyHeaderElement && this.stickyHeader.type !== 'on-scroll-up' && this.stickyHeader.height > inputTopBorder;
    const stickyHeaderScrollupCrossesInput = this.stickyHeaderElement && this.stickyHeader.type === 'on-scroll-up' && this.stickyHeader.height > inputTopBorder && stickyHeaderBottomBorder > 0;

    if (totalBarCrossesInput || inputOutsideOfViewPort || stickyHeaderCrossesInput || stickyHeaderScrollupCrossesInput) {
      this.variantListInput.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }

  updateMultipleQty(items) {
    this.querySelector('.variant-remove-total .loading__spinner').classList.remove('hidden');

    const body = JSON.stringify({
      updates: items,
      sections: this.getSectionsToRender().map((section) => section.section),
      sections_url: window.location.pathname
    });

    this.updateMessage();
    this.setErrorMessage();

    fetch(`${routes.cart_update_url}`, { ...fetchConfig(), ...{ body } })
      .then((response) => {
        return response.text();
      })
      .then((state) => {
        const parsedState = JSON.parse(state);
        this.renderSections(parsedState);
      }).catch(() => {
        this.setErrorMessage(window.cartStrings.error);
      })
      .finally(() => {
        this.querySelector('.variant-remove-total .loading__spinner').classList.add('hidden');
      });
  }

  updateQuantity(id, quantity, name, action) {
    this.toggleLoading(id, true);

    let routeUrl = routes.cart_change_url;
    let body = JSON.stringify({
      quantity,
      id,
      sections: this.getSectionsToRender().map((section) => section.section),
      sections_url: window.location.pathname
    });
    let fetchConfigType;
    if (action === this.actions.add) {
      fetchConfigType = 'javascript';
      routeUrl = routes.cart_add_url;
      body = JSON.stringify({
        items: [
          {
            quantity: parseInt(quantity),
            id: parseInt(id)
          }
        ],
        sections: this.getSectionsToRender().map((section) => section.section),
        sections_url: window.location.pathname
      });
    }

    this.updateMessage();
    this.setErrorMessage();

    fetch(`${routeUrl}`, { ...fetchConfig(fetchConfigType), ...{ body } })
      .then((response) => {
        return response.text();
      })
      .then((state) => {
        const parsedState = JSON.parse(state);
        const quantityElement = document.getElementById(`Quantity-${id}`);
        const items = document.querySelectorAll('.variant-item');

        if (parsedState.description || parsedState.errors) {
          const variantItem = document.querySelector(`[id^="Variant-${id}"] .variant-item__totals.small-hide .loading__spinner`);
          variantItem.classList.add('loading__spinner--error');
          this.resetQuantityInput(id, quantityElement);
          if (parsedState.errors) {
            this.updateLiveRegions(id, parsedState.errors);
          } else {
            this.updateLiveRegions(id, parsedState.description);
          }
          return;
        }

        this.classList.toggle('is-empty', parsedState.item_count === 0);

        this.renderSections(parsedState, id);

        let hasError = false;

        const currentItem = parsedState.items.find((item) => item.variant_id === parseInt(id));
        const updatedValue = currentItem ? currentItem.quantity : undefined;
        if (updatedValue && updatedValue !== quantity) {
          this.updateError(updatedValue, id);
          hasError = true;
        }

        publish(PUB_SUB_EVENTS.cartUpdate, { source: this.quickOrderListId, cartData: parsedState });

        if (hasError) {
          this.updateMessage();
        } else if (action === this.actions.add) {
          this.updateMessage(parseInt(quantity))
        } else if (action === this.actions.update) {
          this.updateMessage(parseInt(quantity - quantityElement.dataset.cartQuantity))
        } else {
          this.updateMessage(-parseInt(quantityElement.dataset.cartQuantity))
        }
      }).catch((error) => {
        this.querySelectorAll('.loading__spinner').forEach((overlay) => overlay.classList.add('hidden'));
        this.resetQuantityInput(id);
        console.error(error);
        this.setErrorMessage(window.cartStrings.error);
      })
      .finally(() => {
        this.toggleLoading(id);
      });
  }

  resetQuantityInput(id, quantityElement) {
    const input = quantityElement ?? document.getElementById(`Quantity-${id}`);
    input.value = input.getAttribute('value');
  }

  setErrorMessage(message = null) {
    this.errorMessageTemplate = this.errorMessageTemplate ?? document.getElementById(`QuickOrderListErrorTemplate-${this.sectionId}`).cloneNode(true);
    const errorElements = document.querySelectorAll('.quick-order-list-error');

    errorElements.forEach((errorElement) => {
      errorElement.innerHTML = '';
      if (!message) return;
      const updatedMessageElement = this.errorMessageTemplate.cloneNode(true);
      updatedMessageElement.content.querySelector('.quick-order-list-error-message').innerText = message;
      errorElement.appendChild(updatedMessageElement.content);
    });
  }

  updateMessage(quantity = null) {
    const messages = this.querySelectorAll('.quick-order-list__message-text');
    const icons = this.querySelectorAll('.quick-order-list__message-icon');

    if (quantity === null || isNaN(quantity)) {
      messages.forEach(message => message.innerHTML = '');
      icons.forEach(icon => icon.classList.add('hidden'));
      return;
    }

    const isQuantityNegative = quantity < 0;
    const absQuantity = Math.abs(quantity);

    const textTemplate = isQuantityNegative
      ? (absQuantity === 1 ? window.quickOrderListStrings.itemRemoved : window.quickOrderListStrings.itemsRemoved)
      : (quantity === 1 ? window.quickOrderListStrings.itemAdded : window.quickOrderListStrings.itemsAdded);

    messages.forEach((msg) => msg.innerHTML = textTemplate.replace('[quantity]', absQuantity));

    if (!isQuantityNegative) {
      icons.forEach((i) => i.classList.remove('hidden'));
    }

  }

  updateError(updatedValue, id) {
    let message = '';
    if (typeof updatedValue === 'undefined') {
      message = window.cartStrings.error;
    } else {
      message = window.cartStrings.quantityError.replace('[quantity]', updatedValue);
    }
    this.updateLiveRegions(id, message);
  }

  updateLiveRegions(id, message) {
    const variantItemErrorDesktop = document.getElementById(`Quick-order-list-item-error-desktop-${id}`);
    const variantItemErrorMobile = document.getElementById(`Quick-order-list-item-error-mobile-${id}`);
    if (variantItemErrorDesktop) {
      variantItemErrorDesktop.querySelector('.variant-item__error-text').innerHTML = message;
      variantItemErrorDesktop.closest('tr').classList.remove('hidden');
    }
    if (variantItemErrorMobile) variantItemErrorMobile.querySelector('.variant-item__error-text').innerHTML = message;

    this.variantItemStatusElement.setAttribute('aria-hidden', true);

    const cartStatus = document.getElementById('quick-order-list-live-region-text');
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
    const quickOrderList = document.getElementById(this.quickOrderListId);
    const quickOrderListItems = this.querySelectorAll(`#Variant-${id} .loading__spinner`);

    if (enable) {
      quickOrderList.classList.add('quick-order-list__container--disabled');
      [...quickOrderListItems].forEach((overlay) => overlay.classList.remove('hidden'));
      this.variantItemStatusElement.setAttribute('aria-hidden', false);
    } else {
      quickOrderList.classList.remove('quick-order-list__container--disabled');
      quickOrderListItems.forEach((overlay) => overlay.classList.add('hidden'));
    }
  }
}

customElements.define('quick-order-list', QuickOrderList);
