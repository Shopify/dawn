const { test, expect } = require('@playwright/test');
const { MenuAccordionPage, Accordion } = require('../../../../../page-object-models/accordion');

test.describe('Menu accordion behavior', () => {
  test('should always disable accordion on desktop regardless of show_as_accordion setting', async ({ page }) => {
    const menuPage = new MenuAccordionPage(page);

    // Set desktop viewport
    await page.setViewportSize({ width: 1400, height: 900 });
    await menuPage.goToMenuAccordion();

    // Get all menu accordions
    const menus = await menuPage.getAllMenus();

    for (const menu of menus) {
      // Should be disabled on desktop
      expect(await menu.isDisabledOn('desktop')).toBe(true);

      // Verify clicking doesn't toggle on desktop
      const wasOpen = await menu.isOpen();
      await menu.toggle();
      const isOpen = await menu.isOpen();
      expect(isOpen).toBe(wasOpen);
    }
  });

  test('should enable accordion on mobile when show_as_accordion is true', async ({ page }) => {
    const menuPage = new MenuAccordionPage(page);

    // Set mobile viewport
    await page.setViewportSize({ width: 749, height: 1000 });
    await menuPage.goToMenuAccordion();

    // Find the menu that should work as accordion on mobile
    const accordionMenu = await menuPage.getMenuByHeading('Menu with Accordion Enabled');

    // Should NOT be disabled on mobile
    expect(await accordionMenu.isDisabledOn('mobile')).toBe(false);

    // Accordion should work on mobile
    const wasOpen = await accordionMenu.isOpen();
    await accordionMenu.toggle();
    const isOpen = await accordionMenu.isOpen();

    // State should change
    expect(isOpen).not.toBe(wasOpen);

    // Click again to toggle back
    await accordionMenu.toggle();
    const isClosed = await accordionMenu.isOpen();
    expect(isClosed).toBe(wasOpen);
  });

  test('should disable accordion on both viewports when show_as_accordion is false', async ({ page }) => {
    const menuPage = new MenuAccordionPage(page);

    // Test on desktop
    await page.setViewportSize({ width: 1400, height: 900 });
    await menuPage.goToMenuAccordion();

    // Find the menu without accordion behavior
    const regularMenu = await menuPage.getMenuByHeading('Menu with Accordion Disabled');

    // Should have both disable attributes
    expect(await regularMenu.isDisabledOn('desktop')).toBe(true);
    expect(await regularMenu.isDisabledOn('mobile')).toBe(true);

    // Click should not toggle on desktop
    const wasOpenDesktop = await regularMenu.isOpen();
    await regularMenu.toggle();
    const isOpenDesktop = await regularMenu.isOpen();
    expect(isOpenDesktop).toBe(wasOpenDesktop);

    // Test on mobile
    await page.setViewportSize({ width: 749, height: 1000 });

    // Click should not toggle on mobile either
    const wasOpenMobile = await regularMenu.isOpen();
    await regularMenu.toggle();
    const isOpenMobile = await regularMenu.isOpen();
    expect(isOpenMobile).toBe(wasOpenMobile);
  });

  test('should have open-by-default attributes configured correctly', async ({ page }) => {
    const menuPage = new MenuAccordionPage(page);

    await page.setViewportSize({ width: 1400, height: 900 });
    await menuPage.goToMenuAccordion();

    // Get all menus
    const menus = await menuPage.getAllMenus();

    for (const menu of menus) {
      // All menus should have open-by-default on desktop
      expect(await menu.hasOpenByDefaultOn('desktop')).toBe(true);
    }

    // Check the menu with accordion disabled specifically
    const disabledMenu = await menuPage.getMenuByHeading('Menu with Accordion Disabled');

    // Should also have open-by-default on mobile
    expect(await disabledMenu.hasOpenByDefaultOn('mobile')).toBe(true);
  });
});
