#!/bin/bash

# Rave Yoga Shopify Theme Setup Script
# This script sets up a development environment for the Rave Yoga Shopify theme project.
# It installs necessary dependencies and tools for a new computer.

# Text formatting
BOLD='\033[1m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print section headers
print_section() {
  echo -e "\n${BOLD}${GREEN}==== $1 ====${NC}\n"
}

# Function to check if a command exists
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Error handler
handle_error() {
  echo -e "${RED}Error: $1${NC}"
  exit 1
}

# Start of script
print_section "Rave Yoga Shopify Theme Setup"
echo "This script will set up your development environment for the Rave Yoga Shopify theme project."
echo "It will install the necessary dependencies and tools."

# Check for Git
print_section "Checking for Git"
if ! command_exists git; then
  echo -e "${YELLOW}Git is not installed. Installing Git...${NC}"
  case "$(uname -s)" in
    Darwin)
      # macOS
      echo "Installing Git with Homebrew..."
      if ! command_exists brew; then
        echo "Homebrew is not installed. Installing Homebrew..."
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" || handle_error "Failed to install Homebrew"
      fi
      brew install git || handle_error "Failed to install Git"
      ;;
    Linux)
      # Linux
      echo "Installing Git with apt..."
      sudo apt-get update
      sudo apt-get install -y git || handle_error "Failed to install Git"
      ;;
    *)
      handle_error "Unsupported operating system. Please install Git manually."
      ;;
  esac
else
  echo "Git is already installed."
fi

# Setup NVM (Node Version Manager)
print_section "Setting up Node.js with NVM"
if ! command_exists nvm; then
  echo -e "${YELLOW}NVM is not installed. Installing NVM...${NC}"
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash || handle_error "Failed to install NVM"
  
  # Source NVM
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  
  if ! command_exists nvm; then
    echo -e "${YELLOW}NVM installation completed but not available in current session.${NC}"
    echo -e "${YELLOW}Please run 'source ~/.bashrc' or 'source ~/.zshrc' and then run this script again.${NC}"
    exit 0
  fi
else
  echo "NVM is already installed."
fi

# Install Node.js LTS
echo "Installing Node.js LTS version..."
nvm install --lts || handle_error "Failed to install Node.js LTS"
nvm use --lts || handle_error "Failed to use Node.js LTS"
node_version=$(node -v)
echo "Node.js $node_version has been installed and is active."

# Install Shopify CLI
print_section "Installing Shopify CLI"
if ! command_exists shopify; then
  echo "Installing Shopify CLI globally..."
  npm install -g @shopify/cli @shopify/theme || handle_error "Failed to install Shopify CLI"
  echo "Shopify CLI installed successfully."
else
  echo "Shopify CLI is already installed. Checking version..."
  shopify version
  echo "Do you want to update Shopify CLI? (y/n)"
  read -r update_cli
  if [[ $update_cli == "y" || $update_cli == "Y" ]]; then
    npm install -g @shopify/cli @shopify/theme || handle_error "Failed to update Shopify CLI"
    echo "Shopify CLI updated successfully."
  fi
fi

# Install Theme Check
print_section "Installing Theme Check"
if ! command_exists theme-check; then
  echo "Installing Theme Check globally..."
  npm install -g @shopify/theme-check || handle_error "Failed to install Theme Check"
  echo "Theme Check installed successfully."
else
  echo "Theme Check is already installed. Checking version..."
  theme-check --version
  echo "Do you want to update Theme Check? (y/n)"
  read -r update_tc
  if [[ $update_tc == "y" || $update_tc == "Y" ]]; then
    npm install -g @shopify/theme-check || handle_error "Failed to update Theme Check"
    echo "Theme Check updated successfully."
  fi
fi

# Clone repository if needed
print_section "Repository Setup"
if [ ! -d ".git" ]; then
  echo "Cloning the Rave Yoga repository..."
  echo "Please enter the Git repository URL:"
  read -r repo_url
  if [ -z "$repo_url" ]; then
    repo_url="git@github.com:datagekko/rave.git"
    echo "Using default repository URL: $repo_url"
  fi
  
  # If we're not already in the project directory, create it
  if [ "$(basename "$(pwd)")" != "rave" ]; then
    echo "Creating project directory..."
    mkdir -p rave
    cd rave || handle_error "Failed to create and enter project directory"
  fi
  
  git clone "$repo_url" . || handle_error "Failed to clone repository"
  echo "Repository cloned successfully."
else
  echo "Git repository already exists in this directory."
  echo "Running git pull to get the latest changes..."
  git pull || echo -e "${YELLOW}Warning: Failed to pull latest changes. You may not have the latest code.${NC}"
fi

# Setup complete
print_section "Setup Complete"
echo -e "${GREEN}The Rave Yoga Shopify theme development environment has been set up successfully.${NC}"
echo -e "\nTo start the development server, run:"
echo -e "${BOLD}shopify theme dev --store YOUR_SHOPIFY_STORE.myshopify.com${NC}"
echo "(Replace YOUR_SHOPIFY_STORE.myshopify.com with your actual store URL, e.g., 01bb23-0a.myshopify.com)"
echo -e "\nTo run theme check, use:"
echo -e "${BOLD}theme-check .${NC}"
echo -e "\nHappy coding!" 