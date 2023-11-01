(async function(algolia) {
  'use strict';
  const insightsClient = window[window.AlgoliaAnalyticsObject];

  const index_suffix = await algolia.config.index_suffix;

  const enabled = algolia.config.analytics_enabled;
  if (!enabled || !insightsClient) return;

  // useCookie parameter set up
  const userTokenAdminSetting = algolia.config.usertoken_with_cookies === 'enabled';
  let useCookie = false;

  if(userTokenAdminSetting) {
    window.Shopify.loadFeatures(
      [
        {
          name: 'consent-tracking-api',
          version: '0.1',
        },
      ],
      error => {
        if (error) {
          console.error("Customer Privacy API Error", error);
        }
        const userCanBeTracked = window.Shopify.customerPrivacy ? window.Shopify.customerPrivacy.userCanBeTracked() : false;
        useCookie = userTokenAdminSetting && userCanBeTracked;
        insightsClient('init', {useCookie, partial: true});
      },
    );
  } else {
    insightsClient('init', {useCookie: useCookie, partial: true});
  }

  // Local storage logic for conversion events
  const localStorageKey = 'algolia_analytics_clicked_objects';

  /**
   * Saves details in local storage for conversion tracking
   */
  algolia.saveForConversionTracking = function (data) {
    /**
     * We're using a try, catch here to handle any possible exceptions
     * resulting from local storage or JSON parsing.
     */
    try {
      // Get any data previously stored
      const previousClickItemsString = localStorage.getItem(localStorageKey) || '[]';
      const previousClickItems = JSON.parse(previousClickItemsString);

      // Add the current products data to local storage
      previousClickItems.push(data)
      localStorage.setItem(localStorageKey, JSON.stringify(previousClickItems))
    } catch (error) {
      console.error(error);
      // No need to do anything in this scenario
    }
  };

  /**
   * Try to get the details from local storage for conversion tracking.
   * We're using a try...catch here to handle any possible exceptions resulting
   * from local storage or JSON parsing.
   */
  function trackConversion() {

    try {
      // Get any previously stored data.
      const previousClickItemsString = localStorage.getItem(localStorageKey)
      // If data was found, send a conversion event for those products.
      if (!!previousClickItemsString) {
        const previousClickItems = JSON.parse(previousClickItemsString)
        previousClickItems.forEach((data) => {
          insightsClient('init', {
            appId: algolia.config.app_id, 
            apiKey: algolia.config.search_api_key,
            useCookie,
            partial: true
          });
          insightsClient('convertedObjectIDsAfterSearch', data)
        })
      }
    } catch (error) {
      console.error(error);
      // No need to do anything in this scenario.
    }

    // Try to remove the items from local storage.
    try {
      localStorage.removeItem(localStorageKey)
    } catch (error) {
      // No need to do anything in this scenario.
    }
  }

  /**
   *Track a conversion event when clicking the 'add to cart' button.
   *Change the query selector to be the correct one for your theme.
   */
  const addToCartBtn = document.querySelector('YOUR_ADD_TO_CART_SELECTOR')
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', function (e) {
      trackConversion()
    })
  }
})(window.algoliaShopify);
