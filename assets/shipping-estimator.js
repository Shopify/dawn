var CountrySelector = class extends HTMLElement {
  constructor() {
    super();
    this.onCountryChangedListener = this.onCountryChanged.bind(this);
  }
  connectedCallback() {
    this.countryElement = this.querySelector('[name="address[country]"]');
    this.provinceElement = this.querySelector('[name="address[province]"]');
    this.countryElement.addEventListener('change', this.onCountryChangedListener);
    if (this.hasAttribute('country') && this.getAttribute('country') !== '') {
      this.countryElement.selectedIndex = Math.max(
        0,
        Array.from(this.countryElement.options).findIndex(
          (option) => option.textContent === this.getAttribute('country')
        )
      );
      this.countryElement.dispatchEvent(new Event('change'));
    } else {
      this.onCountryChanged();
    }
  }
  disconnectedCallback() {
    this.countryElement.removeEventListener('change', this.onCountryChangedListener);
  }
  onCountryChanged() {
    const option = this.countryElement.options[this.countryElement.selectedIndex],
      provinces = JSON.parse(option.getAttribute('data-provinces'));
    this.provinceElement.parentElement.hidden = provinces.length === 0;
    if (provinces.length === 0) {
      return;
    }
    this.provinceElement.innerHTML = '';
    provinces.forEach((data) => {
      const selected = data[1] === this.getAttribute('province');
      this.provinceElement.options.add(new Option(data[1], data[0], selected, selected));
    });
  }
};
if (!window.customElements.get('country-selector')) {
  window.customElements.define('country-selector', CountrySelector);
}

var ShippingEstimator = class extends HTMLElement {
  constructor() {
    super();
    this.estimateShippingListener = this.estimateShipping.bind(this);
  }
  connectedCallback() {
    this.submitButton = this.querySelector('[type="submit"]');
    this.resultsElement = this.lastElementChild;
    this.submitButton.addEventListener('click', this.estimateShippingListener);
  }
  disconnectedCallback() {
    this.submitButton.removeEventListener('click', this.estimateShippingListener);
  }
  /**
   * @doc https://shopify.dev/docs/themes/ajax-api/reference/cart#generate-shipping-rates
   */
  async estimateShipping(event) {
    event.preventDefault();
    const zip = this.querySelector('[name="address[zip]"]').value,
      country = this.querySelector('[name="address[country]"]').value,
      province = this.querySelector('[name="address[province]"]').value;
    this.submitButton.setAttribute('aria-busy', 'true');
    const prepareResponse = await fetch(
      `${Shopify.routes.root}cart/prepare_shipping_rates.json?shipping_address[zip]=${zip}&shipping_address[country]=${country}&shipping_address[province]=${province}`,
      { method: 'POST' }
    );
    if (prepareResponse.ok) {
      const shippingRates = await this.getAsyncShippingRates(zip, country, province);
      this.formatShippingRates(shippingRates);
    } else {
      const jsonError = await prepareResponse.json();
      this.formatError(jsonError);
    }
    this.resultsElement.hidden = false;
    this.submitButton.removeAttribute('aria-busy');
  }
  async getAsyncShippingRates(zip, country, province) {
    try {
      const response = await fetch(
        `${Shopify.routes.root}cart/async_shipping_rates.json?shipping_address[zip]=${zip}&shipping_address[country]=${country}&shipping_address[province]=${province}`
      );
      const responseAsText = await response.text();
      if (responseAsText === 'null') {
        return this.getAsyncShippingRates(zip, country, province);
      } else {
        return JSON.parse(responseAsText)['shipping_rates'];
      }
    } catch (error) {
      console.error(`${window.shippingEstimator.error}:`, error);
      throw error;
    }
  }
  formatShippingRates(shippingRates) {
    let formattedShippingRates = shippingRates.map((shippingRate) => {
      console.log(shippingRate);
      let shippingPrice =
        shippingRate['price'] > 0
          ? shippingRate['currency'] + ' ' + shippingRate['price']
          : window.shippingEstimator.free;
      return `<li>${shippingRate['presentment_name']}:  ${shippingPrice}</li>`;
    });
    this.resultsElement.innerHTML = `
      <div class="v-stack gap-2">
        <p>${
          shippingRates.length === 0
            ? window.shippingEstimator.noResults
            : shippingRates.length === 1
            ? window.shippingEstimator.oneResult
            : window.shippingEstimator.multipleResults
        }</p>
        ${
          formattedShippingRates === ''
            ? ''
            : `<ul class="list-disc" role="list">${formattedShippingRates.join('')}</ul>`
        }
      </div>
    `;
  }
  formatError(errors) {
    let formattedShippingRates = Object.keys(errors).map((errorKey) => {
      return `<li>${errors[errorKey]}</li>`;
    });
    this.resultsElement.innerHTML = `
      <div class="v-stack gap-2">
        <p>${window.shippingEstimator.error}</p>
        <ul class="list-disc" role="list">${formattedShippingRates}</ul>
      </div>
    `;
  }
};
if (!window.customElements.get('shipping-estimator')) {
  window.customElements.define('shipping-estimator', ShippingEstimator);
}
