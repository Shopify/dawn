
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

  onCartUpdate() {
    fetch(`${window.location.pathname}?section_id=main-collection-product-grid`)
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
          // const errorElement = document.querySelector(`#Quick-add-bulk-item-error-desktop-${event.target.getAttribute('data-index')}`)
          // errorElement.classList.remove('hidden')
          // errorElement.querySelector('.variant-bulk__error-text').innerHTML = parsedState.description
         // Update errors 
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
          console.log('error add to cart', parsedState)
          // Error handling
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
        section: 'main-collection-product-grid',
        selector: `#quick-add-bulk-${this.dataset.id}`
      },
      {
        id: 'cart-icon-bubble',
        section: 'cart-icon-bubble',
        selector: '.cart-count-bubble'
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
      const sectionElement = document.querySelector(section.selector);
      const elementToReplace = sectionElement && sectionElement.querySelector(section.selector) ? sectionElement.querySelector(section.selector) : sectionElement;
      if (elementToReplace) {
        elementToReplace.innerHTML =
          this.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
      }
    }));

  }

}
customElements.define('quick-add-bulk', QuickAddBulk);