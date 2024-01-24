if (!customElements.get('product-info')) {
  customElements.define(
    'product-info',
    class ProductInfo extends HTMLElement {
      quantityInput = undefined;
      quantityForm = undefined;
      onVariantChangeUnsubscriber = undefined;
      cartUpdateUnsubscriber = undefined;
      swapProductUtility = undefined;
      abortController = undefined;

      constructor() {
        super();

        this.quantityInput = this.querySelector('.quantity__input');
      }

      connectedCallback() {
        this.#initializeProductSwapUtility();

        this.onVariantChangeUnsubscriber = subscribe(
          PUB_SUB_EVENTS.variantChangeStart,
          this.#handleOptionValueChange.bind(this)
        );

        this.#initQuantityHandlers();
      }

      #initQuantityHandlers() {
        if (!this.quantityInput) return;

        this.quantityForm = this.querySelector('.product-form__quantity');
        if (!this.quantityForm) return;

        this.#setQuantityBoundries();
        if (!this.dataset.originalSection) {
          this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, this.#fetchQuantityRules.bind(this));
        }
      }

      disconnectedCallback() {
        this.onVariantChangeUnsubscriber();
        this.cartUpdateUnsubscriber?.();
      }

      #initializeProductSwapUtility() {
        this.swapProductUtility = new HTMLUpdateUtility();
        this.swapProductUtility.addPreProcessCallback((html) =>
          html.querySelectorAll('.scroll-trigger').forEach((element) => element.classList.add('scroll-trigger--cancel'))
        );
        this.swapProductUtility.addPostProcessCallback((newNode) => {
          window?.Shopify?.PaymentButton?.init();
          window?.ProductModel?.loadShopifyXR();
          publish(PUB_SUB_EVENTS.sectionRefreshed, {
            data: {
              sectionId: this.dataset.section,
              resource: {
                type: SECTION_REFRESH_RESOURCE_TYPE.product,
                id: newNode.dataset.productId,
              },
            },
          });
        });
      }

      #handleOptionValueChange({ data: { event, targetId, targetUrl, variant } }) {
        if (!this.contains(event.target)) return;

        const productForm = this.productForm;
        productForm?.toggleSubmitButton(true);
        productForm?.handleErrorMessage();

        let callback = () => {};
        if (this.dataset.url !== targetUrl) {
          this.#updateURL(targetUrl, variant?.id);
          this.#updateShareUrl(targetUrl, variant?.id);
          callback = this.#handleSwapProduct();
        } else if (!variant) {
          this.#setUnavailable();
          callback = (html) => {
            this.pickupAvailability?.update(variant);
            this.#updateOptionValues(html);
          };
        } else {
          this.#updateURL(targetUrl, variant.id);
          this.#updateShareUrl(targetUrl, variant.id);
          this.#updateVariantInputs(variant.id);
          callback = this.#handleUpdateProductInfo(variant);
        }

        this.#renderProductInfo(targetUrl, variant?.id, targetId, callback);
      }

      #handleSwapProduct() {
        return (html) => {
          this.productModal?.remove();
          const newProduct = html.querySelector('product-info');
          this.swapProductUtility.viewTransition(this, newProduct);
          this.relatedProducts?.initializeRecommendations(newProduct.dataset.productId);
          this.quickOrderList?.refresh();
        };
      }

      #renderProductInfo(url, variantId, targetId, callback) {
        this.abortController?.abort();
        this.abortController = new AbortController();

        fetch(this.#getProductInfoUrl(url, variantId), {
          signal: this.abortController.signal,
        })
          .then((response) => response.text())
          .then((responseText) => {
            const html = new DOMParser().parseFromString(responseText, 'text/html');
            callback(html);
          })
          .then(() => {
            // set focus to last clicked option value
            document.querySelector(`#${targetId}`)?.focus();
          });
      }

      #getProductInfoUrl(url, variantId) {
        const sectionId = this.dataset.originalSection || this.dataset.section;

        let params;
        if (variantId) {
          params = `variant=${variantId}`;
        } else {
          const optionValues = this.variantSelectors.selectedOptionValues;
          if (optionValues.length) {
            params = `option_values=${optionValues.join(',')}`;
          }
        }

        return `${url}?section_id=${sectionId}&${params}`;
      }

      #updateOptionValues(html) {
        const variantSelects = html.querySelector('variant-selects');
        if (variantSelects) this.variantSelectors.innerHTML = variantSelects.innerHTML;
      }

      #handleUpdateProductInfo(variant) {
        const sectionId = this.dataset.originalSection || this.dataset.section;

        return (html) => {
          this.pickupAvailability?.update(variant);
          this.#updateMedia(html, variant?.featured_media?.id);
          this.#updateOptionValues(html);

          const updateSourceFromDestination = (id, shouldHide = (source) => false) => {
            const source = html.getElementById(`${id}-${sectionId}`);
            const destination = this.querySelector(`#${id}-${this.dataset.section}`);
            if (source && destination) {
              destination.innerHTML = source.innerHTML;
              destination.classList.toggle('hidden', shouldHide(source));
            }
          };

          updateSourceFromDestination('price');
          updateSourceFromDestination('Sku', ({ classList }) => classList.contains('hidden'));
          updateSourceFromDestination('Inventory', ({ innerText }) => innerText === '');
          updateSourceFromDestination('Volume');
          updateSourceFromDestination('Price-Per-Item', ({ classList }) => classList.contains('hidden'));

          this.#updateQuantityRules(sectionId, html);
          this.querySelector(`#Quantity-Rules-${this.dataset.section}`)?.classList.remove('hidden');
          this.querySelector(`#Volume-Note-${this.dataset.section}`)?.classList.remove('hidden');

          this.productForm?.toggleSubmitButton(
            html.getElementById(`ProductSubmitButton-${sectionId}`)?.hasAttribute('disabled') ?? true,
            window.variantStrings.soldOut
          );

          publish(PUB_SUB_EVENTS.variantChange, {
            data: {
              sectionId,
              html,
              variant,
            },
          });
        };
      }

      #updateVariantInputs(variantId) {
        document
          .querySelectorAll(`#product-form-${this.dataset.section}, #product-form-installment-${this.dataset.section}`)
          .forEach((productForm) => {
            const input = productForm.querySelector('input[name="id"]');
            input.value = variantId;
            input.dispatchEvent(new Event('change', { bubbles: true }));
          });
      }

      #updateURL(url, variantId) {
        if (this.dataset.updateUrl === 'false') return;
        window.history.replaceState({}, '', `${url}${variantId ? `?variant=${variantId}` : ''}`);
      }

      #updateShareUrl(url, variantId) {
        this.querySelector('share-url')?.updateUrl(
          `${window.shopUrl}${url}${variantId ? `?variant=${variantId}` : ''}`
        );
      }

      #setUnavailable() {
        this.productForm?.toggleSubmitButton(true, window.variantStrings.unavailable);

        const selectors = ['price', 'Inventory', 'Sku', 'Price-Per-Item', 'Volume-Note', 'Volume', 'Quantity-Rules']
          .map((id) => `#${id}-${this.dataset.section}`)
          .join(', ');
        document.querySelectorAll(selectors).forEach(({ classList }) => classList.add('hidden'));
      }

      #updateMedia(html, variantFeaturedMediaId) {
        const mediaGallerySource = this.querySelector('media-gallery ul');
        const mediaGalleryDestination = html.querySelector(`media-gallery ul`);

        const refreshSourceData = () => {
          const mediaGallerySourceItems = Array.from(mediaGallerySource.querySelectorAll('li[data-media-id]'));
          const sourceSet = new Set(mediaGallerySourceItems.map((item) => item.dataset.mediaId));
          const sourceMap = new Map(
            mediaGallerySourceItems.map((item, index) => [item.dataset.mediaId, { item, index }])
          );
          return [mediaGallerySourceItems, sourceSet, sourceMap];
        };

        if (mediaGallerySource && mediaGalleryDestination) {
          let [mediaGallerySourceItems, sourceSet, sourceMap] = refreshSourceData();
          const mediaGalleryDestinationItems = Array.from(
            mediaGalleryDestination.querySelectorAll('li[data-media-id]')
          );
          const destinationSet = new Set(mediaGalleryDestinationItems.map(({ dataset }) => dataset.mediaId));
          let shouldRefresh = false;

          // add items from new data not present in DOM
          for (let i = mediaGalleryDestinationItems.length - 1; i >= 0; i--) {
            if (!sourceSet.has(mediaGalleryDestinationItems[i].dataset.mediaId)) {
              mediaGallerySource.prepend(mediaGalleryDestinationItems[i]);
              shouldRefresh = true;
            }
          }

          // remove items from DOM not present in new data
          for (let i = 0; i < mediaGallerySourceItems.length; i++) {
            if (!destinationSet.has(mediaGallerySourceItems[i].dataset.mediaId)) {
              mediaGallerySourceItems[i].remove();
              shouldRefresh = true;
            }
          }

          // refresh
          if (shouldRefresh) [mediaGallerySourceItems, sourceSet, sourceMap] = refreshSourceData();

          // if media galleries don't match, sort to match new data order
          mediaGalleryDestinationItems.forEach((destinationItem, destinationIndex) => {
            const sourceData = sourceMap.get(destinationItem.dataset.mediaId);

            if (sourceData && sourceData.index !== destinationIndex) {
              mediaGallerySource.insertBefore(
                sourceData.item,
                mediaGallerySource.querySelector(`li:nth-of-type(${destinationIndex + 1})`)
              );

              // refresh source now that it has been modified
              [mediaGallerySourceItems, sourceSet, sourceMap] = refreshSourceData();
            }
          });
        }

        if (variantFeaturedMediaId) {
          // set featured media as active in the media gallery
          this.querySelector(`media-gallery`).setActiveMedia(
            `${this.dataset.section}-${variantFeaturedMediaId}`,
            false
          );

          // update media modal
          const modalContent = this.productModal?.querySelector(`.product-media-modal__content`);
          const newModalContent = html.querySelector(`product-modal`);
          if (modalContent && newModalContent) modalContent.innerHTML = newModalContent.innerHTML;
        }
      }

      #setQuantityBoundries() {
        const data = {
          cartQuantity: this.quantityInput.dataset.cartQuantity ? parseInt(this.quantityInput.dataset.cartQuantity) : 0,
          min: this.quantityInput.dataset.min ? parseInt(this.quantityInput.dataset.min) : 1,
          max: this.quantityInput.dataset.max ? parseInt(this.quantityInput.dataset.max) : null,
          step: this.quantityInput.step ? parseInt(this.quantityInput.step) : 1,
        };

        let min = data.min;
        const max = data.max === null ? data.max : data.max - data.cartQuantity;
        if (max !== null) min = Math.min(min, max);
        if (data.cartQuantity >= data.min) min = Math.min(min, data.step);

        this.quantityInput.min = min;
        this.quantityInput.max = max;
        this.quantityInput.value = min;
        publish(PUB_SUB_EVENTS.quantityUpdate, undefined);
      }

      #fetchQuantityRules() {
        const currentVariantId = this.productForm?.variantIdInput?.value;
        if (!currentVariantId) return;

        this.querySelector('.quantity__rules-cart .loading__spinner').classList.remove('hidden');
        fetch(`${this.dataset.url}?variant=${currentVariantId}&section_id=${this.dataset.section}`)
          .then((response) => {
            return response.text();
          })
          .then((responseText) => {
            const html = new DOMParser().parseFromString(responseText, 'text/html');
            this.#updateQuantityRules(this.dataset.section, html);
          })
          .catch((e) => {
            console.error(e);
          })
          .finally(() => this.querySelector('.quantity__rules-cart .loading__spinner').classList.add('hidden'));
      }

      #updateQuantityRules(sectionId, html) {
        this.#setQuantityBoundries();

        const quantityFormUpdated = html.getElementById(`Quantity-Form-${sectionId}`);
        const selectors = ['.quantity__input', '.quantity__rules', '.quantity__label'];
        for (let selector of selectors) {
          const current = this.quantityForm.querySelector(selector);
          const updated = quantityFormUpdated.querySelector(selector);
          if (!current || !updated) continue;
          if (selector === '.quantity__input') {
            const attributes = ['data-cart-quantity', 'data-min', 'data-max', 'step'];
            for (let attribute of attributes) {
              const valueUpdated = updated.getAttribute(attribute);
              if (valueUpdated !== null) current.setAttribute(attribute, valueUpdated);
            }
          } else {
            current.innerHTML = updated.innerHTML;
          }
        }
      }

      get productForm() {
        return this.querySelector(`product-form`);
      }

      get productModal() {
        return document.querySelector(`#ProductModal-${this.dataset.section}`);
      }

      get pickupAvailability() {
        return this.querySelector(`pickup-availability`);
      }

      get variantSelectors() {
        return this.querySelector('variant-selects');
      }

      get relatedProducts() {
        const sectionId = this.dataset.originalSection || this.dataset.section;
        const relatedProductsSectionId = SectionId.getIdForSection(SectionId.parseId(sectionId), 'related-products');
        return document.querySelector(`product-recommendations[data-section-id^="${relatedProductsSectionId}"]`);
      }

      get quickOrderList() {
        const sectionId = this.dataset.originalSection || this.dataset.section;
        const quickOrderListSectionId = SectionId.getIdForSection(SectionId.parseId(sectionId), 'quick_order_list');
        return document.querySelector(`quick-order-list[data-id^="${quickOrderListSectionId}"]`);
      }
    }
  );
}
