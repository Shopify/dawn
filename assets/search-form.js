class SearchForm extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('input[type="search"]');

    this.setupEventListeners();
  }
  setupEventListeners() {
    const form = this.querySelector('form.search');
    form.addEventListener('reset', this.onFormReset.bind(this));
  }

  onFormReset(event) {
    // Prevent default so the form reset doesn't set the value gotten from the url on page load
    event.preventDefault();
    // Don't reset if the user has selected an element on the predictive search dropdown
    if (!document.querySelector('a[aria-selected="true"')) {
      this.input.value = '';
    }
  }
}

customElements.define('search-form', SearchForm);