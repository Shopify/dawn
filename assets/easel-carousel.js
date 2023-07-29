function toggleActive(collection, activateIndex) {
  for (const item of collection) {
    const itemIndex = parseInt(item.dataset.index)
    item.classList.remove('active')
    if (itemIndex === activateIndex) {
      item.classList.add('active')
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const indicators = Array.from(document.querySelectorAll('.easel-img-carousel__indicator'))
  const images = Array.from(document.querySelectorAll('.easel-img-carousel__image'))
  const contents = Array.from(document.querySelectorAll('.easel-img-carousel__content'))
  for (const indicator of indicators) {
    indicator.addEventListener('click', (e) => {
      const target = e.target
      const targetIndex = parseInt(target.dataset.index)
      toggleActive(indicators, targetIndex)
      toggleActive(images, targetIndex)
      toggleActive(contents, targetIndex)
    })
  }
})

document.addEventListener('DOMContentLoaded', function() {
  const carouselMobile = document.querySelector('.easel-img-carousel')

  var touchsurface = carouselMobile,
  startX,
  startY,
  dist,
  threshold = 150, //required min distance traveled to be considered swipe
  allowedTime = 200, // maximum time allowed to travel that distance
  elapsedTime,
  startTime

  function handleswipe(isrightswipe){
    let activeIndex = parseInt(carouselMobile.querySelector('.easel-img-carousel__indicator.active').dataset.index)
    const indicators = Array.from(document.querySelectorAll('.easel-img-carousel__indicator'))
    const images = Array.from(document.querySelectorAll('.easel-img-carousel__image'))
    const contents = Array.from(document.querySelectorAll('.easel-img-carousel__content'))

    if (isrightswipe) {
      if (activeIndex > 0) {
        toggleActive(indicators, activeIndex - 1)
        toggleActive(images, activeIndex - 1)
        toggleActive(contents, activeIndex - 1)
      }
    } else{
      if (activeIndex < indicators.length - 1) {
        toggleActive(indicators, activeIndex + 1)
        toggleActive(images, activeIndex + 1)
        toggleActive(contents, activeIndex + 1)
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
