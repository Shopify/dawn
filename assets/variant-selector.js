class VariantSelector {
  constructor(container) {
    this.container = container;
    this.productForm = container.querySelector('form[action="/cart/add"]');
    this.variantIdInput = this.productForm.querySelector('input[name="id"]');
    this.variantSelects = this.productForm.querySelectorAll('select[name^="options["]');
    this.optionInputs = this.productForm.querySelectorAll('input[type="radio"][name^="options["]');

    this.initEventListeners();
  }

  initEventListeners() {
    this.container.addEventListener('variant:changed', this.onVariantChanged.bind(this));
  }

  onVariantChanged(event) {
    const { optionPosition, value } = event.detail;
    const selectElement = this.variantSelects[optionPosition - 1];
    
    if (selectElement) {
      selectElement.value = value;
      selectElement.dispatchEvent(new Event('change', { bubbles: true }));
    }

    this.updateVariantId();
  }

  updateVariantId() {
    const selectedOptions = Array.from(this.variantSelects).map(select => select.value);
    const matchingVariant = this.findMatchingVariant(selectedOptions);

    if (matchingVariant) {
      this.variantIdInput.value = matchingVariant.id;
      this.variantIdInput.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  findMatchingVariant(selectedOptions) {
    return this.productForm.variants.find(variant => 
      variant.options.every((option, index) => option === selectedOptions[index])
    );
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const productContainers = document.querySelectorAll('[data-product-container]');
  productContainers.forEach(container => new VariantSelector(container));
});