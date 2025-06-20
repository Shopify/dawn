if (!customElements.get('product-form')) {
  customElements.define(
    'product-form',
    class ProductForm extends HTMLElement {
      constructor() {
        super();

        this.form = this.querySelector('form');
        this.variantIdInput.disabled = false;
        this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
        this.cart = document.querySelector('cart-notification');
        this.submitButton = this.querySelector('.product-form__submit');
        this.submitButtonText = this.submitButton.querySelector('span');
        this.popupNotice = this.querySelector('.popup-notice');
        this.popupNoticeAccept = this.querySelector('.popup-notice button[type="submit"]');
        this.popupNoticeCancel = this.querySelector('.popup-notice button[type="reset"]');

        if (document.querySelector('cart-drawer')) this.submitButton.setAttribute('aria-haspopup', 'dialog');
        if (this.submitButton.type === 'button')
          this.submitButton.addEventListener('click', this.handleClickSubmit.bind(this));

        this.hideErrors = this.dataset.hideErrors === 'true';
      }

      initDrawerTest() {
        console.log('initDrawerTest');
        this.cart = document.querySelector('cart-drawer');

        if (document.querySelector('cart-drawer')) {
          this.submitButton.setAttribute('aria-haspopup', 'dialog');
        }
      }

      onSubmitHandler(evt) {
        evt.preventDefault();
        if (this.submitButton && this.submitButton.getAttribute('aria-disabled') === 'true') return;
        if (this.popupNotice && this.popupNoticeAccept.getAttribute('aria-disabled') === 'true') return;

        this.handleErrorMessage();

        if (this.submitButton) {
          this.submitButton.setAttribute('aria-disabled', true);
          this.submitButton.classList.add('loading');
        }
        this.querySelectorAll('.loading__spinner').forEach((el) => el.classList.remove('hidden'));

        if (this.popupNotice) {
          this.popupNoticeAccept.setAttribute('aria-disabled', true);
          this.popupNoticeAccept.classList.add('loading');
        }

        const config = fetchConfig('javascript');
        config.headers['X-Requested-With'] = 'XMLHttpRequest';
        delete config.headers['Content-Type'];

        const formData = new FormData(this.form);
        if (this.cart) {
          formData.append(
            'sections',
            this.cart.getSectionsToRender().map((section) => section.id)
          );
          formData.append('sections_url', window.location.pathname);
          this.cart.setActiveElement(document.activeElement);
        }
        config.body = formData;

        fetch(`${routes.cart_add_url}`, config)
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

            if (!this.error)
              publish(PUB_SUB_EVENTS.cartUpdate, {
                source: 'product-form',
                productVariantId: formData.get('id'),
                cartData: response,
              });
            this.error = false;
            const quickAddModal = this.closest('quick-add-modal');
            if (quickAddModal) {
              document.body.addEventListener(
                'modalClosed',
                () => {
                  setTimeout(() => {
                    this.cart.renderContents(response);
                  });
                },
                { once: true }
              );
              quickAddModal.hide(true);
            } else {
              this.cart.renderContents(response);
            }
          })
          .catch((e) => {
            console.error(e);
          })
          .finally(() => {
            if (this.submitButton) {
              this.submitButton.classList.remove('loading');
            }
            if (this.cart && this.cart.classList.contains('is-empty')) this.cart.classList.remove('is-empty');
            if (!this.error && this.submitButton) this.submitButton.removeAttribute('aria-disabled');
            if (this.popupNotice) {
              this.popupNotice.classList.add('is-hidden');
              this.popupNoticeAccept.classList.remove('loading');
            }

            this.querySelectorAll('.loading__spinner').forEach((el) => el.classList.add('hidden'));
          });
      }

      handleClickSubmit(evt) {
        evt.preventDefault();

        this.popupNotice.classList.remove('is-hidden');

        const handleClickAccept = () => {
          this.onSubmitHandler(evt);
        };

        const handleClickCancel = () => {
          this.popupNotice.classList.add('is-hidden');
          this.popupNoticeAccept.removeEventListener('click', handleClickAccept);
        };

        this.popupNoticeAccept.addEventListener('click', handleClickAccept);
        this.popupNoticeCancel.addEventListener('click', handleClickCancel);
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
    }
  );
}
