// window.onload = () => {
//   document.addEventListener('scroll', () => {
//     const cartCta = document.getElementById('cart_cta');
//     const stickyBtn = document.getElementById('sticky_cart_cta');

//     const rect = cartCta.getBoundingClientRect();
//     const viewportHeight = window.innerHeight;

//     console.log(`Element's bottom position relative to the viewport: ${rect.bottom}`);
//     console.log(`Viewport height: ${viewportHeight}`);

//     if (rect.bottom >= viewportHeight) {
//       stickyBtn.classList.add('flex');
//       stickyBtn.classList.remove('hidden');
//     } else {
//       stickyBtn.classList.add('hidden');
//       stickyBtn.classList.remove('flex');
//     }
//   });
// };
