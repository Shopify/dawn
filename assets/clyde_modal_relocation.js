document.addEventListener('DOMContentLoaded', function() {
  const lookForClydeModal = () => {
    const modal = document.querySelector('iframe[name="clyde-product-page-frame"]')
    if (modal) {
      const target = document.getElementById('clyde-cta')
      modal.remove()
      target.append(modal)
      stopInterval()
    }
  }
  const intervalClydeModal = setInterval(lookForClydeModal, 100)
  const stopInterval = () => clearInterval(intervalClydeModal)
})
