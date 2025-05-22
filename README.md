# Orange Shopify Theme

A custom Shopify theme for Orange, based on Dawn 15.3.0.

## Prerequisites

- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli/install)
- Node.js (v20 or higher)
- Git

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd orange-shopify-theme
```

2. Install dependencies (if using npm/yarn for build tools):
```bash
npm install
# or
yarn install
```

### Development

Start the development server:
```bash
shopify theme dev --store=orange-amps.myshopify.com
```

This will:
- Start a local development server
- Watch for file changes and sync them to your development theme
- Provide a preview URL for testing

### Authentication

If this is your first time using Shopify CLI, you'll need to authenticate:
```bash
shopify auth login
```

## Project Structure

```
├── assets/           # CSS, JS, images, and other static files
├── config/           # Theme settings and configuration
├── layout/           # Theme layout templates
├── locales/          # Translation files
├── sections/         # Reusable theme sections
├── snippets/         # Reusable code snippets
├── templates/        # Page templates
└── README.md
```

## Development Workflow

### Branch Strategy

- `main` - Production branch (live theme)
- `staging` - Development branch for staging
- `feature/*` - Feature branches for new functionality

### Making Changes

1. Create a new branch from `main`:
```bash
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

2. Make your changes and test locally:
```bash
shopify theme dev --store=orange-amps.myshopify.com
```

3. Commit your changes:
```bash
git add .
git commit -m "Add: descriptive commit message"
```

4. Push your branch:
```bash
git push origin feature/your-feature-name
```

### Code Review Process

1. Create a pull request from your feature branch to `main`
2. Request review from team members
3. Address any feedback
4. Merge after approval

## Deployment

### To Staging

Merge approved changes to `staging` branch:
```bash
git checkout staging
git merge --no-ff feature/your-feature-name
git push origin staging
```

Deploy to development theme:
```bash
shopify theme push --development --store=orange-amps.myshopify.com
```

### To Production

1. Merge `feature/your-feature-name` to `main`:
```bash
git checkout main
git merge --no-ff feature/your-feature-name
git push origin main
```

2. Deploy to live theme:
```bash
shopify theme push --live --store=orange-amps.myshopify.com
```

⚠️ **Warning**: Always backup your live theme before pushing to production!

## Useful Commands

### Theme Management

```bash
# List all themes
shopify theme list --store=orange-amps.myshopify.com

# Pull theme files from Shopify
shopify theme pull --store=orange-amps.myshopify.com

# Push theme files to Shopify
shopify theme push --store=orange-amps.myshopify.com

# Create a new theme
shopify theme push --unpublished --store=orange-amps.myshopify.com

# Share theme preview
shopify theme share --store=orange-amps.myshopify.com
```

### File Operations

```bash
# Watch for changes and sync
shopify theme dev --store=orange-amps.myshopify.com --live-reload

# Ignore specific files during sync
# Add patterns to .shopifyignore file

# Pull only specific files
shopify theme pull --only=templates/product.liquid --store=orange-amps.myshopify.com
```

## Environment Configuration

### Theme Settings

Configure theme settings in `config/settings_schema.json` and test with different configurations in `config/settings_data.json`.

## Troubleshooting

### Common Issues

**Authentication errors:**
```bash
shopify auth logout
shopify auth login
```

**Sync issues:**
- Check `.shopifyignore` file
- Verify file permissions
- Restart the dev server

**Theme not updating:**
- Clear browser cache
- Check network connection
- Verify theme ID

### Getting Help

- [Shopify CLI Documentation](https://shopify.dev/docs/themes/tools/cli)
- [Liquid Documentation](https://shopify.dev/docs/api/liquid)
- [Theme Development Guide](https://shopify.dev/docs/themes)

## Contributing

1. Follow the development workflow outlined above
2. Ensure code follows project standards
3. Test thoroughly before submitting PR
4. Include clear descriptions in pull requests

## Support

For questions or issues, contact the development team or create an issue in this repository.
