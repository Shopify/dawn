class ShippingBar {
  initFreeShippingBar() {
    let shippingBar = document.getElementById('drawer-free-shipping-bar');
    this.updateShippingBar(shippingBar);
  }

  async updateShippingBar(shippingBar) {

    let cartTotal = await this.getCartTotal();
    if(cartTotal === null) { return; }

    let moneyFormat = shippingBar.dataset.moneyFormat.replace(/<[^>]*>/g, ''); // Remove HTML tags
    let formattedCartTotal = this.formatMoney(cartTotal, moneyFormat);
    let currentCartTotal = Number(formattedCartTotal.replace(shippingBar.dataset.currency, '').trim());
    

    let shippingRate = shippingBar.dataset.shippingRate;
    let priceDifference = shippingRate - currentCartTotal;
    let shippingBarTitle = shippingBar.querySelector('#shipping-bar-title');
    let shippingBarProgress = shippingBar.querySelector('#shipping-bar-progress')

    shippingBarTitle.innerHTML = '';

    if(currentCartTotal >= shippingRate) {
      shippingBarTitle.innerHTML = shippingBar.dataset.achieveFreeShipping;
    } else {
      //Update title
      let titlePrice = shippingBar.dataset.currency + priceDifference.toFixed(2)
      let prepSectionTitle = shippingBar.dataset.sectionTitle.replace("{PRICE}", titlePrice);
      shippingBarTitle.innerHTML = prepSectionTitle;
    }

    //Updating progress bar
    let percentage = (currentCartTotal / shippingRate) * 100;

    shippingBarProgress.style.width = `${percentage}%`;

  }

  hideShippingBar() {
    let shippingBar = document.getElementById('drawer-free-shipping-bar');
    shippingBar.style.display = 'none';
  }

  formatMoney(cents, format) {
    if (typeof cents == "string") {
      cents = cents.replace(".", "");
    }
    let value = "";
    let placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    let money_format = "{{ shop.money_format }}"
    let formatString = format || money_format;
  
  
    function defaultOption(opt, def) {
      return typeof opt == "undefined" ? def : opt;
    }
  
  
    function formatWithDelimiters(number, precision, thousands, decimal) {
      precision = defaultOption(precision, 2);
      thousands = defaultOption(thousands, ",");
      decimal = defaultOption(decimal, ".");
  
      if (isNaN(number) || number == null) {
        return 0;
      }
  
      number = (number / 100.0).toFixed(precision);
  
      let parts = number.split("."),
        dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + thousands),
        cents = parts[1] ? decimal + parts[1] : "";
  
      return dollars + cents;
    }
  
  
    switch (formatString.match(placeholderRegex)[1]) {
      case "amount":
        value = formatWithDelimiters(cents, 2);
        break;
      case "amount_no_decimals":
        value = formatWithDelimiters(cents, 0);
        break;
      case "amount_with_comma_separator":
        value = formatWithDelimiters(cents, 2, ".", ",");
        break;
      case "amount_no_decimals_with_comma_separator":
        value = formatWithDelimiters(cents, 0, ".", ",");
        break;
    }
  
    return formatString.replace(placeholderRegex, value);
  }

  async getCartTotal() {
    return fetch('/cart.js')
        .then(response => response.json())
        .then(cart => {
            console.log("Cart total (in cents):", cart.total_price); // DEBUGGING
            return cart.total_price; 
        })
        .catch(error => {
            console.error('Error fetching cart:', error);
            return null;
        });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let shippingBar = new ShippingBar();
  shippingBar.initFreeShippingBar();

  // Listen for cart updates
  document.addEventListener("cart:updated", () => {
      shippingBar.initFreeShippingBar();
  });

  // Detect when an item is added to the cart
  document.querySelectorAll('form[action$="/cart/add"]').forEach((form) => {
      form.addEventListener("submit", async (event) => {
          event.preventDefault(); // Prevent default form submission

          let formData = new FormData(form);

          try {
              let response = await fetch(form.action, {
                  method: "POST",
                  body: formData
              });

              if (response.ok) {
                  let cartResponse = await fetch("/cart.js");
                  let cartData = await cartResponse.json();
                  document.dispatchEvent(new CustomEvent("cart:updated", { detail: cartData }));
              } else {
                  console.error("Error adding to cart:", response.statusText);
              }
          } catch (error) {
              console.error("Error adding to cart:", error);
          }
      });
  });
});

