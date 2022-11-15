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
    this.input.addEventListener("focus", this.onInputFocus.bind(this));
  }

  onInput (event) {
    this.keepInSync(event.target)
  }

  onInputFocus () {
    const isSmallScreen = window.innerWidth < 750
    if (isSmallScreen) {
      this.scrollIntoView({behavior: "smooth"})
    }
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