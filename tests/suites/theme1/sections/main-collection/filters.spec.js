const { test, expect } = require('@playwright/test');
const { translation: t } = require('utils/translations');

const testTemplate = 'test-main-collection';
const collectionURL = `/collections/all?view=${testTemplate}`;
const facetsCollectionURL = `/collections/facets-testing?view=${testTemplate}`;

async function getFacetsForm(page, formStyle = 'horizontal') {
  const facetsForm = page.locator(`facets-form-component[form-style="${formStyle}"]`);
  await facetsForm.waitFor({ state: 'visible' });
  return facetsForm;
}

test.describe('Clear All Filters Button', () => {
  test('should be hidden when no filters are active', async ({ page }) => {
    await page.goto(`${facetsCollectionURL}`);

    const facetsForm = await getFacetsForm(page);
    const buttonText = t('actions.clear_all', { count: 0 });
    await expect(facetsForm.getByRole('button', { name: buttonText })).toBeHidden();
  });

  test('should show singular text with one active filter', async ({ page }) => {
    await page.goto(`${facetsCollectionURL}&filter.v.availability=1`); // Override default URL
    const facetsForm = await getFacetsForm(page);
    const buttonText = t('actions.clear_all');
    const clearButton = facetsForm.getByRole('button', { name: buttonText });
    await expect(clearButton).toBeVisible();
  });

  test('should show plural text with multiple active filters', async ({ page }) => {
    await page.goto(`${facetsCollectionURL}&filter.v.availability=1&filter.v.availability=0`); // Override default URL

    const facetsForm = await getFacetsForm(page);

    const buttonText = t('actions.clear_all');
    const clearButton = facetsForm.getByRole('button', { name: buttonText, exact: true });

    await expect(clearButton).toBeVisible();
  });
});

test.describe('Horizontal filters', () => {
  const horizontalCollectionURL = `/collections/facets-testing?view=test-horizontal-filters`;

  test('should filter products when filter is clicked', async ({ page }) => {
    await page.goto(horizontalCollectionURL);
    const facetsForm = await getFacetsForm(page);

    await facetsForm.getByText('Availability').click();
    await facetsForm.locator('label').filter({ hasText: 'Out of stock' }).click();

    await expect(page.url()).toContain('filter.v.availability=0');

    const buttonText = t('actions.clear_all', { count: 1 });
    await expect(page.getByRole('button', { name: buttonText, exact: true })).toBeVisible();
  });

  test('should clear a filter when filter is clicked', async ({ page }) => {
    await page.goto(`${horizontalCollectionURL}&filter.v.availability=0`);
    const facetsForm = await getFacetsForm(page);
    await facetsForm.getByText('Availability').click();
    await facetsForm.locator('label').filter({ hasText: 'Out of stock' }).click();

    await expect(page.url()).not.toContain('filter.v.availability=0');
    await expect(
      facetsForm.locator('accordion-custom:has-text("Availability")').getByRole('button', { name: 'Clear' })
    ).toBeHidden();

    const productCountText = t('content.item_count', { count: 6 });
    await expect(page.getByTitle('Product count')).toHaveText(productCountText);
  });

  test('should clear filter when group clear button is clicked', async ({ page, browserName }) => {
    await page.goto(`${horizontalCollectionURL}&filter.v.availability=0`);
    const facetsForm = await getFacetsForm(page);

    await facetsForm.getByText('Availability').click();
    const clearButton = facetsForm.getByRole('button', { name: 'Clear', exact: true });
    await clearButton.waitFor({ state: 'visible' });

    if (browserName === 'chromium') {
      // Programmatic click because the details element containing the button is animating
      // into view with interpolate-size; the button is not accurately reported as stable for click()
      await clearButton.evaluate((button) => button.click());
    } else {
      await clearButton.click();
    }

    await expect(page.url()).not.toContain('filter.v.availability=0');
    const buttonText = t('actions.clear_all');

    const productCountText = t('content.item_count', { count: 6 });
    await expect(page.getByRole('button', { name: buttonText })).toBeHidden();
    await expect(page.getByTitle('Product count')).toHaveText(productCountText);
  });

  test(`should close when pressing "Escape"`, async ({ page }) => {
    await page.goto(horizontalCollectionURL);
    const facetsForm = await getFacetsForm(page);
    const filterDetails = facetsForm.locator('details').filter({ hasText: 'Color' });
    await filterDetails.locator('summary').focus();
    await page.keyboard.press('Enter');
    await page.waitForTimeout(1000);

    await expect(filterDetails).toHaveAttribute('open');

    // Press tab to focus the first option inside the menu
    await page.keyboard.press('Tab');
    // expect the first option within the filter details to be focused
    await expect(filterDetails.locator('input').first()).toBeFocused();

    // Press escape to close the details following the disclosure navigation pattern
    // https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/#kbd_label
    await page.keyboard.press('Escape');
    await expect(filterDetails).not.toHaveAttribute('open');
    await expect(filterDetails.locator('summary')).toBeFocused();

    // Press enter to re-open the filter
    await page.keyboard.press('Enter');
    await page.keyboard.press('Tab');
    await expect(filterDetails).toHaveAttribute('open');

    // Pressing escape when a filter option is focused should also close the details
    await page.keyboard.press('Escape');
    await expect(filterDetails).not.toHaveAttribute('open');
    await expect(filterDetails.locator('summary')).toBeFocused();
  });

  test('should add all parameters to the URL when selecting multiple filters in the same filter group', async ({
    page,
    browserName,
  }) => {
    await page.goto(horizontalCollectionURL);
    const facetsForm = await getFacetsForm(page);

    await facetsForm.getByText('Availability').click();
    const inStockLabel = facetsForm.locator('label').filter({ hasText: 'In stock' });
    const outOfStockLabel = facetsForm.locator('label').filter({ hasText: 'Out of stock' });

    if (browserName === 'chromium') {
      // Programmatic click because the details element containing the button is animating
      // into view with interpolate-size; the button is not accurately reported as stable for click()
      await inStockLabel.evaluate((button) => button.click());
      await outOfStockLabel.evaluate((button) => button.click());
    } else {
      await inStockLabel.click();
      await outOfStockLabel.click();
    }

    await expect(page.url()).toContain('filter.v.availability=0');
    await expect(page.url()).toContain('filter.v.availability=1');
  });
});

test.describe('Filter Drawer', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 749, height: 1000 });
  });

  test('should open and close when the corresponding controls are clicked', async ({ page }) => {
    await page.goto(`${facetsCollectionURL}`);

    const showButtonText = t('actions.show_filters');
    const filterButton = await page.getByRole('button', { name: showButtonText });
    const filterDialog = page.locator('dialog-component[id="filters-drawer"] dialog');

    await expect(filterButton).toBeVisible();
    await expect(filterDialog).toBeHidden();

    await filterButton.click();
    await expect(filterDialog).toBeVisible();

    await filterDialog.getByTitle('Close').click();
    await expect(filterDialog).toBeHidden();
  });

  test('should close when the escape key is pressed', async ({ page }) => {
    await page.goto(`${facetsCollectionURL}`);

    const showButtonText = t('actions.show_filters');
    const filterButton = await page.getByRole('button', { name: showButtonText });
    const filterDialog = page.locator('dialog-component[id="filters-drawer"] dialog');

    await expect(filterButton).toBeVisible();
    await expect(filterDialog).toBeHidden();

    await filterButton.click();
    await expect(filterDialog).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(filterDialog).toBeHidden();
  });

  test('Priority plus pattern is applied to filters', async ({ page }) => {
    await page.goto(`${collectionURL}`);
    await page.setViewportSize({ width: 755, height: 1000 });

    const facetsForm = await getFacetsForm(page);
    const moreButtonText = t('actions.more');
    const filterButton = await facetsForm.getByRole('button', { name: moreButtonText });

    await expect(filterButton).toBeVisible();
    await filterButton.click();

    const filterDialog = page.locator('dialog-component[id="filters-drawer"] dialog');
    await expect(filterDialog).toBeVisible();
  });
});

test.describe('Vertical filters', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/collections/all-clothing?view=test-vertical-filters`);
  });

  test.skip(`have "show more" button when 10+ filter-values`, async ({ page }) => {
    const facetsForm = await getFacetsForm(page, 'vertical');
    const result = await facetsForm.getByRole('list').count();
    expect(result).toBeGreaterThan(2);

    let foundFilterWithTen = false;
    for (let i = 0; i < result; i++) {
      const filter = await facetsForm.getByRole('list').nth(i);
      const filterName = await filter.getAttribute('name');
      const filterCount = await filter.getByRole('listitem').count();
      if (filterCount === 10 && filterName !== 'Color') {
        foundFilterWithTen = true;
        const controlId = await filter.getAttribute('id');
        const toggleListButton = await facetsForm.locator(`[aria-controls="${controlId}"]`);
        await expect(toggleListButton).toBeVisible();
        await expect(toggleListButton).toBeEnabled();
        await toggleListButton.click();
        expect(await filter.getByRole('listitem').count()).toBeGreaterThan(10);
        await toggleListButton.click();
        // Wait for the animation to complete
        await page.waitForTimeout(1000);
        expect(await filter.getByRole('listitem').count()).toBe(10);
      } else {
        const controlId = await filter.getAttribute('id');
        const toggleListButton = await facetsForm.locator(`[aria-controls="${controlId}"]`);
        await expect(toggleListButton).not.toBeVisible();
      }
    }
    // Ensure we found at least one filter with 10+ values to test
    expect(foundFilterWithTen).toBe(true);
  });

  test('remove a filter when the remove button is clicked', async ({ page }) => {
    const facetsForm = await getFacetsForm(page, 'vertical');
    const initialProductCardCount = await page.locator('product-card').count();
    const colorCheckbox = await facetsForm.getByRole('checkbox', { name: 'Black' });
    await colorCheckbox.click();

    const removeButton = await page.getByRole('button', { name: 'Black Remove' });
    await removeButton.waitFor({ state: 'visible' });
    const filteredProductCardCount = await page.locator('product-card').count();
    expect(filteredProductCardCount).toBeLessThan(initialProductCardCount);

    await removeButton.click();
    await expect(removeButton).not.toBeVisible();
    const finalProductCardCount = await page.locator('product-card').count();
    expect(finalProductCardCount).toBe(initialProductCardCount);
  });
});

test('On mobile, filter count bubble should be visible and show correct count when filters are applied', async ({
  page,
}) => {
  await page.setViewportSize({ width: 749, height: 1200 });

  let url = `collections/all-clothing?view=test-main-collection`;
  // Collection has 4 different filters applied
  const urlWithFourFilters =
    (url += `&filter.v.option.size=XS&filter.v.option.size=S&filter.v.option.size=M&filter.v.option.size=L`);
  await page.goto(urlWithFourFilters);

  const filtersToggle = await page.getByRole('button', { name: t('accessibility.filter_count', { count: 4 }) });
  await expect(filtersToggle).toBeVisible();

  await filtersToggle.click();

  const drawerHeading = await page.locator('facets-form-component').getByRole('heading');
  const filterBubble = await drawerHeading.getByText(t('accessibility.filter_count', { count: 4 }));
  await expect(filterBubble).toBeVisible();
});
