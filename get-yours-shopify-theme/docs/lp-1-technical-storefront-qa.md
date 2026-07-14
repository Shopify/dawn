# LP-1 Technical Storefront QA

## Scope And Current Evidence

No LP-1 theme changes were made. Theme Check is run as a safe validation command. Existing phase reports document the branded Dawn shell, homepage sections, collection/product/cart/search work, and earlier responsive checks.

### Development Theme Preview Check - 2026-07-13

The Shopify Theme Access credential was supplied through the local `SHOPIFY_CLI_THEME_TOKEN` environment variable and is intentionally not recorded here. `shopify theme info` and `shopify theme dev` succeeded against development theme `141697089639` on `tdaqk1-nv.myshopify.com`. The local preview at `http://127.0.0.1:9292` returned HTTP 200.

| Check | Result | Evidence / follow-up |
| --- | --- | --- |
| Homepage render | Pass | Announcement, branded header, promo grid, category grid, product rails, trust area and footer rendered in the local preview. |
| Responsive horizontal overflow | Pass | At 360, 400, 430, 768 and 1200px, `scrollWidth` equalled `clientWidth`. |
| 360px visual pass | Pass | Header controls and stacked hero tiles were visible, readable and within the viewport. |
| Homepage navigation | P1 follow-up | Main navigation currently exposes Home, Catalog and Contact only; planned collection and Help links remain unwired. |
| Footer navigation | P1 follow-up | Shop links are present; Support and Legal still expose only Search because their menus have not been wired. |
| Payment-logo review | P1 follow-up | Footer renders several payment logos, including PayPal. Confirm that every displayed method is intentionally customer-facing before launch. |
| R770 announcement alignment | P1 checkout verification | LP-3A aligned development-theme wording and the hosted preview passed at five widths; controlled checkout verification remains required. |
| Auxiliary storefront request | Monitor | A GET request to `/sf_private_access_tokens` returned HTTP 400 without a visible storefront failure. Monitor it; investigate only if a related feature fails. |

This was read-only preview QA. No theme, store, payment, shipping, page, menu, policy, product, order or customer data was changed.

## Required Final QA Matrix

| Area | Required checks | Current classification |
| --- | --- | --- |
| Header/navigation | Logo, announcement, search, predictive search, account, wishlist, cart, mobile menu, focus, keyboard. | P1: mobile menu and search render; keyboard-only focus/trap remains incomplete. |
| Homepage | Hero, promo blocks, collections, images, placeholders, stacking, layout shifts. | Pass for rendering and horizontal overflow; menu and link completeness remain P1. |
| Collections | Filters, sort, zero state, cards, prices, sale/unavailable state. | P1: cards and mobile filter drawer render; sort leaves hosted preview. |
| Products | Media, variants, quantity, cart, stock, delivery/returns messaging. | P1: layout and cart add pass; supplier facts and payment presentation remain unverified. |
| Cart | Quantity, remove, empty state, totals, shipping/free-shipping messaging, checkout handoff. | P0: cart flow passes, but shipping promise mismatch affects customer totals. |
| Search | Valid/no-results query, predictive links, mobile behaviour. | P1: predictive and no-result states pass; results route out of hosted preview. |
| Accessibility | Keyboard, focus, labels, headings, alt text, contrast, touch targets, errors. | P1: structural checks pass; full keyboard-only and focus-trap verification remains required. |
| SEO/branding | Titles, descriptions, favicon, social image, canonical domain, 404, redirects, password page. | P1: final live-launch approval required. |

## Known Expectation Risks

- Development-theme copy now promises free Standard shipping on orders of R770 or more; Shopify Admin rate wording and checkout behaviour still require a controlled retest.
- Account, wishlist, reviews/stars, delivery wording, and payment logos must not imply unavailable features, data, or methods.
- South Africa is the active market; no international customer wording should appear.
- The storefront password must remain until final launch approval.

## Issue Record Template

| Severity | Page | Width | Reproduction | Expected | Actual | Screenshot | Correction | Approval |
| --- | --- | --- | --- | --- | --- | --- | --- |
| P0/P1/P2/P3 | [URL] | [PX] | [STEPS] | [EXPECTED] | [ACTUAL] | [SAFE REF] | [RECOMMENDATION] | [OWNER] |

P0 blocks launch; P1 must be fixed before launch; P2 is important; P3 is post-launch. No defects are fixed in LP-1.

## LP-QA-1 Full Storefront Journey Audit

### Execution Status - 2026-07-13

The initial local-preview attempt was unavailable to this isolated QA process. The audit was resumed successfully through the hosted development-theme URL for theme `141697089639`. No Theme Access credential, storefront password, Shopify Admin control, checkout, or payment flow was used.

| Area | Device/width | Result | Severity | Evidence | Recommended action |
| --- | --- | --- | --- | --- | --- |
| Homepage journey | 360, 400, 430, 768, 1200px | Pass with P1 follow-ups | P0/P1 | Header, hero, categories, rails, trust content and footer render. No page-level horizontal overflow at all five widths. Main navigation is limited to Home/Catalog/Contact. | Resolve shipping mismatch; wire approved navigation later. |
| Collection/catalog | 360, 1200px | Pass with P1 follow-up | P1 | Catalog showed 20 products; Home Organisation showed 8 cards with images/prices. Mobile filter drawer opened without overflow. Sorting works but redirected to `getyours.online`. | Keep preview navigation on the preview host or document that stateful preview QA must use another route. |
| Product pages | 360, 1200px | Pass with P1 follow-ups | P1 | Tested Desk Cable Organiser (R79), Ergonomic Aluminium Laptop Stand sale (R399/R289), and Kitchen Sink Organizer (R99). Titles, prices, image access, quantities, descriptions, trust content and related products rendered. | Verify supplier material/performance claims, stock and delivery/return wording before launch. |
| Search | Mobile and desktop route checks | Pass with P1 follow-up | P1 | Predictive exact search returned Desk Cable Organiser; generic `organizer` search returned relevant products; no-result state gave useful browsing guidance; Escape closed the modal. Search results redirected to `getyours.online`. | Resolve or document hosted-preview routing before final acceptance. |
| Cart | Mobile cart-only interaction | Pass with P1 follow-ups | P1 | LP-QA-1 validated cart interaction. LP-3A visually confirmed the R770 reassurance in the cart drawer and cart page, then removed its test item. Checkout was not clicked. Cart updates redirect to `getyours.online`. | Verify checkout threshold and isolate preview-cart routing before launch QA sign-off. |
| Navigation/footer | Desktop and mobile | P1 follow-up | P1 | Header controls have accessible names. Footer Shop has Home/Catalog/Contact; Support and Legal each expose only Search. | Publish approved pages and wire menus only after operational approval. |
| Payment logos | Desktop and mobile | P1 follow-up | P1 | Footer renders Visa, Mastercard, American Express, PayPal, Diners Club and Discover. Product/cart pages render PayPal accelerated checkout. | Merchant must confirm the live payment set and remove any unsupported logo or express-payment control. |
| Accessibility | Mobile and desktop structural pass | P1 follow-up | P1 | Skip link, headings, named controls, labelled quantity inputs, search dialog, Escape close, and named cart controls were observed. Full keyboard tab order, visible focus and drawer focus trapping were not reliably verifiable in browser automation. | Complete a manual keyboard-only pass; do not claim WCAG conformance. |
| Console/network | Homepage, collection, product, search, cart | Pass with monitor item | P2 | No console warnings or errors were captured. No credential-bearing payload was inspected. | Keep `/sf_private_access_tokens` HTTP 400 as monitor-only unless a customer feature fails. |
| `/sf_private_access_tokens` | Prior local homepage preview | Monitor only | P2 | HTTP 400 had no visible customer-facing effect. | Investigate only if an associated storefront feature fails. |
| Theme Check | N/A | Pass with warnings | P2 | 174 files inspected; 8 warnings in 7 files; no errors. | Review inherited Dawn warnings before launch; no source change made in this audit. |

### Theme Check Warning Record

| Rule | File | Line | Risk | Likely origin | Launch effect | Recommended action | Approval |
| --- | --- | --- | --- | --- | --- | --- | --- |
| UndefinedObject `scheme_classes` | `layout/password.liquid` | 40 | Static-analysis false positive or initial-value ambiguity | Dawn | No observed storefront failure | Confirm upstream Dawn pattern/version before changing. | Theme-source approval |
| UndefinedObject `scheme_classes` | `layout/theme.liquid` | 82 | Static-analysis false positive or initial-value ambiguity | Dawn | No observed storefront failure | Confirm upstream Dawn pattern/version before changing. | Theme-source approval |
| VariableName `anchorId` | `sections/main-article.liquid` | 102 | Naming convention only | Dawn | None | Defer unless maintaining a customised article section. | Theme-source approval |
| VariableName `moduloResult` | `sections/main-list-collections.liquid` | 20 | Naming convention only | Dawn | None | Defer unless changing collection-list code. | Theme-source approval |
| UnusedAssign `seo_media` | `sections/main-product.liquid` | 745 | Dead assignment | Dawn | No observed failure | Review only during approved product-template maintenance. | Theme-source approval |
| UndefinedObject `continue` | `sections/main-product.liquid` | 601 | Liquid continuation syntax reported by checker | Dawn | No observed failure | Validate against the Dawn release used before editing. | Theme-source approval |
| UnusedAssign `product_settings` | `sections/main-search.liquid` | 280 | Dead assignment | Dawn | No observed failure | Review only during approved search-template maintenance. | Theme-source approval |
| OrphanedSnippet | `snippets/quick-order-product-row.liquid` | 1 | Unreferenced code | Dawn | None unless quick order is enabled later | Retain or remove only in an approved Dawn maintenance pass. | Theme-source approval |

### LP-QA-1 Issue Summary

| Severity | Issue | Exact recommended correction | Owner / decision |
| --- | --- | --- | --- |
| P1 | Former development-theme R500 promises were aligned to R770 in LP-3A and previewed successfully; checkout confirmation remains outstanding. | Verify the exact R770-inclusive wording against the configured checkout threshold before launch. | Merchant / QA owner. |
| P1 | Hosted development preview sends sort, full search and cart update flows to `getyours.online`. | Resolve preview-host/canonical routing or use a controlled alternative for final stateful development-theme QA. | Theme/store-domain review. |
| P1 | Main nav and footer Support/Legal menus are incomplete. | Publish approved content pages only after launch blockers are resolved, then wire the approved menus. | Merchant approval. |
| P1 | Payment logos and PayPal accelerated checkout are visible while payment-method launch presentation still needs confirmation. | Confirm the final enabled payment methods, then align product/cart controls and footer logos. | Merchant payment decision. |
| P1 | Supplier facts, customer-facing stock, delivery and return wording are not commercially verified. | Validate each launch SKU and replace generic/unsupported claims with approved data. | Merchant and supplier review. |
| P1 | Complete keyboard-only focus order, focus visibility and modal/drawer focus-trap verification was not established. | Run an assisted manual keyboard pass on the final configured theme. | Final accessibility QA. |
| P2 | Eight Theme Check warnings remain in inherited Dawn code. | Review during an approved Dawn maintenance pass; none caused an observed storefront error. | Theme maintenance approval. |
| P2 | Wishlist was not present in the observed header. | Do not imply wishlist functionality in customer-facing copy unless a supported implementation is enabled. | Merchant decision. |

No theme code, Shopify Admin setting, live-store setting, checkout, payment, order, refund, fulfilment, inventory, tracking, CJ action, page, menu or policy was changed during LP-QA-1. Cart-only test items were removed and the cart ended empty.

## LP-3A Approved Promise Alignment

- The approved customer-facing free Standard threshold is **R770**, inclusive: `FREE STANDARD SHIPPING ON ORDERS OF R770 OR MORE`.
- Corrected theme-controlled R500 occurrences: the announcement-bar setting, product reassurance block and shared cart reassurance locale string.
- Replaced generic product delivery timing copy with: `Delivery timing depends on the product, destination and available shipping route.` No exact customer-facing delivery estimate exists in the theme after this change.
- The Standard R100 and Express R150 names, checkout estimates and R770 rate condition remain Shopify Admin-controlled and were not changed.
- Footer payment icons are dynamically generated from `shop.enabled_payment_types`; no hard-coded Visa, Mastercard, American Express, Diners Club or Discover icons were found. Final visible icons depend on the enabled provider configuration.
- PayPal accelerated checkout remains visible because PayPal is active. Its final launch inclusion remains a merchant decision. Payflex is held pending margin review; Mobicred remains disabled; no payment-provider setting changed.
- Unpublished support-page drafts were later aligned to R770 in LP-3B.1. Their remaining gates are operational, tax and legal approval, not copy alignment.
- The development-theme R770 preview retest passed. Verify checkout independently after any future Shopify Admin rate or provider change.

## LP-3B Navigation And Contact Readiness

- Current header: Home, Catalog and Contact. `Catalog` has the correct `/collections/all` target but should be renamed to Shop in a separately approved menu mutation.
- Footer Shop currently mirrors `main-menu`; Support and Legal both point to Search. These are P1 launch-content defects, not theme rendering defects.
- Search passed prior QA. Account remains ready after account-flow testing; Wishlist is not implemented; Cart remains ready after final checkout handoff testing.
- Contact is published and its labelled Shopify form rendered without horizontal overflow at 360px. Recipient configuration and acknowledgement are unverified because no form submission was authorized.
- LP-3B did not modify a menu, page, policy, Contact, theme source or Shopify Admin setting. See `docs/lp-3b-navigation-content-readiness.md` for the LP-3C execution matrix.
