import '../scss/shipping-bar.scss';
class FreeShippingBar {
  constructor() {
    this.barElement = document.querySelector('.free-shipping-bar');
    if (!this.barElement) return;

    this.minAmount = parseInt(this.barElement.dataset.shippingMinimum);
    this.currentAmount = parseInt(this.barElement.dataset.cartTotal);
    this.init();
  }

  init() {
    this.updateProgress();
    this.setupEventListeners();
  }

  updateProgress() {
    const progressPercent = Math.min((this.currentAmount / this.minAmount) * 100, 100);
    const progressFill = this.barElement.querySelector('.progress-fill');

    if (progressFill) {
      progressFill.style.width = `${progressPercent}%`;
    }
  }

  setupEventListeners() {
    document.addEventListener('cart:updated', (event) => {
      this.currentAmount = event.detail.cart.total_price;
      this.updateProgress();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new FreeShippingBar();
});
