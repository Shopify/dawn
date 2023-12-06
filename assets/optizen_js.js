document.addEventListener('DOMContentLoaded', function() {
var checkboxes = document.querySelectorAll('.checkbox-trigger-link');
checkboxes.forEach(function(checkbox) {
checkbox.addEventListener('change', function() {
updateURLFromCheckboxes();
});
// Check the checkbox if it was selected before
var savedCheckboxValues = JSON.parse(sessionStorage.getItem('selectedCheckboxes')) ||
[];
if (savedCheckboxValues.includes(checkbox.value)) {
checkbox.checked = true;
}
});
// Clear sessionStorage when on the default URL
var defaultUrl = 'https://goodwatch.com/collections/all';
if (window.location.href === defaultUrl) {
sessionStorage.removeItem('selectedCheckboxes');
checkboxes.forEach(function(checkbox) {
checkbox.checked = false; // Uncheck all checkboxes
});} else {
// Update checkboxes based on the URL
updateCheckboxesFromURL();
}
function updateCheckboxesFromURL() {
var url = window.location.href;
var parts = url.split('/');
var lastPart = parts[parts.length - 1];
var values = lastPart.split('+');
checkboxes.forEach(function(checkbox) {
checkbox.checked = values.includes(checkbox.value);
});
}
function updateURLFromCheckboxes() {
// Get all checked checkboxes
var checkedCheckboxes = document.querySelectorAll('.checkbox-trigger-link:checked');
// Get an array of values from the checked checkboxes
var selectedValues = Array.from(checkedCheckboxes).map(function(checkedCheckbox) {
return checkedCheckbox.value;
});
// Construct the URL with all selected values
var redirectUrl = 'https://goodwatch.com/collections/all/' + selectedValues.join('+');
// Update the URL and trigger the redirect
window.location.href = redirectUrl;
}
});