import { test, expect } from '@playwright/test';

test.describe('settings.enable_sticky_header', () => {
  test('Should always be sticky when `always`', async ({ page }) => {
    await page.goto('/?view=test-sticky-header');
    const header = page.locator('header-component');
    await header.waitFor({ state: 'visible' });

    const announcementBar = page.locator('aside', { hasText: 'Welcome to our store' });
    await announcementBar.waitFor({ state: 'visible' });

    const box = await header.boundingBox();

    // top position will be greater than 0 if announcement bar is rendered above
    expect(box.y).toBeGreaterThan(0);

    await page.evaluate(() => window.scrollBy({ top: 400, behavior: 'smooth' }));
    await page.waitForTimeout(500);

    const newPosition = await header.boundingBox();

    expect(newPosition.y).toEqual(-1);
  });

  test('Should be sticky on scroll when `scroll up`', async ({ page }) => {
    await page.goto('/?view=test-sticky-scroll-up-header');

    const header = page.locator('header-component');
    await header.waitFor({ state: 'visible' });

    const announcementBar = page.locator('aside', { hasText: 'Welcome to our store' });
    await announcementBar.waitFor({ state: 'visible' });

    const box = await header.boundingBox();
    const originalY = box.y;
    expect(originalY).toBeGreaterThan(0);

    // scroll down, element should have moved the amount scrolled
    await page.evaluate(() => window.scrollBy({ top: 400, behavior: 'smooth' }));
    await page.waitForTimeout(500);

    let newPosition = await header.boundingBox();
    expect(newPosition.y + 400).toEqual(originalY);

    // scroll up, element should be sticky at the top
    await page.evaluate((y) => window.scrollBy({ top: -30, behavior: 'smooth' }));
    await page.waitForTimeout(500);

    newPosition = await header.boundingBox();

    expect(newPosition.y).toEqual(-1);
  });

  test('Should not be sticky when `never`', async ({ page }) => {
    await page.goto('/?view=test-never-sticky-header');

    const header = page.locator('header-component');
    await header.waitFor({ state: 'visible' });

    const announcementBar = page.locator('aside', { hasText: 'Welcome to our store' });
    await announcementBar.waitFor({ state: 'visible' });

    const box = await header.boundingBox();
    const originalY = box.y;
    expect(originalY).toBeGreaterThan(0);

    await page.evaluate(() => window.scrollBy({ top: 400, behavior: 'smooth' }));
    await page.waitForTimeout(500);

    let newPosition = await header.boundingBox();
    expect(newPosition.y + 400).toEqual(originalY);

    // scroll up, element should be sticky at the top
    await page.evaluate((y) => window.scrollBy({ top: -30, behavior: 'smooth' }));
    await page.waitForTimeout(500);

    newPosition = await header.boundingBox();
    expect(newPosition.y + 370).toEqual(originalY);
  });
});
