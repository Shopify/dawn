class VariantMetafields extends HTMLElement {
  constructor() {
    super();
  }

  getMetafields() {
    this.metafields = this.metafields || JSON.parse(this.querySelector('[type="application/json"]').textContent);
    return this.metafields;
  }
}

customElements.define('variant-metafields', VariantMetafields);

function suppressInvalidOptions(metaFields, variantData) {
  variantData.forEach((variant) => {
    let metaField = metaFields[variant.id];
    if (metaField) {
      variant.available = metaFields[variant.id].available;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  let variantRadios = document.querySelectorAll('variant-radios')[0];
  let variantData = variantRadios.getVariantData();
  let metaFields = document.querySelectorAll('variant-metafields')[0].getMetafields();

  // First, disable the ability to select any options marked as unavailable in metafields.
  suppressInvalidOptions(metaFields, variantData);

  const fieldsets = Array.from(variantRadios.querySelectorAll('fieldset'));
  const optionGroups = fieldsets.map((fs) => { return Array.from(fs.querySelectorAll('input'))  });
  const labelGroups = fieldsets.map((fs) => { return Array.from(fs.querySelectorAll('label'))  });
  optionGroups.forEach((og, i) => {

    // If the currently checked option is not available, we need to reset to an available one.
    const availableOptions = [];
    let needsReset = false;

    // Go through each option, and if it's not available, hide it. If it is available, mark it as such, in
    // case we need to reset to it.
    og.forEach((option, j) => {
      let availableVariant = variantData.find((variant) => {
        return variant.options[i] === option.value && variant.available  });
      if (!availableVariant) {
        if (option.checked) {
          needsReset = true;
        }

        option.style.display = 'none';
        labelGroups[i][j].style.display = 'none';
      } else {
        availableOptions.push(option);
      }
    });

    if (needsReset && availableOptions.length > 0) {
      availableOptions[0].checked = true;
    }
  });

  variantRadios.onVariantChange();
});