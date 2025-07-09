/**
 * Updates the recently viewed products in localStorage.
 */
export class RecentlyViewed {
  /** @static @constant {string} The key used to store the viewed products in session storage */
  static #STORAGE_KEY = 'viewedProducts';
  /** @static @constant {number} The maximum number of products to store */
  static #MAX_PRODUCTS = 4;

  /**
   * Adds a product to the recently viewed products list.
   * @param {string} productId - The ID of the product to add.
   */
  static addProduct(productId) {
    let viewedProducts = this.getProducts();

    viewedProducts = viewedProducts.filter((/** @type {string} */ id) => id !== productId);
    viewedProducts.unshift(productId);
    viewedProducts = viewedProducts.slice(0, this.#MAX_PRODUCTS);

    localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(viewedProducts));
  }

  static clearProducts() {
    localStorage.removeItem(this.#STORAGE_KEY);
  }

  /**
   * Retrieves the list of recently viewed products from session storage.
   * @returns {string[]} The list of viewed products.
   */
  static getProducts() {
    return JSON.parse(localStorage.getItem(this.#STORAGE_KEY) || '[]');
  }
}
