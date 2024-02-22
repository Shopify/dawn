if (!customElements.get('product-info')) {
  customElements.define(
    'product-info',
    class ProductInfo extends HTMLElement {
      onVariantChangeUnsubscriber = undefined;
      swapProductUtility = undefined;
      abortController = undefined;

      constructor() {
        super();
      }

      connectedCallback() {
        this.#initializeProductSwapUtility();

        this.onVariantChangeUnsubscriber = subscribe(
          PUB_SUB_EVENTS.variantChangeStart,
          this.#handleOptionValueChange.bind(this)
        );
      }

      disconnectedCallback() {
        this.onVariantChangeUnsubscriber();
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
          this.swapProductUtility.viewTransition(this, html.querySelector('product-info'));
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
            this.querySelector(`#${targetId}`)?.focus();
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

          this.quantityForm?.updateQuantityRules(sectionId, html);
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
          modalContent?.prepend(modalContent.querySelector(`[data-media-id="${variantFeaturedMediaId}"]`));
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

      get quantityForm() {
        return this.querySelector('quantity-form');
      }

      get currentVariantId() {
        return this.productForm?.variantIdInput?.value;
      }
    }
  );
}
