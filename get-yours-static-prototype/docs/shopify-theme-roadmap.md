# Shopify Theme Roadmap

## Goal

Convert the approved static prototype into a premium-feeling Shopify Online Store 2.0 theme based on Dawn.

## Recommended Sequence

1. Finalise static visual QA.
2. Confirm brand copy, support copy, legal placeholders and product sample data.
3. Map static components to Dawn architecture:
   - header
   - footer
   - promo-grid hero
   - category tiles
   - featured products
   - collection filters/product grid
   - product information/trust block
   - cart drawer
   - cart page
4. Create Shopify sections and snippets from the approved static HTML.
5. Move repeated product card, trust card and navigation patterns into snippets.
6. Wire theme settings and schema controls.
7. Replace static sample data with Shopify objects and metafields where needed.
8. Implement Shopify cart drawer logic using Dawn patterns.
9. Run Shopify CLI theme checks and browser QA.

## Shopify Implementation Notes

- Use Dawn as the base rather than porting this static prototype directly as a full theme.
- Preserve the Smart Value Marketplace direction: light surfaces, blue CTAs, restrained gold accents and trust-first ecommerce structure.
- Avoid adding unnecessary app dependencies during the first theme conversion.
- Keep legal, delivery and returns pages editable from Shopify admin pages or theme templates.
- Convert duplicated static header/footer markup into Dawn-compatible sections and snippets early.
- Preserve the Phase 3 mobile fixes when rebuilding the header, especially shrink-safe grid/flex behaviour for the logo, search, cart and mobile menu.
- Preserve the cropped horizontal SVG logo treatment or export a production-ready horizontal logo asset before theme build-out.
- Map the final static brand token set into Dawn CSS custom properties early: exact Get Yours blue, hover blue, deep navy, gold accent, soft gold, surface, border, text and muted tokens.
- Rebuild the mobile header in Dawn with the same three-part structure proven in the static prototype: logo/actions, full-width search and collapsible navigation.
- Product tabs should degrade gracefully; in Shopify, use accessible disclosure/tab patterns that keep product information available without brittle JavaScript.
- Decide whether remote Stitch product images should become Shopify product media before theme implementation starts.
- Collection filters should use Shopify's native filtering patterns rather than the current static checkbox mockup.
- Static footer/header duplication is now visually aligned, but Shopify should replace it with one section/snippet source of truth to avoid future drift.

## Future Work

- Product media gallery powered by Shopify product media.
- Dynamic collection filters using Shopify filtering.
- Predictive search based on Shopify search.
- Cart drawer connected to Shopify cart endpoints.
- Theme editor controls for hero, tiles, trust cards and homepage collections.
- Accessibility and performance pass before launch.
- Mobile device QA for header, collection filters, product gallery, cart drawer and footer.
