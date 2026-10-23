# Dual-path shopping milestone

## Updated direction: supplements is the homepage

The owner subsequently selected a supplement-focused main homepage **with the
first-visit selection popup retained**. This supersedes the equal-weight page
architecture described in the original milestone below:

- Supplements links in the popup and persistent navigation now resolve to
  `routes.root_url`, including localized home routes. No Supplements page record
  is needed. The optional older `page.supplements` template remains available but
  is no longer a primary destination.
- The existing homepage hero imagery, headline and visual styling are retained;
  its summary now introduces supplements and its secondary link leads to diagnostics.
- The homepage product grid selects the verified `supplements` collection.
- The inline two-choice gateway is hidden with a new editable checkbox while its
  independently configurable popup remains enabled. The old four-category section
  is retained in JSON, disabled rather than deleted, for easy restoration.
- Diagnostic Test Kits retains its standalone page template and category cards.
  Its page record still needs assignment through the shared theme setting.
- The popup script now lives in `layout/theme.liquid`, independently of optional
  header section configuration. It still remembers explicit selection/dismissal,
  skips direct catalog entries and never redirects based on a saved preference.

The local browser suite was updated for Supplements → homepage. Original preview
setup instructions referring to a required Supplements page are superseded by this
section; only the Diagnostics page record is required for the primary navigation.

## Implementation plan

Preserve the current Shopify-connected branch's homepage settings, hero, category
cards and product grid. Work only on `milestone/dual-path-shopping`; do not update
`cellife-rebuild`, upload a theme, change store menus/pages, or publish.

1. Add an editable two-choice homepage gateway without replacing existing sections.
2. Add reusable landing introduction and collection-card sections, composed through
   `page.supplements.json` and `page.diagnostic-test-kits.json`.
3. Add a persistent secondary shopping navigation to the existing header group;
   use shared theme settings for both landing-page destinations.
4. Add a default-off homepage selection dialog. Use native dialog semantics,
   keyboard dismissal/focus restoration and ordinary navigation links. Remember
   selection/dismissal; never infer a destination or redirect automatically.
5. Validate desktop/mobile interactions, first/direct/return entries, Back,
   disabled storage, no JavaScript, and missing media. Record limits honestly.

## Resource evidence

The public store navigation was inspected on 23 October 2026. Existing collection
destinations are `/collections/supplements`, `/collections/respiratory-tests`,
`/collections/respiratory-tests-copy` (Drug & Alcohol Tests), and
`/collections/womens-urinary-health`. These are retained exactly. No combined
diagnostics collection or new collection handle is assumed.

New page URLs `/pages/supplements` and `/pages/diagnostic-test-kits` are proposed
page records, not claims that pages already exist. Templates alone do not create
Shopify page records. Before a future authorized preview, create those records
in a development store and assign the matching templates, or select other page
records under Theme settings → Cellife shopping journeys. No live records are
created in this milestone.

## What was built

- `cellife-journey-gateway`: two editable image/copy cards added after the existing
  hero. Existing homepage section settings, content and relative order are retained.
- `cellife-landing-intro` and `cellife-journey-collections`: reusable OS 2.0 sections.
  The Supplements page uses Dawn's existing featured collection with quick-add off;
  Diagnostics uses the three existing diagnostic collection references.
- `cellife-journey-nav`: persistent secondary navigation in the header group,
  visible on mobile and desktop without opening a menu. Existing menu entries stay
  intact. Both navigation and gateway resolve through shared destination settings.
- A homepage-only native dialog, controlled by the gateway's **Enable first-visit
  homepage overlay** checkbox. It defaults off and is suppressed in Theme Editor.
  Copy, labels and imagery are editable. Buttons are ordinary links, not redirects.

## Entry and persistence rules

The navigation's deferred script records the first page in each browser tab using
session storage. The dialog is rendered only on the homepage, and opens only for
an initial homepage navigation with no same-site referrer, no saved choice/dismissal,
and an enabled setting. Product/collection entries followed by a Home click skip
the dialog, as do reloads and browser Back/Forward navigations.

An explicit category selection is saved as `supplements` or `diagnostics` under
`cellife:journey:v1` in local storage; a dismissal is saved as `dismissed`. No health
answers, product details, identity or analytics are recorded. This preference stays
in that browser until storage is cleared. Another tab's saved preference closes an
open dialog. Clearing browser data can make the optional prompt eligible again.
No route changes occur without clicking a link; a saved preference never redirects.

If local/session storage is unavailable, skip the overlay. With JavaScript disabled
the dialog stays hidden and gateway/navigation links remain functional. Unsupported
native dialog browsers also keep the normal links. Escape, visible dismissal and
backdrop dismissal are supported; Tab/Shift+Tab wrap within the dialog. Page exit
closes it, and browser Back does not restore an open modal or locked scrolling.
Event listeners are removed when the custom element is disconnected.

## Isolated preview setup — not performed on the live store

1. Connect **a new unpublished theme** to `milestone/dual-path-shopping` in an
   authorized development store. Do not switch the existing live-connected branch.
2. Create page records for Supplements and Diagnostic Test Kits with the proposed
   handles (or choose different handles). Assign the `supplements` and
   `diagnostic-test-kits` page templates respectively. Shopify may only list custom
   templates from its published theme; use a development store where this theme
   can be published safely, or an authorized page template-assignment workflow.
   Do not publish the production theme to make a template selectable.
3. Under **Theme settings → Cellife shopping journeys**, select those two pages.
   Both the persistent navigation and gateway use these settings. Default links
   require the proposed page records; they will be 404s until the records exist.
4. Verify/reselect the existing collections in the landing-page editor. The source
   store's handles need matching collections in a separate development store.
5. Optionally enable the first-visit overlay in the homepage gateway. Test outside
   the editor in a fresh browser context. Leave it off if the overlay is not desired.

Theme code and schema are ready for those assignments; this milestone does not
pretend a JSON template creates a Shopify page or change shared store resources.

## Validation record

- Dependency-free JSON/embedded-schema validation: **113 documents passed**.
- JavaScript syntax check and whitespace check: passed.
- Structural comparison against the captured Shopify baseline: existing homepage
  sections/settings and relative order are unchanged; only the gateway is added.
  Both landing templates' section references resolve to repository files.
- Chromium interaction suite at **390px and 1440px**: initial homepage prompt,
  focus wrapping, Escape dismissal, visible dismissal, selection, browser Back,
  route switching, returning/new-tab visits, no automatic redirect, direct product
  and collection entry, disabled overlay, and blocked storage. No runtime errors.
- **320px** reflow and no-JavaScript navigation checked. Missing-media placeholders
  were used throughout. Desktop/mobile fixture screenshots were visually reviewed.

Run the local interaction harness with Node and Playwright available:

```sh
node tests/dual-path.cjs
```

If Playwright is provided outside this repository, set NODE_PATH to that installation.
The harness serves a local fixture using the production JavaScript, CSS, card and
dialog markup. It is **not a Shopify Liquid renderer**: its route responses stand
in for page records, and it does not validate real catalog output or checkout.
Actual Shopify Theme Check, server-side rendering, Theme Editor updates, real page
assignments and Safari/iOS testing remain pending authorized development-store
access. No live-theme upload, publication, menu edit or page creation was performed.
