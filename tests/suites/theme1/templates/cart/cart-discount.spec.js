// @ts-check
const { test, expect } = require('@playwright/test');
const { translation: t } = require('utils/translations');

test.describe('Cart discounts', () => {
  const CART_CLEAR_URL = 'cart/clear';
  const PRODUCT_URL = 'products/test-ui-everyday-shortsleeve?view=test-discount-code';
  const VARIANT_ID = '52144444080150';
  const CHECKOUT_URL = `cart/${VARIANT_ID}:3`;
  const DISCOUNT_CODE = 'TEST5';
  const INVALID_DISCOUNT_CODE = 'INVALID';
  const SHIPPING_DISCOUNT_CODE = 'SHIPIT';

  test.beforeEach(async ({ page, browserName }) => {
    test.skip(browserName === 'webkit', 'Known issue with clicking summary elements');
    await page.goto(CART_CLEAR_URL);
    await page.goto(CHECKOUT_URL);
    await page.goto(PRODUCT_URL);
  });

  test('Discount can be applied and removed in cart drawer', async ({ page }) => {
    const cartDrawerTrigger = page.getByRole('button', { name: t('accessibility.open_cart_drawer') });

    const cartDrawer = page.locator('.cart-drawer');
    const cartDiscountSummary = cartDrawer.locator('.cart-discount__summary');
    const cartDiscountInput = cartDrawer.getByRole('textbox', { name: t('accessibility.discount') });
    const cartDiscountApplyButton = cartDrawer.getByRole('button', { name: t('actions.apply') });

    await cartDrawerTrigger.click();
    await cartDiscountSummary.click();
    // Safari hack: need to wait before filling the input
    await page.waitForTimeout(500);
    await expect(cartDiscountInput).toHaveValue('');
    await cartDiscountInput.fill(DISCOUNT_CODE);

    await cartDiscountApplyButton.click();

    const cartDiscountError = page.getByText(t('content.discount_code_error'));
    await expect(cartDiscountError).not.toBeVisible();

    const removeDiscountButton = cartDrawer.getByRole('button', {
      name: t('actions.remove_discount', { code: DISCOUNT_CODE }),
    });
    await expect(removeDiscountButton).toBeVisible();

    await removeDiscountButton.click();

    await expect(removeDiscountButton).not.toBeVisible();
  });

  test('Discount code error is displayed when the code is invalid', async ({ page }) => {
    const cartDrawerTrigger = page.getByRole('button', { name: t('accessibility.open_cart_drawer') });
    const cartDrawer = page.locator('.cart-drawer');
    const cartDiscountSummary = cartDrawer.locator('.cart-discount__summary');
    const cartDiscountInput = cartDrawer.getByRole('textbox', { name: t('accessibility.discount') });
    const cartDiscountApplyButton = cartDrawer.getByRole('button', { name: t('actions.apply') });

    await cartDrawerTrigger.click();
    await cartDiscountSummary.click();
    // Safari hack: need to wait before filling the input
    await page.waitForTimeout(500);
    await expect(cartDiscountInput).toHaveValue('');
    await cartDiscountInput.fill(INVALID_DISCOUNT_CODE);

    await cartDiscountApplyButton.click();

    const cartDiscountError = page.getByText(t('content.discount_code_error'));
    await expect(cartDiscountError).toBeVisible();
  });

  test('Shipping discount code error is displayed when the code is valid but not applicable', async ({ page }) => {
    const cartDrawerTrigger = page.getByRole('button', { name: t('accessibility.open_cart_drawer') });
    const cartDrawer = page.locator('.cart-drawer');
    const cartDiscountSummary = cartDrawer.locator('.cart-discount__summary');
    const cartDiscountInput = cartDrawer.getByRole('textbox', { name: t('accessibility.discount') });
    const cartDiscountApplyButton = cartDrawer.getByRole('button', { name: t('actions.apply') });

    await cartDrawerTrigger.click();
    await cartDiscountSummary.click();
    // Safari hack: need to wait before filling the input
    await page.waitForTimeout(500);
    await expect(cartDiscountInput).toHaveValue('');
    await cartDiscountInput.fill(SHIPPING_DISCOUNT_CODE);

    await cartDiscountApplyButton.click();

    const cartDiscountError = page.getByText(t('content.shipping_discount_error'));
    await expect(cartDiscountError).toBeVisible();
  });
});
