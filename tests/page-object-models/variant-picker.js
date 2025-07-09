/**
 * Page object model representing variant picker functionality
 */
export class VariantPicker {
  /**
   * @param {import('@playwright/test').Locator} variantPicker - The variant picker locator
   */
  constructor(variantPicker) {
    /** @private */
    this.variantPicker = variantPicker;
  }

  /**
   * Updates the URL after variant selection based on the picker style
   * @param {import('@playwright/test').Locator} selectedElement - The selected element (button or dropdown)
   * @returns {Promise<void>}
   */
  async updateUrlAfterVariantSelection(selectedElement) {
    const page = this.variantPicker.page();

    await page.evaluate(
      ({ pickerEl, targetEl }) => {
        const url = new URL(window.location.href);
        const pickerStyle = pickerEl.dataset.pickerStyle;

        let variantId;

        if (targetEl instanceof HTMLInputElement && targetEl.type === 'radio') {
          variantId = targetEl.dataset.variantId || null;
        } else if (targetEl instanceof HTMLSelectElement) {
          const selectedOption = targetEl.options[targetEl.selectedIndex];
          variantId = selectedOption?.dataset.variantId || null;
        }

        if (variantId) {
          url.searchParams.set('variant', variantId);
        } else {
          url.searchParams.delete('variant');
        }

        // Update the URL without navigation, just like variant-picker.js does
        history.replaceState({}, '', url.toString());
      },
      {
        pickerEl: await this.variantPicker.elementHandle(),
        targetEl: await selectedElement.elementHandle(),
      }
    );
  }
}
