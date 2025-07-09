// @ts-check
const { test, expect } = require('@playwright/test');
const { runSnapshotTest } = require('utils/visualRegressionTests');

test.describe('List collections template', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('collections?view=test-collection-list');
  });

  test('displays more than 6 collections', async ({ page }) => {
    const targetSection = page.locator('.ui-test-collection-list');
    const collectionsLinkCount = await targetSection.getByRole('link').count();
    await expect(collectionsLinkCount).toBeGreaterThan(6);
  });

  test('displays a heading', async ({ page }) => {
    const targetSection = page.locator('.ui-test-collection-list');
    const heading = targetSection.getByRole('heading').first();
    await expect(heading).toBeVisible();
  });

  test('onboarding cards all link to different collections', async ({ page }) => {
    const targetSection = page.locator('.ui-test-collection-list');
    const collectionCards = await targetSection.getByRole('link').all();
    const collectionUrls = await Promise.all(collectionCards.map(async (card) => await card.getAttribute('href')));
    const uniqueCollectionUrls = [...new Set(collectionUrls)];
    expect(uniqueCollectionUrls).toHaveLength(collectionUrls.length);
  });
});

runSnapshotTest('/collections?view=test-collection-list', 'collection-list');
