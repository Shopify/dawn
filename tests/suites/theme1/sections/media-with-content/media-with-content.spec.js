const { test, expect } = require('@playwright/test');
const { runAccessibilityTest } = require('@/utils/accesibilityTests');

const testCases = [
  {
    name: 'Content first',
    url: '/?view=test-media-with-content',
    expectedFunction: 'toBeGreaterThan',
  },
  {
    name: 'Media first',
    url: '/?view=test-media-with-content-swapped',
    expectedFunction: 'toBeLessThan',
  },
];

test.describe('Media with text', () => {
  for (const testCase of testCases) {
    test(`It renders a media block and a content block - ${testCase.name}`, async ({ page }) => {
      await page.goto(testCase.url);
      const mediaWithContent = page.getByTestId('media-with-content');
      const media = mediaWithContent.getByRole('img');
      const content = mediaWithContent.getByText('Paper-touch cotton');
      await expect(media).toBeVisible();
      await expect(content).toBeVisible();

      const mediaBoundingBox = await media.boundingBox();
      const contentBoundingBox = await content.boundingBox();
      expect(mediaBoundingBox.x)[testCase.expectedFunction](contentBoundingBox.x);
    });
  }

  // TODO: Fix in safari
  test.skip("It sets a fully visible image when media's image position is set to contain", async ({ page }) => {
    await page.goto('/?view=test-media-with-content-contain');
    await page.setViewportSize({ width: 800, height: 1000 });
    const mediaRight = page.getByTestId('media-with-content').nth(0).getByRole('img');
    const mediaLeft = page.getByTestId('media-with-content').nth(1).getByRole('img');

    expect(mediaRight).toHaveCSS('object-fit', 'contain');
    expect(mediaRight).toHaveCSS('object-position', '50% 50%');
    expect(mediaLeft).toHaveCSS('object-fit', 'contain');
    expect(mediaLeft).toHaveCSS('object-position', '50% 50%');
  });

  runAccessibilityTest('/?view=test-media-with-content', '[data-testid="media-with-content"]');
});
