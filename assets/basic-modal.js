class BasicModal extends HTMLElement {
  constructor() {
    super();
    this.dialog = this.querySelector('dialog');
    dialogPolyfill.registerDialog(this.dialog);
    this.closeButtons = this.querySelectorAll('.close-button');
  }

  connectedCallback() {
    this.dialog.addEventListener('click', (event) => {
      if (event.target === this.dialog) {
        this.dialog.close();
      }
    });

    this.closeButtons.forEach(closeButton => {
      closeButton.addEventListener('click', () => {
        this.dialog.close();
      });
    });
  }

  openDialog() {
    this.dialog.showModal();
  }
}

customElements.define('basic-modal', BasicModal);

const openModal = document.getElementById('open-modal');
openModal.addEventListener('click', () => {
  document.querySelector('basic-modal').openDialog();
});
