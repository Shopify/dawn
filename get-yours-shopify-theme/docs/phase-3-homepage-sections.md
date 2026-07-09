# Phase 3 Homepage Sections

## Status

Phase 3 homepage section conversion is complete.

This phase only touched the Dawn homepage composition and new Get Yours homepage sections. Product templates, collection templates, cart logic, search templates, content pages, header, footer and the frozen static prototype were not modified.

## Files Created

- `sections/gy-promo-grid-hero.liquid`
- `sections/gy-category-grid.liquid`
- `sections/gy-featured-collection.liquid`
- `sections/gy-trust-grid.liquid`
- `docs/phase-3-homepage-sections.md`

## Files Modified

- `templates/index.json`
- `assets/gy-theme.css`

## Sections Created

### Promo Grid Hero

`gy-promo-grid-hero.liquid` converts the static prototype's promo-grid direction into a Shopify section with merchant-editable images, copy, links and overlay strength.

Default homepage copy:

- Main tile: `Smart everyday finds for less.`
- Secondary tile 1: `Office & Desk Essentials`
- Secondary tile 2: `Travel & Daily Accessories`

If no images are selected, Shopify placeholder SVGs render so the homepage does not break.

### Shop by Category

`gy-category-grid.liquid` provides a merchant-editable six-card category navigation section.

Default categories:

- Home Organisation
- Office & Desk
- Kitchen & Storage
- Lifestyle
- Travel
- Tech Accessories

Each block can link to a selected collection or fallback URL. The section is navigation-only and does not implement filtering.

### Featured Collection Rail

`gy-featured-collection.liquid` is a reusable collection-driven rail used five times on the homepage:

- Featured Practical Finds
- New Arrivals
- Best Sellers
- Home Organisation Picks
- Office & Desk Essentials

The section preserves Dawn product card rendering by using the existing `card-product` snippet. It supports collection selection, product limit, view-all link, desktop/mobile columns, image ratio, secondary image, vendor, rating and Dawn quick add settings.

If no collection is selected or a collection has no products, Dawn placeholder product cards render with a short editor-facing message.

### Trust Grid

`gy-trust-grid.liquid` adds the homepage trust/support section below the product rails.

Default cards:

- Reliable delivery
- Easy support
- Secure checkout

WhatsApp is not hard-coded in this phase because the real support number/link still needs to be configured.

## Homepage Template Changes

`templates/index.json` now uses this section order:

1. `gy-promo-grid-hero`
2. `gy-category-grid`
3. `gy-featured-collection` - Featured Practical Finds
4. `gy-featured-collection` - New Arrivals
5. `gy-featured-collection` - Best Sellers
6. `gy-featured-collection` - Home Organisation Picks
7. `gy-featured-collection` - Office & Desk Essentials
8. `gy-trust-grid`

The stock Dawn demo image banner and stock featured collection sections were removed from the homepage JSON template.

## Schema And Settings Decisions

- Kept copy, links and images merchant-editable through section settings.
- Used collection selectors for product rails and category blocks.
- Used simple selectable icon labels for category/trust cards to avoid adding external assets or dependencies.
- Kept product card behavior delegated to Dawn's `card-product` snippet.
- Kept default collection assignments pointed at `all` so the homepage can render immediately in a fresh development store.

## Styling Decisions

Phase 3 styles were appended to `assets/gy-theme.css` and scoped with `gy-` class names.

The CSS uses the existing Get Yours tokens:

- `--gy-blue`
- `--gy-navy`
- `--gy-navy-deep`
- `--gy-gold`
- `--gy-gold-soft`
- `--gy-blue-soft`
- `--gy-bg`
- `--gy-surface`
- `--gy-border`
- `--gy-text`
- `--gy-muted`

No large gold/yellow backgrounds were added. Product rails remain light and restrained; blue stays focused on links, icons and actions.

## QA Results

Completed:

- Parsed `templates/index.json` successfully with Node.
- Ran `git diff --check`.
- Attempted the Shopify Liquid validator helper.
- Ran Shopify Theme Check.
- Ran Shopify dev preview.
- Captured homepage screenshots at `360px`, `400px`, `430px`, `768px`, `1200px` and `1440px`.
- Reviewed the narrow mobile and desktop captures for section order, hero readability, header/footer continuity and obvious stacking issues.

Theme Check result:

- `173` files inspected.
- `0` errors.
- `8` warnings.

The warnings are the same stock Dawn warnings documented in earlier phases:

- `layout/password.liquid`: `scheme_classes` undefined-object warning.
- `layout/theme.liquid`: `scheme_classes` undefined-object warning.
- `sections/main-article.liquid`: variable naming warning for `anchorId`.
- `sections/main-list-collections.liquid`: variable naming warning for `moduloResult`.
- `sections/main-product.liquid`: unused assign warning for `seo_media`.
- `sections/main-product.liquid`: `continue` undefined-object warning.
- `sections/main-search.liquid`: unused assign warning for `product_settings`.
- `snippets/quick-order-product-row.liquid`: orphaned snippet warning.

Shopify Liquid validator helper result:

- Failed because the plugin-cache script cannot resolve local package `@shopify/theme-check-common`.
- Shopify CLI Theme Check was used as the authoritative validation pass.

Preview command:

```sh
shopify theme dev --store getyours-9322.myshopify.com --path get-yours-shopify-theme
```

Not used:

- `--allow-live`
- `--publish`

Preview URLs:

- Local preview URL: `http://127.0.0.1:9292`
- Shopify preview URL: `https://getyours-9322.myshopify.com/?preview_theme_id=141697089639`
- Theme editor URL: `https://getyours-9322.myshopify.com/admin/themes/141697089639/editor?hr=9292`

Screenshots captured:

- `/private/tmp/gy-phase3-360.png`
- `/private/tmp/gy-phase3-400.png`
- `/private/tmp/gy-phase3-430.png`
- `/private/tmp/gy-phase3-768.png`
- `/private/tmp/gy-phase3-1200.png`
- `/private/tmp/gy-phase3-1440.png`
- `/private/tmp/gy-phase3-360-fixed.png`
- `/private/tmp/gy-phase3-400-fixed.png`
- `/private/tmp/gy-phase3-360-fixed2.png`
- `/private/tmp/gy-phase3-360-fixed3.png`

Mobile QA note:

- The first `360px` capture showed clipping in the announcement bar and hero copy.
- Added scoped mobile CSS guards for announcement wrapping, section overflow clipping, promo-grid min-width handling and smaller narrow-width hero typography.
- A final manual browser pass is still recommended after assigning real hero imagery and real collections, because static placeholder artwork can visually exaggerate cropping.

## Known Issues

- Homepage product rails all point to the `all` collection by default until real Shopify collections are created and assigned.
- Hero/category imagery uses Shopify placeholders until merchant images are selected.
- Category and trust icons are simple text-based marks for this phase; a dedicated icon snippet can be considered later.
- Real WhatsApp/support details are not wired yet.
- The homepage has merchandising structure, but final product data and imagery are still required before launch.

## Recommended Phase 4

Recommended next phase:

- Visual preview of the homepage sections in Shopify dev theme.
- Assign real development collections and images in the theme editor or fixture content.
- Tune spacing only if live Shopify content exposes issues.
- Keep product template, collection template and cart conversion in their own later phases.
