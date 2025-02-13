if (!customElements.get('pickup-availability')) {
  customElements.define(
    'pickup-availability',
    /**
     * Pickup Availability custom element class.
     * @extends HTMLElement
     */
    class PickupAvailability extends HTMLElement {
      constructor() {
        super();

        if (!this.hasAttribute('available')) return;

        /** @type {HTMLElement} */
        this.errorHtml = this.querySelector('template').content.firstElementChild.cloneNode(true);
        this.onClickRefreshList = this.onClickRefreshList.bind(this);
        this.fetchAvailability(this.dataset.variantId);
      }

      /**
       * Fetch availability data for variant. Render preview or error message.
       * @param {string} variantId - Variant ID to fetch availability for.
       */
      fetchAvailability(variantId) {
        if (!variantId) return;

        let rootUrl = this.dataset.rootUrl;
        if (!rootUrl.endsWith('/')) {
          rootUrl = rootUrl + '/';
        }
        /** Section API Url */
        const variantSectionUrl = `${rootUrl}variants/${variantId}/?section_id=pickup-availability`;

        fetch(variantSectionUrl)
          .then((response) => response.text())
          .then((text) => {
            const sectionInnerHTML = new DOMParser()
              .parseFromString(text, 'text/html')
              .querySelector('.shopify-section');
            this.renderPreview(sectionInnerHTML);
          })
          .catch((e) => {
            const button = this.querySelector('button');
            if (button) button.removeEventListener('click', this.onClickRefreshList);
            this.renderError();
          });
      }

      /**
       * Handle click event to refresh availability list.
       */
      onClickRefreshList() {
        this.fetchAvailability(this.dataset.variantId);
      }

      /**
       * Update availability for variant.
       * TODO: Create variant object type.
       * @param {JSON} variant - Variant object.
       */
      update(variant) {
        if (variant?.available) {
          this.fetchAvailability(variant.id);
        } else {
          this.removeAttribute('available');
          this.innerHTML = '';
        }
      }

      /**
       * Render error message. Enable refresh button.
       */
      renderError() {
        this.innerHTML = '';
        this.appendChild(this.errorHtml);

        this.querySelector('button').addEventListener('click', this.onClickRefreshList);
      }

      /**
       * Render variant availability preview.
       * @param {HTMLElement} sectionInnerHTML - Section HTML content.
       */
      renderPreview(sectionInnerHTML) {
        /** @type {PickupAvailabilityDrawer | null} */
        const drawer = document.querySelector('pickup-availability-drawer');
        if (drawer) drawer.remove();
        if (!sectionInnerHTML.querySelector('pickup-availability-preview')) {
          this.innerHTML = '';
          this.removeAttribute('available');
          return;
        }

        this.innerHTML = sectionInnerHTML.querySelector('pickup-availability-preview').outerHTML;
        this.setAttribute('available', '');

        document.body.appendChild(sectionInnerHTML.querySelector('pickup-availability-drawer'));
        const colorClassesToApply = this.dataset.productPageColorScheme.split(' ');
        colorClassesToApply.forEach((colorClass) => {
          document.querySelector('pickup-availability-drawer').classList.add(colorClass);
        });

        const button = this.querySelector('button');
        if (button)
          button.addEventListener('click', (evt) => {
            document.querySelector('pickup-availability-drawer').show(evt.target);
          });
      }
    }
  );
}

if (!customElements.get('pickup-availability-drawer')) {
  customElements.define(
    'pickup-availability-drawer',
    /**
     * Pickup Availability Drawer custom element class.
     * @extends HTMLElement
     */
    class PickupAvailabilityDrawer extends HTMLElement {
      constructor() {
        super();

        this.onBodyClick = this.handleBodyClick.bind(this);

        this.querySelector('button').addEventListener('click', () => {
          this.hide();
        });

        this.addEventListener('keyup', (event) => {
          if (event.code.toUpperCase() === 'ESCAPE') this.hide();
        });
      }

      /**
       * Handle body click event to close drawer.
       * @param {MouseEvent} evt - Mouse click event object.
       */
      handleBodyClick(evt) {
        const target = evt.target;
        if (
          target != this &&
          !target.closest('pickup-availability-drawer') &&
          target.id != 'ShowPickupAvailabilityDrawer'
        ) {
          this.hide();
        }
      }

      /**
       * Hide drawer. Remove open attribute, event listeners and focus trap.
       */
      hide() {
        this.removeAttribute('open');
        document.body.removeEventListener('click', this.onBodyClick);
        document.body.classList.remove('overflow-hidden');
        removeTrapFocus(this.focusElement);
      }

      /**
       * Show drawer. Add open attribute, event listeners and focus trap.
       * @param {HTMLElement} focusElement - Element to focus when drawer opens.
       */
      show(focusElement) {
        this.focusElement = focusElement;
        this.setAttribute('open', '');
        document.body.addEventListener('click', this.onBodyClick);
        document.body.classList.add('overflow-hidden');
        trapFocus(this);
      }
    }
  );
}
