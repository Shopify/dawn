class CartRemoveButton extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', (event) => {
      event.preventDefault();
      const cartItems = this.closest('cart-items') || this.closest('cart-drawer-items');
      cartItems.updateQuantity(this.dataset.index, 0);
    });
  }
}

customElements.define('cart-remove-button', CartRemoveButton);

class CartItems extends HTMLElement {
  constructor() {
    super();
    this.lineItemStatusElement =
      document.getElementById('shopping-cart-line-item-status') || document.getElementById('CartDrawer-LineItemStatus');

    const debouncedOnChange = debounce((event) => {
      this.onChange(event);
    }, ON_CHANGE_DEBOUNCE_TIMER);

    this.addEventListener('change', debouncedOnChange.bind(this));
  }

  cartUpdateUnsubscriber = undefined;

  connectedCallback() {
    this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, (event) => {
      if (event.source === 'cart-items') {
        return;
      }
      this.onCartUpdate();
    });
  }

  disconnectedCallback() {
    if (this.cartUpdateUnsubscriber) {
      this.cartUpdateUnsubscriber();
    }
  }

  onChange(event) {
    this.updateQuantity(
      event.target.dataset.index,
      event.target.value,
      document.activeElement.getAttribute('name'),
      event.target.dataset.quantityVariantId
    );
  }

  onCartUpdate() {
    if (this.tagName === 'CART-DRAWER-ITEMS') {
      fetch(`${routes.cart_url}?section_id=cart-drawer`)
        .then((response) => response.text())
        .then((responseText) => {
          const html = new DOMParser().parseFromString(responseText, 'text/html');
          const selectors = ['cart-drawer-items', '.cart-drawer__footer'];
          for (const selector of selectors) {
            const targetElement = document.querySelector(selector);
            const sourceElement = html.querySelector(selector);
            if (targetElement && sourceElement) {
              targetElement.replaceWith(sourceElement);
            }
          }
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      fetch(`${routes.cart_url}?section_id=main-cart-items`)
        .then((response) => response.text())
        .then((responseText) => {
          const html = new DOMParser().parseFromString(responseText, 'text/html');
          const sourceQty = html.querySelector('cart-items');
          this.innerHTML = sourceQty.innerHTML;
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }

  getSectionsToRender() {
    return [
      {
        id: 'main-cart-items',
        section: document.getElementById('main-cart-items').dataset.id,
        selector: '.js-contents',
      },
      {
        id: 'cart-icon-bubble',
        section: 'cart-icon-bubble',
        selector: '.shopify-section',
      },
      {
        id: 'cart-live-region-text',
        section: 'cart-live-region-text',
        selector: '.shopify-section',
      },
      {
        id: 'main-cart-footer',
        section: document.getElementById('main-cart-footer').dataset.id,
        selector: '.js-contents',
      },
    ];
  }

  updateQuantity(line, quantity, name, variantId) {
    this.enableLoading(line);

    const body = JSON.stringify({
      line,
      quantity,
      sections: this.getSectionsToRender().map((section) => section.section),
      sections_url: window.location.pathname,
    });

    fetch(`${routes.cart_change_url}`, { ...fetchConfig(), ...{ body } })
      .then((response) => {
        return response.text();
      })
      .then((state) => {
        const parsedState = JSON.parse(state);
        const quantityElement =
          document.getElementById(`Quantity-${line}`) || document.getElementById(`Drawer-quantity-${line}`);
        const items = document.querySelectorAll('.cart-item');

        if (parsedState.errors) {
          quantityElement.value = quantityElement.getAttribute('value');
          this.updateLiveRegions(line, parsedState.errors);
          return;
        }

        this.classList.toggle('is-empty', parsedState.item_count === 0);
        const cartDrawerWrapper = document.querySelector('cart-drawer');
        const cartFooter = document.getElementById('main-cart-footer');
        const itemsContainer = document.getElementById('cart-items-container');

        if (itemsContainer) itemsContainer.classList.toggle('is-empty', parsedState.item_count === 0);
        if (cartFooter) cartFooter.classList.toggle('is-empty', parsedState.item_count === 0);
        if (cartDrawerWrapper) cartDrawerWrapper.classList.toggle('is-empty', parsedState.item_count === 0);

        this.getSectionsToRender().forEach((section) => {
          const elementToReplace =
            document.getElementById(section.id).querySelector(section.selector) || document.getElementById(section.id);
          elementToReplace.innerHTML = this.getSectionInnerHTML(
            parsedState.sections[section.section],
            section.selector
          );
        });
        const updatedValue = parsedState.items[line - 1] ? parsedState.items[line - 1].quantity : undefined;
        let message = '';
        if (items.length === parsedState.items.length && updatedValue !== parseInt(quantityElement.value)) {
          if (typeof updatedValue === 'undefined') {
            message = window.cartStrings.error;
          } else {
            message = window.cartStrings.quantityError.replace('[quantity]', updatedValue);
          }
        }
        this.updateLiveRegions(line, message);

        const lineItem =
          document.getElementById(`CartItem-${line}`) || document.getElementById(`CartDrawer-Item-${line}`);
        if (lineItem && lineItem.querySelector(`[name="${name}"]`)) {
          cartDrawerWrapper
            ? trapFocus(cartDrawerWrapper, lineItem.querySelector(`[name="${name}"]`))
            : lineItem.querySelector(`[name="${name}"]`).focus();
        } else if (parsedState.item_count === 0 && cartDrawerWrapper) {
          trapFocus(cartDrawerWrapper.querySelector('.drawer__inner-empty'), cartDrawerWrapper.querySelector('a'));
        } else if (document.querySelector('.cart-item') && cartDrawerWrapper) {
          trapFocus(cartDrawerWrapper, document.querySelector('.cart-item__name'));
        }

        publish(PUB_SUB_EVENTS.cartUpdate, { source: 'cart-items', cartData: parsedState, variantId: variantId });
      })
      .catch(() => {
        this.querySelectorAll('.loading__spinner').forEach((overlay) => overlay.classList.add('hidden'));
        const errors = document.getElementById('cart-errors') || document.getElementById('CartDrawer-CartErrors');
        errors.textContent = window.cartStrings.error;
      })
      .finally(() => {
        this.disableLoading(line);
      });
  }

  updateLiveRegions(line, message) {
    const lineItemError =
      document.getElementById(`Line-item-error-${line}`) || document.getElementById(`CartDrawer-LineItemError-${line}`);
    if (lineItemError) lineItemError.querySelector('.cart-item__error-text').innerHTML = message;

    this.lineItemStatusElement.setAttribute('aria-hidden', true);

    const cartStatus =
      document.getElementById('cart-live-region-text') || document.getElementById('CartDrawer-LiveRegionText');
    cartStatus.setAttribute('aria-hidden', false);

    setTimeout(() => {
      cartStatus.setAttribute('aria-hidden', true);
    }, 1000);
  }

  getSectionInnerHTML(html, selector) {
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector).innerHTML;
  }

  enableLoading(line) {
    const mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');
    mainCartItems.classList.add('cart__items--disabled');

    const cartItemElements = this.querySelectorAll(`#CartItem-${line} .loading__spinner`);
    const cartDrawerItemElements = this.querySelectorAll(`#CartDrawer-Item-${line} .loading__spinner`);

    [...cartItemElements, ...cartDrawerItemElements].forEach((overlay) => overlay.classList.remove('hidden'));

    this.lineItemStatusElement.setAttribute('aria-hidden', false);
  }

  disableLoading(line) {
    const mainCartItems = document.getElementById('main-cart-items') || document.getElementById('CartDrawer-CartItems');
    mainCartItems.classList.remove('cart__items--disabled');

    const cartItemElements = this.querySelectorAll(`#CartItem-${line} .loading__spinner`);
    const cartDrawerItemElements = this.querySelectorAll(`#CartDrawer-Item-${line} .loading__spinner`);

    cartItemElements.forEach((overlay) => overlay.classList.add('hidden'));
    cartDrawerItemElements.forEach((overlay) => overlay.classList.add('hidden'));
  }
}

customElements.define('cart-items', CartItems);
class CartRecommendations extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.lineItemsIds = this.dataset.items.split(', ').filter((o) => !!o);
    this.sectionId = this.dataset.section_id;

    if (!this.initialized) {
      this.initialized = true;
      this.onFetchCartProductRecommendations();
    }
  }

  async onFetchCartProductRecommendations() {
    try {
      const ids = this.lineItemsIds.slice(0, 3); // use only 3 products
      const responses = await Promise.all(
        ids.map(async (id) => {
          const url = `${routes.product_recommendations_url}?section_id=${this.sectionId}&product_id=${id}&limit=5`;
          const resp = await fetch(url);
          return await resp.text();
        })
      );

      const recommendedItems = this.curateCartProductRecommendations(responses);

      this.renderContent(responses[0], recommendedItems);

      this.classList.add('recommendations-loaded');
    } catch (error) {
      console.log('FAILED TO FETCH CART RECOMMENDATIONS', error);
    }
  }

  curateCartProductRecommendations(textLists) {
    const listItems = textLists
      .map((text) => {
        const html = document.createElement('div');
        html.innerHTML = text;
        const recommendations = html.querySelectorAll('.splide__slide');

        return Array.from(recommendations);
      })
      .flat();

    const seen = new Set();

    const recommendationItems = listItems.filter((item) => {
      const isDuplicate = seen.has(item.textContent);
      seen.add(item.textContent);
      return !isDuplicate;
    });

    return recommendationItems;
  }

  renderContent(newHtml, recommendationItems) {
    const html = document.createElement('div');
    html.innerHTML = newHtml;
    const recommendations = html.querySelector('cart-recommendations');

    if (recommendations && recommendations.innerHTML.trim().length) {
      this.innerHTML = recommendations.innerHTML;

      const splideList = this.querySelector('.splide__list');
      splideList.innerHTML = '';
      recommendationItems.forEach((item) => splideList.appendChild(item));
    }
  }
}

customElements.define('cart-recommendations', CartRecommendations);

if (!customElements.get('cart-note')) {
  customElements.define(
    'cart-note',
    class CartNote extends HTMLElement {
      constructor() {
        super();

        this.addEventListener(
          'input',
          debounce((event) => {
            const body = JSON.stringify({ note: event.target.value });
            fetch(`${routes.cart_update_url}`, { ...fetchConfig(), ...{ body } });
          }, ON_CHANGE_DEBOUNCE_TIMER)
        );
      }
    }
  );
}

class CartDiscountCode extends HTMLElement {
  constructor() {
    super();
    this.authorization_token = '';

    this.discountCodeError = this.querySelector('#discount-code-error');
    this.discountCodeInput = this.querySelector('#discount-code-input');

    this.checkoutBtn = document.querySelector('.cart__footer .cart__ctas button.smshrs-btn');
    this.loadingSpinner = this.checkoutBtn?.querySelector('.loading__spinner');

    this.discountList = document.querySelector('#discounts_list');

    this.applyStoredDiscount();
    this.registerListeners();
  }

  disableElements() {
    if (this.checkoutBtn) {
      this.checkoutBtn.setAttribute('disabled', true);
      this.loadingSpinner.classList.remove('hidden');
    }
  }

  enableElements() {
    if (this.checkoutBtn) {
      this.checkoutBtn.removeAttribute('disabled');
      this.loadingSpinner.classList.add('hidden');
    }
  }

  updateLiveRegion() {
    fetch(`${routes.cart_url}?section_id=main-cart-checkout`)
      .then((response) => response.text())
      .then((responseText) => {
        const html = new DOMParser().parseFromString(responseText, 'text/html');
        const newDiscountList = html.querySelector('#discounts_list');

        this.discountList.innerHTML = newDiscountList.innerHTML;
        this.appendClearBtnListener();
      })
      .catch((e) => {
        console.error(e);
      });
  }

  applyDiscount(discount_code) {
    const code = discount_code.toLowerCase().trim();

    this.disableElements();

    fetch('/payments/config', { method: 'GET' })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const checkout_json_url = '/wallets/checkouts/';
        this.authorization_token = btoa(data.paymentInstruments.accessToken);
        fetch('/cart.js', {})
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            let body = {
              checkout: {
                country: Shopify.country,
                discount_code: code,
                line_items: data.items,
                presentment_currency: Shopify.currency.active,
              },
            };
            fetch(checkout_json_url, {
              headers: {
                accept: '*/*',
                'cache-control': 'no-cache',
                authorization: 'Basic ' + this.authorization_token,
                'content-type': 'application/json, text/javascript',
                pragma: 'no-cache',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
              },
              referrerPolicy: 'strict-origin-when-cross-origin',
              method: 'POST',
              mode: 'cors',
              credentials: 'include',
              body: JSON.stringify(body),
            })
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                if (data.checkout && data.checkout.applied_discounts.length > 0) {
                  let discountApplyUrl = '/discount/' + code + '?v=' + Date.now() + '&redirect=/checkout/';
                  fetch(discountApplyUrl, {}).then(function (response) {
                    return response.text();
                  });
                  if (this.discountCodeError) this.discountCodeError.innerHTML = '';

                  let localStorageValue = {
                    code: code.trim(),
                    currency: Shopify.currency.active,
                    totalCartPrice: data.checkout.total_line_items_price,
                    totalCart: Shopify.formatMoney(parseFloat(data.checkout.total_line_items_price * 100)),
                  };

                  localStorage.setItem('discountCode', JSON.stringify(localStorageValue));

                  const discountHtml = `
                    <ul class="discounts list-unstyled" role="list">
                      <li class="discounts__discount discounts__discount--position py-small w-full flex gap-2.5 items-center ">
                          <div class="flex-grow flex gap-base items-center">
                            <h2 class="uppercase text-t-sm text-green leading-5">
                              ${data.checkout.applied_discounts[0].title}
                            </h2>

                            <span class="link-xs text-black cursor-pointer clear-discount-btn">
                              Entfernen
                            </span>
                          </div>

                          <p class="basis-1/3 text-right text-t-sm text-green leading-5">
                            -${Shopify.formatMoney(parseFloat(data.checkout.applied_discounts[0].amount * 100))}
                          </p>
                        </li>
                    </ul>
                  `;

                  this.discountList.innerHTML = discountHtml;
                  this.appendClearBtnListener();
                } else {
                  let reason = 'Please Enter Valid Coupon Code.';

                  if (data.errors.discount_code.length) {
                    reason = data.errors.discount_code[0].message;
                  }

                  this.clearLocalStorage();

                  if (this.discountCodeError && reason) {
                    this.discountCodeError.innerHTML = reason;
                  }
                }
              })
              .catch((e) => {
                this.discountCodeError.innerHTML = 'Please Enter Valid Coupon Code.';
              })
              .finally(() => {
                this.enableElements();
              });
          });
      });
  }

  registerListeners() {
    if (this.discountCodeInput) {
      this.discountCodeInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
          this.applyDiscount(this.discountCodeInput.value);
          this.discountCodeInput.value = '';
        }
      });
    }

    this.appendClearBtnListener();
  }

  appendClearBtnListener() {
    document.querySelectorAll('.clear-discount-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        console.log('CLICK');

        e.preventDefault();
        this.clearDiscount();
      });
    });
  }

  applyStoredDiscount() {
    if (localStorage.discountCode) this.applyDiscount(JSON.parse(localStorage.discountCode).code);
  }

  clearDiscount() {
    this.disableElements();
    if (this.discountCodeError) this.discountCodeError.innerHTML = '';

    this.clearLocalStorage();
    fetch('/discount/CLEAR')
      .then(() => {
        this.updateLiveRegion();
      })
      .finally(() => {
        this.enableElements();
      });
  }

  clearLocalStorage() {
    localStorage.removeItem('discountCode');
  }
}

customElements.define('cart-discount', CartDiscountCode);
