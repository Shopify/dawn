// # Run with `node scripts/create-theme-check-report.js`
const fs = require('fs');
const { execSync } = require('child_process');

console.log('Running shopify theme check and generating markdown report...');

// Get Shopify CLI version
let shopifyVersion = 'unknown';
try {
  shopifyVersion = execSync('shopify version', { encoding: 'utf8' }).trim();
} catch (e) {
  console.error('Failed to get Shopify CLI version');
}

// Run theme check in JSON format and save to file
const tempJsonFile = 'theme-check-output.json';
console.log('Running theme check (this may take a moment)...');

try {
  execSync(`shopify theme check --output json > ${tempJsonFile} 2>&1`, { encoding: 'utf8' });
} catch (e) {
  // Theme check returns non-zero exit code when there are issues, which is expected
  console.log('Theme check completed with issues (this is normal).');
}

// Read and parse JSON output
let results = [];
try {
  const jsonContent = fs.readFileSync(tempJsonFile, 'utf8');
  results = JSON.parse(jsonContent);
  console.log(`Parsed ${results.length} files from theme check output.`);
} catch (e) {
  console.error('Failed to parse theme check output:', e.message);
  // Try to clean up temp file
  try {
    fs.unlinkSync(tempJsonFile);
  } catch {}
  process.exit(1);
}

// Clean up temp file
try {
  fs.unlinkSync(tempJsonFile);
} catch {}

// Process results to group by check/rule
const checksByRule = {};
let totalErrors = 0;
let totalWarnings = 0;
let totalInfo = 0;
let totalFiles = 0;
let filesWithIssues = 0;

results.forEach((fileResult) => {
  totalFiles++;
  if (fileResult.offenses && fileResult.offenses.length > 0) {
    filesWithIssues++;
    totalErrors += fileResult.errorCount || 0;
    totalWarnings += fileResult.warningCount || 0;
    totalInfo += fileResult.infoCount || 0;

    fileResult.offenses.forEach((offense) => {
      const rule = offense.check;
      if (!checksByRule[rule]) {
        checksByRule[rule] = {
          errors: 0,
          warnings: 0,
          info: 0,
          instances: [],
        };
      }

      // Count by severity
      if (offense.severity === 'error') {
        checksByRule[rule].errors++;
      } else if (offense.severity === 'warning') {
        checksByRule[rule].warnings++;
      } else if (offense.severity === 'info') {
        checksByRule[rule].info++;
      }

      // Store instance details
      checksByRule[rule].instances.push({
        file: fileResult.path,
        line: offense.start_row,
        column: offense.start_column,
        message: offense.message,
        severity: offense.severity,
      });
    });
  }
});

// Generate markdown report
let markdown = `# Shopify Theme Check Report

Generated on: ${new Date().toISOString()}
Shopify CLI version: ${shopifyVersion}

## Summary

- **Total Files Inspected**: ${totalFiles}
- **Files with Issues**: ${filesWithIssues}
- **Total Issues**: ${totalErrors + totalWarnings + totalInfo}
  - **Errors**: ${totalErrors}
  - **Warnings**: ${totalWarnings}
  - **Info**: ${totalInfo}
- **Unique Checks Triggered**: ${Object.keys(checksByRule).length}

## Check Violations Summary

| Check | Errors | Warnings | Info | Total |
|-------|-------:|---------:|-----:|------:|
`;

// Sort checks by total count (errors weighted more)
const sortedChecks = Object.entries(checksByRule).sort((a, b) => {
  const aScore = a[1].errors * 1000 + a[1].warnings * 10 + a[1].info;
  const bScore = b[1].errors * 1000 + b[1].warnings * 10 + b[1].info;
  return bScore - aScore;
});

sortedChecks.forEach(([check, data]) => {
  const total = data.errors + data.warnings + data.info;
  markdown += `| \`${check}\` | ${data.errors} | ${data.warnings} | ${data.info} | ${total} |\n`;
});

markdown += `| **Total** | **${totalErrors}** | **${totalWarnings}** | **${totalInfo}** | **${
  totalErrors + totalWarnings + totalInfo
}** |\n\n`;

// Detailed issues by check
markdown += `## Issues by Check\n\n`;

sortedChecks.forEach(([check, data]) => {
  const total = data.errors + data.warnings + data.info;
  let icon = '❌';
  if (data.errors === 0 && data.warnings > 0) icon = '⚠️';
  if (data.errors === 0 && data.warnings === 0) icon = 'ℹ️';

  markdown += `### ${icon} ${check} (${total} issue${total > 1 ? 's' : ''})\n\n`;

  // Group by message
  const messageGroups = {};
  data.instances.forEach((instance) => {
    const key = `${instance.severity}|${instance.message}`;
    if (!messageGroups[key]) {
      messageGroups[key] = {
        severity: instance.severity,
        message: instance.message,
        locations: [],
      };
    }
    messageGroups[key].locations.push({
      file: instance.file,
      line: instance.line,
      column: instance.column,
    });
  });

  // Sort message groups by severity and count
  const sortedMessages = Object.values(messageGroups).sort((a, b) => {
    const severityOrder = { error: 0, warning: 1, info: 2 };
    if (a.severity !== b.severity) {
      return severityOrder[a.severity] - severityOrder[b.severity];
    }
    return b.locations.length - a.locations.length;
  });

  sortedMessages.forEach((group) => {
    const severityIcon = group.severity === 'error' ? '🔴' : group.severity === 'warning' ? '🟡' : '🔵';
    markdown += `**${severityIcon} [${group.severity}] ${group.message}** (${group.locations.length} occurrence${
      group.locations.length > 1 ? 's' : ''
    })\n\n`;

    // Show locations
    const maxToShow = 5;
    const locationsToShow = group.locations.slice(0, maxToShow);

    locationsToShow.forEach((loc) => {
      // Make file path relative if it's absolute
      const relativePath = loc.file.replace(/^\/Users\/[^\/]+\/src\/github\.com\/Shopify\/horizon\//, '');
      markdown += `- \`${relativePath}:${loc.line}:${loc.column}\`\n`;
    });

    if (group.locations.length > maxToShow) {
      markdown += `- ...and ${group.locations.length - maxToShow} more\n`;
    }
    markdown += '\n';
  });
});

// Add top files with issues
markdown += `## Top Files with Most Issues\n\n`;

const fileIssueCounts = {};
results.forEach((fileResult) => {
  if (fileResult.offenses && fileResult.offenses.length > 0) {
    const relativePath = fileResult.path.replace(/^\/Users\/[^\/]+\/src\/github\.com\/Shopify\/horizon\//, '');
    fileIssueCounts[relativePath] = {
      total: fileResult.errorCount + fileResult.warningCount + fileResult.infoCount,
      errors: fileResult.errorCount,
      warnings: fileResult.warningCount,
      info: fileResult.infoCount,
    };
  }
});

const sortedFiles = Object.entries(fileIssueCounts)
  .sort((a, b) => b[1].total - a[1].total)
  .slice(0, 20);

if (sortedFiles.length > 0) {
  markdown += `| File | Errors | Warnings | Info | Total |\n`;
  markdown += `|------|-------:|---------:|-----:|------:|\n`;

  sortedFiles.forEach(([file, counts]) => {
    markdown += `| \`${file}\` | ${counts.errors} | ${counts.warnings} | ${counts.info} | ${counts.total} |\n`;
  });
  markdown += '\n';
}

// Write the report
fs.writeFileSync('theme-check-report.md', markdown);
console.log('✅ Markdown report generated: theme-check-report.md');
console.log(
  `📊 Summary: ${totalErrors} errors, ${totalWarnings} warnings, ${totalInfo} info messages across ${filesWithIssues} files`
);
