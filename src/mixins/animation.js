//check to see if any animation containers are currently in view
function check_if_in_view() {
  var animation_elements = document.querySelectorAll(".animation-element");
  var web_window = window;
  //get current window information
  // debugger
  var window_height = web_window.outerHeight;
  var window_top_position = web_window.pageYOffset;
  var window_bottom_position = window_top_position + window_height;

  //iterate through elements to see if its in view
  Array.from(animation_elements).map(function (el) {
    //get the element sinformation
    var rect = el.getBoundingClientRect();

    //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight ||
          document.documentElement.clientHeight) /* or $(window).height() */ &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      el.classList.add("in-view");
    } else {
      // element.classList.remove("in-view");
    }
  });
}
// setTimeout(() => {
//   check_if_in_view()
// }, 100);
window.addEventListener("scroll", function () {
  check_if_in_view();
});
