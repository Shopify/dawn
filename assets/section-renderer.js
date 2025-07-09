import { morph } from '@theme/morph';
import { startViewTransition } from '@theme/utilities';

/**
 * A class to re-render sections using the Section Rendering API
 */
class SectionRenderer {
  /**
   * The cache of section HTML
   * @type {Map<string, string>}
   */
  #cache = new Map();

  /**
   * The abort controllers by section ID
   * @type {Map<string, AbortController>}
   */
  #abortControllersBySectionId = new Map();

  /**
   * The pending promises
   * @type {Map<string, Promise<string>>}
   */
  #pendingPromises = new Map();

  constructor() {
    window.addEventListener('load', this.#cachePageSections.bind(this));
  }

  /**
   * Renders a section
   * @param {string} sectionId - The section ID
   * @param {Object} [options] - The options
   * @param {boolean} [options.cache] - Whether to use the cache
   * @returns {Promise<string>} The rendered section HTML
   */
  async renderSection(sectionId, options) {
    const { cache = !Shopify.designMode } = options ?? {};

    this.#abortPendingMorph(sectionId);

    const abortController = new AbortController();
    this.#abortControllersBySectionId.set(sectionId, abortController);

    const sectionHTML = await this.getSectionHTML(sectionId, cache);

    if (!abortController.signal.aborted) {
      this.#abortControllersBySectionId.delete(sectionId);

      morphSection(sectionId, sectionHTML);
    }

    return sectionHTML;
  }

  /**
   * Aborts an existing morph for a section
   * @param {string} sectionId - The section ID
   */
  #abortPendingMorph(sectionId) {
    const existingAbortController = this.#abortControllersBySectionId.get(sectionId);
    if (existingAbortController) {
      existingAbortController.abort();
    }
  }

  /**
   * Gets the HTML for a section
   * @param {string} sectionId - The section ID
   * @param {boolean} useCache - Whether to use the cache
   * @param {URL} url - The URL to render the section for
   * @returns {Promise<string>} The rendered section HTML
   */
  async getSectionHTML(sectionId, useCache = true, url = new URL(window.location.href)) {
    const sectionUrl = buildSectionRenderingURL(sectionId, url);

    let pendingPromise = this.#pendingPromises.get(sectionUrl);
    if (pendingPromise) return pendingPromise;

    if (useCache) {
      const cachedHTML = this.#cache.get(sectionUrl);

      if (cachedHTML) return cachedHTML;
    }

    pendingPromise = fetch(sectionUrl).then((response) => {
      return response.text();
    });

    this.#pendingPromises.set(sectionUrl, pendingPromise);

    const sectionHTML = await pendingPromise;
    this.#pendingPromises.delete(sectionUrl);

    this.#cache.set(sectionUrl, sectionHTML);
    return sectionHTML;
  }

  /**
   * Caches the page sections
   */
  #cachePageSections() {
    for (const section of document.querySelectorAll('.shopify-section')) {
      const url = buildSectionRenderingURL(section.id);
      if (this.#cache.get(url)) return;
      if (containsShadowRoot(section)) return;

      this.#cache.set(url, section.outerHTML);
    }
  }
}

const SECTION_ID_PREFIX = 'shopify-section-';

/**
 * Builds a section rendering URL
 * @param {string} sectionId - The section ID
 * @param {URL} url - The URL to render the section for
 * @returns {string} The section rendering URL
 */
function buildSectionRenderingURL(sectionId, url = new URL(window.location.href)) {
  url.searchParams.set('section_id', normalizeSectionId(sectionId));
  url.searchParams.sort();

  return url.toString();
}

/**
 * Builds a section selector
 * @param {string} sectionId - The section ID
 * @returns {string} The section selector
 */
function buildSectionSelector(sectionId) {
  return `${SECTION_ID_PREFIX}${sectionId}`;
}

/**
 * Normalizes a section ID
 * @param {string} sectionId - The section ID
 * @returns {string} The normalized section ID
 */
function normalizeSectionId(sectionId) {
  return sectionId.replace(new RegExp(`^${SECTION_ID_PREFIX}`), '');
}

/**
 * Checks if an element contains a shadow root
 * @param {Element} element - The element to check
 * @returns {boolean} Whether the element contains a shadow root
 */
function containsShadowRoot(element) {
  return !!element.shadowRoot || Array.from(element.children).some(containsShadowRoot);
}

/**
 * @typedef {(previousElement: HTMLElement, newElement: HTMLElement) => void} UpdateCallback
 */

/**
 * Morphs the existing section element with the new section contents
 *
 * @param {string} sectionId - The section ID
 * @param {string} html - The new markup the section should morph into
 */
export async function morphSection(sectionId, html) {
  const fragment = new DOMParser().parseFromString(html, 'text/html');
  const existingElement = document.getElementById(buildSectionSelector(sectionId));
  const newElement = fragment.getElementById(buildSectionSelector(sectionId));

  if (!existingElement) {
    throw new Error(`Section ${sectionId} not found`);
  }

  if (!newElement) {
    throw new Error(`Section ${sectionId} not found in the section rendering response`);
  }

  morph(existingElement, newElement);
}

export const sectionRenderer = new SectionRenderer();
