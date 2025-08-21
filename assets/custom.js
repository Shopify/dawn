/**
document.addEventListener('DOMContentLoaded', function () {
  const productForm = document.querySelector('product-form').querySelector('form[action="/cart/add"]');
  if (!productForm) return;

  const upsells = document.querySelectorAll('upsell-item');

  upsells.forEach((upsell, index) => {
    const checkbox = upsell.querySelector('.upsell-checkbox');
    const variantId = upsell.dataset.variantId;

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        // Create hidden inputs
        const idInput = document.createElement('input');
        idInput.type = 'hidden';
        idInput.name = `items[${index + 1}][id]`;
        idInput.value = variantId;
        idInput.classList.add('upsell-hidden-id');

        const qtyInput = document.createElement('input');
        qtyInput.type = 'hidden';
        qtyInput.name = `items[${index + 1}][quantity]`;
        qtyInput.value = 1;
        qtyInput.classList.add('upsell-hidden-qty');


        //Hasso: Why appending child here?

        upsell.appendChild(idInput);
        upsell.appendChild(qtyInput);

        //Hasso: Also try not to edit the Product form as much as possible.
        //Nicer approach: add the input into the element and tag it with the form attribute (Items with form attribute can be outside of the form element in the dom when the ID matches)
        productForm.appendChild(idInput.cloneNode(true));
        productForm.appendChild(qtyInput.cloneNode(true));

        // Convert main product’s input if needed
        const mainIdInput = productForm.querySelector('input[name="id"]');
        if (mainIdInput) {
          mainIdInput.name = 'items[0][id]';
        }
        const mainQty = document.createElement('input');
        mainQty.type = 'hidden';
        mainQty.name = 'items[0][quantity]';
        mainQty.value = document.querySelector('.quantity__input').value;
        mainQty.classList.add('product-hidden-qty');
        productForm.appendChild(mainQty.cloneNode(true));
      } else {
        // Remove hidden inputs
        document.querySelectorAll('.upsell-hidden-id, .upsell-hidden-qty').forEach((el) => el.remove());

        // If no upsells checked, restore original
        document.querySelector('.product-hidden-qty').remove();
        const stillChecked = document.querySelectorAll('.upsell-checkbox:checked').length;
        if (!stillChecked) {
          //Hasso: Better Approach: Use MainIDInput as a queryselector in the beginning, so you dont loose track when another app changes attributes for example
          const mainIdInput = productForm.querySelector('input[name="items[0][id]"]');
          if (mainIdInput) {
            mainIdInput.name = 'id';
          }
        }
      }
    });
  });
});
 */

/**
 * Code Review by Hasaan
 */
class UpsellItem extends HTMLElement {
  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
  }

  connectedCallback() {
    // keep original assumptions: productForm may be global; otherwise fallback
    this.productForm = window.productForm || document.querySelector('form[action*="/cart/add"]');
    this.checkbox = this.querySelector('.upsell-checkbox');
    this.variantId = this.dataset.variantId;

    this.index = 1;

    if (!this.checkbox || !this.productForm || !this.variantId) return;
    console.log(this);
    this.checkbox.addEventListener('change', this._onChange);
  }

  disconnectedCallback() {
    if (this.checkbox) {
      this.checkbox.removeEventListener('change', this._onChange);
    }
  }

  _onChange() {
    const { checkbox, productForm, variantId, index } = this;

    if (checkbox.checked) {
      // Create hidden inputs (exact same naming & classes as candidate)
      const idInput = document.createElement('input');
      idInput.type = 'hidden';
      idInput.name = `items[${index + 1}][id]`;
      idInput.value = variantId;
      idInput.classList.add('upsell-hidden-id');

      const qtyInput = document.createElement('input');
      qtyInput.type = 'hidden';
      qtyInput.name = `items[${index + 1}][quantity]`;
      qtyInput.value = 1;
      qtyInput.classList.add('upsell-hidden-qty');

      //Why are we appending child here?
      this.appendChild(idInput);
      this.appendChild(qtyInput);

      productForm.appendChild(idInput.cloneNode(true));
      productForm.appendChild(qtyInput.cloneNode(true));

      const mainIdInput = productForm.querySelector('input[name="id"]');
      if (mainIdInput) {
        mainIdInput.name = 'items[0][id]';
      }

      const mainQty = document.createElement('input');
      mainQty.type = 'hidden';
      mainQty.name = 'items[0][quantity]';
      const qtySource = document.querySelector('.quantity__input'); // original assumption
      mainQty.value = qtySource ? qtySource.value : 1;
      mainQty.classList.add('product-hidden-qty');
      productForm.appendChild(mainQty.cloneNode(true));
    } else {
      // Remove hidden inputs (global removal exactly like candidate code)
      document.querySelectorAll('.upsell-hidden-id, .upsell-hidden-qty').forEach((el) => el.remove());

      const prodHiddenQty = document.querySelector('.product-hidden-qty');
      if (prodHiddenQty) prodHiddenQty.remove();

      // If no upsells checked, restore original
      const stillChecked = document.querySelectorAll('.upsell-checkbox:checked').length;
      if (!stillChecked) {
        const mainIdInput = productForm.querySelector('input[name="items[0][id]"]');
        if (mainIdInput) {
          mainIdInput.name = 'id';
        }
      }
    }
  }
}

customElements.define('upsell-item', UpsellItem);
