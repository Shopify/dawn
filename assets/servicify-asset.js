(function () {
  function docReady(fn) {
    // see if DOM is already available
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      // call on next available tick
      setTimeout(fn, 1);
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  function findAddToCartButton(addToCartSelector) {
    let atcButton;
    if (addToCartSelector) {
      atcButton = document.querySelector(addToCartSelector);
    }

    // No ATC button. Try to find it by looking at the forms.
    if (!atcButton) {
      // find all forms that add to card.
      const allCartForms = document.querySelectorAll('form[action*="cart"]');
      // loop through them and find the one that has a button inside it. thats the atc button.
      for (const form of allCartForms) {
        const btn = form.querySelector(
          'button[type="submit"], input[type="submit"]'
        );
        if (btn) {
          atcButton = btn;
        }
      }
    }

    // Still no ATC:
    // Traverse DOM finding elements that match "Add to Cart"
    if (!atcButton) {
      for (const btn of document.querySelectorAll("button")) {
        if (
          btn.textContent.toLowerCase().includes("add to cart") &&
          !btn.classList.contains("no-js")
        ) {
          atcButton = btn;
        }
      }
    }

    // Still no submit button. Maybe its called "Add to basket"?
    if (!atcButton) {
      for (const btn of document.querySelectorAll("button")) {
        if (
          btn.textContent.toLowerCase().includes("add to basket") &&
          !btn.classList.contains("no-js")
        ) {
          atcButton = btn;
        }
      }
    }

    return atcButton;
  }

  function findBuyNowButton(selector) {
    let foundButton = document.querySelector(selector);
    // Could not find the button using Settings method.
    // Traverse DOM finding elements that match "Add to Cart"
    if (!foundButton) {
      for (const btn of document.querySelectorAll("button")) {
        if (
          btn.textContent.toLowerCase().includes("buy now") &&
          !btn.classList.contains("no-js")
        ) {
          foundButton = btn;
        }
      }
    }

    if (!foundButton) {
      for (const btn of document.querySelectorAll("button")) {
        if (
          btn.textContent.toLowerCase().includes("buy it now") &&
          !btn.classList.contains("no-js")
        ) {
          foundButton = btn;
        }
      }
    }

    //still no buy it now button?
    if (!foundButton) {
      foundButton = document.querySelector(".shopify-payment-button");
    }

    return foundButton;
  }

  docReady(function () {
    async function changeButtons() {
      // find the add to cart button
      const addToCartButton = findAddToCartButton();

      try {
        if (addToCartButton) {
          let data;

          // Check for productId. IF not exists, check for variant Id.
          if (ShopifyAnalytics.meta.product) {
            const resp = await fetch(
              `https://servicify-appointments.herokuapp.com/api/products/${ShopifyAnalytics.meta.product.id}/events?variantId=${ShopifyAnalytics.meta.selectedVariantId}`
            );
            data = await resp.json();
          } else if (ShopifyAnalytics.meta.selectedVariantId) {
            const resp = await fetch(
              `https://servicify-appointments.herokuapp.com/api/variants/${ShopifyAnalytics.meta.selectedVariantId}/events`
            );
            data = await resp.json();
          }

          if (data && data.isActive) {
            // hide the add cart button.
            addToCartButton.setAttribute(
              "data-original-text",
              addToCartButton.innerText
            );
            addToCartButton.setAttribute("disabled", true);
            addToCartButton.setAttribute("data-servicify-atc", true);
            addToCartButton.innerText = "Loading Available Slots";

            const buyNowButton = findBuyNowButton();
            if (buyNowButton) {
              buyNowButton.style.display = "none";
            }
          } else {
            console.log(
              "This product does not have an event associated with it."
            );
          }
        } else {
          console.log("No add to cart button found.");
        }
        window.SERVICIFY_HAS_UPDATED_BUTTON = true;
      } catch (err) {
        console.log(
          `Servicify: Caught an error when trying to determine the event. This error was caught so it should not affect other 3rd party apps on this page.`,
          err
        );
      }
    }

    changeButtons();
  });
})();
