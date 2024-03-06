
class QuickAddBulk extends HTMLElement {
  constructor() {
    super();
    const debouncedOnChange = debounce((event) => {
      if (parseInt(event.target.dataset.cartQuantity) === 0) {
        this.addToCart(event);
      } else {
        this.updateCart(event);
      }
    }, ON_CHANGE_DEBOUNCE_TIMER);
    this.addEventListener('change', debouncedOnChange.bind(this));
    this.listenForActiveInput();
    this.listenForKeydown();
    this.lastActiveInputId = null;
  }


  connectedCallback() {
    this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, (event) => {
      if (event.source === "quick-add") {
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

  listenForActiveInput() {
    if (!this.classList.contains('hidden')) {
      this.querySelector('quantity-input input').addEventListener('focusin', (event) => event.target.select());
    }
    this.isEnterPressed = false;
  }

  listenForKeydown() {
    this.querySelector('quantity-input input').addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        this.querySelector('quantity-input input').blur();
        this.isEnterPressed = true;
      }
    });
  }

  onCartUpdate() {
    fetch(`${window.location.pathname}?section_id=${document.getElementById('product-grid').dataset.id}`)
      .then((response) => response.text())
      .then((responseText) => {
        const html = new DOMParser().parseFromString(responseText, 'text/html');
        const sourceQty = html.querySelector(`#quick-add-bulk-${this.dataset.id}`);
        this.innerHTML = sourceQty.innerHTML;
      })
      .catch(e => {
        console.error(e);
      });
  }

  updateCart(event) {
    this.lastActiveInputId = event.target.getAttribute('data-index');
    this.quantity = this.querySelector('quantity-input')
    // this.quantity.classList.add('loading');
    this.querySelector('.progress-bar-container').classList.remove('hidden');
    const body = JSON.stringify({
      quantity: event.target.value,
      id: event.target.getAttribute('data-index'),
      sections: this.getSectionsToRender().map((section) => section.section)
    });

    fetch(`${routes.cart_change_url}`, { ...fetchConfig('javascript'), ...{ body } })
      .then((response) => {
        return response.text();
      })
      .then((state) => {
        const parsedState = JSON.parse(state);

        if (parsedState.description || parsedState.errors) {
          const errorElement = document.querySelector(`#quick-add-bulk-${event.target.getAttribute('data-index')} .quick-add-bulk-no-variants__error`);
          errorElement.classList.remove('hidden')
          errorElement.querySelector('.quick-add-bulk-no-variants__error-message').innerHTML = parsedState.description
          return;
        }

        this.renderSections(parsedState);

        publish(PUB_SUB_EVENTS.cartUpdate, { source: "quick-add", cartData: parsedState });

      }).catch((error) => {
        console.log(error, 'error')
      })
  }

  addToCart(event) {
    this.querySelector('.progress-bar-container').classList.remove('hidden');
    this.lastActiveInputId = event.target.getAttribute('data-index');
    const body = JSON.stringify({
      items: [
        {
          quantity: parseInt(event.target.value),
          id: parseInt(this.dataset.id)
        }
      ],
      sections: this.getSectionsToRender().map((section) => section.section)
    });

    fetch(`${routes.cart_add_url}`, { ...fetchConfig('javascript'), ...{ body } })
      .then((response) => {
        return response.text();
      })
      .then((state) => {
        const parsedState = JSON.parse(state);
        if (parsedState.description || parsedState.errors) {
          const errorElement = document.querySelector(`#quick-add-bulk-${event.target.getAttribute('data-index')} .quick-add-bulk-no-variants__error`);
          errorElement.classList.remove('hidden')
          errorElement.querySelector('.quick-add-bulk-no-variants__error-message').innerHTML = parsedState.description
          return;
        }

        this.renderSections(parsedState);

        publish(PUB_SUB_EVENTS.cartUpdate, { source: 'quick-add', cartData: parsedState });

      }).catch((error) => {
        console.error(error);
      })
  }

  getSectionsToRender() {
    return [
      {
        id: `quick-add-bulk-${this.dataset.id}`,
        section: document.getElementById('product-grid').dataset.id,
        selector: `#quick-add-bulk-${this.dataset.id}`
      },
      {
        id: 'cart-icon-bubble',
        section: 'cart-icon-bubble',
        selector: '.shopify-section'
      },
      {
        id: 'CartDrawer',
        selector: '#CartDrawer',
        section: 'cart-drawer'
      }
    ];
  }

  getSectionInnerHTML(html, selector) {
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector(selector).innerHTML;
  }

  renderSections(parsedState) {
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
        elementToReplace.innerHTML =
          this.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
      }
    }));

    if (this.isEnterPressed) {
      this.querySelector(`#Quantity-${this.lastActiveInputId}`).select();
    }

    this.listenForActiveInput();
    this.listenForKeydown();
  }
}
customElements.define('quick-add-bulk', QuickAddBulk);
