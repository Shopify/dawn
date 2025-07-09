# GitHub Issue Scripts

This directory contains scripts to view and create GitHub issues.

## Prerequisites

Before using these scripts, you must authenticate with GitHub CLI:

```bash
gh auth login
```

Follow the prompts to authenticate with your GitHub account.

## Available Scripts

### 1. `view-issue.sh`

View details of any GitHub issue in the repository.

**Usage:**

```bash
./scripts/view-issue.sh <issue-number>
```

**Examples:**

```bash
# View issue #4971
./scripts/view-issue.sh 4971

# View issue #5000
./scripts/view-issue.sh 5000
```

This script displays:

- Issue title
- URL
- Labels
- State (open/closed)
- Full body content

### 2. `create-issue.sh`

Create GitHub issues with flexible options.

**Usage:**

```bash
./scripts/create-issue.sh --title "Title" [options]
```

**Required Arguments:**

- `--title "Title"` - Issue title
- `--body "Body text"` OR `--body-file <file>` - Issue body content

**Optional Arguments:**

- `--label "label1,label2"` - Comma-separated labels
- `--assignee "user1,user2"` - Comma-separated assignees
- `--milestone "milestone"` - Milestone name or number
- `--dry-run` - Preview without creating

**Examples:**

```bash
# Create a simple issue
./scripts/create-issue.sh --title "Bug: Login fails" --body "Steps to reproduce..."

# Create issue with labels
./scripts/create-issue.sh --title "Feature Request" --body "Add dark mode" --label "enhancement,ui"

# Create issue from file with assignee
./scripts/create-issue.sh --title "Documentation Update" --body-file docs.md --assignee "username" --label "documentation"

# Preview issue without creating (dry run)
./scripts/create-issue.sh --title "Test Issue" --body "Test content" --label "test" --dry-run

# Create issue with multiple options
./scripts/create-issue.sh \
  --title "[Component] Missing tests for Cart Icon" \
  --body-file test-spec.md \
  --label "test-coverage,component" \
  --assignee "dev1,dev2" \
  --milestone "v2.0"
```

## Tips

- Use `--dry-run` to preview what will be created before actually creating the issue
- You can use either `--body` for inline text or `--body-file` to read from a file
- Multiple labels and assignees can be specified using comma separation
- The create script will show a preview of the issue before creating it
- Issue numbers returned by the create script can be immediately used with the view script
