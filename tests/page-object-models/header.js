/** @typedef {import('@playwright/test').Page} Playwright.Page */
/** @typedef {import('@playwright/test').Locator} Playwright.Locator */
import { translation as t } from 'utils/translations';

/**
 * Page object model representing the header functionality
 */
export class Header {
  /**
   * @param {Playwright.Page} page - Playwright page object
   */
  constructor(page) {
    /** @private */
    this.page = page;

    /** @type {Playwright.Locator} */
    this.header = this.page.locator('header-component');
    /** @type {Playwright.Locator} */
    this.topLeftColumn = this.page.getByTestId('header-top-left');
    /** @type {Playwright.Locator} */
    this.topRightColumn = this.page.getByTestId('header-top-right');
    /** @type {Playwright.Locator} */
    this.topCenterColumn = this.page.getByTestId('header-top-center');
    /** @type {Playwright.Locator} */
    this.searchButtonLeft = this.topLeftColumn.getByRole('button', { name: 'Search' });
    /** @type {Playwright.Locator} */
    this.searchButtonRight = this.topRightColumn.getByRole('button', { name: 'Search' });
    /** @type {Playwright.Locator} */
    this.logo = this.header.getByRole('link', { name: 'Horizon' });
    /** @type {Playwright.Locator} */
    this.menuItem = this.header.getByRole('navigation').getByRole('link').first();
    /** @type {Playwright.Locator} */
    this.menuItemWithSubmenu = this.header.getByRole('navigation').locator('a[aria-haspopup="true"]').first();
    /** @type {Playwright.Locator} */
    this.menuIcon = this.header.getByLabel(t('accessibility.menu'), { exact: true });
    /** @type {Playwright.Locator} */
    this.drawerMenu = this.header.locator('.menu-drawer');
    /** @type {Playwright.Locator} */
    this.drawerMenuLastItem = this.drawerMenu.getByRole('navigation').locator('li.menu-drawer__list-item').last();
  }

  /**
   * Navigate to the search top left layout test page and wait for header to be visible
   * @returns {Promise<void>}
   */
  async goToSearchTopLeftLayout() {
    await this.page.goto('/?view=test-header-layout-search-top-left');
    await this.header.waitFor({ state: 'visible' });
  }

  /**
   * Navigate to the search top right layout test page and wait for header to be visible
   * @returns {Promise<void>}
   */
  async goToSearchTopRightLayout() {
    await this.page.goto('/?view=test-header-layout-search-top-right');
    await this.header.waitFor({ state: 'visible' });
  }

  /**
   * Navigate to the search and logo top left layout test page and wait for header to be visible
   * @returns {Promise<void>}
   */
  async goToSearchAndLogoTopLeftLayout() {
    await this.page.goto('/?view=test-header-layout-search-and-logo-top-left');
    await this.header.waitFor({ state: 'visible' });
  }

  /**
   * Navigate to the search hidden layout test page and wait for header to be visible
   * @returns {Promise<void>}
   */
  async goToSearchHiddenLayout() {
    await this.page.goto('/?view=test-header-layout-search-hidden');
    await this.header.waitFor({ state: 'visible' });
  }

  /**
   * Navigate to the logo hidden layout test page and wait for header to be visible
   * @returns {Promise<void>}
   */
  async goToLogoHiddenLayout() {
    await this.page.goto('/?view=test-header-layout-logo-hidden');
    await this.header.waitFor({ state: 'visible' });
  }

  /**
   * Navigate to view template for featured products menu
   * @returns {Promise<void>}
   */
  async goToMenuFeaturedProducts() {
    await this.page.goto('/?view=test-header-menu-featured-products');
    await this.header.waitFor({ state: 'visible' });
  }

  /**
   * Navigate to view template for featured collections menu
   * @returns {Promise<void>}
   */
  async goToMenuFeaturedCollections() {
    await this.page.goto('/?view=test-header-menu-featured-collections');
    await this.header.waitFor({ state: 'visible' });
  }

  /**
   * Hover over the menu item and wait for the submenu to be visible
   * @returns {Promise<void>}
   */
  async hoverToOpenSubmenu() {
    await this.menuItemWithSubmenu.hover();
    // Delay for submenu to finish animating
    await this.page.waitForTimeout(2000);
  }

  /**
   * Open the mobile menu drawer
   * @returns {Promise<void>}
   */
  async openMobileMenuDrawer() {
    await this.menuIcon.click();
    // Delay for drawer to finish animating
    await this.page.waitForTimeout(2000);
  }

  /**
   * Scroll to the bottom of the mobile menu drawer
   * @returns {Promise<void>}
   */
  async scrollToLastItemOfMobileMenuDrawer() {
    // Use Playwright's built-in method to scroll the element into view
    await this.drawerMenuLastItem.scrollIntoViewIfNeeded();
    // Wait for any scroll animations to complete
    await this.page.waitForTimeout(1000);
  }

  /**
   * Click on the last item of the mobile menu drawer
   * @returns {Promise<void>}
   */
  async clickOnLastItemOfMobileMenuDrawer() {
    // Try to find a visible menu item if the last one is hidden
    const visibleMenuItems = this.drawerMenu.getByRole('navigation').locator('li.menu-drawer__list-item:visible');
    const lastVisibleItem = visibleMenuItems.last();

    // Wait for at least one visible menu item
    await lastVisibleItem.waitFor({ state: 'visible', timeout: 10000 });

    // Click the last visible item
    await lastVisibleItem.click();

    await this.page.waitForTimeout(2000);
  }
}
