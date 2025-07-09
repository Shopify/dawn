/** @typedef {import('@playwright/test').Page} Page */
/** @typedef {import('@playwright/test').Locator} Locator */
const { translation: t } = require('utils/translations');

/**
 * Page object model representing the product card page functionality
 */
export class ProductCardPage {
  /**
   * @param {Page} page - Playwright page object
   */
  constructor(page) {
    /** @private */
    this.page = page;

    /** @type {Locator} */
    this.allCards = this.page.locator('product-card');
    /** @type {Locator} */
    this.firstCard = this.allCards.first();
  }

  /**
   * Navigate to the page with multiple product cards
   * @returns {Promise<void>}
   */
  async goToMultipleCardsPage() {
    await this.page.goto('collections/product-card-tests?view=test-product-card');
  }

  /**
   * Navigate to the page with a product card, but no product defined
   * @returns {Promise<void>}
   */
  async goToNoProductPage() {
    await this.page.goto('/?view=test-product-card-placeholder');
  }

  /**
   * Get a product card with only one variant
   * @returns {Promise<Locator>}
   */
  async getProductCardWithOneVariant() {
    return this.page.locator(`product-card[data-product-id="10585456476182"]`);
  }

  /**
   * Get a product card with multiple variants
   * @returns {Promise<Locator>}
   */
  async getProductCardWithMultipleVariants() {
    return this.page.locator('product-card[data-product-id="10615105421334"]');
  }

  /**
   * Get a product card that has one option with two variants
   * @returns {Promise<Locator>}
   */
  async getProductCardWithAddToCartAndSwatches() {
    return this.page.locator('product-card[data-product-id="10613625683990"]');
  }

  /**
   * Get the card with the most swatches and its swatch count
   * @returns {Promise<Locator>}
   */
  async getCardWithMostSwatches() {
    return this.page.locator('product-card[data-product-id="10615105421334"]');
  }

  /**
   * Get a card with multiple swatch media
   * @param {Object} [options] - Options for finding the card
   * @param {boolean} [options.withNonSwatchDefaultSlide=false] - Whether to require a non-swatch default slide
   * @returns {Promise<{cardWithMultipleSwatchMedia: ProductCard|null, swatchMediaIds: string[]}>}
   */
  async getCardWithMultipleSwatchMedia() {
    if ((await this.page.locator('product-card[data-product-id="10615105421334"]').count()) === 0) {
      throw new Error('No product card found');
    }

    const cardWithMultipleSwatchMedia = new ProductCard(
      this.page.locator('product-card[data-product-id="10615105421334"]')
    );
    const swatches = cardWithMultipleSwatchMedia.swatches.getByRole('group');
    const firstSwatchMediaId = await swatches.locator('label').first().getAttribute('data-media-id');
    const secondSwatchMediaId = await swatches.locator('label').nth(1).getAttribute('data-media-id');
    const swatchMediaIds = [firstSwatchMediaId, secondSwatchMediaId];

    return { cardWithMultipleSwatchMedia, swatchMediaIds };
  }

  /**
   * Get a card with multiple swatch media where the default slide is not variant-image
   * @returns {Promise<{cardWithNonSwatchDefaultSlide: ProductCard|null, swatchMediaIds: string[], defaultSlideId: string|null}>}
   */
  async getCardWithNonSwatchDefaultSlide() {
    if ((await this.page.locator('product-card[data-product-id="10613686566934"]').count()) === 0) {
      throw new Error('No product card found');
    }

    const cardWithNonSwatchDefaultSlide = new ProductCard(
      this.page.locator('product-card[data-product-id="10613686566934"]')
    );
    const swatches = cardWithNonSwatchDefaultSlide.swatches.getByRole('group');
    const firstSwatchMediaId = await swatches.locator('label').first().getAttribute('data-media-id');
    const secondSwatchMediaId = await swatches.locator('label').nth(1).getAttribute('data-media-id');
    const swatchMediaIds = [firstSwatchMediaId, secondSwatchMediaId];
    const defaultSlideId = await cardWithNonSwatchDefaultSlide.slideshow
      .first()
      .locator('slideshow-slide')
      .first()
      .getAttribute('slide-id');

    return { cardWithNonSwatchDefaultSlide, swatchMediaIds, defaultSlideId };
  }

  /**
   * Get a card with a hidden swatches counter
   * @returns {Promise<Locator>}
   */
  async getCardWithHiddenSwatchesCounter() {
    return this.page.locator('product-card[data-product-id="10613686566934"]');
  }

  /**
   * Get the quick add modal element
   * @returns {Promise<Locator>}
   */
  async getQuickAddModal() {
    return this.page.locator('dialog.quick-add-modal');
  }
}

/**
 * Represents a single product card
 */
export class ProductCard {
  /**
   * @param {Locator} page - Playwright locator for the product card
   */
  constructor(page) {
    this.page = page;

    /** @type {Locator} */
    this.swatches = this.page.locator('swatches-variant-picker-component');
    /** @type {Locator} */
    this.slideshow = this.page.locator('slideshow-slides');
    /** @type {Locator} */
    this.hiddenSwatchesCounter = this.page.locator('.hidden-swatches__count');
    /** @type {Locator} */
    this.productForm = this.page.locator('product-form-component');
    /** @type {Locator} */
    this.productFormOptions = this.productForm.locator('fieldset:visible');
    /** @type {Locator} */
    this.productFormSelectedOptions = this.productFormOptions.getByRole('radio', { checked: true });
  }

  /**
   * Get the number of swatches for this product card
   * @returns {Promise<number>}
   */
  async getSwatchCount() {
    return this.swatches.getByRole('radio').count();
  }

  /**
   * Get an image by its ID
   * @param {string} id - The ID of the image
   * @returns {Promise<Locator>}
   */
  async getImageById(id) {
    return this.page.locator(`slideshow-slide[slide-id="${id}"]`);
  }

  /**
   * Get the swatch hover image
   * @param {string} expectedMediaId - The expected media ID
   * @returns {Promise<Locator>}
   */
  async getSwatchHoverImage(expectedMediaId) {
    const testingProductSwatches = this.swatches;
    await testingProductSwatches.getByRole('radio').nth(1).hover();
    return this.getImageById(expectedMediaId);
  }

  /**
   * Get the current active image ID
   * @returns {Promise<string>}
   */
  async getActiveImageId() {
    return this.slideshow.locator('slideshow-slide[aria-hidden="false"]').getAttribute('slide-id');
  }

  /**
   * Click the add button
   * @returns {Promise<void>}
   */
  async clickQuickAddButton() {
    await this.page.hover();
    return this.page.getByRole('button', { name: t('actions.add'), exact: true }).click({ force: true });
  }
}
