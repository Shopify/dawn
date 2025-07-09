import { preloadImage, onDocumentReady } from '@theme/utilities';

/** @type {Record<string, number>} */
const cache = {};

const shopName = window.Shopify.shop;
// We want to encode shop-url to an integer dividable by Theme.placeholder.general.length
// to get a starting number that is unique to the shop
const shopPlaceholderSeed = shopName.split('-').reduce((acc, char) => acc + char.charCodeAt(0), 0);
const counters = {
  product: 0,
  general: shopPlaceholderSeed % Theme.placeholders.general.length,
};

const isEditorRequest = window.Shopify.visualPreviewMode || window.Shopify.designMode;

if (isEditorRequest) {
  onDocumentReady(() => {
    const placeholderUrls = Object.values(Theme.placeholders).flat();

    for (const url of placeholderUrls) {
      preloadImage(url);
    }
  });
}

class PlaceholderImage extends HTMLElement {
  connectedCallback() {
    if (this.hasChildNodes()) return;

    const type = /** @type {'product' | 'general'} */ (this.dataset.type);
    const blockId = this.dataset.blockId;
    if (!type || !(type in counters) || !blockId) return;

    const cached = cache[blockId];
    if (cached != null && Theme.placeholders[type][cached]) {
      const image = Theme.placeholders[type][cached];
      const imageElement = document.createElement('img');
      imageElement.src = image;
      imageElement.alt = Theme.translations.placeholder_image || 'Placeholder Image';
      this.appendChild(imageElement);
      return;
    }

    const counter = counters[type] || 0;
    counters[type] = (counter + 1) % Theme.placeholders[type].length;

    const image = Theme.placeholders[type][counter];
    if (!image) return;

    const sectionElement = this.closest('section');
    const sectionIndex = sectionElement
      ? Array.from(sectionElement.parentElement?.children ?? []).indexOf(sectionElement)
      : -1;

    const imageElement = document.createElement('img');
    imageElement.src = image;
    imageElement.alt = Theme.translations.placeholder_image || 'Placeholder Image';

    if (sectionIndex === -1 || sectionIndex > 3 || isEditorRequest) {
      imageElement.loading = 'lazy';
    }

    this.appendChild(imageElement);
    cache[blockId] = counter;
  }
}

if (!customElements.get('placeholder-image')) {
  customElements.define('placeholder-image', PlaceholderImage);
}
