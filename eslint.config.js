const js = require('@eslint/js');
const compat = require('eslint-plugin-compat');
const browserslist = require('browserslist');

module.exports = [
  js.configs.recommended,
  {
    files: ['assets/**/*.js'],
    plugins: {
      compat: compat,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        fetch: 'readonly',
        CustomEvent: 'readonly',
        FormData: 'readonly',
        HTMLElement: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLTextAreaElement: 'readonly',
        HTMLOptionElement: 'readonly',
        HTMLDetailsElement: 'readonly',
        HTMLDialogElement: 'readonly',
        HTMLTemplateElement: 'readonly',
        Element: 'readonly',
        Node: 'readonly',
        Text: 'readonly',
        Comment: 'readonly',
        DOMParser: 'readonly',
        ViewTransition: 'readonly',
        customElements: 'readonly',
        ResizeObserver: 'readonly',
        IntersectionObserver: 'readonly',
        MutationObserver: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        requestIdleCallback: 'readonly',
        cancelIdleCallback: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        queueMicrotask: 'readonly',
        performance: 'readonly',
        sessionStorage: 'readonly',
        localStorage: 'readonly',
        // Shopify globals
        Shopify: 'readonly',
        Theme: 'readonly',
      },
    },
    rules: {
      ...compat.configs.recommended.rules,
      'compat/compat': 'error',
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'no-undef': 'off', // Turned off to ignore "not defined" errors
      'no-redeclare': 'warn',
      'no-prototype-builtins': 'warn',
      'no-useless-escape': 'warn',
    },
    settings: {
      browsers: browserslist(),
      polyfills: [
        // Add any polyfills you're using
        'requestIdleCallback',
      ],
    },
  },
  {
    ignores: [
      'node_modules/**',
      '*.min.js',
      'scripts/**',
      'eslint.config.js',
      'stylelint.config.js',
      'stylelint.config.ci.js',
    ],
  },
];
