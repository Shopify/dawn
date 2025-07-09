import { test, expect } from '@playwright/test';
const { translation: t } = require('utils/translations');

test.describe('Product Recommendations: Config 1', () => {
  test.beforeEach(async ({ page, browserName }) => {
    await page.goto('/products/hair-gel?view=test-product-recommendations-config-1');
    // skip if Safari; too flaky
    test.skip(browserName === 'webkit', 'Skipping for Safari');
  });

  test.skip('section shows skeleton loader when loading', async ({ page }) => {
    // Mobile viewport size to ensure product-recommendations component intersection
    // observer is not triggered yet
    await page.setViewportSize({ width: 600, height: 800 });
    const targetSection = await page.getByTestId('product-recommendations-section');
    await targetSection.waitFor({ state: 'visible' });

    const skeletonStates = await targetSection.getByLabel(t('accessibility.loading_product_recommendations'));
    await expect(skeletonStates).toHaveCount(4);
  });

  test.skip('block shows skeleton loader when loading', async ({ page }) => {
    const targetBlock = await page.getByTestId('product-recommendations-block');

    // Check for skeleton loader immediately in the block; do not wait for resize
    const skeletonStates = await targetBlock.getByLabel(t('accessibility.loading_product_recommendations'));
    await expect(skeletonStates).toHaveCount(2);
  });

  test('section has a title and a carousel with products', async ({ page }) => {
    const targetSection = await page.getByTestId('product-recommendations-section');

    const title = targetSection.getByRole('heading', { name: 'Related products' });
    await title.waitFor({ state: 'visible' });

    await targetSection.scrollIntoViewIfNeeded();

    const carousel = targetSection.locator('slideshow-component[ref="resourceListCarousel"]');
    await carousel.waitFor({ state: 'visible' });
    await expect(carousel).toBeVisible();
    const productCardCount = await carousel.locator('product-card').count();
    await expect(productCardCount).toBeGreaterThan(0);

    await page.setViewportSize({ width: 600, height: 800 });

    await expect(carousel).toBeVisible();
  });

  test('clicking a product card redirects to the product URL', async ({ page }) => {
    const targetSection = await page.getByTestId('product-recommendations-section');
    await targetSection.scrollIntoViewIfNeeded();

    // Relies on the Ajax call to complete. Instead of trying to detect the response, which is flaky,
    // we wait for the product cards to be visible.
    await expect(async () => {
      // Get the link URL from the first card
      const productCard = targetSection.locator('product-card').first();
      const productLinkHref = await productCard.getByRole('link').getAttribute('href');

      await productCard.click();

      // Verify we've been redirected to the expected URL
      await expect(page.url()).toContain(productLinkHref);
    }).toPass({ intervals: [1_000, 2_000, 3_000] });
  });

  test('block has a title and a grid layout with products', async ({ page }) => {
    const targetBlock = await page.getByTestId('product-recommendations-block');
    await targetBlock.waitFor({ state: 'visible' });

    const title = targetBlock.getByText('You may also like');
    await title.waitFor({ state: 'visible' });

    await targetBlock.scrollIntoViewIfNeeded();

    // Relies on the Ajax call to complete. Instead of trying to detect the response, which is flaky,
    // we wait for the product cards to be visible.
    await expect(async () => {
      const productCardsCount = await targetBlock.locator('product-card').count();
      await expect(productCardsCount).toBeGreaterThan(0);
    }).toPass({ intervals: [1_000, 2_000, 3_000] });
  });
});

test.describe('Product Recommendations: No recommendations', () => {
  // Product 10585456214038, handle `the-bathroom-sink-kit`
  // Manually configured in the Search & Discovery app to have no recommendations
  // Theme should force the All collection to be used as a fallback
  test.beforeEach(async ({ page }) => {
    await page.goto('/products/the-bathroom-sink-kit?view=test-product-recommendations-config-1');
  });

  test.skip('section shows skeleton loader when loading', async ({ page }) => {
    // Mobile viewport size to ensure product-recommendations component intersection
    // observer is not triggered yet
    await page.setViewportSize({ width: 600, height: 800 });
    const targetSection = await page.getByTestId('product-recommendations-section');
    await targetSection.waitFor({ state: 'visible' });

    const skeletonStates = await targetSection.getByLabel(t('accessibility.loading_product_recommendations'));
    await expect(skeletonStates).toHaveCount(4);
  });

  test('section has a title and a carousel with products', async ({ page }) => {
    const targetSection = await page.getByTestId('product-recommendations-section');

    const title = targetSection.getByRole('heading', { name: 'Related products' });
    await title.waitFor({ state: 'visible' });

    await targetSection.scrollIntoViewIfNeeded();

    const carousel = targetSection.locator('slideshow-component[ref="resourceListCarousel"]');
    await carousel.waitFor({ state: 'visible' });

    // Relies on the Ajax call to complete. Instead of trying to detect the response, which is flaky,
    // we wait for the product cards to be visible.
    await expect(async () => {
      const productCardCount = await carousel.locator('product-card').count();
      await expect(productCardCount).toBeGreaterThan(0);
    }).toPass({ intervals: [1_000, 2_000, 3_000] });
  });
});
