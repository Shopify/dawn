import { test, expect } from '@playwright/test';
import { runAccessibilityTest } from '@/utils/accesibilityTests';

test('Accordion panel content is visible after clicking on the accordion title', async ({ page }) => {
  await page.goto('/?view=test-accordion');
  await page.getByText('Shipping & Returns').click();
  await page.waitForTimeout(500);
  await expect(page.getByText('Free shipping on orders over $100')).toBeVisible();
});

runAccessibilityTest('/?view=test-accordion', '[data-testid="section-content"]');
