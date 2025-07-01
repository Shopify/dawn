// Toggle sidebar cart
function toggleSidebarCart() {
  const sidebarCart = document.getElementById('sidebar-cart');
  sidebarCart.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
}

// Update cart quantity
function updateQuantity(variantId, quantity) {
  console.log(90);

  if (quantity < 1) quantity = 1;

  fetch('/cart/change.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      id: variantId,
      quantity: quantity,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      refreshCart(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Remove item from cart
// function removeItem(variantId) {
//   fetch('/cart/change.js', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//     body: JSON.stringify({
//       id: variantId,
//       quantity: 0,
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       refreshCart(data);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// }

// Refresh cart contents
function refreshCart(cart) {
  // Update cart count in header
  document.getElementById('cart-count').textContent = cart.item_count;

  // Get the section to refresh
  fetch('/?section_id=sidebar-cart')
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const html = parser.parseFromString(data, 'text/html');
      const newSidebarCart = html.getElementById('sidebar-cart').innerHTML;
      document.getElementById('sidebar-cart').innerHTML = newSidebarCart;

      // If cart is empty, close the sidebar
      if (cart.item_count === 0) {
        toggleSidebarCart();
      }
    });
}

// Save order note
function saveOrderNote() {
  const note = document.getElementById('cart-note').value;

  fetch('/cart/update.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      note: note,
    }),
  })
    .then(() => {
      alert('Order note saved');
      document.getElementById('order-note-content').style.display = 'none';
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Toggle order note visibility
function toggleOrderNote() {
  const noteContent = document.getElementById('order-note-content');
  if (noteContent.style.display === 'none') {
    noteContent.style.display = 'block';
  } else {
    noteContent.style.display = 'none';
  }
}

// Open cart when adding a product
document.addEventListener('DOMContentLoaded', function () {
  if (window.location.search.includes('added=true')) {
    toggleSidebarCart();
  }
});
