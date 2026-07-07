# Static Site Audit

## Current State

This folder is a cleaned static HTML/CSS/vanilla JS prototype built from the extracted Stitch export. It is not Shopify Liquid, not React, and not a backend implementation.

## Completed In Phase 2

- Added a normal static frontend structure.
- Standardised one shared header pattern across all pages.
- Standardised one shared deep-blue footer pattern across all pages.
- Replaced inconsistent Stitch logo usage with `assets/brand/get-yours-logo.svg`.
- Created a root `index.html` using the correct `get_yours_homepage_promo_grid_hero` visual direction.
- Created requested page routes under `pages/`.
- Added one shared `assets/css/styles.css`.
- Added one shared `assets/js/main.js`.
- Added a reusable cart drawer overlay on every page.
- Added mobile-friendly layout rules for header, navigation, grids, collection filters, product detail, cart drawer and footer.

## QA Fixes Completed In Phase 3

- Reviewed all static HTML pages, the shared CSS, shared JavaScript, logo asset, docs and README.
- Confirmed all required page routes exist.
- Confirmed all major internal links resolve to existing static files.
- Confirmed the footer is identical across all pages.
- Confirmed the header uses one shared structure; active navigation state differs by page as expected.
- Added a visual polish pass across the static prototype without converting to Shopify Liquid, React, TypeScript or backend functionality.
- Standardised the brand token layer around the exact Get Yours blue and gold, plus a separate deep navy token for high-contrast footer/trust surfaces.
- Cropped the SVG logo viewBox to a horizontal logo band so normal height-based CSS sizing works without large empty whitespace.
- Replaced text-only footer branding with the same SVG logo asset across all static pages.
- Tightened mobile header sizing so the logo, cart, menu and search row no longer force horizontal overflow at narrow widths.
- Shortened the search placeholder to prevent mobile input overflow.
- Added explicit shrink behaviour for grid/flex children in the header.
- Reworked the mobile header into a logo/actions row, full-width search row and collapsible stacked navigation row.
- Added mobile-specific hero text sizing to prevent large heading overflow.
- Added additional small-screen rules for category grids, product grids, collection filters, product detail media, cart layout, drawer item layout and drawer width.
- Preserved two-column category and product card layouts on narrow mobile where practical, with reduced spacing and card padding for 360px screens.
- Improved keyboard focus visibility for links, buttons, inputs and selects.
- Added mobile tap-target sizing to header controls, search controls, navigation links and card action buttons.
- Improved cart drawer JavaScript state handling with `aria-expanded` updates and safer null checks.
- Improved mobile navigation behaviour so the menu closes after link activation or Escape.
- Changed product tabs to progressive enhancement: all content is visible without JavaScript, then JavaScript activates the tabbed view.
- Confirmed all local and remote image URLs currently return HTTP 200.
- Confirmed all `<img>` elements have alt text.

## Focused Brand Polish Pass

- Re-checked `assets/brand/get-yours-logo.svg` and confirmed the logo source colours are `#0081D8` for primary blue and `#FFD200` for logo yellow.
- Updated the CSS token layer so logo yellow is kept as `--gy-yellow-logo`, while restrained UI gold uses `--gy-gold: #F5B700`.
- Set the announcement bar to `--gy-navy` with white text and preserved the exact message: `FREE STANDARD SHIPPING ON ORDERS OVER R500`.
- Set the footer to the same deep navy family using `--gy-navy-deep` and kept footer text/link contrast readable on the dark background.
- Updated category icon circles to use `--gy-blue-soft` with `--gy-blue` foreground icons.
- Reduced the desktop search bar stretch by constraining the header search track/form to a maximum of 760px while preserving the full-width mobile search row.
- Confirmed no red or large yellow/gold full-width background treatment is used for the announcement bar or footer.

## Homepage Product Rails Pass

- Added four static ecommerce merchandising rails beneath `Featured Practical Finds`: `New Arrivals`, `Best Sellers`, `Home Organisation Picks` and `Office & Desk Essentials`.
- Reused the existing `section`, `section-head`, `product-grid`, `product-card`, `product-media`, `product-info`, `delivery-label` and `price-row` patterns without introducing a new component design.
- Wired each new rail's `View all` link to `/pages/collection-home-organisation.html`.
- Wired all new product image/title links to `/pages/product-adjustable-drawer-divider.html`.
- Kept Add to Cart buttons as static prototype triggers using the existing `data-cart-open` cart drawer behavior.
- Kept the existing trust/delivery/WhatsApp support section as the single trust section after the new product rails.
- Static limitation: product rails reuse representative sample product data and remote Stitch-generated product images for now.
- Shopify conversion note: these rails should map to Dawn/Online Store 2.0 featured collection sections or configurable homepage collection blocks during Liquid conversion.

## Technical Debt

- Product and hero imagery from Stitch is still served from generated remote `lh3.googleusercontent.com` URLs where those were the actual image sources in the HTML export. Local PNG screen assets from the Stitch export were copied into `assets/images/` for the promo-grid hero where available.
- There is no build step, bundler, CSS minification, image optimisation pipeline or automated accessibility testing yet.
- Cart drawer, quantity controls and product tabs are static prototype interactions only.
- Search is a static route, not a real search implementation.
- Homepage product rails are static repeated markup and should become Shopify featured collection sections/snippets during Dawn conversion.
- Legal pages contain placeholders and require final South African ecommerce legal review.
- Header/footer markup is duplicated into each static HTML file because this is intentionally framework-free static HTML. Shopify conversion should replace that duplication with sections/snippets.
- Navigation active state is static per exported page, not route-aware.

## Remaining Static Issues

- Full visual review is still needed in a real browser across desktop, tablet and mobile.
- Check keyboard focus order on drawer, navigation and forms.
- Active navigation states are static and should be reviewed against the final information architecture.
- Replace placeholder support/contact content with approved copy.
- Decide whether to localise all remote generated images before Shopify theme work.
- Add final product/content copy and replace representative sample products if needed.
- Perform one final human visual pass for brand colour perception after product imagery and final copy are approved.

## Mobile Limitations

- Mobile layout has been improved for the current prototype, including the 360px-430px header/search issue, but it still needs manual visual QA on real mobile devices.
- Collection filters currently stack above products rather than becoming a collapsible filter drawer.
- Header navigation stacks as a simple mobile menu; it is not a full mega-menu.
- Product cards now stay two-up on mobile where space allows; extremely long product names may still need final merchandising copy edits.

## Image Limitations

- Local hero/promo PNG assets are copied from Stitch.
- Product images still rely on remote Stitch-generated `lh3.googleusercontent.com` URLs.
- No new images were generated during QA.
- If the prototype is shared outside this local environment, consider downloading and optimising the remaining remote product images.

## Recommended Final Static Polish

- Run a full manual browser pass at 360px, 400px, 430px, 768px and 1200px widths.
- Add a simple static contact form layout if contact-page visual detail becomes important.
- Improve static search page with representative product result cards.
- Add final policy/support copy placeholders approved by the business owner.
- Consider localising all remote product imagery before starting Shopify theme conversion.

## Out Of Scope For This Phase

- Shopify Liquid sections/snippets/templates.
- Shopify cart, customer accounts, checkout or product data.
- API calls, authentication, localStorage and backend logic.
- React, TypeScript or any framework conversion.
