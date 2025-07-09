import { QRCode } from '@theme/qr-code-generator';
/**
 * A custom element that displays a QR code image.
 *
 * @extends {HTMLElement}
 */
class QRCodeImage extends HTMLElement {
  /** @type {number} */
  #width = 72;
  /** @type {number} */
  #height = 72;
  /** @type {string} */
  #alt = '';

  connectedCallback() {
    const widthAttribute = this.getAttribute('width') ?? '';
    this.#width = isNaN(parseInt(widthAttribute)) ? this.#width : parseInt(widthAttribute);
    const heightAttribute = this.getAttribute('height') ?? '';
    this.#height = isNaN(parseInt(heightAttribute)) ? this.#height : parseInt(heightAttribute);
    this.#alt = this.getAttribute('alt') ?? this.#alt;

    new QRCode(this, {
      text: this.getAttribute('data-identifier') || '',
      width: this.#width,
      height: this.#height,
      alt: this.#alt,
    });
  }
}

if (!customElements.get('qr-code-image')) {
  customElements.define('qr-code-image', QRCodeImage);
}
