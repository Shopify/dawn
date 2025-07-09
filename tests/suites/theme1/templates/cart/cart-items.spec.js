// @ts-check
const { test, expect } = require('@playwright/test');
const { translation: t } = require('utils/translations');

test.describe('Cart items', () => {
  const CART_CLEAR_URL = 'cart/clear';
  const CART_URL = 'cart';
  const PRODUCT_URL = 'products/test-ui-everyday-shortsleeve';
  const VARIANT_ID = '52144444080150';
  const lineItemProperties = { Engraving: 'Hello world', _hidden: 'Alluring secret' };
  const encodedLineItemProperties = btoa(JSON.stringify(lineItemProperties));
  const CART_PERMALINK = `cart/${VARIANT_ID}:1?properties=${encodedLineItemProperties}&storefront=true`;

  test.beforeEach(async ({ page }) => {
    await page.goto(CART_CLEAR_URL);
    await page.goto(CART_PERMALINK);
  });

  test('Product options are correctly displayed in cart drawer', async ({ page }) => {
    // Cart drawer cannot be opened on cart page, so we need to go to another page first
    await page.goto(PRODUCT_URL);
    const cartDrawerTrigger = page.getByRole('button', { name: t('accessibility.open_cart_drawer') });
    await cartDrawerTrigger.click();
    await expect(page.getByText('Silver, S')).toBeVisible();
  });

  test('Product options are correctly displayed in cart page', async ({ page }) => {
    await expect(page.getByText('Silver, S')).toBeVisible();
  });

  test('Line item properties are correctly displayed in cart drawer', async ({ page }) => {
    // Cart drawer cannot be opened on cart page, so we need to go to another page first
    await page.goto(PRODUCT_URL);
    const cartDrawerTrigger = page.getByRole('button', { name: t('accessibility.open_cart_drawer') });
    await cartDrawerTrigger.click();
    await expect(page.getByText('Engraving: Hello world')).toBeVisible();
    await expect(page.getByText('Alluring secret')).not.toBeAttached();
  });

  test('Line item properties are correctly displayed in cart page', async ({ page }) => {
    await expect(page.getByText('Engraving: Hello world')).toBeVisible();
    await expect(page.getByText('Alluring secret')).not.toBeAttached();
  });
});
