/**
 * @typedef CustomerAddressSelectors
 * @property {string} customerAddresses - Customer addresses container selector.
 * @property {string} addressCountrySelect - Address country select selector.
 * @property {string} addressContainer - Address container selector.
 * @property {string} toggleAddressButton - Toggle address button selector.
 * @property {string} cancelAddressButton - Cancel address button selector.
 * @property {string} deleteAddressButton - Delete address button selector.
 *
 * @typedef CustomerAddressAttributes
 * @property {string} expanded - Expanded attribute.
 * @property {string} confirmMessage - Confirm message attribute
 *
 * @typedef CustomerAddressElements
 * @property {HTMLElement} container - Customer addresses container element.
 * @property {HTMLElement} addressContainer - Address container element.
 * @property {NodeList} toggleButtons - Toggle address button elements.
 * @property {NodeList} cancelButtons - Cancel address button elements.
 * @property {NodeList} deleteButtons - Delete address button elements.
 * @property {NodeList} countrySelects - Address country select elements.
 */

/** @type {CustomerAddressSelectors} */
const selectors = {
  customerAddresses: '[data-customer-addresses]',
  addressCountrySelect: '[data-address-country-select]',
  addressContainer: '[data-address]',
  toggleAddressButton: 'button[aria-expanded]',
  cancelAddressButton: 'button[type="reset"]',
  deleteAddressButton: 'button[data-confirm-message]',
};

/** @type {CustomerAddressAttributes} */
const attributes = {
  expanded: 'aria-expanded',
  confirmMessage: 'data-confirm-message',
};

/** Customer addressed management class. */
class CustomerAddresses {
  constructor() {
    /** @type {CustomerAddressElements} */
    this.elements = this._getElements();
    if (Object.keys(this.elements).length === 0) return;
    this._setupCountries();
    this._setupEventListeners();
  }

  /**
   * Gather actionable address elements.
   * @returns {CustomerAddressElements} elements required for address management.
   * @private
   */
  _getElements() {
    const container = document.querySelector(selectors.customerAddresses);
    return container
      ? {
          container,
          addressContainer: container.querySelector(selectors.addressContainer),
          toggleButtons: document.querySelectorAll(selectors.toggleAddressButton),
          cancelButtons: container.querySelectorAll(selectors.cancelAddressButton),
          deleteButtons: container.querySelectorAll(selectors.deleteAddressButton),
          countrySelects: container.querySelectorAll(selectors.addressCountrySelect),
        }
      : {};
  }

  /**
   * Set up country and province selectors.
   * @private
   */
  _setupCountries() {
    if (Shopify && Shopify.CountryProvinceSelector) {
      // eslint-disable-next-line no-new
      new Shopify.CountryProvinceSelector('AddressCountryNew', 'AddressProvinceNew', {
        hideElement: 'AddressProvinceContainerNew',
      });
      this.elements.countrySelects.forEach((select) => {
        const formId = select.dataset.formId;
        // eslint-disable-next-line no-new
        new Shopify.CountryProvinceSelector(`AddressCountry_${formId}`, `AddressProvince_${formId}`, {
          hideElement: `AddressProvinceContainer_${formId}`,
        });
      });
    }
  }

  /**
   * Set up event listeners for actionable address elements.
   * @private
   */
  _setupEventListeners() {
    this.elements.toggleButtons.forEach((element) => {
      element.addEventListener('click', this._handleAddEditButtonClick);
    });
    this.elements.cancelButtons.forEach((element) => {
      element.addEventListener('click', this._handleCancelButtonClick);
    });
    this.elements.deleteButtons.forEach((element) => {
      element.addEventListener('click', this._handleDeleteButtonClick);
    });
  }

  /**
   * Toggle address container expanded state.
   * @param {HTMLElement} target - The target element to toggle expanded state.
   * @private
   */
  _toggleExpanded(target) {
    target.setAttribute(attributes.expanded, (target.getAttribute(attributes.expanded) === 'false').toString());
  }

  /**
   * Handle add/edit button click event. Expand the address container.
   * @param {Event} event - The click event object.
   * @private
   */
  _handleAddEditButtonClick = ({ currentTarget }) => {
    this._toggleExpanded(currentTarget);
  };

  /**
   * Handle cancel button click event. Close the address container.
   * @param {Event} event - The click event object.
   * @private
   */
  _handleCancelButtonClick = ({ currentTarget }) => {
    this._toggleExpanded(currentTarget.closest(selectors.addressContainer).querySelector(`[${attributes.expanded}]`));
  };

  /**
   * Handle delete button click event. Confirm before submitting the deletion form.
   * @param {Event} event - The click event object.
   * @private
   */
  _handleDeleteButtonClick = ({ currentTarget }) => {
    // eslint-disable-next-line no-alert
    if (confirm(currentTarget.getAttribute(attributes.confirmMessage))) {
      Shopify.postLink(currentTarget.dataset.target, {
        parameters: { _method: 'delete' },
      });
    }
  };
}
