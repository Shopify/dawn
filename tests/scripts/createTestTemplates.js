const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');
const chalk = require('chalk');
const minimist = require('minimist');
const argv = minimist(process.argv.slice(2), {
  alias: {
    v: 'verbose',
  },
});
const isVerbose = argv.verbose;

// Define the base directories
const rootDir = path.join(__dirname, '../..');
const testsDir = path.join(rootDir, 'tests');
const testSuiteDir = path.join(testsDir, 'suites', 'theme1');
const sectionsTestDir = path.join(testSuiteDir, 'sections');
const templatesTestDir = path.join(testSuiteDir, 'templates');
const templatesThemeDir = path.join(rootDir, 'templates');
const sectionsThemeDir = path.join(rootDir, 'sections');
const layoutsThemeDir = path.join(rootDir, 'layout');
const supportedTemplates = [
  '404',
  'article',
  'blog',
  'cart',
  'collection',
  'index',
  'list-collections',
  'page',
  'product',
  'search',
];

// Track files copied, errors, skipped, and layout files processed
const stats = {
  copied: 0,
  errors: 0,
  skipped: 0,
  layoutsProcessed: 0,
};

function copyFileAsync(source, dest) {
  return new Promise((resolve, reject) => {
    fs.copyFile(source, dest, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

/**
 * localization.layout.liquid -> layout/test-localization.liquid
 * localization.section.json -> sections/test-localization.json
 * index.localization.template.json -> templates/index.test-localization.json
 *
 * If no type:
 * collection.product-card.json -> templates/collection.test-product-card.json
 */
function renameFile(filename) {
  const handleTypedFile = (type) => {
    const parts = filename.split(`.${type}.`);
    return 'test-' + parts[0] + '.' + parts[1];
  };

  // Check for typed files first
  const types = ['layout', 'section', 'template'];
  for (const type of types) {
    if (filename.includes(`.${type}.`)) {
      return handleTypedFile(type);
    }
  }

  // Handle untyped template files
  const parts = filename.split('.');
  if (parts.length >= 3) {
    parts[1] = 'test-' + parts[1];
    return parts.join('.');
  } else if (parts.length === 2) {
    return parts[0] + '.test.' + parts[1];
  }
  return 'test-' + filename;
}

function getDestinationDir(filename) {
  if (filename.includes('.layout.')) {
    return layoutsThemeDir;
  } else if (filename.includes('.section.')) {
    return sectionsThemeDir;
  } else {
    return templatesThemeDir;
  }
}

// Construct the patterns to match files
const supportedTemplatesPattern = supportedTemplates.join(',');
const patterns = [
  path.join(sectionsTestDir, '**', `{${supportedTemplatesPattern}}.*.json`),
  path.join(templatesTestDir, '**', `{${supportedTemplatesPattern}}.*.json`),
  path.join(sectionsTestDir, '**', '*.layout.{json,liquid}'),
  path.join(templatesTestDir, '**', '*.layout.{json,liquid}'),
  path.join(sectionsTestDir, '**', '*.section.{json,liquid}'),
  path.join(templatesTestDir, '**', '*.section.{json,liquid}'),
  path.join(sectionsTestDir, '**', '*.template.{json,liquid}'),
  path.join(templatesTestDir, '**', '*.template.{json,liquid}'),
];

function getAllThemeJsonFiles() {
  return globSync(path.join(sectionsTestDir, '**', '*.json'))
    .concat(globSync(path.join(templatesTestDir, '**', '*.json')))
    .filter((file) => !file.endsWith('layout.config.json'));
}

// Check for potential duplicate theme filenames, if found: exit process with error
function checkForDuplicateFiles() {
  const allThemeJsonFiles = getAllThemeJsonFiles();

  const fileNameCount = allThemeJsonFiles.reduce((acc, file) => {
    const baseName = path.basename(file);
    acc[baseName] = (acc[baseName] || 0) + 1;
    return acc;
  }, {});

  const duplicates = Object.entries(fileNameCount)
    .filter(([_, count]) => count > 1)
    .map(([fileName]) => allThemeJsonFiles.filter((file) => path.basename(file) === fileName))
    .flat();

  if (duplicates.length > 0) {
    const relativePaths = duplicates.map((file) => '/' + path.relative(path.join(__dirname, '../..'), file));
    console.error(`⛔️ ${chalk.red('Error')}: Duplicate theme files detected: ${relativePaths.join(', ')}`);
    console.error('Ensure all JSON files have unique names and try again.');
    process.exit(1);
  }
}

// Copy files that match the patterns, skip files that don't match any patterns with a warning
async function copyMatchingFiles() {
  const allThemeJsonFiles = getAllThemeJsonFiles();

  const filesToCopy = patterns.flatMap((pattern) => globSync(pattern));

  const skippedFiles = allThemeJsonFiles.filter((file) => !filesToCopy.includes(file));
  stats.skipped = skippedFiles.length;

  skippedFiles.forEach((file) => {
    console.warn(
      `⚠️  ${chalk.yellow('Warning')}: ${chalk.cyan(
        file.split('/').pop()
      )} does not match any copy patterns and will be skipped`
    );
  });

  return Promise.all(
    filesToCopy.map(async (file) => {
      const fileName = path.basename(file);
      const newFilename = renameFile(fileName);
      const destinationDir = getDestinationDir(fileName);

      if (!fs.existsSync(destinationDir)) {
        fs.mkdirSync(destinationDir, { recursive: true });
      }

      const destinationPath = path.join(destinationDir, newFilename);

      try {
        await copyFileAsync(file, destinationPath);
        const relativeDestPath = '/' + path.relative(path.join(__dirname, '../..'), destinationPath);
        if (isVerbose) {
          console.log(`✅ File ${chalk.cyan(file.split('/').pop())} copied to ${chalk.cyan(relativeDestPath)}`);
        }
        stats.copied++;
      } catch (err) {
        console.error('⛔️ Error copying file:', err);
        stats.errors++;
      }
    })
  );
}

function printFinalSummary() {
  console.log('\nFinal Summary:');
  console.log(`✅ Successfully copied: ${stats.copied} files`);
  console.log(`✅ Layout files processed: ${stats.layoutsProcessed}`);
  console.log(`⛔️ ${stats.errors > 0 ? chalk.red('Errors') : 'Errors'}: ${stats.errors}`);
  console.log(`⚠️  ${stats.skipped > 0 ? chalk.yellow('Skipped') : 'Skipped'}: ${stats.skipped} files`);
}

async function createLayoutFiles() {
  const setupFiles = globSync(path.join(testsDir, '**/layout.config.json'));

  for (const setupFile of setupFiles) {
    try {
      const setupConfig = JSON.parse(fs.readFileSync(setupFile, 'utf8'));

      if (setupConfig.layout_to_replace) {
        const { from, to } = setupConfig.layout_to_replace;

        // Prepend `test-` to the file so test theme files can be identified by gitignore
        const destLayoutName = `test-${to}`;

        const sourceLayoutPath = path.join(layoutsThemeDir, from);
        if (!fs.existsSync(sourceLayoutPath)) {
          throw new Error(`Source layout file "${from}" not found in ${layoutsThemeDir}`);
        }

        let layoutContent = fs.readFileSync(sourceLayoutPath, 'utf8');

        // Process static sections to replace when needed
        if (setupConfig.layout_sections_to_replace) {
          for (const replacement of setupConfig.layout_sections_to_replace) {
            const { from: fromSection, to: toSection } = replacement;

            // Prepend `test-` to the file so test theme files can be identified by gitignore
            const destSectionName = `test-${toSection}`;

            const regex = new RegExp(`{%\\s*sections\\s+['"]${fromSection}['"]\\s*%}`, 'g');
            layoutContent = layoutContent.replace(regex, `{% sections '${destSectionName}' %}`);
          }
        }

        const destLayoutPath = path.join(layoutsThemeDir, destLayoutName);
        fs.writeFileSync(destLayoutPath, layoutContent);

        const relativeDestPath = '/' + path.relative(path.join(__dirname, '../..'), destLayoutPath);
        if (isVerbose) {
          console.log(`✅ Layout file created: ${chalk.cyan(relativeDestPath)}`);
        }
        stats.layoutsProcessed++;
      }
    } catch (error) {
      console.error(`⛔️ Error processing setup file ${setupFile}:`, error.message);
      stats.errors++;
    }
  }
}

// Create new test files in the theme directories and print a summary of the results
async function main() {
  await copyMatchingFiles();
  await createLayoutFiles();
  printFinalSummary();
}

// Always check for duplicate files _before_ running the main script
checkForDuplicateFiles();
main().catch(console.error);
