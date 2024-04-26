(function trackRecentlyViewedProducts() {
  // Get the current product handle from main-product.liquid
  const currentProductHandle = JSON.parse(document.getElementById('ProductHandle').textContent);

  let recentlyViewedProductHandles = document.cookie
    .split('; ')
    .find((row) => row.startsWith('recentlyViewedProductHandles='));

  if (recentlyViewedProductHandles) {
    recentlyViewedProductHandles = JSON.parse(recentlyViewedProductHandles.split('=')[1]);
  } else {
    recentlyViewedProductHandles = [];
  }

  if (!recentlyViewedProductHandles.includes(currentProductHandle)) {
    recentlyViewedProductHandles.push(currentProductHandle);

    // Update the cookie with the new array, setting the expiration to 30 days
    const date = new Date();
    date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
    document.cookie = `recentlyViewedProductHandles=${JSON.stringify(
      recentlyViewedProductHandles
    )};expires=${date.toUTCString()};path=/`;
  }
})();
