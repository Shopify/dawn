// Name must contain a dash
if (!customElements.get('product-wrapper')) {
  customElements.define(
    'product-wrapper',
    class ProductWrapper extends HTMLElement {
      constructor() {
        super();
      }

      onVariantChangeUnsubscriber = undefined;
      swapProductUtility = undefined;
      abortController = undefined;

      connectedCallback() {
        this.initializeProductSwapUtility();

        this.onVariantChangeUnsubscriber = subscribe(
          PUB_SUB_EVENTS.variantChangeStart,
          this.handleOptionValueChange.bind(this)
        );
      }

      disconnectedCallback() {
        this.onVariantChangeUnsubscriber();
      }

      initializeProductSwapUtility() {
        this.swapProductUtility = new HTMLUpdateUtility();
        this.swapProductUtility.addPreProcessCallback((html) => {
          html
            .querySelectorAll('.scroll-trigger')
            .forEach((element) => element.classList.add('scroll-trigger--cancel'));
          return html;
        });
        this.swapProductUtility.addPostProcessCallback((newNode) => {
          window?.Shopify?.PaymentButton?.init();
          window?.ProductModel?.loadShopifyXR();
          publish(PUB_SUB_EVENTS.sectionRefreshed, {
            data: {
              sectionId: this.dataset.section,
              resource: {
                type: SECTION_REFRESH_RESOURCE_TYPE.product,
                id: this.dataset.productId,
                // TODO need to update dataset productID after swap happens
              },
            },
          });
        });
      }

      handleOptionValueChange({ data: { event, targetId, targetUrl, variant } }) {
        debugger;

        if (!this.contains(event.target)) return;

        // const input = this.getInputForEventTarget(event.target);
        // const targetId = input.id;
        // const targetUrl = input.dataset.productUrl;
        // this.currentVariant = this.getVariantData(targetId);

        // TODO how do we want to handle this?
        // const sectionId = this.dataset.originalSection || this.dataset.section;
        // this.updateSelectedSwatchValue(event);

        // TODO should this be doing this for all forms in the section like we do for updateVariantInput? this is the current theme behavior.
        const productForm = this.productForm;
        productForm?.toggleSubmitButton(true);
        productForm?.handleErrorMessage();

        let callback = () => {};
        if (this.dataset.url !== targetUrl) {
          this.updateURL(targetUrl, variant?.id);
          this.updateShareUrl(targetUrl, variant?.id);
          callback = this.handleSwapProduct();
        } else if (!variant) {
          this.setUnavailable();
          // callback = (html) => {
          //   this.updatePickupAvailability();
          //   this.updateOptionValues(html);
          // };
        } else {
          this.updateURL(targetUrl, variant.id);
          this.updateShareUrl(targetUrl, variant.id);
          this.updateVariantInput(variant.id);
          // callback = this.handleUpdateProductInfo(sectionId);
        }

        this.renderProductInfo(targetUrl, variant?.id, targetId, callback);
      }

      // TODO test this for main, featured, quick-add
      handleSwapProduct() {
        return (html) => {
          // const oldContent = this.getWrappingSection(sectionId);
          // if (!oldContent) {
          //   return;
          // }

          this.productModal?.remove();

          // const response =
          //   html.querySelector(`section[data-section="${sectionId}"]`) /* main/quick-add */ ||
          //   html.getElementById(`shopify-section-${sectionId}`); /* featured product*/

          debugger;
          const response = html.querySelector('product-wrapper');
          this.swapProductUtility.viewTransition(this, response);
        };
      }

      renderProductInfo(url, variantId, targetId, callback) {
        // TODO how do we want to handle this?
        const sectionId = this.dataset.originalSection || this.dataset.section;
        const params = variantId ? `variant=${variantId}` : `option_values=${this.getSelectedOptionValues().join(',')}`;

        this.abortController?.abort();
        this.abortController = new AbortController();

        fetch(`${url}?section_id=${sectionId}&${params}`, {
          signal: this.abortController.signal,
        })
          .then((response) => response.text())
          .then((responseText) => {
            const html = new DOMParser().parseFromString(responseText, 'text/html');
            callback(html);
          })
          .then(() => {
            // set focus to last clicked option value
            this.querySelector(`#${targetId}`).focus();
          });
      }

      // updateVariantInput() {
      //   const productForms = document.querySelectorAll(
      //     `#product-form-${this.dataset.section}, #product-form-installment-${this.dataset.section}`
      //   );
      //   productForms.forEach((productForm) => {
      //     const input = productForm.querySelector('input[name="id"]');
      //     input.value = this.currentVariant.id;
      //     input.dispatchEvent(new Event('change', { bubbles: true }));
      //   });
      // }

      updateVariantInput(variantId) {
        // TODO this query selector was updated, does it still work?
        this.querySelectorAll('product-form').forEach((form) => form.updateVariantIdInput(variantId));

        // // TODO this query selector was updated, does it still work?
        // this
        //   .querySelectorAll(
        //     'product-form'
        //     // `#product-form-${this.dataset.section}, #product-form-installment-${this.dataset.section}`
        //   )
        //   .forEach((form) => {
        //     form.updateVariantIdInput(variantId);

        //     // TODO this was updated to use a new method on product-form instead
        //     // const input = productForm.querySelector('input[name="id"]');
        //     // input.value = variantId;
        //     // input.dispatchEvent(new Event('change', { bubbles: true }));
        //   });
      }

      updateURL(url, variantId) {
        if (this.dataset.updateUrl === 'false') return;
        window.history.replaceState({}, '', `${url}${variantId ? `?variant=${variantId}` : ''}`);
      }

      updateShareUrl(url, variantId) {
        // this queries without the section ID now
        this.querySelector('share-url')?.updateUrl(
          `${window.shopUrl}${url}${variantId ? `?variant=${variantId}` : ''}`
        );
      }

      setUnavailable() {
        this.toggleAddButton(true, window.variantStrings.unavailable);

        // should this be delegated to product-info? should product-info be promoted to here?
        const selectors = ['price', 'Inventory', 'Sku', 'Price-Per-Item', 'Volume-Note', 'Volume', 'Quantity-Rules']
          .map((id) => `#${id}-${this.dataset.section}`)
          .join(', ');
        document.querySelectorAll(selectors).forEach(({ classList }) => classList.add('hidden'));
      }

      updateMedia(html, variantFeaturedMediaId) {
        // TODO are these selectors okay?
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

        // todo is this query selector okay? is it fine if variantFeaturedMediaId is nil?
        this.querySelector(`media-gallery`).setActiveMedia(`${this.dataset.section}-${variantFeaturedMediaId}`, false);

        // update media modal
        const modalContent = this.productModal.querySelector(`.product-media-modal__content`);
        if (modalContent && variantFeaturedMediaId) {
          modalContent.prepend(modalContent.querySelector(`[data-media-id="${variantFeaturedMediaId}"]`));
        }
      }
      // updateMedia(featuredMediaId) {
      //   if (!featuredMediaId) return;

      //   const mediaGalleries = document.querySelectorAll('media-gallery');
      //   mediaGalleries.forEach((mediaGallery) =>
      //     mediaGallery.setActiveMedia(`${this.dataset.section}-${this.currentVariant.featured_media.id}`, true)
      //   );

      //   const modalContent = document.querySelector(
      //     `#ProductModal-${this.dataset.section} .product-media-modal__content`
      //   );
      //   if (!modalContent) return;
      //   const newMediaModal = modalContent.querySelector(`[data-media-id="${this.currentVariant.featured_media.id}"]`);
      //   modalContent.prepend(newMediaModal);
      // }

      // TODO should this live on productform
      // toggleAddButton(disable = true, text, modifyClass = true) {
      //   // TODO worth it to replace this with a static instance of this.productform? or no because you have to refresh it?
      //   debugger;
      //   const productForm = this.querySelector(`#product-form-${this.dataset.section}`);

      //   productForm?.toggleSubmitButton(disable, text);
      //   // if (!productForm) return;

      //   const addButton = productForm.querySelector('[name="add"]');
      //   const addButtonText = productForm.querySelector('[name="add"] > span');
      //   if (!addButton) return;

      //   if (disable) {
      //     addButton.setAttribute('disabled', 'disabled');
      //     if (text) addButtonText.textContent = text;
      //   } else {
      //     addButton.removeAttribute('disabled');
      //     addButtonText.textContent = window.variantStrings.addToCart;
      //   }
      // }

      // should this be memoized? or no because the content can be changed?
      // NOTE this now queries for the product-form directly instead of this.querySelector(`#product-form-${this.dataset.section}`). does it still need to be namespaced?
      // although the removeErrorMessage did exactly this so I think we're okay
      get productForm() {
        return this.querySelector(`product-form`);
      }

      get productModal() {
        return document.querySelector(`#ProductModal-${this.dataset.section}`);
      }
    }
  );
}
