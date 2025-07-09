import { test } from '@playwright/test';
import { expect } from 'custom-assertions';
import { Header } from 'page-object-models/header';
import { ProductCartPage } from 'page-object-models/product-cart';

test('Search should always render in left column on mobile', async ({ page }) => {
  const header = new Header(page);
  await header.goToSearchTopRightLayout();

  // search only should be visible in top right column
  await expect(header.searchButtonRight).toBeVisible();
  await expect(header.searchButtonLeft).not.toBeVisible();

  await page.setViewportSize({ width: 600, height: 800 });

  // search should only be visible in top left column
  await expect(header.searchButtonRight).not.toBeVisible();
  await expect(header.searchButtonLeft).toBeVisible();
});

test('Search is first element in top-left when logo is not in top-left', async ({ page }) => {
  const header = new Header(page);
  await header.goToSearchTopLeftLayout();

  await header.searchButtonLeft.waitFor({ state: 'visible' });
  await header.logo.waitFor({ state: 'visible' });
  const searchButtonBox = await header.searchButtonLeft.boundingBox();
  const menuItemBox = await header.menuItem.boundingBox();

  expect(searchButtonBox.x).toBeLessThan(menuItemBox.x);
});

test('When search and logo are both in top-left, logo appears before search', async ({ page }) => {
  const header = new Header(page);
  await header.goToSearchAndLogoTopLeftLayout();

  await header.searchButtonLeft.waitFor({ state: 'visible' });
  await header.logo.waitFor({ state: 'visible' });

  const searchButtonBox = await header.searchButtonLeft.boundingBox();
  const logoBox = await header.logo.boundingBox();

  // For horizontal order (left to right)
  expect(logoBox.x).toBeLessThan(searchButtonBox.x);
});

test('Hiding the search should not alter the mobile layout', async ({ page }) => {
  await page.setViewportSize({ width: 600, height: 800 });
  const header = new Header(page);
  const productCart = new ProductCartPage(page);
  await header.goToSearchTopLeftLayout();

  const menuCoordsExpected = await header.menuIcon.boundingBox();
  const logoCoordsExpected = await header.logo.boundingBox();
  const cartCoordsExpected = await productCart.cartIcon.boundingBox();

  await header.goToSearchHiddenLayout();

  const menuCoordsActual = await header.menuIcon.boundingBox();
  const logoCoordsActual = await header.logo.boundingBox();
  const cartCoordsActual = await productCart.cartIcon.boundingBox();

  expect(menuCoordsActual).toBeBoundingBoxCloseTo(menuCoordsExpected, 2);
  expect(logoCoordsActual).toBeBoundingBoxCloseTo(logoCoordsExpected, 2);
  expect(cartCoordsActual).toBeBoundingBoxCloseTo(cartCoordsExpected, 2);
});

test('Hiding the logo should not alter the mobile layout', async ({ page }) => {
  await page.setViewportSize({ width: 600, height: 800 });
  const header = new Header(page);
  const productCart = new ProductCartPage(page);
  await header.goToSearchTopLeftLayout();

  const menuCoordsExpected = await header.menuIcon.boundingBox();
  const searchCoordsExpected = await header.searchButtonLeft.boundingBox();
  const cartCoordsExpected = await productCart.cartIcon.boundingBox();

  await header.goToLogoHiddenLayout();

  const menuCoordsActual = await header.menuIcon.boundingBox();
  const searchCoordsActual = await header.searchButtonLeft.boundingBox();
  const cartCoordsActual = await productCart.cartIcon.boundingBox();

  expect(menuCoordsActual).toBeBoundingBoxCloseTo(menuCoordsExpected, 2);
  expect(searchCoordsActual).toBeBoundingBoxCloseTo(searchCoordsExpected, 2);
  expect(cartCoordsActual).toBeBoundingBoxCloseTo(cartCoordsExpected, 2);
});
