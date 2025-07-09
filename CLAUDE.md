# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Horizon is the first of a new generation of first party Shopify themes, incorporating the new Liquid Storefronts features including theme blocks and Styles. This is a Shopify theme development project following modern web standards and best practices.

## Essential Commands

### Development
- `npm run dev` - Start local development server on default store
- `npm run dev:schemas` - Watch and auto-build schemas during development
- `npm run build:schemas` - Build schemas from TypeScript to Liquid files

### Testing
- `npm run test` - Run all Playwright tests
- `npm run test:ui` - Open Playwright UI for interactive testing
- `npm run test:chrome` - Run tests in Chrome only
- `npm run test:safari` - Run tests in Safari only
- `npm run test:updateSnapshots` - Update visual regression snapshots

### Code Quality
- `npm run lint` - Run both CSS and JS linting
- `npm run lint:css` - Lint CSS in Liquid files
- `npm run lint:js` - Lint JavaScript files
- `npm run lint:css:fix` - Auto-fix CSS issues
- `npm run lint:js:fix` - Auto-fix JS issues
- `npm run type-check` - Run TypeScript type checking
- `npm run theme-check` - Run Shopify theme checks

### Release
- `npm run create-release` - Create a new theme release

## Architecture Overview

### Directory Structure
- **`assets/`** - JavaScript, CSS, and SVG icons. JS uses ES modules with a component framework
- **`blocks/`** - Theme blocks (reusable components) that can be nested in sections
- **`sections/`** - Page sections containing settings and blocks
- **`snippets/`** - Reusable Liquid code snippets
- **`templates/`** - JSON templates defining page structures
- **`schemas/`** - TypeScript schema definitions that compile to Liquid
- **`locales/`** - Translation files for internationalization
- **`.cursor/rules/`** - Detailed coding standards for AI assistants

### Key Technologies
- **Liquid** - Shopify's templating language
- **Web Components** - Custom elements extending the Component framework
- **CSS Custom Properties** - For theming and dynamic styling
- **TypeScript Schemas** - Type-safe schema definitions that compile to JSON

### Component Framework
The project uses a custom Component framework (assets/component.js) that provides:
- Declarative event handling via `on:event` attributes
- Automatic ref management via `ref` attributes
- Type-safe component development with JSDoc
- Automatic cleanup and lifecycle management

Example:
```javascript
/**
 * @typedef {Object} MyComponentRefs
 * @property {HTMLButtonElement} submitButton
 */

/** @extends {Component<MyComponentRefs>} */
class MyComponent extends Component {
  handleClick(event) {
    this.refs.submitButton.disabled = true;
  }
}
```

## Critical Standards

### HTML/Liquid Standards

#### Modern HTML Patterns
- **Native interactive elements**: Use `<details>`/`<summary>` for expandables, `<dialog>` for modals, `popover` attribute for tooltips/menus
- **Semantic containers**: Use `<search>` for search forms, `<output>` for form results
- **Form inputs**: Leverage all HTML5 input types (email, tel, url, number, date) with proper validation attributes
- **Progressive enhancement**: Start with semantic HTML that works without JS, then layer CSS and JS
- **ID naming**: Use `CamelCase` with section/block ID suffix: `id="ProductModal-{{ product.id }}-{{ section.id }}"`

#### Liquid Syntax Rules
- Use `{% liquid %}` for multiline code blocks instead of multiple `{% %}` tags
- Use `{% # comment %}` for inline comments
- Never invent new filters, tags, or objects
- Use object dot notation: `product.title` not `product['title']`
- All user-facing text must use translation filters: `{{ 'key' | t }}`

### Static Blocks

#### Implementation Pattern
Static blocks provide a way to render content at specific locations in templates without user-configurable settings:
```liquid
{% content_for 'block', type: 'block-name', id: 'unique-id' %}
```

#### Use Cases
- **Header/Footer integration**: Fixed elements that need consistent placement
- **Third-party app injection points**: Allowing apps to inject content
- **Theme-specific features**: Non-configurable theme functionality
- **Performance optimization**: Reducing dynamic content overhead

#### Static vs Dynamic Blocks
- **Static blocks**: No settings, fixed content, better performance
- **Dynamic blocks**: User-configurable, flexible placement, settings-driven
- **Mixing blocks**: Templates can contain both static and dynamic blocks
- **Ordering**: Static blocks render in the order they appear in code

### CSS Standards

#### Specificity and Structure
- **Never** use IDs as selectors or `!important` (unless absolutely necessary with comment)
- Maintain `0 1 0` specificity (single class) where possible, max `0 4 0` for complex cases
- Follow BEM naming: `.block`, `.block__element`, `.block--modifier`
- Use dashes to separate words in BEM names: `.product-card__title--large`

#### CSS Variables
- **Global variables** in `:root` within `snippets/theme-styles-variables.liquid`
- **Scoped variables** to components with namespacing: `--component-padding` not `--padding`
- **Always use variables** for colors, spacing, fonts - never hardcode values
- Reset CSS variables inline on elements with section/block settings

#### CSS Nesting Rules
- **Never nest CSS beyond first level** (except media queries)
- **No `&` operator** except for states/modifiers (`:hover`, `:focus`, `&[disabled]`)
- Single-level nesting only for readability
- Media queries can be nested inside selectors

#### Design Tokens
- Use standardized spacing scale: `--spacing-xs` through `--spacing-2xl`
- Typography scale: `--font-size-xs` through `--font-size-2xl`
- Consistent naming: `--component-property-variant-state`
- Document token relationships in comments

#### Defensive CSS
- Always include `overflow-wrap: break-word` for text containers
- Use `min-width: 0` on flex children to prevent overflow
- Set `max-width: 100%` on images and media
- Include `isolation: isolate` to create stacking contexts

#### CSS Property Order
1. Positioning (`position`, `top`, `z-index`)
2. Box model (`display`, `width`, `margin`, `padding`)
3. Typography (`font-size`, `line-height`, `color`)
4. Visual (`background`, `border`, `opacity`)
5. Animation (`transition`, `animation`)
6. Other (`cursor`, `overflow`)

#### Advanced Patterns
- Use `:is()` for parent-child relationships: `:is(.parent-a, .parent-b) .child`
- If-like patterns: `.component:has(.modifier) .element { /* styles */ }`
- Print styles: Always consider `@media print` implications
- Container queries for truly responsive components

#### Modern CSS Features
- Use container queries for responsive components
- Leverage `color-mix()`, `clamp()`, `min()`, `max()` functions
- Use logical properties for RTL support: `padding-inline`, `margin-block`
- Nest media queries inside selectors, but avoid deep nesting otherwise

#### Performance
- Use `transform` and `opacity` for animations (avoid layout properties)
- Implement `will-change` sparingly and remove after animation
- Use `contain` property for rendering performance

### JavaScript Standards

#### Core Principles
- **Zero external dependencies** - use native browser APIs only
- **Always use async/await** over Promise chains
- **Use `for...of`** loops over `forEach()`
- **Early returns** over nested conditionals
- **Extend Component framework** for all interactive elements

#### Component Framework Pattern
```javascript
/**
 * @typedef {Object} ComponentRefs
 * @property {HTMLElement} requiredElement
 * @property {HTMLElement} [optionalElement]
 */

/** @extends {Component<ComponentRefs>} */
class MyComponent extends Component {
  // Public methods for external use
  publicMethod() { }
  
  // Event handlers referenced in HTML
  async handleEvent(event) { }
  
  // Private methods use # prefix
  #privateMethod() { }
}
```

#### Event-Driven Architecture
- Use custom events for component communication
- Parents may invoke public methods on children
- Children emit events that bubble up to parents
- Always include typed event details with JSDoc

#### Component Communication Patterns
```javascript
// Parent calling child method
const childComponent = this.querySelector('child-component');
if (childComponent?.publicMethod) {
  childComponent.publicMethod(data);
}

// Child emitting event to parent
this.dispatchEvent(new CustomEvent('child:action', {
  detail: { value: this.value },
  bubbles: true
}));
```

#### URL Manipulation
- **Never manipulate URLs as strings**
- Always use `URL` and `URLSearchParams` APIs:
```javascript
const url = new URL(window.location);
url.searchParams.set('key', 'value');
url.searchParams.delete('oldKey');
history.replaceState(null, '', url);
```

#### Performance Patterns
- **AbortController** for cancellable operations:
```javascript
class Component extends Component {
  #abortController = new AbortController();
  
  async fetchData() {
    try {
      const response = await fetch(url, {
        signal: this.#abortController.signal
      });
    } catch (error) {
      if (error.name !== 'AbortError') throw error;
    }
  }
  
  disconnectedCallback() {
    this.#abortController.abort();
  }
}
```

- **Debouncing** for performance:
```javascript
#debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
```

#### Additional Patterns
- **Optimistic UI**: Update UI immediately, revert on error
- **File structure**: Group by feature area (product/, cart/, search/)
- **Array refs**: Use `ref="elementName[]"` for multiple elements
- **Never use forEach()**: Always use `for...of` loops

#### Error Handling
- Always validate DOM elements before use
- Use AbortController for cancellable requests
- Provide graceful fallbacks for errors
- Clean up resources in disconnectedCallback

#### File Organization
- **Assets directory must remain flat** - no subdirectories allowed
- Group related files by feature prefix: `product-card.js`, `product-modal.js`
- Use consistent naming: lowercase with hyphens
- Keep component files focused and single-purpose

### Schema Development

#### TypeScript Schemas
- Write schemas in `/schemas` directory in TypeScript
- Run `npm run build:schemas` to compile to Liquid files
- Follow strict typing and validation rules
- Use translation keys for all labels: `"label": "t:settings.padding"`

#### Schema Structure Rules
- Required properties: `name`, `settings`
- Setting IDs must be snake_case: `pattern: "^[a-z][a-z0-9_]*$"`
- Labels max 30 characters, keep concise
- Use `visible_if` for conditional settings
- Group related settings with headers

#### Setting Organization
1. Resource pickers first (collection, product, blog, page)
2. Visual impact order (layout → typography → colors → spacing)
3. Group with header settings
4. Performance settings last

## Beta Flags Required
The following Shopify experiment flags must be enabled:
- conditional_settings
- online_store_styles
- color_setting_opacity
- online_store_passing_preset_names
- ose_section_block_categories
- stylesheet_and_javascript_in_snippets
- block_static_params

## Documentation Standards

### Liquid Component Documentation
Use `{% doc %}` blocks for all Liquid snippets and sections:
```liquid
{% doc %}
  Renders a product card with image, title, and price.
  
  @param {product} product - The product object to display
  @param {string} [image_size='medium'] - Image size: 'small', 'medium', 'large'
  @param {boolean} [show_vendor=false] - Whether to display the vendor name
  @param {string} [card_class] - Additional CSS classes for the card
  
  @example
  {% render 'product-card',
    product: product,
    image_size: 'large',
    show_vendor: true
  %}
{% enddoc %}
```

### Documentation Requirements
- Document all parameters with type and description
- Mark optional parameters with `[param_name]`
- Include at least one usage example
- Add test cases in snippet comments when complex logic exists
- Use JSDoc/LiquidDoc format consistently

## Performance Best Practices

### Conditional Rendering
- **Avoid empty elements**: Always wrap optional content
```liquid
{%- if section.settings.title != blank -%}
  <h2>{{ section.settings.title }}</h2>
{%- endif -%}
```

### Lazy Loading
- **Required for all images** below the fold
- Use `loading="lazy"` attribute
- Implement Intersection Observer for complex cases
- Preload critical resources with `<link rel="preload">`

### Responsive Components
- Use **container queries** over media queries when possible
- Implement `contain` property for layout isolation:
```css
.component {
  contain: layout style;
}
```

### Animation Performance
- Use `will-change` sparingly, remove after animation:
```javascript
element.style.willChange = 'transform';
// After animation
element.style.willChange = 'auto';
```
- Only animate `transform` and `opacity` properties
- Use CSS animations over JavaScript when possible

### Debouncing Patterns
- Implement for search, filtering, and resize handlers
- Use 150-300ms delays for user input
- Cancel pending operations on component disconnect

## Testing Approach
- Playwright tests in `/tests` directory
- Visual regression testing with snapshots
- Accessibility testing with axe-core
- Multiple theme configurations for testing variations

## Common Development Tasks

### Adding a New Block
1. Create TypeScript schema in `/schemas/blocks/`
2. Run `npm run build:schemas`
3. Create Liquid file in `/blocks/`
4. Use `{% schema %}` tag with compiled JSON
5. Follow BEM naming and component patterns

### Creating a Web Component
1. Extend the Component base class
2. Define refs interface with JSDoc
3. Use declarative event handlers
4. Register with customElements.define
5. Follow the established patterns in existing components

### Working with Translations
1. Add keys to `/locales/en.default.json`
2. Use hierarchical key structure (max 3 levels)
3. Use `{{ 'key' | t }}` in Liquid templates
4. Include variables for dynamic content

## Important Notes
- Never commit without running linting and type checks
- Always use the Component framework for interactive elements
- Follow the extensive rules in `.cursor/rules/` directory
- Prefer server-side rendering with Liquid over client-side JS
- Use progressive enhancement - features must work without JS

## Critical Restrictions
- **Zero external JavaScript dependencies** - absolutely no third-party libraries
- **Never nest CSS beyond first level** (except media queries)
- **Assets directory must remain flat** - no subdirectories allowed
- **Always validate DOM elements** before use - never assume existence
- **Never manipulate URLs as strings** - use URL/URLSearchParams APIs
- **Never use forEach()** - always use `for...of` instead
- **Never use `&` in CSS** except for states/modifiers
- **Never hardcode values** - always use CSS variables/design tokens