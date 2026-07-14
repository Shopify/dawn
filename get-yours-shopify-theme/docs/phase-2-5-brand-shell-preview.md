# Phase 2.5 Brand Shell Preview QA

## Status

Phase 2.5 preview QA is complete.

This pass reviewed the current Dawn brand shell only. No homepage sections, product cards, product templates, collection templates, cart logic, or static prototype files were modified.

## Preview Command

Command used:

```sh
shopify theme dev --store getyours-9322.myshopify.com --path get-yours-shopify-theme
```

Not used:

- `--allow-live`
- `--publish`

## Authentication

Authentication was not required during this run. Shopify CLI started the development theme preview successfully.

## Preview URLs

- Local preview URL: `http://127.0.0.1:9292`
- Shopify preview URL: `https://getyours-9322.myshopify.com/?preview_theme_id=141697089639`
- Theme editor URL: `https://getyours-9322.myshopify.com/admin/themes/141697089639/editor?hr=9292`
- Gift card preview URL: `http://127.0.0.1:9292/gift_cards/[store_id]/preview`

## Viewport Checks Completed

Checked:

- `360px`
- `400px`
- `430px`
- `768px`
- `1200px`
- `1440px` desktop wide

Result:

- No real horizontal page overflow was detected after the logo fix.
- Header controls remain visible at mobile widths.
- Footer remains readable after the contrast fix.

## Announcement Bar Findings

Result: Pass.

- Background uses deep navy: `rgb(7, 58, 102)`.
- Text is white and readable.
- Message is correct: `FREE STANDARD SHIPPING ON ORDERS OVER R500`.
- It reads as a calm shipping/trust strip, not a warning or aggressive sale banner.
- At `360px`, the bar wraps/takes more height but remains readable.

## Header Findings

Initial issue found:

- The fallback Get Yours SVG logo existed in the DOM but rendered at `0x0`, so it was invisible.

Fix made:

- Updated `assets/gy-theme.css` so `.gy-header-logo` has an explicit responsive width instead of relying on `width: auto`.

After fix:

- Logo renders clearly:
  - `135px x 33px` on narrow mobile.
  - `150px x 36px` at tablet/desktop widths.
- Header spacing feels calm.
- Desktop navigation is readable.
- Mobile menu trigger, search trigger and cart trigger remain visible.
- Account link appears where Dawn/customer account settings expose it.
- No horizontal overflow was detected at `360px`, `400px`, `430px`, `768px`, `1200px` or `1440px`.

## Search Findings

Result: Pass for Phase 2.5.

- Dawn search modal opens correctly.
- Search input is visible.
- Form action remains `/search`.
- Predictive search wrapper is present, so predictive search hooks are not broken.
- Search trigger is easy enough to find as a header icon.

Recommendation:

- A more prominent desktop search bar may still be worth considering later if ecommerce browsing requires it, but it should be handled as a scoped Dawn search enhancement rather than replacing Dawn search behavior now.

## Footer Findings

Initial issue found:

- Footer headings and text appeared too muted on the deep navy background because the generic footer `.rte` colour rule overrode the heading colour.

Fix made:

- Updated `assets/gy-theme.css` so footer headings explicitly remain white and general footer text/link colour uses a stronger readable white value.

After fix:

- Footer background uses deep navy: `rgb(6, 58, 102)`.
- Footer headings are white and readable.
- Footer text and links are readable.
- Footer block structure feels credible for the current Dawn shell:
  - Brand text
  - Shop links
  - Support links
  - Legal links
- Payment icons render.
- Policy links render where Shopify policies exist.
- Brand text fallback is acceptable for Phase 2.5.

Reversed logo decision:

- A reversed logo asset is still recommended later if the footer should display the logo on navy.
- Do not generate or invent one; it should come from approved brand artwork.

## Colour Findings

Result: Pass.

- Navy, blue and gold usage is consistent in the shell.
- Announcement and footer use the intended navy family.
- Gold remains restrained.
- No obvious arbitrary blue conflicts were found in the shell surfaces reviewed.
- Default Dawn homepage demo content remains present, but homepage conversion is intentionally out of scope for this phase.

## Dawn Behaviour Findings

Result: Pass.

Checked:

- Mobile drawer opens.
- Mobile drawer closes after Dawn's normal animation settles.
- Search modal opens.
- Predictive search wrapper remains present.
- Cart link points to `/cart`.
- Account link points to Shopify's customer-authentication route when customer accounts are enabled.
- Footer menus render or fail gracefully depending on menu content.
- Payment icons render.

## Fixes Made

Files changed during Phase 2.5:

- `assets/gy-theme.css`

Fixes:

- Corrected fallback logo rendering by assigning explicit responsive width to `.gy-header-logo`.
- Improved footer contrast by overriding footer heading colour after generic `.rte` rules and strengthening footer text/link colour.

No Liquid, JSON settings, homepage, product, collection, cart or static prototype changes were made during Phase 2.5.

## QA Commands

Completed:

```sh
git diff --check
shopify theme check --path get-yours-shopify-theme
```

Theme Check result:

- `169` files inspected.
- `0` errors.
- `8` warnings.

Warnings are the same stock Dawn warnings already documented in Phase 1 and Phase 2:

- `layout/password.liquid`: `scheme_classes` undefined-object warning.
- `layout/theme.liquid`: `scheme_classes` undefined-object warning.
- `sections/main-article.liquid`: variable naming warning for `anchorId`.
- `sections/main-list-collections.liquid`: variable naming warning for `moduloResult`.
- `sections/main-product.liquid`: unused assign warning for `seo_media`.
- `sections/main-product.liquid`: `continue` undefined-object warning.
- `sections/main-search.liquid`: unused assign warning for `product_settings`.
- `snippets/quick-order-product-row.liquid`: orphaned snippet warning.

## Screenshots Captured

Temporary local screenshots were captured for review:

- `/private/tmp/gy-phase-2-5-mobile-400.png`
- `/private/tmp/gy-phase-2-5-desktop-1200.png`
- `/private/tmp/gy-phase-2-5-footer-desktop-fixed.png`

## Remaining Visual Issues

- Dawn's default homepage demo hero/products are still visible. This is expected because homepage section conversion has not started.
- Header search remains icon/modal based. Consider a more prominent search treatment later if needed.
- Footer menu labels currently depend on default Shopify menus and policies; final menu setup should be done in Shopify/admin content work.
- Footer still uses brand text fallback instead of a reversed logo asset.
- Account link appears because Shopify customer accounts are enabled; hide or keep intentionally before launch depending on customer-account strategy.

## Recommendation

Phase 3 can begin.

Recommended Phase 3 scope:

- Homepage promo grid hero.
- Shop by Category.
- Reusable featured collection rail.
- Trust / Delivery / WhatsApp support section.

Continue to avoid product template, collection template and cart conversion until their dedicated phases.
