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
      const changeActive = (collection) => {
        for (let i = 0; i < collection.length; i++) {
          const item = collection[i]
          item.classList.remove('active')

          if (i === parseInt(index)) {
            item.classList.add('active')
          }
        }

      }

      changeActive(carouselItems)
      changeActive(carouselIndicators)
    })

    carouselElem.appendChild(newCarouselItem)
    carouselIndicators.appendChild(newCarouselIndicator)
  }
})
