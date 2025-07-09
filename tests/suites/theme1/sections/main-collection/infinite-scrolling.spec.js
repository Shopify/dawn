// @ts-check
const { MainCollectionPage } = require('@/page-object-models/main-collection');
const { test, expect } = require('@playwright/test');
const { translation: t } = require('utils/translations');

test.describe('Infinite scrolling', () => {
  /** @type {MainCollectionPage} */
  let mainCollectionPage;

  test.beforeEach(async ({ page }) => {
    mainCollectionPage = new MainCollectionPage(page);
  });

  test('Scrolling down the page should load more products', async () => {
    await mainCollectionPage.goToEveryProductCollection();

    const initialProductCount = await mainCollectionPage.getProductCount();
    expect(initialProductCount).toBeGreaterThan(0);

    await mainCollectionPage.scrollToBottom();

    await mainCollectionPage.waitForMoreProductsToLoad(initialProductCount);

    const newProductCount = await mainCollectionPage.getProductCount();
    expect(newProductCount).toBeGreaterThan(initialProductCount);
  });

  test('When loading a specific page, scrolling up the page should load more products', async () => {
    await mainCollectionPage.goToEveryProductCollectionPage(3);

    const initialProductCount = await mainCollectionPage.getProductCount();
    expect(initialProductCount).toBeGreaterThan(0);

    await mainCollectionPage.scrollToTop();

    await mainCollectionPage.waitForMoreProductsToLoad(initialProductCount);

    const newProductCount = await mainCollectionPage.getProductCount();
    expect(newProductCount).toBeGreaterThan(initialProductCount);
  });

  test('After sorting, the page should load more products when scrolling down', async () => {
    await mainCollectionPage.goToEveryProductCollection();

    const initialProductCount = await mainCollectionPage.getProductCount();
    expect(initialProductCount).toBeGreaterThan(0);

    await mainCollectionPage.sortBy('Price, low to high');

    const sortedProductCount = await mainCollectionPage.getProductCount();
    expect(sortedProductCount).toBeGreaterThan(0);

    await mainCollectionPage.scrollToBottom();

    await mainCollectionPage.waitForMoreProductsToLoad(sortedProductCount);

    // Verify more products were loaded
    const newProductCount = await mainCollectionPage.getProductCount();
    expect(newProductCount).toBeGreaterThan(sortedProductCount);
  });

  test('After changing the sorting to a different order and scrolling down, the page should not have repeated products', async () => {
    await mainCollectionPage.goToEveryProductCollection();

    await mainCollectionPage.sortBy('Price, low to high');
    await mainCollectionPage.scrollToBottom();

    await mainCollectionPage.sortBy('Price, high to low');
    await mainCollectionPage.scrollToBottom();

    const productIds = await mainCollectionPage.getProductIds();

    // Check for duplicates
    const uniqueProductIds = Array.from(new Set(productIds));
    expect(productIds.length).toBe(uniqueProductIds.length);
  });

  test('After adding a filter, the page should show only filtered products', async ({ page }) => {
    await mainCollectionPage.goToEveryProductCollection();

    const productIds = await mainCollectionPage.getProductIds();

    await mainCollectionPage.openFilterCategory('Pattern');
    await page.getByRole('checkbox', { name: 'Argyle' }).click();

    await mainCollectionPage.waitForProductsToReload(productIds[0]);

    // Verify that filter is applied by checking URL
    await expect(page.url()).toContain('filter.p.m.custom.pattern');

    const filteredProductCount = await mainCollectionPage.getProductCount();
    expect(filteredProductCount).toBe(2);
  });

  test('After adding a filter and then clearing it, the page should load more products when scrolling down', async ({
    page,
  }) => {
    await mainCollectionPage.goToEveryProductCollection();

    let productIds = await mainCollectionPage.getProductIds();

    await mainCollectionPage.openFilterCategory('Pattern');
    await page.getByRole('checkbox', { name: 'Argyle' }).click();

    await mainCollectionPage.waitForProductsToReload(productIds[0]);
    await expect(page.url()).toContain('filter.p.m.custom.pattern');

    const initialProductCount = await mainCollectionPage.getProductCount();
    productIds = await mainCollectionPage.getProductIds();

    await mainCollectionPage.clearButton.click();
    await expect(page.url()).not.toContain('filter.p.m.custom.pattern');

    await mainCollectionPage.waitForProductsToReload(productIds[0]);

    const finalProductCount = await mainCollectionPage.getProductCount();
    expect(finalProductCount).toBeGreaterThanOrEqual(initialProductCount);
  });

  test('After adding the in stock filter, the page should load more products when scrolling down', async ({ page }) => {
    await mainCollectionPage.goToEveryProductCollection();

    await mainCollectionPage.openFilterCategory('Availability');
    await mainCollectionPage.filtersLabel
      .locator('label')
      .filter({ hasText: t('content.inventory_in_stock') })
      .click();

    await page.waitForTimeout(1000);

    const initialProductCount = await mainCollectionPage.getProductCount();

    await mainCollectionPage.scrollToBottom();
    await mainCollectionPage.waitForMoreProductsToLoad(initialProductCount);

    const newProductCount = await mainCollectionPage.getProductCount();
    expect(newProductCount).toBeGreaterThan(initialProductCount);
  });
});
