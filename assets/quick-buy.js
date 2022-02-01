if (!customElements.get('quickbuy-modal')) {
  customElements.define('quickbuy-modal', class QuickBuyModal extends ModalDialog {
    constructor() {
      super();
    }

    hide() {
      super.hide();
    }

    show(opener) {
      super.show(opener);
      this.loadProductPage();
    }

    loadProductPage() {
      const info = this.querySelector('[id^="QuickBuyInfo-"]');
      fetch(this.openedBy.getAttribute('data-product-url'))
        .then((response) => response.text())
        .then((responseText) => {
          const responseHTML = new DOMParser().parseFromString(responseText, 'text/html');
          const productInfo = responseHTML.querySelector('section[id$="__main"]');
          info.innerHTML = productInfo.innerHTML;
        });

    }
  });
}