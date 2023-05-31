document.addEventListener('DOMContentLoaded', function () {
  console.log('js carousel') 
  const carousels = document.getElementsByClassName('xcp-grid-carousel')

  if (carousels.length > 0) {
    console.log('has carousels')
    Array.from(carousels).forEach(carousel => {
      const leftArrow = carousel.getElementsByClassName('xcp-grid-carousel__carousel__left-arrow')[0]
      const rightArrow = carousel.getElementsByClassName('xcp-grid-carousel__carousel__right-arrow')[0]

      if (leftArrow) {
        leftArrow.addEventListener('click', function() {
          const activeIndex = carouselActiveIndex(carousel)
          console.log('left arrow active index', activeIndex)
          scrollToIndex(carousel, parseInt(activeIndex) - 1)
        })
      }

      if (rightArrow) {
        rightArrow.addEventListener('click', function() {
          const activeIndex = carouselActiveIndex(carousel)
          scrollToIndex(carousel, parseInt(activeIndex) + 1)
        })
      }
    })
  }
  function carouselActiveIndex(carousel) {
    const images = carousel.getElementsByClassName('xcp-grid-carousel__carousel__image')
    console.log(images)
    const activeImage = Array.from(images).filter(img => {
      return img.classList.contains('active')
    })

    console.log(activeImage)
    if (activeImage) {
      return activeImage[0].dataset.itemIndex
    } else {
      return null
    }
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

    const images = carousel.getElementsByClassName('xcp-grid-carousel__carousel__image')
    if (index < images.length && index >= 0) {
      clearActive(carousel)
      imageToActivate.scrollIntoView()
      imageToActivate.classList.add('active')
      indicatorToActivate.classList.add('active')
    }
  }
})
