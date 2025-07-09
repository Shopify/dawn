// @ts-check
const { test, expect } = require('@playwright/test');
const { translation: t } = require('utils/translations');

test.describe('Collection card', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/?view=test-collection-card-placeholder');
  });

  test.skip('To have a placeholder image and text when no collection is available', async ({ page }) => {
    const collectionCard = page.getByTestId('collection-card-placeholder');
    await collectionCard.waitFor({ state: 'visible' });
    await expect(collectionCard.getByRole('img')).toBeVisible();
    await expect(collectionCard).toContainText(t('content.collection_placeholder'));
  });
});
