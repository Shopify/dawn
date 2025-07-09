// @ts-check
const { test, expect } = require('@playwright/test');
const { SearchPage } = require('page-object-models/search');

test.describe('Search page', () => {
  /** @type {SearchPage} */
  let searchPage;

  test.describe('Initial state', () => {
    test.beforeEach(async ({ page }) => {
      searchPage = new SearchPage(page);
      await searchPage.goToBasicSearchPage();
    });

    test('Search input is visible but the clear button is hidden', async () => {
      await expect(searchPage.searchInput).toBeVisible();
      await expect(searchPage.searchClearButton).toBeHidden();
    });

    test('Clear button is visible when a search term is entered', async () => {
      await searchPage.searchInput.fill('shirt');
      await expect(searchPage.searchClearButton).toBeVisible();
    });
  });

  test.describe('Empty state', () => {
    test.beforeEach(async ({ page }) => {
      searchPage = new SearchPage(page);
      await searchPage.goToBasicSearchPageWithoutResults();
    });

    test('No results message appears for invalid search', async () => {
      await expect(searchPage.searchNoResults).toBeVisible();
    });

    test('Empty state collection is displayed', async () => {
      await expect(searchPage.results).toContainText('Bestselling');
    });
  });

  test.describe('Loaded state', () => {
    test.beforeEach(async ({ page }) => {
      searchPage = new SearchPage(page);
      await searchPage.goToBasicSearchPage({ query: 'test+shortsleeve' });
    });

    test('Search results are displayed', async () => {
      await expect(searchPage.firstResult).toContainText('[Test UI] Everyday Shortsleeve');
    });
  });
});
