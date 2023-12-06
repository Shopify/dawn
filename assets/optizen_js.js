document.addEventListener('DOMContentLoaded', function () {
  var checkboxes = document.querySelectorAll('.checkbox-trigger-link');

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      updateURLFromCheckboxes();
    });

    // Check the checkbox if it was selected before
    var savedCheckboxValues = JSON.parse(sessionStorage.getItem('selectedCheckboxes')) || [];
    if (savedCheckboxValues.includes(checkbox.value)) {
      checkbox.checked = true;
    }
  });

  // Update checkboxes based on the URL
  updateCheckboxesFromURL();

  function updateCheckboxesFromURL() {
    var url = window.location.href;
    var values = url.split('/').filter(Boolean);

    checkboxes.forEach(function (checkbox) {
      // Check if the checkbox value is in the URL values array
      checkbox.checked = values.includes(checkbox.value);
    });
  }

  function updateURLFromCheckboxes() {
    // Get all checked checkboxes
    var checkedCheckboxes = document.querySelectorAll('.checkbox-trigger-link:checked');

    // Get an array of values from the checked checkboxes
    var selectedValues = Array.from(checkedCheckboxes).map(function (checkedCheckbox) {
      return checkedCheckbox.value;
    });

    // Fetch the current URL
    var currentUrl = window.location.href;

    // Remove any existing values after the last '/'
    var baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/') + 1);

    // Construct the updated URL dynamically
    var redirectUrl = baseUrl + selectedValues.join('+');

    // Update the URL without triggering the redirect
    history.replaceState(null, null, redirectUrl);

    // Store the selected values in sessionStorage
    sessionStorage.setItem('selectedCheckboxes', JSON.stringify(selectedValues));

    // Reload the page
    location.reload();
  }
});
