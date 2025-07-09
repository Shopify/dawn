#!/bin/bash

# Script to create GitHub issues with flexible options
# Usage: ./scripts/create-issue.sh --title "Issue Title" --body "Issue body" [options]

# Initialize variables
TITLE=""
BODY=""
BODY_FILE=""
LABELS=""
ASSIGNEES=""
MILESTONE=""
DRY_RUN=false

# Function to display usage
usage() {
    echo "Usage: $0 --title \"Title\" [options]"
    echo ""
    echo "Required:"
    echo "  --title \"Title\"              Issue title"
    echo ""
    echo "Body (one of these required):"
    echo "  --body \"Body text\"           Issue body text"
    echo "  --body-file <file>           Read body from file"
    echo ""
    echo "Optional:"
    echo "  --label \"label1,label2\"      Comma-separated labels"
    echo "  --assignee \"user1,user2\"     Comma-separated assignees"
    echo "  --milestone \"milestone\"      Milestone name or number"
    echo "  --dry-run                    Preview without creating"
    echo ""
    echo "Examples:"
    echo "  $0 --title \"Bug: Login fails\" --body \"Steps to reproduce...\" --label \"bug,high-priority\""
    echo "  $0 --title \"Feature Request\" --body-file feature.md --label \"enhancement\""
    echo "  $0 --title \"Test Issue\" --body \"Test\" --dry-run"
    exit 1
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --title)
            TITLE="$2"
            shift 2
            ;;
        --body)
            BODY="$2"
            shift 2
            ;;
        --body-file)
            BODY_FILE="$2"
            shift 2
            ;;
        --label|--labels)
            LABELS="$2"
            shift 2
            ;;
        --assignee|--assignees)
            ASSIGNEES="$2"
            shift 2
            ;;
        --milestone)
            MILESTONE="$2"
            shift 2
            ;;
        --dry-run)
            DRY_RUN=true
            shift
            ;;
        -h|--help)
            usage
            ;;
        *)
            echo "Unknown option: $1"
            usage
            ;;
    esac
done

# Validate required arguments
if [ -z "$TITLE" ]; then
    echo "Error: --title is required"
    usage
fi

# Handle body content
if [ -n "$BODY_FILE" ] && [ -n "$BODY" ]; then
    echo "Error: Cannot specify both --body and --body-file"
    usage
fi

if [ -n "$BODY_FILE" ]; then
    if [ ! -f "$BODY_FILE" ]; then
        echo "Error: Body file not found: $BODY_FILE"
        exit 1
    fi
    BODY=$(cat "$BODY_FILE")
elif [ -z "$BODY" ]; then
    echo "Error: Either --body or --body-file is required"
    usage
fi

# Build the gh command
GH_CMD="gh issue create --title \"$TITLE\" --body \"$BODY\""

if [ -n "$LABELS" ]; then
    GH_CMD="$GH_CMD --label \"$LABELS\""
fi

if [ -n "$ASSIGNEES" ]; then
    GH_CMD="$GH_CMD --assignee \"$ASSIGNEES\""
fi

if [ -n "$MILESTONE" ]; then
    GH_CMD="$GH_CMD --milestone \"$MILESTONE\""
fi

# Display what will be created
echo "=== Creating GitHub Issue ==="
echo ""
echo "TITLE: $TITLE"
if [ -n "$LABELS" ]; then
    echo "LABELS: $LABELS"
fi
if [ -n "$ASSIGNEES" ]; then
    echo "ASSIGNEES: $ASSIGNEES"
fi
if [ -n "$MILESTONE" ]; then
    echo "MILESTONE: $MILESTONE"
fi
echo ""
echo "BODY:"
echo "===================="
echo "$BODY" | head -50
if [ $(echo "$BODY" | wc -l) -gt 50 ]; then
    echo "... (truncated, showing first 50 lines)"
fi
echo "===================="
echo ""

# Execute or dry run
if [ "$DRY_RUN" = true ]; then
    echo "DRY RUN - Issue would be created with command:"
    echo "$GH_CMD"
else
    echo "Creating issue..."
    eval $GH_CMD
fi
