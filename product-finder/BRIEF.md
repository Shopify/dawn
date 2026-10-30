# Cellife product finder — short discovery quiz

Draft v2 · 30 October 2026 · UNPUBLISHED

## Status and scope

This is the current customer-flow brief. It supersedes v1's five-question flow, health questionnaire, automatic safety eligibility rules, matching tests and implementation steps that rely on those answers. Keep v1's 12-product source matrix, source register, evidence classifications, ingredient facts, explicit supplier warnings and claims-review requirements as the evidence appendix. V1's broad health-screening policy was a design choice, not a fact-sheet requirement.

Reference appendix: [12-product evidence matrix and source register](EVIDENCE_APPENDIX.md).

This revision is a product-discovery quiz: it identifies a product to explore based on interests. It does NOT screen for suitability, allergies, interactions, pregnancy, age or medical conditions. Moving warnings to the result changes the scope; do not imply the result is clinically personalised or cleared for use.

Do not publish. All proposed public benefit wording remains subject to current-label and claims review. Source-sheet claims are supplier advertising, not independently verified clinical evidence.

## Experience

Two questions for most routes, three only when distinguishing two similar options. One selection per question. No email gate, consumption-format question, symptom questionnaire, or unnecessary third question.

Intro heading: “Find a Cellife product to explore”
Subheading: “2–3 quick questions about your wellbeing goals.”
Small visible scope statement: “For adults exploring wellbeing products. This quiz matches interests, not medical suitability. Check the product warnings before use.”

Do not promise “under 20 seconds” until timed usability testing supports the claim, including ordinary reading time. Do not count warnings as a concealed fourth question.

## Q1 — What would you most like support with?

Four single-select cards, with concrete subtitles to make the broad categories understandable:

1. **Energy & vitality** — Daily energy, endurance and cellular metabolism.
2. **Weight & metabolic wellbeing** — Body-fat management and healthy blood-sugar support.
3. **Everyday resilience** — Immune support, everyday stress and antioxidant wellbeing.
4. **Skin, eyes & daily care** — Skin, hair, nails, eyes and general antioxidant wellbeing.

“Resilience” is a navigation umbrella for separate interests. Never imply every product in that category supports both immunity and stress. Categories do not require equal numbers of products. Overlap is allowed when the specific result reason is supported by that product's sheet.

## Q2 — Which matters most to you?

### Branch 1: Energy & vitality

| Code | Customer option | Outcome | Evidence |
|---|---|---|---|
| daily_energy | Support for my daily energy levels | CoQ10 (`coq10`) | S07 p1 Benefits: energy support |
| endurance_libido | Physical endurance and healthy libido | Man Power (`man`) | S03 p1 Benefits: endurance, healthy libido |
| cellular | Support for cellular energy metabolism | Ask Q3 formulation | S06/S09 p1 Description: energy metabolism and nicotinic acid/nicotinamide |

### Branch 2: Weight & metabolic wellbeing

| Code | Customer option | Outcome | Evidence |
|---|---|---|---|
| body_fat | Support with managing excess body fat | AMPK Fatburst (`ampk`) | S11 p1 Benefits: body-fat reduction in healthy individuals, supplier claim |
| healthy_glucose | Support for healthy blood-sugar levels | Sugar Support (`sugar`) | S04 p1 Description |

Do not add Man Power or DETOX to weight-loss results. Their supplied sheets do not support a direct weight-loss match. Do not route R.R.R. into weight loss merely because its sheet mentions metabolism. No promise of kilogram loss, appetite suppression or diabetes treatment.

### Branch 3: Everyday resilience

| Code | Customer option | Outcome | Evidence |
|---|---|---|---|
| immune | Supporting my immune system | Ask Q3 immune formula | S02/S05 p1 Benefits |
| stress | Support with everyday stress | Stress Relief (`stress`) | S01 p1 Description and Benefits of Ingredients |
| antioxidant | General antioxidant wellbeing | Antioxidant (`antioxidant`) | S12 p1 Benefits |

### Branch 4: Skin, eyes & daily care

| Code | Customer option | Outcome | Evidence |
|---|---|---|---|
| skin_hair_nails | Caring for my skin, hair and nails | DETOX (`detox`) | S08 p1 Description |
| eyes | Supporting healthy eyes and vision | Vision+ (`vision`) | S10 p1 Description |
| antioxidant | General antioxidant wellbeing | Antioxidant (`antioxidant`) | S12 p1 Benefits |

Antioxidant appears in two categories for general antioxidant wellbeing only. Do not say it is proven to improve skin or vision. Do not frame DETOX as weight loss, a sleep aid, skin whitening or removal of named toxins.

## Q3 — Only on two routes

### Energy → cellular

“Which formulation would you prefer to explore?”

- **Standard formula** → R.R.R. (`rrr`).
- **Sustained-release formula** → R.R.R. Boost (`boost`).
- **No preference** → R.R.R. (`rrr`), a fixed editorial default.

S09 describes sustained release; S06 is the comparison formula. This is a formulation preference, not evidence that one works better. Do not promise all-day energy or publicly repeat “8–10 hours” without claim verification. Do not recommend both together. Use “standard” as navigation wording, not a verified regulatory formulation designation.

### Everyday resilience → immune

“Which type of formula would you prefer to explore?”

- **A botanical blend with bromelains and quercetin** → Bromelains & Quercetin (`bq`).
- **A bee-derived propolis formula** → Propolis (`propolis`).
- **No preference** → Bromelains & Quercetin (`bq`), a fixed editorial default.

This preference question does not establish that a product is free of allergens, animal ingredients or interactions. Avoid “gentle”, “safe”, “allergy-friendly”, “vegan” and claims that one is more effective. Explicit product warnings follow on the result.

## Coverage / overlap matrix

A dot means there is a specific route in that category, not that all the category's benefits apply to the product.

| Product | Energy & vitality | Weight & metabolic wellbeing | Everyday resilience | Skin, eyes & daily care |
|---|---|---|---|---|
| R.R.R. | Yes | — | — | — |
| R.R.R. Boost | Yes | — | — | — |
| Man Power | Yes | — | — | — |
| CoQ10 | Yes | — | — | — |
| AMPK Fatburst | — | Yes | — | — |
| Sugar Support | — | Yes | — | — |
| Stress Relief | — | — | Yes | — |
| Propolis | — | — | Yes | — |
| Bromelains & Quercetin | — | — | Yes | — |
| Antioxidant | — | — | Yes | Yes |
| DETOX | — | — | — | Yes |
| Vision+ | — | — | — | Yes |

All 12 are reachable in at most three questions. Only one product deliberately overlaps. Do not manufacture more overlap to make the diagram symmetrical. No sleep category: these sheets do not support a useful multi-product sleep branch; DETOX has no supplied sleep basis.

## Results and precautions

Results heading: **“A product to explore: [name]”**

1. Product image and name, connected to the actual Shopify product.
2. One narrow explanation: “You selected [specific interest]. Cellife's supplied product sheet describes [relevant support claim].” Never imply that quiz answers establish effectiveness or suitability.
3. Visible scope line: “Matched to your interests. Suitability has not been assessed.”
4. A visible **“Before you consider this product”** panel BEFORE the product-link button. Do not bury material exclusions in a tooltip, footer or collapsed section. The full label can be linked below.
5. **“Read product information”** button. No automatic add-to-cart, bundle, dose selection, safety tick or preselected subscription. Do not block browsing behind another question.

Shared proposed caution: “Read the current label and follow its directions. If you are pregnant or breastfeeding, take medicines or other supplements, have a medical condition or allergies, ask a pharmacist or healthcare professional before use.” Label this internally as proposed general guidance (P), not a warning quoted from all 12 sheets. Actual public wording needs review.

### Product-specific visible warning payload

Keep these source warnings separate from general proposed guidance. The evidence appendix contains the source paths and more detail. Public copy should be reconciled against the current approved label before release; do not silently remove unusual warnings.

| Product | Source-grounded warnings to surface |
|---|---|
| R.R.R. | Not recommended during pregnancy/lactation. Not recommended with reduced-calorie diet AND increased activity. Sheet warns of empty-stomach flushing/redness/itching; do not label every reaction harmless. |
| R.R.R. Boost | Pregnancy/planning/breastfeeding: consult doctor/pharmacist. Same combined diet/activity warning. Flushing warning; stop and consult if severe or persistent. |
| Man Power | Adults only; if symptoms persist, stop and consult. |
| CoQ10 | Sheet says not for asthma/allergy sufferers or children, and not recommended with combined reduced-calorie diet/increased activity. Contains fish oil. |
| AMPK Fatburst | Adults only; caution with combined reduced-calorie diet/increased activity. Take with food or within one hour; sufficient water. Contains oyster shell. Do not turn a caution into an invented absolute contraindication. |
| Sugar Support | General label/dose/diet warnings. No daily dose supplied in sheet. Contains barley; full allergen declaration unverified. |
| Stress Relief | General label/dose/diet warnings. No daily dose supplied in sheet. |
| Propolis | Not for asthma/allergy sufferers or children; not recommended with combined reduced-calorie diet/increased activity. Bee-derived. |
| Bromelains & Quercetin | Do not consume if allergic to pineapple. Contraindications listed: antibiotics, sedatives, anticoagulants. Andrographis allergic-reaction warning, including anaphylaxis: discontinue and seek immediate medical attention for severe reaction. Adult-only dose; reconcile inconsistent child-age warning. |
| Antioxidant | Not recommended during pregnancy/lactation, stated in Dosage section. |
| DETOX | Adults only; not recommended during pregnancy/lactation; persistent symptoms: stop and consult. |
| Vision+ | General label/dose/diet warnings. No daily dose supplied in sheet. Microalgal DHA does not verify capsule/excipient compatibility for vegans. |

Retain full applicable label warnings, storage instructions and seal precautions on the product detail page. A result is not a safety assessment: removing the intake questions means the engine cannot suppress a match for a user's undisclosed allergy, medication or pregnancy. Do not claim that it does. Do not suggest a replacement product when a displayed warning applies; direct the user to individual advice.

## Deterministic logic

Fixed mapping; no scoring, medical inference, AI-generated recommendations or commercial fallback.

- Validate Q1 against four category enums and Q2 against that category's options.
- Direct Q2 route → exactly one product.
- `energy/cellular` and `resilience/immune` → Q3; missing Q3 gives INCOMPLETE.
- Only render Q3 for those two branches. Stale Q3 on another branch is invalid; UI clears Q2/Q3 when upstream selection changes.
- Missing answer on a reached screen → INCOMPLETE. Unknown enum, cross-branch answer or contradictory payload → INVALID. Both return zero products.
- Every valid completed route → exactly one DISCOVERY_MATCH, plus rationale evidence IDs, source-warning IDs and scope disclaimer. It must never return SAFE_MATCH or a safety score.
- Missing product, product mapping, source rationale or required warning payload → DATA_HOLD; zero products and no generic substitute.
- Same input and data version → identical product and reason order.
- Do not apply v1's health-answer exclusions: those answers no longer exist. Keep explicit warnings in data and presentation instead. Do not treat silence as a negative health answer.
- Public release remains disabled until required product, claims and warning reviews are complete. Preview can demonstrate draft routes with a prominent DRAFT marker.

Stable category enums: `energy`, `metabolic`, `resilience`, `care`. Q2/Q3 codes are those in the tables, with Q3 codes `standard|sustained|noPreference` and `botanical|bee|noPreference` respectively.

## Replacement acceptance tests

These replace v1's 40 flow tests; source and warning integrity tests remain relevant. Tests listed here are specification cases, not a claim of executed website tests.

1. energy/daily_energy → coq10 (2 questions).
2. energy/endurance_libido → man (2).
3. energy/cellular/standard → rrr (3).
4. energy/cellular/sustained → boost (3).
5. energy/cellular/noPreference → rrr (3).
6. metabolic/body_fat → ampk (2).
7. metabolic/healthy_glucose → sugar (2).
8. resilience/immune/botanical → bq (3).
9. resilience/immune/bee → propolis (3).
10. resilience/immune/noPreference → bq (3).
11. resilience/stress → stress (2).
12. resilience/antioxidant → antioxidant (2).
13. care/skin_hair_nails → detox (2).
14. care/eyes → vision (2).
15. care/antioxidant → antioxidant (2).
16. Every complete route returns one product and visible product-specific warning payload.
17. Both antioxidant routes return the same general antioxidant rationale; neither promises eye/skin effects.
18. No path exceeds three questions; no extra health form or warning acknowledgement is added.
19. Unknown/invalid Q1, cross-branch Q2 and stale Q3 → INVALID, zero products (separate cases).
20. Missing Q2 or required Q3 → INCOMPLETE, zero products.
21. Changing Q1 clears Q2/Q3 and result; changing Q2 clears Q3 and result.
22. R.R.R./Boost are never returned together; no automatic stack or add-to-cart.
23. No health-screening claim is shown; all completed results say suitability was not assessed.
24. CoQ10/Propolis asthma warning, BQ medication/pineapple/andrographis warnings, and relevant pregnancy/diet warnings appear before CTA.
25. AMPK diet/activity wording remains a caution; it is not rewritten as an absolute ban.
26. Missing mapping, warning or evidence field → DATA_HOLD; no substituted product.
27. Unreviewed public build stays disabled; draft preview carries draft status.
28. Keyboard and screen-reader operation, mobile layout, visible progress (Step 1; Step 2; optional Step 3), restart and back navigation work.
29. Health answers are not collected or inferred; no user choices are stored in URLs, analytics, CRM or persistent browser storage by default.
30. “Under 20 seconds” absent unless actual usability testing supports it.

## Shopify implementation handoff

Build this v2 customer flow as the reusable **Cellife Product Finder** theme section proposed earlier. Inspect the actual theme first. Use a dedicated JSON page template if supported, plus theme-native Liquid rendering and scoped JavaScript/CSS. No separate app or backend is required for this fixed discovery flow unless the existing theme architecture requires a different approach.

- Use this document as the authoritative routing/UI brief. Attach v1 only as the evidence appendix; do not merge the old five-question flow into this one.
- Make category labels, introductory copy and visual settings editable. Keep route IDs, product warning obligations and result scope intact.
- Provide one Shopify product selector per stable product ID (12 total). Product links/images come from selected Shopify products, not fabricated handles. Missing selections fail closed.
- Store route tables separately from rendering code. Retain evidence labels F/C/W/P and reviewer status from v1.
- Build and test all 15 valid paths, validation states and warning presentation. Provide actual test results separately from this spec.
- Match the existing theme's typography, controls, spacing and responsive behaviour. Reproduce the reference's simple single-choice interaction pattern; use Cellife's own copy and branding.
- Keep answers in memory; no marketing capture, health profiling or tracking by default.
- Build locally or in an unpublished theme preview. Do not deploy, publish, edit live product copy or modify the live storefront.
