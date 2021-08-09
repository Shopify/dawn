class ShareButton extends DetailsDisclosure {
  constructor() {
    super();

    this.elements = {
      shareButton: this.querySelector('button'),
      copyButton: this.querySelector('.share-button__copy'),
      closeButton: this.querySelector('.share-button__close'),
      successMessage: this.querySelector('[id^="ShareMessage"]'),
      urlInput: this.querySelector('input')
    }
    if (navigator.share) {
      this.mainDetailsToggle.setAttribute('hidden', '');
      this.elements.shareButton.classList.remove('hidden');
      this.elements.shareButton.addEventListener('click', () => { navigator.share({ url: document.location.href, title: document.title }) });
    } else {
      this.mainDetailsToggle.addEventListener('toggle', this.toggleDetails.bind(this));
      this.mainDetailsToggle.querySelector('.share-button__copy').addEventListener('click', this.copyToClipboard.bind(this));
      this.mainDetailsToggle.querySelector('.share-button__close').addEventListener('click', this.close.bind(this));
    }
  }

  toggleDetails() {
    if (!this.mainDetailsToggle.open)
      this.elements.successMessage.classList.add('hidden');
      this.elements.closeButton.classList.add('hidden');
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.elements.urlInput.value).then(() => {
      this.elements.successMessage.classList.remove('hidden');
      this.elements.successMessage.setAttribute('aria-hidden', false);
      this.elements.closeButton.classList.remove('hidden');
      this.elements.closeButton.focus();

      setTimeout(() => {
        this.elements.successMessage.setAttribute('aria-hidden', true);
      }, 6000);
    });
  }
}

customElements.define('share-button', ShareButton);
