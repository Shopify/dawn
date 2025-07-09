import { test, expect } from '@playwright/test';
import { runSnapshotTest } from 'utils/visualRegressionTests';

test.describe('Collections List Carousel', () => {
  test('displays correct number of items in a carousel', async ({ page }) => {
    await page.goto('/?view=test-collections-list-carousel');
    const targetSection = await page.locator('.ui-test-collection-list');

    const carousel = targetSection.locator('slideshow-component');
    await expect(carousel).toBeVisible();
    const items = carousel.locator('slideshow-slide');

    // Verify we have 5 items (based on the test fixture)
    await expect(items).toHaveCount(5);
  });

  runSnapshotTest('/?view=test-collections-list-carousel', 'collections-list-carousel');
});
