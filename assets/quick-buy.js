if (!customElements.get('quickbuy-modal')) {
  customElements.define('quickbuy-modal', class QuickBuyModal extends ModalDialog {
    constructor() {
      super();
    }

    hide() {
      super.hide();
      this.modalContent.innerHTML = '';
    }

    show(opener) {
      super.show(opener);
      this.loadProductPage();
    }

    loadProductPage() {
      this.modalContent = this.querySelector('[id^="QuickBuyInfo-"]');
      fetch(this.openedBy.getAttribute('data-product-url'))
        .then((response) => response.text())
        .then((responseText) => {
          const responseHTML = new DOMParser().parseFromString(responseText, 'text/html');
          const productInfo = responseHTML.querySelector('section[id$="__main"]');
          this.modalContent.innerHTML = productInfo.innerHTML;
        });

    }
  });
}