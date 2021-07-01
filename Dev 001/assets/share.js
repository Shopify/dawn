class ShareButton extends DetailsDisclosure {
  constructor() {
    super();

    this.elements = {
      shareButton: this.querySelector('button'),
      successMessage: this.querySelector('[id^="ShareMessage"]'),
      urlInput: this.querySelector('input')
    }
    if (navigator.share) {
      this.mainDetailsToggle.setAttribute('hidden', '');
      this.elements.shareButton.classList.remove('hidden');
      this.elements.shareButton.addEventListener('click', () => { navigator.share({ url: document.location.href, title: document.title }) });
    } else {
      this.mainDetailsToggle.addEventListener('toggle', this.toggleDetails.bind(this));
      this.mainDetailsToggle.querySelector('button').addEventListener('click', this.copyToClipboard.bind(this));
    }
  }

  toggleDetails() {
    if (!this.mainDetailsToggle.open)
      this.elements.successMessage.classList.add('hidden');
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.elements.urlInput.value).then(() => {
      this.elements.successMessage.classList.remove('hidden');
      this.elements.successMessage.setAttribute('aria-hidden', false);

      setTimeout(() => {
        this.elements.successMessage.setAttribute('aria-hidden', true);
      }, 6000);
    });
  }
}

customElements.define('share-button', ShareButton);
