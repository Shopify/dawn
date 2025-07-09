import { runAccessibilityTest } from '@/utils/accesibilityTests';
import { test, expect, Page } from '@playwright/test';

test.describe('Responsive padding', () => {
  const PADDING = 100;

  const VIEWS = ['test-custom-section', 'test-header-transparent-custom-section'];

  const VIEWPORT_SIZES = {
    desktop: { width: 1200, height: 800 },
    tablet: { width: 900, height: 800 },
    mobile: { width: 600, height: 800 },
  };

  const SCALE_FACTORS = {
    desktop: 1,
    tablet: 0.7,
    mobile: 0.7,
  };

  const ELEMENTS_TO_TEST = [
    { name: 'section', selector: '[data-testid="section-content"]' },
    { name: 'group', selector: '[data-testid="group-block"]' },
  ];

  async function testPaddingScale(
    page: Page,
    {
      viewport,
      elementSelector,
      expectedScale,
      view = 'test-custom-section',
    }: {
      viewport: keyof typeof VIEWPORT_SIZES;
      elementSelector: string;
      expectedScale: number;
      view?: string;
    }
  ) {
    await page.goto(`/?view=${view}`);
    if (viewport !== 'desktop') {
      await page.setViewportSize(VIEWPORT_SIZES[viewport]);
    }

    const element = page.locator(elementSelector).first();
    await expect(element).toBeVisible();

    const computedStyle = await element.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return {
        paddingTop: parseFloat(styles.paddingBlockStart),
        paddingBottom: parseFloat(styles.paddingBlockEnd),
      };
    });

    const expectedPadding = PADDING * expectedScale;

    let headerPadding = 0;
    if (view === 'test-header-transparent-custom-section') {
      // account for the additional padding section adds to top padding when there's a transparent header
      const header = page.locator('header-component');
      await header.waitFor({ state: 'visible' });
      const box = await header.boundingBox();
      headerPadding = box?.height ?? 0;
    }

    expect(computedStyle.paddingTop).toBeCloseTo(expectedPadding + headerPadding, 1);
    expect(computedStyle.paddingBottom).toBeCloseTo(expectedPadding, 1);
  }

  for (const element of ELEMENTS_TO_TEST) {
    test.describe(element.name, () => {
      for (const view of VIEWS) {
        if (view === 'test-header-transparent-custom-section' && element.name === 'group') {
          continue;
        }
        test.describe(`${view}`, () => {
          test('Should not scale padding on desktop viewport', async ({ page }) => {
            await testPaddingScale(page, {
              viewport: 'desktop',
              elementSelector: element.selector,
              expectedScale: SCALE_FACTORS.desktop,
              view,
            });
          });

          test('Should scale padding on tablet viewport', async ({ page }) => {
            await testPaddingScale(page, {
              viewport: 'tablet',
              elementSelector: element.selector,
              expectedScale: SCALE_FACTORS.tablet,
              view,
            });
          });

          test('Should scale padding on mobile viewport', async ({ page }) => {
            await testPaddingScale(page, {
              viewport: 'mobile',
              elementSelector: element.selector,
              expectedScale: SCALE_FACTORS.mobile,
              view,
            });
          });

          runAccessibilityTest(`/?view=${view}`, element.selector);
        });
      }
    });
  }
});
