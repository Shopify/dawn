(function () {
  // Function to get cookie by name
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift().trim();
  }

  const languageSelectorContainers = document.querySelectorAll(".language-wrapper .language-item");

  if (!languageSelectorContainers) return false;

  const countryCode = getCookie("localization") || Shopify.country;

  if (countryCode) {
    const countryCodeLower = countryCode.toLowerCase()
    if (countryCodeLower === "be") {
      var newHtml = `
        <span class="flag flag-glob"></span>
        <p class="header-country-code">
          Global
        </p>
      `
    } else if (countryCodeLower === "de") {
      var newHtml = `
        <span class="flag flag-de"></span>
        <p class="header-country-code">
          DE
        </p>
      `
    } else {
      var newHtml = `
        <span class="flag flag-${countryCodeLower}"></span>
        <p class="header-country-code">
        ${countryCode}
        </p>
      `
    }
  } else {
    var newHtml = `
      <span class="flag flag-glob"></span>
      <p class="header-country-code">
        Global
      </p>
    `
  }

  languageSelectorContainers.forEach(container => container.innerHTML = newHtml)
})()
