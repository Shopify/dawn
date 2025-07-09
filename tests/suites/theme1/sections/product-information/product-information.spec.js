// @ts-check
const { test, expect } = require('@playwright/test');
const { translation: t } = require('utils/translations');
const { runAccessibilityTest } = require('@/utils/accesibilityTests');

test.describe('Product page', () => {
  const PRODUCT_URL = 'products/test-ui-everyday-shortsleeve?view=test-product-form';
  const PRODUCT_ID = '10492024913942';
  // product with more variant options
  const PRODUCT_2_URL = 'products/test-ui-high-rise-barrel-jeans?view=test-product-form';
  const PRODUCT_2_ID = '10576900259862';
  // product no media
  const PRODUCT_3_URL = 'products/test-ui-product-with-no-media?view=test-product-form';
  const PRODUCT_3_ID = '10577303142422';
  // product with carousel media
  const PRODUCT_4_URL = 'products/test-ui-everyday-shortsleeve?view=test-product-information-carousel';
  const PRODUCT_5_URL = 'products/test-ui-everyday-shortsleeve?view=test-product-information-grid';

  test.describe('Product form', () => {
    test('Product form should be visible with enabled Add to cart button', async ({ page }) => {
      await page.goto(PRODUCT_URL);
      const productForm = page.locator(`product-form-component[data-product-id="${PRODUCT_ID}"]`);
      await expect(productForm).toBeVisible();
      const addToCartButton = productForm.getByRole('button', { name: t('actions.add_to_cart'), exact: true });
      await expect(addToCartButton).toBeVisible();
      await expect(addToCartButton).toBeEnabled();
    });

    test('Brown color should have aria-disabled, but not disabled attr', async ({ page }) => {
      await page.goto(PRODUCT_URL);
      const productForm = page.locator(`product-form-component[data-product-id="${PRODUCT_ID}"]`);
      const addToCartButton = productForm.getByRole('button', { name: t('actions.add_to_cart'), exact: true });
      await expect(addToCartButton).toBeEnabled();

      const variantPickers = page.locator('variant-picker');
      const brownColorInput = variantPickers.getByLabel('Brown');
      await expect(brownColorInput).toBeDisabled();
      await expect(brownColorInput).not.toHaveAttribute('disabled');
    });

    test('Selecting Orange / S disables Add to cart button, then Orange / L enables it', async ({ page }) => {
      await page.goto(PRODUCT_URL);
      const productInformation = page.getByTestId('product-information-details');
      const productForm = productInformation.locator(`product-form-component[data-product-id="${PRODUCT_ID}"]`);
      const addToCartButton = productForm.getByRole('button', { name: t('actions.add_to_cart'), exact: true });
      await expect(addToCartButton).toBeEnabled();

      const variantPickers = productInformation.locator('variant-picker');
      const orangeColorInput = variantPickers.getByLabel('Orange');
      await orangeColorInput.click();

      const smallSizeInput = variantPickers.getByLabel('S', { exact: true });
      // Element has aria-disabled, so it fails the enabled check without force: https://playwright.dev/docs/actionability#enabled
      await smallSizeInput.click({ force: true });
      const unavailableButton = productForm.getByRole('button', {
        name: t('products.product.unavailable'),
        exact: true,
      });
      await expect(unavailableButton).toBeVisible();

      const largeSizeInput = variantPickers.getByLabel('L', { exact: true });
      await largeSizeInput.click();
      await expect(addToCartButton).toBeEnabled();
    });

    test('Variant buttons have equal width buttons by default', async ({ page }) => {
      await page.goto(PRODUCT_2_URL);

      const variantPickers = page.locator('variant-picker');

      const size24Input = variantPickers.getByLabel('24', { exact: true });
      const size24Box = await size24Input.boundingBox();

      const size35Input = variantPickers.getByLabel('35', { exact: true });
      const size35Box = await size35Input.boundingBox();

      if (!size24Box || !size35Box) {
        test.fail();
        return;
      }

      // buttons wrapping on different lines should have same width
      expect(size24Box.width).toBeCloseTo(size35Box.width);

      const regularInput = variantPickers.getByLabel('Regular', { exact: true });
      const regularBox = await regularInput.boundingBox();

      const tallInput = variantPickers.getByLabel('Tall', { exact: true });
      const tallBox = await tallInput.boundingBox();

      if (!tallBox || !regularBox) {
        test.fail();
        return;
      }

      // buttons with different size content should have same width
      expect(regularBox.width).toBeCloseTo(tallBox.width, 1);
      // buttons in different option fields should have different widths
      expect(size24Box.width).not.toBeCloseTo(regularBox.width);
    });

    runAccessibilityTest(
      'products/test-ui-everyday-shortsleeve?view=test-product-form',
      '[data-testid="product-information-details"]'
    );
  });

  test.describe('Layouts', () => {
    test('Should have info and media columns', async ({ page }) => {
      await page.goto(PRODUCT_URL);

      const info = await page.getByTestId('product-information-details');
      await expect(info).toBeVisible();

      const media = await page.getByTestId('product-information-media');
      await expect(media).toBeVisible();
    });

    test('Should not have media column when product has no media', async ({ page }) => {
      await page.goto(PRODUCT_3_URL);

      const info = await page.getByTestId('product-information-details');
      await expect(info).toBeVisible();

      const media = await page.getByTestId('product-information-media');
      await expect(media).not.toBeVisible();
    });

    test('Should center product information when no media', async ({ page }) => {
      const CONTENT_WIDTH = 576;

      await page.goto(PRODUCT_3_URL);

      const info = await page.getByTestId('product-information-details');
      await info.waitFor({ state: 'visible' });

      const infoBox = await info.boundingBox();

      if (!infoBox) {
        test.fail();
        return;
      }

      await expect(infoBox.width).toBe(CONTENT_WIDTH);

      const pageCenter = await page.evaluate(() => window.innerWidth / 2);
      const infoCenter = infoBox.x + infoBox.width / 2;

      // product info should be centered on the page
      await expect(infoCenter).toBeCloseTo(pageCenter, 1);
    });
  });

  test.describe('Media gallery', () => {
    test('Should display media when presentation is set to carousel', async ({ page }) => {
      await page.goto(PRODUCT_4_URL);

      const mediaGallery = page.locator('media-gallery > slideshow-component');
      await expect(mediaGallery).toBeVisible();

      await page.setViewportSize({ width: 749, height: 1000 });
      const mediaGalleryMobile = page.locator('media-gallery > slideshow-component');
      await expect(mediaGalleryMobile).toBeVisible();
    });

    test('Should display media when presentation is set to grid', async ({ page }) => {
      await page.goto(PRODUCT_5_URL);

      const mediaGallery = page.getByTestId('media-gallery-grid');
      await expect(mediaGallery).toBeVisible();

      // On mobile, the media gallery shows as a slideshow even when the presentation is set to grid
      await page.setViewportSize({ width: 749, height: 1000 });
      const mediaGalleryMobile = page.locator('media-gallery > slideshow-component');
      await expect(mediaGalleryMobile).toBeVisible();
    });
  });
});
