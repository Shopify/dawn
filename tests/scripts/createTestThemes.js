console.log('\n🧪 Creating test themes...');

// Update settings_data.json directly
const fs = require('fs');
const path = require('path');

const defaultWebFonts = {
  type_body_font: 'montserrat_n4',
  type_subheading_font: 'montserrat_n4',
  type_heading_font: 'montserrat_n4',
  type_accent_font: 'montserrat_n4',
};

/*
  Each object in the array creates a new theme under tests/themes with a new config/settings_data.json
  The first object is the default theme, and the rest are new themes.
*/
const newThemeSettingsData = [
  {
    type_line_height_h1: 'display-tight',
  },
  {
    cart_type: 'page',
  },
];

// Ensure all webFonts keys are present unless already set
for (const entry of newThemeSettingsData) {
  for (const [key, value] of Object.entries(defaultWebFonts)) {
    if (!(key in entry)) {
      entry[key] = value;
    }
  }
}

function ensureThemeFolderExists(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
}

function symlinkThemeDirectories(sourceThemePath, themeFolderPath, directoriesToSync) {
  directoriesToSync.forEach((folder) => {
    const sourcePath = path.join(sourceThemePath, folder);
    const destPath = path.join(themeFolderPath, folder);

    if (fs.existsSync(sourcePath)) {
      if (fs.existsSync(destPath)) {
        if (fs.lstatSync(destPath).isSymbolicLink()) {
          fs.unlinkSync(destPath);
        } else {
          fs.rmSync(destPath, { recursive: true, force: true });
        }
      }
      fs.symlinkSync(sourcePath, destPath, 'dir');
    }
  });
}

function symlinkThemeFiles(sourceThemePath, themeFolderPath, filesToSync) {
  filesToSync.forEach((file) => {
    const sourceFile = path.join(sourceThemePath, file);
    const destFile = path.join(themeFolderPath, file);
    const destDir = path.dirname(destFile);

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    if (fs.existsSync(sourceFile)) {
      if (fs.existsSync(destFile)) {
        if (fs.lstatSync(destFile).isSymbolicLink()) {
          fs.unlinkSync(destFile);
        } else {
          fs.rmSync(destFile, { recursive: true, force: true });
        }
      }
      fs.symlinkSync(sourceFile, destFile, 'file');
    }
  });
}

function copyAndUpdateSettingsData(sourceThemePath, themeFolderPath, themeSpecificData, themeName) {
  const settingsDataPath = path.join(themeFolderPath, 'config/settings_data.json');
  const sourceSettingsDataPath = path.join(sourceThemePath, 'config/settings_data.json');

  if (fs.existsSync(sourceSettingsDataPath)) {
    const configDir = path.dirname(settingsDataPath);
    if (!fs.existsSync(configDir)) {
      fs.mkdirSync(configDir, { recursive: true });
    }
    fs.copyFileSync(sourceSettingsDataPath, settingsDataPath);
  }

  if (fs.existsSync(settingsDataPath)) {
    const themeSettings = JSON.parse(fs.readFileSync(settingsDataPath, 'utf8'));
    // Ensure 'current' object exists
    if (!themeSettings.current) {
      themeSettings.current = {};
    }
    Object.assign(themeSettings.current, themeSpecificData);
    fs.writeFileSync(settingsDataPath, JSON.stringify(themeSettings, null, 2));
    console.log(`  Updated settings_data.json for ${themeName}`);
    return true;
  }
  console.error(`  ❌ Failed to update settings_data.json for ${themeName}`);
  return false;
}

newThemeSettingsData.forEach((data, index) => {
  const themeName = `theme${index + 1}`;
  const themeFolderPath = path.join(__dirname, '../themes', themeName);
  const sourceThemePath = path.join(__dirname, '../../');

  ensureThemeFolderExists(themeFolderPath);

  const foldersToSync = ['locales', 'layout', 'sections', 'snippets', 'templates', 'assets', 'blocks'];
  symlinkThemeDirectories(sourceThemePath, themeFolderPath, foldersToSync);

  const filesToSync = ['config/settings_schema.json'];
  symlinkThemeFiles(sourceThemePath, themeFolderPath, filesToSync);
  console.log(`  Created and linked ${themeName}`);

  copyAndUpdateSettingsData(sourceThemePath, themeFolderPath, data, themeName);
});
