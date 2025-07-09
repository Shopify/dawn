# Breaking Changes Since Last Breaking Version (1.0.1)

**Analysis Period:** Since 2025-05-22 10:10:26 -0400 (commit date of version 1.0.1)

## Confirmed Breaking Changes:

### 1. **PR #5053** - "Remove confusing product & collection settings" (Merged: 2025-06-26)

- **Type**: API Changes - Removal of Settings/Configuration Options
- **Impact**: Major breaking change that removes all explicit product & collection picker settings from multiple blocks and sections. Now relies on `closest.product` and `closest.collection` context instead of explicit settings.
- **Affected Components**:
  - **Global theme blocks**: collection-title, accelerated-checkout, buy-buttons, add-to-cart, quantity, price, product-inventory, product-title, product-recommendations, review, swatches, variant-picker
  - **Targeted blocks**: \_collection-card-image, \_featured-product-title, \_product-card-gallery, \_product-media-gallery
  - **Sections**: product-information
- **Breaking**: Existing themes with explicitly set product/collection references will lose those settings and need to be reconfigured

### 2. **PR #4756** - "[Product card] Change a list of blocks we allow to add." (Merged: 2025-06-25)

- **Type**: Configuration Changes - Block Architecture Restrictions
- **Impact**: Creates new private `_product-card-group` block with restricted allowed blocks, removes `buy-buttons` from allowed blocks in product cards, replaces all `group` blocks with `_product-card-group` within product cards
- **Breaking**: Existing product cards using buy-buttons, variant-picker, or other restricted blocks directly within the product card will lose functionality. Merchants will need to use the dedicated quick-add feature instead.

## Potential Breaking Changes:

### 3. **PR #4621** - "Create a publishing action" (Merged: 2025-05-26)

- **Type**: Build/Deployment Process Changes
- **Impact**: Adds GitHub workflow for automated publishing across demo stores, changes release creation process with SEMVER validation
- **Needs Review**: May affect how theme updates are deployed to demo stores, but likely not breaking for end merchants

## Summary:

2 confirmed breaking changes found since version 1.0.1 (2025-05-22)

**Key Areas of Impact:**

- **Product/Collection Settings Removal**: Major API change removing explicit resource pickers across the theme
- **Product Card Block Restrictions**: Structural changes limiting what blocks can be used within product cards
- **Context-Based Architecture**: Shift from explicit settings to context-based (`closest.product/collection`) approach

**Merchant Impact:**

- **High Impact**: Themes will need significant updates to work with the new `closest.product/collection` system
- **Medium Impact**: Product cards may lose some functionality and require reconfiguration to use quick-add features
- **Configuration Required**: Existing themes using removed settings will need manual migration to the new context-based approach

**Recommendation**: These changes represent significant breaking modifications that will require comprehensive theme updates and merchant communication about the new architecture.

## Solving breaking changes

Based on the template file changes in the breaking change PRs, here are the key patterns to follow when updating themes:

### Product/Collection Settings Removal (PR #5053):

- Remove `"product": "{{ closest.product }}"` settings from block configurations
- Remove `"collection": "{{ closest.collection }}"` settings from block configurations
- Update block presets to remove explicit product/collection references
- Blocks now automatically inherit context from `closest.product` and `closest.collection`
- Static blocks no longer need explicit product/collection settings in their configuration

### Product Card Block Restrictions (PR #4756):

- Replace `"type": "group"` with `"type": "_product-card-group"` in product card contexts
- Replace `"type": "product-card"` with `"type": "_product-card"` in recommendation contexts
- Remove `"buy-buttons"` from allowed block types in product-card schemas
- Update block_order arrays to use new block types (e.g., `"product_title"` instead of `"text"`)
- Ensure nested groups within product cards use the restricted `_product-card-group` type
