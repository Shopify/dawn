# How to use the Component Framework

## Declarative Event Handling

Attach event listeners directly in HTML using `on:event="methodName"` (in camelCase).

**HTML:**
To differentiate between a Web Component that extends this and one that extends `HTMLElement`, use the naming convention of `*-component` when creating ones that extend `Component`.

```html
<my-component>
  <button on:click="/handleSubmit">Submit</button>
</my-component>
```

**JavaScript:**

```javascript
import { Component } from '@theme/component';

class MyComponent extends Component {
  handleSubmit(event) {
    // Handle the click event
    console.log('Submit button clicked', event);
  }
}
```

> [!NOTE]
> By default, the `on:event` handlers will look up the tree for the closest instance of a `Component` and try to trigger an instance method with the provided name.

Optionally, you can supply an `#identifier` to target a specific component outside of the current tree, or any [selector](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#selectors) to target another component in the current tree that is not the closest component:

```html
<cart-component id="cart"></cart-component>

<collection-component>
  <product-component>
    <button on:click="#cart/add">Add to cart</button>
    <button on:click="collection-component/loadMore">Load more results</button>
  </product-component>
</collection-component>
```

You may also provide arguments that should be passed to the handler of your instance method, for example, you can pass the current index of a list of items that has been clicked:

```html
<my-component>
  <ul>
    <li on:click="/select/1">Item 1</li>
    <li on:click="/select/2">Item 2</li>
    <li on:click="/select/3">Item 3</li>
  </ul>
</my-component>
```

```javascript
import { Component } from 'components';

class MyComponent extends Component {
  select(index, event) {
    // Handle the click event
    console.log(`Selected item ${index}`, event);
  }
}
```

Any arguments can be either:

- A string
- A number
- A boolean
- URL Search Params that can be coerced to a string, number or boolean

```html
<my-component>
  <ul>
    <li on:click="/select?index=1&name=foo&enabled=true">Foo</li>
    <li on:click="/select?index=2&name=bar">Bar</li>
  </ul>
</my-component>
```

```js
class MyComponent extends Component {
  select(data) {
    console.log(data); // {index: 1, name: 'foo', enabled: true}
  }
}
```

## Reference Management

Use `ref="elementName"` in HTML to reference DOM elements. References are accessible via `this.refs.elementName`.

**HTML:**

```html
<my-component>
  <input
    type="text"
    ref="userName"
  />
  <button ref="submitButton">Submit</button>
  <div
    ref="errorContainer"
    class="error"
  ></div>
  {% if some_condition %}
  <span ref="conditionalElement">This ref can be undefined</span>
  {% endif %}
</my-component>
```

**JavaScript:**

To ensure type safety, define your refs using JSDoc.

```javascript
import { Component } from '@theme/component';

/**
 * @typedef {Object} MyComponentRefs
 * @property {HTMLInputElement} userName - The user name input field
 * @property {HTMLButtonElement} submitButton - The submit button
 * @property {HTMLDivElement} errorContainer - The error message container
 * @property {HTMLSpanElement | undefined} conditionalElement - A conditional element
 */

/**
 * @extends {Component<MyComponentRefs>}
 */
class MyComponent extends Component {
  connectedCallback() {
    super.connectedCallback();

    const { userName, submitButton, errorContainer, conditionalElement } = this.refs;

    // Your editor will know the exact type of each ref
    userName.value = 'Default value';
    submitButton.disabled = true;
    errorContainer.hidden = true;

    if (conditionalElement) {
      conditionalElement.hidden = true;
    }
  }
}
```

For array refs, use the array syntax in both HTML and types:

**HTML:**

```html
<my-component>
  <ul>
    <li ref="listItems[]">Item 1</li>
    <li ref="listItems[]">Item 2</li>
    <li ref="listItems[]">Item 3</li>
  </ul>
</my-component>
```

**JavaScript:**

```javascript
/**
 * @typedef {Object} ListComponentRefs
 * @property {HTMLLIElement[]} listItems - The list item elements
 */

/**
 * @extends {Component<ListComponentRefs>}
 */
class ListComponent extends Component {
  highlightItems() {
    // TypeScript knows this is an array of HTMLLIElement
    for (const item of this.refs.listItems) {
      item.style.backgroundColor = 'yellow';
    }
  }
}
```

The value of `this.refs` is automatically updated when:

- Elements with `ref` attributes are added or removed
- The value of a `ref` attribute changes

This ensures `this.refs` always reflects the current state of the DOM without manually needing to keep refs up to date. An example of how this can be useful is when replacing the contents of a component with the section rendering API.

### Best Practices for Refs

1. **Type Safety**

   - Always define a refs interface for your component
   - Default to using `HTMLElement` for refs so as to not couple your component to a specific DOM structure
   - Use specific HTML element types when appropriate (e.g., `HTMLInputElement` instead of `HTMLElement` when you need to access properties like `value` or `checked`)
   - Document each ref with a clear description

2. **Naming**

   - Use descriptive names that indicate the purpose of the element
   - Follow a consistent naming convention across components
   - Use array syntax (`[]`) for multiple elements of the same type

3. **Organization**

   - Group related refs together in the interface
   - Keep ref names consistent with their HTML counterparts
   - Document any assumptions about the ref's state or content

4. **Usage**

   - Access refs only after `connectedCallback` is called
   - Check for existence of optional refs before using them
   - Use proper type guards when working with dynamic refs
   - Never assign refs to instance properties (e.g., avoid `this.foo = this.refs.foo`) as this can create stale references that won't be updated when refs are updated

     ```javascript
     class MyComponent extends Component {
       // ❌ Don't do this:
       connectedCallback() {
         // This creates a stale reference that won't update
         this.submitButton = this.refs.submitButton;
       }

       // ✅ Do this instead:
       handleClick() {
         // Always access refs directly from this.refs
         this.refs.submitButton.disabled = true;
       }
     }
     ```

   - The `this.refs` object is automatically kept in sync with the DOM
   - Assigning refs to instance properties creates stale references that won't update when the DOM changes

## Examples

### Example: Component with Event Handler and Ref

**HTML Template:**

```html
<my-component>
  <template shadowrootmode="open">
    <p ref="messageContainer">Hello, World!</p>
    <button on:click="/changeMessage">Change Message</button>
  </template>
</my-component>
```

**Component Definition:**

```javascript
class MyComponent extends Component {
  changeMessage() {
    this.refs.messageContainer.innerText = 'Message Changed!';
  }
}

customElements.define('my-component', MyComponent);
```

In this example:

- The `div` with `ref="messageContainer"` is accessible via `this.refs.messageContainer`.
- The `button` with `on:click="/changeMessage"` calls the `changeMessage` method when clicked.

### Example: Handling Multiple References

**HTML:**

```html
<ul>
  <li ref="listItems[]">Item 1</li>
  <li ref="listItems[]">Item 2</li>
  <li ref="listItems[]">Item 3</li>
</ul>
<button on:click="/highlightItems">Highlight Items</button>
```

**JavaScript:**

```javascript
class ListComponent extends Component {
  highlightItems() {
    for (const item of this.refs.listItems) {
      item.style.backgroundColor = 'yellow';
    }
  }
}
```

- Multiple elements with `ref="listItems[]"` are collected into an array of nodes accessible via `this.refs.listItems`.
- The method `highlightItems` is called when the button is clicked.

## Benefits

- **Reduced Boilerplate**: No need to manually add event listeners or query DOM elements.
- **Improved Readability**: HTML attributes clearly describe event handlers and references.
- **Maintainability**: Automatic updates to references reduce the risk of stale references.
- **Consistency**: Using a base `Component` class standardizes component structure.

### Required Refs

You can specify which refs are required for your component to function properly using the `requiredRefs` property. If any of these refs are not found when the component is connected or updated, a `MissingRefError` will be thrown.

**JavaScript:**

```javascript
/**
 * @typedef {Object} FormComponentRefs
 * @property {HTMLInputElement} emailInput - The email input field
 * @property {HTMLButtonElement} submitButton - The submit button
 * @property {HTMLDivElement} [errorContainer] - Optional error container
 */

/**
 * @extends {Component<FormComponentRefs>}
 */
class FormComponent extends Component {
  // Specify which refs must be present
  requiredRefs = ['emailInput', 'submitButton'];

  connectedCallback() {
    super.connectedCallback();

    // No need to check if these exist - they're required
    this.refs.emailInput.addEventListener('input', this.validate);
    this.refs.submitButton.disabled = true;

    // Optional ref should still be checked
    if (this.refs.errorContainer) {
      this.refs.errorContainer.hidden = true;
    }
  }
}
```

Best practices for required refs:

- Default to optional refs, only mark refs as required if they are essential for your component to function
- Document optional refs in your type definitions using the optional property syntax (`[propName]`)
- Required refs should be reflected in both the `requiredRefs` array and your type definitions
- Be careful not to mark refs as required if they are blocks added by merchants in the theme editor, as these may not always be present if the merchant removes all blocks.
