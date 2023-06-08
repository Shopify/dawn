document.addEventListener('DOMContentLoaded', function () {
  const carousels = document.getElementsByClassName('xcp-grid-carousel')

  if (carousels.length > 0) {
    Array.from(carousels).forEach(carousel => {
      handleArrows(carousel)
      handleSwipe(carousel)
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
    const images = carousel.getElementsByClassName('xcp-grid-carousel__carousel__image')
    const activeImage = Array.from(images).filter(img => {
      return img.classList.contains('active')
    })

    return activeImage
  }

  function clearActive(carousel) {
    const images = carousel.getElementsByClassName('xcp-grid-carousel__carousel__image')
    Array.from(images).forEach(img => {
      img.classList.remove('active')
    })
    const indicators = carousel.getElementsByClassName('xcp-grid-carousel__carousel__indicator')
    Array.from(indicators).forEach(ind => {
      ind.classList.remove('active')
    })
  }

  function scrollToIndex(carousel, index) {
    const imageToActivate = carousel.querySelector(`.xcp-grid-carousel__carousel__image[data-item-index="${index}"]`)
    const indicatorToActivate = carousel.querySelector(`.xcp-grid-carousel__carousel__indicator[data-item-index="${index}"]`)
    const carouselInner = carousel.querySelector('.xcp-grid-carousel__carousel__inner')

    const images = carousel.getElementsByClassName('xcp-grid-carousel__carousel__image')
    if (index < images.length && index >= 0) {
      clearActive(carousel)
      carouselInner.style.left = `-${imageToActivate.offsetLeft}px` 
      imageToActivate.classList.add('active')
      indicatorToActivate.classList.add('active')
    }
  }

  function handleArrows(carousel) {
    const leftArrow = carousel.getElementsByClassName('xcp-grid-carousel__carousel__left-arrow')[0]
    const rightArrow = carousel.getElementsByClassName('xcp-grid-carousel__carousel__right-arrow')[0]

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

    var gesuredZone = carousel;

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
        scrollToIndex(carousel, parseInt(activeIndex) + 1)
      }
    } 
  }
})
