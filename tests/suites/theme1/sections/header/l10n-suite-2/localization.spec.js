import { test, expect } from '@playwright/test';

test.describe('Localization', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/?view=test-locale-suite-2');
  });

  test('Language picker is visible, region selector is not visible', async ({ page }) => {
    const localizationSelector = page.locator('localization-form-component');
    await expect(localizationSelector.getByRole('button', { name: 'Region and language' })).not.toBeVisible();
    await expect(localizationSelector.getByRole('combobox', { name: 'Language' })).toBeVisible();
  });
});
