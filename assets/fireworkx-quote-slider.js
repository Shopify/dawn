var swiper = new Swiper(".mySwiper", {
  allowTouchMove : false,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    prevEl: ".swiper-button-prev",
  },
});

const buttons = document.querySelectorAll('.button-quote-type')
const brands = document.querySelectorAll('li.brand-name')
const products = document.querySelectorAll('li.product-name')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const quoteType = button.dataset.quote;    
    if(quoteType === 'new-canopies'){
      swiper.slideTo(1)
    } else if(quoteType === 'accessories'){
      swiper.slideTo(3)
    }
  })
})

brands.forEach((brand) => {
  brand.addEventListener('click', () => {
    let brandName = brand.dataset.brand
    sortListProducts(brandName);
    swiper.slideTo(2)
  })
})


function sortListProducts(brand){
  products.forEach(product => { product.classList.remove('show-product')})
  let filteredProducts = [... products].filter(product =>  product.dataset.vendor === brand)
  filteredProducts.forEach(product => { product.classList.add('show-product')})
}