if (!customElements.get('price-per-item')) {
  customElements.define(
    'price-per-item',
    class PricePerItem extends HTMLElement {
      constructor() {
        super();
        this.input = document.getElementById(`Quantity-${this.dataset.sectionId}`);
        this.variantId = document.getElementById(`Price-Per-Item-${this.dataset.sectionId}`).dataset.variantId;
        this.input.addEventListener('change', this.onInputChange.bind(this));

        this.getVolumePricingArray();
      }

      updatePricePerItemUnsubscriber = undefined;
      cartUpdateStartedUnsubscriber = undefined;
      variantIdChangedUnsubscriber = undefined;

      connectedCallback() {
        // Update varinatId if variant is switched on product page
        this.variantIdChangedUnsubscriber = subscribe(PUB_SUB_EVENTS.variantChange, (event) => {
          this.variantId = event.data.variant.id.toString();
          this.getVolumePricingArray();
        });
        this.cartUpdateStartedUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdateStarted, (event) => {
          if (event.sectionID !== this.dataset.sectionId) return;
          this.querySelector('.loading-overlay').classList.remove('hidden');
        });

        this.updatePricePerItemUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, (response) => {
          if (response.sectionID !== this.dataset.sectionId) return;
          this.querySelector('.loading-overlay').classList.add('hidden');
          // Item was added to cart via product page
          if (response.cartData['variant_id'] !== undefined) {
            this.updatePricePerItem(response.cartData.quantity);
          // Qty was updated in cart
          } else if (response.cartData.item_count !== 0) {
            const isVariant = response.cartData.items.find((item) => item.variant_id.toString() === this.variantId);
            if (isVariant) {
              // The variant is still in cart
              this.updatePricePerItem(isVariant.quantity);
            } else {
              // The variant was removed from cart, qty is 0
              this.updatePricePerItem(0);
            }
          // All items were removed from cart
          } else {
            this.updatePricePerItem(0);
          }
        });
      }

      disconnectedCallback() {
        if (this.updatePricePerItemUnsubscriber) {
          this.updatePricePerItemUnsubscriber();
        }
        if (this.cartUpdateStartedUnsubscriber) {
          this.cartUpdateStartedUnsubscriber();
        }
        if (this.variantIdChangedUnsubscriber) {
          this.variantIdChangedUnsubscriber();
        }
      }

      onInputChange() {
        this.updatePricePerItem();
      }

      updatePricePerItem(updatedCartQuantity) {
        const enteredQty = parseInt(this.input.value);
        this.currentQtyForVolumePricing = this.getCartQuantity(updatedCartQuantity) + enteredQty;

        for (let pair of this.qtyPricePairs) {
          if (this.currentQtyForVolumePricing >= pair[0]) {
            let pricePerItem = pair[1];
            const pricePerItemCurrent = document.querySelector(`price-per-item[id^="Price-Per-Item-${this.dataset.sectionId}"] .price-per-item`);
            pricePerItemCurrent.innerHTML = pricePerItem;
            break;
          }
        }
      }

      getCartQuantity(updatedCartQuantity) {
        if (updatedCartQuantity || updatedCartQuantity === 0) {
          return updatedCartQuantity;
        } else {
          const cartQuantity = parseInt(this.input.dataset.cartQuantity);
          return cartQuantity;
        }
      }

      getVolumePricingArray() {
        const volumePricing = document.getElementById(`Volume-${this.dataset.sectionId}`);
        this.qtyPricePairs = [];

        volumePricing.querySelectorAll('li').forEach(li => {
          const qty = parseInt(li.querySelector('span:first-child').textContent);
          const price = (li.querySelector('span:not(:first-child):last-child').dataset.text);
          this.qtyPricePairs.push([qty, price]);
        });

        this.qtyPricePairs.reverse();
      }
    }
  );
}
