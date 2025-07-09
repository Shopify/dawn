# stylelint-plugin-liquid

A custom Stylelint syntax plugin that enables linting and auto-fixing CSS within Liquid template files.

## Overview

This plugin allows Stylelint to parse and lint CSS code inside `{% stylesheet %}` blocks in Shopify Liquid template files. It supports all standard Stylelint rules and plugins, including browser compatibility checks and auto-fixing.

## Features

- Extracts and lints CSS from `{% stylesheet %}` blocks in `.liquid` files
- Accurate line number reporting mapped to original Liquid file positions
- Full support for Stylelint's `--fix` option to automatically fix CSS issues
- Works alongside regular CSS file linting
- Compatible with all Stylelint rules and plugins

## Installation

This plugin is currently bundled with the project. To use it in other projects:

1. Copy the `stylelint-plugin-liquid` directory to your project
2. Add the plugin as a file dev dependency in `package.json`:

```json
{
  "devDependencies": {
    "stylelint-plugin-liquid": "file:./stylelint-plugin-liquid"
  }
}
```

3. Run `npm install`

## Configuration

### In `stylelint.config.js`:

```js
{
  overrides: [
    {
      files: ['**/*.liquid'],
      customSyntax: 'stylelint-plugin-liquid',
    },
  ],
}
```

### In `package.json` scripts:

```json
{
  "scripts": {
    "lint:css": "stylelint '**/*.{css,liquid}'",
    "lint:css:fix": "stylelint '**/*.{css,liquid}' --fix"
  }
}
```

## Usage

### Lint Liquid files:

```bash
npx stylelint '**/*.liquid'
```

### Auto-fix CSS in Liquid files:

```bash
npx stylelint '**/*.liquid' --fix
```

### Lint both CSS and Liquid files:

```bash
npx stylelint '**/*.{css,liquid}'
```

### Lint specific files:

```bash
npx stylelint 'sections/header.liquid' 'blocks/*.liquid'
```

## Example

Given a Liquid file with CSS issues:

```liquid
<div class='header'>
  <h1>{{ title }}</h1>
</div>

{% stylesheet %}
  .header {
    background-color: #ffffff; /* Can be shortened to #fff */
    margin: 0px 0px 0px 0px; /* Can be shortened to margin: 0 */
    padding: 10px;
  }
{% endstylesheet %}
```

Running `npx stylelint file.liquid --fix` will automatically fix the CSS:

```liquid
<div class='header'>
  <h1>{{ title }}</h1>
</div>

{% stylesheet %}
  .header {
    background-color: #fff;
    margin: 0;
    padding: 10px;
  }
{% endstylesheet %}
```

## How It Works

1. **Parsing**: The plugin uses regex to find all `{% stylesheet %}...{% endstylesheet %}` blocks
2. **CSS Extraction**: CSS content is extracted and combined (if multiple blocks exist)
3. **Line Mapping**: A mapping is created between the generated CSS and original Liquid file line numbers
4. **Linting**: Standard Stylelint rules are applied to the extracted CSS
5. **Error Reporting**: Errors are mapped back to their original line numbers in the Liquid file
6. **Fixing**: When using `--fix`, the plugin replaces the CSS content within the stylesheet blocks while preserving the rest of the Liquid file

## Technical Details

- Built on PostCSS custom syntax API
- Supports standard CSS syntax (including modern features like CSS nesting)
- Preserves Liquid template structure and content outside of stylesheet blocks
- Handles multiple stylesheet blocks by maintaining position mappings

## Stylelint Disable Comments

The plugin fully supports most stylelint disable comments for suppressing specific rules:

### ✅ Supported (Working)

```css
/* stylelint-disable */
.rule {
  color: red !important;
}
/* stylelint-enable */

/* stylelint-disable declaration-no-important */
.rule {
  color: red !important;
}
/* stylelint-enable declaration-no-important */

.rule {
  color: red !important;
} /* stylelint-disable-line declaration-no-important */
```

### ❌ Not Working (Known Issue)

```css
/* stylelint-disable-next-line declaration-no-important */
.rule {
  color: red !important;
}
```

**Note**: The `/* stylelint-disable-next-line */` comment format appears to have compatibility issues with Stylelint 16.x. Use `/* stylelint-disable-line */` or disable/enable blocks as alternatives.

## Limitations

- Only processes CSS within `{% stylesheet %}` blocks
- Does not lint inline styles in `style` attributes
- Does not process CSS in `{% style %}` tags (different Liquid tag type)
- `/* stylelint-disable-next-line */` comments do not work (use alternatives above)
