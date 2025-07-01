// // Функция для открытия/закрытия корзины
// function toggleSidebarCart() {
//   const sidebarCart = document.getElementById('sidebar-cart');
//   const overlay = document.querySelector('.sidebar-cart__overlay');

//   if (!sidebarCart || !overlay) return;

//   sidebarCart.classList.toggle('active');
//   document.body.classList.toggle('no-scroll');

//   // Блокировка прокрутки страницы
//   if (sidebarCart.classList.contains('active')) {
//     document.documentElement.style.overflow = 'hidden';
//   } else {
//     document.documentElement.style.overflow = '';
//   }
// }

// // Закрытие по клику на оверлей или крестик
// document.addEventListener('DOMContentLoaded', () => {
//   // Обработчик для иконки корзины в хедере
//   const cartIcon = document.querySelector('.cart-icon, .header-cart-icon');
//   if (cartIcon) {
//     cartIcon.addEventListener('click', toggleSidebarCart);
//   }

//   // Обработчик для кнопки закрытия
//   const closeBtn = document.querySelector('.sidebar-cart__close');
//   if (closeBtn) {
//     closeBtn.addEventListener('click', toggleSidebarCart);
//   }

//   // Обработчик для оверлея
//   const overlay = document.querySelector('.sidebar-cart__overlay');
//   if (overlay) {
//     overlay.addEventListener('click', toggleSidebarCart);
//   }
// });
