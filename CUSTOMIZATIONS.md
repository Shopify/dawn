# RAVE YOGA - Shopify Dawn Theme Customizations

**Theme Version:** Dawn 15.3.0
**Project:** Migrate rave-yoga.com to Shopify using Dawn theme.
**Date Started:** $(date +%Y-%m-%d)

## Development Progress Summary

### ✅ Completed Features (2024-12-21)
- **Cart Drawer Implementation**: Floating brown square cart icon with drawer functionality
- **Header Customization**: Split navigation layout for desktop, mobile hamburger menu
- **Product Page Enhancements**: Complementary products with accordion styling
- **Collection Page**: Product grid with RAVE brand styling and badges
- **Brand Color System**: Custom CSS variables and theme settings integration
- **Enhanced Hero Section**: Centered branding elements with customizable logo, subheadline, and dual buttons
- **Global Button System**: Consistent button styling system with proper hover states and mobile responsiveness

### 🚧 In Progress
- TBD

### 📋 Upcoming Features
- Footer customizations
- Additional product page features

## Overview

This document tracks all customizations made to the base Dawn theme for the Rave Yoga Shopify store. The goal is to replicate the design and functionality of the existing `rave-yoga.com` website while adhering to Shopify best practices, maintaining theme upgradeability where possible, and ensuring a performant storefront.

## General Customization Strategy

- **CSS Variables:** Custom CSS variables are defined in `snippets/rave-variables.liquid` and are prefixed with `--rave-`. These variables leverage theme settings for brand colors defined in `config/settings_schema.json` under "Rave Brand Settings".
- **Custom CSS:** All custom CSS rules are placed in `assets/rave-custom.css` and BEM-style classes are prefixed with `rave-` (e.g., `rave-hero__title`).
- **Custom JavaScript:** Custom JavaScript is contained within `assets/rave-custom.js`, using an IIFE to avoid global scope pollution. Event listeners and Shopify section events are used where appropriate.
- **Liquid Modifications:** Changes to existing Dawn Liquid files are clearly marked with `<!-- RAVE CUSTOMIZATION START -->` and `<!-- RAVE CUSTOMIZATION END -->` comments. New sections and snippets are created with a `rave-` prefix or a clear custom naming convention.
- **Localization:** All new user-facing strings are added to `locales/rave-yoga.en.default.json` and referenced in Liquid using the `t:` filter (e.g., `{{ 'sections.custom_hero.title' | t }}`).
- **Asset Organization:** Custom images and assets are named with a `rave-` prefix and stored in the `assets` directory (e.g., `assets/rave-logo.png`).
- **Button System:** Consistent global button system defined in `assets/rave-custom.css` with primary and secondary styles and proper hover states.

## Modified Core Dawn Files

*(This section will be populated as files are modified)*

- **`config/settings_schema.json`**: Added "Rave Brand Settings" for theme editor color controls.
- **`layout/theme.liquid`**: 
    - Included `snippets/rave-variables.liquid`.
    - Enqueued `assets/rave-custom.css`.
    - Included `assets/rave-custom.js`.
- **`sections/main-product.liquid` (2024-12-20)**: Enhanced complementary products block with promotional message settings
- **`templates/product.json` (2024-12-20)**: Added complementary products block configuration as collapsible section
- **`sections/header.liquid`**: 
    - Added "Rave Brand Settings" for theme editor color controls.
    - Uncommented cart icon section to enable cart drawer functionality (2024-12-21).

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

#### Enhanced Hero Section (Updated 2024-06-14)

**Implementation Summary:**
- Added centered branding elements to the main hero section
- Created a semi-transparent overlay for better text visibility
- Added three customizable elements: logo, subheadline, and dual buttons
- Implemented responsive behavior for mobile and desktop
- **Updates (2024-06-14)**: 
  - Fixed vertical centering issue with header offset
  - Improved button styling with proper hover states
  - Ensured consistent height calculation (viewport height minus header)

**Key Files Modified:**
- `sections/main-hero.liquid`: Added content overlay with logo, subheadline, and buttons
- `assets/rave-custom.css`: Added styling for new hero elements using RAVE brand variables

**Shopify Customizer Settings Added:**
- **Logo**: 
  - Image picker for hero logo
  - Width slider (50-400px) for customizable logo size
- **Subheadline**: 
  - Text field with default "Welcome to Rave Yoga"
- **Buttons**:
  - Button 1: Text and URL fields (default "Shop Now")
  - Button 2: Text and URL fields (default "Learn More")

**Design Implementation Details:**

1. **Content Overlay Structure**:
   - Semi-transparent overlay (`rgba(0, 0, 0, 0.3)`) for better text visibility
   - Centered content container with `flex` layout
   - Z-index positioning to ensure content appears above background media

2. **Logo Implementation**:
   - Customizable width via theme settings (50-400px range)
   - Responsive scaling for different devices
   - Proper image handling with alt text and lazy loading

3. **Typography & Styling**:
   - Used RAVE brand font variables (`--rave-font-stack-primary`)
   - Added text shadow for improved readability on various backgrounds
   - Maintained consistent vertical spacing between elements

4. **Button Design**:
   - Primary button: RAVE accent color background with white text
   - Secondary button: Transparent with white border and rounded corners
   - Hover states for both button types with smooth transitions:
     - Primary: Transitions to transparent with white border and text
     - Secondary: Fills with white and changes text to brown
   - Consistent padding, border-radius, and typography
   - No box shadows or outlines in any state

5. **Responsive Behavior**:
   - Desktop: Horizontal button layout with flexible spacing
   - Mobile: Vertical stacked buttons for better tap targets
   - Font size adjustments for smaller screens
   - Height calculated as viewport height minus header height for perfect centering

**Technical Implementation:**
- Used BEM naming convention for all new CSS classes (e.g., `main-hero__logo`)
- Leveraged existing background handling for images/videos
- Applied proper event handling with pointer-events for nested links
- Ensured proper accessibility with semantic HTML structure

**CSS Architecture Decisions:**
- Used CSS custom properties for consistent styling and easy theme updates
- Applied mobile-first approach with responsive overrides
- Implemented flexible layouts that adapt to different content lengths
- Added fallback colors alongside CSS variables for backward compatibility
- Used high-specificity selectors with `!important` to override Dawn's base styles where needed

**Testing & QA Notes:**
- Verified rendering on mobile (375px), tablet (750px), and desktop (990px+)
- Tested with various background types (image, video, placeholder)
- Confirmed proper button hover/focus states with no unwanted borders or shadows
- Validated proper overlay visibility with different background colors/images
- Verified vertical centering with header offset calculation

**Maintenance Considerations:**
- CSS styling is isolated to dedicated classes to prevent conflicts
- All new settings are grouped in the theme editor for easy discovery
- Default values ensure good appearance even without customization
- Button styling system was designed for reuse across the site

#### Global Button System (2024-06-14)

**Implementation Summary:**
- Created a consistent button styling system across the entire theme
- Defined primary and secondary button styles with proper hover states
- Ensured buttons maintain brand consistency with proper overrides of Dawn base styles

**Key Files Modified:**
- `assets/rave-custom.css`: Added comprehensive button system styling

**Button Types and States:**

1. **Primary Button**:
   - Default: Brown background (#412F26) with white text
   - Hover: Transparent background with white border and text
   - Both states have rounded corners (var(--buttons-radius, 3px))
   - No box shadows or outlines in any state

2. **Secondary Button**:
   - Default: Transparent background with white border and text
   - Hover: White background with brown text (#412F26)
   - Both states have rounded corners (var(--buttons-radius, 3px))
   - No box shadows or outlines in any state

**Technical Implementation:**
- Used high-specificity selectors with `!important` to override Dawn's base styles
- Targeted all button classes used by Dawn theme (.button, .shopify-challenge__button, etc.)
- Completely removed box shadows and :after pseudo-elements to prevent unwanted borders
- Reset all button-related CSS variables to ensure consistent appearance
- Maintained responsive behavior with specific mobile styling

**CSS Architecture Decisions:**
- Applied consistent class naming for different button types (--primary, --secondary)
- Used CSS variables for colors to ensure theme-wide consistency
- Provided appropriate fallback values for all variable-based properties
- Created a reusable system that can be easily applied to new buttons

**Maintenance Considerations:**
- Button system is designed to withstand Dawn theme updates
- All buttons automatically inherit the styling without additional class names
- Style is maintained across hover, focus, and active states

### Collection Page

- **Product Grid Border Fix (2024-12-21)**: Updated the collection product grid styling to ensure consistent 1px borders between products without overlapping. Applied a border to the outer grid container and right/bottom borders to individual grid items. Used a negative margin technique to prevent double borders. Added specific handling for the last item in each row on desktop and mobile views.
- **Badge Styling (2023-09-07)**: Updated "Sold Out" and "On Sale" badges to display as rectangular banners in Rave brown color (#3D2120) with white text. Positioned at the top-left of product images. Implementation in `assets/rave-custom.css`.

### Product Page

#### Complementary Products Feature (2024-12-20)

**Implementation Summary:**
- Added complementary products as a third collapsible section on product detail pages
- Positioned after "Product Information" and "Shipping & Returns" sections
- Integrated seamlessly with existing accordion styling and behavior

**Key Files Modified:**
- `templates/product.json`: Added complementary products block with quick-add enabled
- `sections/main-product.liquid`: Enhanced with promotional message settings (lines 1426-1445)
- `assets/rave-custom.css`: Extensive styling for perfect visual integration

**Shopify Customizer Settings Added:**
- `block_heading`: Customizable section title (default: "Complementary Products")
- `show_promotional_message`: Toggle for promotional message display
- `promotional_message`: Custom promotional text field
- `enable_quick_add`: Direct add-to-cart functionality
- `product_list_limit`: Number of products to display (default: 6)
- `products_per_page`: Products per pagination page (default: 3)
- `image_ratio`: Product image aspect ratio (default: square)

**Design Integration Challenges & Solutions:**

1. **Border Conflicts (Major Issue)**
   - **Problem**: Dawn's component-complementary-products.css added extra top borders
   - **Solution**: Comprehensive CSS overrides targeting multiple selector combinations:
     - `.product .complementary-products` and all variations
     - `aside.product__accordion.accordion` specific targeting
     - `product-recommendations` container styling
   - **Final Fix**: Used `:not(:last-child)` and `:last-of-type` selectors to preserve bottom border only on last accordion item

2. **Icon Removal**
   - **Problem**: Dawn's default accordion icons conflicted with custom +/- design
   - **Solution**: Aggressive icon hiding using multiple properties:
     ```css
     display: none !important;
     visibility: hidden !important;
     opacity: 0 !important;
     ```

3. **Typography Consistency**
   - **Challenge**: Ensure identical styling across mobile and desktop
   - **Solution**: Moved collapsible tab styling outside desktop media query
   - **Key Properties**: Inter font, 9px size, uppercase transform, normal weight
   - **Mobile Variables**: Added CSS custom properties for responsive padding

4. **Product Card Alignment**
   - **Initial Issue**: Product cards flush left, misaligned with promotional text
   - **Iterations**: 
     - First attempt: `var(--product-info-padding-left, 1rem)` - too far right
     - Final solution: `0.5rem` padding for perfect alignment

**CSS Architecture Decisions:**

1. **Variable Strategy**: Used CSS custom properties for responsive padding:
   ```css
   --product-info-padding-left: 1rem; /* mobile */
   --product-info-padding-left: 15px; /* desktop */
   ```

2. **Selector Specificity**: Employed high-specificity selectors to override Dawn defaults:
   ```css
   .product .complementary-products.is-accordion.quick-add-hidden
   ```

3. **Cross-Device Consistency**: Applied core styling globally, then added device-specific overrides

**Testing & Troubleshooting:**

1. **Development Server Sync Issues**
   - **Problem**: Changes visible in preview but not localhost
   - **Solution**: Restarted development server and cleared browser cache
   - **Root Cause**: Template changes required server restart to sync

2. **Border Persistence**
   - **Issue**: Extra border remained despite multiple CSS attempts
   - **Investigation**: Used browser dev tools to identify exact element hierarchy
   - **Resolution**: Required targeting `aside` element specifically, not just container classes

3. **Icon Layout Disruption**
   - **Problem**: Dawn's accordion icons appeared despite +/- custom implementation
   - **Fix**: Comprehensive icon selector targeting including nested elements

**Performance Considerations:**
- Leveraged existing Dawn complementary products functionality (no custom JS required)
- CSS additions: ~100 lines focused on integration styling
- Quick-add functionality uses Dawn's built-in components
- No additional HTTP requests for core functionality

**Maintenance Notes:**
- Border styling may need review if Dawn updates component-complementary-products.css
- CSS variable approach allows easy adjustment of spacing/alignment
- Icon hiding selectors should be checked against Dawn icon structure changes
- Promotional message styling is self-contained and theme-update safe

### Cart & E-commerce

- **Cart Drawer:** (2024-12-21)
  - **Purpose:** Replaced notification-style cart with side-sliding cart drawer for better user experience
  - **Files Modified:**
    - `sections/header.liquid`: Uncommented cart icon to enable clickable cart functionality, added floating cart icon
    - `config/settings_schema.json`: Changed default cart type from 'notification' to 'drawer'
    - `assets/rave-custom.css`: Added comprehensive RAVE brand styling for all cart drawer components and floating cart icon
  - **Features:**
    - **Floating Cart Icon**: Fixed position on right side of screen, vertically centered, flush against right edge
    - **Brown Square Design**: 5rem x 5rem brown square with white cart icon (RAVE accent color #412F26)
    - **Hover Effects**: Transitions to darker brown (#3D2120) with subtle scale animation (1.05x)
    - **Cart Count Bubble**: Circular badge positioned at top-right corner when items are in cart
    - Side-sliding drawer panel with cart contents
    - Quantity controls with + / - buttons
    - Remove item functionality
    - Checkout button with RAVE brand colors
    - Empty cart state with "Continue Shopping" button
    - **Responsive Design**: Scales appropriately for mobile (4.5rem) and desktop (5rem)
    - **Hidden Header Icon**: Original header cart icon is completely hidden to avoid duplication
  - **Technical Implementation:**
    - **Positioning**: `position: fixed; top: 50%; right: 0; transform: translateY(-50%)`
    - **Z-Index**: 1000 to ensure it appears above all other content
    - **Accessibility**: Maintains Dawn's built-in ARIA labels and keyboard navigation
    - **Performance**: Uses CSS transforms and transitions for smooth animations
  - **Styling:** All cart components use RAVE CSS variables for consistent brand colors and typography
  
  - **Layout Optimizations:** (2024-12-21)
    - **Duplicate Pricing Fix**: Removed redundant total column and price displays
    - **Header Cleanup**: Removed "Product" header from cart drawer for cleaner appearance
    - **CSS Optimizations**: Consolidated styling rules for better maintainability
  - **Completion Status:** ✅ Fully implemented and tested
  - **Double-Click Close Fix:** (2024-12-21)
    - **Issue:** Cart drawer required two clicks to close
    - **Root Cause:** Duplicate cart drawers were being rendered (one in theme.liquid, one in header.liquid)
    - **Solution:** Removed duplicate cart drawer render from header.liquid
    - **Additional Changes:** 
      - Changed floating cart icon from `<a>` to `<button>` for proper semantic HTML
      - Removed unnecessary JavaScript and CSS workarounds
    - **Status:** ✅ Fixed - single click now properly closes cart drawer

## Known Update Risks & Considerations

*(This section will highlight any customizations that might conflict with future Dawn theme updates or require manual review after updates.)*

- Overrides to core Dawn CSS variables in `rave-variables.liquid` should be checked against new Dawn versions.
- Modifications to `theme.liquid` for including custom assets are generally safe but should be verified.
- **Complementary Products Styling (High Risk)**: Extensive CSS overrides for Dawn's component-complementary-products.css may conflict with future updates. Key areas to review:
  - Border styling and accordion integration
  - Icon hiding selectors if Dawn changes icon implementation
  - Promotional message positioning if Dawn modifies block structure

## Performance Monitoring Notes

*(Notes on performance impact and optimizations for custom sections/features will be added here.)*

- LCP, CLS, FID to be monitored for each new major component.
- **Complementary Products**: No performance impact expected - leverages existing Dawn functionality with styling-only modifications

## QA Checklist Reminders

- Pixel diff ≤2 px on 1440w viewport (target).
- 90+ mobile Lighthouse score, <2s LCP (target).
- Test on defined breakpoints: mobile, 750px (tablet), 990px (desktop).
- Verify all custom text uses translation keys.
- Check for console errors in JS.
- Validate HTML structure.
- **Product Page Specific**: Test complementary products display, quick-add functionality, and accordion behavior across all devices 

## Configuration Changes

- **`config/settings_schema.json`**: 
    - Added "Rave Brand Settings" for theme editor color controls.
    - Changed default cart type from 'notification' to 'drawer' to enable cart drawer (2024-12-21). 