/** @typedef {import('@playwright/test').Page} Page */
/** @typedef {import('@playwright/test').Locator} Locator */
const { translation: t } = require('utils/translations');

/**
 * Page object model representing the main collection page functionality
 */
export class MainCollectionPage {
  /**
   * @param {Page} page - Playwright page object
   */
  constructor(page) {
    /** @private */
    this.page = page;

    // Locators
    /** @type {Locator} */
    this.productCards = this.page.locator('product-card');
    /** @type {Locator} */
    this.sortButton = this.page.getByRole('button', { name: t('actions.sort') });
    /** @type {Locator} */
    this.filtersLabel = this.page.getByLabel(t('content.filters'));
    /** @type {Locator} */
    this.clearButton = this.page.getByRole('button', { name: t('actions.clear'), exact: true });
  }

  /**
   * Navigate to the every-product collection page
   * @returns {Promise<void>}
   */
  async goToEveryProductCollection() {
    await this.page.goto('collections/every-product');
  }

  /**
   * Navigate to a specific page of the every-product collection
   * @param {number} pageNumber - The page number to navigate to
   * @returns {Promise<void>}
   */
  async goToEveryProductCollectionPage(pageNumber) {
    await this.page.goto(`collections/every-product?page=${pageNumber}`);
  }

  /**
   * Get the current number of products on the page
   * @returns {Promise<number>}
   */
  async getProductCount() {
    return await this.productCards.count();
  }

  /**
   * Scroll to the bottom of the page
   * @returns {Promise<void>}
   */
  async scrollToBottom() {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  /**
   * Scroll to the top of the page
   * @returns {Promise<void>}
   */
  async scrollToTop() {
    await this.page.evaluate(() => {
      window.scrollTo(0, 0);
    });
  }

  /**
   * Get unique product IDs from all products on the page
   * @returns {Promise<string[]>}
   */
  async getProductIds() {
    return await this.productCards.evaluateAll((cards) =>
      cards
        .map(
          (card) =>
            card.getAttribute('data-product-id') ||
            card.querySelector('[data-product-id]')?.getAttribute('data-product-id')
        )
        .filter(Boolean)
    );
  }

  /**
   * Wait for more products to load after scrolling
   * @param {number} initialCount - The initial product count to compare against
   * @param {number} timeout - Timeout in milliseconds (default: 10000)
   * @returns {Promise<void>}
   */
  async waitForMoreProductsToLoad(initialCount, timeout = 10000) {
    await this.page.waitForFunction(
      (initialCount) => document.querySelectorAll('product-card').length > initialCount,
      initialCount,
      { timeout }
    );
  }

  /**
   * Wait for products to reload after sorting or filtering
   * @param {string} firstProductId - The ID of the first product to compare against
   * @param {number} timeout - Timeout in milliseconds (default: 10000)
   * @returns {Promise<void>}
   */
  async waitForProductsToReload(firstProductId, timeout = 10000) {
    await this.page.waitForFunction(
      (firstProductId) => {
        const firstCard = document.querySelector('product-card');
        if (!firstCard) return false;

        const currentId =
          firstCard.getAttribute('data-product-id') ||
          firstCard.querySelector('[data-product-id]')?.getAttribute('data-product-id');

        return currentId && currentId !== firstProductId;
      },
      firstProductId,
      { timeout }
    );
  }

  /**
   * Select a sorting option by text
   * @param {string} sortOptionText - The text of the sorting option (e.g., "Price, low to high")
   * @returns {Promise<void>}
   */
  async sortBy(sortOptionText) {
    await this.sortButton.click();
    const sortOption = this.page.locator(`label:has-text("${sortOptionText}")`).first();
    await sortOption.click();
  }

  /**
   * Open a filter category by name
   * @param {string} filterName - The name of the filter category (e.g., "Pattern", "Availability")
   * @returns {Promise<void>}
   */
  async openFilterCategory(filterName) {
    await this.filtersLabel.locator('summary').filter({ hasText: filterName }).click();
  }
}
