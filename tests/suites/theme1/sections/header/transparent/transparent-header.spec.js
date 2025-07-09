import { test, expect } from '@playwright/test';
import exp from 'constants';

test.describe('Transparent header', () => {
  test('Should have transparent background on homepage', async ({ page }) => {
    await page.goto('/?view=test-transparent-header');
    const header = page.locator('header-component');

    const topRow = await header.locator('.header__row--top');
    const bottomRow = await header.locator('.header__row--bottom');

    await expect(topRow).toBeVisible();
    await expect(bottomRow).toBeVisible();

    const topBackgroundColor = await topRow.evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue('background-color');
    });
    const bottomBackgroundColor = await topRow.evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue('background-color');
    });

    expect(topBackgroundColor).toBe('rgba(0, 0, 0, 0)');
    expect(bottomBackgroundColor).toEqual(topBackgroundColor);
  });

  test('Should have opaque background when sticky', async ({ page }) => {
    await page.goto('/?view=test-transparent-header');
    const header = page.locator('header-component');
    await header.waitFor({ state: 'visible' });

    const topRow = await header.locator('.header__row--top');
    await topRow.waitFor({ state: 'visible' });

    const announcementBar = page.locator('aside', { hasText: 'Welcome to our store' });
    await announcementBar.waitFor({ state: 'visible' });

    let topBackgroundColor = await topRow.evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue('background-color');
    });

    expect(topBackgroundColor).toBe('rgba(0, 0, 0, 0)');

    const box = await header.boundingBox();

    expect(box.y).toBeGreaterThan(0);

    await page.evaluate(() => window.scrollBy({ top: 400, behavior: 'smooth' }));
    await page.waitForTimeout(500);

    const newPosition = await header.boundingBox();

    expect(newPosition.y).toEqual(-1);

    topBackgroundColor = await topRow.evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue('background-color');
    });

    expect(topBackgroundColor).not.toBe('rgba(0, 0, 0, 0)');
  });

  test('Should display default logo when inverse logo is not defined', async ({ page }) => {
    await page.goto('/?view=test-sticky-header');

    const header = page.locator('header-component');
    await header.waitFor({ state: 'visible' });

    const inverseLogo = header.getByTestId('header-logo-inverse');
    const defaultLogo = header.getByTestId('header-logo');

    await expect(inverseLogo).not.toBeVisible();
    await expect(defaultLogo).toBeVisible();

    await page.evaluate(() => window.scrollBy({ top: 400, behavior: 'smooth' }));
    await page.waitForTimeout(500);

    await expect(inverseLogo).not.toBeVisible();
    await expect(defaultLogo).toBeVisible();
  });

  // TODO: Skipping this test until it is possible to mock theme settings
  test.skip('Should display inverse logo when defined', async ({ page }) => {
    await page.goto('/?view=test-transparent-header');

    const header = page.locator('header-component');
    await header.waitFor({ state: 'visible' });

    const inverseLogo = header.getByTestId('header-logo-inverse');
    const defaultLogo = header.getByTestId('header-logo');

    await expect(inverseLogo).toBeVisible();
    await expect(defaultLogo).not.toBeVisible();

    await page.evaluate(() => window.scrollBy({ top: 400, behavior: 'smooth' }));
    await page.waitForTimeout(500);

    await expect(inverseLogo).not.toBeVisible();
    await expect(defaultLogo).toBeVisible();
  });
});
