import { test } from '@playwright/test';
import { expect } from 'custom-assertions';
import { VariantPicker } from 'page-object-models/variant-picker';

test.describe('Variant URL updates', () => {
  const PRODUCT_URL = 'products/test-ui-everyday-shortsleeve';
  const PRODUCT_ID = '10492024913942';
  const DEFAULT_VARIANT_ID = '52144444276758'; // Default variant ID for testing

  /**
   * Helper function to find an unselected option in a dropdown
   * @param {import('@playwright/test').Locator} dropdown - The select dropdown element
   * @param {string[]} excludeVariantIds - Array of variant IDs to exclude
   * @returns {Promise<{option: import('@playwright/test').Locator, variantId: string} | null>}
   */
  async function findUnselectedOption(dropdown, excludeVariantIds = []) {
    const allOptions = await dropdown.locator('option').all();

    for (const option of allOptions) {
      const variantId = await option.getAttribute('data-variant-id');
      if (variantId && !excludeVariantIds.includes(variantId)) {
        return { option, variantId };
      }
    }

    return null;
  }

  test('Updates URL with correct variant ID when using a button option in variant picker', async ({ page }) => {
    // Navigate to product page with button style variant picker
    await page.goto(`${PRODUCT_URL}?view=test-variant-dropdowns-with-swatches`);

    // Wait for variant picker to be loaded
    const variantPicker = page.locator(`variant-picker[data-product-id="${PRODUCT_ID}"]`);
    const picker = new VariantPicker(variantPicker);
    await expect(variantPicker).toBeVisible();

    // Get the fieldset for swatches class .variant-option--swatches
    const swatchesFieldset = variantPicker.locator('.variant-option--swatches');
    await expect(swatchesFieldset).toBeVisible();
    const swatches = await swatchesFieldset.locator('input[type="radio"]').all();

    // Get the second swatch
    const secondSwatch = swatches[1];

    // Get the variant ID of the second swatch
    const secondSwatchVariantId = await secondSwatch.getAttribute('data-variant-id');

    // Click the second swatch
    await secondSwatch.click({ force: true });
    await picker.updateUrlAfterVariantSelection(secondSwatch);
    await expect(page).toHaveUrlParameter('variant', secondSwatchVariantId);

    // Get the third swatch
    const thirdSwatch = swatches[2];

    // Get the variant ID of the third swatch
    const thirdSwatchVariantId = await thirdSwatch.getAttribute('data-variant-id');

    // Click the third swatch
    await thirdSwatch.click({ force: true });
    await picker.updateUrlAfterVariantSelection(thirdSwatch);
    await expect(page).toHaveUrlParameter('variant', thirdSwatchVariantId);
  });

  test('Updates URL with correct variant ID when using a dropdown option in variant picker', async ({ page }) => {
    // Navigate to product page with dropdown style variant picker
    await page.goto(`${PRODUCT_URL}?view=test-variant-dropdowns-with-swatches`);

    // Wait for variant picker to be loaded
    const variantPicker = page.locator(`variant-picker[data-product-id="${PRODUCT_ID}"]`);
    const picker = new VariantPicker(variantPicker);
    await expect(variantPicker).toBeVisible();

    // Get the size dropdown
    const sizeDropdown = variantPicker.locator('select').first();
    await expect(sizeDropdown).toBeVisible();

    // Get the initially selected variant (S)
    const initialSelectedOption = await sizeDropdown.locator('option[selected]').first();
    const initialVariantId = await initialSelectedOption.getAttribute('data-variant-id');

    // Find and select the first unselected option (M)
    const firstUnselectedOption = await findUnselectedOption(sizeDropdown, [initialVariantId]);
    expect(firstUnselectedOption?.variantId).toBeTruthy();

    const optionValue = await firstUnselectedOption.option.getAttribute('value');
    await sizeDropdown.selectOption(optionValue);
    await picker.updateUrlAfterVariantSelection(sizeDropdown);
    await expect(page).toHaveUrlParameter('variant', firstUnselectedOption.variantId);

    // Test selecting another variant (L)
    const anotherUnselectedOption = await findUnselectedOption(sizeDropdown, [
      initialVariantId,
      firstUnselectedOption.variantId,
    ]);

    const anotherOptionValue = await anotherUnselectedOption.option.getAttribute('value');
    await sizeDropdown.selectOption(anotherOptionValue);
    await picker.updateUrlAfterVariantSelection(sizeDropdown);
    await expect(page).toHaveUrlParameter('variant', anotherUnselectedOption.variantId);
  });

  test('Preserves variant URL parameter on page reload', async ({ page }) => {
    // Navigate to product page with a specific variant
    await page.goto(`${PRODUCT_URL}?variant=${DEFAULT_VARIANT_ID}`);

    // Wait for variant picker to be loaded
    const variantPicker = page.locator(`variant-picker[data-product-id="${PRODUCT_ID}"]`);
    await expect(variantPicker).toBeVisible();

    // Verify the URL still has the variant parameter
    await expect(page).toHaveUrlParameter('variant', DEFAULT_VARIANT_ID);

    // Reload the page
    await page.reload();

    // Verify the variant parameter is preserved after reload
    await expect(page).toHaveUrlParameter('variant', DEFAULT_VARIANT_ID);
  });
});
