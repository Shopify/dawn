module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-no-unsupported-browser-features', 'stylelint-order'],
  defaultSeverity: 'warning',
  rules: {
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'error',
        ignore: ['css-nesting'], // Shopify's imagery4 transpiles css to support older Safari browser; declarations are unnested
      },
    ],
    'at-rule-no-unknown': null,
    'selector-class-pattern': [
      '^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$',
      {
        resolveNestedSelectors: true,
        message: 'Expected class selector to use BEM syntax https://en.bem.info/methodology/css',
      },
    ],
    'color-named': 'never',
    'declaration-no-important': true,
    'media-feature-range-notation': 'prefix',
    'declaration-block-no-redundant-longhand-properties': null,
    'shorthand-property-no-redundant-values': null,
    'alpha-value-notation': null,
    'order/order': ['custom-properties', 'declarations'],
    'value-keyword-case': [
      'lower',
      {
        ignoreKeywords: ['currentColor'],
      },
    ],
    'selector-max-id': 0,
    'selector-max-type': 2,
    'selector-max-specificity': [
      '0,4,0',
      {
        ignoreSelectors: [':host'],
      },
    ],
    'max-nesting-depth': 2,
    'selector-max-combinators': 4,
    'selector-max-compound-selectors': 5,
    'length-zero-no-unit': [true, { ignore: ['custom-properties'] }],
    'declaration-property-value-disallowed-list': [
      {
        '/^--(?!.*opacity$)/': ['/^0$/'], // Unitless-zero values can cause problem when used inside calc(), but exclude opacity properties
      },
      {
        message: 'Unexpected unitless 0 value for property',
        severity: 'error',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.liquid'],
      customSyntax: 'stylelint-plugin-liquid',
    },
  ],
};
