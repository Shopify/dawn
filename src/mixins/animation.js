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
    var rect     = el.getBoundingClientRect(),
        vWidth   = window.innerWidth || document.documentElement.clientWidth,
        vHeight  = window.innerHeight || document.documentElement.clientHeight,
        efp      = function (x, y) { return document.elementFromPoint(x, y) };     

    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0 
            || rect.left > vWidth || rect.top > vHeight)
        return false;

    // Return true if any of its four corners are visible
    var isInview = (
          el.contains(efp(rect.left,  rect.top))
      ||  el.contains(efp(rect.right, rect.top))
      ||  el.contains(efp(rect.right, rect.bottom))
      ||  el.contains(efp(rect.left,  rect.bottom))
    );
    if (isInview) {
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
