// @ts-check
const { test, expect } = require('@playwright/test');
const { translation: t } = require('utils/translations');

// Note: Additional tests are in product-information.spec.js,
// though focused on more presentational aspects

test.describe('Product page', () => {
  const PRODUCT_URL = 'products/test-ui-everyday-shortsleeve?view=test-add-to-cart';
  const PRODUCT_ID = '10492024913942';

  test.beforeEach(async ({ page }) => {
    await page.goto(PRODUCT_URL);
  });

  test('Quantity selector should not have negative values or 0', async ({ page }) => {
    const quantityInput = page.getByRole('spinbutton');
    await quantityInput.fill('-1');
    await quantityInput.blur();
    await expect(quantityInput).toHaveValue('1');
    await quantityInput.fill('0');
    await quantityInput.blur();
    await expect(quantityInput).toHaveValue('1');
  });

  test('After switching variants, the correct variant is added to cart', async ({ page }) => {
    const productForm = page.locator(`product-form-component[data-product-id="${PRODUCT_ID}"]`);
    const variantPickers = page.locator(`variant-picker[data-product-id="${PRODUCT_ID}"]`);

    const addToCartButton = productForm.getByRole('button', { name: t('actions.add_to_cart') });
    await expect(addToCartButton).toBeEnabled();

    const smallSizeOption = variantPickers.getByLabel('S', { exact: true });
    const mediumSizeOption = variantPickers.getByLabel('M', { exact: true });
    const variantIDInput = productForm.locator('input[name="id"]');
    const initialVariantID = await variantIDInput.inputValue();

    expect(smallSizeOption).toBeChecked();
    expect(mediumSizeOption).not.toBeChecked();

    await mediumSizeOption.click();

    expect(mediumSizeOption).toBeChecked();
    expect(smallSizeOption).not.toBeChecked();

    await expect(addToCartButton).toBeEnabled();
    const newVariantID = await variantIDInput.inputValue();
    expect(newVariantID).not.toEqual(initialVariantID);

    await addToCartButton.click();

    // Get add.js response and check that the variant ID is the new one
    const addJsResponse = await page.waitForResponse('**/add.js');
    const addJsResponseBody = await addJsResponse.json();
    expect(addJsResponseBody.variant_id).toEqual(Number(newVariantID));
  });
});
