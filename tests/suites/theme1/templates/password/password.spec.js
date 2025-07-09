const { runAccessibilityTest } = require('@/utils/accesibilityTests');
const { test, expect } = require('@playwright/test');
const { translation: t } = require('utils/translations');
const { runSnapshotTest } = require('utils/visualRegressionTests');

// Reset storage state for this file to avoid being authenticated
test.use({ storageState: { cookies: [] } });

test.beforeEach(async ({ page }) => {
  // Go to the /password page, preserving all existing parameters and add the pb=0 parameter
  const baseURL = test.info().project.use.baseURL;
  const baseUrlObj = new URL(baseURL);
  const passwordUrl = new URL('/password', baseUrlObj.origin);

  for (const [key, value] of baseUrlObj.searchParams.entries()) {
    passwordUrl.searchParams.set(key, value);
  }

  // Add the pb=0 parameter to hide the Preview Bar; otherwise Preview Bar blocks the password form elements
  passwordUrl.searchParams.set('pb', '0');

  await page.goto(passwordUrl.toString());
});

test.describe('Password page', () => {
  test('correct password enters the store', async ({ page }) => {
    const currentUrl = page.url();
    const enterButton = page.getByRole('button', { name: t('actions.enter_using_password') });
    await expect(enterButton).toBeVisible();
    await enterButton.click();

    const passwordInput = page.getByLabel(t('placeholders.password'));
    const submitButton = page.getByRole('button', { name: t('actions.submit') });

    await passwordInput.click();
    await passwordInput.fill(process.env.SHOPIFY_STORE_PASSWORD);

    await submitButton.click();

    // URL may be redirected to the primary domain name, so we need to get the new URL
    const newUrl = page.url();
    const newUrlObj = new URL(newUrl);

    expect(newUrlObj.pathname).toBe('/');
    expect(newUrl).not.toContain('/password');
  });

  // skip this test for now because repeated tests triggers a timeout from Shopify
  test.skip('wrong password shows error status', async ({ page }) => {
    const passwordInput = page.getByRole('textbox', { name: 'Password', exact: true });
    await passwordInput.fill('123456');

    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForLoadState();

    const newStatus = await page.getByRole('status', { name: 'Errors', exact: true });
    await expect(newStatus).toBeVisible();
  });

  test.skip('right password enters the store', async ({ page }) => {
    if (!process.env.SHOPIFY_STORE_PASSWORD) {
      throw new Error('SHOPIFY_STORE_PASSWORD environment variable is required');
    }

    const passwordInput = page.getByRole('textbox', { name: 'Password', exact: true });
    await passwordInput.fill(process.env.SHOPIFY_STORE_PASSWORD);

    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForLoadState();

    await expect(page).not.toHaveURL('/password');
  });

  runAccessibilityTest('/password', '#MainContent', 'Password page');
});

runSnapshotTest('/password', 'password');
