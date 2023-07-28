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
    newCarouselIndicator = carouselIndicatorTemplate.cloneNode(true)
    newCarouselIndicator.classList.remove('hidden')
    newCarouselIndicator.classList.remove('template')
    slice = itemsSlice(i)
    for(const item of slice) {
      item.classList.remove('hidden')
      item.classList.remove('template')
      newCarouselItem.appendChild(item)
    }

    carouselElem.appendChild(newCarouselItem)
    carouselIndicators.appendChild(newCarouselIndicator)
  }
})
