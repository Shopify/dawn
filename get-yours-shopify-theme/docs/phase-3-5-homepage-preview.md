# Phase 3.5 Homepage Preview QA

## Status

Phase 3.5 homepage preview QA is complete.

This pass reviewed only the newly created Get Yours homepage sections in the Shopify Dawn development preview. Product templates, collection templates, cart logic, search templates, content pages, header/footer structure and the frozen static prototype were not modified.

## Preview Command

Command used:

```sh
shopify theme dev --store getyours-9322.myshopify.com --path get-yours-shopify-theme
```

Not used:

- `--allow-live`
- `--publish`

## Preview URLs

- Local preview URL: `http://127.0.0.1:9292`
- Shopify preview URL: `https://getyours-9322.myshopify.com/?preview_theme_id=141697089639`
- Theme editor URL: `https://getyours-9322.myshopify.com/admin/themes/141697089639/editor?hr=9292`

## Theme Editor Findings

The homepage sections are present in `templates/index.json`, render in the Shopify dev preview and pass Shopify Theme Check schema validation.

Sections reviewed:

- `gy-promo-grid-hero`
- `gy-category-grid`
- Five separate `gy-featured-collection` instances
- `gy-trust-grid`

Editor/schema readiness:

- Promo hero settings expose merchant-editable images, copy, links and overlay strength.
- Category grid exposes merchant-editable category blocks with collection/fallback links.
- Product rails expose collection selection, product limit, view-all behaviour, columns, image ratio and Dawn card options.
- Trust grid exposes editable trust blocks with optional links.
- Category and trust blocks include `block.shopify_attributes`, so Shopify editor block selection/reordering should work as expected.

Direct manual content editing in the Shopify admin editor was not performed during this pass; the review used the dev preview render, JSON template structure and Theme Check schema validation.

## Viewport Checks

Checked:

- `360px`
- `400px`
- `430px`
- `768px`
- `1200px`
- `1440px`

Automated rendered-width results:

- `scrollWidth` matched the viewport width at every checked size.
- All expected homepage section headings/content were present.
- Category cards rendered: `6`.
- Product rails rendered: `5`.
- Product cards rendered: `20`.
- Trust cards rendered: `3`.
- A Dawn search input inside the inactive search modal appears outside the viewport in DOM geometry checks on mobile, but it does not increase page `scrollWidth` or create horizontal page overflow.

Screenshots captured:

- `/private/tmp/gy-phase35-cdp-360.png`
- `/private/tmp/gy-phase35-cdp-400.png`
- `/private/tmp/gy-phase35-cdp-430.png`
- `/private/tmp/gy-phase35-cdp-768.png`
- `/private/tmp/gy-phase35-cdp-1200.png`
- `/private/tmp/gy-phase35-cdp-1440.png`
- `/private/tmp/gy-phase35-mobile-category.png`
- `/private/tmp/gy-phase35-mobile-product-rail-fixed.png`
- `/private/tmp/gy-phase35-mobile-trust.png`
- `/private/tmp/gy-phase35-desktop-product-rail.png`
- `/private/tmp/gy-phase35-desktop-trust.png`

## Homepage Visual Findings

Pass:

- Promo-grid hero renders in the correct first position.
- Hero stacks cleanly on mobile.
- Announcement/header/footer remain intact.
- Category grid renders cleanly as two columns on mobile and six cards on desktop.
- Product rails render in the requested order.
- Product cards preserve Dawn card rendering.
- Trust grid stacks cleanly on mobile and transitions into the footer without a hard visual clash.
- No horizontal page overflow was detected at the required viewport widths.

Notes:

- Placeholder hero artwork is visually busy behind white text. This is acceptable for development placeholders but should be replaced with real approved imagery before launch.
- The mobile hero is readable after the narrow-width typography guard, but final imagery should be checked again because image composition can affect contrast.
- Product rails currently show Shopify placeholder products because real collections/products are not assigned.

## Section Behaviour Findings

Confirmed:

- Sections render with default settings.
- Hero renders without selected images by using Shopify placeholder SVGs.
- Product rails render without populated collections.
- Empty/default collections fail gracefully after the placeholder fix.
- View-all links are merchant-editable through section settings or collection assignment.
- Category and trust links are merchant-editable.

## Collection Assignment Status

Real development collections still need to be created and assigned in Shopify admin/theme editor.

Recommended collections:

- Featured Practical Finds
- New Arrivals
- Best Sellers
- Home Organisation
- Office & Desk Essentials

No collections were created in code during this phase.

## Image Assignment Status

Real homepage imagery still needs to be assigned through the Shopify theme editor.

No images were generated or added during this phase.

## Fixes Made

### Mobile text and overflow guard

File changed:

- `assets/gy-theme.css`

Fixes:

- Added stronger narrow-width announcement text wrapping/sizing.
- Added scoped Phase 3 section overflow guards.
- Reduced narrow mobile hero heading and text widths so live text wraps within the tile.

### Product rail placeholder fix

File changed:

- `sections/gy-featured-collection.liquid`

Fix:

- Changed placeholder product image cycling to use Dawn-safe `product-apparel-1` through `product-apparel-4`.
- This removed the mobile product rail `Liquid error` caused by an unsupported placeholder SVG name.

## QA Commands

Completed:

```sh
git diff --check
shopify theme check --path get-yours-shopify-theme
```

Theme Check result:

- `173` files inspected.
- `0` errors.
- `8` warnings.

Warnings are unchanged stock Dawn warnings already documented in prior phases:

- `layout/password.liquid`: `scheme_classes` undefined-object warning.
- `layout/theme.liquid`: `scheme_classes` undefined-object warning.
- `sections/main-article.liquid`: variable naming warning for `anchorId`.
- `sections/main-list-collections.liquid`: variable naming warning for `moduloResult`.
- `sections/main-product.liquid`: unused assign warning for `seo_media`.
- `sections/main-product.liquid`: `continue` undefined-object warning.
- `sections/main-search.liquid`: unused assign warning for `product_settings`.
- `snippets/quick-order-product-row.liquid`: orphaned snippet warning.

## Remaining Homepage Issues

- Real Shopify collections and products are still required.
- Real hero/category imagery is still required.
- Product rail titles and collection assignments should be tuned in the Shopify editor once collections exist.
- Category/trust icons are simple text marks for now; a dedicated icon snippet can be considered later if visual refinement is needed.
- Manual Shopify admin editor editing/reordering should be checked when the merchant content setup starts.

## Recommendation

Phase 4 can begin.

The homepage section foundation is stable enough for the next scoped conversion phase, provided Phase 4 does not broaden into product, collection, cart or search template work unless explicitly requested.
