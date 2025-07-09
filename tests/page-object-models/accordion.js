/** @typedef {import('@playwright/test').Page} Page */
/** @typedef {import('@playwright/test').Locator} Locator */

/**
 * Base class for accordion functionality
 */
export class Accordion {
  /**
   * @param {Locator} locator - Playwright locator for the accordion element
   */
  constructor(locator) {
    /** @type {Locator} */
    this.accordion = locator;
    /** @type {Locator} */
    this.details = this.accordion.locator('details').first();
    /** @type {Locator} */
    this.summary = this.details.locator('summary').first();
  }

  /**
   * Check if the accordion is open
   * @returns {Promise<boolean>}
   */
  async isOpen() {
    return this.details.evaluate((el) => el.hasAttribute('open'));
  }

  /**
   * Click the accordion to toggle it
   * @returns {Promise<void>}
   */
  async toggle() {
    await this.summary.click();
  }

  /**
   * Check if accordion is disabled on current viewport
   * @param {'desktop'|'mobile'} viewport - The viewport to check
   * @returns {Promise<boolean>}
   */
  async isDisabledOn(viewport) {
    const attribute = viewport === 'desktop' ? 'data-disable-on-desktop' : 'data-disable-on-mobile';
    return this.accordion.evaluate((el, attr) => el.getAttribute(attr) === 'true', attribute);
  }

  /**
   * Check if accordion has open-by-default attribute for viewport
   * @param {'desktop'|'mobile'} viewport - The viewport to check
   * @returns {Promise<boolean>}
   */
  async hasOpenByDefaultOn(viewport) {
    const attribute = viewport === 'desktop' ? 'open-by-default-on-desktop' : 'open-by-default-on-mobile';
    return this.accordion.evaluate((el, attr) => el.hasAttribute(attr), attribute);
  }
}

/**
 * Page object model for accordion-custom component pages
 */
export class AccordionCustomPage {
  /**
   * @param {Page} page - Playwright page object
   */
  constructor(page) {
    /** @private */
    this.page = page;

    /** @type {Locator} */
    this.allAccordions = this.page.locator('accordion-custom');
  }

  /**
   * Navigate to the accordion behaviors test page
   * @returns {Promise<void>}
   */
  async goToAccordionBehaviors() {
    await this.page.goto('/?view=test-accordion-behaviors');
    await this.allAccordions.first().waitFor({ state: 'visible' });
  }

  /**
   * Get all accordion instances on the page
   * @returns {Promise<Accordion[]>}
   */
  async getAllAccordions() {
    const count = await this.allAccordions.count();
    const accordions = [];
    for (let i = 0; i < count; i++) {
      accordions.push(new Accordion(this.allAccordions.nth(i)));
    }
    return accordions;
  }

  /**
   * Get accordion by heading text
   * @param {string} headingText - The text to search for
   * @returns {Promise<Accordion>}
   */
  async getAccordionByHeading(headingText) {
    const locator = this.page.locator('accordion-custom').filter({
      has: this.page.getByTestId('accordion-details').filter({
        has: this.page.getByText(headingText, { exact: true }),
      }),
    });
    return new Accordion(locator);
  }

  /**
   * Get accordion that has open-by-default attribute
   * @returns {Promise<Accordion>}
   */
  async getOpenByDefaultAccordion() {
    // First, wait for any accordion to be visible
    await this.allAccordions.first().waitFor({ state: 'visible' });

    // Find accordion with both open-by-default attributes
    const locator = this.page.locator('accordion-custom[open-by-default-on-desktop][open-by-default-on-mobile]');

    // Check if it exists
    const count = await locator.count();
    if (count === 0) {
      throw new Error(
        'No accordion found with both open-by-default-on-desktop and open-by-default-on-mobile attributes'
      );
    }

    return new Accordion(locator.first());
  }

  /**
   * Get accordions without open-by-default
   * @returns {Promise<Accordion[]>}
   */
  async getRegularAccordions() {
    const allAccordions = await this.getAllAccordions();
    const regularAccordions = [];

    for (const accordion of allAccordions) {
      const hasOpenByDefaultDesktop = await accordion.hasOpenByDefaultOn('desktop');
      const hasOpenByDefaultMobile = await accordion.hasOpenByDefaultOn('mobile');
      if (!hasOpenByDefaultDesktop || !hasOpenByDefaultMobile) {
        regularAccordions.push(accordion);
      }
    }

    return regularAccordions;
  }
}

/**
 * Page object model for menu accordion functionality
 */
export class MenuAccordionPage {
  /**
   * @param {Page} page - Playwright page object
   */
  constructor(page) {
    /** @private */
    this.page = page;

    /** @type {Locator} */
    this.menuDetails = this.page.getByTestId('menu-details');
  }

  /**
   * Navigate to the menu accordion test page
   * @returns {Promise<void>}
   */
  async goToMenuAccordion() {
    await this.page.goto('/?view=test-menu-accordion');
    await this.menuDetails.first().waitFor({ state: 'visible' });
  }

  /**
   * Get menu accordion by heading text
   * @param {string} headingText - The heading text to search for
   * @returns {Promise<Accordion>}
   */
  async getMenuByHeading(headingText) {
    const details = this.menuDetails.filter({
      has: this.page.locator('summary').filter({ hasText: headingText }),
    });
    const accordion = await details.evaluateHandle((el) => el.parentElement);
    return new Accordion(this.page.locator('accordion-custom').filter({ has: details }));
  }

  /**
   * Get all menu accordions
   * @returns {Promise<Accordion[]>}
   */
  async getAllMenus() {
    const count = await this.menuDetails.count();
    const menus = [];

    for (let i = 0; i < count; i++) {
      const details = this.menuDetails.nth(i);
      // Get the parent accordion-custom element of this details element
      const accordionHandle = await details.evaluateHandle((el) => el.parentElement);
      const accordionLocator = this.page.locator('accordion-custom').nth(i);
      menus.push(new Accordion(accordionLocator));
    }

    return menus;
  }
}
