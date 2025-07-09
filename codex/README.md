# Coding principles

## Browser support

- All features should be supported in the last two versions of all major browsers
- All necessary features must be `"Baseline widely available"`
- Progressive enhancement features may be "`Baseline 2024"`.
  - These are strictly for UX improvements that are non-blocking for conversions

## Liquid

- When writing multiple lines of liquid, use the `{% liquid %}` tag
- Use `{% # inline comments %}` for non-docs comments
- Use `{%- doc -%}` for docs comments in `/snippets/`

### Reusing code

When reusing code in a single file, `{% capture %}` blocks are preferred over snippets. This keeps the context of the component together.

✅ Do this:

```liquid
{% capture copyright %}
  <div class="footer-utilities__group-copyright">
    <span class="footer-utilities__text">
      {{ shop.name | link_to: routes.root_url -}}, {{ powered_by_link }}
    </span>
  </div>
{% endcapture %}

{{ copyright }}
```

❌ Don't do this:

```liquid
snippets/copyright.liquid
<div class='footer-utilities__group-copyright'>
  <span class='footer-utilities__text'>
    {{ shop.name | link_to: routes.root_url -}}
    , {{ powered_by_link }}
  </span>
</div>

blocks/parent.liquid
{% render 'copyright' %}
```

There are some cases where snippets are the only or most optimal solution, including but not limited to:

- Reusing code among different blocks or sections
- Reusing code that needs a dynamic parameter which is not accessible when the capture is declared i.e. the reused code includes a loop index.
- Optionally, very big chunks of code which have its own internal logic or are more maintainable with an isolated `{% stylesheet %}` can be put into snippets, specially if the parent is already complex. In this case the extra level of encapsulation helps reduce the complexity of the parent block/section. For example, the `drawer-localization.liquid`.

## HTML

- Use semantic HTML
- Use modern HTML features where appropriate, e.g. use `<details>` and `<summary>` over JS to show and hide content
- Use `CamelCase` for IDs. When appending a block or section ID, append `-{{ block.id }}` or `-{{ section.id }}` respectively.

### Accessibility

- Ensure all interactive elements are focusable. e.g. if you use a label to style a checkbox, include `tabindex="0"`
- Only use `tabindex="0"` unless absolutely necessary, to avoid hijacking tab flow

## CSS

### Specificity

- **Never** use IDs as selectors
- **Avoid** using elements as selectors
- **Avoid** using `!important` at all costs - if you must use it, comment why in the code
- Use a `0 1 0` specificity wherever possible, meaning a single `.class` selector.
- In cases where you must use higher specificity due to a parent/child relationship, try to keep the specificity to a maximum of `0 4 0`
  - Note that this can sometimes be impossible due to the `0 1 0` specificity of pseudo-classes like `:hover`. There may be situations where `.parent:hover .child` is the only way to achieve the desired effect.
- **Avoid** complex selectors. A selector should be easy to understand at a glance. Don't over do it with pseudo selectors (:has, :where, :nth-child, etc).

See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) for more a comprehensive list of specificity rules.

### CSS variables

CSS variables, a.k.a. custom properties, are a powerful tool for reducing redundancy and making it easier to update values across a component.

- If you need to hardcode a value, set it to a variable and use that variable in the declaration. Example: a touch target size. `--touch-target-size: 44px;`
- **Never** hardcode colors, always use the color schemes

#### Global variables

Global variables should be scoped to the `:root` selector in `snippets/theme-styles-variables.liquid`.

**Example of global variables**

```css
/* in snippets/theme-styles-variables.liquid */
:root {
    --page-width: 1400px;
     --font-body--family: {{ settings.type_body_font.family }}, {{ settings.type_body_font.fallback_families }}; /* Referencing a theme setting */
     --font-{{ preset_name_dash }}--family: {{ settings[preset_font] | prepend: 'var(--font-' | append: '--family)' }}; /* Using Liquid to set a variable */
}
```

#### Scoped variables

Be sure to scope your CSS variables to the component they are being used in, if they are not meant to be global. Scoped variables can reference global variables.

**Example of scoped variables**

```css
/* in assets/facets.css */
.facets {
  --drawer-padding: var(--padding-md); /* Referencing a global variable */
  --facets-upper-z-index: 3;
  --facets-open-z-index: 4;

  --facets-clear-shadow: 0px -4px 14px 0px rgba(from var(--color-foreground) r g b / 0.1); /* Referencing a Color Scheme variable */
}
```

#### Namespace your CSS variables

Namespace your variables to avoid collisions unless you explicitly want them to bleed through to other components.

✅ Do this:

<!-- prettier-ignore-start -->
```css
  .component {
    --component-padding: ...;
    --component-aspect-ratio: ...;
  }
```

❌ Don't do this:
```css
  .component {
    --padding: ...;
    --aspect-ratio: ...;
  }
```
<!-- prettier-ignore-end -->

### Scoping CSS to instances of sections and blocks

Reset CSS variable values inline on a `style` attribute with a section/block settings. This has a couple benefits:

- Less CSS in Liquid which allows us to use the `{% stylesheet %}` tag for all CSS.
- Reduces redundancy in CSS selectors and number of selectors in the HTML, i.e. `.selector--{{ block.id }}` pattern.

✅ Do this:

<!-- prettier-ignore-start -->
```html
<section
  style="
    --background-color: {{ settings.background_color }};
    --padding: {{ settings.padding }}px;
  "
>
  ...
</section>

<button
  style="--button-color: {{ settings.button_color }};"
>
  ...
</button>
```

<!-- prettier-ignore-end -->

❌ Don't do this:

<!-- prettier-ignore-start -->
```html
{% style %}
  .selector--{{ block.id }} {
    --button-color: {{ settings.button_color }};
  }
{% endstyle %}

<button class="selector--{{ block.id }}">...</button>
```
<!-- prettier-ignore-end -->

#### Redundancy

Use variables to reduce property assignment redundancy.

```css
/* Do this */
.button {
  background: rgb(var(--button-color) / 0.75);
}

.button--secondary {
  --button-color: var(--secondary-color);
}

/* Not this */
.button {
  background: rgb(var(--primary-color) / 0.75);
}

.button--secondary {
  background: rgb(var(--secondary-color) / 0.75);
}
```

### BEM

Use the [BEM CSS](https://getbem.com/naming/) convention for class names.

BEM TL;DR:

- Block: the component
- Element: a child of the component
- Modifier: a variant of a block or element

<!-- prettier-ignore-start -->
```css
.block { ... }
.block--modifier { ... }
.block__element { ... }
.block__multi-word-element { ... }
.block__element--modifier { ... }
.block__element--multi-word-modifier { ... }
```
<!-- prettier-ignore-end -->

Dashes are used to separate words in blocks, elements, and modifiers.

Exception: We also use global [utility classes](#utility-classes) that can be applied to block and and elements without following BEM naming convention.

#### Naming a "Block" (component)

The root "block" namespace must wrap any elements derived from it.

✅ Do this:

```html
<div class="my-component">
  <div class="my-component__wrapper"></div>
</div>
```

❌ Not this:

`.my-component__wrapper` is used as a parent to `.my-component`.

```html
<div class="my-component__wrapper my-component--page-width">
  <div class="my-component"></div>
</div>
```

#### Naming an "Element" (child)

There should only be a _single_ "element" in a classname. Only the root "block" name needs to be included in child classnames. If additional naming specificity is necessary, use a "-" to seperate words or consider starting a new BEM scope altogether when an element could make sense as a standalone entity.

✅ Do this:

```html
<div class="my-component my-component--full-width">
  <div class="my-component__wrapper">
    <button class="my-component__button">
      <span class="my-component__button-label">My button</span>
    </button>
  </div>
</div>
```

✅ Or this:

Started new scope with `.button-component`.

```html
<div class="my-component my-component--full-width">
  <div class="my-component__wrapper">
    <button class="button-component">
      <span class="button-component__label">My button</span>
    </button>
  </div>
</div>
```

❌ Not this:

Multiple element names are used (`__wrapper__button__label`).

```html
<div class="my-component my-component--full-width">
  <div class="my-component__wrapper">
    <button class="my-component__wrapper__button">
      <span class="my-component__wrapper__button__label">My button</span>
    </button>
  </div>
</div>
```

#### Naming a "Modifier" (variant)

Any "modifier" classname should always use a "--" and should always correspond to an existing block and element namespace. Never use a modifier class on an element that doesn't also have a base classname.

✅ Do this:

The `.button` class is the base classname and modified by `--secondary`.

```html
<button class="button button--secondary"></button>
```

❌ Not this:

The `.button` and `.button-secondary` classes are both named as _exclusive_ components and should not used together.

```html
<button class="button button-secondary"></button>
```

❌ Or this:

Modifer class is used without corresponding base classname.

```html
<button class="button--secondary"></button>
```

Also consider keeping modifiers at the highest element that makes sense. This makes the component more extensible and resilient as styling needs are changed or added in the future.

✅ Do this:

```html
<div class="my-component my-component--size-large my-component--page-width">
  <div class="my-component__wrapper"></div>
</div>
```

#### Utility classes

Utility classes are intended to act as global overrides for a single styling decision, e.g. alignment, show/hide, etc. BEM conventions are not followed, there is no hierarchy in utility classes and utility classes do not assume they are used with any particular block or element.

Name multi-word utility classes with hyphens `-`. Append any viewport specifications at the **end**, e.g. `hidden-mobile`.

✅ This is fine:

```css
.align-left {
  text-align: left;
}
```

```html
<div class="my-component align-left">
  <p class="my-component__text"></p>
</div>
```

### Media queries

- Default to mobile first. e.g. `min-width` queries
- Use `screen` for all media queries

### Nesting

Nesting can make styles harder to read. Be responsible with it.

- Only use `&` when there is a direct relationship between the two selectors
  - State based selectors e.g. `&:hover`, `&:focus`, `&:active`
  - Modifiers that affect each other e.g. `button--integrated { &.button--text }`
- Never nest beyond the first level
- See below for exceptions

#### Nesting media queries

Use nesting for media queries

```css
.header {
  width: 100%;

  @media screen and (min-width: 750px) {
    width: 100px;
  }
}
```

This includes when there is nothing to override, e.g.

```css
.header {
  @media screen and (min-width: 750px) {
    width: 100px;
  }
}
```

That way, if something needs to be added later, it can just be added without needing to flip the media query to the inside.

#### If-like parent-child relationships

You may use nesting to help organize parent-child relationship when the parent can have **multiple states or modifiers** that affect children. In the example below, a number of child selectors need to change when the parent is the `--full-width` variant. This saves you from needing to append `parent--full-width` to each css selector.

```css
.parent {
  grid-columns: var(--gap) 1fr var(--gap);
}

.child {
  grid-column: 2;
}

.grand-child {
  ...;
}

.parent--full-screen {
  grid-columns: 1fr;

  .child {
    grid-column: 1;
  }

  .grand-child {
    ...;
  }
}
```

In cases like this, the styles that are being applied are the direct result of the parent's modifier. We can see this as a kind of if-like relationship where the logic is easier to follow if the child styles are nested inside the parent.

This is not a reason to nest multiple levels. Maintain the single level rule.

### Logical properties

Where appropriate, use logical properties to have baseline support for Right-to-Left (RTL) languages.
Focusing on these properties:

- padding
- margin
- border
- text-align
- top, bottom, left, right

✅ Do this:

```css
.element {
  padding-inline: 2rem;
  padding-block: 1rem;
  margin-inline: auto;
  margin-block: 0;
  border-inline-end: 1rem solid var(--color-background);
  text-align: start;
  inset: 0;
}
```

❌ Not this:

```css
.element {
  padding: 1rem 2rem;
  margin: 0 auto;
  border-bottom: 1rem solid var(--color-background);
  text-align: left;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
```

### Fancy selectors

#### Using `:is()`

When giving the same styles to multiple selectors, use a comma separated list.

✅ Do this:

```css
.facets__label,
.facets__clear-all,
.clear-filter {
  ...;
}
```

❌ Not this:

```css
:is(.facets__label, .facets__clear-all, .clear-filter) {
  ...;
}
```

However, if you are giving the same styles to a parent-child relationship with different selectors, you may use `:is()`.

✅ Do this:

```css
.parent:is(.child-1, .child-2) {
  ...;
}
```

❌ Not this:

```css
.parent .child-1,
.parent .child-2 {
  ...;
}
```

✅ Do this:

```css
:is(.parent, .parent-2) .child {
  ...;
}
```

❌ Not this:

```css
.parent .child,
.parent-2 .child {
  ...;
}
```

Try to keep the same specificity for all selectors within a single `:is()` to avoid increasing the overall specificity of the selector unintentionally.

## JavaScript

### General principles

- Lean towards using zero external dependencies
- Rely on our [component framework](https://github.com/Shopify/horizon/blob/main/codex/component-framework.md) to eliminate tedious/repetitive code
- Use JS when needed, but reach for native browser features first. e.g. use `popover` or `details` over JS unless there is a good reason to do otherwise
- Keep concerns that can be solved with CSS alone out of JavaScript
- Do not use `var`
- Prefer `const` over `let` - avoid mutation unless necessary
- Prefer `for (const thing of things)` over `things.forEach()`
- Put new lines before new `blocks` of code. A block is anything with a `{` and `}`.

### File structure

- Group scripts by feature area where appropriate. e.g. `facets.js` contains multiple classes related to facets, they don't each need to be their own file

### Modules

Use the module pattern for loading JavaScript. This avoids polluting the global scope and allows for easier code splitting.

See `facets.js` which uses `section-renderer` for an example.

Note that you need to import modules via the importmap. See `layout/theme.liquid` and search for `importmap` to find our global modules. This is necessary to bust the cache from the CDN and ensure you get the latest version of the JS file you're referencing.

Use the `kebab-case` to name modules in the `importmap`.

#### Privacy and instance methods

- The public API of a module should be the smallest possible surface to provide the necessary functionality
- All other instance methods should be prefixed with `#` and are private
- Do not use instance methods for functions that do not use the class instance

```js
class MyClass {
  constructor() {
    this.cache = new Map();
  }

  // This is a method that is meant to be used by other classes that import this module
  myPublicMethod() {
    this.#myPrivateMethod();
  }

  // This is a method that is only meant to be used within this module and requires access to the instance
  #myPrivateMethod() {
    this.cache.set('key', 'value');
  }
}

// This is a utility that is scoped to this module.  It does not require access to the instance to work
const someUtilityFunction = (num1, num2) => num1 + num2;
```

### Asynchronous code

- Prefer to use `async/await` syntax
- Prefer to use `await` over chaining `.then()`

### Events

```text
Coming soon... this will be a longer section.

TL;DR - use events to communicate between custom elements.  This avoids explicit dependencies.
```

### Web components

- Initialize JS components in the DOM using custom elements, this allows them to update when added into the DOM via the editor more seamlessly and is a very nice API for component reuse
- (to fill out) use of shadow DOM
- (to fill out) use of slots

### Early returns

- Prefer early returns over nested conditionals

#### Optional Chaining

If you need to use multiple instances of Optional Chaining, prefer to use an early return instead.

✅ Do this:

```js
const button = this.querySelector('ref="button"');

if (!button) return;

button.enable();
button.textContent = 'Add to cart';
```

❌ Not this:

```js
const button = this.querySelector('ref="button"');

button?.enable();
button?.textContent = 'Add to cart';
```

Cases where you have a single optional chain, however, are fine:

```js
const button = this.querySelector('ref="button"');

button?.enable();
```

### Simplification of blocks

#### Use ternaries for simple `if/else` blocks

If you have a simple `if/else` block, where both the condition and the body are simple, use a ternary.

✅ Do this:

```js
simpleCondition ? this.doAThing() : this.doAnotherThing();
```

❌ Not this:

```js
if (simpleCondition) {
  this.doAThing();
} else {
  this.doAnotherThing();
}
```

#### One liners don't need `{}`

✅ Do this:

```js
if (simpleCondition) return;
```

❌ Not this:

```js
if (simpleCondition) {
  return;
}
```

#### Returning a boolean

If you are returning a boolean, return the result of the comparison.

✅ Do this:

```js
return simpleCondition;
```

❌ Not this:

```js
return simpleCondition ? true : false;
```

## Commenting

- Use `TODO` to indicate an intent to return to something to make it searchable

Code should be self-documenting wherever possible. Here are the exceptions:

- For necessary unidiomatic code (likely to be accidentally refactored)
- For browser-specific bug fixes, e.g. `/* fixes render issue in safari <14.0.0 */`
- For unfinished implementations or improvements, e.g. `/* TODO: remove after myComponent is implemented */`

## Linting

This project uses **progressive linting** to prevent new issues while allowing existing ones to be fixed incrementally.

### Two configurations

- **Development**: Full linting (`npm run lint`) - use when fixing existing issues
- **CI**: Progressive linting (uses CI config files) - check PRs to avoid introducing new issues. The configuration disables rules that are currently failing on main to avoid blocking development. The plan is to gradually fix and enable them again.

### Commands

```bash
# Development (strict rules)
npm run lint           # All linters
npm run lint:css       # Stylelint only
npm run lint:js        # ESLint only

# Auto-fix
npm run lint:css:fix   # Fix CSS issues
npm run lint:js:fix    # Fix JS issues

# Test CI rules locally (optional)
npm run lint:css -- --config stylelint.config.ci.js
npm run lint:js -- --config eslint.config.ci.js
```

# UX principles

## Settings

### General guidance

Keep it simple, clear, and non-repetitive.

- All content should be sentence case, including the names of blocks and sections. Example: "Really cool section", not "Really Cool Section"
- The setting type can provide context that the setting label doesn’t need to provide. Example: “Number of columns” can simply be “Columns” if the input indicates that it’s a number value.
- Assume all settings to be device-agnostic, with graceful scaling between breakpoints. Only mention mobile or desktop if there is a unique setting required.
- Use common shorthand where it makes sense. Example: Max/Min to mean Maximum and Minimum. Caveat: ensure these values are translated/localized correctly
- Help text: Minimize use as much as possible. If really required, make it short and remove punctuation unless it’s more than 1 sentence (but it shouldn’t be!)

### Information architecture

#### Ordering

The order of theme settings greatly impacts the merchant's ability to understand and configure the section/block.

- List settings to reflect the order of elements they control in the preview. Top to bottom, left to right, background to foreground.
- List resource pickers first, if they’re needed, followed by customization settings. Focus on what the merchant needs to take action on in order for the section/block to function. Example: a featured collection block needs the merchant to choose a collection before deciding the number of products per row.
- List settings in order of visual impact, example: Number of products per row should come before the product card settings.

#### Grouping settings

Consider grouping settings under a heading if there would be 2+ settings that fit within it. Avoid creating headings for just 1 setting as it adds unnecessary clutter and height. List ungrouped settings at the top of the section/block.

Common groupings:

- Layout
- Typography
- Colors
- Padding

#### Naming headings and labels

Remove word duplication in the heading and nested labels. Example: If “Color” is in the heading, the nested setting labels and possibly help text should not repeat the word. Rely on the hierarchy of info to pass context down.

✅ Do this

```text
Heading: Color
Label: Background
```

❌ Not this

```text
Heading: Color
Label: Background color
```

#### Conditional settings

Use conditional settings when it:

- simplifies decision-making for merchants via progressive disclosure
- avoids duplication of settings
- avoids visual clutter and reduces cognitive load

Conditionally rendered settings should always appear after their trigger setting. Beyond this limitation, place them wherever they’re the most relevant for their use case. They can appear directly below the tigger setting, or further down in the settings panel—whatever it makes sense in each context.

For settings that appear conditionally, it should be made obvious via labelling which "parent" setting they belong to if necessary. Do not assume that a merchant will toggle settings on/off to understand the conditional relationship: they could land on the section or block with the conditional setting already visible. For example: A "Border" toggle is set to "On", which conditionally shows an "Opacity" setting. It may not be obvious that "Opacity" is linked to the "Border" setting. In this case, label it "Border opacity" for clarity.

Tradeoffs and considerations of conditional settings:

- They hide functionality/options that help merchants decide how style their website, so be judicious in what concepts you tie together. For example, don't make a Product card's "Swatch display" setting conditional on a "Quick buy" setting. They are both related to variant selection, but they serve different purposes.
- Limit conditions to 2 levels deep to avoid complex logic (up for discussion!)
- Even when not shown, a conditional setting's value is evaluated in the Liquid code. Code defensively, never assume a theme setting's value is nil.

### Settings input type considerations

**Checkbox**: Treat checkbox as an on/off switch. Avoid using verb-based labels, example: use “Language selector” and not "Enable language selector". The presence of the verb may inadvertently suggest the direction to toggle to enable or disable it.

**Select**: Keep select option labels as short as possible so they can be dynamically displayed as segmented controls

## Creating Horizon art directions

### Color schemes

To ensure color schemes are predictable across all our art directions, create your schemes using these guidelines:

- Scheme 1 = Main
- Scheme 2 = Primary accent
- Scheme 3 = Secondary accent
- Scheme 4 = Tertiary accent
- Scheme 5 = Scheme 1 inverted
- Scheme 6 = Empty background

## Server-side rendering

Storefronts are to be rendered server-side with Liquid as a first principle. As opposed to client-side JavaScript.

When using JavaScript to render part of the page, fetch the new HTML from the server wherever possible.

## Using a section exclusively for the Section Rendering API

If you need to use a section solely as a context for use with the Section Rendering API, name this section `section-rendering-*.liquid`.

### Optimistic UI

This is the exception to the rule of server-side rendering

"Optimistic UI" is the idea that we can update part of the UI before the server response is received in the name of **perceived performance**.

Recommended reading:

- [Optimistic UI Patterns for Improved Perceived Performance](https://simonhearne.com/2021/optimistic-ui-patterns/)
- [True Lies Of Optimistic User Interfaces](https://www.smashingmagazine.com/2016/11/true-lies-of-optimistic-user-interfaces/)

#### Criteria for using optimistic UI

Key factors to consider when deciding whether to use optimistic UI:

1. You are updating a **small** portion of the UI on the client (with JavaScript) before the server response is received.
2. The API request has a high degree of certainty of being successful.

Examples of appropriate use cases:

When filtering a collection page, we can update the a list of applied filters client-side as a Buyer chooses them, i.e. "Color: Red" or "Size: Medium". However, we do not know how many products will be returned that match the filters, so we can't update the product grid or a count of products.

When a Buyer attempts to add an item to their cart, we can update the cart item count client-side. Assuming our product form's "add to cart" button is already checking the item's availability, we can have a reasonably high degree of certainty that the item will be added to the cart (API request is successful). However, we do not know what the new cart total will be, nor do we know what the line items will look like, so we can't update those in a cart drawer without waiting for the server response.
