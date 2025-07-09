import { test, expect } from '@playwright/test';
import { runAccessibilityTest } from '@/utils/accesibilityTests';
const { desktopViewport, mobileViewport } = require('utils/viewports');

const testViewports = [desktopViewport, mobileViewport];

test.describe('Product List: Carousel', () => {
  test('displays a product carousel, does not render the extra mobile carousel', async ({ page }) => {
    await page.goto('/?view=test-product-list-carousel');
    const targetSection = await page.locator('.ui-test-product-list');

    const carousel = targetSection.locator('slideshow-component[ref="resourceListCarousel"]');
    await expect(carousel).toBeVisible();

    const mobileCarousel = targetSection.locator('slideshow-component[ref="resourceListCarouselMobile"]');
    await expect(mobileCarousel).not.toBeAttached();

    await page.setViewportSize({ width: 600, height: 800 });

    await expect(carousel).toBeVisible();
  });

  for (const viewport of testViewports) {
    test(`first slide aligns with section title on ${viewport.description}`, async ({ page, browserName }) => {
      // skip if Safari: known issue: https://github.com/Shopify/horizon/issues/4720
      test.skip(browserName === 'webkit', 'Skipping for Safari');

      await page.setViewportSize(viewport);
      await page.goto('/?view=test-product-list-carousel');
      const targetSection = await page.locator('.ui-test-product-list');
      const sectionTitle = await targetSection.getByRole('heading', { name: 'Featured products' });
      await sectionTitle.waitFor({ state: 'visible' });
      await sectionTitle.scrollIntoViewIfNeeded();

      await expect(page).toHaveScreenshot(`product-list-carousel-${viewport.description}.png`);
    });
  }

  runAccessibilityTest('/?view=test-product-list-carousel', '.ui-test-product-list');
});
