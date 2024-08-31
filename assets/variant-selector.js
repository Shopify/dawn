class VariantSelector {
  constructor(container) {
    this.container = container;
    this.productForm = container.querySelector('form[action="/cart/add"]');
    this.variantIdInput = this.productForm.querySelector('input[name="id"]');
    this.optionInputs = this.productForm.querySelectorAll('input[type="radio"][name^="options["]');
    this.productJSON = JSON.parse(this.container.querySelector('[data-product-json]').textContent);

    this.initEventListeners();
    this.updateVariantId(); // Initialize with the default variant
  }

  initEventListeners() {
    this.container.addEventListener('variant:changed', this.onVariantChanged.bind(this));
  }

  onVariantChanged(event) {
    const { optionPosition, value } = event.detail;
    const optionInputs = this.container.querySelectorAll(`input[type="radio"][data-index="option${optionPosition}"]`);
    
    optionInputs.forEach(input => {
      if (input.value === value) {
        input.checked = true;
      }
    });

    this.updateVariantId();
  }

  updateVariantId() {
    const selectedOptions = Array.from(this.optionInputs)
      .filter(input => input.checked)
      .map(input => input.value);

    const matchingVariant = this.findMatchingVariant(selectedOptions);

    if (matchingVariant) {
      this.variantIdInput.value = matchingVariant.id;
      this.variantIdInput.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }

  findMatchingVariant(selectedOptions) {
    return this.productJSON.variants.find(variant => 
      variant.options.every((option, index) => option === selectedOptions[index])
    );
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const productContainers = document.querySelectorAll('[data-product-container]');
  productContainers.forEach(container => new VariantSelector(container));
});