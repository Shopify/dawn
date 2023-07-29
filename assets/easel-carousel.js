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
