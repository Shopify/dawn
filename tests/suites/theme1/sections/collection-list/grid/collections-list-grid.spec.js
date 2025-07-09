import { runAccessibilityTest } from '@/utils/accesibilityTests';
import { test, expect } from '@playwright/test';

test.describe('Collections List: Grid', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/?view=test-collections-list-grid');
  });

  test('displays correct number of items in a grid', async ({ page }) => {
    const grid = page.getByTestId('collections-list-grid');
    await expect(grid).toBeVisible();
    const items = grid.getByRole('link');

    // Verify we have 5 items (based on the test fixture)
    await expect(items).toHaveCount(5);
  });

  test('displays carousel on mobile when carousel_on_mobile is true', async ({ page }) => {
    await page.setViewportSize({ width: 600, height: 800 });
    const grid = page.getByTestId('collections-list-grid');
    await expect(grid).not.toBeVisible();

    const targetSection = await page.locator('.section-resource-list');
    await expect(targetSection.locator('slideshow-component')).toBeVisible();
  });

  test('clicking a collection card redirects to the collection URL', async ({ page }) => {
    const grid = page.getByTestId('collections-list-grid');
    await grid.waitFor({ state: 'visible' });

    // Get the link URL from the first card
    const collectionLink = grid.locator('a').first();
    const expectedUrl = await collectionLink.getAttribute('href');

    // Click the link without specifying position
    await collectionLink.click();

    // Verify we've been redirected to the expected URL
    await expect(page).toHaveURL(new RegExp(expectedUrl));
  });

  runAccessibilityTest('/?view=test-collections-list-grid', '[data-testid="collections-list-grid"]');
});
