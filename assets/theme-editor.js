document.addEventListener('shopify:block:select', function(event) {
  const blockSelectedIsSlide = event.target.classList.contains('slideshow__slide');
  if (!blockSelectedIsSlide) return;

  const parentSlideshowComponent = event.target.closest('slideshow-component');
  parentSlideshowComponent.pause();

  const slideScrollPosition = parentSlideshowComponent.slider.scrollLeft + parentSlideshowComponent.sliderFirstItem.clientWidth * (parentSlideshowComponent.sliderItemsToShow.indexOf(event.target) + 1 - parentSlideshowComponent.currentPage);
  setTimeout(function() {
    parentSlideshowComponent.slider.scrollTo({
      left: slideScrollPosition
    });
  }, 200);
});

document.addEventListener('shopify:block:deselect', function(event) {
  const blockDeselectedIsSlide = event.target.classList.contains('slideshow__slide');
  if (!blockDeselectedIsSlide) return;
  const parentSlideshowComponent = event.target.closest('slideshow-component');
  if (parentSlideshowComponent.autoplayButtonIsSetToPlay) parentSlideshowComponent.play();
});
