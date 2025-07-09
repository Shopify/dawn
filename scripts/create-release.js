#!/usr/bin/env node

/*
  Creates a named release zip file in the root of the project.
  Name is based on the current repository name matching the STORE_NAMES object. Otherwise, it will use the repository name.

  In order not to reveal internal build commands or files, the following files are built in the release directory:
  - package.json
  - .gitignore

  !IMPORTANT!
  Ensure each repo has the latest version of this script checked out before it runs it. Updates to this script are not automatically propagated.
*/

const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');
const { execSync } = require('child_process');
const { parse, stringify } = require('comment-json');

const STORE_NAMES = {
  'horizon-demo-store-one': 'Horizon',
  'horizon-demo-store-two': 'Pitch',
  'horizon-demo-store-four': 'Atelier',
  'horizon-demo-store-five': 'Fabric',
  'horizon-demo-store-six': 'Tinker',
  'horizon-demo-store-seven': 'Savor',
  'horizon-demo-store-eight': 'Heritage',
  'horizon-demo-store-ten': 'Dwell',
  'horizon-demo-store-eleven': 'Vessel',
  'horizon-demo-store-twelve': 'Ritual',
};

// Logging function
function log(message, isError = false) {
  if (isError) {
    console.error(message);
  } else {
    console.log(message);
  }
}

/*
  @returns Boolean
  @param settingsType : The type of the setting
  @param settingsValue : The value of the setting
  @description : Only keep the setting if it points to the closest resource, the template resource, or specific handles all stores have
*/
function shouldKeepResourcefulSetting(settingsType, settingsValue) {
  switch (settingsType) {
    case 'url':
    case 'link':
      return (
        settingsValue === 'shopify://collections/all' ||
        settingsValue === 'shopify://collections' ||
        /^{{\s*closest\./.test(settingsValue)
      );
    case 'image':
    case 'image_picker':
      return /^{{\s*(?:closest\.)?(?:article|collection|product)\./.test(settingsValue);
    case 'product':
      return /{{\s*(?:closest\.)?product\s*}}/.test(settingsValue);
    case 'collection':
      return /{{\s*(?:closest\.)?collection\s*}}/.test(settingsValue) || settingsValue === 'all';
    default:
      return false;
  }
}

function traverseBlock(blocksMap, block) {
  const blockSchema = blocksMap.get(block.type);
  Object.entries(block.settings).forEach(([key, value]) => {
    const setting = blockSchema.settings.find((setting) => setting.id === key);
    if (
      !setting ||
      (RESOURCEFUL_SETTING_TYPES.includes(setting.type) && !shouldKeepResourcefulSetting(setting.type, value))
    ) {
      delete block.settings[key];
    }
  });

  if (block.blocks) {
    Object.entries(block.blocks).forEach(([key, value]) => {
      traverseBlock(blocksMap, value);
    });
  }
}

function listFilesRecursively(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results.push(...listFilesRecursively(filePath).map((f) => path.join(file, f)));
    } else if (stat && stat.isFile()) {
      results.push(file);
    }
  });
  return results;
}

const RESOURCEFUL_SETTING_TYPES = [
  'article',
  'blog',
  'collection',
  'collection_list',
  'image_picker',
  'link',
  'link_list',
  'metaobject',
  'metaobject_list',
  'page',
  'product',
  'product_list',
  'url',
  'video',
];

const SCHEMA_REGEX = /{%-?\s*schema\s*-?%}([\s\S]*?){%-?\s*endschema\s*-?%}/;

function extractSchema(content) {
  const match = content.match(SCHEMA_REGEX);
  if (match && match[1]) {
    return match[1].trim();
  }
  return null;
}

async function parseSchema(filePath) {
  try {
    const content = await fsPromises.readFile(filePath, 'utf8');
    // When we are dealing with a JSON file, we need to remove the first element
    // This is because the first element is the theme info, which is not part of the schema
    if (filePath.includes('.json')) {
      try {
        const fileContents = parse(content);
        return fileContents;
      } catch (error) {
        console.error(`Error parsing JSON file ${filePath}:`, error);
        return [];
      }
    }

    const schemaString = extractSchema(content);
    if (!schemaString) {
      console.warn(`Warning: No schema found in ${filePath}`);
      return null;
    }
    const parsed = parse(schemaString);
    return parsed;
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
    return null;
  }
}

function getUpdatedThemeVersion(settingsSchemaJson) {
  const SEMVER_REGEX = /^\d+\.\d+\.\d+(-[0-9A-Za-z-.]+)?(\+[0-9A-Za-z-.]+)?$/;

  const versionIndex = process.argv.findIndex((arg) => arg === '--version');
  const version = versionIndex !== -1 ? process.argv[versionIndex + 1] : null;
  const isPatch = process.argv.includes('--patch');
  const isMinor = process.argv.includes('--minor');
  const isMajor = process.argv.includes('--major');

  if (version && !SEMVER_REGEX.test(version)) {
    console.error(`Error: Version "${version}" is not valid semver (expected format: X.Y.Z)`);
    process.exit(1);
  }

  let updated_theme_version;
  const currentVersion = settingsSchemaJson[0].theme_version;
  const currentMajor = currentVersion.split('.')[0];
  const currentMinor = currentVersion.split('.')[1];
  const currentPatch = currentVersion.split('.')[2];

  if (version) {
    updated_theme_version = version;
  } else if (isPatch) {
    updated_theme_version = `${currentMajor}.${currentMinor}.${Number(currentPatch) + 1}`;
  } else if (isMinor) {
    updated_theme_version = `${currentMajor}.${Number(currentMinor) + 1}.0`;
  } else if (isMajor) {
    updated_theme_version = `${Number(currentMajor) + 1}.0.0`;
  }

  return updated_theme_version;
}

function copyDir(src) {
  const dest = path.join('release', src);

  log(`Copying ${src} to ${dest}...`);
  if (!fs.existsSync(src)) {
    log(`Warning: Directory ${src} does not exist, skipping...`, true);
    return;
  }

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  } else {
    fs.rmSync(dest, { recursive: true, force: true });
    fs.mkdirSync(dest, { recursive: true });
  }

  // Get a list of files from git (excludes gitignored files)
  let files;
  try {
    files = execSync(`git ls-files ${src}`).toString().trim().split('\n');
    if (files.length === 1 && files[0] === '') {
      files = [];
    }
  } catch (error) {
    log(`Error listing files in ${src}: ${error.message}`, true);
    return;
  }

  for (const file of files) {
    if (!file || file.includes('config/markets.json')) continue;

    const destFile = path.join('release', file);
    const destDir = path.dirname(destFile);

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    if (file.endsWith('.liquid')) {
      // For liquid files, remove schema imports
      let content = fs.readFileSync(file, 'utf8');
      content = content.replace(/^{%\s*#\s*import schema from.*?%}/gm, '');
      fs.writeFileSync(destFile, content);
      log(`  Processed ${file}`);
    } else {
      // For other files, copy directly
      fs.copyFileSync(file, destFile);
      log(`  Copied ${file}`);
    }
  }
}

async function main() {
  // Create release directory
  log('Creating release directory...');
  if (fs.existsSync('release')) {
    fs.rmSync('release', { recursive: true, force: true });
  }

  fs.mkdirSync('release', { recursive: true });

  // Copy all required directories
  const directories = ['assets', 'blocks', 'config', 'layout', 'locales', 'sections', 'snippets', 'templates'];

  directories.forEach(copyDir);

  // Copy config files
  log('Copying config files...');
  const configFiles = [
    '.prettierrc.json',
    'stylelint.config.js',
    '.theme-check.yml',
    'package-lock.json',
    'release-notes.md',
  ];

  configFiles.forEach((configFile) => {
    if (fs.existsSync(configFile)) {
      fs.copyFileSync(configFile, path.join('release', configFile));
      log(`Copied ${configFile}`);
    } else {
      log(`Warning: ${configFile} not found, skipping...`, true);
    }
  });

  // Get repository name from git
  const repositoryName = execSync('git remote get-url origin').toString().trim().split('/').pop().split('.')[0];
  let storeName = STORE_NAMES[repositoryName];
  if (!storeName) {
    log(`Warning: Store name not found for ${repositoryName}, you can add it in the STORE_NAMES object`, true);
    storeName = repositoryName;
  }

  // Get the updated theme version for release
  const temp = await fsPromises.readFile(path.join('config', 'settings_schema.json'), 'utf8');
  const settingsSchemaJson = parse(temp);
  const updatedThemeVersion = getUpdatedThemeVersion(settingsSchemaJson);

  // When the arguments include --minimal, skip the settings data and templates
  if (!process.argv.includes('--minimal')) {
    // Edit settings_schema.json to have a new theme-name key

    if (updatedThemeVersion) {
      settingsSchemaJson[0] = {
        ...settingsSchemaJson[0],
        theme_version: updatedThemeVersion,
      };
      // Write to config/settings_schema.json
      await fsPromises.writeFile(path.join('config', 'settings_schema.json'), stringify(settingsSchemaJson, null, 2));
    }

    settingsSchemaJson[0].theme_name = storeName;
    await fsPromises.writeFile(
      path.join('release', 'config', 'settings_schema.json'),
      stringify(settingsSchemaJson, null, 2)
    );

    log('Copying templates...');
    const templates = listFilesRecursively('templates');

    const settingsSchema = (await parseSchema(path.join('config', 'settings_schema.json'))).flatMap(
      (schema) => schema.settings
    );
    const settingsData = await fsPromises.readFile(path.join('config', 'settings_data.json'), 'utf8');
    const settingsDataJson = parse(settingsData);
    Object.entries(settingsDataJson.current).forEach(([key, value]) => {
      const settingSchema = settingsSchema.find((s) => s && s.id === key);
      if (!settingSchema) {
        delete settingsDataJson.current[key];
      } else if (
        RESOURCEFUL_SETTING_TYPES.includes(settingSchema.type) &&
        !shouldKeepResourcefulSetting(settingSchema.type, value)
      ) {
        delete settingsDataJson.current[key];
      }
    });

    settingsDataJson.presets[storeName] = settingsDataJson.presets.Default;
    delete settingsDataJson.presets.Default;

    await fsPromises.writeFile('release/config/settings_data.json', stringify(settingsDataJson, null, 2));

    const blocks = listFilesRecursively('blocks');
    const blocksMap = new Map();
    await Promise.all(
      blocks.map(async (block) => {
        const schema = await parseSchema(path.join('blocks', block));
        blocksMap.set(block.replace('.liquid', ''), schema);
      })
    );

    const sections = listFilesRecursively('sections');
    const sectionsMap = new Map();
    await Promise.all(
      sections.map(async (section) => {
        const schema = await parseSchema(path.join('sections', section));
        sectionsMap.set(section.replace('.liquid', ''), schema);
      })
    );

    await Promise.all(
      templates.map(async (template) => {
        if (!template.endsWith('.json')) {
          await fsPromises.writeFile(
            path.join('release', 'templates', template),
            fs.readFileSync(path.join('templates', template), 'utf8')
          );
          return;
        }

        const contents = fs.readFileSync(path.join('templates', template), 'utf8');
        // We'll traverse the template settings and when we find a resourceful setting, we'll remove it
        const settings = parse(contents);
        const sections = Object.entries(settings.sections);
        sections.forEach(([section, templateSectionSchema]) => {
          const sectionSchema = sectionsMap.get(templateSectionSchema.type);
          const settings = templateSectionSchema.settings;
          const blocks = templateSectionSchema.blocks;
          // Now look up the section settings in the section
          Object.entries(settings).forEach(([key, value]) => {
            const setting = sectionSchema.settings.find((setting) => setting.id === key);
            if (
              !setting ||
              (RESOURCEFUL_SETTING_TYPES.includes(setting.type) && !shouldKeepResourcefulSetting(setting.type, value))
            ) {
              delete settings[key];
            }
          });

          if (blocks) {
            Object.entries(blocks).forEach(([key, block]) => {
              traverseBlock(blocksMap, block);
            });
          }
        });

        await fsPromises.writeFile(path.join('release', 'templates', template), stringify(settings, null, 2));
      })
    );
  }

  log('Creating package.json...');
  const packageJson = {
    name: 'horizon',
    version: updatedThemeVersion,
    main: 'index.js',
    description:
      'Horizon is the first of a new generation of first party Shopify themes.  It incorporates the new Liquid Storefronts features, including theme blocks and Styles.',
    scripts: {
      dev: 'shopify theme dev',
      'lint:css': "stylelint 'assets/*.css'",
      'lint:css:fix': "stylelint 'assets/*.css' --fix",
      'type-check': 'cd assets && tsc --noEmit -p jsconfig.json',
      'which:shopify': 'which shopify && shopify --version',
    },
    dependencies: {},
    devDependencies: {
      '@shopify/cli': '^3.79.0',
      '@shopify/prettier-plugin-liquid': '^1.9.0',
      '@shopify/theme-check-common': '^3.12.0',
      '@types/node': '^20.0.0',
      prettier: '2.8.8',
      stylelint: '^16.2.1',
      'stylelint-config-standard': '^36.0.0',
      typescript: '^5.7.2',
    },
    author: 'Shopify',
    license: 'UNLICENSED',
  };

  fs.writeFileSync(path.join('release', 'package.json'), JSON.stringify(packageJson, null, 2));

  const GITIGNORE = `# OS generated files #
######################
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
node_modules/

# Shopify CLI files
.shopify/`;
  fs.writeFileSync(path.join('release', '.gitignore'), GITIGNORE);

  log('Refreshing lockfile...');
  process.chdir('release');
  try {
    execSync('npm install', { stdio: 'ignore' });
    execSync('rm -rf node_modules', { stdio: 'ignore' });
    log('Dependencies installed successfully!');
  } catch (error) {
    log(`Error installing dependencies: ${error.message}`, true);
  }

  log('Creating zip file...');
  const zipFileName = `./${storeName}-release-${updatedThemeVersion}.zip`;
  process.chdir('..');
  fs.rmSync(zipFileName, { force: true });

  try {
    // Try to use the built-in 'zip' command if available
    execSync(`zip -r ${zipFileName} release`, { stdio: 'ignore' });
    log(`Zip file created successfully: ${zipFileName}`);
  } catch (error) {
    // If 'zip' command fails, try to use Node.js for zipping
    log('Standard zip command failed, trying alternate method...', true);

    try {
      execSync(`tar -czf ${zipFileName} release`, { stdio: 'ignore' });
      log(`Zip file created successfully: ${zipFileName}`);
    } catch (zipError) {
      log(`Error creating zip file: ${zipError.message}. Please zip the release folder manually.`, true);
    }
  }

  process.exit(0);
}

main().catch((error) => {
  log(`Unhandled error: ${error}`, true);
  process.exit(1);
});
