const { test, expect } = require('@playwright/test');
const { AccordionCustomPage } = require('../../../../page-object-models/accordion');
const { desktopViewport, mobileViewport } = require('../../../../utils/viewports');

test.describe('Accordion Custom Component', () => {
  test('should allow multiple accordion panels open simultaneously', async ({ page }) => {
    const accordionPage = new AccordionCustomPage(page);
    await accordionPage.goToAccordionBehaviors();

    // Get all accordions
    const accordions = await accordionPage.getAllAccordions();
    expect(accordions.length).toBeGreaterThanOrEqual(3);

    // Open first accordion
    const firstAccordion = accordions[0];
    const wasFirstOpen = await firstAccordion.isOpen();
    await firstAccordion.toggle();
    expect(await firstAccordion.isOpen()).not.toBe(wasFirstOpen);

    // Open second accordion
    const secondAccordion = accordions[1];
    const wasSecondOpen = await secondAccordion.isOpen();
    await secondAccordion.toggle();
    expect(await secondAccordion.isOpen()).not.toBe(wasSecondOpen);

    // Both should remain open
    expect(await firstAccordion.isOpen()).not.toBe(wasFirstOpen);
    expect(await secondAccordion.isOpen()).not.toBe(wasSecondOpen);

    // Open third accordion
    const thirdAccordion = accordions[2];
    const wasThirdOpen = await thirdAccordion.isOpen();
    await thirdAccordion.toggle();
    expect(await thirdAccordion.isOpen()).not.toBe(wasThirdOpen);

    // All three should remain open/closed as toggled
    expect(await firstAccordion.isOpen()).not.toBe(wasFirstOpen);
    expect(await secondAccordion.isOpen()).not.toBe(wasSecondOpen);
    expect(await thirdAccordion.isOpen()).not.toBe(wasThirdOpen);
  });

  test('should respect open state on viewport changes', async ({ page }) => {
    const accordionPage = new AccordionCustomPage(page);

    // Start on desktop
    await page.setViewportSize(desktopViewport);
    await accordionPage.goToAccordionBehaviors();

    // Find the accordion with open-by-default
    const openByDefaultAccordion = await accordionPage.getOpenByDefaultAccordion();

    // Should be open by default on desktop
    expect(await openByDefaultAccordion.isOpen()).toBe(true);

    // Close it on desktop
    await openByDefaultAccordion.toggle();
    expect(await openByDefaultAccordion.isOpen()).toBe(false);

    // Switch to mobile
    await page.setViewportSize(mobileViewport);
    await page.waitForTimeout(100);

    // Should reset to open on mobile (has open-by-default-on-mobile)
    expect(await openByDefaultAccordion.isOpen()).toBe(true);

    // Close it on mobile
    await openByDefaultAccordion.toggle();
    expect(await openByDefaultAccordion.isOpen()).toBe(false);

    // Switch back to desktop
    await page.setViewportSize(desktopViewport);
    await page.waitForTimeout(100);

    // Should reset to open on desktop (has open-by-default-on-desktop)
    expect(await openByDefaultAccordion.isOpen()).toBe(true);
  });

  test('should maintain independent state for multiple accordions', async ({ page }) => {
    const accordionPage = new AccordionCustomPage(page);
    await accordionPage.goToAccordionBehaviors();

    const accordions = await accordionPage.getAllAccordions();
    expect(accordions.length).toBeGreaterThanOrEqual(4);

    // Track initial states
    const initialStates = [];
    for (const accordion of accordions) {
      initialStates.push(await accordion.isOpen());
    }

    // Toggle specific accordions
    await accordions[0].toggle();
    await accordions[2].toggle();

    // Check that only toggled accordions changed
    for (let i = 0; i < accordions.length; i++) {
      const currentState = await accordions[i].isOpen();
      if (i === 0 || i === 2) {
        expect(currentState).not.toBe(initialStates[i]);
      } else {
        expect(currentState).toBe(initialStates[i]);
      }
    }
  });

  test.describe('Open by default behavior', () => {
    test('should open accordion by default on desktop when open_by_default is true', async ({ page }) => {
      const accordionPage = new AccordionCustomPage(page);

      await page.setViewportSize(desktopViewport);
      await accordionPage.goToAccordionBehaviors();

      const openByDefaultAccordion = await accordionPage.getOpenByDefaultAccordion();

      // Should be open by default
      expect(await openByDefaultAccordion.isOpen()).toBe(true);

      // Can be closed manually
      await openByDefaultAccordion.toggle();
      expect(await openByDefaultAccordion.isOpen()).toBe(false);
    });

    test('should open accordion by default on mobile when open_by_default is true', async ({ page }) => {
      const accordionPage = new AccordionCustomPage(page);

      await page.setViewportSize(mobileViewport);
      await accordionPage.goToAccordionBehaviors();

      const openByDefaultAccordion = await accordionPage.getOpenByDefaultAccordion();

      // Should be open by default on mobile too
      expect(await openByDefaultAccordion.isOpen()).toBe(true);

      // Can be closed manually
      await openByDefaultAccordion.toggle();
      expect(await openByDefaultAccordion.isOpen()).toBe(false);
    });
  });

  test('resets state of regular accordions on viewport changes', async ({ page }) => {
    const accordionPage = new AccordionCustomPage(page);

    // Start on desktop
    await page.setViewportSize(desktopViewport);
    await accordionPage.goToAccordionBehaviors();

    // Get regular accordions (without open-by-default)
    const regularAccordions = await accordionPage.getRegularAccordions();
    expect(regularAccordions.length).toBeGreaterThan(0);

    // Open some regular accordions
    for (const accordion of regularAccordions) {
      if (!(await accordion.isOpen())) {
        await accordion.toggle();
        expect(await accordion.isOpen()).toBe(true);
      }
    }

    // Switch to mobile
    await page.setViewportSize(mobileViewport);
    await page.waitForTimeout(100);

    // Regular accordions should reset to closed
    for (const accordion of regularAccordions) {
      expect(await accordion.isOpen()).toBe(false);
    }

    // Open them again on mobile
    for (const accordion of regularAccordions) {
      await accordion.toggle();
      expect(await accordion.isOpen()).toBe(true);
    }

    // Switch back to desktop
    await page.setViewportSize(desktopViewport);
    await page.waitForTimeout(100);

    // Should reset to closed again
    for (const accordion of regularAccordions) {
      expect(await accordion.isOpen()).toBe(false);
    }
  });
});
