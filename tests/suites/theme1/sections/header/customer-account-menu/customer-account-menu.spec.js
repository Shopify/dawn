const { test, expect } = require('@playwright/test');
const { translation: t } = require('utils/translations');

test.describe('Customer account menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/?view=test-header-search-top-left');
  });

  test('Should render customer account menu', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit', 'Known issue with clicking summary elements');
    const headerActions = page.locator('header-actions');
    const accountButton = headerActions.locator(`summary [aria-label="${t('accessibility.account')}"]`);

    await accountButton.waitFor({ state: 'visible' });
    await expect(accountButton).toBeVisible();
    await accountButton.click({ force: true });

    const accountPopover = headerActions.locator('floating-panel-component');
    await expect(accountPopover.getByRole('banner').getByText('Account')).toBeVisible();
    await expect(accountPopover.getByRole('link', { name: 'Other sign in options' })).toBeVisible();
    await expect(accountPopover.getByRole('link', { name: 'Orders' })).toBeVisible();
    await expect(accountPopover.getByRole('link', { name: 'Profile' })).toBeVisible();
  });

  test('Should render customer account menu in a drawer on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 400, height: 850 });
    const headerActions = page.locator('header-actions');
    await expect(headerActions).toBeVisible();

    const accountButton = headerActions.getByRole('button', { name: 'Account' });
    await accountButton.waitFor({ state: 'visible' });
    await accountButton.click({ force: true });

    const accountDrawerDialog = page.locator('.account-drawer__dialog');
    await expect(accountDrawerDialog).toBeVisible();
    await expect(accountDrawerDialog.getByRole('banner').getByText('Account')).toBeVisible();

    const closeButton = accountDrawerDialog.getByRole('button', { name: 'Close dialog' });
    await expect(closeButton).toBeVisible();
    await expect(accountDrawerDialog.getByRole('link', { name: 'Other sign in options' })).toBeVisible();
    await closeButton.click();
    await expect(accountDrawerDialog).not.toBeVisible();
  });
});
