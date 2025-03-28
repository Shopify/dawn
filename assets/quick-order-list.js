if (!customElements.get('quick-order-list')) {
  customElements.define(
    'quick-order-list',
    class QuickOrderList extends BulkAdd {
      cartUpdateUnsubscriber = undefined;
      hasPendingQuantityUpdate = false;
      constructor() {
        super();
        this.isListInsideModal = this.closest('bulk-modal');

        this.stickyHeaderElement = document.querySelector('sticky-header');
        if (this.stickyHeaderElement) {
          this.stickyHeader = {
            height: this.stickyHeaderElement.offsetHeight,
            type: `${this.stickyHeaderElement.getAttribute('data-sticky-type')}`,
          };
        }

        this.totalBar = this.getTotalBar();
        if (this.totalBar) {
          this.totalBarPosition = window.innerHeight - this.totalBar.offsetHeight;

          this.handleResize = this.handleResize.bind(this);
          window.addEventListener('resize', this.handleResize);
        }

        this.querySelector('form').addEventListener('submit', (event) => event.preventDefault());
      }

      connectedCallback() {
        this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, async (event) => {
          // skip if cart event was triggered by this section
          if (event.source === this.id) return;

          this.toggleTableLoading(true);
          await this.refresh();
          this.toggleTableLoading(false);
        });

        this.initEventListeners();
      }

      disconnectedCallback() {
        this.cartUpdateUnsubscriber?.();
        window.removeEventListener('resize', this.handleResize);
      }

      handleResize() {
        this.totalBarPosition = window.innerHeight - this.totalBar.offsetHeight;
        this.stickyHeader.height = this.stickyHeaderElement ? this.stickyHeaderElement.offsetHeight : 0;
      }

      initEventListeners() {
        this.querySelectorAll('.pagination__item').forEach((link) => {
          link.addEventListener('click', async (event) => {
            event.preventDefault();
            event.stopPropagation();

            const url = new URL(event.currentTarget.href);

            this.toggleTableLoading(true);
            await this.refresh(url.searchParams.get('page') || '1');
            this.scrollTop();
            this.toggleTableLoading(false);
          });
        });

        this.querySelector('.quick-order-list__contents').addEventListener(
          'keyup',
          this.handleScrollIntoView.bind(this)
        );

        this.quickOrderListTable.addEventListener('keydown', this.handleSwitchVariantOnEnter.bind(this));

        this.initVariantEventListeners();
      }

      initVariantEventListeners() {
        this.allInputsArray = Array.from(this.querySelectorAll('input[type="number"]'));

        this.querySelectorAll('quantity-input').forEach((qty) => {
          const debouncedOnChange = debounce(this.onChange.bind(this), BulkAdd.ASYNC_REQUEST_DELAY, true);
          qty.addEventListener('change', (event) => {
            this.hasPendingQuantityUpdate = true;
            debouncedOnChange(event);
          });
        });

        this.querySelectorAll('.quick-order-list-remove-button').forEach((button) => {
          button.addEventListener('click', (event) => {
            event.preventDefault();
            this.toggleLoading(true);
            this.startQueue(button.dataset.index, 0);
          });
        });
      }

      get currentPage() {
        return this.querySelector('.pagination-wrapper')?.dataset?.page ?? '1';
      }

      get cartVariantsForProduct() {
        return JSON.parse(this.querySelector('[data-cart-contents]')?.innerHTML || '[]');
      }

      onChange(event) {
        const inputValue = parseInt(event.target.value);
        this.cleanErrorMessageOnType(event);
        if (inputValue == 0) {
          event.target.setAttribute('value', inputValue);
          this.startQueue(event.target.dataset.index, inputValue);
        } else {
          this.validateQuantity(event);
        }
      }

      cleanErrorMessageOnType(event) {
        const handleKeydown = () => {
          event.target.setCustomValidity(' ');
          event.target.reportValidity();
          event.target.removeEventListener('keydown', handleKeydown);
        };

        event.target.addEventListener('keydown', handleKeydown);
      }

      validateInput(target) {
        const targetValue = parseInt(target.value);
        const targetMin = parseInt(target.dataset.min);
        const targetStep = parseInt(target.step);

        if (target.max) {
          return (
            targetValue == 0 ||
            (targetValue >= targetMin && targetValue <= parseInt(target.max) && targetValue % targetStep == 0)
          );
        } else {
          return targetValue == 0 || (targetValue >= targetMin && targetValue % targetStep == 0);
        }
      }

      get quickOrderListTable() {
        return this.querySelector('.quick-order-list__table');
      }

      getSectionsToRender() {
        return [
          {
            id: this.id,
            section: this.dataset.section,
            selector: `#${this.id}`,
          },
          {
            id: 'cart-icon-bubble',
            section: 'cart-icon-bubble',
            selector: '#shopify-section-cart-icon-bubble',
          },
          {
            id: `quick-order-list-live-region-text-${this.dataset.productId}`,
            section: 'cart-live-region-text',
            selector: '.shopify-section',
          },
          {
            id: 'CartDrawer',
            selector: '.drawer__inner',
            section: 'cart-drawer',
          },
        ];
      }

      toggleTableLoading(enable) {
        this.quickOrderListTable.classList.toggle('quick-order-list__container--disabled', enable);
        this.toggleLoading(enable);
      }

      async refresh(pageNumber = null) {
        const url = this.dataset.url || window.location.pathname;

        return fetch(`${url}?section_id=${this.dataset.section}&page=${pageNumber || this.currentPage}`)
          .then((response) => response.text())
          .then((responseText) => {
            const html = new DOMParser().parseFromString(responseText, 'text/html');
            const responseQuickOrderList = html.querySelector(`#${this.id}`);

            if (!responseQuickOrderList) {
              return;
            }

            this.innerHTML = responseQuickOrderList.innerHTML;
            this.initEventListeners();
          })
          .catch((e) => {
            console.error(e);
          });
      }

      renderSections(parsedState) {
        const { items, sections } = parsedState;

        this.getSectionsToRender().forEach(({ id, selector, section }) => {
          const sectionElement = document.getElementById(id);
          if (!sectionElement) return;

          const newSection = new DOMParser().parseFromString(sections[section], 'text/html').querySelector(selector);

          if (section === this.dataset.section) {
            if (this.queue.length > 0 || this.hasPendingQuantityUpdate) return;

            const focusedElement = document.activeElement;
            let focusTarget = focusedElement?.dataset?.target;
            if (focusTarget?.includes('remove')) {
              focusTarget = focusedElement.closest('quantity-popover')?.querySelector('[data-target*="increment-"]')
                ?.dataset.target;
            }

            const total = this.getTotalBar();
            if (total) {
              total.innerHTML = newSection.querySelector('.quick-order-list__total').innerHTML;
            }

            const table = this.quickOrderListTable;
            const newTable = newSection.querySelector('.quick-order-list__table');

            // only update variants if they are from the active page
            const shouldUpdateVariants =
              this.currentPage === (newSection.querySelector('.pagination-wrapper')?.dataset.page ?? '1');
            if (newTable && shouldUpdateVariants) {
              table.innerHTML = newTable.innerHTML;

              const newFocusTarget = this.querySelector(`[data-target='${focusTarget}']`);
              if (newFocusTarget) {
                newFocusTarget?.focus({ preventScroll: true });
              }

              this.initVariantEventListeners();
            }
          } else if (section === 'cart-drawer') {
            sectionElement.closest('cart-drawer')?.classList.toggle('is-empty', items.length === 0);
            sectionElement.querySelector(selector).innerHTML = newSection.innerHTML;
          } else {
            sectionElement.innerHTML = newSection.innerHTML;
          }
        });
      }

      getTotalBar() {
        return this.querySelector('.quick-order-list__total');
      }

      scrollTop() {
        const { top } = this.getBoundingClientRect();

        if (this.isListInsideModal) {
          this.scrollIntoView();
        } else {
          window.scrollTo({ top: top + window.scrollY - (this.stickyHeader?.height || 0), behavior: 'instant' });
        }
      }

      scrollQuickOrderListTable(target) {
        const inputTopBorder = target.getBoundingClientRect().top;
        const inputBottomBorder = target.getBoundingClientRect().bottom;

        if (this.isListInsideModal) {
          const totalBarCrossesInput = inputBottomBorder > this.totalBar.getBoundingClientRect().top;
          const tableHeadCrossesInput =
            inputTopBorder < this.querySelector('.quick-order-list__table thead').getBoundingClientRect().bottom;

          if (totalBarCrossesInput || tableHeadCrossesInput) {
            this.scrollToCenter(target);
          }
        } else {
          const stickyHeaderBottomBorder = this.stickyHeaderElement?.getBoundingClientRect().bottom;
          const totalBarCrossesInput = inputBottomBorder > this.totalBarPosition;
          const inputOutsideOfViewPort =
            inputBottomBorder < this.querySelector('.variant-item__quantity-wrapper').offsetHeight;
          const stickyHeaderCrossesInput =
            this.stickyHeaderElement &&
            this.stickyHeader.type !== 'on-scroll-up' &&
            this.stickyHeader.height > inputTopBorder;
          const stickyHeaderScrollupCrossesInput =
            this.stickyHeaderElement &&
            this.stickyHeader.type === 'on-scroll-up' &&
            this.stickyHeader.height > inputTopBorder &&
            stickyHeaderBottomBorder > 0;

          if (
            totalBarCrossesInput ||
            inputOutsideOfViewPort ||
            stickyHeaderCrossesInput ||
            stickyHeaderScrollupCrossesInput
          ) {
            this.scrollToCenter(target);
          }
        }
      }

      scrollToCenter(target) {
        target.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
        });
      }

      handleScrollIntoView(event) {
        if ((event.key === 'Tab' || event.key === 'Enter') && this.allInputsArray.length !== 1) {
          this.scrollQuickOrderListTable(event.target);
        }
      }

      handleSwitchVariantOnEnter(event) {
        if (event.key !== 'Enter' || event.target.tagName !== 'INPUT') return;

        event.preventDefault();
        event.target.blur();

        if (!this.validateInput(event.target) || this.allInputsArray.length <= 1) return;

        const currentIndex = this.allInputsArray.indexOf(event.target);
        const offset = event.shiftKey ? -1 : 1;
        const nextIndex = (currentIndex + offset + this.allInputsArray.length) % this.allInputsArray.length;

        this.allInputsArray[nextIndex]?.select();
      }

      updateMultipleQty(items) {
        if (this.queue.length == 0) this.hasPendingQuantityUpdate = false;

        this.toggleLoading(true);
        const url = this.dataset.url || window.location.pathname;

        const body = JSON.stringify({
          updates: items,
          sections: this.getSectionsToRender().map(({ section }) => section),
          sections_url: `${url}?page=${this.currentPage}`,
        });

        this.updateMessage();
        this.setErrorMessage();

        fetch(`${routes.cart_update_url}`, { ...fetchConfig(), ...{ body } })
          .then((response) => response.text())
          .then(async (state) => {
            const parsedState = JSON.parse(state);
            this.renderSections(parsedState);
            publish(PUB_SUB_EVENTS.cartUpdate, {
              source: this.id,
              cartData: parsedState,
            });
          })
          .catch((e) => {
            console.error(e);
            this.setErrorMessage(window.cartStrings.error);
          })
          .finally(() => {
            this.queue.length === 0 && this.toggleLoading(false);
            this.setRequestStarted(false);
          });
      }

      setErrorMessage(message = null) {
        this.errorMessageTemplate =
          this.errorMessageTemplate ??
          document.getElementById(`QuickOrderListErrorTemplate-${this.dataset.productId}`).cloneNode(true);
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
          messages.forEach((message) => (message.innerHTML = ''));
          icons.forEach((icon) => icon.classList.add('hidden'));
          return;
        }

        const isQuantityNegative = quantity < 0;
        const absQuantity = Math.abs(quantity);

        const textTemplate = isQuantityNegative
          ? absQuantity === 1
            ? window.quickOrderListStrings.itemRemoved
            : window.quickOrderListStrings.itemsRemoved
          : quantity === 1
          ? window.quickOrderListStrings.itemAdded
          : window.quickOrderListStrings.itemsAdded;

        messages.forEach((msg) => (msg.innerHTML = textTemplate.replace('[quantity]', absQuantity)));

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
        if (variantItemErrorDesktop) {
          variantItemErrorDesktop.querySelector('.variant-item__error-text').innerHTML = message;
          variantItemErrorDesktop.closest('tr').classList.remove('hidden');
        }
        if (variantItemErrorMobile)
          variantItemErrorMobile.querySelector('.variant-item__error-text').innerHTML = message;

        this.querySelector('#shopping-cart-variant-item-status').setAttribute('aria-hidden', true);

        const cartStatus = document.getElementById('quick-order-list-live-region-text');
        cartStatus.setAttribute('aria-hidden', false);

        setTimeout(() => {
          cartStatus.setAttribute('aria-hidden', true);
        }, 1000);
      }

      toggleLoading(loading, target = this) {
        target.querySelector('#shopping-cart-variant-item-status').toggleAttribute('aria-hidden', !loading);
        target
          .querySelectorAll('.variant-remove-total .loading__spinner')
          ?.forEach((spinner) => spinner.classList.toggle('hidden', !loading));
      }
    }
  );
}

if (!customElements.get('quick-order-list-remove-all-button')) {
  customElements.define(
    'quick-order-list-remove-all-button',
    class QuickOrderListRemoveAllButton extends HTMLElement {
      constructor() {
        super();
        this.quickOrderList = this.closest('quick-order-list');

        this.actions = {
          confirm: 'confirm',
          remove: 'remove',
          cancel: 'cancel',
        };

        this.addEventListener('click', (event) => {
          event.preventDefault();
          if (this.dataset.action === this.actions.confirm) {
            this.toggleConfirmation(false, true);
          } else if (this.dataset.action === this.actions.remove) {
            const items = this.quickOrderList.cartVariantsForProduct.reduce(
              (acc, variantId) => ({ ...acc, [variantId]: 0 }),
              {}
            );

            this.quickOrderList.updateMultipleQty(items);
            this.toggleConfirmation(true, false);
          } else if (this.dataset.action === this.actions.cancel) {
            this.toggleConfirmation(true, false);
          }
        });
      }

      toggleConfirmation(showConfirmation, showInfo) {
        this.quickOrderList
          .querySelector('.quick-order-list-total__confirmation')
          .classList.toggle('hidden', showConfirmation);
        this.quickOrderList.querySelector('.quick-order-list-total__info').classList.toggle('hidden', showInfo);
      }
    }
  );
}
