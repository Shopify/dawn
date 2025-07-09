import { Component } from '@theme/component';
import { isClickedOutside, normalizeString, onAnimationEnd } from '@theme/utilities';

/**
 * A custom element that displays a localization form.
 *
 * @typedef {object} FormRefs
 * @property {HTMLDivElement} countryList - The country list element.
 * @property {HTMLInputElement} countryInput - The country input element.
 * @property {HTMLUListElement[]} countryListItems - The country list items element.
 * @property {HTMLFormElement} form - The form element.
 * @property {HTMLDivElement} liveRegion - The live region element.
 * @property {HTMLSelectElement} languageInput - The language input element.
 * @property {HTMLSpanElement} noResultsMessage - The no results message element.
 * @property {HTMLUListElement} popularCountries - The popular countries element.
 * @property {HTMLInputElement} search - The search input element.
 * @property {HTMLButtonElement} resetButton - The reset button element.
 *
 * @extends {Component<FormRefs>}
 */
class LocalizationFormComponent extends Component {
  connectedCallback() {
    super.connectedCallback();

    this.refs.search && this.refs.search.addEventListener('keydown', this.#onSearchKeyDown);
    this.refs.countryList && this.refs.countryList.addEventListener('keydown', this.#onContainerKeyDown);
    this.refs.countryList && this.refs.countryList.addEventListener('scroll', this.#onCountryListScroll);

    this.resizeLanguageInput();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.refs.search && this.refs.search.removeEventListener('keydown', this.#onSearchKeyDown);
    this.refs.countryList && this.refs.countryList.removeEventListener('keydown', this.#onContainerKeyDown);
    this.refs.countryList && this.refs.countryList.removeEventListener('scroll', this.#onCountryListScroll);
  }

  /**
   * Handles the keydown event for the container.
   *
   * @param {KeyboardEvent} event - The event object.
   */
  #onContainerKeyDown = (event) => {
    const { countryInput, countryListItems, form } = this.refs;

    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault();
        event.stopPropagation();
        this.#changeCountryFocus('UP');
        break;
      case 'ArrowDown':
        event.preventDefault();
        event.stopPropagation();
        this.#changeCountryFocus('DOWN');
        break;
      case 'Enter':
        event.preventDefault();
        event.stopPropagation();
        const focusedItem = countryListItems.find((item) => item.getAttribute('aria-selected') === 'true');

        if (focusedItem) {
          countryInput.value = focusedItem.dataset.value ?? '';
          form.submit();
        }
        break;
    }

    if (!this.refs.search) return;

    setTimeout(() => {
      const focusableItems = this.refs.countryListItems.filter((item) => !item.hasAttribute('hidden'));
      const focusedItemIndex = focusableItems.findIndex((item) => item === document.activeElement);
      const focusedItem = focusableItems[focusedItemIndex];

      if (focusedItem) {
        this.refs.search.setAttribute('aria-activedescendant', focusedItem.id);
      } else {
        this.refs.search.setAttribute('aria-activedescendant', '');
      }
    });
  };

  /**
   * Selects a country.
   *
   * @param {string} countryName - The name of the country to select.
   * @param {Event} event - The event object.
   */
  selectCountry = (countryName, event) => {
    event.preventDefault();
    const { countryInput, form } = this.refs;

    countryInput.value = countryName;
    form?.submit();
  };

  /**
   * Changes the language of the localization form.
   *
   * @param {Event} event - The event object.
   */
  changeLanguage(event) {
    const { form, languageInput } = this.refs;
    const value = event.target instanceof HTMLSelectElement ? event.target.value : null;

    if (value) {
      languageInput.value = value;
      this.resizeLanguageInput();
      form.submit();
    }
  }

  resizeLanguageInput() {
    const { languageInput } = this.refs;

    if (!languageInput) return;

    // Hide all options except the selected option
    for (const option of languageInput.options) {
      if (!option.selected) {
        option.dataset.optionLabel = option.textContent || '';
        option.innerText = '';
      }
    }

    // Calculate the width of the select element (which is based on the width of the widest option)
    languageInput.style.width = 'fit-content';
    const originalElementWidth = `${Math.ceil(languageInput.offsetWidth) + 1}px`;

    // Fix the width of the select element
    if (languageInput.offsetWidth > 0) {
      languageInput.style.width = originalElementWidth;
    }

    // Add back all option labels
    for (const option of languageInput.options) {
      if (option.dataset.optionLabel) {
        option.textContent = option.dataset.optionLabel;
        delete option.dataset.optionLabel;
      }
    }
  }

  /**
   * Finds matches for a given search value in a country element.
   *
   * @typedef {Object} Options
   * @property {boolean} [matchLabel] - Whether to match the label.
   * @property {boolean} [matchAlias] - Whether to match the alias.
   * @property {boolean} [matchIso] - Whether to match the iso.
   * @property {boolean} [matchCurrency] - Whether to match the currency.
   * @property {boolean} [labelMatchStart] - Whether to match the label start.
   * @property {boolean} [aliasExactMatch] - Whether to match the alias exact match.
   *
   * @typedef {Object} MatchTypes
   * @property {boolean} [label] - Whether the label matches the search value.
   * @property {boolean} [alias] - Whether the alias matches the search value.
   * @property {boolean} [iso] - Whether the iso matches the search value.
   * @property {boolean} [currency] - Whether the currency matches the search value.
   *
   * @param {string} searchValue - The search value to find matches for.
   * @param {HTMLElement} countryEl - The country element to find matches in.
   * @param {Options} options - The options for the search.
   * @returns {MatchTypes} The matches found in the country element.
   */
  #findMatches(
    searchValue,
    countryEl,
    options = {
      // Which data types (label, alias, iso) to match against
      matchLabel: true,
      matchAlias: true,
      matchIso: true,
      matchCurrency: true,
      // If true, the search value must match the start of the label
      labelMatchStart: false,
      // If true, a result will not display unless the search value equals an alias in its entirety
      aliasExactMatch: false,
    }
  ) {
    let matchTypes = {};
    const { aliases, value: iso } = countryEl.dataset;

    if (options.matchLabel) {
      const countryName = normalizeString(countryEl.querySelector('.country')?.textContent ?? '');

      if (!countryName) return matchTypes;

      matchTypes.label = options.labelMatchStart
        ? countryName.startsWith(searchValue)
        : countryName.includes(searchValue);
    }

    if (options.matchCurrency) {
      const currency = normalizeString(countryEl.querySelector('.localization-form__currency')?.textContent ?? '');
      matchTypes.currency = currency.includes(searchValue);
    }

    if (options.matchIso) {
      matchTypes.iso = normalizeString(iso ?? '') == searchValue;
    }

    if (options.matchAlias) {
      const countryAliases = aliases?.split(',').map((alias) => normalizeString(alias));

      if (!countryAliases) return matchTypes;

      matchTypes.alias =
        countryAliases.length > 0 &&
        countryAliases.find((alias) =>
          options.aliasExactMatch ? alias === searchValue : alias.startsWith(searchValue)
        ) !== undefined;
    }

    return matchTypes;
  }

  /**
   * Highlights matching text in a string by wrapping it in <mark> tags.
   *
   * @param {string | null} text - The text to highlight.
   * @param {string} searchValue - The search value to highlight.
   * @returns {string} The text with matching parts wrapped in <mark> tags.
   */
  #highlightMatches(text, searchValue) {
    if (!text || !searchValue) return text ?? '';

    const normalizedText = normalizeString(text);
    const normalizedSearch = normalizeString(searchValue);
    const startIndex = normalizedText.indexOf(normalizedSearch);

    if (startIndex === -1) return text;

    const endIndex = startIndex + normalizedSearch.length;
    const before = text.slice(0, startIndex);
    const match = text.slice(startIndex, endIndex);
    const after = text.slice(endIndex);

    let result = '';
    if (before) {
      result += `<mark>${before}</mark>`;
    }
    result += match;
    if (after) {
      result += `<mark>${after}</mark>`;
    }
    return result;
  }

  /**
   * Filters the countries based on the search value.
   */
  filterCountries() {
    const { countryList, countryListItems, liveRegion, noResultsMessage, popularCountries, resetButton, search } =
      this.refs;
    const { labelResultsCount } = this.dataset;
    const searchValue = normalizeString(search.value);
    let countVisibleCountries = 0;

    resetButton.toggleAttribute('hidden', !searchValue);

    if (popularCountries) {
      popularCountries.toggleAttribute('hidden', Boolean(searchValue));
    }

    const wrapper = this.querySelector('.country-selector-form__wrapper');
    if (wrapper) {
      wrapper.classList.toggle('is-searching', !!searchValue);
    }

    for (const countryEl of countryListItems) {
      if (searchValue === '') {
        countryEl.removeAttribute('hidden');
        const countrySpan = countryEl.querySelector('.country');
        if (countrySpan) {
          countrySpan.textContent = countrySpan.textContent;
        }
        countVisibleCountries++;
      } else {
        const matches = this.#findMatches(searchValue, countryEl);

        // In the future, we could reorder/rank filtered results based on the match types
        if (matches.label || matches.alias || matches.iso || matches.currency) {
          countryEl.removeAttribute('hidden');
          const countrySpan = countryEl.querySelector('.country');
          if (countrySpan) {
            countrySpan.innerHTML = this.#highlightMatches(countrySpan.textContent, searchValue);
          }
          countVisibleCountries++;
        } else {
          countryEl.setAttribute('hidden', '');
        }
      }
    }

    if (liveRegion && labelResultsCount) {
      liveRegion.innerText = labelResultsCount.replace('[count]', `${countVisibleCountries}`);
    }

    noResultsMessage.hidden = countVisibleCountries > 0;
    countryList.scrollTop = 0;
  }

  /**
   * Changes the focus of the country list items.
   *
   * @param {string} direction - The direction to change the focus.
   */
  #changeCountryFocus(direction) {
    const { countryListItems } = this.refs;
    const focusableItems = countryListItems.filter((item) => !item.hasAttribute('hidden'));
    const focusedItemIndex = focusableItems.findIndex((item) => item === document.activeElement);
    const focusedItem = focusableItems[focusedItemIndex];
    let itemToFocus;

    if (direction === 'UP') {
      itemToFocus =
        focusedItemIndex > 0 ? focusableItems[focusedItemIndex - 1] : focusableItems[focusableItems.length - 1];
    } else {
      itemToFocus =
        focusedItemIndex < focusableItems.length - 1 ? focusableItems[focusedItemIndex + 1] : focusableItems[0];
    }

    if (focusedItem) {
      focusedItem.setAttribute('aria-selected', 'false');
    }
    itemToFocus?.setAttribute('aria-selected', 'true');
    itemToFocus?.focus();
  }

  /**
   * Resets the countries filter.
   *
   * @param {Event} event - The event object.
   */
  resetCountriesFilter(event) {
    const { search } = this.refs;

    event.stopPropagation();
    search.value = '';
    this.filterCountries();
    search.setAttribute('aria-activedescendant', '');
    search.focus();
  }

  /**
   * Handles the keydown event for the search input.
   *
   * @param {KeyboardEvent} event - The event object.
   */
  #onSearchKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.#onContainerKeyDown(event);
  };

  /**
   * Resets the form.
   */
  resetForm() {
    const { search } = this.refs;

    if (!search) return;

    if (search.value != '') {
      search.value = '';
      this.filterCountries();
      search.setAttribute('aria-activedescendant', '');
    }
  }

  /**
   * Focuses the search input.
   */
  focusSearchInput = () => {
    const { search } = this.refs;

    search?.focus();
  };

  /**
   * Handles the scroll event on the country list.
   *
   * @param {Event} event - The scroll event object.
   */
  #onCountryListScroll = (event) => {
    const countryFilter = this.querySelector('.country-filter');
    const countryList = event.target instanceof HTMLElement ? event.target : null;

    if (countryFilter && countryList) {
      const shouldShowBorder = countryList.scrollTop > 0;
      countryFilter.classList.toggle('is-scrolled', shouldShowBorder);
    }
  };
}

/**
 * A custom element that displays a dropdown localization form.
 *
 * @typedef {object} DropdownRefs
 * @property {HTMLButtonElement} button - The button element.
 * @property {HTMLDivElement} panel - The panel element.
 * @property {LocalizationFormComponent} localizationForm - The localization form component.
 *
 * @extends {Component<DropdownRefs>}
 */
class DropdownLocalizationComponent extends Component {
  get isHidden() {
    return this.refs.panel.hasAttribute('hidden');
  }

  /**
   * Toggles the panel.
   */
  toggleSelector() {
    return this.isHidden ? this.showPanel() : this.hidePanel();
  }

  /**
   * Shows the panel.
   */
  showPanel() {
    if (!this.isHidden) return;

    this.addEventListener('keyup', this.#handleKeyUp);
    document.addEventListener('click', this.#handleClickOutside);

    this.refs.panel.removeAttribute('hidden');
    this.refs.button.setAttribute('aria-expanded', 'true');

    onAnimationEnd(this.refs.panel, () => {
      this.#updateWidth();
      this.refs.localizationForm?.focusSearchInput();
    });
  }

  /**
   * Hides the panel.
   */
  hidePanel = () => {
    if (this.isHidden) return;

    this.removeEventListener('keyup', this.#handleKeyUp);
    document.removeEventListener('click', this.#handleClickOutside);

    this.refs.button?.setAttribute('aria-expanded', 'false');
    this.refs.panel.setAttribute('hidden', '');
    this.refs.localizationForm?.resetForm();
  };

  /**
   * Handles the click outside event.
   *
   * @param {PointerEvent} event - The event object.
   */
  #handleClickOutside = (event) => {
    if (isClickedOutside(event, this)) {
      this.hidePanel();
    }
  };

  /**
   * Updates the width of the panel.
   */
  #updateWidth() {
    this.style.setProperty('--width', `${this.refs.localizationForm.offsetWidth}px`);
  }

  /**
   * Handles the keyup event.
   *
   * @param {KeyboardEvent} event - The event object.
   */
  #handleKeyUp = (event) => {
    switch (event.key) {
      case 'Escape':
        this.hidePanel();
        event.stopPropagation();
        this.refs.button?.focus();
        break;
    }
  };
}

/**
 * A custom element that displays a drawer localization form.
 *
 * @typedef {object} DrawerRefs
 * @property {HTMLDialogElement} dialog - The dialog element.
 * @property {LocalizationFormComponent} localizationForm - The localization form component.
 *
 * @extends {Component<DrawerRefs>}
 */
class DrawerLocalizationComponent extends Component {
  /**
   * Toggles the dialog.
   *
   * @param {ToggleEvent} event - The event object.
   */
  toggle(event) {
    const { target } = event;
    const { localizationForm } = this.refs;

    if (!localizationForm || !(target instanceof HTMLDetailsElement)) return;

    const countryList = localizationForm.querySelector('.country-selector-form__wrapper');

    if (target.open) {
      if (countryList) countryList.addEventListener('scroll', this.#onCountryListScroll);
      onAnimationEnd(target, localizationForm.focusSearchInput);
    } else {
      countryList?.removeEventListener('scroll', this.#onCountryListScroll);
      localizationForm.resetForm();
    }
  }

  /**
   * Handles the scroll event on the country list.
   *
   * @param {Event} event - The scroll event object.
   */
  #onCountryListScroll = (event) => {
    const countryFilter = this.querySelector('.country-filter');
    const countryList = event.target instanceof HTMLElement ? event.target : null;

    if (countryFilter && countryList) {
      const shouldShowBorder = countryList.scrollTop > 0;
      countryFilter.classList.toggle('is-scrolled', shouldShowBorder);
    }
  };
}

if (!customElements.get('localization-form-component')) {
  customElements.define('localization-form-component', LocalizationFormComponent);
}

if (!customElements.get('dropdown-localization-component')) {
  customElements.define('dropdown-localization-component', DropdownLocalizationComponent);
}

if (!customElements.get('drawer-localization-component')) {
  customElements.define('drawer-localization-component', DrawerLocalizationComponent);
}
