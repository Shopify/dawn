# Phase 4 Collection And Product Card Refinement

## Scope

Phase 4 refines collection browsing and the shared Dawn product-card presentation. The frozen static prototype, product template, cart, search, header, footer, and homepage order remain unchanged.

## Files Inspected

- `templates/collection.json`
- `sections/main-collection-banner.liquid`
- `sections/main-collection-product-grid.liquid`
- `snippets/card-product.liquid`
- `snippets/price.liquid`
- `snippets/facets.liquid`
- `assets/component-card.css`
- `assets/component-price.css`
- `assets/component-facets.css`
- `assets/gy-theme.css`
- `sections/gy-featured-collection.liquid`

## Implementation Decisions

- Kept Dawn's collection banner, product grid, `card-product`, price, facets, sorting, filtering, pagination, and quick-add markup intact.
- Applied product-card styling through scoped CSS in `assets/gy-theme.css` so the collection grid and Get Yours homepage rails share the same presentation.
- Set the collection template image ratio to square for consistent product crops.
- Added Dawn's existing three-column tablet grid class when the selected desktop grid is three columns or wider. Desktop still uses the merchant-selected desktop setting; mobile remains two columns.
- Corrected homepage category-card links in `templates/index.json` to their intended Shopify collection handles. Product-rail View all links remain collection-driven.

## Product Card Changes

- Soft neutral media area, subtle border, 12px rounded outer card, calm hover treatment, readable titles, navy pricing, muted compare-at pricing, and restrained soft-gold card badges.
- Preserved product URLs, accessibility markup, image loading, and Dawn quick-add behavior. No product-card Liquid was modified.

## Collection And Facet Changes

- Added a quieter collection hero treatment and clearer collection toolbar spacing.
- Styled existing desktop facet controls, sort select, product count, active-filter chips, and mobile filter trigger without changing their Dawn behavior or JavaScript hooks.

## QA

- `templates/collection.json` and `templates/index.json` parse successfully.
- `git diff --check` passes.
- `shopify theme check --path get-yours-shopify-theme` passes.
- Local Shopify preview was already running at `http://127.0.0.1:9292` and rendered the real demo content.
- `featured-practical-finds` has 9 cards and was checked at 360px, 400px, 430px, 768px, 1200px, and 1440px with no horizontal overflow. It renders two columns at the mobile widths, three at 768px, and four at desktop widths.
- The native mobile filter drawer opens at 360px. Desktop facets, sort options, product count, product links, sale price, and compare-at price render correctly.
- Direct collection-sort URL verification using `?sort_by=price-ascending` renders price-ordered products. Browser automation changed the select value but did not update its URL, so a final manual sort interaction is still recommended in Shopify preview.
- Homepage QA found five product rails, 20 visible product cards, and the expected View all destinations. Category cards now route to their intended collection pages.
- Real product cards and images render for `featured-practical-finds` (9), `new-arrivals` (6), `best-sellers` (7), `home-organisation` (8), and `office-desk-essentials` (6).

## Remaining Issues

- Collection descriptions, filters, and sort options depend on Shopify Admin data and the Shopify Search & Discovery configuration.
- `kitchen-storage`, `travel`, and `tech-accessories` currently render Dawn's valid empty-collection state because they have no product membership in Shopify Admin. Assign products to those collections before visual sign-off.
- Final visual review requires authenticated preview access because the storefront is password protected.

## Recommended Phase 5

Convert and refine the product detail template, then validate the product-to-cart journey while retaining Dawn's variant, quantity, and accessibility behavior.
