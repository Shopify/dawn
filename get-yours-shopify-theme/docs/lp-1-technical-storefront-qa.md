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
| R500 announcement alignment | P0 blocker | Storefront wording promises free standard shipping above R500 while the currently observed checkout configuration is R770. |
| Auxiliary storefront request | Monitor | A GET request to `/sf_private_access_tokens` returned HTTP 400 without a visible storefront failure. Monitor it; investigate only if a related feature fails. |

This was read-only preview QA. No theme, store, payment, shipping, page, menu, policy, product, order or customer data was changed.

## Required Final QA Matrix

| Area | Required checks | Current classification |
| --- | --- | --- |
| Header/navigation | Logo, announcement, search, predictive search, account, wishlist, cart, mobile menu, focus, keyboard. | P1: final authenticated preview QA required. |
| Homepage | Hero, promo blocks, collections, images, placeholders, stacking, layout shifts. | P1: final content assignment and responsive QA required. |
| Collections | Filters, sort, zero state, cards, prices, sale/unavailable state. | P1: final collection/product data required. |
| Products | Media, variants, quantity, cart, stock, delivery/returns messaging. | P1: final supplier and content claims required. |
| Cart | Quantity, remove, empty state, totals, shipping/free-shipping messaging, checkout handoff. | P0: shipping promise mismatch affects customer totals. |
| Search | Valid/no-results query, predictive links, mobile behaviour. | P2: final preview QA required. |
| Accessibility | Keyboard, focus, labels, headings, alt text, contrast, touch targets, errors. | P1: final audit at 360, 400, 430, tablet, 1200+. |
| SEO/branding | Titles, descriptions, favicon, social image, canonical domain, 404, redirects, password page. | P1: final live-launch approval required. |

## Known Expectation Risks

- Announcement promises R500 free shipping while configured checkout threshold is R770.
- Account, wishlist, reviews/stars, delivery wording, and payment logos must not imply unavailable features, data, or methods.
- South Africa is the active market; no international customer wording should appear.
- The storefront password must remain until final launch approval.

## Issue Record Template

| Severity | Page | Width | Reproduction | Expected | Actual | Screenshot | Correction | Approval |
| --- | --- | --- | --- | --- | --- | --- | --- |
| P0/P1/P2/P3 | [URL] | [PX] | [STEPS] | [EXPECTED] | [ACTUAL] | [SAFE REF] | [RECOMMENDATION] | [OWNER] |

P0 blocks launch; P1 must be fixed before launch; P2 is important; P3 is post-launch. No defects are fixed in LP-1.
