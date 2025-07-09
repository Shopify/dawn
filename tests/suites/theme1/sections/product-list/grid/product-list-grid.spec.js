import { test, expect } from '@playwright/test';

test.describe('Product List: Grid', () => {
  test('displays correct number of items in a grid', async ({ page }) => {
    await page.goto('/?view=test-product-list-grid');
    const grid = page.getByTestId('resource-list-grid');
    await expect(grid).toBeVisible();
    const items = grid.getByRole('link');

    // Verify we have the expected number of items (based on the test fixture)
    await expect(items).toHaveCount(4);
  });

  test('does not display a carousel on mobile when carousel_on_mobile is true', async ({ page }) => {
    await page.goto('/?view=test-product-list-grid');
    // Set viewport to mobile size
    await page.setViewportSize({ width: 600, height: 800 });

    // The grid should not be visible on mobile when carousel is enabled
    const grid = page.getByTestId('resource-list-grid');
    await expect(grid).toBeVisible();

    // The carousel should be visible instead
    const targetSection = await page.locator('.section-product-list');
    await expect(targetSection.locator('slideshow-component')).not.toBeVisible();
  });

  test('displays a carousel on mobile when carousel_on_mobile is true', async ({ page }) => {
    await page.goto('/?view=test-product-list-grid-with-carousel');
    // Set viewport to mobile size
    await page.setViewportSize({ width: 600, height: 800 });

    // The grid should not be visible on mobile when carousel is enabled
    const grid = page.getByTestId('resource-list-grid');
    await expect(grid).not.toBeVisible();

    // The carousel should be visible instead
    const targetSection = await page.locator('.ui-test-product-list');
    await expect(targetSection.locator('slideshow-component[ref="resourceListCarouselMobile"]')).toBeVisible();
  });

  test('product card carousels can scroll on mobile when carousel_on_mobile is false', async ({ page }) => {
    await page.goto('/?view=test-product-list-grid');
    await page.setViewportSize({ width: 600, height: 800 });

    const grid = page.getByTestId('resource-list-grid');
    await grid.waitFor({ state: 'visible' });

    const cardGallerySlideshow = grid.locator('.card-gallery').first().locator('slideshow-component');
    // card carousels should be disabled on mobile when product list is a carousel
    await expect(cardGallerySlideshow.locator('slideshow-arrows')).toBeVisible();
  });

  test('product card carousels cannot scroll on mobile when carousel_on_mobile is true', async ({ page }) => {
    await page.goto('/?view=test-product-list-grid-with-carousel');
    await page.setViewportSize({ width: 600, height: 800 });

    const productCarousel = page.locator('slideshow-component[ref="resourceListCarouselMobile"]');
    await productCarousel.waitFor({ state: 'visible' });

    const cardGallerySlideshow = productCarousel.locator('.card-gallery').first().locator('slideshow-component');
    // card carousels should be disabled on mobile when product list is a carousel
    await expect(cardGallerySlideshow.locator('slideshow-arrows')).not.toBeVisible();
  });
});
