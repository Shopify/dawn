# Cellife Product Finder v2

A short, interest-based discovery quiz. It does not assess medical suitability.
`BRIEF.md` is the current flow specification; `EVIDENCE_APPENDIX.md` retains only
v1's source matrix, evidence boundary and register. The old five-screen flow,
health-answer engine, exclusions, review/no-match outcomes and flow tests have
been replaced, not combined with v2.

## Theme integration

- Reusable section: `sections/cellife-product-finder.liquid`.
- Dedicated page template: `templates/page.product-finder.json`.
- All twelve native product-selector connections remain assigned, with real
  catalogue handles recorded in `catalogue-mappings.json`.
- Editable: heading, intro, optional eyebrow, four category titles/subtitles,
  colours and maximum width. Editing labels never changes route IDs.
- Protected in code/data: routing, warning obligations, result scope and review
  holds. The page opens directly on Q1 with no extra Start screen.
- Existing homepage links, other sections, product copy and the live theme remain
  unchanged. The owner's preview-branch push authorisation remains in effect.

Most routes use two questions. Only energy/cellular and resilience/immune ask a
third preference question. Antioxidant is the only cross-category overlap, with
the same general-antioxidant rationale in both places. No scoring, AI, commercial
fallback, stack, automatic cart addition, dose selection or warning checkbox.
An explicit Add to cart action is available on results, as subsequently requested.

## Source and runtime structure

`products.json`, `sources.json` and `evidence.json` retain the twelve-product
appendix and F/C/W/P distinctions. Historical v1 `policyRules` and P records are
reference material only; the engine never executes those health exclusions.
The original PDFs/current labels are still unavailable for verification.
Reviewer/date fields remain null and source claims remain unreviewed.

The active flow is deliberately small and separate from presentation:

- `questions.json`: four categories, branch labels and the two optional Q3s.
- `routes.json`: fifteen exact paths to one product/rationale each.
- `rationales.json`: narrow supplier claims with source C references.
- `warnings.json`: required visible W warnings, F ingredient notes, and separate
  verification notes; no warning changes based on undisclosed health details.
- `guidance.json`: fixed scope and proposed general guidance, classified P.
- `recommend.ts`: pure evaluator and pure catalogue-destination adapter.
- `assets/cellife-product-finder.js`: presentation and memory-only choices.

`evaluate({category, interest, preference?}, catalog, mode)` returns
`INCOMPLETE`, `INVALID`, `DATA_HOLD` or `DISCOVERY_MATCH`. Completed valid source
routes produce exactly one ID plus rationale evidence and source-warning IDs.
No result is a safety clearance. Unknown/cross-branch answers and stale Q3 are
invalid; missing questions are incomplete. Source/destination problems hold the
result without substitutions.

**Royal Jelly:** the owner-connected product is still mapped to ID `propolis`,
while S02 describes propolis. The source route is testable, but its real catalogue
connection remains DATA_HOLD until replacement evidence and warning review are
provided. No propolis claims or warnings are transferred to Royal Jelly.

Build the two dependency-free runtime assets with
`node scripts/build-product-finder.cjs`; use `--check` to detect stale output.
Source structure and warning/rationale relationships are checked before building;
a runtime checksum detects accidental drift. It is not a security signature.
Theme assets are public; no private/customer data belongs in source records.
Source evidence remains in the repository; the staff evidence panel and visible
preview/review labels were removed at the owner’s request. Removing those labels
does not approve evidence or publish the theme.

Public release remains disabled in both Liquid and the evaluator. An unpublished
preview can demonstrate routes without customer-facing draft/review labels. A public
release requires current labels, claims/precautions/destinations review and
explicit approval; no Theme Editor switch can grant those approvals.

## Interaction, privacy and validation

Choices live only in section memory. No health answers are collected or inferred,
no free text/email gate/tracking is added, and nothing is written to URLs, CRM,
network submissions or browser storage. Back preserves valid choices; changing
Q1 clears Q2/Q3 and changing Q2 clears Q3. Restart, leaving the page, browser Back
restoration and section teardown clear choices. Native radio controls, fieldsets,
focus handling, errors and visible Step 1/2/optional 3 support keyboard use.

Result copy uses “Recommended Product”, “Matched to your interests.” and a narrow
“You selected…” explanation. It shows the native product title and current price.
Purchase actions appear below the product details, followed by a visible
precautions panel; there is no
tooltip/collapsed warning, extra intake form or acknowledgement gate. Product detail pages retain their
full labels, storage and seal instructions. The quiz does not modify them.

Validation commands/results:

- `node tests/product-finder/engine.cjs`: **34 passing tests**, including all
  15 valid paths, validation/integrity failures, source warnings, overlap,
  one-result guarantees, determinism and catalogue identity/destination holds.
- `node tests/product-finder/browser.cjs`: all 15 paths at 320/390/1440px; 2/3-step
  counts; visible warnings below purchase controls; Back/restart/upstream clearing; keyboard controls;
  no answer requests/storage/URL data; absence of review/staff labels; no-JS fallback; axe WCAG
  A/AA checks on category, formula and warning-result states. Royal Jelly is
  explicitly checked as the unresolved catalogue hold.
- Theme Check: **0 errors**, 11 pre-existing warnings, none in the new section.
- `python3 scripts/check-theme-json.py`, build freshness and `git diff --check`.

Browser tests use development-only LiquidJS, Playwright and axe with installed
Chromium (`/usr/bin/chromium`); no test dependency is shipped in the theme.
Set NODE_PATH to these tooling packages and SCREENSHOT_DIR for fixture images.
These checks do not replace claims review, original-sheet/current-label checks,
manual screen-reader review or a Shopify preview verification.

## Explicit cart action

The latest owner instruction supersedes the earlier brief's result-copy and
no-cart-control directions. Final answers use “Submit”. A single-variant, available
product can be added by an ordinary Shopify POST form. Only variant ID, quantity
1 and the native cart return path are submitted; quiz choices are never attached.
Products needing variant selection, a required selling plan or special quantity
rules link to Choose options. Sold-out products show a disabled control. Prices
come from Liquid and are prefixed From when they vary. Shopify remains
authoritative for stock, selling plans, quantity limits and checkout validation.
The product details link remains available alongside Add to cart. At the owner’s
request, these controls sit above “Before you consider this product”.

Browser tests submit only to a local fixture, never a real store cart. They check
the exact native form fields and options/selling-plan/quantity/sold-out fallbacks.
The published-theme and Royal Jelly evidence holds remain internal and unchanged.
