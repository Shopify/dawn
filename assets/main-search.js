/**
 * Main search page form custom element class.
 * @extends SearchForm
 */
class MainSearch extends SearchForm {
  constructor() {
    super();
    /** @type {NodeListOf<HTMLInputElement>} */
    this.allSearchInputs = document.querySelectorAll('input[type="search"]');
    this.setupEventListeners();
  }

  /**
   * Set up and bind events for search inputs.
   */
  setupEventListeners() {
    /** @type {Array<HTMLInputElement>} */
    let allSearchForms = [];
    this.allSearchInputs.forEach((input) => allSearchForms.push(input.form));
    this.input.addEventListener('focus', this.onInputFocus.bind(this));
    if (allSearchForms.length < 2) return;
    allSearchForms.forEach((form) => form.addEventListener('reset', this.onFormReset.bind(this)));
    this.allSearchInputs.forEach((input) => input.addEventListener('input', this.onInput.bind(this)));
  }

  /**
   * Handle form reset event. Reset all search inputs.
   * @param {Event} event - Reset event object.
   */
  onFormReset(event) {
    super.onFormReset(event);
    if (super.shouldResetForm()) {
      this.keepInSync('', this.input);
    }
  }

  /**
   * Handle input change event. Sync all search input values.
   * @param {InputEvent} event - Input event object
   */
  onInput(event) {
    const target = event.target;
    this.keepInSync(target.value, target);
  }

  /**
   * Handle input focus event. Scroll into view on mobile.
   */
  onInputFocus() {
    const isSmallScreen = window.innerWidth < 750;
    if (isSmallScreen) {
      this.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /**
   * Sync all search input values.
   * @param {string} value - Value to sync across inputs.
   * @param {HTMLInputElement} target - Excluded input element from syncing.
   */
  keepInSync(value, target) {
    this.allSearchInputs.forEach((input) => {
      if (input !== target) {
        input.value = value;
      }
    });
  }
}

customElements.define('main-search', MainSearch);
