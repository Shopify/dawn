# Cellife storefront rebuild — project plan

Date: 22 October 2026 (Australia/Sydney)  
Status: Discovery and proposal only; approval required before implementation.

Implementation update: the first development-baseline task was approved on
22 October 2026. CI now runs store-independent checks; see `docs/DEVELOPMENT.md`
for recorded source provenance, local commands and remaining verification gates.
The public release commit differs from the local version-labelled baseline;
exact upstream comparison and local Shopify Theme Check remain pending because
workspace package/Git network access is unavailable. No storefront code changed.

Subsequent homepage approval: the owner supplied the current store URL and asked
to proceed with placeholders. The first visual slice now adds an editable hero,
shopping pathways and homepage composition; see `docs/HOMEPAGE.md`. No live theme
was changed. Baseline verification gates above remain open before release.

## 1. Recommendation and scope

Retain Shopify as the commerce platform and build an original Cellife identity on Dawn's server-rendered Online Store 2.0 architecture. Preserve product IDs, handles, variants, customers, orders, checkout, subscriptions and existing integrations. This is a theme rebuild, not a data migration or headless project.

Keep Dawn's working commerce primitives. Add a restrained design system, a few purpose-built editorial sections, and product templates driven by structured content. Use app blocks for subscriptions and reviews. Do not build billing, a diagnostic results portal, customer eligibility enforcement, or an independent checkout in the theme.

Only this document was added during discovery. No store connection, theme upload, live-theme modification, app installation, or publication was performed. Approval of this plan would authorize agreed development work; publishing the live theme still requires explicit authorization.

## 2. Repository audit: verified facts

Inspected repository: `/workspace/cellife-shopify-theme`; origin: `https://github.com/cremechese/cellife-shopify-theme.git`.

- HEAD is `258f00f`, titled `Dawn 16.0.0 (#3946)`; `config/settings_schema.json` declares Dawn 16.0.0. The worktree was clean before this document. No applicable AGENTS.md was found in the inspected workspace.
- Standard Shopify directories are present: `assets`, `config`, `layout`, `locales`, `sections`, `snippets`, and `templates`. No package manifest or custom bundler was found.
- `layout/theme.liquid` provides the shared shell, Shopify's `content_for_header`, deferred scripts, conditional feature assets, and CSS generated from theme settings. Preserve Shopify injection points.
- Templates are predominantly OS 2.0 JSON. `templates/index.json` currently composes a generic image banner and featured collection. `templates/product.json` composes `main-product`, disclosures and related products. The gift-card template remains Liquid, as expected.
- Header/footer section groups already exist. Reusable sections include image banner, image with text, collection list, featured collection, multicolumn, collapsible content, video, contact form and apps.
- `sections/main-product.liquid` supports `@app` blocks. `snippets/buy-buttons.liquid`, variant-picker/media snippets, `assets/product-form.js` and `assets/product-info.js` provide the product foundation. The AJAX product form serializes FormData; any subscription integration must submit the correct `selling_plan` in that form.
- Cart page and drawer already render selling-plan names. This is useful baseline support, not proof that a particular subscription app is compatible.
- `snippets/product-disclosures.liquid` consumes `product.metafields.shopify.disclosure`; retain that native capability rather than replacing it with an unrelated custom disclosure model.
- Theme Check and Lighthouse CI exist in `.github/workflows/ci.yml`. Lighthouse depends on store secrets that have not been verified. Inherited CLA and stale-issue workflows are upstream project administration, not Cellife requirements; review before enabling them on this repository.
- `.theme-check.yml` disables MatchingTranslations and TemplateLength. Record baseline findings before deciding whether to change these exceptions.

The repository appears to be an upstream Dawn starting point, not an export of Cellife's current live theme. Local inspection cannot establish installed apps, actual product content, current checkout customizations, store plan, shipping rules, analytics, or integration behavior. No authenticated Shopify access was available in this audit. Runtime tests and performance measurements were not run for this documentation-only change.

**Version decision:** use this tagged release lineage as the candidate baseline, then verify the current stable Dawn release, relevant fixes and compatibility before implementation. The version string alone does not establish current support. Pin the approved upstream commit/version, retain its license, and document targeted upgrades; do not automatically merge Dawn's unreleased main branch. A customized Dawn fork needs deliberate upgrade testing.

## 3. Reference research and evidence limits

Public homepage text/navigation was accessible on 22 October 2026 through web retrieval. This supports information-architecture observations only; no rendered screenshot, colour, typography, animation, mobile layout or measured performance was verified.

| Reference | Observed structure | Cellife interpretation |
| --- | --- | --- |
| [qore8](https://qore8health.com/) | Shopping categories, science/ingredient navigation, product listings and community content | Connect shopping with optional supporting education; keep proof near relevant products |
| [For Youth](https://foryouth.co/) | Goal-based shopping, bundles, best sellers and a staged product-system explanation | Offer clear routes into the range and explain relationships between products |
| [Elevate](https://elevatevitality.com/) | Focused product story, quality information, FAQs and testimonials | Use a calm editorial sequence with progressive detail and clear purchase actions |

These are structural lessons, not endorsements of reference-site claims. Do not reuse their copy, reviews, regulatory statements, photography or brand assets.

Before visual sign-off, inspect rendered pages or obtain: each homepage's first viewport and full page at approximately 390px and 1440px; one collection and product page per site; mobile navigation; subscription selector; and cart/drawer states. Ask the brand owner to mark the specific qualities they like. If direct visual access remains unavailable, supplied screenshots are required for reference-specific styling observations. The design below is an original proposal, not a description of those sites.

## 4. Maintainable theme structure

Use standard Shopify directories, with flat filenames and a `cellife-` prefix for new components. Avoid a frontend framework, global DOM-rewriting scripts, a large override stylesheet, and duplicated commerce implementations.

```text
assets/
  cellife-tokens.css                 # small semantic token layer
  section-cellife-hero.css           # section-specific styling
  section-cellife-pathways.css
  cellife-category-dialog.js         # only if approved
sections/
  cellife-hero.liquid
  cellife-pathways.liquid
  cellife-proof-grid.liquid          # only if native multicolumn is insufficient
  cellife-testimonials.liquid        # consented editorial video; reviews use app
snippets/
  cellife-product-badge.liquid
  cellife-export-notice.liquid
templates/
  product.supplement.json
  product.diagnostic.json
  product.export-enquiry.json
  page.international-enquiry.json
docs/
  content-model.md
  app-compatibility.md
  release-checklist.md
```

These filenames are proposed, not implemented. Keep `main-product`, price formatting, product cards, variant logic, cart, localization and facets shared. Add small explicit hooks when needed rather than copying entire sections into three competing product implementations. JSON templates select content and blocks; they do not enforce sales restrictions.

Map semantic tokens to Dawn colour schemes and typography settings so the Theme Editor remains the source of truth. Use component-scoped selectors and a documented cascade. New sections expose meaningful image, heading, copy, link, colour scheme and layout settings with sensible presets, translation keys, and blank-content fallbacks. Avoid arbitrary per-element controls.

JavaScript should use native elements or small guarded custom elements, work with multiple section instances, initialize after Theme Editor section loads, and clean up listeners when removed. Render useful content and navigation without JavaScript. Load feature scripts only where needed. Preserve `block.shopify_attributes`, section groups and app extension points.

### Reuse and section inventory

| Need | Starting point / proposed extension |
| --- | --- |
| Header, navigation, search, localization | Existing header, menu snippets and predictive search; simplify navigation to Supplements, Test kits, Learn, About |
| Product photographic hero | Evaluate existing image-banner first; create Cellife hero only for missing mobile art direction/layout controls |
| Two shopping pathways | Collection-list if sufficient; otherwise two configurable collection cards in Cellife pathways |
| Best sellers and collection listings | Featured-collection, main-collection-product-grid, card-product and native filters |
| Editorial product education | Image-with-text, rich-text, multicolumn and collapsible-content |
| Product gallery and purchase area | Main-product, existing media, price, variant and buy-button snippets; subscription app block |
| Evidence, FAQs, disclosures | Existing disclosures and collapsible sections; approved structured content |
| Reviews and video | Review app blocks plus optional lightweight editorial video section; no invented ratings |
| Export recognition and enquiry | Shared badge/notice snippets and enquiry page; platform enforcement separately |
| Footer and newsletter | Existing footer group and newsletter; retain approved consent wording |

### Content model

Define merchant-owned `cellife` metafields with types, validation, descriptions and migration ownership before populating them. Prefer references and dynamic sources over copied content. Proposed fields: `product_family` (validated supplement/diagnostic value), `purchase_mode` (standard/export_enquiry), `short_summary`, approved directions/warnings, and references to FAQ/evidence content. Region-specific policy needs an explicit approved market/country model, not a single export flag.

Use metaobjects for reusable FAQs (question/answer), approved evidence (title, citation, URL, reviewed date), diagnostic steps (title, copy, media), and consented video testimonials (video, poster, caption, transcript and attribution). Store consent records in an appropriate private system, not publicly exposed storefront fields. Expose only approved publishable data. Use existing Shopify review rating definitions where supported by the chosen app; do not maintain a competing ratings database.

Keep price, inventory, variants, subscription plans and availability in Shopify/app systems. Preserve native `shopify.disclosure`. Missing content should omit optional sections cleanly. Regulatory credentials must be product-specific and verified. Never collect diagnostic results, symptoms or other sensitive health information in theme forms, analytics events or browser storage.

## 5. Proposed premium visual system

Direction: warm, precise and quietly confident. Combine natural daylight product photography with clear clinical information hierarchy. Supplements and diagnostics share one identity; distinguish them through labels, imagery and content structure rather than separate visual brands.

| Element | Proposed rule |
| --- | --- |
| Palette | Brand-book blue (provisional swatch sample `#3E2B62`), restrained red (`#8F2C26`), dark ink (`#262125`), white and platinum `#F4F4F5`; see `docs/BRAND.md` for source inconsistencies |
| Colour use | Blue headings/actions/focus states, white button labels, dark body text, neutral surfaces; red limited to small decorative accents. Validate actual text/control pairings against WCAG AA |
| Typography | Broadacre headings/tagline and Inter body copy per brand book p24; use existing Dawn fallbacks until licensed webfont assets are supplied, with no external font service |
| Scale | Body 16–18px; fluid hero heading about 36–72px; section headings 28–48px; readable copy width about 60–70 characters |
| Layout | Approximately 1280px content maximum, 20px mobile gutters/40px desktop; 4/8px spacing rhythm; section spacing roughly 48–96px |
| Shapes | Mostly crisp layouts, modest 8–12px card corners and minimal shadows; pill badges used sparingly |
| Controls | Clear filled and outlined actions; minimum 44px touch targets; visible focus, loading, error and disabled states |
| Imagery | Consistent packshot scale and backgrounds; separate mobile hero crop/focal point; authentic lifestyle and kit photography; product labels remain readable |
| Motion | Short opacity/transform feedback only; respect reduced motion; no automatic hero carousel, parallax or autoplay video |

Homepage sequence: concise announcement/header → single photographic hero → Supplements/Test kits pathways → curated products → approved educational story → diagnostic process → real reviews/video → FAQs → footer. Omit empty proof modules rather than filling them with unsupported claims. Keep the two pathways visible without the optional category dialog.

Product pages prioritize gallery, approved summary, price, variant selection, purchase options and clear delivery information. Supplement pages add ingredients/directions/warnings; diagnostic pages add what's included, collection process, supported locations and approved turnaround information. Export enquiry pages explain availability and next steps without misleading purchase buttons.

Collection pages use useful introductions, consistent cards, native sorting/filtering and product-family-appropriate filters. On mobile, use a readable grid and accessible filter drawer. Reserve card image and price space to avoid shifts.

## 6. Feature ownership and commerce constraints

| Feature | Shopify configuration / established app | Theme responsibility | Checkout or enforcement dependency |
| --- | --- | --- | --- |
| Hero and shopping pathways | Collections, navigation, approved photography | Responsive editable sections and links | None |
| Product/collection pages | Product data, template assignments; Search & Discovery filters/recommendations | Shared cards, gallery, forms, facets, structured content | Shopify prices/inventory remain authoritative |
| Export-only recognition | Markets/catalog availability where supported, shipping destinations, approved restriction policy; validation app if necessary | Badges, notices, enquiry CTA on PDP/cards/search/cart | Enforce applicable destination/product rules outside theme; Markets visibility alone may be insufficient |
| International enquiry | Native Shopify contact form initially; Shopify Forms or existing CRM only if routing/spam/structured fields require it | Product identifier, country, contact details, escaped fields, confirmation and privacy copy | Not a checkout; do not request health data; verify recipient/routing |
| Subscription offers | Shopify Subscriptions or compatible established app; configure 15% off every 30 days and 20% off every 90 days as selling plans | App block styling and correct selling-plan submission/display | App/Shopify own contracts, billing, retries, cancellation and customer portal |
| Reviews | Existing review app first; compare a supported app such as Judge.me only if replacement is needed | App blocks, consistent spacing and deferred loading | No custom verification or fabricated review content |
| Video testimonials | Shopify-hosted video and approved consented content | Poster-first playback, captions/transcript and reserved media space | Third-party embeds only after appropriate consent where required |
| First-order offer | Native eligible-customer discount configuration where sufficient, or established discount app/Function-backed implementation | Explain offer and exclusions accurately | Eligibility and discount apply server-side; cookie, popup or Liquid customer checks are insufficient |
| Category overlay | No app needed | Optional dismissible accessible dialog, remember non-sensitive preference where appropriate | Never an eligibility or export restriction mechanism |
| Future quiz | Prefer established recommendation app; static editorial navigation if enough | Lazy entry point, accessible results linking to products | No medical diagnosis; assess privacy and consent before collecting data |
| Future infographics | Approved content and Shopify media/metaobjects | Responsive images with dimensions, text equivalents and optional HTML explanation | No unsupported clinical interpretation |

### Subscription decisions and compatibility tests

First identify any existing subscription provider and contracts; retain them unless an explicit migration is separately approved. No provider is selected by this plan. Confirm payment gateway/country eligibility, Shopify Markets/currency behavior, customer account portal, variant coverage, stock handling, fulfilment/integration compatibility, cancellation terms and total app/script cost.

Clarify whether 90-day means one unit delivered every 90 days or a three-unit supply; billing and delivery intervals must match approved business terms. Thirty/ninety days must not silently become calendar month/quarter. Confirm discount duration, base price, shipping, taxes, renewal disclosures, first-order discount combination, and excluded/export-only products. Derive displayed amounts from actual selling-plan allocations, not theme arithmetic or hard-coded plan IDs.

Test one-time and both plans across variant changes, product form, cart drawer/page, same variant with different plans, quantity changes, discounts, sold-out state and checkout. Disable quick-add for subscription-required products unless it supports valid plan selection. Verify accelerated checkout and alternative purchase entry points with the chosen app. Styling must not break app initialization or Theme Editor behavior. Prove sandbox renewal and cancellation through the app; a successful initial checkout alone is insufficient.

### Checkout limitations

Liquid themes do not control hosted checkout. Do not plan `checkout.liquid`, checkout DOM manipulation, or theme JavaScript as a checkout solution. Use supported Checkout Extensibility and Shopify capabilities only where needed. Information/shipping/payment-step UI extensions generally require Shopify Plus; other targets, branding, Functions and validation capabilities depend on plan, app distribution, API and account eligibility. Confirm current Shopify documentation and the store's entitlements before promising a customization.

For export products, define whether the rule concerns visibility, shipping destination, billing country, enquiry-only sale, or another legal criterion. Geolocation, country selectors, hidden buttons and cart attributes can be bypassed. Test direct cart requests, accelerated checkout, mixed carts, destination changes and other sales channels against the authoritative controls. Shipping profiles alone may prevent shipping without implementing the whole policy. If the available platform/app controls cannot meet the approved restriction, keep affected products unavailable for purchase until a suitable enforceable solution is proven.

For first-order eligibility, define the discount amount, prior paid/cancelled/refunded order treatment, guest/returning customer behavior, subscription renewal applicability, minimum spend, market exclusions and stacking. “One use per customer” does not by itself establish “first order only.” Email capture and a new browser do not establish eligibility. Treat abuse resistance and guest identity as explicit platform constraints.

## 7. Performance, accessibility and maintenance acceptance

- Target field Core Web Vitals at the 75th percentile: LCP ≤2.5s, INP ≤200ms and CLS ≤0.1. These are targets, not results or launch guarantees; field validation needs sufficient real traffic.
- Establish repeatable mobile lab baselines for homepage, representative collection and both product families, with the real app stack. Use median of three comparable runs and compare to approved baseline. Aim for Lighthouse performance ≥90 in the controlled setup, documenting any third-party exceptions.
- Provisional budgets: mobile hero ≤250KB, desktop hero ≤400KB at delivered size; incremental first-party Cellife JS ≤20KB gzip and CSS ≤30KB gzip beyond Dawn; fonts ≤100KB total transfer. Measure real output before locking these budgets.
- Render the LCP image in HTML using Shopify image transforms, accurate `sizes`/`srcset`, explicit dimensions, eager loading and high fetch priority only when it is actually above the fold. Lazy-load lower media. Do not preload both desktop and mobile hero downloads. Avoid CSS background heroes that delay discovery.
- Reserve space for images, app widgets, video and purchase controls; avoid late injected banners. Audit app embeds, marketing pixels and consent behavior before adding scripts. Use native analytics/pixels rather than duplicate trackers.
- WCAG 2.2 AA target: keyboard navigation, focus visibility/restoration, accessible dialog names/Escape handling, screen-reader form errors and cart announcements, captions, contrast, 200% zoom, reflow and reduced motion. Test Safari/iOS, Chrome/Android and desktop Safari/Chrome/Firefox/Edge.
- The category dialog must have a visible dismiss option, never block navigation permanently, avoid showing on every page, and remain disabled in editor/design review by default. Test storage unavailable and JavaScript disabled; no medical preference storage.
- Run Theme Check and schema/JSON validation for implementation changes. Add focused browser tests for consequential commerce behavior, not tests that merely mirror CSS. Document extension contracts, content ownership, app versions, rollback and future Dawn update procedure.

## 8. Phased plan with testable milestones

| Phase | Deliverables | Exit criteria |
| --- | --- | --- |
| 0 — Discovery and agreement | This plan, rendered reference review, existing live-theme/app/integration inventory, store-plan and policy confirmation, assets/content checklist | Owner approves direction and scope; unknowns assigned; no live changes |
| 1 — Safe baseline | Approved stable Dawn version, pinned provenance, project-specific tooling/CI, local theme checks, authorized development/unpublished theme, baseline screenshots/performance | Theme renders with representative products; existing commerce smoke checks pass; CI cannot publish live; existing live theme backed up before later release |
| 2 — Design foundation and homepage | Approved tokens, header/footer treatment, photographic hero, two pathways and curated products | 390px/1440px review accepted; editor reordering/empty images work; keyboard checks and hero budget pass |
| 3 — Catalog and product families | Shared cards/collections, three product templates, typed content definitions, diagnostic process and disclosures, enquiry form | Representative multi-variant/sold-out/long-title/missing-content products pass; enquiry recipient and privacy behavior verified; handles and SEO retained |
| 4 — Commerce integrations | Subscription app integration, export enforcement, first-order offer and reviews | Signed-off test matrix covers direct-cart/accelerated checkout bypass attempts, plan allocation/prices, eligible/ineligible discounts and app renewal/cancellation sandbox evidence |
| 5 — Proof and optional enhancements | Approved video/testimonials and optional category dialog; quiz/infographics remain separate future scope | Caption/focus/consent tests pass; no unapproved claims; app and media budgets pass |
| 6 — Release readiness | Cross-browser/accessibility review, lab comparisons, SEO/analytics/integration regression, merchant handover and rollback rehearsal | No unresolved critical commerce/accessibility defects; content approved; preview accepted; explicit live publication authorization obtained |
| 7 — Authorized launch and observation | Publish only after authorization; monitor conversion, errors, fulfilment and field vitals | Smoke tests pass; subscription/discount/export rules verified; agreed observation window and rollback owner active |

Development occurs in a branch and an explicitly identified development/unpublished theme. No push to the current live theme and no automatic publication. Review inherited CI's store-writing behavior before running it with credentials; changing to a draft theme does not isolate shared products, discounts, Markets or app configuration. Use a development store/sandbox for those changes where possible and obtain authorization for production configuration changes.

Release tests include variant/deep links, search and filters, pagination, cart updates, gift cards if used, discount combinations, Markets, tax/shipping display, account links, transactional flows, analytics consent, reviews and existing fulfilment/lab integrations. Retain the previous published theme and document republishing it as rollback; platform/app configuration needs its own recorded rollback because switching themes does not restore it.

## 9. Risks and unresolved inputs

| Risk / missing input | Mitigation / decision gate |
| --- | --- |
| Current live implementation unknown | Inventory theme/app embeds, scripts, custom tracking, metafields, templates and integration touchpoints before replacing behavior |
| Dawn current support unverified | Check official stable release and upgrade notes; pin and test approved version |
| Shopify plan/checkout entitlements unknown | Confirm store plan and required extension targets before estimating checkout work |
| Subscription provider/contracts unknown | Audit provider and contracts first; sandbox compatibility proof before visual customization |
| Export policy ambiguous | Obtain destination/product rules and validate authoritative controls before enabling purchase |
| First-order policy incomplete | Approve precise eligibility, amount and stacking rules; test guest and returning customers server-side |
| Diagnostic-specific fulfilment/privacy | Confirm supported locations, kit registration, sample returns, lab notifications and result access; keep sensitive workflows in existing secure systems |
| Claims, credentials and testimonials | Brand/regulatory owner supplies approved product-specific copy, evidence, usage rights and review provenance; no placeholders presented as facts |
| Photography absent or inconsistent | Obtain logo/vector assets, packaging/kit imagery and desktop/mobile hero crops before final design acceptance |
| Third-party performance regressions | Inventory scripts, establish app-on baselines, limit embeds and verify vendor load behavior |
| Store content/editor drift | Agree code-versus-merchant ownership of JSON/settings; capture approved configuration and review diffs before deployment |
| Theme replacement affects SEO/integrations | Preserve handles, canonical/structured data and integration selectors where required; audit redirects only where URLs actually change |

Inputs needed for the next stages: store URL and plan; authorized draft/dev access when development begins; existing app/provider list; live-theme integration inventory; representative products and variants; approved export policy; subscription supply/interval terms; discount amount and eligibility; approved brand assets and copy. These are implementation gates, not reasons to invent the missing details.

## 10. Smallest first implementation task

After plan approval, establish the **verified Dawn development baseline** as one small reviewable change: confirm and record the approved stable Dawn version/commit, document local Shopify CLI and Theme Check commands, and adjust inherited CI so checks cannot target or publish the live theme. Record baseline check results and any pre-existing warnings. This task needs no storefront redesign or production configuration changes.

Acceptance: reproducible checks, documented provenance and safe preview workflow; only intended documentation/tooling files changed. Do not fetch store credentials or run store-writing CI merely to complete local setup. Once authorized dev access exists, confirm a development preview and baseline measurements separately.

The first visual implementation after that should be a single editor-configurable photographic hero, reusing image-banner where feasible. Review its mobile crop, accessible heading/CTA, missing-image behavior and LCP before extending the design across pages.

## 11. Verification sources

Repository evidence: `config/settings_schema.json`, `layout/theme.liquid`, `templates/index.json`, `templates/product.json`, `sections/main-product.liquid`, `snippets/buy-buttons.liquid`, `snippets/product-disclosures.liquid`, `snippets/cart-drawer.liquid`, `sections/main-cart-items.liquid`, `assets/product-form.js`, `README.md`, `.theme-check.yml`, and `.github/workflows/`.

Official sources to verify during implementation: [Dawn releases](https://github.com/Shopify/dawn/releases), [Shopify theme architecture](https://shopify.dev/docs/storefronts/themes/architecture), [subscriptions](https://shopify.dev/docs/apps/build/purchase-options/subscriptions), [Checkout UI extensions](https://shopify.dev/docs/api/checkout-ui-extensions), [Shopify Functions](https://shopify.dev/docs/api/functions), and [Shopify discounts](https://help.shopify.com/en/manual/discounts). These are verification pointers: current documentation retrieval was unsuccessful in this session, so store-specific entitlement and compatibility claims remain conditional.
