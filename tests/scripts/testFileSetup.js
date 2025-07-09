const { execSync } = require('child_process');
const path = require('path');

// Clear existing test files
console.log('🧹 Clearing existing test files...');
execSync('rm -f templates/*.test-* sections/test-* layout/test-*', {
  cwd: path.join(__dirname, '../..'),
  stdio: 'inherit',
});

// Import and run createTestTemplates
console.log('\n📝 Creating new test files...');
require('./createTestTemplates');
