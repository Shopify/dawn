import fs from 'fs';
import path from 'path';

/**
 * Gets translation string from locale file and replaces variables
 * @param {string} key - The translation key (e.g. 'actions.clear_all_plural')
 * @param {Object} variables - Variables to replace in the translation string. e.g. { count: 10 "
 * @returns {string} - The translated string with variables replaced
 */
export function translation(key, variables = {}) {
  const localeFile = fs.readFileSync(path.join(process.cwd(), 'locales/en.default.json'), 'utf8');

  // Remove both block comments and line comments
  const jsonContent = localeFile
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
    .replace(/\/\/.*$/gm, '') // Remove line comments
    .replace(/,(\s*})/g, '$1') // Remove trailing commas
    .trim();

  const translations = JSON.parse(jsonContent);

  const keyParts = key.split('.');
  let value = translations;

  // Traverse the translations object
  for (const part of keyParts) {
    value = value?.[part];
    if (!value) {
      console.error(`🔎🙅🏻‍♀️ Translation key not found: "${key}"`);
      return key; // Return the key, force the test to fail
    }
  }

  /*
   * Handle values that are a pluralization object. Only supports zero, one, two, and other.
   * https://shopify.dev/docs/storefronts/themes/architecture/locales/storefront-locale-files#pluralize-translations
   *
   * Example:
   * "product_count": {
   *   "zero": "No products",
   *   "one": "{count} product",
   *   "two": "{count} products",
   *   "other": "{count} products"
   * }
   */
  const VALID_PLURAL_FORMS = ['zero', 'one', 'two', 'other'];
  if (typeof value === 'object' && variables.count && VALID_PLURAL_FORMS.some((form) => form in value)) {
    const count = variables.count;
    if (typeof count !== 'number') {
      console.error(`🔢❌ Count variable must be a number for plural translation key: "${key}"`);
      return key;
    }

    const pluralForm = count === 0 ? 'zero' : count === 1 ? 'one' : count === 2 ? 'two' : 'other';

    value = value[pluralForm] || value.other;

    if (!value) {
      console.error(`❌ No matching plural form found for count: ${count}, key: "${key}"`);
      return key;
    }
  }

  // Replace Liquid variables in the string
  const localeTranslation = Object.entries(variables).reduce((str, [key, value]) => {
    if (typeof str === 'string') {
      return str.replace(new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'g'), value);
    }
    // If we get here, something went wrong with the translation
    console.error(`🔎❌ Invalid translation value type for key: "${key}"`);
    return key;
  }, value);

  return localeTranslation;
}
