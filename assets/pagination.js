class Paginate extends HTMLElement {
  constructor() {
    super();

    this.paginationContainer = this.querySelector('.pagination-wrapper');
    this.itemsPerPage = parseInt(this.paginationContainer.getAttribute('data-per-page'));
    this.loadMoreBtn = this.querySelector('.load-more');
    this.loadMoreSpinner = this.querySelector('.load-more-spinner');

    this.nextUrl = this.paginationContainer.getAttribute('data-next-url');

    this.count_span = this.querySelector('#item_count');
    this.total_count_span = this.querySelector('#total_item_count');

    this.loadMoreBtn?.addEventListener('click', this.loadNextPage.bind(this));

    this.totalItemsDisplayed = 0;

    this.renderItemsCount();
  }

  renderItemsCount() {
    this.totalItemsDisplayed += this.itemsPerPage;

    const total_count = parseInt(this.total_count_span.textContent);

    if (this.totalItemsDisplayed > total_count || this.itemsPerPage > total_count) {
      this.totalItemsDisplayed = total_count;
    }

    this.count_span.textContent = this.totalItemsDisplayed;
  }

  toggleLoading(force) {
    this.loadMoreBtn.classList.toggle('hidden', force);
    this.loadMoreSpinner.classList.toggle('hidden', force);
  }

  loadNextPage(e) {
    this.toggleLoading();
    this.renderNextPage(this.nextUrl);
  }

  renderNextPage(url) {
    fetch(url)
      .then((resp) => resp.text())
      .then((text) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');

        const newProducts = doc.querySelector('.pagination-wrapper');

        const newUrl = newProducts.getAttribute('data-next-url');

        this.paginationContainer.innerHTML += newProducts.innerHTML;
        this.nextUrl = newUrl;

        this.renderItemsCount();
      })
      .catch((err) => console.error(err))
      .finally(() => {
        this.toggleLoading();
      });
  }
}

customElements.define('pagination-block', Paginate);
