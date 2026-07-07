# Phase 2 Brand Shell

## Status

Phase 2 brand shell setup is complete.

This phase only touched the Dawn shell:

- Announcement bar
- Header
- Footer
- Logo fallback treatment
- Dawn colour scheme mapping
- Supporting CSS in `assets/gy-theme.css`

No homepage sections, product rails, product templates, collection templates, cart logic, or static prototype files were modified.

## Files Changed

- `assets/gy-theme.css`
- `config/settings_data.json`
- `sections/header.liquid`
- `sections/header-group.json`
- `sections/footer-group.json`

## Announcement Bar

Changes:

- Set the default announcement text to `FREE STANDARD SHIPPING ON ORDERS OVER R500`.
- Set the announcement section to use the navy colour scheme.
- Disabled the line separator for a cleaner solid navy trust strip.
- Added targeted CSS so the bar uses `--gy-navy` with white uppercase text.

The text remains merchant-editable through Dawn's announcement block settings.

## Header

Changes:

- Preserved Dawn's native header structure, menu rendering, mobile drawer, search modal, predictive search hooks, account link, cart bubble and accessibility attributes.
- Added a Get Yours SVG asset fallback when no merchant logo is uploaded in Shopify settings.
- Set default logo width to `150`.
- Set mobile logo alignment to left.
- Disabled country/language selectors in the header defaults to keep the shell clean at this stage.
- Reduced header vertical padding from the stock default.
- Added targeted CSS for logo sizing, active/hover nav colour, cart bubble colour, and search modal proportions.

Search decision:

- Dawn's native search modal was preserved instead of rebuilding a custom full-width search bar.
- This keeps predictive search and accessibility behavior stable.
- A more prominent desktop search input can be considered later only if it can be implemented without breaking Dawn search behavior.

Wishlist decision:

- Dawn does not include wishlist functionality natively.
- Wishlist was not added in Phase 2.
- Add wishlist later through an app or a scoped custom feature if it becomes a launch requirement.

## Footer

Changes:

- Set the footer to the deep navy colour scheme.
- Added footer block defaults:
  - Brand information
  - Shop links
  - Support links
  - Legal links
- Set the brand headline to `Get Yours`.
- Added a clean brand statement through Dawn global brand settings.
- Disabled newsletter, Follow on Shop, social links, country selector and language selector in the default footer shell for now.
- Kept payment icons and policy links enabled where Shopify data supports them.
- Added targeted CSS for deep navy background, readable text/links, uppercase headings and payment icon alignment.

Logo treatment decision:

- The normal Get Yours logo is not used in the footer because it is not designed for navy backgrounds.
- The footer uses a clean text fallback through Dawn's brand information block.
- A proper reversed logo asset should be created later from approved source artwork if footer logo display is required.

## Colour Scheme Mapping

Updated Dawn preset colour schemes in `config/settings_data.json`:

- `scheme-1`: white surface with Get Yours text and blue actions.
- `scheme-2`: soft background with Get Yours text and blue actions.
- `scheme-3`: deep navy surface with white text.
- `scheme-4`: restrained soft gold accent scheme.
- `scheme-5`: primary blue surface with white text.

Other setting changes:

- `buttons_radius`: `8`
- `inputs_radius`: `8`
- `logo_width`: `150`
- `brand_headline`: `Get Yours`
- `brand_description`: clean-value brand statement

`settings_schema.json` was not modified.

## Dawn Behaviour Preserved

Preserved:

- Header drawer/menu behavior
- Desktop dropdown menu behavior
- Search modal and predictive search hooks
- Cart bubble/count behavior
- Customer account link behavior
- Localization forms in Dawn, although disabled by default in the shell
- Footer payment icon rendering
- Footer policy rendering
- Dawn section schema compatibility
- Theme editor block structure

## QA Results

Completed:

- Confirmed JSON validity for:
  - `config/settings_data.json`
  - `sections/header-group.json`
  - `sections/footer-group.json`
- Ran `git diff --check`.
- Confirmed no files under `get-yours-static-prototype/` were modified.
- Ran Shopify Theme Check.

Theme Check result:

- `169` files inspected.
- `0` errors.
- `8` warnings.

Remaining warnings are stock Dawn warnings already present in Phase 1:

- `layout/password.liquid`: `scheme_classes` undefined-object warning.
- `layout/theme.liquid`: `scheme_classes` undefined-object warning.
- `sections/main-article.liquid`: variable naming warning for `anchorId`.
- `sections/main-list-collections.liquid`: variable naming warning for `moduloResult`.
- `sections/main-product.liquid`: unused assign warning for `seo_media`.
- `sections/main-product.liquid`: `continue` undefined-object warning.
- `sections/main-search.liquid`: unused assign warning for `product_settings`.
- `snippets/quick-order-product-row.liquid`: orphaned snippet warning.

Shopify Liquid validator note:

- The Shopify Liquid skill validation helper was attempted, but its plugin-cache Node dependencies were not installed locally.
- Shopify CLI Theme Check was used as the authoritative validation pass for this phase.

## Preview Status

`shopify theme dev` was not run in Phase 2.

Reason:

- Store authentication/preview setup was not required for this code pass.
- Running `theme dev` uploads a development theme to the store, so it should be done intentionally when ready for visual review.

Recommended preview command:

```sh
shopify theme dev --store getyours-9322.myshopify.com --path get-yours-shopify-theme
```

Do not use:

- `--allow-live`
- `--publish`

## Known Issues

- Header search remains Dawn's modal search rather than the static prototype's full desktop search bar.
- Footer uses text brand fallback instead of a reversed logo.
- Footer link groups depend on Shopify menus existing and being assigned correctly.
- Account appears only when Shopify customer accounts are enabled.
- Wishlist is not implemented because Dawn has no native wishlist.
- No browser/device visual QA was completed because a Shopify preview was not launched.
- Local shell startup still prints: `(eval):1: no such file or directory: $/opt/homebrew/bin/brew`.

## Recommended Phase 3

Before building homepage sections, run a visual preview of the brand shell against Shopify:

- Check desktop and mobile header rhythm.
- Confirm logo sizing in the live Shopify preview.
- Confirm announcement bar contrast.
- Confirm footer readability and menu availability.
- Confirm account/cart/search links still behave as Dawn expects.

After brand shell approval, begin homepage section conversion in a separate phase:

- Promo grid hero
- Shop by Category
- Reusable featured collection rail
- Trust / Delivery / WhatsApp support section

Keep product template, collection template and cart conversion for later phases.
