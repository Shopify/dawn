if (!customElements.get('product-form')) {
  customElements.define(
    'product-form',
    class ProductForm extends HTMLElement {
      constructor() {
        super();

        this.form = this.querySelector('form');
        this.variantIdInput.disabled = false;
        this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
        this.cart = document.querySelector('cart-notification') || document.querySelector('cart-drawer');
        this.submitButton = this.querySelector('[type="submit"]');
        this.submitButtonText = this.submitButton.querySelector('span');

        if (document.querySelector('cart-drawer')) this.submitButton.setAttribute('aria-haspopup', 'dialog');

        this.hideErrors = this.dataset.hideErrors === 'true';
      }

      onSubmitHandler(evt) {
        evt.preventDefault();

        // validate the stringing form too, if the validation fails, highlight it and  return early
        const stringingForm = document.getElementById('stringing-form');
        if (stringingForm && document.querySelector('input[name="frame"]:checked')?.id === 'pro-stringing') {
          if (!stringingForm.checkValidity()) {
            const radioButtons = stringingForm.querySelectorAll('input[type="radio"]');
            const invalidRadioName = Array.from(radioButtons).find((radio) => radio.validity.valueMissing)?.name;

            const errorMessage =
              invalidRadioName === 'string-product'
                ? 'Please select a String'
                : invalidRadioName === 'string-variant'
                  ? 'Please choose a String Color'
                  : invalidRadioName === 'string-tension'
                    ? 'Please select a tension'
                    : 'Please select all required options';

            this.handleErrorMessage(errorMessage);

            return stringingForm.reportValidity();
          } else {
            this.handleErrorMessage('');
          }
        }
        // validation finsihed

        if (this.submitButton.getAttribute('aria-disabled') === 'true') return;

        this.handleErrorMessage();

        this.submitButton.setAttribute('aria-disabled', true);
        this.submitButton.classList.add('loading');
        this.querySelector('.loading__spinner').classList.remove('hidden');

        const config = fetchConfig('javascript');
        config.headers['X-Requested-With'] = 'XMLHttpRequest';
        delete config.headers['Content-Type'];

        const formData = new FormData(this.form);

        const sections = this.cart ? this.cart.getSectionsToRender().map((section) => section.id) : [];

        const items = [
          {
            id: formData.get('id'),
            quantity: formData.get('quantity') || 1,
          },
        ];

        // check if stringing service is selected
        const frameSelected = document.querySelector('input[name="frame"]:checked')?.id;
        let selectedVariantSku = null;
        try {
          selectedVariantSku = JSON.parse(
            document.querySelector('variant-selects [data-selected-variant]')?.innerHTML,
          )?.sku;
        } catch (error) {}
        if (frameSelected === 'pro-stringing' && selectedVariantSku) {
          const variantSelected = document.querySelector('input[name="string-variant"]:checked')?.id;
          const stringVariantSku = document.querySelector('input[name="string-variant"]:checked')?.dataset.sku;
          const tensionSelected = document.querySelector('input[name="string-tension"]:checked')?.id;
          const stringingServiceVariantId = window.s3_stringing_service_variant_id;

          if (variantSelected && tensionSelected && stringingServiceVariantId) {
            items.push(
              {
                id: stringingServiceVariantId,
                quantity: 1,
                properties: {
                  _racket: selectedVariantSku,
                  _string: stringVariantSku,
                  _tension: `${tensionSelected}lbs`,
                  _bundleId: formData.get('id'),
                },
              },
              {
                id: variantSelected,
                quantity: 1,
                properties: {
                  _bundleId: formData.get('id'),
                },
              },
            );
          }
        }

        // check if remix is selected
        const theSticker = document.getElementById('the-sticker');

        if (theSticker && window.s3_remix_service_variant_id) {
          const stickerText = theSticker.innerText;

          let textToBeStickered = '';

          for (let element of stickerText) {
            const isAlphabet = isCharAlphanumeric(element);
            if (isAlphabet) {
              textToBeStickered += element;
            } else {
              textToBeStickered += `{${convertEmojiToHex(element)}}`;
            }
          }

          items.push({
            id: window.s3_remix_service_variant_id,
            quantity: 1,
            properties: {
              _stickerText: textToBeStickered,
              _textColor: window.s3_remix_config.stickerTextColor || 'UNKNOWN',
              _bundleId: formData.get('id'),
            },
          });
        }

        //  check if printing is selected

        // Single combined request with sections
        fetch(`${routes.cart_add_url}`, {
          ...config,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...config.headers,
          },
          body: JSON.stringify({
            items,
            sections: sections,
            sections_url: window.location.pathname,
          }),
        })
          .then((response) => response.json())
          .then((response) => {
            if (response.status) {
              publish(PUB_SUB_EVENTS.cartError, {
                source: 'product-form',
                productVariantId: formData.get('id'),
                errors: response.errors || response.description,
                message: response.message,
              });
              this.handleErrorMessage(response.description);

              const soldOutMessage = this.submitButton.querySelector('.sold-out-message');
              if (!soldOutMessage) return;
              this.submitButton.setAttribute('aria-disabled', true);
              this.submitButtonText.classList.add('hidden');
              soldOutMessage.classList.remove('hidden');
              this.error = true;
              return;
            } else if (!this.cart) {
              window.location = window.routes.cart_url;
              return;
            }

            const startMarker = CartPerformance.createStartingMarker('add:wait-for-subscribers');
            if (!this.error)
              publish(PUB_SUB_EVENTS.cartUpdate, {
                source: 'product-form',
                productVariantId: formData.get('id'),
                cartData: response,
              }).then(() => {
                CartPerformance.measureFromMarker('add:wait-for-subscribers', startMarker);
              });
            this.error = false;
            const quickAddModal = this.closest('quick-add-modal');
            if (quickAddModal) {
              document.body.addEventListener(
                'modalClosed',
                () => {
                  setTimeout(() => {
                    CartPerformance.measure('add:paint-updated-sections', () => {
                      this.cart.renderContents(response);
                    });
                  });
                },
                { once: true },
              );
              quickAddModal.hide(true);
            } else {
              CartPerformance.measure('add:paint-updated-sections', () => {
                this.cart.renderContents(response);
              });
            }
          })
          .catch((e) => {
            console.error(e);
          })
          .finally(() => {
            this.submitButton.classList.remove('loading');
            if (this.cart && this.cart.classList.contains('is-empty')) this.cart.classList.remove('is-empty');
            if (!this.error) this.submitButton.removeAttribute('aria-disabled');
            this.querySelector('.loading__spinner').classList.add('hidden');

            CartPerformance.measureFromEvent('add:user-action', evt);
          });
      }

      handleErrorMessage(errorMessage = false) {
        if (this.hideErrors) return;

        this.errorMessageWrapper =
          this.errorMessageWrapper || this.querySelector('.product-form__error-message-wrapper');
        if (!this.errorMessageWrapper) return;
        this.errorMessage = this.errorMessage || this.errorMessageWrapper.querySelector('.product-form__error-message');

        this.errorMessageWrapper.toggleAttribute('hidden', !errorMessage);

        if (errorMessage) {
          this.errorMessage.textContent = errorMessage;
        }
      }

      toggleSubmitButton(disable = true, text) {
        if (disable) {
          this.submitButton.setAttribute('disabled', 'disabled');
          if (text) this.submitButtonText.textContent = text;
        } else {
          this.submitButton.removeAttribute('disabled');
          this.submitButtonText.textContent = window.variantStrings.addToCart;
        }
      }

      get variantIdInput() {
        return this.form.querySelector('[name=id]');
      }
    },
  );
}

const isCharAlphanumeric = (char) => {
  const alphanumericRegex = /^[a-zA-Z0-9. ]*$/;
  return alphanumericRegex.test(char);
};

const convertEmojiToHex = (emoji) => emoji.codePointAt(0)?.toString(16);
