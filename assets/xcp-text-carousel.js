document.addEventListener('DOMContentLoaded', function () {
  const carousels = document.getElementsByClassName('xcp-text-carousel__carousel-wrapper')

  if (carousels.length > 0) {
    Array.from(carousels).forEach(carousel => {
      handleArrows(carousel)
      handleSwipe(carousel)
      handleThumbnails(carousel)
    })
  }

  function carouselActiveIndex(carousel) {
    const activeImage = carouselActiveImage(carousel)
    if (activeImage) {
      return activeImage[0].dataset.itemIndex
    } else {
      return null
    }
  }

  function carouselActiveImage(carousel) {
    const images = carousel.getElementsByClassName('xcp-text-carousel__carousel__image')
    const activeImage = Array.from(images).filter(img => {
      return img.classList.contains('active')
    })

    return activeImage
  }

  function clearActive(carousel) {
    const images = carousel.getElementsByClassName('xcp-text-carousel__carousel__image')
    Array.from(images).forEach(img => {
      img.classList.remove('active')
    })
    const indicators = carousel.getElementsByClassName('xcp-text-carousel__carousel__indicator')
    Array.from(indicators).forEach(ind => {
      ind.classList.remove('active')
    })
    const thumbnails = carousel.getElementsByClassName('xcp-text-carousel__thumbnail__image')
    Array.from(thumbnails).forEach(thumb => {
      thumb.classList.remove('active')
    })
  }

  function scrollToIndex(carousel, index) {
    const imageToActivate = carousel.querySelector(`.xcp-text-carousel__carousel__image[data-item-index="${index}"]`)
    const indicatorToActivate = carousel.querySelector(`.xcp-text-carousel__carousel__indicator[data-item-index="${index}"]`)
    const thumbnailToActivate = carousel.querySelector(`.xcp-text-carousel__thumbnail__image[data-item-index="${index}"]`)
    const carouselInner = carousel.querySelector('.xcp-text-carousel__image-position')
    const thumbnailsFrame = carousel.querySelector('.xcp-text-carousel__carousel__thumnail-frame')
    const activeIndex = carouselActiveIndex(carousel)
    let thumbnailLeft = 0

    if (activeIndex > index) {
      thumbnailLeft = thumbnailToActivate.clientLeft
    } else {
      thumbnailLeft = thumbnailToActivate.clientLeft + thumbnailToActivate.clientWidth
    }

    const images = carousel.getElementsByClassName('xcp-text-carousel__carousel__image')
    if (index < images.length && index >= 0) {
      clearActive(carousel)
      carouselInner.scrollTo(imageToActivate.offsetWidth * index, 0)
      thumbnailsFrame.scrollTo(thumbnailLeft,0)
      imageToActivate.classList.add('active')
      indicatorToActivate.classList.add('active')
      thumbnailToActivate.classList.add('active')
    }
  }

  function handleArrows(carousel) {
    const leftArrow = carousel.getElementsByClassName('xcp-text-carousel__carousel__left-arrow')[0]
    const rightArrow = carousel.getElementsByClassName('xcp-text-carousel__carousel__right-arrow')[0]

    if (leftArrow) {
      leftArrow.addEventListener('click', function() {
        const activeIndex = carouselActiveIndex(carousel)
        scrollToIndex(carousel, parseInt(activeIndex) - 1)
      })
    }

    if (rightArrow) {
      rightArrow.addEventListener('click', function() {
        const activeIndex = carouselActiveIndex(carousel)
        scrollToIndex(carousel, parseInt(activeIndex) + 1)
      })
    }
  }

  function handleSwipe(carousel) {
    var touchstartX = 0;
    var touchstartY = 0;
    var touchendX = 0;
    var touchendY = 0;

    var gesuredZone = carousel.querySelector('.xcp-text-carousel__carousel__inner');

    gesuredZone.addEventListener('touchstart', function(event) {
      touchstartX = event.changedTouches[0].screenX;
      touchstartY = event.changedTouches[0].screenY;
    }, false);

    gesuredZone.addEventListener('touchend', function(event) {
      touchendX = event.changedTouches[0].screenX;
      touchendY = event.changedTouches[0].screenY;
      handleGesure();
    }, false); 

    function handleGesure() {
      const activeIndex = carouselActiveIndex(carousel)
      if (touchendX < touchstartX) {
        scrollToIndex(carousel, parseInt(activeIndex) + 1)
      }
      if (touchendX > touchstartX) {
        scrollToIndex(carousel, parseInt(activeIndex) - 1)
      }
      if (touchendY > touchstartY) {
      }
    } 
  }

  function handleThumbnails(carousel) {
    const thumbnails = carousel.getElementsByClassName('xcp-text-carousel__thumbnail__image')
    Array.from(thumbnails).forEach(thumb => {
      thumb.addEventListener('click', function() {
        const index = thumb.dataset.itemIndex
        scrollToIndex(carousel, index)
      })
    })
  }
})
