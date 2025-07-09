// @ts-check
const { test, expect } = require('@playwright/test');
const { translation: t } = require('utils/translations');
const { mobileViewport, desktopViewport } = require('utils/viewports');

const imageRatioTestCases = [
  {
    name: 'portrait',
    view: 'test-main-collection',
  },
  {
    name: 'square',
    view: 'test-product-card-image-ratio-square',
  },
  {
    name: 'landscape',
    view: 'test-product-card-image-ratio-landscape',
  },
];

const cardSizeTestCases = [
  {
    name: 'default view',
    view: 'test-main-collection',
    viewport: undefined,
  },
  {
    name: 'extra large product card',
    view: 'test-product-card-size-extra-large',
    viewport: { width: 750, height: 1200 },
  },
];

for (const testCase of cardSizeTestCases) {
  test(`Collection grid view toggle updates grid columns - ${testCase.name}`, async ({ page }) => {
    if (testCase.viewport) {
      await page.setViewportSize(testCase.viewport);
    }

    await page.goto(`collections/all-clothing?view=${testCase.view}`);
    const defaultColumnCount = await getColumnCount(page);

    await page
      .getByRole('group', { name: t('content.grid_view.grid_fieldset') })
      .getByRole('radio', { name: t('content.grid_view.zoom_out') })
      .click();
    await page.waitForSelector('[product-grid-view="zoom-out"]');
    const zoomOutColumnCount = await getColumnCount(page);

    expect(zoomOutColumnCount).toBeGreaterThan(defaultColumnCount);
  });
}

const PRODUCT_WITH_DISCOUNT = '10492024913942';
const PRODUCT_WITH_NO_DISCOUNT = '10576900259862';

test('Should show price in the default view', async ({ page }) => {
  await page.goto('collections/all-clothing?view=test-main-collection');
  const productPrice = page.locator(`product-price[data-product-id="${PRODUCT_WITH_NO_DISCOUNT}"]`).nth(1);
  await expect(productPrice).toBeVisible();
  await expect(productPrice).toContainText('$199.00');
});

test('Should show discounted price in the default view', async ({ page }) => {
  await page.goto('collections/all-clothing?view=test-main-collection');
  const productPrice = page.locator(`product-price[data-product-id="${PRODUCT_WITH_DISCOUNT}"]`).nth(1);
  await expect(productPrice).toBeVisible();
  // Discounted price - price
  await expect(productPrice).toContainText('$38.00');
  await expect(productPrice).toContainText('$19.95');
});

// Image ratio snapshot tests
for (const testCase of imageRatioTestCases) {
  test(`Product card image ratio ${testCase.name} - desktop`, async ({ page }) => {
    await page.goto(`collections/facets-testing?view=${testCase.view}`);

    // Wait for product cards to load
    await page.waitForSelector('product-card', { state: 'visible' });

    // Take a screenshot of the product grid section
    await expect(page.locator('.product-grid-container .product-grid')).toHaveScreenshot(
      `product-card-image-ratio-${testCase.name}-desktop.png`
    );
  });

  test(`Product card image ratio ${testCase.name} - mobile`, async ({ page }) => {
    await page.setViewportSize(mobileViewport);
    await page.goto(`collections/facets-testing?view=${testCase.view}`);

    // Wait for product cards to load
    await page.waitForSelector('product-card', { state: 'visible' });

    // Take a screenshot of the product grid section
    await expect(page.locator('.product-grid-container .product-grid')).toHaveScreenshot(
      `product-card-image-ratio-${testCase.name}-mobile.png`
    );
  });
}

function getColumnCount(page) {
  return page.evaluate(() => {
    const gridItems = Array.from(document.querySelectorAll('product-card'));
    const firstItemTop = gridItems[0].getBoundingClientRect().top;

    let count = 0;
    for (const item of gridItems) {
      if (item.getBoundingClientRect().top !== firstItemTop) {
        break;
      }

      count++;
    }

    return count;
  });
}
