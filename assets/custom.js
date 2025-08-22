// UpsellItem Web Component
class UpsellItem extends HTMLElement {
  constructor() {
    super();
    this.isChecked = false;
    this.variantId = this.dataset.variantId;
    this.index = 0;
    this.productFormId = '';
    this.originalMainIdInput = null;
    this.quantitySourceInput = null;
  }

  connectedCallback() {
    this.setupFormReferences();
    this.setupEventListeners();
  }

  setupFormReferences() {
    const productForm = document.querySelector('product-form')?.querySelector('form[action="/cart/add"]');
    if (!productForm) return;

    this.productFormId = productForm.getAttribute('id');
    this.originalMainIdInput = productForm.querySelector('input[name="id"]');
    this.quantitySourceInput = document.querySelector('.quantity__input');
    
    // Set index based on position among other upsell items
    const allUpsells = document.querySelectorAll('upsell-item');
    this.index = Array.from(allUpsells).indexOf(this);
  }

  setupEventListeners() {
    const checkbox = this.querySelector('.upsell-checkbox');
    if (checkbox) {
      checkbox.addEventListener('change', (e) => this.handleCheckboxChange(e));
    }
  }

  handleCheckboxChange(event) {
    this.isChecked = event.target.checked;
    
    if (this.isChecked) {
      this.addToCart();
    } else {
      this.removeFromCart();
    }
  }

  addToCart() {
    // Create hidden inputs for this upsell
    const idInput = document.createElement('input');
    idInput.type = 'hidden';
    idInput.name = `items[${this.index + 1}][id]`;
    idInput.value = this.variantId;
    idInput.classList.add('upsell-hidden-id');
    idInput.setAttribute('form', this.productFormId);

    const qtyInput = document.createElement('input');
    qtyInput.type = 'hidden';
    qtyInput.name = `items[${this.index + 1}][quantity]`;
    qtyInput.value = 1;
    qtyInput.classList.add('upsell-hidden-qty');
    qtyInput.setAttribute('form', this.productFormId);

    // Append inputs to the component (outside the form but associated via form attribute)
    this.appendChild(idInput);
    this.appendChild(qtyInput);

    // Ensure main product quantity input exists
    this.ensureMainProductQuantity();

    // Convert main product's input if needed
    if (this.originalMainIdInput && this.originalMainIdInput.name === 'id') {
      this.originalMainIdInput.name = 'items[0][id]';
    }
  }

  removeFromCart() {
    // Remove only this upsell's hidden inputs
    this.querySelectorAll('.upsell-hidden-id, .upsell-hidden-qty').forEach((el) => el.remove());

    // Check if any upsells are still checked
    const stillChecked = document.querySelectorAll('.upsell-checkbox:checked').length;
    if (!stillChecked) {
      this.restoreOriginalForm();
    }
  }

  ensureMainProductQuantity() {
    let mainQty = document.querySelector('.product-hidden-qty');
    if (!mainQty) {
      mainQty = document.createElement('input');
      mainQty.type = 'hidden';
      mainQty.name = 'items[0][quantity]';
      mainQty.classList.add('product-hidden-qty');
      mainQty.setAttribute('form', this.productFormId);
      
      // Append to this component but associate with form
      this.appendChild(mainQty);
    }
    
    const quantity = this.quantitySourceInput && this.quantitySourceInput.value ? 
      this.quantitySourceInput.value : 1;
    mainQty.value = quantity;
  }

  restoreOriginalForm() {
    const prodHiddenQty = document.querySelector('.product-hidden-qty');
    if (prodHiddenQty) prodHiddenQty.remove();

    // Restore original main product input name
    if (this.originalMainIdInput && this.originalMainIdInput.name === 'items[0][id]') {
      this.originalMainIdInput.name = 'id';
    }
  }
}

// Register the web component
customElements.define('upsell-item', UpsellItem);