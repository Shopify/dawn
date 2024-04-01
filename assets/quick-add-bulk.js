
if (!customElements.get('quick-add-bulk')) {
  customElements.define(
    'quick-add-bulk',
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
        const pageParams = new URLSearchParams(window.location.search);
        window.pageNumber = decodeURIComponent(pageParams.get('page') || '');
      }


      connectedCallback() {
        this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, (event) => {
          if (event.source === "quick-add") {
            return;
          }
          // If its another section that made the update
          this.onCartUpdate().then(() => {
            this.listenForActiveInput();
            this.listenForKeydown();
          });
        });
      }

      disconnectedCallback() {
        if (this.cartUpdateUnsubscriber) {
          this.cartUpdateUnsubscriber();
        }
      }

      getInput() {
        return this.querySelector('quantity-input input');
      }

      selectProgressBar() {
        return this.querySelector('.progress-bar-container');
      }

      listenForActiveInput() {
        if (!this.classList.contains('hidden')) {
          this.getInput().addEventListener('focusin', (event) => event.target.select());
        }
        this.isEnterPressed = false;
      }

      listenForKeydown() {
        this.getInput().addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
            this.getInput().blur();
            this.isEnterPressed = true;
          }
        });
      }

      resetQuantityInput(id) {
        const input = document.getElementById(id);
        input.value = input.getAttribute('value');
        this.isEnterPressed = false;
      }

      cleanErrorMessageOnType(event) {
        event.target.addEventListener('keypress', () => {
          event.target.setCustomValidity('');
        }, { once: true });
      }

      onCartUpdate() {
        return new Promise((resolve, reject) => {
          fetch(`${this.getSectionsUrl()}?section_id=${this.closest('.collection').dataset.id}`)
            .then((response) => response.text())
            .then((responseText) => {
              const html = new DOMParser().parseFromString(responseText, 'text/html');
              const sourceQty = html.querySelector(`#quick-add-bulk-${this.dataset.id}-${this.closest('.collection').dataset.id}`);
              if (sourceQty) {
                this.innerHTML = sourceQty.innerHTML;
              }
              resolve();
            })
            .catch(e => {
              console.error(e);
              reject(e);
            });
        });
      }

      updateCart(event) {
        this.lastActiveInputId = event.target.getAttribute('data-index');
        this.quantity = this.querySelector('quantity-input')
        // this.quantity.classList.add('loading');
        this.selectProgressBar().classList.remove('hidden');
        const body = JSON.stringify({
          quantity: event.target.value,
          id: event.target.getAttribute('data-index'),
          sections: this.getSectionsToRender().map((section) => section.section),
          sections_url: this.getSectionsUrl()
        });

        fetch(`${routes.cart_change_url}`, { ...fetchConfig('javascript'), ...{ body } })
          .then((response) => {
            return response.text();
          })
          .then((state) => {
            const parsedState = JSON.parse(state);

            if (parsedState.description || parsedState.errors) {
              event.target.setCustomValidity(parsedState.description);
              event.target.reportValidity();
              this.resetQuantityInput(event.target.id);
              this.selectProgressBar().classList.add('hidden');
              event.target.select();
              this.cleanErrorMessageOnType(event);
              return;
            }

            this.renderSections(parsedState);

            publish(PUB_SUB_EVENTS.cartUpdate, { source: "quick-add", cartData: parsedState });

          }).catch((error) => {
            console.log(error, 'error')
          })
      }

      addToCart(event) {
        this.selectProgressBar().classList.remove('hidden');
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
              event.target.setCustomValidity(parsedState.description);
              event.target.reportValidity();
              this.resetQuantityInput(event.target.id);
              this.selectProgressBar().classList.add('hidden');
              event.target.select();
              this.cleanErrorMessageOnType(event);
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
            id: `quick-add-bulk-${this.dataset.id}-${this.closest('.collection').dataset.id}`,
            section: this.closest('.collection').dataset.id,
            selector: `#quick-add-bulk-${this.dataset.id}-${this.closest('.collection').dataset.id}`
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

      getSectionsUrl() {
        if (window.pageNumber) {
          return `${window.location.pathname}?page=${window.pageNumber}`
        } else {
          return `${window.location.pathname}`
        }      
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
);
}
