# Using Shadow DOM with Templates and Slots

TL;DR

We use shadow DOM for [template and slot technology](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots) to allow the browser to render a component's content in a different order than Liquid templates.

Style encapsulation isn't our goal - you typically want to expose as much to the light DOM as possible. Rule of thumb: use Shadow DOM for content layout containers, and expose everything else to light DOM.

Render Shadow DOM declaratively, with an imperative fallback for Theme Editor re-rendering.

## Why We Use Slots

Some custom elements create a [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) with template slots. Currently, the [tabs block](https://github.com/Shopify/horizon/blob/main/blocks/tabs.liquid) uses shadow DOM to manage their internals.

Templates and slots are useful when we want the browser to present markup in a different order than how Liquid templates or blocks would render it. For example, a [tablist component](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) would typically be created in the Theme Editor with each tab and tabpanel together in separate blocks. (See Google's web.dev: [HowTo Components – howto-tabs](https://web.dev/articles/components-howto-tabs))

In theme development, looping over the blocks would produce:

```html
# loop for blocks/tab.liquid

{% for block in block.blocks %}
 {% render block %}
{% endfor %}

# block 1

<button>Size guide<button>
<tab-panel>Table on T-shirt sizing</tab-panel>

# block 2
<button>Care instructions<button>
<tab-panel>How to wash the clothing</tab-panel>
```

However, we want all the label elements to be rendered together, and all the content elements to be rendered within another container below.  A for-loop over an array of blocks can’t produce the following on its own:

```html
<div role="tablist">
 <button>Size guide<button>
 <button>Care instructions<button>
</div>

<div class="tab-panels">
  <tab-panel>Table on T-shirt sizing</tab-panel>
  <tab-panel>How to wash the clothing</tab-panel>
</div>
```

The shadow DOM allows us to make a template with the intended final render and place content in slot elements.

```html
<custom-tablist>
  <template shadowrootmode="open">
    <div role="tablist">
      <slot name="tabs"></slot>
    </div>
    <div class="tab-panels">
      <slot name="tab-panel"></slot>
    </div>
  </template>

# loop for blocks/tab.liquid

  {% for block in block.blocks %}
    {% render block %}
  {% endfor %}

</custom-tablist>
```

### Use declarative shadow DOM with an imperative fallback

Write custom elements with [declarative shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM#declarative_shadow_dom). This approach doesn't require custom JS to upgrade the component and attach the shadow DOM - the HTML parser handles this.

However, declarative shadow DOM only works during initial HTML parsing. When the Theme Editor replaces the web component during an inline section or block update, the shadow DOM won't be re-attached. To handle this, your web component should include an **imperative** method to attach the shadow DOM during construction. Use the `DeclarativeShadowElement` class as a base for your component, which is used to ensure items with a declarative shadow DOM get it re-attached.

```js
class DeclarativeShadowElement extends HTMLElement {
  constructor() {
    super();
    if (!this.shadowRoot) {
      const shadow = this.attachShadow({ mode: 'open' });
      const template = this.querySelector('template');
      shadow.append(template.content.cloneNode(true));
    }
  }
}
```

In the Theme Editor update, you may see a flash of layout shift because the component is re-rendered from a non-blocking script, but this will not happen on storefront since the declarative shadow DOM is used.

### Handling Style Encapsulation

While style encapsulation is a common Shadow DOM benefit, it's **not** our primary goal. We want merchants to easily style components with custom CSS, whether through the Theme Editor or file modifications.

Elements in the shadow root can be styled:

- From within shadow DOM using a style block, external stylesheet link, or custom properties
- From the light DOM using custom properties that the shadow DOM inherits

Tip: Assign theme settings to custom properties on the custom element to allow inheritance by both shadow DOM and light DOM elements.

```html
<custom-element
  style={
    --padding: {{ section.settings.padding }}px;
    --color: {{ section.settings.color }};
  }
>
  <template shadowrootmode="open">
    <!-- content in shadow DOM -->
  </template>

  <!-- content in light DOM -->
  <div slot="name">...</div>

</custom-element>
```

### Handling JavaScript Encapsulation

The shadow DOM is [encapsulated from JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM#encapsulation_from_javascript). The `document.querySelector` calls won't reach elements in the shadow DOM. Similarly, `document.activeElement` won't return an active element in the Shadow DOM. 

However, your scripts can reference the shadow DOM if the `shadowrootmode` is "open" and you first query the shadow host element's `shadowroot`.  For example: `document.querySelector('yourShadowhostElement').shadowroot`.

If you are using a component in **both** the light DOM and shadow DOM, check both the light and shadow DOM in your component's functions. For example, in the Localization component, we check the `activeElement` in the `onContainerKeyDown()` function.

```js
  class SomeComponent extends HTMLElement {
    #handleKeyDown(event) {
        // ...
        let focusedItemIndex = focusableItems.findIndex((item) => item === this.getRootNode().activeElement || item === document.activeElement);
        // ...
    }
  }

### Shadow DOM vs Light DOM: What goes where?

As a rule of thumb for how we use shadow DOM in our theme components:

- Use Shadow DOM for layout and positioning content (grid/flex containers), as these typically need unique styling not shared with or inherited from the rest of the theme
- Use Light DOM for merchant-provided content to allow easy inheritance of theme-wide CSS declarations and helper classes. For example, a `.is-hidden` or `.color-scheme-1` class set in the main stylesheet is not accessible in the shadow DOM, but you would want it accessible to slotted content.
