import { test, expect } from '@playwright/test';
const { translation: t } = require('utils/translations');
import { mobileViewport } from 'utils/viewports';

/**
 * @param {import('@playwright/test').Page} page
 * @param {'mobile' | 'desktop'} viewport
 */
async function openLocalizationForm(page, viewport) {
  if (viewport === 'mobile') {
    const localizationSummary = page.locator('#HeaderDrawer-localization');
    await expect(localizationSummary).toBeVisible();
    await localizationSummary.click();
  } else {
    const countrySelector = page.getByRole('button', { name: 'Region and language' });
    await expect(countrySelector).toBeVisible();
    await countrySelector.click();
  }
}
/**
 * @param {import('@playwright/test').Page} page
 */
async function getLocalizationForm(page) {
  const localizationForm = page.getByRole('form', { name: t('content.localization_region_and_language') });
  await expect(localizationForm).toBeVisible();

  return localizationForm;
}
/**
 * @param {import('@playwright/test').Page} page
 */
async function getAustraliaListItem(page) {
  const australiaListItem = page.getByRole('option', { name: 'Australia' });
  await expect(australiaListItem).toBeVisible();

  return australiaListItem;
}

test.describe('Localization', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/?view=test-header-localization');
    await openLocalizationForm(page, 'desktop');
  });

  test('Snapshot: localization form', async ({ page }) => {
    const localizationForm = await getLocalizationForm(page);
    await expect(localizationForm).toHaveScreenshot('localization-form.png', { maxDiffPixelRatio: 0.05 });
  });

  test('Countries display their name and currency', async ({ page }) => {
    const australiaListItem = await getAustraliaListItem(page);

    await expect(australiaListItem).toContainText('Australia');
    await expect(australiaListItem).toContainText('AUD');
  });

  test.skip('When clicking on a country, the current selected country is updated', async ({ page }) => {
    const australiaListItem = page.getByRole('option', { name: 'Australia' });
    await expect(australiaListItem).toBeVisible();

    // So it turns out that country selection doesn't work on localhost, so this test won't work there.  It gets into a redirect loop.
    // await australiaListItem.click();

    // await page.waitForLoadState('networkidle');
    // await page.waitForLoadState('domcontentloaded');

    // const countrySelectorButton = page.getByRole('button', { name: 'Region and language' });
    // await expect(countrySelectorButton).toBeVisible();
    // await expect(countrySelectorButton).toContainText('AUD');
  });

  test('Searching for a country displays the correct results and clicking the [X] button returns the search to its empty state', async ({
    page,
  }) => {
    const searchInput = page.getByRole('combobox', { name: t('accessibility.find_country') });
    await expect(searchInput).toBeVisible();

    const belgiumListItem = page.getByRole('option', { name: 'Belgium' });
    await expect(belgiumListItem).toBeVisible();

    await searchInput.click();
    await page.keyboard.type('Australia');

    const australiaListItem = page.getByRole('option', { name: 'Australia' });

    await expect(australiaListItem).toBeVisible();
    await expect(belgiumListItem).not.toBeVisible();

    const resetButton = page.getByRole('button', { name: t('actions.reset') });
    await expect(resetButton).toBeVisible();

    await resetButton.click();

    await expect(australiaListItem).toBeVisible();
    await expect(belgiumListItem).toBeVisible();
    await expect(resetButton).not.toBeVisible();
    await expect(searchInput).toHaveValue('');
  });

  test('The language selector is a dropdown and contains the expected options', async ({ page }) => {
    const localizationForm = await getLocalizationForm(page);
    const languageSelector = localizationForm.getByRole('combobox', { name: t('content.language') });

    await expect(languageSelector).toBeVisible();

    const englishOption = await languageSelector.locator('option').first();
    const frenchOption = await languageSelector.locator('option').nth(1);

    await expect(englishOption).toContainText('English');
    await expect(frenchOption).toContainText('Français');

    // Note, here I would test that clicking the option actually changes the language, but it also hits the redirect loop on localhost.
  });
});

test.describe('Localization on mobile', () => {
  test('The language selector contains options that are not empty on mobile', async ({ page }) => {
    await page.setViewportSize(mobileViewport);
    await page.goto('/?view=test-header-localization');

    // Open the mobile menu drawer
    const menuDrawerToggle = page.locator('header-drawer').getByLabel(t('accessibility.menu'));
    await expect(menuDrawerToggle).toBeVisible();
    await menuDrawerToggle.click();

    await openLocalizationForm(page, 'mobile');

    const localizationForm = await getLocalizationForm(page);
    const languageSelector = localizationForm.getByRole('combobox', { name: t('content.language') });

    await expect(languageSelector).toBeVisible();

    const options = await languageSelector.locator('option').all();

    for (const option of options) {
      await expect(option).not.toBeEmpty();
    }
  });
});
