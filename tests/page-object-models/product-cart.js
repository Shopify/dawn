import { translation as t } from 'utils/translations.js';
/** @typedef {import('@playwright/test')} Playwright */

/**
 * Page object model representing the product cart functionality
 */
export class ProductCartPage {
  /**
   * @param {Playwright.Page} page - Playwright page object
   */
  constructor(page) {
    /** @private */
    this.page = page;

    /** @type {Playwright.Locator} */
    this.cartIcon = this.page.locator('cart-icon').first();
  }

  /**
   * Gets the current cart count
   * @template {boolean} T
   * @param {Object} [options] - Options for getting cart count
   * @param {T} [options.parseAsNumber=false] - Whether to parse the count as a number
   * @returns {Promise<T extends true ? number : string>} The cart count as either a string or number depending on parseAsNumber
   */
  async getCartCount({ parseAsNumber = false } = {}) {
    const text = await this.cartIcon.getByText(t('accessibility.cart_count')).textContent();
    return parseAsNumber ? extractNumber(text) : text;
  }
}

function extractNumber(str) {
  const match = str.match(/\d+/);
  return match ? parseInt(match[0], 10) : null;
}
