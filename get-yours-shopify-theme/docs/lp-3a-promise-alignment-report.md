# LP-3A Development-Theme Shipping Promise And Payment-Presentation Alignment

## Approved Baseline

- Standard customer charge: R100.
- Express customer charge: R150.
- Free Standard threshold: R770, including an order exactly at R770.
- Customer-facing theme wording: `FREE STANDARD SHIPPING ON ORDERS OF R770 OR MORE`.
- Customer delivery timing remains route-dependent until each CJ SKU, destination and shipping route is verified.

Customer shipping charges are not supplier shipping costs. CJ route cost and transit range must be confirmed per SKU; neither establishes a universal customer-facing delivery promise.

## Occurrence List Before Editing

| File | Line/section | Current wording | Customer-visible | Approved replacement |
| --- | --- | --- | --- | --- |
| `sections/header-group.json` | announcement block | `FREE STANDARD SHIPPING ON ORDERS OVER R500` | Yes | `FREE STANDARD SHIPPING ON ORDERS OF R770 OR MORE` |
| `templates/product.json` | `trust_reassurance` | `Free standard shipping over R500` | Yes | `Free standard shipping on orders of R770 or more` |
| `locales/en.default.json` | `sections.cart.free_shipping_reassurance` | `Free standard shipping on orders over R500.` | Yes | `Free standard shipping on orders of R770 or more.` |
| Phase 12 and earlier audit docs | historical evidence | R500/R770 mismatch history | No | Preserved as historical evidence |
| Support-page drafts | unpublished content | conditional/historic R500 references at the time of LP-3A | Not currently live | Historical snapshot; later aligned to R770 in LP-3B.1 |

## Results

| Area | Before | Approved state | Files changed | Remaining dependency | Result |
| --- | --- | --- | --- | --- | --- |
| Announcement | R500 promise | R770 inclusive wording | `sections/header-group.json` | None for theme copy; checkout verification remains separate | Changed and preview-verified |
| Homepage | No separate R500 copy found outside announcement | Inherits corrected announcement | None | None for theme copy | No direct change required; preview-verified |
| Product | R500 reassurance; generic delivery wording | R770 reassurance; route-dependent delivery wording | `templates/product.json` | Supplier route validation | Changed |
| Cart and drawer | R500 locale reassurance | R770 inclusive locale reassurance | `locales/en.default.json` | Checkout verification remains separate | Changed and preview-verified |
| Footer | Payment icons observed as Visa, Mastercard, American Express, PayPal, Diners Club and Discover | Dynamic `shop.enabled_payment_types` output retained | None | Final provider configuration determines visible icons | No hard-coded change |
| Delivery wording | No exact delivery duration in theme source; product copy was generic | Neutral route-dependent wording | `templates/product.json` | CJ SKU mapping and route evidence | Changed conservatively |
| Payment logos | No hard-coded brand icons found | Dynamic Dawn payment loop retained | None | Remove unsupported provider types through approved Shopify Admin configuration later | Documented |
| Accelerated PayPal | PayPal accelerated checkout visible | Left unchanged because PayPal is currently active | None | Final merchant PayPal decision | Unchanged |
| Support-page dependency | Drafts may retain R500 wording | Later aligned to R770 in LP-3B.1 | `docs/admin-ready-pages/` and `docs/content-pages/` | Operational, tax and legal publication gates | Content alignment complete; publication blocked |
| Shopify Admin dependency | R100 Standard, R150 Express, R770 condition and displayed estimates | Not changed | None | Future controlled Admin review and checkout verification | Outstanding |

## Delivery-Time Classification

| Category | Finding | LP-3A action |
| --- | --- | --- |
| Theme-controlled customer-facing copy | Product reassurance and Delivery information accordion had no exact duration but implied generic timing information. | Replaced with route-dependent neutral wording. |
| Shopify Admin rate wording | Phase 12 records Standard 3–5 business days and Express 1–2 business days. | Not changed; outside scope. |
| Historical documentation | Phase 12 and prior audits record observed estimates. | Preserved. |
| Supplier/product claim | CJ route timing not verified per SKU. | No claim added. |
| Internal operating guidance | Supplier route and cost work remains LP-2 work. | No change. |

## Payment Presentation Findings

- Footer icons use Dawn's dynamic `shop.enabled_payment_types` loop, not hard-coded markup. No change was made because the final output must follow approved provider configuration.
- PayPal accelerated checkout uses Dawn's `payment_button` and remains visible because PayPal is currently active. It remains pending a final merchant decision.
- No hard-coded American Express, Diners Club, Discover, Payflex, Mobicred, Instant EFT or Zapper presentation was found in customer-facing theme source.
- Visa, Mastercard, Instant EFT and Zapper are the intended PayFast launch methods, but Instant EFT and Zapper icons were not invented. Payflex is held; Mobicred remains disabled.

## Development-Theme Visual Retest

The hosted development preview for theme `141697089639` was available after the source update.

| Check | Result | Evidence |
| --- | --- | --- |
| Announcement at 360, 400, 430, 768 and 1200px | Pass | Exact R770-inclusive wording rendered at every width; `scrollWidth` equalled `clientWidth`. |
| Product reassurance at 360px | Pass | Product page rendered the R770 reassurance and route-dependent delivery wording with no horizontal overflow. |
| Cart drawer and cart page | Pass | Both rendered `Free standard shipping on orders of R770 or more.` A cart-only test item was removed afterwards; no checkout was entered. |
| Console | Pass | No warning or error was captured during the homepage/product/cart checks. |
| Payment icon output | Dependency remains | Footer still uses Shopify's dynamic enabled-payment-types loop. Provider configuration, not this theme source, determines the visible brands. |

## Remaining Admin And Content Work

1. In a separately approved Admin phase, review Standard/Express names and estimates, then conduct a controlled checkout test below R770 and at R770 or more.
2. Support-page drafts were later aligned to R770 in LP-3B.1. Before publication, close their operational, tax and legal gates.
3. Before live launch, make a final PayPal decision and ensure enabled payment providers match all customer-facing logos and accelerated checkout controls.

## No-Change Confirmation

LP-3A changed local development-theme source and documentation only. It did not change Shopify Admin shipping rates, thresholds, delivery estimates, providers, test mode, PayPal, orders, refunds, fulfilment, tracking, CJ activity, pages, menus, policies, the storefront password or any live theme.
