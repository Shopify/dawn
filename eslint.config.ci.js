/* eslint-env node */
const mainConfig = require('./eslint.config.js');

module.exports = [
  ...mainConfig,
  {
    files: ['assets/**/*.js'],
    rules: {
      // Disable rules that have many existing violations in CI
      'no-unused-vars': 'off',
      'no-redeclare': 'off',
      'no-useless-escape': 'off',
      'no-prototype-builtins': 'off',
      'no-empty': 'off',
      'no-case-declarations': 'off',
      'no-self-assign': 'off',
      'no-useless-catch': 'off',
      'no-async-promise-executor': 'off',
    },
  },
];
