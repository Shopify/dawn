# Dawn Conversion Plan

## 1. Executive Summary

The frozen Get Yours static prototype is ready to become the Shopify theme blueprint. It has a stable visual direction, a clear ecommerce homepage flow, reusable product card patterns, a credible header/footer rhythm, and enough page coverage to guide Shopify Online Store 2.0 templates.

Safest conversion strategy:

- Use Dawn as the base theme.
- Preserve Dawn's ecommerce logic wherever possible, especially cart, product forms, variants, media, filtering, search, accessibility and Shopify editor support.
- Port the Get Yours visual system into Dawn gradually through theme settings, CSS variables, section styling and snippets.
- Convert repeated static markup into Shopify sections/snippets instead of copying static HTML directly.
- Replace static sample data with Shopify products, collections, pages, navigation menus, metafields and theme settings.

Why Dawn instead of building from scratch:

- Dawn already implements Shopify-native product forms, cart behavior, section architecture, accessibility patterns, responsive images, search, filtering and theme editor conventions.
- Starting from Dawn reduces risk around checkout handoff, cart state, variants, selling plans, dynamic checkout buttons and Online Store 2.0 editor compatibility.
- The Get Yours design does not require a custom storefront architecture; it needs a polished ecommerce theme with brand-specific sections.
- Building from scratch would spend time recreating solved Shopify behavior and increase launch risk.

Primary principle: keep the Get Yours visual direction, but let Shopify/Dawn own the commerce mechanics.

## 2. Recommended Shopify Theme Architecture

Target structure:

```text
sections/
  announcement-bar.liquid
  header.liquid
  gy-promo-grid-hero.liquid
  gy-category-grid.liquid
  gy-featured-collection.liquid
  gy-trust-grid.liquid
  main-collection-product-grid.liquid
  main-product.liquid
  cart-drawer.liquid
  main-cart-items.liquid
  main-cart-footer.liquid
  main-search.liquid
  main-page.liquid
  contact-form.liquid
  footer.liquid

snippets/
  gy-product-card.liquid
  gy-price.liquid
  gy-product-badge.liquid
  gy-delivery-label.liquid
  gy-trust-item.liquid
  gy-icon.liquid
  gy-breadcrumbs.liquid
  gy-product-tabs.liquid
  gy-free-shipping-progress.liquid

templates/
  index.json
  collection.json
  product.json
  cart.json
  search.json
  page.json
  page.contact.json
  page.faq.json

assets/
  gy-theme.css
  gy-theme.js
  get-yours-logo.svg
  get-yours-logo-reversed.svg
  hero/category/product media as Shopify assets only when not product media

config/
  settings_schema.json
  settings_data.json

locales/
  en.default.json
```

Architecture guidance:

- Prefer JSON templates and configurable sections over hard-coded Liquid templates.
- Keep Dawn's existing files where behavior is already correct; customize carefully.
- Put Get Yours visual tokens in theme settings and CSS custom properties.
- Use snippets for repeated product cards, badges, delivery labels, trust items and breadcrumbs.
- Keep merchant-editable text in section schema settings, page content or metafields rather than hard-coded strings.

## 3. Section Mapping

### Announcement Bar

- Section filename: `sections/announcement-bar.liquid` or Dawn's existing announcement section if present.
- Purpose: show the free-shipping message and other calm trust notices.
- Schema settings needed: text, link, background color, text color, enable/disable, optional rotation only if needed later.
- Block settings: optional multiple announcements, but start with one.
- Shopify data source: theme settings/section settings.
- Type: static/editor-driven.

Recommendation: preserve `FREE STANDARD SHIPPING ON ORDERS OVER R500` as a merchant-editable default.

### Header

- Section filename: `sections/header.liquid`.
- Purpose: logo, search, account, wishlist decision, cart, navigation and mobile nav.
- Schema settings needed: logo image, logo width, menu selector, enable sticky header, show search, show account, show cart total, mobile behavior options.
- Block settings: optional mega-menu/category blocks later.
- Shopify data source: linklists/menus, routes, cart, customer, settings.
- Type: dynamic Shopify navigation and cart state.

Recommendation: start from Dawn header behavior and restyle it to match Get Yours. Do not rebuild search/cart/account logic from scratch.

### Promo-Grid Hero

- Section filename: `sections/gy-promo-grid-hero.liquid`.
- Purpose: homepage hero with one large promo tile and two stacked supporting tiles.
- Schema settings needed: section background, main image, main eyebrow/pill, heading, text, button label/link, tile images/headings/buttons, image overlay strength.
- Block settings: three promo tile blocks if flexible ordering is needed.
- Shopify data source: section settings and image picker; optional collection links.
- Type: static/editor-driven with collection links.

Recommendation: keep it as a custom Get Yours section because Dawn does not have this exact promo-grid composition.

### Shop by Category

- Section filename: `sections/gy-category-grid.liquid`.
- Purpose: six category tiles for browsing.
- Schema settings needed: heading, subtitle, view-all link, icon style, columns, spacing.
- Block settings: category label, icon name, collection/link, optional product count toggle.
- Shopify data source: collections and section blocks.
- Type: merchant-configured, collection-linked.

Recommendation: use blocks for each category so merchants can reorder categories without editing code.

### Featured Practical Finds

- Section filename: `sections/gy-featured-collection.liquid`.
- Purpose: featured collection rail using Get Yours product card.
- Schema settings needed: heading, subtitle, collection selector, product limit, show view-all link, view-all label, background style.
- Block settings: not needed if collection-driven.
- Shopify data source: selected collection products.
- Type: collection-driven.

Recommendation: this should become the reusable homepage product rail section.

### New Arrivals

- Section filename: `sections/gy-featured-collection.liquid`.
- Purpose: collection rail for new products.
- Schema settings needed: same as featured rail.
- Shopify data source: selected "New Arrivals" collection or automated collection sorted by created date.
- Type: collection-driven.

### Best Sellers

- Section filename: `sections/gy-featured-collection.liquid`.
- Purpose: best-selling product rail.
- Schema settings needed: same as featured rail.
- Shopify data source: selected collection manually/automatically merchandised as best sellers.
- Type: collection-driven.

Note: Shopify best-seller logic may require manual collection merchandising unless using reporting/app logic.

### Home Organisation Picks

- Section filename: `sections/gy-featured-collection.liquid`.
- Purpose: category-specific collection rail.
- Schema settings needed: same as featured rail.
- Shopify data source: Home Organisation collection.
- Type: collection-driven.

### Office & Desk Essentials

- Section filename: `sections/gy-featured-collection.liquid`.
- Purpose: category-specific collection rail.
- Schema settings needed: same as featured rail.
- Shopify data source: Office & Desk collection.
- Type: collection-driven.

### Trust / Delivery / WhatsApp Support

- Section filename: `sections/gy-trust-grid.liquid`.
- Purpose: three trust cards below merchandising rails.
- Schema settings needed: heading optional, section background, card style, columns, icon color.
- Block settings: icon, title, text, link, optional badge.
- Shopify data source: section blocks/theme settings.
- Type: static/editor-driven.

### Footer

- Section filename: `sections/footer.liquid`.
- Purpose: brand description, shop links, support links, legal links, copyright and optional payment/support details.
- Schema settings needed: logo/reversed logo, description, menu selectors, show payment icons, social links, newsletter enable.
- Block settings: link groups, text blocks, newsletter/social blocks if using Dawn footer architecture.
- Shopify data source: linklists, shop, policies, payment icons, theme settings.
- Type: dynamic menus plus editor-driven content.

Recommendation: use a dedicated reversed logo asset rather than relying on CSS filter if possible.

## 4. Product Card Mapping

Snippet filename: `snippets/gy-product-card.liquid`

Inputs:

- `product`
- `collection` optional
- `show_vendor` optional
- `show_badge` optional
- `show_delivery_label` optional
- `show_quick_add` optional
- `image_ratio` optional

Mapped fields:

- Product image: `product.featured_media` or first available media, responsive `image_url`/`image_tag`.
- Title: `product.title`, linked to `product.url`.
- Price: use Dawn price logic or a Get Yours wrapper around Dawn's price snippet.
- Compare-at price: show only if product is on sale; avoid aggressive sale treatment.
- Delivery label: product metafield, fallback to collection/theme default.
- Badge: product metafield, product tag, or automatic sale/new logic.
- Add to Cart behavior: use Dawn quick-add/product form patterns where possible; if product has variants, route to product or show variant picker rather than blindly adding first variant.
- Accessibility: image alt text, accessible product link, button label including product title, visible focus states, no duplicate inaccessible click targets.

Recommended metafield strategy:

- Delivery label: `custom.delivery_label`
- Badge: `custom.product_badge`
- Product highlights: `custom.highlights`
- Shipping estimate: `custom.shipping_estimate`

Do not hard-code sample product cards in Liquid. Every homepage rail and collection grid should render the same snippet from real Shopify product data.

## 5. Collection Page Mapping

Static source: `pages/collection-home-organisation.html`

- Template file: `templates/collection.json`
- Main section: `sections/main-collection-product-grid.liquid` using Dawn as base.
- Shopify native filters: use `collection.filters`.
- Sorting: use Shopify collection sort options.
- Pagination: use Shopify pagination, likely 12/24 products per page depending final density.
- Product grid: render `gy-product-card`.
- Mobile filter strategy: use Dawn's drawer/disclosure pattern, restyled to Get Yours. Avoid leaving full filters stacked above products on mobile.
- Dawn defaults to preserve: filtering logic, sorting, pagination, product URL generation, image handling, accessibility basics.
- Customise: card snippet styling, filter/sidebar visual treatment, toolbar copy, spacing, category breadcrumbs, mobile filter trigger styling.

Required decisions:

- Product page size: 12 vs 24 per page.
- Whether categories are separate collections or filtered collection groups.
- Whether "Fast Delivery" is a filterable metafield.

## 6. Product Page Mapping

Static source: `pages/product-adjustable-drawer-divider.html`

- Template file: `templates/product.json`
- Main section: `sections/main-product.liquid`, based on Dawn.

Mapped components:

- Product media gallery: use Shopify product media and Dawn gallery behavior; style to match static layout.
- Title: `product.title`.
- Price: Dawn price logic with Get Yours styling.
- Reviews/rating strategy: do not keep fake rating. Use a reviews app/metafields later or hide rating until real.
- Product form: Dawn product form for variants and add-to-cart.
- Variants: use Shopify variants/options; style selectors to fit current clean UI.
- Quantity selector: use Dawn quantity input behavior, styled like prototype.
- Add to Cart: preserve Dawn behavior.
- Buy Now/dynamic checkout: decide merchant setting. Use Shopify dynamic checkout buttons if enabled, otherwise hide or keep cart-first flow.
- Trust block: product section block or snippet with merchant-editable trust cards.
- Tabs: Description, Delivery, Returns, FAQs as product information blocks or accordions/disclosures.
- Related products: use Shopify product recommendations or selected collection fallback.

Metafields needed:

- `custom.delivery_label`
- `custom.shipping_estimate`
- `custom.returns_note`
- `custom.product_faq`
- `custom.support_note`
- `custom.highlights`
- `custom.specifications`
- `custom.product_badge`

Recommendation: keep content available without brittle JavaScript by using accessible disclosure/accordion patterns.

## 7. Cart Drawer and Cart Page Mapping

Preferred strategy: extend Dawn's cart drawer and cart page. Do not replace cart logic.

Cart drawer strategy:

- Preserve Dawn cart AJAX/state handling.
- Restyle drawer width, typography, buttons, product summary and reassurance notes to match Get Yours.
- Add WhatsApp/support reassurance as a theme setting or cart drawer block.
- Include quantity updates, remove item, empty state and live subtotal from Dawn.
- Keep focus management and accessibility from Dawn.

Cart page strategy:

- Use Dawn cart template/sections.
- Style line items, order summary, checkout CTA and recommendations to match the static prototype.
- Add recommended products through Shopify recommendations or a selected collection.

Free-shipping progress:

- Implement with theme setting threshold, e.g. R500 in cents.
- Use cart subtotal to calculate progress.
- Keep copy editable.
- Ensure it handles currencies and discounts carefully.

Promo code limitations:

- Shopify discount codes are usually applied at checkout or through supported discount flows.
- Theme-side promo code fields can be misleading unless implemented with a supported cart/checkout discount URL pattern.
- For first launch, prefer "Discounts can be added at checkout" unless a robust implementation is confirmed.

Checkout handoff:

- Use Shopify checkout route/button.
- Do not custom-build checkout.

Empty cart state:

- Must include continue shopping, recommended collection link and reassurance copy.

## 8. Search Mapping

Static source: `pages/search.html`

- Template file: `templates/search.json`
- Main section: `sections/main-search.liquid`.
- Normal search results: use Shopify search results and product card snippet.
- Predictive search: use Dawn predictive search if enabled; restyle input/results.
- Empty results state: include suggested categories, popular products and a clear search refinement message.
- Product card reuse: render `gy-product-card` for product results.

Recommendation: search should become a real ecommerce experience before launch. The static page is only a route placeholder.

## 9. Static Content / Legal Pages

### Shipping

- Shopify page or template: Shopify Page with optional `page.shipping.json`.
- Editable content strategy: use Shopify admin page content plus optional page template sections for delivery cards.
- Copy required: delivery areas, timelines, couriers, fees, free-shipping threshold, tracking steps.

### Returns

- Shopify page or template: Shopify Page with `page.returns.json`.
- Editable content strategy: legal/business-approved page content.
- Copy required: return window, eligibility, exclusions, damaged items, refund method, support contact.

### Contact

- Shopify page or template: `page.contact.json` with `sections/contact-form.liquid`.
- Editable content strategy: Shopify contact form plus support cards.
- Copy required: WhatsApp link/number, email, support hours, response expectations.

### FAQ

- Shopify page or template: `page.faq.json`.
- Editable content strategy: section blocks or metaobjects if FAQ grows.
- Copy required: delivery, payment, order tracking, returns, support, product sizing/care.

### Privacy

- Shopify page or policy: Shopify policy page preferred where appropriate.
- Editable content strategy: Shopify legal policy content and/or page.
- Copy required: POPIA/privacy compliance, Shopify/payment providers, analytics, support channels.

### Terms

- Shopify page or policy: Shopify policy page preferred where appropriate.
- Editable content strategy: Shopify legal policy content and/or page.
- Copy required: purchase terms, pricing, availability, delivery, returns, liability, disputes.

## 10. Assets and Design Tokens

Logo SVG:

- Move `assets/brand/get-yours-logo.svg` into theme `assets/`.
- Preserve the cropped horizontal logo treatment.
- Add a dedicated reversed logo asset for footer if possible.

Colour tokens:

- Map static CSS variables into Dawn/theme settings:
  - `--gy-blue: #0081D8`
  - `--gy-navy: #073A66`
  - `--gy-navy-deep: #063A66`
  - `--gy-yellow-logo: #FFD200`
  - `--gy-gold: #F5B700`
  - `--gy-gold-soft: #FFF4CC`
  - `--gy-blue-soft: #EAF6FF`
  - `--gy-bg: #F5F7FA`
  - `--gy-surface: #FFFFFF`
  - `--gy-border: #E4E7EC`
  - `--gy-text: #1F2933`
  - `--gy-muted: #667085`
  - `--gy-success: #16A34A`

Typography:

- Current prototype uses Hanken Grotesk.
- Decide whether to use Shopify-hosted font settings, system fallback, or externally loaded font.
- Prefer theme font settings where possible for performance and editor compatibility.

Product images:

- Product images should become Shopify product media, not theme assets.
- Replace remote Stitch-generated URLs with real product media before production QA.

Hero images:

- Use section image picker settings for hero tiles.
- Store reusable hero/promo assets as theme assets only if they are brand/editor assets, not product media.

CSS variables:

- Add Get Yours variables to a small theme stylesheet layered on Dawn.
- Avoid large rewrites of Dawn CSS at first.
- Prefer component-scoped classes and CSS variables from section settings.

JavaScript interactions:

- Keep Dawn JS for cart, variant selection, media gallery, predictive search and disclosure patterns.
- Add custom JS only for Get Yours-specific UI that Dawn cannot cover.
- Avoid porting static `main.js` directly into Shopify.

## 11. Shopify Metafields Needed

Product metafields:

- `custom.delivery_label` - short product-card and buy-box delivery label.
- `custom.product_badge` - "Smart value", "New", "Popular" or other restrained badge.
- `custom.product_faq` - product-specific FAQ content.
- `custom.returns_note` - product-specific returns exception or reassurance.
- `custom.shipping_estimate` - product-specific delivery estimate.
- `custom.support_note` - support reassurance near buy box.
- `custom.highlights` - bullet highlights for product page.
- `custom.specifications` - structured specs such as dimensions/material/pack size.

Collection metafields:

- `custom.short_description` - collection page intro copy.
- `custom.category_icon` - optional category tile icon/asset.
- `custom.featured_badge` - optional category merchandising label.

Shop/theme settings:

- Free-shipping threshold.
- WhatsApp support link.
- Support hours.
- Default delivery label.
- Default returns note.
- Footer brand description.

## 12. Shopify Apps / Settings Needed

Shopify native functionality:

- Products, variants, collections.
- Menus/navigation.
- Cart and checkout.
- Search and predictive search baseline.
- Collection filters and sorting.
- Customer accounts if enabled.
- Shopify Pages and policies.
- Shopify Email/newsletter if sufficient.
- Payments and shipping/rates configuration.
- Basic SEO fields and redirects.

Theme code:

- Get Yours visual sections.
- Product card snippet.
- Trust blocks.
- Product tabs/disclosures.
- Free-shipping progress presentation.
- WhatsApp CTA display.
- Custom homepage rail styling.
- Footer/header brand styling.

Shopify apps later:

- Reviews: only when ready for real review collection/display.
- Wishlist: add later if it supports business goals; otherwise hide wishlist until implemented.
- WhatsApp support: app or simple link depending operational needs.
- Email/newsletter capture: Shopify Email or dedicated email platform if needed.
- Analytics: native Shopify analytics plus GA4/Meta pixel where appropriate.
- SEO: app only if native theme/admin SEO is insufficient.
- Shipping/rates: app only if native Shopify shipping does not cover fulfilment rules.

Recommendation: avoid app sprawl during first conversion. Start native, add apps only for clear gaps.

## 13. Implementation Phases

### Phase 1: Dawn Setup and Foundation

- Create Git branch for Shopify conversion.
- Install/verify Shopify CLI.
- Pull or initialise Dawn-based theme.
- Add project-level `AGENTS.md` for Shopify theme constraints.
- Configure theme settings and base brand tokens.
- Add logo assets.
- Establish Theme Check workflow.
- Confirm local preview workflow.

Exit criteria:

- Dawn runs locally.
- Theme Check passes before custom work.
- Brand tokens and logo are available.

### Phase 2: Header, Footer and Announcement Bar

- Restyle Dawn announcement/header/footer to match Get Yours.
- Preserve Dawn navigation, search, account and cart behavior.
- Configure menus.
- Add reversed footer logo if available.

Exit criteria:

- Header/footer match static prototype rhythm.
- Mobile header works without overflow.
- Cart icon/state remains Dawn-compatible.

### Phase 3: Homepage Sections

- Build `gy-promo-grid-hero`.
- Build `gy-category-grid`.
- Build reusable `gy-featured-collection`.
- Build `gy-trust-grid`.
- Configure `templates/index.json` with:
  - hero
  - categories
  - featured practical finds
  - new arrivals
  - best sellers
  - home organisation picks
  - office & desk essentials
  - trust grid

Exit criteria:

- Homepage visually matches static foundation.
- Product rails are collection-driven and editable.

### Phase 4: Product Card Snippet and Collection Page

- Build/reuse `gy-product-card`.
- Integrate card into homepage rails and collection grid.
- Customize collection template around Dawn filters/sort/pagination.
- Add mobile filter strategy.

Exit criteria:

- Collection page works with Shopify products, filters, sorting and pagination.
- Product cards are consistent across homepage and collection.

### Phase 5: Product Page

- Customize Dawn product page layout.
- Style gallery, buy-box, quantity, buttons and trust block.
- Add metafield-driven delivery label, badge, highlights, specifications and tabs/disclosures.
- Decide review visibility.
- Add product recommendations.

Exit criteria:

- Product page supports real products, variants, availability and add-to-cart.
- No fake rating/review data.

### Phase 6: Cart Drawer and Cart Page

- Extend Dawn cart drawer styling.
- Add Get Yours reassurance copy.
- Add free-shipping progress.
- Style cart page order summary and recommendations.
- Confirm empty cart state.

Exit criteria:

- Cart drawer/page preserve Dawn cart functionality.
- Checkout handoff works.
- Mobile cart experience is clean.

### Phase 7: Search and Content Pages

- Style search page and predictive search.
- Add empty search state.
- Create page templates for shipping, returns, contact, FAQ, privacy and terms as needed.
- Connect support/legal menus.

Exit criteria:

- Support/legal pages are editable and linked.
- Search feels like ecommerce search, not a placeholder.

### Phase 8: Mobile QA, Accessibility, Performance and Theme Check

- Test 360px, 400px, 430px, 768px, 1200px and wide desktop.
- Test keyboard navigation, focus states, drawer behavior and product forms.
- Run Shopify Theme Check.
- Check image sizing, LCP candidates, CLS risks and unused JS/CSS.
- Validate cart, filters, search and product variants.

Exit criteria:

- No horizontal overflow.
- Theme Check passes or documented exceptions are approved.
- Core purchase flow works.

### Phase 9: Unpublished Theme Push and Admin Content Setup

- Push unpublished theme.
- Configure Shopify admin products, collections, menus, pages, policies, shipping, payments and theme settings.
- Upload product media.
- Review in Shopify preview with real data.
- Run final pre-launch QA.

Exit criteria:

- Unpublished theme is ready for stakeholder review.
- Remaining launch blockers are content/business operations, not theme architecture.

## 14. Risk Register

### Breaking Dawn Cart Logic

- Risk: replacing cart drawer/page logic can break quantities, discounts, checkout or accessibility.
- Mitigation: extend Dawn behavior and restyle; do not rewrite cart from scratch.

### Over-Customising Too Early

- Risk: heavy CSS/JS rewrites make Dawn harder to update and debug.
- Mitigation: start with small layered CSS and targeted sections/snippets.

### Static Prototype Patterns Not Mapping Cleanly

- Risk: duplicated static rails and hard-coded cards do not translate directly to dynamic data.
- Mitigation: map product rails to one reusable featured collection section and product cards to one snippet.

### Placeholder Legal Copy

- Risk: generic returns/privacy/terms content undermines trust and creates legal exposure.
- Mitigation: require approved policy copy before launch.

### Fake Review/Ratings Perception

- Risk: placeholder reviews can damage credibility.
- Mitigation: remove ratings until real reviews/app/metafields exist.

### Product Image Quality

- Risk: generated/remote images can make the store feel dropshippy.
- Mitigation: replace with credible Shopify product media before production QA.

### App Sprawl

- Risk: adding reviews, wishlist, WhatsApp, SEO and marketing apps too early can slow theme and complicate launch.
- Mitigation: use Shopify native functionality first; add apps only for explicit gaps.

### Mobile Filter Complexity

- Risk: real Shopify filters may become too tall or awkward on mobile.
- Mitigation: use Dawn filter drawer/disclosure behavior and test with real filter groups.

### Product Metafield Governance

- Risk: inconsistent metafield use leads to missing badges, delivery labels and tab content.
- Mitigation: define metafields before product import and document editorial rules.

### South African Trust Requirements

- Risk: customers may hesitate without clear local delivery, payment, returns and support details.
- Mitigation: prioritise shipping, support, WhatsApp, payment and returns content before launch.

## Final Planning Recommendation

Proceed with Dawn conversion planning and setup. The static prototype should remain frozen as the visual reference while Shopify-native architecture takes over dynamic ecommerce behavior.

Do not spend another major pass on static HTML. The next meaningful work belongs in Dawn: theme setup, sections, snippets, templates, real Shopify data, policies and merchant-editable settings.
