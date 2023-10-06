class MainSearch extends SearchForm {
  constructor() {
    super();
    this.allSearchInputs = document.querySelectorAll('input[type="search"]');
    this.setupEventListeners();
    this.results = document.querySelector('.results')
    this.results.addEventListener('click', this.search.bind(this))
  }

  setupEventListeners() {
    let allSearchForms = [];
    this.allSearchInputs.forEach((input) => allSearchForms.push(input.form));
    this.input.addEventListener('focus', this.onInputFocus.bind(this));
    if (allSearchForms.length < 2) return;
    allSearchForms.forEach((form) => form.addEventListener('reset', this.onFormReset.bind(this)));
    this.allSearchInputs.forEach((input) => input.addEventListener('input', this.onInput.bind(this)));
  }

  search(e) {
    e.preventDefault();

    const token = '31851dc50956aba8405de63d812de188'
    const shopName = document.querySelector('.shop-name').dataset.name


    fetch(`https://${shopName}/api/2023-07/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token,
      },
      body: JSON.stringify({
        query: `
          query searchAll($query: String!, $first: Int) {
            search(query: $query, first: $first, types: [PRODUCT]) {
              edges {
                node {
                  ... on Product {
                    id
                    title
                  }
                }
              }
            }
          }
        `,
        variables: {
          query: "puppy very smol",
          first: 10,
          after: prefix
        },
      }),
    })
      .then((response) => response.json())
      .then((response) => {

        console.log(response, 'hehe)')
        // return response.text();
        // return response.json();
      })


    // const config = fetchConfig('javascript');
    // config.headers = {
    //   'X-Shopify-Storefront-Access-Token': token,
    //   'Content-Type': 'application/json',
    // };
    // config.body = formData;

    console.log('hey')

    console.log(shopName, 'heheh')


    // fetch(`https://${shopName}/api/2023-07/graphql.json`, config).then((response) => response.text())
    //   .then((responseText) => {
    //     console.log(responseText, 'hehe')
    //   }
    //   )
  }

  onFormReset(event) {
    super.onFormReset(event);
    if (super.shouldResetForm()) {
      this.keepInSync('', this.input);
    }
  }

  onInput(event) {
    const target = event.target;
    this.keepInSync(target.value, target);
  }

  onInputFocus() {
    const isSmallScreen = window.innerWidth < 750;
    if (isSmallScreen) {
      this.scrollIntoView({ behavior: 'smooth' });
    }
  }

  keepInSync(value, target) {
    this.allSearchInputs.forEach((input) => {
      if (input !== target) {
        input.value = value;
      }
    });
  }


  getSectionsToRender() {
    return [
      {
        id: 'quick-order-form',
        section: document.getElementById('quick-order-form').dataset.id,
        selector: '#quick-order-form',
      },
    ];
  }
}

customElements.define('main-search', MainSearch);
