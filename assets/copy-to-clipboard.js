import { Component } from '@theme/component';

/**
 * Handles copying text to clipboard, from an event like a click.
 * Optionally, reveals a success message after copying.
 * @extends {Component}
 */
class CopyToClipboardComponent extends Component {
  copyToClipboard() {
    const copyContent = this.getAttribute('text-to-copy');

    if (!copyContent) return;

    navigator.clipboard.writeText(copyContent);

    const copySuccessMessage = this.refs.copySuccessMessage;

    if (copySuccessMessage instanceof Element) {
      copySuccessMessage.classList.remove('visually-hidden');
    }
  }
}

if (!customElements.get('copy-to-clipboard-component')) {
  customElements.define('copy-to-clipboard-component', CopyToClipboardComponent);
}
