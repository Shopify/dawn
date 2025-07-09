#!/bin/bash

# Script to view GitHub issue details
# Usage: ./scripts/view-issue.sh <issue-number>

if [ $# -eq 0 ]; then
    echo "Usage: $0 <issue-number>"
    echo "Example: $0 4971"
    exit 1
fi

ISSUE_NUMBER="$1"

echo "=== GitHub Issue #$ISSUE_NUMBER ==="
echo ""

# Get basic info using a single API call
echo "Getting issue information..."
gh api repos/Shopify/horizon/issues/$ISSUE_NUMBER > /tmp/issue-$ISSUE_NUMBER.json

# Extract and display title
echo "TITLE:"
cat /tmp/issue-$ISSUE_NUMBER.json | jq -r '.title'
echo ""

# Extract and display URL
echo "URL:"
cat /tmp/issue-$ISSUE_NUMBER.json | jq -r '.html_url'
echo ""

# Extract and display labels
echo "LABELS:"
cat /tmp/issue-$ISSUE_NUMBER.json | jq -r '.labels[].name'
echo ""

# Extract and display state
echo "STATE:"
cat /tmp/issue-$ISSUE_NUMBER.json | jq -r '.state'
echo ""

# Display body
echo "BODY:"
echo "=========================================="
cat /tmp/issue-$ISSUE_NUMBER.json | jq -r '.body'
echo "=========================================="

# Clean up
rm -f /tmp/issue-$ISSUE_NUMBER.json
