//check to see if any animation containers are currently in view
function check_if_in_view() {
  var animation_elements = document.querySelectorAll(".animation-element");
  var web_window = window;
  //get current window information
  
  
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
    var isInview = isElementInViewport(el) || isElementPartiallyInViewport(el)
    if (isInview) {
      el.classList.add("in-view");
    } else {
      // element.classList.remove("in-view");
    }
  });
}

function isElementPartiallyInViewport(el)
{
    // Special bonus for those using jQuery
    if (typeof jQuery !== 'undefined' && el instanceof jQuery) 
        el = el[0];

    var rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    var windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    var vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    var horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}


// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
function isElementInViewport (el)
{
    // Special bonus for those using jQuery
    if (typeof jQuery !== 'undefined' && el instanceof jQuery) 
        el = el[0];

    var rect = el.getBoundingClientRect();
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    var windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    return (
           (rect.left >= 0)
        && (rect.top >= 0)
        && ((rect.left + rect.width) <= windowWidth)
        && ((rect.top + rect.height) <= windowHeight)
    );
}

// setTimeout(() => {
//   check_if_in_view()
// }, 100);
window.addEventListener("scroll", function () {
  check_if_in_view();
});
