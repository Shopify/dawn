const { test, expect } = require('@playwright/test');
import { waitForPageReady } from './waitForPageReady';
import { desktopViewport, mobileViewport } from './viewports';

/**
 * Run a snapshot test for a given destination and name
 * @param {string} destination - URL, including view parameter
 * @param {string} name - The name of the test, prepended on screenshot filename
 * @param {Object} options - The options for the test
 * @param {{width: number, height: number, description: string}[]} [options.viewports] - A custom viewport to test
 */
export const runSnapshotTest = (destination, name, options = {}) => {
  const testViewports = options.viewports ? options.viewports : [desktopViewport, mobileViewport];
  for (const viewport of testViewports) {
    test(`Snapshot: ${name} on ${viewport.description}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto(destination);

      await waitForPageReady(page);

      await expect(page).toHaveScreenshot(`${name}-${viewport.description}.png`);
    });
  }
};
