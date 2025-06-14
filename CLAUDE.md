# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Shopify Liquid theme** project based on Dawn v15.3.0, customized for Rave Yoga. The goal is to migrate the original `rave-yoga.com` site to Shopify with pixel-perfect design replication.

## Development Commands

### Start Development Server
```bash
shopify theme dev --store YOUR_STORE.myshopify.com
```

### Code Quality
```bash
# Run theme linting
theme-check .

# Format code (Prettier configured)
prettier --write .
```

### Prerequisites Setup
```bash
# Install Node.js LTS
nvm install --lts && nvm use --lts

# Install Shopify CLI
npm install -g @shopify/cli @shopify/theme
```

## Architecture & File Structure

### Core Custom Files
- **`assets/rave-custom.css`** - Main custom stylesheet (7000+ lines)
- **`assets/rave-custom.js`** - Custom JavaScript functionality  
- **`snippets/rave-variables.liquid`** - CSS variables system mapping brand colors to Dawn globals
- **`sections/header.liquid`** - Heavily customized split navigation
- **`config/settings_schema.json`** - Added "Rave Brand Settings" section

### Theme Structure
```
/assets/     # CSS, JS, images, icons
/config/     # Theme settings and configuration
/layout/     # Base page layouts (theme.liquid)
/sections/   # Reusable page sections
/snippets/   # Reusable code fragments
/templates/  # Page template definitions
/locales/    # Internationalization (25+ languages)
```

## Brand System

### CSS Variables (defined in `snippets/rave-variables.liquid`)
- `--rave-color-primary-text`: #3D2120 (Dark brown)
- `--rave-color-secondary-text`: #555555 (Gray)
- `--rave-color-accent`: #412F26 (RAVE brown)
- `--rave-color-background-main`: #FFFFFF (White)
- `--rave-color-button-text`: #FFFFFF (White)

### Typography
- Primary font: Inter (Google Fonts)
- CSS variables: `--rave-font-stack-primary`, `--rave-font-stack-secondary`

### Responsive Breakpoints
- Mobile: `max-width: 749px`
- Desktop: `min-width: 990px`
- Mobile-first approach

## Development Standards

### CSS Guidelines
- Use CSS variables from `snippets/rave-variables.liquid` instead of hardcoded values
- All custom CSS goes in `assets/rave-custom.css` with clear section markers
- Follow BEM methodology for custom classes
- Use `rave-` prefix for custom classes
- Maintain theme update safety by isolating custom code

### Button System
- **Primary buttons**: Brown background (`--rave-color-accent`) with white text
- **Secondary buttons**: Transparent with white border, brown text on hover
- Classes: `.button--primary`, `.button--secondary`

### Header Architecture
- **Desktop**: Split navigation (Left Nav - Center Logo - Right Nav) using CSS Grid
- **Mobile**: Logo left, hamburger right using Flexbox
- Slide-down mobile menu with `max-height` animation

## Testing Requirements

### Quality Standards
- 90+ mobile Lighthouse score
- <2s LCP (Largest Contentful Paint)
- Pixel-perfect design (≤2px variance on 1440px viewport)
- Cross-device testing across mobile/tablet/desktop breakpoints

### Validation
- Run `theme-check .` for Shopify best practices
- Check console for errors
- Verify Shopify Customizer settings work correctly
- Test mobile menu and responsive layouts

## Git Workflow

### Branch Naming
- Features: `feat/descriptive-name`
- Bug fixes: `fix/descriptive-name`
- AI improvements: `codex/descriptive-name`

### Current Context
- Main branch: `main`
- Development store: `01bb23-0a.myshopify.com`

## Important Notes

### Theme Update Safety
- Minimize modifications to core Dawn files
- Use HTML comments to mark changes in core files
- Document all changes in `CUSTOMIZATIONS.md`
- Custom code is isolated in `rave-*` files

### Migration Context
This project replicates an existing website design rather than creating from scratch. Design decisions prioritize matching the original `rave-yoga.com` site.

### Retreat/Yoga Focus
Site specializes in yoga retreats and wellness experiences with custom booking functionality and retreat-specific content sections.