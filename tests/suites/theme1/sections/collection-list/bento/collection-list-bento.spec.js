import { runAccessibilityTest } from '@/utils/accesibilityTests';
import { test, expect } from '@playwright/test';

test.describe('Collections List: Bento Layout', () => {
  test('displays correct number of items in a bento box', async ({ page }) => {
    await page.goto('/?view=test-collection-list-bento');
    const bentoBox = page.getByTestId('bento-box');
    await expect(bentoBox).toBeVisible();
    const items = bentoBox.getByRole('link');

    // Verify we have 10 items (based on the test fixture)
    await expect(items).toHaveCount(10);
  });

  test('displays carousel on mobile when carousel_on_mobile is true', async ({ page }) => {
    await page.goto('/?view=test-collection-list-bento');

    const targetSection = await page.locator('.section-resource-list');
    await expect(targetSection.locator('slideshow-component')).not.toBeVisible();
    await page.setViewportSize({ width: 600, height: 800 });
    const bentoBox = page.getByTestId('bento-box');
    await expect(bentoBox).not.toBeVisible();
    await expect(targetSection.locator('slideshow-component')).toBeVisible();
  });

  test('displays correct number of bento boxes when there are 13 items', async ({ page }) => {
    await page.goto('/?view=test-collection-list-bento-large');
    const bentoBox = page.getByTestId('bento-box');
    await expect(bentoBox).toHaveCount(2);
    const firstBoxItems = bentoBox.first().getByRole('link');
    const secondBoxItems = bentoBox.last().getByRole('link');

    // Verify we have 11 then 2 items (based on the test fixture)
    await expect(firstBoxItems).toHaveCount(11);
    await expect(secondBoxItems).toHaveCount(2);
  });

  test('all images have the same height, even when the image ratio is adapt', async ({ page }) => {
    await page.goto('/?view=test-collection-list-bento');
    await page.waitForLoadState('load');
    const bentoBox = page.getByTestId('bento-box');
    const images = bentoBox.getByRole('img');

    // Wait for at least one image to be visible
    await images.first().waitFor({ state: 'visible' });

    const imageHeights = await images.evaluateAll((elements) =>
      elements.map((el) => Math.round(el.getBoundingClientRect().height))
    );

    const uniqueHeights = [...new Set(imageHeights)];
    expect(uniqueHeights).toHaveLength(1);
    expect(uniqueHeights[0]).toBeGreaterThan(0);
  });

  runAccessibilityTest('/?view=test-collection-list-bento', '[data-testid="bento-box"]');
});
