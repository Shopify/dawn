/**
 * @function difficultyRating
 * @description show/hide difficulty rating checked style
 */

function difficultyRating() {
  const checkboxes = document.querySelectorAll(".alakazam-rating-check");

  for (let i = 0; i < checkboxes.length; i++) {
    const checkbox = checkboxes[i];

    checkbox.parentElement.addEventListener("click", () => {
      if (checkbox.checked) {
        checkbox.parentElement.classList.toggle(
          "alakazam-input-checkbox__checked"
        );
      } else {
        checkbox.parentElement.classList.remove(
          "alakazam-input-checkbox__checked"
        );
      }
    });
  }
}
difficultyRating();

/**
 * @function mobileFilterDropdowns
 * @description toggles filter/sort dropdowns on click
 */
function mobileFilterDropdowns(id) {
  document.querySelectorAll(".alakazam-facet-filters").forEach(function (div) {
    if (div.id == id) {
      // Toggle specified DIV
      div.style.display = div.style.display == "none" ? "block" : "none";
      div.classList.add("alakazam-facets__mobile-facets__item-active");
      div.previousElementSibling.classList.toggle(
        "alakazam-facets__mobile-facets__heading-active"
      );
    } else {
      // Hide other DIVs
      div.style.display = "none";
      div.classList.remove("alakazam-facets__mobile-facets__item-active");
      div.previousElementSibling.classList.remove(
        "alakazam-facets__mobile-facets__heading-active"
      );
    }
  });
}
mobileFilterDropdowns();
