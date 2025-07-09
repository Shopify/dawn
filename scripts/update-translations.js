/*

  This script updates the translations for marchant and buyer facing keys in the theme.
  It can handle both schema translations and locale translations based on the --schema flag.

  Usage:
  - For locale translations: node update-translations
  - For schema translations: node update-translations --schema

  Use either Prompt 1 or Prompt 2 to create the translations and run the script.
  Tip: Use CMD+SHIFT+V to paste the JSON structure into cursor as plain text.

*/

/*

  Prompt 1: Schema Translations

  You must translate English strings in a JSON object into multiple languages.
  Use the following structure to create the file `scripts/translation-data.json`:

  ``` json
  {
    "sourceStructure": {
      "categories": {
        "banners": "Banners",
        "decorative": "Decorative",
        "storytelling": "Storytelling"
      },
      "content": {
        "advanced": "Advanced",
        "some_key": {
          "child_key_1": "Child key 1",
        }
      }
    },
    "wordTranslations": {
    }
  }
  ```

  Inside the `wordTranslations` key, match the structure in `sourceStructure`, but add a translation for each language.

  You can use the following command to get the list of language codes:

  ``` bash
  ls locales/*.schema.json | grep -v en.default.schema.json | sed 's|locales/||g' | sed 's|\.schema\.json||g'
  ```

  Use the following constraints:

  - Match the sourceStructure in the wordTranslations
  - Have each leaf key's value be an object that includes translations for each of the languages
  - Do not read any other files.
  - Only add translations for the keys in sourceStructure
  - Never add any other keys.

  Then run `node scripts/update-translations.js --schema`
*/

/*

  Prompt 2: Storefront Translations

  You must translate English strings in a JSON object into multiple languages.
  Use the following structure to create the file `scripts/translation-data.json`:

  ``` json
  {
    "sourceStructure": {
      "actions": {
        "add": "Add",
        "add_to_cart": "Add to cart",
      },
      "blocks": {
        "contact_form": {
          "name": "Name",
          "email": "Email"
        }
      }
    }
  }
  ```

  Inside the `wordTranslations` key, match the structure in `sourceStructure`, but add a translation for each language.

  You can use the following command to get the list of language codes:

  ``` bash
  ls locales/*.json | grep -v schema | grep -v en.default.json | sed 's|locales/||g' | sed 's|\.json||g'
  ```

  Use the following constraints:

  - Match the sourceStructure in the wordTranslations
  - Have each leaf key's value be an object that includes translations for each of the languages
  - Do not read any other files.
  - Only add translations for the keys in sourceStructure
  - Never add any other keys.

  Then run `node scripts/update-translations.js`
*/
const fs = require('fs');
const path = require('path');

// Check if --schema flag is present
const isSchemaTranslation = process.argv.includes('--schema');

// Load translation data from external file
let translationData;
try {
  const dataPath = path.join(__dirname, 'translation-data.json');
  const dataContent = fs.readFileSync(dataPath, 'utf8');
  translationData = JSON.parse(dataContent);
} catch (error) {
  console.error('Error loading translation data:', error.message);
  console.error('Make sure translation-data.json exists in the scripts folder');
  process.exit(1);
}

const { sourceStructure, wordTranslations } = translationData;

// Function to get a value from a nested object using a key path
function getValueAtPath(obj, keyPath) {
  return keyPath.reduce((current, key) => current && current[key], obj);
}

// Function to recursively translate a JSON structure using path-based lookups
function translateStructure(obj, targetLanguage, currentPath = []) {
  if (Array.isArray(obj)) {
    return obj.map((item, index) => translateStructure(item, targetLanguage, [...currentPath, index]));
  } else if (obj !== null && typeof obj === 'object') {
    const translatedObj = {};
    for (const [key, value] of Object.entries(obj)) {
      const newPath = [...currentPath, key];
      translatedObj[key] = translateStructure(value, targetLanguage, newPath);
    }
    return translatedObj;
  } else {
    // This is a leaf value - check if we have a translation for this path
    const translationAtPath = getValueAtPath(wordTranslations, currentPath);

    if (translationAtPath && translationAtPath[targetLanguage]) {
      return translationAtPath[targetLanguage];
    }

    // If no translation found, return the original value
    return obj;
  }
}

// Function to deeply merge two objects, appending new keys instead of replacing existing structures
function deepMerge(target, source) {
  const result = { ...target };

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (source[key] !== null && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        // If both target and source have the same key and both are objects, merge them recursively
        if (result[key] !== null && typeof result[key] === 'object' && !Array.isArray(result[key])) {
          result[key] = deepMerge(result[key], source[key]);
        } else {
          // If target doesn't have this key or it's not an object, use the source value
          result[key] = source[key];
        }
      } else {
        // For non-object values, always use the source value (new value overrides old)
        result[key] = source[key];
      }
    }
  }

  return result;
}

async function addTranslations() {
  const localesDir = path.join(__dirname, '../locales');

  try {
    const files = await fs.promises.readdir(localesDir);

    console.log('Loaded translation data:');
    console.log(`- Source structure: ${JSON.stringify(sourceStructure, null, 2)}`);
    console.log(`- Translation paths available: ${JSON.stringify(Object.keys(wordTranslations), null, 2)}`);
    console.log('');

    for (const file of files) {
      // Skip non-JSON files
      if (!file.endsWith('.json')) continue;

      // Handle schema vs locale files
      if (isSchemaTranslation) {
        // Skip non-schema files and default schema
        if (!file.includes('schema') || file === 'en.default.schema.json') continue;
      } else {
        // Skip schema files and default locale
        if (file.includes('schema') || file === 'en.default.json') continue;
      }

      const filePath = path.join(localesDir, file);
      const languageCode = file.split('.')[0];

      console.log(`Processing ${file}...`);

      try {
        // Read the existing file
        const fileContent = await fs.promises.readFile(filePath, 'utf8');
        const data = JSON.parse(fileContent);

        // Translate the source structure for this language
        const translatedStructure = translateStructure(sourceStructure, languageCode);

        // Deeply merge the translated structure into the existing data instead of replacing
        const mergedData = deepMerge(data, translatedStructure);

        console.log(`  Added translated structure for ${languageCode}`);

        // Log what was added for verification
        if (translatedStructure.test_keys) {
          const values = Object.values(translatedStructure.test_keys);
          console.log(`  Values: ${values.join(', ')}`);
        }

        // Write the updated file back
        await fs.promises.writeFile(filePath, JSON.stringify(mergedData, null, 2) + '\n', 'utf8');
        console.log(`  Successfully updated ${file}`);
      } catch (error) {
        console.error(`  Error processing ${file}:`, error.message);
      }
    }

    console.log(`\nCompleted adding translations to all ${isSchemaTranslation ? 'schema' : 'locale'} language files!`);
  } catch (error) {
    console.error('Error reading locales directory:', error);
  }
}

function deleteTranslationData() {
  const dataPath = path.join(__dirname, 'translation-data.json');
  fs.unlinkSync(dataPath);
  console.log('Deleted translation data');
}

// Run the script
addTranslations().then(() => {
  deleteTranslationData();
});
