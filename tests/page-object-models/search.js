/** @typedef {import('@playwright/test')} Playwright */
const { translation: t } = require('utils/translations');

const SEARCH_URL = 'search';

const PRODUCT_NAME = '[Test UI] Everyday Shortsleeve';

/**
 * Page object model representing the search page functionality
 */
export class SearchPage {
  /**
   * @param {Playwright.Page} page - Playwright page object
   */
  constructor(page) {
    /** @private */
    this.page = page;

    /** @type {Playwright.Locator} */
    this.searchInput = page.locator('search-page-input-component [ref="searchPageInput"]');

    /** @type {Playwright.Locator} */
    this.searchClearButton = page.getByRole('button', { name: 'reset' });

    /** @type {Playwright.Locator} */
    this.results = page.locator('results-list');

    /** @type {Playwright.Locator} */
    this.firstResult = page.locator('results-list product-card').first();

    /** @type {Playwright.Locator} */
    this.searchNoResults = page.getByText(t('content.search_results_no_results_check_spelling', { terms: 'id:0' }));
  }

  /**
   * Navigate to the search page
   * @returns {Promise<void>}
   */
  async goToBasicSearchPage({ query = '' } = {}) {
    const path = query ? `${SEARCH_URL}?q=${query}&view=test-basic` : SEARCH_URL;
    await this.page.goto(path);
  }

  /**
   * Navigate to the search page with a query that will return no results
   * @returns {Promise<void>}
   */
  async goToBasicSearchPageWithoutResults() {
    await this.goToBasicSearchPage({ query: 'id:0' });
  }
}
