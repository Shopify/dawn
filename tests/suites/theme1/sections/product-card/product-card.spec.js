// @ts-check
/** @typedef {import('page-object-models/product-cart').ProductCartPage} ProductCartPageType */
const { test, expect } = require('@playwright/test');
const { translation: t } = require('utils/translations');
const { ProductCardPage, ProductCard } = require('page-object-models/product-card');
const { ProductCartPage } = require('page-object-models/product-cart');

test.describe('Product card', () => {
  /** @type {ProductCardPage} */
  let productCardPage;
  /** @type {ProductCartPageType} */
  let cartPage;

  test.beforeEach(async ({ page }) => {
    productCardPage = new ProductCardPage(page);
    cartPage = new ProductCartPage(page);
    await productCardPage.goToMultipleCardsPage();
  });

  test('To not have a placeholder image when no product is available', async () => {
    await productCardPage.goToNoProductPage();
    const productCard = productCardPage.firstCard;
    await productCard.waitFor({ state: 'attached' });
    await expect(productCard.getByRole('img')).not.toBeAttached();
  });

  test('To have multiple product cards', async () => {
    const productCard = productCardPage.allCards;
    const productCardCount = await productCard.count();
    await expect(productCardCount).toBeGreaterThan(0);
  });

  test('Quick Add button is visible on hover', async () => {
    const productCard = productCardPage.firstCard;
    await productCard.hover();
    await expect(productCard.locator('quick-add-component')).toBeVisible();
  });

  // Tests for Product Swatches

  test('Product Swatches are visible if they exist', async () => {
    const productCard = productCardPage.firstCard;
    const swatches = productCard.locator('swatches-variant-picker-component');

    const hasSwatches = (await swatches.count()) > 0;
    if (hasSwatches) {
      await expect(swatches).toBeVisible();
    }
  });

  test('Hidden swatches counter is visible if all swatches do not fit in the product swatches container', async () => {
    const productCardLocator = await productCardPage.getCardWithMostSwatches();

    if ((await productCardLocator.count()) === 0) {
      throw new Error('No product card found');
    }

    const cardWithMostSwatches = new ProductCard(productCardLocator);

    const variantOptionSwatches = cardWithMostSwatches?.swatches.locator('.variant-option--swatches');

    // Get the bounding boxes
    const productSwatchesBox = await cardWithMostSwatches?.swatches.boundingBox();
    const variantOptionSwatchesBox = await variantOptionSwatches.boundingBox();

    if (variantOptionSwatchesBox.width > productSwatchesBox.width) {
      await expect(cardWithMostSwatches?.hiddenSwatchesCounter).toBeVisible();
    }
  });

  test('When you click on the hidden swatches counter, all swatches are shown and the hidden swatches counter is hidden', async ({
    page,
  }) => {
    const productCardLocator = await productCardPage.getCardWithHiddenSwatchesCounter();

    if ((await productCardLocator.count()) === 0) {
      throw new Error('No product card found');
    }

    const cardWithHiddenSwatches = new ProductCard(productCardLocator);

    // Click the swatches count
    await cardWithHiddenSwatches.hiddenSwatchesCounter.click();

    // Wait a bit for any animations to start
    await page.waitForTimeout(100);

    // Verify all swatches are now visible
    const productSwatches = cardWithHiddenSwatches.swatches;
    const swatches = productSwatches.locator('.variant-option--swatches .swatch');
    const swatchCount = await swatches.count();

    // Wait for each swatch to be visible
    for (let i = 0; i < swatchCount; i++) {
      await expect(swatches.nth(i)).toBeVisible({ timeout: 10000 });
    }

    // Additional check: verify the hidden swatches count is no longer visible
    await expect(cardWithHiddenSwatches.hiddenSwatchesCounter).not.toBeVisible();
  });

  test('When you hover over a swatch, the image changes to the one associated with that swatch', async () => {
    const {
      cardWithMultipleSwatchMedia,
      swatchMediaIds: [_, expectedMediaId],
    } = await productCardPage.getCardWithMultipleSwatchMedia();

    const expectedImage = await cardWithMultipleSwatchMedia?.getSwatchHoverImage(expectedMediaId);
    await expect(expectedImage).toHaveAttribute('aria-hidden', 'false', { timeout: 1_000 });
  });

  test('When a product has a non-swatch default slide, we should reset to that slide when we unhover', async ({
    page,
  }) => {
    const {
      cardWithNonSwatchDefaultSlide,
      swatchMediaIds: [_, expectedMediaId], // second swatch media ID
      defaultSlideId: expectedResetMedia,
    } = await productCardPage.getCardWithNonSwatchDefaultSlide();

    const expectedImage = await cardWithNonSwatchDefaultSlide?.getSwatchHoverImage(expectedMediaId);
    await expect(expectedImage).toHaveAttribute('aria-hidden', 'false');

    if (!expectedResetMedia) {
      test.fail();
      return;
    }

    await page.mouse.move(0, 0);
    const expectedResetImage = await cardWithNonSwatchDefaultSlide?.getImageById(expectedResetMedia);
    await expect(expectedResetImage).toHaveAttribute('aria-hidden', 'false');
  });

  test('When hovering over the image slideshow, navigation arrows are shown and image changes', async () => {
    // TODO: Create the opposite test in theme2 once the tooling is ready
    const { cardWithMultipleSwatchMedia } = await productCardPage.getCardWithMultipleSwatchMedia();

    const slideshow = cardWithMultipleSwatchMedia.slideshow;
    const slideshowArrows = cardWithMultipleSwatchMedia.page.locator('slideshow-arrows');
    const previousArrow = slideshowArrows.getByRole('button', { name: 'Previous slide' });
    const nextArrow = slideshowArrows.getByRole('button', { name: 'Next slide' });
    const alternateMediaId = await slideshow
      .locator('slideshow-slide:not([variant-image])')
      .first()
      .getAttribute('slide-id');

    // Make sure that the alternateMediaId is not the same as the currently visible slide
    const visibleSlideId = await cardWithMultipleSwatchMedia.getActiveImageId();
    await expect(visibleSlideId).not.toBe(alternateMediaId);

    await expect(previousArrow).toHaveCSS('opacity', '0');
    await expect(nextArrow).toHaveCSS('opacity', '0');

    await slideshow.hover();

    await expect(previousArrow).toBeVisible();
    await expect(previousArrow).toHaveCSS('opacity', '1');
    await expect(nextArrow).toBeVisible();
    await expect(nextArrow).toHaveCSS('opacity', '1');

    // Verify that the image has changed automatically on hover
    const currentActiveImageId = await cardWithMultipleSwatchMedia.getActiveImageId();
    expect(currentActiveImageId).toBe(alternateMediaId);
  });

  test('When a product has no variants, the Add button should be visible and add to cart', async () => {
    const cartIcon = cartPage.cartIcon;
    const initialCartBubbleCount = await cartPage.getCartCount({ parseAsNumber: true });

    const productCard = new ProductCard(await productCardPage.getProductCardWithOneVariant());
    await productCard.clickQuickAddButton();
    const expectedCartBubbleCount = initialCartBubbleCount + 1;
    await expect(cartIcon).toContainText(`${expectedCartBubbleCount}`);
  });

  test('When a product has multiple variants, the Add button should open the modal and the add to cart button should close the modal', async () => {
    const productCard = new ProductCard(await productCardPage.getProductCardWithMultipleVariants());
    await productCard.clickQuickAddButton();
    const quickAddModal = await productCardPage.getQuickAddModal();

    await expect(quickAddModal).toBeVisible();
    await expect(quickAddModal.locator('button[name="add"]')).toBeVisible();

    await quickAddModal.locator('button[name="add"]').click({ force: true });
    await expect(quickAddModal).not.toBeVisible();
  });

  test('Changing swatches updates all product-form inputs with the correct variant', async () => {
    // Find a product card that has swatches and the quick add button in "add to cart" mode
    const productCardLocator = await productCardPage.getProductCardWithAddToCartAndSwatches();

    if ((await productCardLocator.count()) === 0) {
      throw new Error('No product card found');
    }

    const productCard = new ProductCard(productCardLocator);

    const productForms = productCard.productForm;
    const variantIdInputs = productForms.locator('input[ref="variantId"]');
    const formCount = await productForms.count();

    const swatches = productCard.swatches.getByRole('radio');
    const secondSwatch = swatches.nth(1);
    const expectedVariantId = await secondSwatch.getAttribute('data-variant-id');

    await secondSwatch.click();

    for (let i = 0; i < formCount; i++) {
      await expect(variantIdInputs.nth(i)).toHaveAttribute('value', expectedVariantId);
    }
  });
});
