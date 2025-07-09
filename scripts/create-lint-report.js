// # Run with `node scripts/create-lint-report.js`
const fs = require('fs');
const { execSync } = require('child_process');

console.log('Running linters and generating markdown report...');

// Run linters and capture output
let cssOutput = '';
let jsOutput = '';

// Run combined CSS and Liquid CSS linting
try {
  cssOutput = execSync('npx stylelint "**/*.{css,liquid}" 2>&1', { encoding: 'utf8' });
} catch (e) {
  cssOutput = e.stdout || e.toString();
}

try {
  jsOutput = execSync('npx eslint "assets/*.js" 2>&1', { encoding: 'utf8' });
} catch (e) {
  jsOutput = e.stdout || e.toString();
}

// Process CSS output
const cssIssues = {};
const cssLines = cssOutput.split('\n').filter((line) => !line.includes('Deprecation Warning:'));
let currentFile = '';

cssLines.forEach((line) => {
  // Match file paths - could be .css or .liquid files
  if ((line.includes('/') || line.includes('\\')) && (line.endsWith('.css') || line.endsWith('.liquid'))) {
    currentFile = line.trim();
  } else if (line.match(/^\s*\d+:\d+\s+[✖⚠]/)) {
    const match = line.match(/^\s*(\d+):(\d+)\s+([✖⚠])\s+(.+?)\s+(\S+)$/);
    if (match) {
      const [, lineNum, col, icon, message, rule] = match;
      if (!cssIssues[rule]) {
        cssIssues[rule] = {
          count: 0,
          level: icon === '✖' ? 'error' : 'warning',
          instances: [],
        };
      }
      cssIssues[rule].count++;
      cssIssues[rule].instances.push({
        file: currentFile,
        line: lineNum,
        column: col,
        message: message.trim(),
      });
    }
  }
});

// Process JS output
const jsIssues = {};
const jsLines = jsOutput.split('\n');
currentFile = '';

jsLines.forEach((line) => {
  if (line.includes('/assets/') && line.endsWith('.js')) {
    currentFile = line.trim();
  } else if (line.match(/^\s*\d+:\d+\s+(warning|error)/)) {
    const match = line.match(/^\s*(\d+):(\d+)\s+(warning|error)\s+(.+?)\s+(\S+)$/);
    if (match) {
      const [, lineNum, col, level, message, rule] = match;
      if (!jsIssues[rule]) {
        jsIssues[rule] = {
          count: 0,
          level,
          instances: [],
        };
      }
      jsIssues[rule].count++;
      jsIssues[rule].instances.push({
        file: currentFile,
        line: lineNum,
        column: col,
        message: message.trim(),
      });
    }
  }
});

// Generate markdown report
let markdown = `# ESLint & Stylelint Report

Generated on: ${new Date().toISOString()}

## Summary

### CSS Linting Results (including CSS in Liquid files)
`;

// Count totals for CSS
const cssErrors = Object.values(cssIssues)
  .filter((i) => i.level === 'error')
  .reduce((sum, i) => sum + i.count, 0);
const cssWarnings = Object.values(cssIssues)
  .filter((i) => i.level === 'warning')
  .reduce((sum, i) => sum + i.count, 0);

markdown += `- **Total Issues**: ${cssErrors + cssWarnings} (${cssErrors} errors, ${cssWarnings} warnings)\n`;
markdown += `- **Rules Triggered**: ${Object.keys(cssIssues).length}\n\n`;

markdown += `### JavaScript Linting Results\n`;

// Count totals for JS
const jsErrors = Object.values(jsIssues)
  .filter((i) => i.level === 'error')
  .reduce((sum, i) => sum + i.count, 0);
const jsWarnings = Object.values(jsIssues)
  .filter((i) => i.level === 'warning')
  .reduce((sum, i) => sum + i.count, 0);

markdown += `- **Total Issues**: ${jsErrors + jsWarnings} (${jsErrors} errors, ${jsWarnings} warnings)\n`;
markdown += `- **Rules Triggered**: ${Object.keys(jsIssues).length}\n\n`;

// Add summary table of all rules
markdown += `## Rule Violations Summary\n\n`;

// CSS Rules Table
if (Object.keys(cssIssues).length > 0) {
  markdown += `### CSS Rules\n\n`;
  markdown += `| Rule | Errors | Warnings | Total |\n`;
  markdown += `|------|-------:|---------:|------:|\n`;

  const sortedCssRules = Object.entries(cssIssues).sort((a, b) => {
    // First sort by whether the rule has errors (errors first)
    const aHasErrors = a[1].level === 'error';
    const bHasErrors = b[1].level === 'error';
    if (aHasErrors && !bHasErrors) return -1;
    if (!aHasErrors && bHasErrors) return 1;
    // Then sort by total count
    return b[1].count - a[1].count;
  });

  sortedCssRules.forEach(([rule, data]) => {
    const errors = data.level === 'error' ? data.count : 0;
    const warnings = data.level === 'warning' ? data.count : 0;
    markdown += `| \`${rule}\` | ${errors} | ${warnings} | ${data.count} |\n`;
  });

  markdown += `| **Total** | **${cssErrors}** | **${cssWarnings}** | **${cssErrors + cssWarnings}** |\n\n`;
}

// JavaScript Rules Table
if (Object.keys(jsIssues).length > 0) {
  markdown += `### JavaScript Rules\n\n`;
  markdown += `| Rule | Errors | Warnings | Total |\n`;
  markdown += `|------|-------:|---------:|------:|\n`;

  const sortedJsRules = Object.entries(jsIssues).sort((a, b) => {
    // First sort by whether the rule has errors (errors first)
    const aHasErrors = a[1].level === 'error';
    const bHasErrors = b[1].level === 'error';
    if (aHasErrors && !bHasErrors) return -1;
    if (!aHasErrors && bHasErrors) return 1;
    // Then sort by total count
    return b[1].count - a[1].count;
  });

  sortedJsRules.forEach(([rule, data]) => {
    const errors = data.level === 'error' ? data.count : 0;
    const warnings = data.level === 'warning' ? data.count : 0;
    markdown += `| \`${rule}\` | ${errors} | ${warnings} | ${data.count} |\n`;
  });

  markdown += `| **Total** | **${jsErrors}** | **${jsWarnings}** | **${jsErrors + jsWarnings}** |\n\n`;
}

// CSS Issues by Rule
markdown += `## CSS Issues by Rule\n\n`;

const sortedCssRulesDetail = Object.entries(cssIssues).sort((a, b) => {
  // First sort by whether the rule has errors (errors first)
  const aHasErrors = a[1].level === 'error';
  const bHasErrors = b[1].level === 'error';
  if (aHasErrors && !bHasErrors) return -1;
  if (!aHasErrors && bHasErrors) return 1;
  // Then sort by total count
  return b[1].count - a[1].count;
});

sortedCssRulesDetail.forEach(([rule, data]) => {
  const icon = data.level === 'error' ? '❌' : '⚠️';
  markdown += `### ${icon} ${rule} (${data.count} ${data.level}${data.count > 1 ? 's' : ''})\n\n`;

  // Group by unique messages
  const messageGroups = {};
  data.instances.forEach((instance) => {
    const msg = instance.message;
    if (!messageGroups[msg]) {
      messageGroups[msg] = [];
    }
    messageGroups[msg].push(instance);
  });

  Object.entries(messageGroups).forEach(([message, instances]) => {
    markdown += `**${message}** (${instances.length} occurrence${instances.length > 1 ? 's' : ''})\n\n`;
    if (instances.length <= 5) {
      instances.forEach((inst) => {
        markdown += `- \`${inst.file}:${inst.line}:${inst.column}\`\n`;
      });
    } else {
      // Show first 3 examples
      instances.slice(0, 3).forEach((inst) => {
        markdown += `- \`${inst.file}:${inst.line}:${inst.column}\`\n`;
      });
      markdown += `- ...and ${instances.length - 3} more\n`;
    }
    markdown += '\n';
  });
});

// JS Issues by Rule
markdown += `## JavaScript Issues by Rule\n\n`;

const sortedJsRules = Object.entries(jsIssues).sort((a, b) => {
  // First sort by whether the rule has errors (errors first)
  const aHasErrors = a[1].level === 'error';
  const bHasErrors = b[1].level === 'error';
  if (aHasErrors && !bHasErrors) return -1;
  if (!aHasErrors && bHasErrors) return 1;
  // Then sort by total count
  return b[1].count - a[1].count;
});

sortedJsRules.forEach(([rule, data]) => {
  const icon = data.level === 'error' ? '❌' : '⚠️';
  markdown += `### ${icon} ${rule} (${data.count} ${data.level}${data.count > 1 ? 's' : ''})\n\n`;

  // Group by unique messages
  const messageGroups = {};
  data.instances.forEach((instance) => {
    const msg = instance.message;
    if (!messageGroups[msg]) {
      messageGroups[msg] = [];
    }
    messageGroups[msg].push(instance);
  });

  Object.entries(messageGroups).forEach(([message, instances]) => {
    markdown += `**${message}** (${instances.length} occurrence${instances.length > 1 ? 's' : ''})\n\n`;
    if (instances.length <= 5) {
      instances.forEach((inst) => {
        markdown += `- \`${inst.file}:${inst.line}:${inst.column}\`\n`;
      });
    } else {
      // Show first 3 examples
      instances.slice(0, 3).forEach((inst) => {
        markdown += `- \`${inst.file}:${inst.line}:${inst.column}\`\n`;
      });
      markdown += `- ...and ${instances.length - 3} more\n`;
    }
    markdown += '\n';
  });
});

// Write the report
fs.writeFileSync('lint-report.md', markdown);
console.log('✅ Markdown report generated: lint-report.md');
