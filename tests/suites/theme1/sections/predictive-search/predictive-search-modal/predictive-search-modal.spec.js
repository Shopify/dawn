// @ts-check
const { test, expect } = require('@playwright/test');
const { translation: t } = require('utils/translations');
const { desktopViewport, mobileViewport } = require('utils/viewports');

const url = '/?view=test-predictive-search-modal';
const testViewports = [desktopViewport, mobileViewport];

test.describe('Predictive search modal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test('The search icon should be displayed', async ({ page }) => {
    const searchButton = page.locator('search-button').getByRole('button', { name: t('content.search_input_label') });
    await expect(searchButton).toBeVisible();
  });

  test('When we click the search button we should see the modal', async ({ page }) => {
    const searchModal = page.getByTestId('search-component--modal');

    await expect(searchModal).toBeHidden();
    const searchButton = page.locator('search-button').getByRole('button', { name: t('content.search_input_label') });
    await searchButton.click();
    await expect(searchModal).toBeVisible();
  });

  // Skip until we can test a theme setting where the empty state collection is not set
  test.skip('Open modal, show the default fallback collection products, if there are no recently viewed products', async ({
    page,
  }) => {
    await page.waitForFunction(() => {
      return window.localStorage.getItem('viewedProducts') === null;
    });

    const searchModal = page.getByTestId('search-component--modal');
    await expect(searchModal).toBeHidden();

    const searchButton = page.locator('search-button').getByRole('button', { name: t('content.search_input_label') });
    await searchButton.click();
    await searchModal.waitFor({ state: 'visible' });

    // This is broken for some reason - default state does not seem to appear during tests
    const productList = await searchModal.getByRole('listbox', { name: t('content.search_results_resource_products') });
    await productList.waitFor({ state: 'visible' });

    const productCards = await searchModal.locator('.predictive-search-results__card--product').count();
    await expect(productCards).toBe(4);
  });

  test('Open modal, show the merchant-set collection products, if there are no recently viewed products', async ({
    page,
  }) => {
    await page.waitForFunction(() => {
      return window.localStorage.getItem('viewedProducts') === null;
    });

    const searchModal = page.getByTestId('search-component--modal');
    await expect(searchModal).toBeHidden();

    const searchButton = page.locator('search-button').getByRole('button', { name: t('content.search_input_label') });
    await searchButton.click();
    await searchModal.waitFor({ state: 'visible' });

    // Currently does not verify this is the merchant-set collection products, only that there are products
    const productList = await searchModal.getByRole('listbox').first();
    await productList.waitFor({ state: 'visible' });

    const productCards = await searchModal.locator('[ref="resultsItems[]"]').count();
    await expect(productCards).toBe(4);
  });

  test('On opening the modal we should see recently viewed products and the empty state collection products', async ({
    page,
  }) => {
    const amountOfCollectionItems = 4;
    const amountOfRecentlyViewedProducts = 1;
    await page.goto('products/carry-on');
    await page.waitForFunction(() => {
      return window.localStorage.getItem('viewedProducts') !== null;
    });
    await page.goto('?view=test-predictive-search-modal');

    const searchModal = page.getByTestId('search-component--modal');
    await expect(searchModal).toBeHidden();

    const searchButton = page.locator('search-button').getByRole('button', { name: t('content.search_input_label') });
    await searchButton.click();
    await searchModal.waitFor({ state: 'visible' });

    const productList = await searchModal.getByRole('listbox', { name: t('content.recently_viewed_products') });
    await productList.waitFor({ state: 'visible' });

    const productCards = await searchModal.locator('.predictive-search-results__card--product').count();
    await page.waitForTimeout(250);
    await expect(productCards).toBe(amountOfCollectionItems + amountOfRecentlyViewedProducts);
  });

  test('When we enter CMD + K we should see the modal', async ({ page }) => {
    const searchModal = page.getByTestId('search-component--modal');
    await expect(searchModal).toBeHidden();
    await page.keyboard.press('Meta+k');
    await expect(searchModal).toBeVisible();
  });

  test('We can close the modal by entering CMD + K', async ({ page }) => {
    const searchModal = page.getByTestId('search-component--modal');
    await expect(searchModal).toBeHidden();
    await page.keyboard.press('Meta+k');
    await searchModal.waitFor({ state: 'visible' });

    await page.keyboard.press('Meta+k');
    await expect(searchModal).toBeHidden();
  });

  test('We can close the modal by pressing Escape', async ({ page }) => {
    const searchModal = page.getByTestId('search-component--modal');
    await expect(searchModal).toBeHidden();
    await page.keyboard.press('Meta+k');
    await searchModal.waitFor({ state: 'visible' });

    const searchInput = searchModal.locator('input').first();
    await searchInput.fill('*');

    await page.keyboard.press('Escape');
    await expect(searchModal).toBeHidden();
  });

  test('When we type in the search input we should see the predictive search results for products', async ({
    page,
  }) => {
    const searchButton = page.locator('search-button').getByRole('button', { name: t('content.search_input_label') });
    await searchButton.click();
    const searchModal = page.getByTestId('search-component--modal');
    await searchModal.waitFor({ state: 'visible' });

    const searchField = searchModal.getByPlaceholder('Search');
    // Hack: wait because theme script clears the input value
    await page.waitForTimeout(500);
    await searchField.fill('p');

    const productList = await searchModal.getByRole('listbox', { name: t('content.search_results_resource_products') });
    await productList.waitFor({ state: 'visible' });

    const productCards = await searchModal.locator('.predictive-search-results__card--product').count();
    await expect(productCards).toBeGreaterThan(0);
  });
});

test.describe('Predictive search modal snapshots', () => {
  for (const viewport of testViewports) {
    test(`Snapshot: search modal on ${viewport.description}`, async ({ page }) => {
      const { width, height } = viewport;

      await page.setViewportSize({ width, height });
      await page.goto(url);

      const searchButton = page.locator('search-button').getByRole('button', { name: t('content.search_input_label') });
      await searchButton.click();

      const searchModal = page.getByTestId('search-component--modal');
      await searchModal.waitFor({ state: 'visible' });

      // Wait for any animations to complete
      await page.waitForTimeout(500);

      await expect(searchModal).toHaveScreenshot(`search-modal-${viewport.description}.png`, {
        maxDiffPixelRatio: 0.05,
      });
    });
  }
});
