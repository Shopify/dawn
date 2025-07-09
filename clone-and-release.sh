#!/bin/bash

# Clone and create releases for all Horizon demo stores
# This script clones each repository, copies the release-notes.md,
# and runs the create-release script
# You can run this with VERSION=1.0.2 ./clone-and-release.sh

set -e

# Working directory
WORKING_DIR=$(pwd)
RELEASE_NOTES_PATH="$WORKING_DIR/release-notes.md"
RELEASE_SCRIPT_PATH="$WORKING_DIR/scripts/create-release.js"

# Store repositories to clone
REPOS=(
  "horizon-demo-store-one"
  "horizon-demo-store-two"
  "horizon-demo-store-four"
  "horizon-demo-store-five"
  "horizon-demo-store-six"
  "horizon-demo-store-seven"
  "horizon-demo-store-eight"
  "horizon-demo-store-ten"
  "horizon-demo-store-eleven"
  "horizon-demo-store-twelve"
)

# Create a temporary directory for cloning
TEMP_DIR=$(mktemp -d)
echo "Created temporary directory: $TEMP_DIR"

# Function to clean up on exit
cleanup() {
  echo "Cleaning up temporary directory..."
  rm -rf "$TEMP_DIR"
}

# Register cleanup function to run on script exit
trap cleanup EXIT

# Check if release-notes.md exists
if [ ! -f "$RELEASE_NOTES_PATH" ]; then
  echo "Error: release-notes.md not found at $RELEASE_NOTES_PATH"
  exit 1
fi

echo "Starting clone and release process for all repos..."

for REPO in "${REPOS[@]}"; do
  echo "-------------------------------------------------"
  echo "Processing repository: $REPO"
  echo "-------------------------------------------------"

  # Clone the repository
  REPO_DIR="$TEMP_DIR/$REPO"
  echo "Cloning $REPO to $REPO_DIR..."
  git clone "git@github.com:Shopify/$REPO.git" "$REPO_DIR"

  # Navigate to the repository directory
  cd "$REPO_DIR"
  git checkout empty

  # Copy release-notes.md from the original directory
  echo "Copying release-notes.md..."
  cp "$RELEASE_NOTES_PATH" ./release-notes.md
  cp "$RELEASE_SCRIPT_PATH" ./scripts/create-release.js

  npm install

  # Run create-release script
  echo "Running create-release script..."
  shadowenv exec -- npm run create-release -- --version $VERSION

  # Get the created zip file name
  ZIP_FILE=$(ls -t ./*.zip | head -1)
  if [ -f "$ZIP_FILE" ]; then
    # Copy the zip file to the original directory
    echo "Copying $ZIP_FILE to $WORKING_DIR"
    cp "$ZIP_FILE" "$WORKING_DIR/"
  else
    echo "Warning: No zip file was created for $REPO"
  fi

  # Return to the working directory
  cd "$WORKING_DIR"

  echo "Completed processing for $REPO"
  echo ""
done

echo "-------------------------------------------------"
echo "All repositories processed successfully!"
echo "Release zip files are available in: $WORKING_DIR"
echo "-------------------------------------------------"
