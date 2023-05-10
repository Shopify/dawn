(function () {
  // Default values
  let shopCurrencyActive = Shopify.currency.active;
  let shopCurrency;
  let shopThreshold;

  const shippingThresholdElement = document.querySelector("#shipping-thresholds");
  if (shippingThresholdElement) {

    // Get threshold object
    const shippingThresholdObject = JSON.parse(shippingThresholdElement.innerHTML);

    // Select default
    shopCurrency = shippingThresholdObject.default.currency;
    shopThreshold = shippingThresholdObject.default.threshold;

    // Select current
    if (shippingThresholdObject[shopCurrencyActive]) {
      shopCurrency = shippingThresholdObject[shopCurrencyActive].currency;
      shopThreshold = Number.parseInt(shippingThresholdObject[shopCurrencyActive].threshold);
    }

    // Get freeshipping text
    let freeShippingText = document.querySelectorAll('.js-freeshipping-text');

    // Updatefreeshipping text
    freeShippingText.forEach((item) => {
      item.querySelector('.js-freeshipping-currency').innerHTML = shopCurrency;
      item.querySelector('.js-freeshipping-threshold').innerHTML = shopThreshold;
    });

    // when cartBubbleButton is clicked, change rebuyCartMessage with jsFreeShippingText
    let cartBubbleButton = document.getElementById('cart-icon-bubble');
    cartBubbleButton.addEventListener('click', function () {
      let rebuyCartMessage = document.querySelector('.rebuy-cart__flyout-announcement-bar-message');
      let jsFreeShippingText = document.querySelector('.js-freeshipping-text');
      rebuyCartMessage.innerHTML = jsFreeShippingText.innerHTML;
    });
  }
})()
