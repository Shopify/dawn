# JavaScript Best Practices

## Overview

Our JavaScript codebase follows modern best practices with a focus on maintainability, type safety, and performance. We use JSDoc annotations and strict type checking to ensure code quality, enforced through our `jsconfig.json` configuration.

## Core Principles

- Ensure separation of concerns when authoring components
- Write self-documenting code with clear intent
- Ensure type safety through JSDoc annotations
- Follow consistent patterns and extract common patterns into reusable utility functions
- Handle errors and edge cases explicitly

## Best Practices

### Separation of concerns

Components should be loosely coupled and have minimal direct knowledge of each other. They should have clearly defined communication paths, ensuring flexibility, interchangeability, and maintainability.

#### Data flow

- Parent components may have direct knowledge about their children and invoke methods on them when appropriate.
- Child components, however, should never directly reference or invoke methods on specific parent components.
- Instead, child components should communicate upwards by emitting custom events, which parent components can listen for and respond to.
- This event-based approach ensures that parent components remain interchangeable and maintain clean separation between parent and child components.

##### Parents may trigger public methods on child components
Expose public methods that parent components can trigger on child components:

```js
class Tab extends Component {
  select() {
    this.refs.details.open = true;
  }
}

class Tabs extends Component {
  connectedCallback() {
    super.connectedCallback();

    const {tabs} = this.refs;
    const [firstTab] = this.tabs;

    // Do this ✅
    firstTab?.select();

    // Not this ❌
    firstTab?.refs.details.open = true;
  }
}
```

##### Children should emit custom events to communicate with parent components
Fire custom events that parent components can listen to if you need to make something happen in a parent component in response to something happening in a child component.

**Do this ✅**

```js
class TabSelectEvent extends CustomEvent {
  static eventName = 'tab:select';
}

class Tab extends Component {
  select() {
    this.refs.details.open = true;

    this.emit(new TabSelectEvent())
  }
}

class ProductDetails extends Component {
  connectedCallback() {
    super.connectedCallback();

    this.addEventListener(TabSelectEvent.eventName, this.#handleTabSelect)
  }

  #handleTabSelect = () => {
    this.doStuff();
  }
}
```

**Not this ❌**

```js
class Tab extends Component {
  select() {
    this.refs.details.open = true;

    const parentProductDetails = this.closest('product-details-component');

    // Do not do this, it couples the generic Tab block to a specialized component
    parentProductDetails?.doStuff();
  }
}
```

### Classes and Custom Elements

Define classes with clear interfaces and proper documentation:

```javascript
/**
 * @typedef {Object} ComponentRefs
 * @property {HTMLButtonElement} submitButton
 * @property {HTMLInputElement} searchInput
 *
 * @extends {Component<ComponentRefs>}
 */
class MyComponent extends Component {
  /** @type {number|null} */
  #timeoutId = null;

  /** @type {AbortController|null} */
  #abortController = null;
}
```

### Class Properties

- Use private fields (with `#` prefix) for internal implementation details
- Keep public API surface minimal and well-documented
- Initialize properties with appropriate default values

```javascript
class MyComponent extends HTMLElement {
  /** @type {HTMLElement|null} */
  #container = null;

  /** @type {number|undefined} */
  #resizeTimeout;

  static get observedAttributes() {
    return ['disabled', 'loading'];
  }
}
```

### Event Handling

Follow consistent patterns for event handling:

```javascript
/**
 * @param {CustomEvent} event
 */
handleCustomEvent(event) {
  // Early return for invalid targets
  if (!(event.target instanceof HTMLElement)) return;

  // Prevent default only when necessary
  event.preventDefault();

  // Handle the event
  this.#processEvent(event);
}
```

### DOM Operations

Be defensive when working with the DOM:

```javascript
/**
 * @returns {HTMLElement}
 * @throws {Error} If container element is not found
 */
getContainer() {
  const container = this.querySelector('.container');
  if (!(container instanceof HTMLElement)) {
    throw new Error('Container element not found');
  }

  return container;
}
```

### Error Handling

- Use descriptive error messages
- Handle async errors with try/catch
- Clean up resources in error cases

```javascript
async function loadData() {
  const controller = new AbortController();

  try {
    const response = await fetch(url, {
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Request was cancelled');
    } else {
      throw error;
    }
  } finally {
    controller.abort();
  }
}
```

### URL handling

Always use the built-in `URL` and `URLSearchParams` objects instead of string interpolation when manipulating URLs.

#### Creating and modifying URLs

**Do this ✅**

```javascript
const url = new URL('https://shop.example.com');
url.pathname = '/products';
url.searchParams.set('sort', 'price-asc');
```

**Not this ❌**

```javascript
const pathname = 'products';
const url = `https://shop.example.com/${products}?sort=${sort}`;
```

#### Working with URL parameters

**Do this ✅**

```javascript
const params = new URLSearchParams(location.search);
const page = Number(params.get('page')) || 1;

function updateFilters(filters) {
  const url = new URL(location.href);

  for (const [key, value] of Object.entries(filters)) {
    url.searchParams.set(key, value);
  });

  return url;
}
```

**Not this ❌**

```javascript
const queryString = location.search;
const pageMatch = queryString.match(/page=(\d+)/);

let page = 1;

if (pageMatch) {
  page = Number(pageMatch[1]);
}
```

#### History navigation with URLs

**Do this ✅**

```javascript
function navigate(filter, value) {
  const url = new URL(location.href);
  const urlParameters = url.searchParams;

  urlParameters.set(filter, value);

  history.pushState({ urlParameters: urlParameters.toString() }, '', url.toString());
  updateUI(urlParameters);
}

window.addEventListener('popstate', (e) => {
  const params = new URLSearchParams(e.state?.urlParameters ? e.state.urlParameters : location.search)
  updateUI(params);
});
```

**Not this ❌**

```javascript
function navigate(filter, value) {
  let newUrl = location.pathname;
  const params = new URLSearchParams(location.search);

  params.set(filter, value);

  if (params.toString()) {
    newUrl += '?' + params.toString();
  }

  history.pushState({ filter, value }, '', newUrl);
}
```

#### Relative URL resolution

**Do this ✅**

```javascript
const assetUrl = new URL('../assets/image.jpg', location.href).href;
```

**Not this ❌**

```javascript
const basePath = location.href.substring(0, location.href.lastIndexOf('/'));
const assetUrl = `${basePath}/../assets/image.jpg`;
```

### Performance

- Use AbortController for cancellable operations
- Debounce expensive operations
- Clean up event listeners and timers

```javascript
class MyComponent extends Component {
  constructor() {
    super();
    this.#debouncedResize = debounce(this.#handleResize, 150);
  }

  connectedCallback() {
    window.addEventListener('resize', this.#debouncedResize);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.#debouncedResize);
  }
}
```

### Type Safety

- Use JSDoc annotations for type information
- Add type guards for runtime safety
- Define interfaces for complex objects

```javascript
/**
 * @typedef {Object} Options
 * @property {boolean} [childrenOnly]
 * @property {(node: Node) => void} [onAfterUpdate]
 */

/**
 * @param {Options} options
 * @returns {void}
 */
function initialize(options) {
  // Implementation
}
```

#### Basic Types

Use JSDoc to document parameters, return types, and properties:

```javascript
/**
 * @type {string} The user's name
 */
const username = 'John';

/**
 * @type {number[]} List of user IDs
 */
const userIds = [1, 2, 3];

/**
 * @type {Map<string, User>}
 */
const userMap = new Map();
```

#### Function Documentation

Document functions with parameter types, return types, and descriptions:

```javascript
/**
 * Calculates the total price including tax
 * @param {number} price - The base price
 * @param {number} taxRate - The tax rate (decimal)
 * @param {Object} [options] - Optional configuration
 * @param {boolean} [options.includeShipping=false] - Whether to include shipping
 * @returns {number} The total price with tax
 * @throws {Error} If price or taxRate is negative
 */
function calculateTotal(price, taxRate, options = {}) {
  if (price < 0 || taxRate < 0) {
    throw new Error('Price and tax rate must be non-negative');
  }
  // Implementation
}
```

#### Class Documentation

Document classes with their properties, methods, and type parameters:

```javascript
/**
 * Represents a shopping cart
 * @template T The type of items in the cart
 */
class Cart {
  /**
   * @param {string} userId - The user's ID
   * @param {T[]} [initialItems=[]] - Initial items in the cart
   */
  constructor(userId, initialItems = []) {
    /** @private @type {string} */
    this.userId = userId;

    /** @private @type {T[]} */
    this.items = initialItems;
  }

  /**
   * Adds an item to the cart
   * @param {T} item - The item to add
   * @fires ShoppingCart#itemAdded
   */
  addItem(item) {
    this.items.push(item);
  }
}
```

#### Custom Types

Define custom types using typedef:

```javascript
/**
 * @typedef {Object} User
 * @property {string} id - The user's unique ID
 * @property {string} name - The user's full name
 * @property {string} [email] - The user's email (optional)
 */

/**
 * @typedef {Object} ApiResponse
 * @property {number} status - HTTP status code
 * @property {string} message - Response message
 * @property {User[]} data - Array of user objects
 */

/**
 * Fetches users from the API
 * @returns {Promise<ApiResponse>}
 */
async function fetchUsers() {
  // Implementation
}
```

#### Event Documentation

Document custom events and their detail types:

```javascript
/**
 * @typedef {Object} AddToCartDetail
 * @property {string} productId - The ID of the product
 * @property {number} quantity - The quantity added
 *
 * @typedef {CustomEvent<AddToCartDetail>} AddToCartEvent
 */

class ProductCard extends HTMLElement {
  /**
   * Dispatches an add to cart event
   * @fires {AddToCartEvent} addtocart
   */
  addToCart() {
    this.dispatchEvent(
      new CustomEvent('addtocart', {
        detail: {
          productId: this.dataset.productId,
          quantity: 1,
        },
        bubbles: true,
      })
    );
  }
}
```

## Benefits

1. Improved code maintainability and readability
2. Better error detection during development
3. Enhanced IDE support and developer experience
4. More resilient code in production
