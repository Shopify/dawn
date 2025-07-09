/*
 * Declarative shadow DOM is only initialized on the initial render of the page.
 * If the component is mounted after the browser finishes the initial render,
 * the shadow root needs to be manually hydrated.
 */
class DeclarativeShadowElement extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) {
      const template = this.querySelector(':scope > template[shadowrootmode="open"]');

      if (!(template instanceof HTMLTemplateElement)) return;

      const shadow = this.attachShadow({ mode: 'open' });
      shadow.append(template.content.cloneNode(true));
    }
  }
}

/**
 * A custom ResizeObserver that only calls the callback when the element is resized.
 * By default the ResizeObserver callback is called when the element is first observed.
 */
class ResizeNotifier extends ResizeObserver {
  #initialized = false;

  /**
   * @param {ResizeObserverCallback} callback
   */
  constructor(callback) {
    super((entries) => {
      if (this.#initialized) return callback(entries, this);
      this.#initialized = true;
    });
  }

  disconnect() {
    this.#initialized = false;
    super.disconnect();
  }
}

/**
 * Event class for overflow minimum items updates
 * @extends {Event}
 */
class OverflowMinimumEvent extends Event {
  /**
   * Creates a new OverflowMinimumEvent
   * @param {boolean} minimumReached - Whether the minimum number of visible items has been reached
   */
  constructor(minimumReached) {
    super('overflowMinimum', { bubbles: true });
    this.detail = {
      minimumReached,
    };
  }
}

class ReflowEvent extends Event {
  /**
   * @param {HTMLElement} lastVisibleElement - The element to move to the last visible position
   */
  constructor(lastVisibleElement) {
    super('reflow', { bubbles: true });
    this.detail = { lastVisibleElement };
  }
}

/**
 * A custom element that wraps a list of items and moves them to an overflow slot when they don't fit.
 * This component is used in the header section, it needs to be render-blocking to avoid layout shifts.
 * @attr {string | null} minimum-items When set, the element enters a 'minimum-reached' state when visible items are at or below this number.
 * @example
 * <overflow-list minimum-items="2">
 *   <!-- list items -->
 * </overflow-list>
 */
class OverflowList extends DeclarativeShadowElement {
  static get observedAttributes() {
    return ['disabled', 'minimum-items'];
  }

  /**
   * @param {string} name
   * @param {string} oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'disabled') {
      if (newValue === 'true') {
        this.#reset();
      } else {
        this.#reflowItems();
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    const { shadowRoot } = this;

    if (!shadowRoot) throw new Error('Missing shadow root');

    const defaultSlot = shadowRoot.querySelector('slot:not([name])');
    const overflowSlot = shadowRoot.querySelector('slot[name="overflow"]');
    const moreSlot = shadowRoot.querySelector('slot[name="more"]');
    const overflow = shadowRoot.querySelector('[part="overflow"]');
    const list = shadowRoot.querySelector('[part="list"]');
    const placeholder = shadowRoot.querySelector('[part="placeholder"]');

    if (
      !(defaultSlot instanceof HTMLSlotElement) ||
      !(overflowSlot instanceof HTMLSlotElement) ||
      !(moreSlot instanceof HTMLSlotElement) ||
      !(overflow instanceof HTMLElement) ||
      !(list instanceof HTMLUListElement) ||
      !(placeholder instanceof HTMLLIElement)
    ) {
      throw new Error('Invalid element types in <OverflowList />');
    }

    this.#refs = {
      defaultSlot,
      overflowSlot,
      moreSlot,
      overflow,
      list,
      placeholder,
    };

    // Add event listener for reflow requests
    this.addEventListener(
      'reflow',
      /** @param {ReflowEvent} event */ (event) => {
        this.#reflowItems(event.detail.lastVisibleElement);
      }
    );

    if (this.hasAttribute('defer')) {
      const deferredReflow = () => {
        // Remove attribute first to change layout before calculating the actual size
        this.removeAttribute('defer');
        this.#reflowItems();
      };
      const { schedule } = this;

      const idleCallback = typeof requestIdleCallback === 'function' ? requestIdleCallback : setTimeout;

      idleCallback(() => schedule(deferredReflow));
    } else {
      this.#reflowItems();
    }
  }

  disconnectedCallback() {
    this.#resizeObserver.disconnect();
  }

  get schedule() {
    return typeof Theme?.utilities?.scheduler?.schedule === 'function'
      ? Theme.utilities.scheduler.schedule
      : /** @param {FrameRequestCallback} callback */ (callback) => requestAnimationFrame(callback);
  }

  #scheduled = false;

  /**
   * Get the minimum number of items before changing the minimum-reached state
   * @returns {number | null}
   */
  get minimumItems() {
    const value = this.getAttribute('minimum-items');
    return value ? parseInt(value, 10) : null;
  }

  get overflowSlot() {
    const { overflowSlot } = this.#refs;
    return overflowSlot;
  }

  get defaultSlot() {
    const { defaultSlot } = this.#refs;
    return defaultSlot;
  }

  /**
   * @type {{width: number | null, height: number | null}}
   */
  #lastDimensions = {
    width: null,
    height: null,
  };

  /**
   * @type {ResizeObserverCallback & MutationCallback}
   */
  #handleChange = (event) => {
    if (this.#scheduled) return;

    let width = null;
    let height = null;
    let isResize = false;

    for (const [, entry] of event.entries()) {
      if (!(entry instanceof ResizeObserverEntry)) break;
      // There should only be one entry
      isResize = true;
      width = Math.round(entry.contentRect.width);
      height = Math.round(entry.contentRect.height);
    }

    if (isResize) {
      if (!width || !height || (width === this.#lastDimensions.width && height === this.#lastDimensions.height)) {
        // Skip reflow if dimensions are 0 or the same as the last reflow
        return;
      }

      this.#lastDimensions = { width: Math.round(width), height: Math.round(height) };
    }

    this.#scheduled = true;

    this.schedule(() => {
      this.#reflowItems();
      this.#scheduled = false;
    });
  };

  /**
   * Move all items to the default slot.
   */
  #moveItemsToDefaultSlot() {
    const { defaultSlot, overflowSlot } = this.#refs;

    for (const element of overflowSlot.assignedElements()) {
      element.slot = defaultSlot.name;
    }
  }

  /**
   * Reset the list to its initial state and disconnect the observers.
   */
  #reset() {
    const { list } = this.#refs;

    this.#mutationObserver.disconnect();
    this.#resizeObserver.disconnect();
    this.#moveItemsToDefaultSlot();

    list.style.removeProperty('height');
    this.style.setProperty('--overflow-count', '0');
  }

  /**
   * Sets the minimum-reached attribute and dispatches a custom event based on visible elements count
   * @param {Element[]} visibleElements - The currently visible elements
   */
  #updateMinimumReached(visibleElements) {
    if (this.minimumItems !== null) {
      const minimumReached = visibleElements.length < this.minimumItems;

      if (minimumReached) {
        this.setAttribute('minimum-reached', '');
      } else {
        this.removeAttribute('minimum-reached');
      }

      this.dispatchEvent(new OverflowMinimumEvent(minimumReached));
    }
  }

  /**
   * Show all items in the list.
   */
  showAll() {
    const { placeholder } = this.#refs;

    placeholder.style.setProperty('width', '0');
    placeholder.style.setProperty('display', 'none');
    this.setAttribute('disabled', 'true');
  }

  /**
   * Reflow items based on available space within the list.
   * @param {HTMLElement} [lastVisibleElement] Optional element to place in last visible position
   */
  #reflowItems = (lastVisibleElement) => {
    const { defaultSlot, overflowSlot, moreSlot, list, placeholder } = this.#refs;

    this.#resizeObserver.disconnect();
    this.#mutationObserver.disconnect();

    // Avoid layout shifts while reflowing the list
    const { height } = this.firstElementChild?.getBoundingClientRect() ?? {};

    if (height) list.style.height = `${height}px`;
    list.style.setProperty('overflow', 'hidden');

    // Move all elements to the default slot so we can check which ones overflow
    this.#moveItemsToDefaultSlot();

    const elements = defaultSlot.assignedElements();

    // Make sure the "More" item and placeholder are hidden
    moreSlot.hidden = true;
    placeholder.hidden = true;

    // First, check if all the items fit
    const rootRect = list.getBoundingClientRect();

    // Store the initial dimensions for comparison later
    this.#lastDimensions = { width: Math.round(rootRect.width), height: Math.round(rootRect.height) };

    const getVisibleElements = () => elements.filter((el) => el.getBoundingClientRect().top <= rootRect.top);
    let visibleElements = getVisibleElements();

    // If not all items fit or we have a lastVisibleElement, let's calculate with "More" button
    if (visibleElements.length !== elements.length || lastVisibleElement) {
      // Putting the "More" item (and lastVisibleElement, if provided) at the start of the list lets us see which items will fit on the same row
      moreSlot.style.setProperty('order', '-1');
      moreSlot.hidden = false;
      moreSlot.style.setProperty('height', `${height}px`);

      if (lastVisibleElement) {
        lastVisibleElement.style.setProperty('order', '-1');
      }

      // Recalculate the visible elements
      visibleElements = getVisibleElements();

      // Reset the order
      moreSlot.style.removeProperty('order');
      if (lastVisibleElement) {
        lastVisibleElement.style.removeProperty('order');
      }

      // If we have a lastVisibleElement, ensure it's in the last visible position
      if (lastVisibleElement) {
        const visibleIndex = visibleElements.indexOf(lastVisibleElement);
        if (visibleIndex !== -1) {
          // Remove lastVisibleElement from its current position
          visibleElements.splice(visibleIndex, 1);
          // Add it to the end of visible elements
          visibleElements.push(lastVisibleElement);
        }
      }

      moreSlot.style.setProperty('height', 'auto');
    }

    const overflowingElements = elements.filter((element) => !visibleElements.includes(element));
    const [firstOverflowingElement] = overflowingElements;
    const hasOverflow = overflowingElements.length > 0;
    const placeholderWidth = firstOverflowingElement ? firstOverflowingElement.clientWidth : 0;

    // Move the elements to the correct slot
    for (const element of elements) {
      element.slot = overflowingElements.includes(element) ? overflowSlot.name : defaultSlot.name;
    }

    // If there are overflowing elements
    // Show more button and placeholder if needed
    moreSlot.hidden = !hasOverflow;

    if (hasOverflow) {
      // Set the width and height of the placeholder so the list can grow if there is space
      placeholder.style.width = `${placeholderWidth}px`;
      placeholder.hidden = false;
    }

    list.style.setProperty('counter-reset', `overflow-count ${overflowingElements.length}`);
    this.style.setProperty('--overflow-count', `${overflowingElements.length}`);
    list.style.removeProperty('overflow');

    // Check if the minimum-reached state should be updated
    hasOverflow && this.#updateMinimumReached(visibleElements);

    // Observe the list for changes in size
    this.#resizeObserver.observe(this);
    this.#mutationObserver.observe(this, { childList: true });
  };

  /**
   * @type {{
   *   defaultSlot: HTMLSlotElement;
   *   overflowSlot: HTMLSlotElement;
   *   moreSlot: HTMLSlotElement;
   *   overflow: HTMLElement;
   *   list: HTMLUListElement;
   *   placeholder: HTMLLIElement;
   * }}
   */
  #refs;

  /**
   * @type {ResizeObserver}
   */
  #resizeObserver = new ResizeNotifier(this.#handleChange);

  /**
   * @type {MutationObserver}
   */
  #mutationObserver = new MutationObserver(this.#handleChange);
}

if (!customElements.get('overflow-list')) {
  customElements.define('overflow-list', OverflowList);
}

// Function to calculate total height of header group children
function calculateHeaderGroupHeight(
  header = document.querySelector('#header-component'),
  headerGroup = document.querySelector('#header-group')
) {
  if (!headerGroup) return 0;

  let totalHeight = 0;
  const children = headerGroup.children;
  for (let i = 0; i < children.length; i++) {
    const element = children[i];
    if (element === header || !(element instanceof HTMLElement)) continue;
    totalHeight += element.offsetHeight;
  }
  return totalHeight;
}

/**
 * Initialize and maintain header height CSS variables.
 * This is critical for preventing layout shifts during page load.
 * There is a `ResizeObserver` and `MutationObserver` that kicks in post hydration in header.js
 * Note: header-group uses display: contents, so we must observe all children.
 */
(() => {
  const header = document.querySelector('header-component');

  // Early exit if no header - nothing to do
  if (!(header instanceof HTMLElement)) return;

  // Calculate initial height(s
  const headerHeight = header.offsetHeight;
  const headerGroupHeight = calculateHeaderGroupHeight(header);

  document.body.style.setProperty('--header-height', `${headerHeight}px`);
  document.body.style.setProperty('--header-group-height', `${headerGroupHeight}px`);
})();

/**
 * Updates CSS custom properties for transparent header offset calculation
 * Avoids expensive :has() selectors
 */
(() => {
  const header = document.querySelector('#header-component');
  const headerGroup = document.querySelector('#header-group');
  const hasHeaderSection = headerGroup?.querySelector('.header-section');
  if (!hasHeaderSection || !header?.hasAttribute('transparent')) {
    document.body.style.setProperty('--transparent-header-offset-boolean', '0');
    return;
  }

  const hasImmediateSection = hasHeaderSection.nextElementSibling?.classList.contains('shopify-section');

  const shouldApplyOffset = !hasImmediateSection ? '1' : '0';
  document.body.style.setProperty('--transparent-header-offset-boolean', shouldApplyOffset);
})();
