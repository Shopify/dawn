import { test, expect } from '@playwright/test';
import { runAccessibilityTest } from '@/utils/accesibilityTests';

test.describe('Announcement Bar', () => {
  test('2 announcements are present on load, and only one is visible', async ({ page }) => {
    await page.goto('/?view=test-announcement-bar');
    const targetSection = await page.locator('.announcement-bar');
    const announcement_1 = await targetSection.locator('slideshow-slide').filter({ hasText: 'Welcome to our store!' });
    const announcement_2 = await targetSection.locator('slideshow-slide').filter({ hasText: 'Another announcement!' });

    let announcement_1_aria_hidden = await announcement_1.getAttribute('aria-hidden');
    let announcement_2_aria_hidden = await announcement_2.getAttribute('aria-hidden');
    const visibleCount =
      (announcement_1_aria_hidden === 'true' ? 1 : 0) + (announcement_2_aria_hidden === 'true' ? 1 : 0);
    expect(visibleCount).toBe(1);
  });

  runAccessibilityTest('/?view=test-announcement-bar', '.announcement-bar');
});
