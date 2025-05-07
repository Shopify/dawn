# RAVE YOGA - Shopify Dawn Theme Customizations

**Theme Version:** Dawn 15.3.0
**Project:** Migrate rave-yoga.com to Shopify using Dawn theme.
**Date Started:** $(date +%Y-%m-%d)

## Overview

This document tracks all customizations made to the base Dawn theme for the Rave Yoga Shopify store. The goal is to replicate the design and functionality of the existing `rave-yoga.com` website while adhering to Shopify best practices, maintaining theme upgradeability where possible, and ensuring a performant storefront.

## General Customization Strategy

- **CSS Variables:** Custom CSS variables are defined in `snippets/rave-variables.liquid` and are prefixed with `--rave-`. These variables leverage theme settings for brand colors defined in `config/settings_schema.json` under "Rave Brand Settings".
- **Custom CSS:** All custom CSS rules are placed in `assets/rave-custom.css` and BEM-style classes are prefixed with `rave-` (e.g., `rave-hero__title`).
- **Custom JavaScript:** Custom JavaScript is contained within `assets/rave-custom.js`, using an IIFE to avoid global scope pollution. Event listeners and Shopify section events are used where appropriate.
- **Liquid Modifications:** Changes to existing Dawn Liquid files are clearly marked with `<!-- RAVE CUSTOMIZATION START -->` and `<!-- RAVE CUSTOMIZATION END -->` comments. New sections and snippets are created with a `rave-` prefix or a clear custom naming convention.
- **Localization:** All new user-facing strings are added to `locales/rave-yoga.en.default.json` and referenced in Liquid using the `t:` filter (e.g., `{{ 'sections.custom_hero.title' | t }}`).
- **Asset Organization:** Custom images and assets are named with a `rave-` prefix and stored in the `assets` directory (e.g., `assets/rave-logo.png`).

## Modified Core Dawn Files

*(This section will be populated as files are modified)*

- **`config/settings_schema.json`**: Added "Rave Brand Settings" for theme editor color controls.
- **`layout/theme.liquid`**: 
    - Included `snippets/rave-variables.liquid`.
    - Enqueued `assets/rave-custom.css`.
    - Included `assets/rave-custom.js`.

## New Custom Files Added

*(This section will be populated as files are created)*

- **`snippets/rave-variables.liquid`**: Contains custom CSS variable definitions and mappings to Dawn's core variables.
- **`assets/rave-custom.css`**: Houses all custom CSS for the Rave Yoga theme.
- **`assets/rave-custom.js`**: Contains all custom JavaScript functionalities.
- **`locales/rave-yoga.en.default.json`**: Stores all custom translation strings for the theme.
- **`CUSTOMIZATIONS.md`**: This file.

## Section-Specific Customizations

*(Details for each customized or new section will be added here as they are developed, e.g., Home Page Hero, Product Page Accordions etc.)*

### Home Page

- **Hero Banner:** (Details to be added)

### Collection Page

- (Details to be added)

### Product Page

- (Details to be added)

## Known Update Risks & Considerations

*(This section will highlight any customizations that might conflict with future Dawn theme updates or require manual review after updates.)*

- Overrides to core Dawn CSS variables in `rave-variables.liquid` should be checked against new Dawn versions.
- Modifications to `theme.liquid` for including custom assets are generally safe but should be verified.

## Performance Monitoring Notes

*(Notes on performance impact and optimizations for custom sections/features will be added here.)*

- LCP, CLS, FID to be monitored for each new major component.

## QA Checklist Reminders

- Pixel diff ≤2 px on 1440w viewport (target).
- 90+ mobile Lighthouse score, <2s LCP (target).
- Test on defined breakpoints: mobile, 750px (tablet), 990px (desktop).
- Verify all custom text uses translation keys.
- Check for console errors in JS.
- Validate HTML structure. 