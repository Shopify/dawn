class QuickOrderForm extends HTMLElement {
  constructor() {
    super();
    this.viewMoreButton = document.getElementById('view-more-button');
    // this.viewMoreStatus = document.querySelector('[data-view-more-status]');
    this.events = {
      success: 'viewmore_loaded',
    };

    if (!this.viewMoreButton) return;

    this.maxCount = parseInt(this.viewMoreButton.dataset.viewMoreMax, 10);
    this.countPerPage = parseInt(this.viewMoreButton.dataset.viewMoreStep, 10);
    this.currentCount = parseInt(
      this.viewMoreButton.dataset.viewMoreCurrent,
      10
    );
    this.isLoading = false;
    this._setupEventHandlers();
  }

  _getEventHandlers() {
    return {
      onClickViewMoreHandler: this._loadItems.bind(this),
    };
  }

  _setupEventHandlers() {
    this.eventHandlers = this._getEventHandlers();
    this.viewMoreButton.addEventListener(
      'click',
      this.eventHandlers.onClickViewMoreHandler
    );
  }

  _getNextPage() {
    console.log(this.currentCount, this.countPerPage, '---')
    const nextPage = Math.floor(this.currentCount / this.countPerPage) + 1;
    const url = this.viewMoreButton.dataset.viewMoreNext.replace(
      '[pagination]',
      nextPage
    );
    console.log(url, 'hey jey')
    return url;
  }

  _fireEvent(eventName, data) {
    this.dispatchEvent(
      new window.CustomEvent(eventName, {
        detail: data,
      })
    );
  }

  _loadItems() {
    if (this.isLoading || this.currentCount >= this.maxCount) return;
    const url = this._getNextPage();
    this.isLoading = true;
    this._toggleLoadingState(true)
    fetch(url)
      .then((response) => response.text())
      .then((text) => {
        const parser = new DOMParser();
        return parser.parseFromString(text, 'text/html');
      })
      .then((html) => {
        console.log('hey', html)
        const items = [...html.querySelectorAll('quick-order-form .variant-item')];
        if (this.currentCount < this.countPerPage) {
          items.splice(0, this.currentCount);
        }

        this.isLoading = false;
        this._toggleLoadingState(false)
        this.currentCount += items.length;
        this._updateButton();
        this._updateLiveRegion();
        this._updateProducts(items);
        this._fireEvent(this.events.success, { items });
      })
      .catch((error) => {
        this.isLoading = false;
        throw new Error(error);
      });
  }

  _toggleLoadingState(shouldDisableButton) {
    this.querySelector("#view-more-button .loading-overlay__spinner").classList.toggle('hidden');
    const loadMoreButton = this.querySelector("#view-more-button");
    loadMoreButton.setAttribute('aria-disabled', shouldDisableButton);
    loadMoreButton.classList.toggle('loading');
  }

  _updateProducts(items) {
    this.currentList = document.getElementById("quick-order-form");
    this.form = this.currentList.querySelector("tbody");
    items.forEach((item) => {
      this.form.innerHTML = this.form.innerHTML + item.outerHTML
    })
  }

  _updateButton() {
    this.viewMoreButton.dataset.viewMoreCurrent = this.currentCount;

    if (this.currentCount >= this.maxCount) {
      this.viewMoreButton.classList.add('hidden');
    }
  }

}

customElements.define('quick-order-form', QuickOrderForm);