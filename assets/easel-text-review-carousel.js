document.addEventListener('DOMContentLoaded', function() {
  const carouselElem = document.querySelector('.easel-text-reviews__carousel')
  const carouselItemTemplate = document.querySelector('.easel-text-reviews__carousel-item.template')
  const itemsTemplate = document.querySelector('.easel-text-reviews__items.template')
  const items = Array.from(itemsTemplate.querySelectorAll('.easel-text-reviews__item'))

  const carouselIndicators = document.querySelector('.easel-text-reviews__carousel-indicators')
  const carouselIndicatorTemplate = document.querySelector('.easel-text-reviews__carousel-indicator.template')
  const maxPerCarouselItem = 3
  const nCarouselItems = Math.ceil(items.length / 3)

  const itemsSlice = (index) => {
    let sliceStart = index * maxPerCarouselItem
    return items.slice(sliceStart, sliceStart + maxPerCarouselItem)
  }

  let newCarouselItem
  let newCarouselIndicator
  let slice
  for (let i = 0; i < nCarouselItems; i++) {
    newCarouselItem = carouselItemTemplate.cloneNode()
    newCarouselItem.classList.remove('hidden')
    newCarouselItem.classList.remove('template')
    newCarouselItem.dataset['index'] = i
    newCarouselIndicator = carouselIndicatorTemplate.cloneNode(true)
    newCarouselIndicator.classList.remove('hidden')
    newCarouselIndicator.classList.remove('template')
    newCarouselIndicator.dataset['index'] = i

    slice = itemsSlice(i)
    for(const item of slice) {
      item.classList.remove('hidden')
      item.classList.remove('template')
      newCarouselItem.appendChild(item)
    }

    if (i === 0) {
      newCarouselItem.classList.add('active')
      newCarouselIndicator.classList.add('active')
    }

    newCarouselIndicator.addEventListener('click', function(e) {
      const target = e.target
      const index = target.dataset.index
      const carouselItems = Array.from(document.querySelectorAll('.easel-text-reviews__carousel-item:not(.template)'))
      const carouselIndicators = Array.from(document.querySelectorAll('.easel-text-reviews__carousel-indicator:not(.template)'))
      const changeActive = (targetIndex, collection) => {
        for (let i = 0; i < collection.length; i++) {
          const item = collection[i]
          item.classList.remove('active')

          if (i === parseInt(targetIndex)) {
            item.classList.add('active')
          }
        }

      }

      changeActive(index, carouselItems)
      changeActive(index, carouselIndicators)
    })

    carouselElem.appendChild(newCarouselItem)
    carouselIndicators.appendChild(newCarouselIndicator)
  }
})

document.addEventListener('DOMContentLoaded', function() {
  const carouselMobile = document.querySelector('.easel-text-reviews__carousel-mobile')

  var touchsurface = carouselMobile,
  startX,
  startY,
  dist,
  threshold = 150, //required min distance traveled to be considered swipe
  allowedTime = 200, // maximum time allowed to travel that distance
  elapsedTime,
  startTime

  function toggleActive(collection, activateIndex) {
    for(const item of collection) {
      item.classList.remove('active')

      if (activateIndex === parseInt(item.dataset.index)) {
        item.classList.add('active')
      }
    }
  }

  function handleswipe(isrightswipe){
    let activeIndex = parseInt(carouselMobile.querySelector('.easel-text-reviews__item.active').dataset.index)
    const carouselItemsMobile = Array.from(carouselMobile.querySelectorAll('.easel-text-reviews__item'))
    const mobileIndicators = Array.from(document.querySelectorAll('.easel-text-reviews__carousel-indicator-mobile')) 

    if (isrightswipe) {
      if (activeIndex > 0) {
        toggleActive(carouselItemsMobile, activeIndex - 1)
        toggleActive(mobileIndicators, activeIndex - 1)
      }
    } else{
      if (activeIndex < carouselItemsMobile.length - 1) {
        toggleActive(carouselItemsMobile, activeIndex + 1)
        toggleActive(mobileIndicators, activeIndex + 1)
      }
    }
  }

  touchsurface.addEventListener('touchstart', function(e){
    var touchobj = e.changedTouches[0]
    dist = 0
    startX = touchobj.pageX
    startY = touchobj.pageY
    startTime = new Date().getTime() // record time when finger first makes contact with surface
    e.preventDefault()
  }, false)

  touchsurface.addEventListener('touchmove', function(e){
    e.preventDefault() // prevent scrolling when inside DIV
  }, false)

  touchsurface.addEventListener('touchend', function(e){
    var touchobj = e.changedTouches[0]
    dist = touchobj.pageX - startX // get total dist traveled by finger while in contact with surface
    elapsedTime = new Date().getTime() - startTime // get time elapsed
    // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
    var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
    handleswipe(swiperightBol)
    e.preventDefault()
  }, false)
})
