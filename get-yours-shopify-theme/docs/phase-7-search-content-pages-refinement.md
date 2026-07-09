# Phase 7 Search And Content Pages Refinement

## Scope

Phase 7 refines the Dawn search page and the shared presentation of Admin-managed content and policy pages. It does not change the frozen static prototype, homepage, product, collection, cart, checkout, or search JavaScript.

## Files Inspected

- `templates/search.json`
- `sections/main-search.liquid`
- `templates/page.json`
- `sections/main-page.liquid`
- `templates/404.json`
- `sections/main-404.liquid`
- `snippets/card-product.liquid`
- `snippets/price.liquid`
- `assets/component-search.css`
- `assets/component-card.css`
- `assets/section-main-page.css`
- `assets/gy-theme.css`
- `config/settings_data.json`
- `sections/header-group.json`
- `sections/footer-group.json`

## Files Changed

- `sections/main-search.liquid`
- `locales/en.default.json`
- `assets/gy-theme.css`

## Implementation Decisions

- Preserved the Dawn search form, predictive search hooks, query handling, filters, sorting, pagination, product/article/page result handling, product-card rendering, price rendering, and loading states.
- Kept the existing Dawn `card-product` and `price` snippets. Search product cards now receive scoped Get Yours CSS consistent with the Phase 4 collection and homepage rails.
- Replaced the default no-results sentence with a localized, semantic empty-search panel containing a safe `routes.all_products_collection_url` link to `/collections/all`.
- Added only scoped CSS for search controls, search results, empty search presentation, generic Admin page typography, and Shopify policy typography/tables.
- Did not modify `main-page.liquid`, create a support section, or draft policy/legal text. Generic Help and policy content remains owned by Shopify Admin.

## Header And Footer Link Readiness

- Header uses the Shopify `main-menu` menu. Its current visible links are Home, Catalog, and Contact.
- Footer Shop uses `main-menu`; both Footer Support and Footer Legal currently use the Shopify `footer` menu.
- Current preview footer links are Home, Catalog, Contact, Search, and the automatically rendered Privacy policy link.
- Help, Customer Service, Shipping Policy, and Terms of Use links are not configured in the current Shopify menus.
- `/pages/help` and `/pages/customer-service` currently return the Dawn 404 template because the Shopify Admin pages have not been created.
- Recommended Phase 8 Admin setup:
  - Create Help and Customer Service pages, then add their menu entries.
  - Configure approved Shopify shipping, privacy, and terms policies, then add policy links to the appropriate footer menu.
  - Confirm the desired URL approach before using any previously proposed custom `/za/...` routes. No custom route was forced by this phase.

## QA

- `templates/search.json`, `templates/page.json`, and `locales/en.default.json` pass strict JSON parsing.
- `git diff --check` passes.
- Shopify Theme Check completes with eight existing Dawn baseline warnings in unrelated files and no new Phase 7 findings.
- The local preview at `http://127.0.0.1:9292` was used without starting a second development server.
- `/search?q=storage` shows 18 results, a contained search field, native filter/sort UI, and consistent product cards at 1200px.
- `/search?q=laptop` was checked at 360px, 400px, 430px, 768px, and 1200px. Search input, two-column mobile results, and desktop grid all render without horizontal overflow.
- `/search?q=zzzznoresult` renders the localized empty state and one working Browse all products link to `/collections/all` at 360px with no overflow.
- `/pages/contact` confirms the generic page template remains readable at 360px with no overflow.
- `/policies/privacy-policy` confirms the policy layout remains readable at 360px with no overflow.

## Remaining Issues

- `/pages/help` and `/pages/customer-service` need Shopify Admin page creation and approved content before they can be linked.
- `/policies/terms-of-service` currently returns a Shopify preview 502. This is a store policy-data/preview issue, not a route or theme-template failure.
- Privacy policy text is Shopify-provided boilerplate and requires legal/business review before launch.
- Footer Support and Legal duplicate the same `footer` menu, so their intended final destinations must be configured in Shopify Admin.
- The Shopify Liquid skill validator could not run because its bundled `@shopify/theme-check-common` package is missing. Canonical Shopify Theme Check was used for validation.

## Recommended Phase 8

Proceed with Navigation, footer links, store settings, and a launch-readiness checklist. Avoid further feature additions until the approved support, policy, shipping, payment, and menu data is configured in Shopify Admin.
