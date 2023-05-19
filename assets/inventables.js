class VariantMetafields extends HTMLElement {
  constructor() {
    super();
  }

  getMetafields() {
    this.metafields = this.metafields || this.querySelector('[type="application/json"]').textContent;
    return this.metafields;
  }
}

customElements.define('variant-metafields', VariantMetafields);

function suppressInvalidOptions() {
  let metaFields = JSON.parse(document.querySelectorAll('variant-metafields')[0].getMetafields());
  let variantSelect = document.querySelectorAll('variant-selects, variant-radios')[0]
  let variantData = variantSelect.getVariantData();
  variantData.forEach((variant) => {
    let metaField = metaFields[variant.id];
    if (metaField) {
      variant.available = metaFields[variant.id].available;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  suppressInvalidOptions();
  let variantSelect = document.querySelectorAll('variant-selects, variant-radios')[0];
  variantSelect.onVariantChange();
});