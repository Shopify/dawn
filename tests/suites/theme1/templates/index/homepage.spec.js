const { test, expect } = require('@playwright/test');
const { runSnapshotTest } = require('utils/visualRegressionTests');

test('has a non-empty title element', async ({ page }) => {
  await page.goto('/');

  const pageTitle = await page.title();
  expect(pageTitle).not.toEqual('');
});

runSnapshotTest('/', 'homepage');
