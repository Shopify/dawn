import { requestIdleCallback } from '@theme/utilities';

/**
 * @typedef {Record<string, Element | Element[] | undefined>} Refs
 */

/**
 * @template {Refs} T
 * @typedef {T & Refs} RefsType
 */

/**
 * Base class that powers our custom web components.
 *
 * Manages references to child elements with `ref` attributes and sets up mutation observers to keep
 * the refs updated when the DOM changes. Also handles declarative event listeners using.
 *
 * @template {Refs} [T=Refs]
 * @extends {DeclarativeShadowElement}
 */
export class Component extends DeclarativeShadowElement {
  /**
   * An object holding references to child elements with `ref` attributes.
   *
   * @type {RefsType<T>}
   */
  refs = /** @type {RefsType<T>} */ ({});

  /**
   * An array of required refs. If a ref is not found, an error will be thrown.
   *
   * @type {string[] | undefined}
   */
  requiredRefs;

  /**
   * Gets the root node of the component, which is either its shadow root or the component itself.
   *
   * @returns {(ShadowRoot | Component<T>)[]} The root nodes.
   */
  get roots() {
    return this.shadowRoot ? [this, this.shadowRoot] : [this];
  }

  /**
   * Called when the element is connected to the document's DOM.
   *
   * Initializes event listeners and refs.
   */
  connectedCallback() {
    super.connectedCallback();
    registerEventListeners();

    this.#updateRefs();

    requestIdleCallback(() => {
      for (const root of this.roots) {
        this.#mutationObserver.observe(root, {
          childList: true,
          subtree: true,
          attributes: true,
          attributeFilter: ['ref'],
          attributeOldValue: true,
        });
      }
    });
  }

  /**
   * Called when the element is re-rendered by the Section Rendering API.
   */
  updatedCallback() {
    this.#mutationObserver.takeRecords();
    this.#updateRefs();
  }

  /**
   * Called when the element is disconnected from the document's DOM.
   *
   * Disconnects the mutation observer.
   */
  disconnectedCallback() {
    this.#mutationObserver.disconnect();
  }

  /**
   * Updates the `refs` object by querying all descendant elements with `ref` attributes and storing references to them.
   *
   * This method is called to keep the `refs` object in sync with the DOM.
   */
  #updateRefs() {
    const refs = /** @type any */ ({});
    const elements = this.roots.reduce((acc, root) => {
      for (const element of root.querySelectorAll('[ref]')) {
        if (!this.#isDescendant(element)) continue;
        acc.add(element);
      }

      return acc;
    }, /** @type {Set<Element>} */ (new Set()));

    for (const ref of elements) {
      const refName = ref.getAttribute('ref') ?? '';
      const isArray = refName.endsWith('[]');
      const path = isArray ? refName.slice(0, -2) : refName;

      if (isArray) {
        const array = Array.isArray(refs[path]) ? refs[path] : [];

        array.push(ref);
        refs[path] = array;
      } else {
        refs[path] = ref;
      }
    }

    if (this.requiredRefs?.length) {
      for (const ref of this.requiredRefs) {
        if (!(ref in refs)) {
          throw new MissingRefError(ref, this);
        }
      }
    }

    this.refs = /** @type {RefsType<T>} */ (refs);
  }

  /**
   * MutationObserver instance to observe changes in the component's DOM subtree and update refs accordingly.
   *
   * @type {MutationObserver}
   */
  #mutationObserver = new MutationObserver((mutations) => {
    if (
      mutations.some(
        (m) =>
          (m.type === 'attributes' && this.#isDescendant(m.target)) ||
          (m.type === 'childList' && [...m.addedNodes, ...m.removedNodes].some(this.#isDescendant))
      )
    ) {
      this.#updateRefs();
    }
  });

  /**
   * Checks if a given node is a descendant of this component.
   *
   * @param {Node} node - The node to check.
   * @returns {boolean} True if the node is a descendant of this component.
   */
  #isDescendant = (node) => getClosestComponent(getAncestor(node)) === this;
}

/**
 * Get the ancestor of a given node.
 *
 * @param {Node} node - The node to get the ancestor of.
 * @returns {Node | null} The ancestor of the node or null if none is found.
 */
function getAncestor(node) {
  if (node.parentNode) return node.parentNode;

  const root = node.getRootNode();
  if (root instanceof ShadowRoot) return root.host;

  return null;
}

/**
 * Recursively finds the closest ancestor that is an instance of `Component`.
 *
 * @param {Node | null} node - The starting node to search from.
 * @returns {HTMLElement | null} The closest ancestor `Component` instance or null if none is found.
 */
function getClosestComponent(node) {
  if (!node) return null;
  if (node instanceof Component) return node;
  if (node instanceof HTMLElement && node.tagName.toLowerCase().endsWith('-component')) return node;

  const ancestor = getAncestor(node);
  if (ancestor) return getClosestComponent(ancestor);

  return null;
}

/**
 * Initializes the event listeners for custom event handling.
 *
 * Sets up event listeners for specified events and delegates the handling of those events
 * to methods defined on the closest `Component` instance, based on custom attributes.
 */
let initialized = false;

function registerEventListeners() {
  if (initialized) return;
  initialized = true;

  const events = ['click', 'change', 'select', 'focus', 'blur', 'submit', 'input', 'keydown', 'keyup', 'toggle'];
  const shouldBubble = ['focus', 'blur'];
  const expensiveEvents = ['pointerenter', 'pointerleave'];

  for (const eventName of [...events, ...expensiveEvents]) {
    const attribute = `on:${eventName}`;

    document.addEventListener(
      eventName,
      (event) => {
        const element = getElement(event);

        if (!element) return;

        const proxiedEvent =
          event.target !== element
            ? new Proxy(event, {
                get(target, property) {
                  if (property === 'target') return element;

                  const value = Reflect.get(target, property);

                  if (typeof value === 'function') {
                    return value.bind(target);
                  }

                  return value;
                },
              })
            : event;

        const value = element.getAttribute(attribute) ?? '';
        let [selector, method] = value.split('/');
        // Extract the last segment of the attribute value delimited by `?` or `/`
        // Do not use lookback for Safari 16.0 compatibility
        const matches = value.match(/([\/\?][^\/\?]+)([\/\?][^\/\?]+)$/);
        const data = matches ? matches[2] : null;
        const instance = selector
          ? selector.startsWith('#')
            ? document.querySelector(selector)
            : element.closest(selector)
          : getClosestComponent(element);

        if (!(instance instanceof Component) || !method) return;

        method = method.replace(/\?.*/, '');

        const callback = /** @type {any} */ (instance)[method];

        if (typeof callback === 'function') {
          try {
            /** @type {(Event | Data)[]} */
            const args = [proxiedEvent];

            if (data) args.unshift(parseData(data));

            callback.call(instance, ...args);
          } catch (error) {
            console.error(error);
          }
        }
      },
      { capture: true }
    );
  }

  /** @param {Event} event */
  function getElement(event) {
    const target = event.composedPath?.()[0] ?? event.target;

    if (!(target instanceof Element)) return;

    if (target.hasAttribute(`on:${event.type}`)) {
      return target;
    }

    if (expensiveEvents.includes(event.type)) {
      return null;
    }

    return event.bubbles || shouldBubble.includes(event.type) ? target.closest(`[on\\:${event.type}]`) : null;
  }
}

/**
 * Parses a string to extract data based on a delimiter.
 *
 * @param {string} str - The string to parse.
 * @returns {Object|Array<string|number>|string} The parsed data.
 */
function parseData(str) {
  const delimiter = str[0];
  const data = str.slice(1);

  return delimiter === '?'
    ? Object.fromEntries(
        Array.from(new URLSearchParams(data).entries()).map(([key, value]) => [key, parseValue(value)])
      )
    : parseValue(data);
}

/**
 * @typedef {Object|Array<string|number>|string} Data
 */

/**
 * Parses a string value to its appropriate type.
 *
 * @param {string} str - The string to parse.
 * @returns {Data} The parsed value.
 */
function parseValue(str) {
  if (str === 'true') return true;
  if (str === 'false') return false;

  const maybeNumber = Number(str);
  if (!isNaN(maybeNumber) && str.trim() !== '') return maybeNumber;

  return str;
}

/**
 * Throws a formatted error when a required ref is not found in the component.
 */
class MissingRefError extends Error {
  /**
   * @param {string} ref
   * @param {Component} component
   */
  constructor(ref, component) {
    super(`Required ref "${ref}" not found in component ${component.tagName.toLowerCase()}`);
  }
}
