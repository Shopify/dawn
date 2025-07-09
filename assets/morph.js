import { Component } from '@theme/component';

/**
 * @typedef {Object} Options
 * @property {boolean} [childrenOnly] - Only update children
 * @property {(node: Node | undefined) => string|number|undefined} [getNodeKey] - Get node key for matching
 * @property {(oldNode: Node, newNode: Node) => void} [onBeforeUpdate] - Pre-update hook
 * @property {(node: Node) => void} [onAfterUpdate] - Post-update hook
 * @property {(oldNode: Node, newNode: Node) => boolean} [reject] - Reject a node from being morphed
 */

/**
 * The options for the morph
 * @type {Options}
 */
const MORPH_OPTIONS = {
  childrenOnly: true,
  reject(oldNode, newNode) {
    if (newNode.nodeType === Node.TEXT_NODE && newNode.nodeValue?.trim() === '') {
      return true;
    }

    if (
      newNode instanceof HTMLTemplateElement &&
      newNode.shadowRootMode === 'open' &&
      oldNode.parentElement &&
      newNode.parentElement &&
      oldNode.parentElement.tagName === newNode.parentElement.tagName &&
      oldNode.parentElement?.shadowRoot != null
    ) {
      // Ignore template elements of components that are already initialized
      return true;
    }

    if (newNode.nodeType === Node.COMMENT_NODE && newNode.nodeValue === 'shopify:rendered_by_section_api') {
      // Remove a comment node injected by the Section Rendering API in the Theme Editor
      return true;
    }

    return false;
  },
  onBeforeUpdate(oldNode, newNode) {
    if (oldNode instanceof Element && newNode instanceof Element) {
      const attributes = ['product-grid-view'];

      for (const attribute of attributes) {
        const oldValue = oldNode.getAttribute(attribute);
        const newValue = newNode.getAttribute(attribute);

        if (oldValue && oldValue !== newValue) {
          newNode.setAttribute(attribute, oldValue);
        }
      }

      // Special case for elements that need to keep their style
      const elements = ['floating-panel-component'];

      for (const element of elements) {
        const tagName = element.toUpperCase();
        if (oldNode.tagName === tagName && newNode.tagName === tagName) {
          const oldStyle = oldNode.getAttribute('style');

          if (oldStyle) newNode.setAttribute('style', oldStyle);
        }
      }

      // Preserve temporary view transition name
      if (oldNode instanceof HTMLElement && newNode instanceof HTMLElement && oldNode.style.viewTransitionName) {
        newNode.style.viewTransitionName = oldNode.style.viewTransitionName;
      }
    }
  },
  onAfterUpdate(node) {
    if (node instanceof Component) {
      queueMicrotask(() => node.updatedCallback());
    }
  },
};

/**
 * Morphs one DOM tree into another by comparing nodes and applying minimal changes
 * @param {Node} oldTree - The existing DOM tree
 * @param {Node | string} newTree - The new DOM tree to morph to
 * @param {Options} [options] - Configuration options
 * @returns {Node} The morphed DOM tree
 */
export function morph(oldTree, newTree, options = MORPH_OPTIONS) {
  if (!oldTree || !newTree) {
    throw new Error('Both oldTree and newTree must be provided');
  }

  if (typeof newTree === 'string') {
    const parsedNewTree = new DOMParser().parseFromString(newTree, 'text/html').body.firstChild;
    if (!parsedNewTree) {
      throw new Error('newTree string is not valid HTML');
    }
    newTree = parsedNewTree;
  }

  if (options.childrenOnly) {
    updateChildren(newTree, oldTree, options);
    return oldTree;
  }

  if (newTree.nodeType === 11) {
    throw new Error('newTree should have one root node (not a DocumentFragment)');
  }

  return walk(newTree, oldTree, options);
}

/**
 * Walk and morph a dom tree
 * @param {Node} newNode - The new node to morph to
 * @param {Node} oldNode - The old node to morph from
 * @param {Options} options - The options object
 * @returns {Node} The new node or the morphed old node
 */
function walk(newNode, oldNode, options) {
  // Skip morphing if there is no old or new node
  if (!oldNode) return newNode;
  if (!newNode) return oldNode;

  // Skip morphing if nodes are identical
  if (newNode.isSameNode?.(oldNode)) return oldNode;

  // Check node type and tag name first
  if (newNode.nodeType !== oldNode.nodeType) return newNode;
  if (newNode instanceof Element && oldNode instanceof Element) {
    // Skip morphing if the node is shopify-accelerated-checkout-cart https://shopify.dev/docs/storefronts/themes/pricing-payments/accelerated-checkout#implement-accelerated-checkout-buttons-on-cart
    if (oldNode.tagName === 'SHOPIFY-ACCELERATED-CHECKOUT-CART') return oldNode;

    if (newNode.tagName !== oldNode.tagName) return newNode;

    // Only check keys for elements, and only if both nodes have keys
    const newKey = getNodeKey(newNode, options);
    const oldKey = getNodeKey(oldNode, options);
    if (newKey && oldKey && newKey !== oldKey) return newNode;
  }

  // We can morph, update the node and its children
  if (
    oldNode instanceof Element &&
    oldNode.hasAttribute('data-skip-node-update') &&
    newNode instanceof Element &&
    newNode.hasAttribute('data-skip-node-update')
  ) {
    // This is a special case where we don't want to morph the node, but we want to morph the children
    updateChildren(newNode, oldNode, options);
  } else {
    updateNode(newNode, oldNode, options);
    updateChildren(newNode, oldNode, options);
  }

  options.onAfterUpdate?.(newNode);

  return oldNode;
}

/**
 * Core morphing function that updates attributes and special elements
 * @param {Node} newNode - Source node with desired state
 * @param {Node} oldNode - Target node to update
 * @param {Options} options - The options object
 */
function updateNode(newNode, oldNode, options) {
  options.onBeforeUpdate?.(oldNode, newNode);

  if (
    (newNode instanceof HTMLDetailsElement && oldNode instanceof HTMLDetailsElement) ||
    (newNode instanceof HTMLDialogElement && oldNode instanceof HTMLDialogElement)
  ) {
    if (!newNode.hasAttribute('declarative-open')) {
      newNode.open = oldNode.open;
    }
  }

  if (oldNode instanceof HTMLElement && newNode instanceof HTMLElement) {
    for (const attr of ['slot', 'sizes']) {
      const oldValue = oldNode.getAttribute(attr);
      const newValue = newNode.getAttribute(attr);

      if (oldValue !== newValue) {
        oldValue == null ? newNode.removeAttribute(attr) : newNode.setAttribute(attr, oldValue);
      }
    }
  }

  if (newNode instanceof Element && oldNode instanceof Element) {
    if (!oldNode.isEqualNode(newNode)) {
      copyAttributes(newNode, oldNode);
    }
  } else if (newNode instanceof Text || newNode instanceof Comment) {
    if (oldNode.nodeValue !== newNode.nodeValue) {
      oldNode.nodeValue = newNode.nodeValue;
    }
  }

  // Handle special elements
  if (newNode instanceof HTMLInputElement && oldNode instanceof HTMLInputElement) {
    updateInput(newNode, oldNode);
  } else if (newNode instanceof HTMLOptionElement && oldNode instanceof HTMLOptionElement) {
    updateAttribute(newNode, oldNode, 'selected');
  } else if (newNode instanceof HTMLTextAreaElement && oldNode instanceof HTMLTextAreaElement) {
    updateTextarea(newNode, oldNode);
  }
}

/**
 * Gets a node's key using the getNodeKey option if provided
 * @param {Node | undefined} node - The node to get the key from
 * @param {Options} [options] - The options object that may contain getNodeKey
 * @returns {string|number|undefined} The node's key if one exists
 */
function getNodeKey(node, options) {
  return options?.getNodeKey?.(node) ?? (node instanceof Element ? node.id : undefined);
}

/**
 * Updates a boolean attribute and its corresponding property on an element
 * @param {any} newNode - The new element
 * @param {any} oldNode - The existing element to update
 * @param {string} name - The name of the attribute/property to update
 */
function updateAttribute(newNode, oldNode, name) {
  if (newNode[name] !== oldNode[name]) {
    oldNode[name] = newNode[name];
    if (newNode[name] != null) {
      oldNode.setAttribute(name, '');
    } else {
      oldNode.removeAttribute(name);
    }
  }
}

/**
 * Copies attributes from a new node to an old node, handling namespaced attributes
 * @param {Element} newNode - The new node to copy attributes from
 * @param {Element} oldNode - The existing node to update attributes on
 */
function copyAttributes(newNode, oldNode) {
  const oldAttrs = oldNode.attributes;
  const newAttrs = newNode.attributes;

  // Update or add new attributes
  for (const attr of Array.from(newAttrs)) {
    const { name: attrName, namespaceURI: attrNamespaceURI, value: attrValue } = attr;
    const localName = attr.localName || attrName;

    if (attrName === 'src' || attrName === 'href' || attrName === 'srcset' || attrName === 'poster') {
      // Skip updating resource attributes when the value hasn't changed
      // to prevent unnecessary network requests
      if (oldNode.getAttribute(attrName) === attrValue) continue;
    }

    if (attrNamespaceURI) {
      const fromValue = oldNode.getAttributeNS(attrNamespaceURI, localName);
      if (fromValue !== attrValue) {
        oldNode.setAttributeNS(attrNamespaceURI, localName, attrValue);
      }
    } else {
      if (!oldNode.hasAttribute(attrName)) {
        oldNode.setAttribute(attrName, attrValue);
      } else {
        const fromValue = oldNode.getAttribute(attrName);
        if (fromValue !== attrValue) {
          if (attrValue === 'null' || attrValue === 'undefined') {
            oldNode.removeAttribute(attrName);
          } else {
            oldNode.setAttribute(attrName, attrValue);
          }
        }
      }
    }
  }

  // Remove old attributes not present in new node
  for (const attr of Array.from(oldAttrs)) {
    if (attr.specified === false) continue;

    const { name: attrName, namespaceURI: attrNamespaceURI } = attr;
    const localName = attr.localName || attrName;

    if (attrNamespaceURI) {
      if (!newNode.hasAttributeNS(attrNamespaceURI, localName)) {
        oldNode.removeAttributeNS(attrNamespaceURI, localName);
      }
    } else if (!newNode.hasAttribute(attrName)) {
      oldNode.removeAttribute(attrName);
    }
  }
}

/**
 * Updates special properties and attributes on input elements
 * Handles checked, disabled, indeterminate states and value
 * @param {HTMLInputElement} newNode - The new input element
 * @param {HTMLInputElement} oldNode - The existing input element to update
 */
function updateInput(newNode, oldNode) {
  const newValue = newNode.value;

  updateAttribute(newNode, oldNode, 'checked');
  updateAttribute(newNode, oldNode, 'disabled');

  // Handle indeterminate state (cannot be set via HTML attribute)
  if (newNode.indeterminate !== oldNode.indeterminate) {
    oldNode.indeterminate = newNode.indeterminate;
  }

  // Skip file inputs since they can't be changed programmatically
  if (oldNode.type === 'file') return;

  if (newValue !== oldNode.value) {
    oldNode.setAttribute('value', newValue);
    oldNode.value = newValue;
  }

  if (newValue === 'null') {
    oldNode.value = '';
    oldNode.removeAttribute('value');
  }

  if (!newNode.hasAttributeNS(null, 'value')) {
    oldNode.removeAttribute('value');
  } else if (oldNode.type === 'range') {
    // Update range input UI
    oldNode.value = newValue;
  }
}

/**
 * Updates the value of a textarea element
 * @param {HTMLTextAreaElement} newNode - The new textarea element
 * @param {HTMLTextAreaElement} oldNode - The existing textarea element to update
 */
function updateTextarea(newNode, oldNode) {
  const newValue = newNode.value;
  if (newValue !== oldNode.value) {
    oldNode.value = newValue;
  }

  const firstChild = oldNode.firstChild;
  if (firstChild?.nodeType === Node.TEXT_NODE) {
    if (newValue === '' && firstChild.nodeValue === oldNode.placeholder) {
      return;
    }
    firstChild.nodeValue = newValue;
  }
}

/**
 * Update the children of elements
 * @param {Node} newNode - The new node to update children on
 * @param {Node} oldNode - The existing node to update children on
 * @param {Options} options - The options object
 */
function updateChildren(newNode, oldNode, options) {
  if (
    oldNode instanceof Element &&
    oldNode.hasAttribute('data-skip-subtree-update') &&
    newNode instanceof Element &&
    newNode.hasAttribute('data-skip-subtree-update')
  ) {
    return;
  }

  let oldChild, newChild, morphed, oldMatch;
  let offset = 0;

  for (let i = 0; ; i++) {
    oldChild = oldNode.childNodes[i];
    newChild = newNode.childNodes[i - offset];

    // Both nodes are empty, do nothing
    if (!oldChild && !newChild) {
      break;
    }

    // There is no new child, remove old
    if (!newChild) {
      oldChild && oldNode.removeChild(oldChild);
      i--;
      continue;
    }

    // There is no old child, add new
    if (!oldChild) {
      oldNode.appendChild(newChild);
      offset++;
      continue;
    }

    // Both nodes are the same, morph
    if (same(newChild, oldChild, options)) {
      morphed = walk(newChild, oldChild, options);
      if (morphed !== oldChild) {
        oldNode.replaceChild(morphed, oldChild);
        offset++;
      }
      continue;
    }

    if (options.reject?.(oldChild, newChild)) {
      newNode.removeChild(newChild);
      i--;
      continue;
    }

    // Try to find a matching node to reorder
    oldMatch = null;
    for (let j = i; j < oldNode.childNodes.length; j++) {
      const potentialOldNode = oldNode.childNodes[j];

      if (potentialOldNode && same(potentialOldNode, newChild, options)) {
        oldMatch = potentialOldNode;
        break;
      }
    }

    if (oldMatch) {
      morphed = walk(newChild, oldMatch, options);
      if (morphed !== oldMatch) offset++;
      oldNode.insertBefore(morphed, oldChild);
    } else if (!getNodeKey(newChild, options) && !getNodeKey(oldChild, options)) {
      // Safe to morph in-place if neither has a key
      morphed = walk(newChild, oldChild, options);
      if (morphed !== oldChild) {
        oldNode.replaceChild(morphed, oldChild);
        offset++;
      }
    } else {
      // Insert the node if we couldn't morph or find a match
      oldNode.insertBefore(newChild, oldChild);
      offset++;
    }
  }
}

/**
 * Check if two nodes are the same
 * @param {Node} a - The first node
 * @param {Node} b - The second node
 * @param {Options} options - The options object
 * @returns {boolean} True if the nodes are the same, false otherwise
 */
function same(a, b, options) {
  // If node types don't match, they're not the same
  if (a.nodeType !== b.nodeType) return false;

  // For elements, check tag name first
  if (a.nodeType === Node.ELEMENT_NODE) {
    if (a instanceof Element && b instanceof Element && a.tagName !== b.tagName) return false;

    // Only compare keys if both nodes have them
    const aKey = getNodeKey(a, options);
    const bKey = getNodeKey(b, options);
    if (aKey && bKey && aKey !== bKey) return false;
  }

  // For text/comment nodes, compare content
  if (a.nodeType === Node.TEXT_NODE && b.nodeType === Node.TEXT_NODE)
    // Trim whitespace to avoid false negatives
    return a.nodeValue?.trim() === b.nodeValue?.trim();
  if (a.nodeType === Node.COMMENT_NODE && b.nodeType === Node.COMMENT_NODE) return a.nodeValue === b.nodeValue;

  // If we get here and nodes are elements with same tag (and compatible keys), they're the same
  return true;
}
