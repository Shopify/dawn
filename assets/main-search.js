class MainSearch extends HTMLElement {
  constructor() {
    super();
    this.allSearchInputs = document.querySelectorAll('input[type="search"]')
    this.input = this.querySelector('input[type="search"]')

    this.setupEventListeners();
  }

  setupEventListeners() {
    if (this.allSearchInputs.length > 1) {
      this.allSearchInputs.forEach(input => input.addEventListener('input', this.onInput.bind(this)))
    }
  }

  onInput (event) {
    this.keepInSync(event.target)
  }

  keepInSync (target) {
    this.allSearchInputs.forEach(input => {
      if (input !== target) {
        input.value = target.value
      }
    })
  }
}

customElements.define('main-search', MainSearch);