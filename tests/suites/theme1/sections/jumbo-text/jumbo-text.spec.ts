import { runAccessibilityTest } from '@/utils/accesibilityTests';
import { test, expect } from '@playwright/test';

test.describe('JumboText component', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the test page
    await page.goto('/?view=test-jumbo-text');

    // Wait for the component to be ready
    await page.waitForSelector('jumbo-text');
  });

  test('short text is always in the viewport after resizing', async ({ page }) => {
    // Get the first jumbo-text element (short text)
    const jumboText = page.locator('jumbo-text').first();

    // Check that the text is visible
    await expect(jumboText).toBeVisible();

    // Check that the text is not overflowing its container
    let containerWidth = await jumboText.evaluate((el) => el.clientWidth);
    let textContainer = jumboText.getByTestId('jumbo-text-line');
    const { initialClientWidth, initialScrollWidth, initialFontSize } = await textContainer.evaluate((el) => ({
      initialClientWidth: el.clientWidth,
      initialScrollWidth: el.scrollWidth,
      initialFontSize: parseFloat(getComputedStyle(el).fontSize),
    }));

    // The text width should be less than or equal to the container width
    expect(initialScrollWidth).toEqual(initialClientWidth);
    expect(initialClientWidth).toBeLessThanOrEqual(containerWidth);

    // Resize the viewport to a smaller width
    await page.setViewportSize({ width: 600, height: 800 });

    // Wait for the resize to take effect
    await page.waitForTimeout(500);

    // Get the new text container
    textContainer = jumboText.getByTestId('jumbo-text-line');
    const { clientWidth, scrollWidth, fontSize } = await textContainer.evaluate((el) => ({
      clientWidth: el.clientWidth,
      scrollWidth: el.scrollWidth,
      fontSize: parseFloat(getComputedStyle(el).fontSize),
    }));

    // The text width should be less than or equal to the container width
    expect(scrollWidth).toEqual(clientWidth);
    expect(clientWidth).toBeLessThanOrEqual(containerWidth);
    expect(fontSize).toBeLessThan(initialFontSize);
  });

  test('long text is always in the viewport and does not get cut off', async ({ page }) => {
    // Get the second jumbo-text element (long text)
    const jumboText = page.locator('jumbo-text').nth(1);

    // Check that the text is visible
    await expect(jumboText).toBeVisible();

    // Check that the text is not overflowing its container
    const containerWidth = await jumboText.evaluate((el) => el.clientWidth);
    const textContainer = jumboText.getByTestId('jumbo-text-line');
    const { clientWidth, scrollWidth } = await textContainer.evaluate((el) => ({
      clientWidth: el.clientWidth,
      scrollWidth: el.scrollWidth,
    }));

    // The text width should be less than or equal to the container width
    expect(scrollWidth).toEqual(clientWidth);
    expect(clientWidth).toBeLessThanOrEqual(containerWidth);
  });

  runAccessibilityTest('/?view=test-jumbo-text', 'jumbo-text');
});
