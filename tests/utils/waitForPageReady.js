/* Credits:
* Approach from original seen in Storybook Test Runner
https://github.com/storybookjs/test-runner?tab=readme-ov-file#waitforpageready
* Changes:
* Not using `waitForLoadState('networkidle');` as it oftern fails to resolve in testing and is
* discouraged by Playwright: https://playwright.dev/docs/next/api/class-frame#frame-goto-option-wait-until
* /

/**
 * Waits until page DOM content is loaded and fonts are ready
 * Useful for screenshot test comparisons
 * @param page - The page to wait for
 */
export const waitForPageReady = async (page) => {
  await page.waitForLoadState('domcontentloaded');
  await page.waitForLoadState('load');
  await page.evaluate(() => document.fonts.ready);
};
