(function () {
  async function updateCartBubble() {
    const headerCart = document.querySelector(".header__icon--cart");

    if (!headerCart) return false;

    const cartResponse = await fetch("/cart.js").then(res => res.json());
    const itemCount = cartResponse.item_count;

    if (itemCount > 0) {
      const template = `
    <div class="cart-count-bubble">
    <span aria-hidden="true">${itemCount}</span>
    </div>
    `;

      headerCart.insertAdjacentHTML('beforeend', template)
    }
  }

  updateCartBubble();
})()
