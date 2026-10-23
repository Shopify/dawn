# Cellife editorial overhaul

## Scope

Rework the preview theme around the reference site's shopping and editorial depth,
using original Cellife layouts and brand colours. Retain Dawn's product form,
variants, cart, search, filters, localization, app blocks and disclosures. Keep
the supplement-first homepage, separate diagnostic destination and first-visit popup.
No live-theme publication, checkout, billing, quiz or eligibility implementation.

## Implementation sequence

1. Inspect the rendered reference homepage, collection and product page.
2. Add a coherent global design layer, retaining accessible native controls.
3. Compose the homepage from reusable product shelf, evidence grid, editorial,
   community-video, expert-profile, FAQ, campaign and native newsletter sections.
4. Apply the same system to collection and product templates without replacing
   their commerce logic. Add editable product information/evidence placeholders.
5. Supply a section-by-section replacement checklist. Keep all unapproved proof,
   testimonials, people and images explicitly identified as placeholders.
6. Run syntax, structural and browser checks; push to the existing preview branch
   while preserving current merchant data and snapshotting the prior composition.

Research/partner claims, clinical assertions, certifications, fake review stars,
sample customer identities and copied photography must not be used to fill gaps.
The reference is a design source, not a source of Cellife product facts.

## Rendered reference observations

The [homepage](https://qore8health.com/),
[collection](https://qore8health.com/collections/longevity-cellular-health) and
[product page](https://qore8health.com/products/nmn-pure-max-500mg) were inspected
at desktop and mobile sizes. Observed: a light canvas, strong display headings,
rounded product panels, a compact header, long-form education, video/community
cards, profiles and FAQs. Desktop collection cards pair imagery with details;
mobile stacks their contents into two columns. Product pages retain a split
gallery/purchase area and stack on mobile.

The reference's teal/orange palette, product assertions and promotional offers
are not Cellife specifications. Cellife retains brand-book violet-blue, restrained
red, Broadacre/Inter font intentions and neutral surfaces. Subscription selectors,
discount enforcement and quiz behavior are not recreated as theme simulations.

## Placeholder replacement checklist

All new sections are editable and reorderable in Shopify's Theme Editor. The
reference's content has not been imported. Work through these in any order:

| Preview section | What to supply | Where to replace it |
| --- | --- | --- |
| Photographic hero | Existing Cellife hero is retained; supply new crops only if desired | Cellife photographic hero → desktop/mobile images |
| Quality / transparency strip | Verified references and permitted logos; approximately 600×250px logos | Cellife content grid → evidence cards; clear each draft checkbox after approval |
| Supplement product shelf | A curated existing collection, finished packshots and correct product records | Cellife product shelf → collection; actual prices/availability stay Shopify-managed |
| Approach tiles | Four approved statements and optional icons | Cellife content grid → Ingredients/Formulation/Quality/Directions |
| Community stories | Consented video/portraits, exact quote/attribution, captions or transcript | Cellife community stories → video/story blocks; approval switch gates media and quotes |
| Product spotlight | Product image and approved product-specific copy/references | Cellife editorial story → image, text, supporting points and real CTA |
| Education cards | Original editorial images, approved articles/copy and real destinations | Cellife content grid → editorial cards |
| People / expertise | Consented portraits, verified names/roles and bios | Cellife content grid → profile cards; no advisory-board relationship is implied |
| Campaign panel | Landscape or square brand photography and approved copy | Cellife editorial story → campaign settings |
| FAQs | Approved answers and policy/contact destinations | Cellife questions → individual question blocks |
| Newsletter | Approved signup messaging; any offer only after actual eligibility configuration | Native Newsletter in Footer group → heading/copy/form |
| Product information | Product-specific contents, directions, warnings and diagrams | Product template → content cards/editorial/FAQ; use dynamic sources where available |
| Product card summaries | A typed single-line `cellife.short_summary` product metafield with approved copy | Shopify product metafields; optional and omitted when empty |

Editorial images: aim for 1200×1200px in split panels, 1000×750px on story cards,
800×1000px for portraits, and 800×1067px video posters. Shopify generates responsive
sizes. Do not bake text into the artwork. Keep final media within the performance
budgets in PROJECT_PLAN.md. Brand fonts are still fallbacks until licensed Broadacre
and Inter webfonts are supplied.

The former featured-collection and category cards are retained disabled in the
homepage JSON. The previous composition is saved in
`docs/snapshots/homepage-before-editorial.json`. The diagnostics landing page and
its verified collection references are retained; its Shopify page record is still
a separate configuration requirement. The popup remains enabled and its Supplements
choice returns to the homepage.

## Commerce and maintenance

Native Dawn product forms, variants, inventory, cart updates, search, sorting,
filtering, pagination, account links, structured data, app blocks and disclosures
remain. The cart uses Dawn's built-in drawer. The mobile product action is a native
anchor to the real purchase controls, with no cloned form, stale price or plan state.
Collection cards use a two-column desktop layout; content stacks on mobile. Extra
product links and the mobile action can be disabled under Cellife editorial design.

No subscription plan, checkout restriction, first-order discount or quiz is
simulated. Those reference features remain app/configuration work from PROJECT_PLAN.
Existing product app slots remain available. No new storefront JavaScript, external
font host, tracking pixel, carousel dependency or automatic video playback is added.

Science, Ingredients, About Cellife and FAQ also have OS 2.0 page-template
foundations (`page.science`, `page.ingredients`, `page.about-cellife`, `page.faq`).
They reuse the same sections and explicit draft content. Create/assign page records
and add their destinations to Shopify navigation when ready. These templates do
not create live pages, and uncreated destinations are not added as dead menu links.
The existing Contact page retains Shopify's native form.

## Validation

- Shopify CLI **4.9.4** Theme Check: **0 errors, 9 warnings**. The warnings match
  the unchanged source baseline (legacy variable naming/complexity/unused values).
  The old journey-nav schema name length error was corrected in this change.
- JSON/embedded section schema syntax: **122 documents** validated.
- Local custom Liquid rendering and Chromium checks at **320, 390 and 1440px**:
  no page overflow, FAQ interaction, primary journey links, saved-popup behavior,
  and unapproved story/media gates passed. No JavaScript runtime errors.
- Template setting/block references and select values were checked; merchant hero
  configuration and native product/app/disclosure hooks were preserved.
- The local screenshots use absent-media/product placeholders. Shopify-specific
  catalog rendering, native forms, app behavior, real video, cart mutations, Safari
  and field performance need development-theme testing with final content.

Temporary local tooling lives outside the repository. Reproduce checks with
Shopify CLI and Node/Playwright/LiquidJS available:

```sh
shopify theme check
python3 scripts/check-theme-json.py
node tests/editorial.cjs
node tests/dual-path.cjs
```

The LiquidJS fixture renders actual custom section templates with Shopify-like
globals and empty media, not Shopify's full native commerce runtime. It complements
Theme Check and does not establish that the checkout or app integrations passed.
