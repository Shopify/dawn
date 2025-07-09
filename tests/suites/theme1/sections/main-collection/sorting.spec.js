import { test, expect } from '@playwright/test';
import { translation as t } from 'utils/translations';
import AxeBuilder from '@axe-core/playwright';

const baseURL = '/collections/facets-testing';
const verticalFiltersCollectionURL = `${baseURL}?view=test-vertical-filters`;
const horizontalFiltersCollectionURL = `${baseURL}?view=test-horizontal-filters`;
const verticalFiltersSortingOnlyCollectionURL = `${baseURL}?view=test-vertical-filters-sorting-only`;
const horizontalFiltersSortingOnlyCollectionURL = `${baseURL}?view=test-horizontal-filters-sorting-only`;

const desktopViewport = { width: 1400, height: 1000 };
const mobileViewport = { width: 749, height: 1200 };

// TODO: Add test to check that the sorting component has the checkmark when the page loads with a parameter set

async function openSortingDropdown(page, viewport = 'desktop') {
  const sortingComponent = page.getByTestId(`sorting-filter-component-${viewport}`);
  const sortToggleElement = sortingComponent.getByRole('button', { name: t('actions.sort') });
  const floatingPanel = sortingComponent.locator('floating-panel-component');

  await expect(floatingPanel).toBeHidden();
  await expect(sortToggleElement).toBeVisible();
  await sortToggleElement.click();
  await expect(floatingPanel).toBeVisible();

  return { sortingComponent, sortToggleElement, floatingPanel };
}

async function runAccessibilityScan(page, selector) {
  const accessibilityScanResults = await new AxeBuilder({ page }).include(selector).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
}

async function testFloatingPanelSorting(page, { viewport = 'desktop' }) {
  const { floatingPanel } = await openSortingDropdown(page, viewport);

  const alphabeticSortingOption = await floatingPanel.locator('label:has-text("Alphabetically, A-Z")');
  await expect(alphabeticSortingOption).toBeVisible();

  await alphabeticSortingOption.click();

  await expect(page.url()).toContain('sort_by=' + 'title-ascending');
}

async function testSelectSorting(page) {
  const filtersToggle = await page.getByRole('button', { name: t('actions.show_filters') });
  await expect(filtersToggle).toBeVisible();

  await filtersToggle.click();

  const drawerHeading = await page.locator('facets-form-component').locator('sorting-filter-component');
  const sortingSelect = await drawerHeading.getByRole('combobox');
  await expect(sortingSelect).toBeVisible();

  const options = await sortingSelect.locator('option:not([selected])');

  const firstOption = await options.first();
  const firstOptionValue = await firstOption.getAttribute('value');
  sortingSelect.selectOption({ value: firstOptionValue });

  // Updating the URL takes a while on safari
  await page.waitForTimeout(200);
  await expect(page.url()).toContain('sort_by=' + firstOptionValue);
}

test.describe('Sorting - Filters in Vertical Mode - Filters enabled', () => {
  test('can sort on desktop and filters use a floating panel', async ({ page }) => {
    await page.setViewportSize(desktopViewport);
    await page.goto(verticalFiltersCollectionURL);
    await testFloatingPanelSorting(page, { viewport: 'desktop' });
  });

  test('can filter on mobile and filters use a select', async ({ page }) => {
    await page.setViewportSize(mobileViewport);
    await page.goto(verticalFiltersCollectionURL);
    await testSelectSorting(page);
  });

  test('can sort on desktop and active filters are preserved', async ({ page }) => {
    await page.setViewportSize(desktopViewport);
    await page.goto(`${verticalFiltersCollectionURL}&filter.v.option.size=15mL`);

    await testFloatingPanelSorting(page, { viewport: 'desktop' });
    await expect(page.url()).toContain('filter.v.option.size=15mL');
  });

  test('can filter on mobile and active filters are preserved', async ({ page }) => {
    await page.setViewportSize(mobileViewport);
    await page.goto(`${verticalFiltersCollectionURL}&filter.v.option.size=15mL`);

    await testSelectSorting(page);
    await expect(page.url()).toContain('filter.v.option.size=15mL');
  });
});

test.describe('Sorting - Filters in Horizontal Mode - Filters enabled', () => {
  test('can sort on desktop and filters use a floating panel', async ({ page }) => {
    await page.setViewportSize(desktopViewport);
    await page.goto(horizontalFiltersCollectionURL);

    await testFloatingPanelSorting(page, { viewport: 'desktop' });
  });

  test('can filter on mobile and filters use a select', async ({ page }) => {
    await page.setViewportSize(mobileViewport);
    await page.goto(horizontalFiltersCollectionURL);

    await testSelectSorting(page);
  });

  test('can sort on desktop and active filters are preserved', async ({ page }) => {
    await page.setViewportSize(desktopViewport);
    await page.goto(`${horizontalFiltersCollectionURL}&filter.v.option.size=15mL`);

    await testFloatingPanelSorting(page, { viewport: 'desktop' });
    await expect(page.url()).toContain('filter.v.option.size=15mL');
  });

  test('can filter on mobile and active filters are preserved', async ({ page }) => {
    await page.setViewportSize(mobileViewport);
    await page.goto(`${horizontalFiltersCollectionURL}&filter.v.option.size=15mL`);

    await testSelectSorting(page);
    await expect(page.url()).toContain('filter.v.option.size=15mL');
  });

  test('should close sorting dropdown when pressing Escape key', async ({ page }) => {
    await page.setViewportSize(desktopViewport);
    await page.goto(horizontalFiltersCollectionURL);

    const sortingComponent = page.getByTestId('sorting-filter-component-desktop');
    const sortToggleElement = await page.getByRole('button', { name: t('actions.sort') });
    const floatingPanel = sortingComponent.locator('floating-panel-component');

    // Open the sorting dropdown
    await sortToggleElement.click();
    await expect(floatingPanel).toBeVisible();

    // Focus on a sorting option
    const firstOption = floatingPanel.locator('label').first();
    await firstOption.focus();

    // Press Escape key
    await page.keyboard.press('Escape');

    // Verify dropdown is closed
    await expect(floatingPanel).toBeHidden();

    // Verify focus returns to the toggle button
    await expect(sortToggleElement).toBeFocused();
  });
});

test.describe('Sorting - Filters in Vertical Mode - Filters disabled', () => {
  test('can sort on desktop and filters use a floating panel', async ({ page }) => {
    await page.setViewportSize(desktopViewport);
    await page.goto(verticalFiltersSortingOnlyCollectionURL);

    await testFloatingPanelSorting(page, { viewport: 'desktop' });
  });

  test('can sort on mobile and filters use a floating panel', async ({ page }) => {
    await page.setViewportSize(mobileViewport);
    await page.goto(verticalFiltersSortingOnlyCollectionURL);

    await testFloatingPanelSorting(page, { viewport: 'mobile' });
  });
});

test.describe('Sorting - Filters in Horizontal Mode - Filters disabled', () => {
  test('can sort on desktop and filters use a floating panel', async ({ page }) => {
    await page.setViewportSize(desktopViewport);
    await page.goto(horizontalFiltersSortingOnlyCollectionURL);

    await testFloatingPanelSorting(page, { viewport: 'desktop' });
  });

  test('can sort on mobile and filters use a floating panel', async ({ page }) => {
    await page.setViewportSize(mobileViewport);
    await page.goto(horizontalFiltersSortingOnlyCollectionURL);

    await testFloatingPanelSorting(page, { viewport: 'mobile' });
  });
});

test.describe('Sorting - Accessibility', () => {
  test("there's no accessibility violations when dropdown is closed", async ({ page }) => {
    await page.setViewportSize(desktopViewport);
    await page.goto('/collections/facets-testing?view=test-vertical-filters');
    await runAccessibilityScan(page, '[data-testid="sorting-filter-component-desktop"]');
  });

  test("there's no accessibility violations when dropdown is opened", async ({ page }) => {
    await page.setViewportSize(desktopViewport);
    await page.goto('/collections/facets-testing?view=test-vertical-filters');
    await openSortingDropdown(page, 'desktop');
    await runAccessibilityScan(page, '[data-testid="sorting-filter-component-desktop"]');
  });
});
