class QuickOrderForm extends SearchForm {
  constructor() {
    super();

    // Initialize properties
    this.quickOrderList = this.closest('quick-order-list');
    this.quickOrderListId = this.quickOrderList.dataset.id;

    // Initialize global variables that can be read by quick order list
    window.quickOrderSearchEnabled = true;
    const searchParams = new URLSearchParams(window.location.search);
    window.quickOrderSearchQuery = decodeURIComponent(searchParams.get('q') || '');
    window.quickOrderSearchPage = decodeURIComponent(searchParams.get('page') || '');

    // Set initial input value and update sections if the page is loaded with search params
    if (window.quickOrderSearchQuery || window.quickOrderSearchPage) {
      this.input.value = window.quickOrderSearchQuery;
      this.updateSections();
      this.input.focus();
    }

    // Bind and attach event listeners
    this.attachQuickOrderSearchFormPaginationHandlers = this.attachQuickOrderSearchFormPaginationHandlers.bind(this);
    this.attachQuickOrderSearchFormPaginationHandlers();

    // Add the bound function to the window object
    window.attachQuickOrderSearchFormPaginationHandlers = this.attachQuickOrderSearchFormPaginationHandlers;

    this.sectionsToRender = [
      {
        id: this.quickOrderListId,
        section: this.quickOrderListId,
        selector: '.js-contents',
      },
      {
        id: this.quickOrderListId,
        section: this.quickOrderListId,
        selector: '.total-items',
      },
    ];
  }

  // Event handlers

  onChange() {
    super.onChange();
    window.quickOrderSearchQuery = this.getQuery();
    window.quickOrderSearchPage = '';
    this.updateSections();
  }

  onFormReset(event) {
    if (super.shouldResetForm()) {
      window.quickOrderSearchQuery = '';
      window.quickOrderSearchPage = '';
    }
    super.onFormReset(event);
    this.updateSections();
  }

  handlePaginationClick(event) {
    event.preventDefault();
    const button = event.currentTarget;
    const paginateURL = new URL(button.dataset.paginateUrl, window.location.origin);
    window.quickOrderSearchPage = paginateURL.searchParams.get('page');
    this.updateSections();
    setTimeout(() => window.scrollTo(0, 0));
  }

  // Attaching event listeners to pagination buttons
  // We need to attach the event listeners when the element is mounted
  // and re-attach whenever we re-render from section rendering API

  attachQuickOrderSearchFormPaginationHandlers() {
    const paginationButtons = Array.from(document.querySelectorAll('button[data-paginate-url]'));
    paginationButtons.forEach((button) => {
      button.addEventListener('click', this.handlePaginationClick.bind(this));
    });
  }

  // Updating and rendering sections

  updateSections() {
    console.log(this.getSectionsUrl());
    fetch(this.getSectionsUrl())
      .then((response) => response.text())
      .then((responseText) => {
        const parsedSections = JSON.parse(responseText);
        this.renderSections(parsedSections);
      })
      .finally(() => {
        // We need to re-attach the event listeners whenever we re-render from section rendering API
        this.attachQuickOrderSearchFormPaginationHandlers();
      });
  }

  renderSections(parsedSections) {
    this.quickOrderList.renderSections(
      {
        sections: parsedSections,
      },
      this.sectionsToRender
    );
  }

  // Utility methods

  getSectionsUrl() {
    console.log(window.quickOrderSearchPage);
    const sectionsParam = encodeURIComponent(this.sectionsToRender.map((section) => section.section).join(','));

    return `/search?q=${encodeURIComponent(window.quickOrderSearchQuery)}&page=${encodeURIComponent(
      window.quickOrderSearchPage
    )}&sections=${sectionsParam}`;
  }

  getQuery() {
    return this.input.value.trim();
  }
}

customElements.define('quick-order-form', QuickOrderForm);
