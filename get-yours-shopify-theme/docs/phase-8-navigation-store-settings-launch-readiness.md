# Phase 8 Navigation, Store Settings And Launch Readiness

## Scope

Phase 8 is a documentation-only launch-readiness audit. No Liquid, JSON, CSS, Shopify Admin settings, menus, policies, payments, shipping, tax, markets, domains, checkout, or static-prototype files were changed.

## Files Inspected

- `config/settings_data.json`
- `config/settings_schema.json`
- `sections/header.liquid`
- `sections/header-group.json`
- `sections/footer.liquid`
- `sections/footer-group.json`
- `templates/page.json`
- `templates/page.contact.json`
- `templates/search.json`
- `templates/404.json`
- `assets/gy-theme.css`

## Current Theme Navigation State

### Header

- The announcement bar is configured with `FREE STANDARD SHIPPING ON ORDERS OVER R500`.
- The header uses the merchant-editable Shopify menu handle `main-menu` with Dawn dropdown navigation.
- Current preview links are Home, Catalog, and Contact.
- Predictive search is enabled. Cart behavior is set to Dawn's cart notification.
- The header does not need a theme-code change; its final destinations are Shopify Admin menu data.

### Footer

- Footer blocks are Brand, Shop, Support, and Legal.
- Shop currently references `main-menu`.
- Support and Legal both reference the `footer` menu, which duplicates destinations.
- Each Dawn `link_list` block exposes its own menu picker in Theme Editor. Assigning separate menus is safe and does not require Liquid modification.
- Footer payment icons and automatic policy links are enabled. Their actual output depends on Shopify payment and policy configuration.

## Recommended Shopify Admin Menu Setup

### Main Menu

- Home -> `/`
- Shop All -> `/collections/all`
- Home Organisation -> `/collections/home-organisation`
- Office & Desk -> `/collections/office-desk-essentials`
- Kitchen & Storage -> `/collections/kitchen-storage`
- Travel -> `/collections/travel`
- Tech Accessories -> `/collections/tech-accessories`
- Help -> `/pages/help`

Keep the visible desktop menu short where necessary. Collections can be grouped under Shop All if the top-level menu becomes too dense.

### Footer Shop Menu

- Shop All -> `/collections/all`
- Featured Practical Finds -> `/collections/featured-practical-finds`
- New Arrivals -> `/collections/new-arrivals`
- Best Sellers -> `/collections/best-sellers`
- Home Organisation -> `/collections/home-organisation`
- Office & Desk Essentials -> `/collections/office-desk-essentials`

### Footer Support Menu

- Help -> `/pages/help`
- Customer Service -> `/pages/customer-service`
- Contact -> `/pages/contact`
- Shipping Policy -> Shopify policy URL, or an approved page URL
- Returns & Exchanges -> approved policy/page URL

### Footer Legal Menu

- Privacy Policy -> Shopify policy URL
- Terms of Service -> Shopify policy URL
- Refund Policy -> Shopify policy URL, once configured
- Shipping Policy -> Shopify policy URL, once configured

In **Online Store > Themes > Customize > Footer**, set Shop, Support, and Legal to separate Shopify navigation menus. Do not force the proposed custom `/za/...` routes in theme code; decide routing only after the final Shopify Admin information architecture is approved.

## Shopify Admin Setup Checklist

### Store Profile And Brand

- [ ] Confirm store name, legal business name, sender email, customer support email, phone number, and business address.
- [ ] Confirm South African currency and timezone.
- [ ] Review staff access and remove unused collaborator/staff accounts.
- [ ] Confirm billing plan and payment of Shopify subscription.
- [ ] Upload final logo, favicon, social sharing image, and approved social links.
- [ ] Review brand description and all empty social settings in Theme settings.

### Pages And Policies

- [ ] Create Help page at `/pages/help` with approved customer-facing content.
- [ ] Create Customer Service page at `/pages/customer-service` with approved support/contact process.
- [ ] Confirm Contact page details and contact-form recipient.
- [ ] Configure Shopify Privacy Policy and review all Shopify-generated wording.
- [ ] Configure and approve Terms of Service.
- [ ] Configure Shipping Policy, Refund/Returns Policy, and payment information.
- [ ] Add order tracking guidance only after the operational tracking process is confirmed.
- [ ] Have supplier/dropshipping delivery disclosure reviewed for commercial and legal accuracy before publishing.

Current audit result: Help and Customer Service pages do not exist and return 404. Privacy Policy renders. The Terms route returned a Shopify preview 502 and must be verified after policy setup.

### Payments

- [ ] Confirm PayFast setup, merchant verification, settlement/payout timing, and test transactions.
- [ ] Confirm PayPal setup only if it will be offered.
- [ ] Review displayed accelerated checkout options and payment icons after payment providers are active.
- [ ] Test successful payment, failed payment, cancelled payment, refund, and customer order-confirmation flows.

### Shipping And Fulfilment

- [ ] Configure South African shipping zones and rates.
- [ ] Decide whether international shipping is offered; otherwise ensure it is unavailable.
- [ ] Align any free-shipping setup with the R500 announcement before launch.
- [ ] Confirm shipping method names, delivery estimates, packaging rules, and supplier constraints.
- [ ] Confirm tracking availability and customer communication path.
- [ ] Test shipping-rate calculation with representative cart values and provinces.

### Tax, Markets, Domain And Access

- [ ] Confirm VAT registration position and tax display/invoice requirements with an appropriate adviser.
- [ ] Review tax settings, inclusive/exclusive price display, and refund tax handling.
- [ ] Set South Africa as the primary launch market; defer other markets until pricing, tax, and shipping are ready.
- [ ] Connect and verify the production domain, www/non-www redirect, SSL, and domain email sender authentication.
- [ ] Confirm password protection remains enabled until final pre-launch testing is complete.
- [ ] Keep the current development/preview theme unpublished until launch approval.

### SEO And Social

- [ ] Set homepage meta title and meta description.
- [ ] Add collection meta titles/descriptions for the primary collections.
- [ ] Review product SEO titles, descriptions, handles, and image alt text.
- [ ] Confirm the storefront social sharing image and favicon render correctly.
- [ ] Verify `sitemap.xml`, Shopify robots defaults, canonical URLs, and Search Console ownership after the production domain is connected.

### Analytics And Launch Tracking

- [ ] Review Shopify Analytics baseline reports.
- [ ] Prepare Google Analytics and Search Console access if planned.
- [ ] Prepare Meta/TikTok pixels only if approved; do not install trackers without consent and measurement requirements.
- [ ] Define a UTM convention for launch campaigns.
- [ ] Test the conversion path: landing page -> collection -> product -> add to cart -> checkout handoff -> order confirmation.

## Final Theme QA Checklist

- [ ] Homepage sections, category links, and collection assignments.
- [ ] Collection filters, sort, product cards, and empty collection state.
- [ ] Product images, prices, availability, quantity controls, disclosure blocks, add to cart, and dynamic checkout presence.
- [ ] Search results, search empty state, predictive search, and filters.
- [ ] Cart notification, cart page, empty cart, quantity change, remove action, and checkout handoff presence.
- [ ] Header logo, navigation links, search, account, and cart count.
- [ ] Footer Shop, Support, Legal, payment icons, and policy links after menu/policy setup.
- [ ] Contact, Help, Customer Service, shipping, returns, and legal-policy pages.
- [ ] 404 page and redirects for removed/out-of-stock URLs where applicable.
- [ ] Image loading and alt text spot checks.
- [ ] No horizontal overflow at 360px, 400px, 430px, 768px, 1200px, and 1440px.
- [ ] Shopify Theme Check and `git diff --check` before each preview/push.
- [ ] Test only against an unpublished/development theme until the launch decision is approved.

## Launch Blockers

- Help and Customer Service pages are absent.
- Footer Support and Legal menus are not separated or populated with approved destinations.
- Shipping, refund, privacy, terms, and payment information require approved Admin configuration.
- Terms of Service must be configured and rechecked because preview currently returns a 502.
- Payment, shipping, tax, domain, sender email, and password-protection settings require operational verification.
- A full test order and cancellation/refund workflow must be completed before launch.

## Nice To Have After Launch

- Add approved social profiles and a newsletter journey.
- Add measurement pixels after a consent/measurement plan exists.
- Add customer review, post-purchase, and order-tracking tooling only after operational readiness.
- Refine search synonyms and merchandising from live search and conversion data.

## Validation

- No theme implementation files were changed.
- Header/footer configuration remains merchant-editable using native Dawn menu settings.
- Phase 7 was already committed as `e26e658 Refine search and content page presentation` before this audit.

## Recommended Phase 9

Proceed with payment gateway, shipping, tax, and operational workflow setup in Shopify Admin. Create Help and Customer Service pages only after their approved content and support process are available.
