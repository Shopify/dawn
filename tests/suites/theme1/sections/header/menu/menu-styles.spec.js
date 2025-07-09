import { test } from '@playwright/test';
import { expect } from 'custom-assertions';
import { Header } from 'page-object-models/header';
import { desktopViewport, mobileViewport, mobileShortViewport } from '@/utils/viewports';

test.describe('Desktop mega menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: desktopViewport.width, height: desktopViewport.height });
  });

  test('Featured products are shown in the submenu', async ({ page }) => {
    const header = new Header(page);
    await header.goToMenuFeaturedProducts();

    await header.hoverToOpenSubmenu();
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot();
  });

  test('Featured collections are shown in the submenu', async ({ page }) => {
    const header = new Header(page);
    await header.goToMenuFeaturedCollections();

    await header.hoverToOpenSubmenu();
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot();
  });
});

test.describe('Mobile menu drawer:', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: mobileViewport.width, height: mobileViewport.height });
  });

  test('Featured products are shown in the drawer', async ({ page }) => {
    const header = new Header(page);
    await header.goToMenuFeaturedProducts();

    await header.openMobileMenuDrawer();
    await expect(page).toHaveScreenshot();
  });

  test('Featured collections are shown in the drawer', async ({ page }) => {
    const header = new Header(page);
    await header.goToMenuFeaturedCollections();

    await header.openMobileMenuDrawer();
    await expect(page).toHaveScreenshot();
  });
});

test.describe('Mobile short viewport menu drawer:', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: mobileShortViewport.width, height: mobileShortViewport.height });
  });

  test('Submenu is occupying the full height of the viewport', async ({ page }) => {
    const header = new Header(page);
    await header.goToMenuFeaturedProducts();
    await header.openMobileMenuDrawer();

    await header.scrollToLastItemOfMobileMenuDrawer();
    await header.clickOnLastItemOfMobileMenuDrawer();
    await expect(page).toHaveScreenshot();
  });
});
