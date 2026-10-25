# MƎR LIMEN — Shopify theme

MƎR LIMEN is a Shopify Online Store 2.0 theme built on Shopify's Dawn theme. It preserves Dawn's commerce foundations while adding a configurable, dark editorial design system inspired by the threshold between waking life and dreams.

## Brand assets

The original threshold logo and REM-cycle diagram are merchant-supplied assets. No substitute artwork is bundled with this theme.

In Shopify Admin, open **Online Store → Themes → Customize → Theme settings**:
- **Logo**: upload the official threshold logo and set its display width.
- **MƎR LIMEN assets → Mobile logo**: optionally upload a separately composed mobile logo.
- **MƎR LIMEN assets → REM-cycle image**: upload the existing REM diagram. The REM-cycle homepage section uses this global image unless its section-specific image is set.
- **MƎR LIMEN atmosphere**: adjust the shared palette.
- **MƎR LIMEN assets → Footer statement**: update the short line displayed beside the footer logo.

The homepage is assembled from modular MƎR LIMEN sections. Use the section list in Customize to reorder, hide, remove, add, or configure the hero, editorial statements, REM-cycle feature, product discovery, optional featured product, and closing invitation. Choose actual Shopify collections and products in the relevant section settings.

## Development

This is a Liquid-based Shopify theme; no frontend framework or custom runtime dependency is required.

Typical local workflow with Shopify CLI:
1. Install the Shopify CLI using Shopify's official instructions.
2. Authenticate with `shopify auth login`.
3. Preview with `shopify theme dev`.
4. Validate with `shopify theme check`.

Source-level checks can catch invalid Liquid, schema, and template issues; rendered appearance and cart/checkout behavior still need to be reviewed on a development store.

## Architecture

- `sections/mer-limen-*.liquid`: configurable MƎR LIMEN homepage components.
- `assets/mer-limen.css`: shared visual system and responsive component styling.
- `config/settings_schema.json`: global brand assets, palette settings, and native Dawn settings.
- Existing Dawn product, collection, search, cart, localization, account, and checkout-linked functionality remains the commerce foundation.

## Attribution

This theme is based on Shopify's Dawn theme. The upstream licensing and attribution terms are preserved in [LICENSE.md](LICENSE.md).
