import { test, expect } from '@playwright/test';
const { translation: t } = require('utils/translations');

const PRODUCT_URL = 'products/test-ui-everyday-shortsleeve?view=test-cart-bubble-add-to-cart';
const PRODUCT_URL_NO_QUANTITY_INPUT =
  'products/test-ui-everyday-shortsleeve?view=test-cart-bubble-add-to-cart-no-quantity-input';

const cartBubbleTestId = 'cart-bubble';
const cartIconTestId = 'cart-icon';

test.describe('Page style - Cart bubble - Adding from product form, quantity input is present', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(PRODUCT_URL);
  });

  test('Cart bubble is not visible when the cart is empty and becomes visible when a product is added', async ({
    page,
  }) => {
    const cartIcon = page.getByTestId(cartIconTestId);
    const cartBubble = cartIcon.getByTestId(cartBubbleTestId);

    await expect(cartBubble).not.toBeVisible();

    const addToCartButton = page.getByRole('button', { name: t('actions.add_to_cart') });
    await addToCartButton.click();

    await expect(cartBubble).toBeVisible();
  });

  test('Cart bubble is updated with the correct quantity', async ({ page }) => {
    const cartIcon = page.getByTestId(cartIconTestId);
    const cartBubble = cartIcon.getByTestId(cartBubbleTestId);

    const addToCartButton = page.getByRole('button', { name: t('actions.add_to_cart') });
    const quantityInput = page.getByRole('spinbutton');

    const quantity = 3;
    await quantityInput.fill(quantity.toString());
    const inputValue = await quantityInput.inputValue();

    await addToCartButton.click();

    await expect(cartBubble).toBeVisible();
    await expect(cartBubble).toContainText(`${inputValue}`);
  });
});

test.describe('Page style - Cart bubble - Adding from product form, quantity input is not present', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(PRODUCT_URL_NO_QUANTITY_INPUT);
  });

  test('Cart bubble is not visible when the cart is empty and becomes visible when a product is added', async ({
    page,
  }) => {
    const cartIcon = page.getByTestId(cartIconTestId);
    const cartBubble = cartIcon.getByTestId(cartBubbleTestId);

    await expect(cartBubble).not.toBeVisible();

    const addToCartButton = page.getByRole('button', { name: t('actions.add_to_cart') });
    await addToCartButton.click();

    await expect(cartBubble).toBeVisible();
  });

  test('Cart bubble is updated with the correct quantity', async ({ page }) => {
    const cartIcon = page.getByTestId(cartIconTestId);
    const cartBubble = cartIcon.getByTestId(cartBubbleTestId);

    const addToCartButton = page.getByRole('button', { name: t('actions.add_to_cart') });

    await addToCartButton.click();

    await expect(cartBubble).toBeVisible();
    await expect(cartBubble).toContainText(`1`);
  });
});
