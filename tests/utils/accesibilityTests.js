import AxeBuilder from '@axe-core/playwright';
import { waitForPageReady } from './waitForPageReady';
import { test, expect } from '@playwright/test';

/**
 * Run an accessibility test for a given destination and element
 * @param {string} destination - The destination URL to test
 * @param {string} selector - The selector of the element to test
 * @param {string} [title] - The name of the tested element. Defaults to the selector.
 */
export const runAccessibilityTest = async (destination, selector, title) => {
  const testTitle = title || selector;
  test(`${testTitle} has no accessibility violations`, async ({ page }) => {
    await page.goto(destination);
    await waitForPageReady(page);
    const accessibilityScanResults = await new AxeBuilder({ page }).include(selector).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
};
