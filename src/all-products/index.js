import '../scss/all-products.scss';
class ProductManager {
  constructor() {
    if (!ProductManager.instance) {
      this.initialized = false;
      ProductManager.instance = this;
    }
    return ProductManager.instance;
  }

  init() {
    if (this.initialized) return;

    this.setupEventListeners();
    this.initialized = true;
  }

  setupEventListeners() {
    document.addEventListener('submit', async (e) => {
      if (e.target.classList.contains('product-form')) {
        e.preventDefault();
        await this.addToCart(new FormData(e.target));
      }
    });

    document.addEventListener('click', async (e) => {
      if (e.target.classList.contains('cart-item__remove')) {
        e.preventDefault();
        const item = e.target.closest('.cart-item');

        await this.removeItem(item.dataset.id);
      }

      if (e.target.closest('.cart-item__quantity')) {
        const quantityWrap = e.target.closest('.cart-item__quantity');
        const input = quantityWrap.querySelector('input');
        const item = e.target.closest('.cart-item');
        const variantId = item.dataset.id;

        const currentQty = parseInt(input.value);
        const isPlus = e.target.classList.contains('plus');
        const isMinus = e.target.classList.contains('minus');

        if (!isPlus && !isMinus) return;

        let newQuantity = currentQty + (isPlus ? 1 : -1);
        newQuantity = Math.max(0, newQuantity);
        input.value = newQuantity;
        console.log('newQuantity', newQuantity);

        try {
          if (newQuantity === 0) {
            await this.removeItem(variantId);
          } else {
            await this.updateItem(variantId, newQuantity);
          }
        } catch (error) {
          console.error('Ошибка обновления корзины:', error);
          input.value = currentQty;
          this.showError('Не удалось обновить корзину');
        }
      }
    });
  }

  async updateCartSection() {
    try {
      const response = await fetch('/?section_id=sidebar-cart');
      const html = await response.text();

      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;

      const cartContainer = document.getElementById('sidebar-cart');
      if (cartContainer) {
        cartContainer.innerHTML = tempDiv.querySelector('#sidebar-cart').innerHTML;
      }

      this.updateCartCount();
    } catch (error) {
      console.error('Cart update error:', error);
    }
  }

  async updateCartCount() {
    try {
      const cartResponse = await fetch('/cart.js');
      const cartData = await cartResponse.json();

      const countElements = document.querySelectorAll('.cart-count-bubble, .header-cart-count');

      countElements.forEach((element) => {
        element.textContent = cartData.item_count;
      });
    } catch (error) {
      console.error('Cart count update error:', error);
    }
  }

  async changeItem(updates) {
    try {
      const response = await fetch('/cart/update.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ updates }),
      });

      const cart = await response.json();
      await this.updateCartSection();
      console.log('Updated cart after deleted', cart);
    } catch (error) {
      console.error('Remove item failed:', error);
      alert('Failed to remove item. Please try again.');
    }
  }

  async addToCart(formData) {
    try {
      const addResponse = await fetch('/cart/add.js', {
        method: 'POST',
        body: formData,
      });
      const result = await addResponse.json();

      await this.updateCartSection();
    } catch (error) {
      console.error('Add to cart error:', error);
    }
  }

  async removeItem(variantId) {
    const updates = {
      [variantId]: 0,
    };
    this.changeItem(updates);
  }

  async updateItem(variantId, quantity) {
    const updates = {
      [variantId]: quantity,
    };
    this.changeItem(updates);
  }

  showSidebar() {
    document.getElementById('sidebar-cart').classList.add('active');
    document.body.classList.add('no-scroll');
  }

  hideSidebar() {
    document.getElementById('sidebar-cart').classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const productManager = new ProductManager();
  productManager.init();
});
