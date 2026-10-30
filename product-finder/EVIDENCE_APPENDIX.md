# Retained v1 evidence appendix

Source material from the supplied v1 brief follows. Its health questionnaire,
routing, exclusions and tests are not current and are not included here. The
original PDFs and current labels have not been verified in this implementation.

# Cellife product finder — design and implementation brief

Draft v1 · 30 October 2026 · UNPUBLISHED · 12 source sheets reviewed

## Purpose and evidence boundary

Help an adult choose a product to investigate for one wellbeing goal. This is a catalogue match, not a diagnosis, treatment plan, assessment of effectiveness, or assurance that a product is safe. Return one product at most, or a clear no-match / professional-review outcome. Do not recommend a supplement stack.

All product facts below come from the 12 supplied one-page PDFs. References such as [S03, p1, Warnings] point to the source register at the end. They establish what the supplier sheet says, not that the claim is clinically proven, currently authorised, or appropriate for an individual. No independent clinical, regulatory, interaction, or current-label verification was performed. The linked earlier chat exposes no readable detail of “option B”; this brief follows the current explicit request.

Use these evidence labels in the data:

- **F — sheet fact:** ingredient, formulation, dosage wording or identifier reported by the sheet. Still requires current-label verification.
- **C — unverified advertising claim:** benefits, mechanisms, traditional-use statements, superiority and duration claims reported by the sheet. No clinical evidence dossier was supplied.
- **W — explicit sheet warning:** reproduce faithfully in the internal record; absence of a warning is not evidence of safety.
- **P — proposed quiz safeguard:** conservative routing or exclusion designed here. It is not a contraindication established by the sheet and must never be presented as one.

All public copy is proposed copy requiring claims review. Do not display “TGA Approved,” imply an AUST L identifier proves efficacy, or convert ingredient mechanisms into proven product outcomes. Store the sheet's original wording internally with its source. Do not automatically publish even the milder benefit wording below.

## Product-to-goal matrix

Primary and secondary tags are design decisions based on the cited sheet claims. Only primary routes participate in v1 recommendations; secondary tags are editorial context, not fallback recommendations. Every benefit in this table is **C**, not independently verified evidence of efficacy.

| ID / source | Primary goal route | Secondary claims: not scored in v1 | Sheet-grounded basis and ingredient facts | Warnings / recommendation constraints |
|---|---|---|---|---|
| stress / S01, AUST L 399644 | Everyday stress support | Mood, sleep, energy mechanisms | Description says stress-response support; ingredient section discusses chamomile, ashwagandha and rhodiola. F: nicotinamide 8.4 mg, acetyl levocarnitine HCl 100 mg, tryptophan 130 mg/capsule; botanical amounts are dry-equivalent amounts. [p1, Description; Benefits of Ingredients; Active Ingredients] | W: follow dose guidelines; supplements do not replace balanced diet. Daily dose absent from this sheet. P: no anxiety/depression/insomnia treatment route; current label needed before dose information is shown. |
| propolis / S02, AUST L 316796 | Immune support, bee-derived preference | General wellbeing, oral health, antioxidant, glucose metabolism, cold/flu symptoms | Benefits explicitly lists immune support. F: propolis 500 mg/capsule, with 2500 mg equivalence wording. [p1, Benefits; Active Ingredients] | W: not for asthma/allergy sufferers; not for children; not recommended with reduced-calorie diet AND increased activity. Description's extract-equivalence wording needs reconciliation with label. P: no automatic glucose/cold/flu route. |
| man / S03, AUST L 520645 | Healthy libido / physical endurance | Energy, circulation | Benefits and Description name healthy libido and physical endurance; herbal formula described in traditional Chinese medicine terms. [p1, Description; Benefits] | W: adult use; persistent symptoms → stop and consult. P: no erectile dysfunction, testosterone, fertility, or cardiovascular treatment promise; do not infer suitability from gender. |
| sugar / S04, AUST L 400792 | Healthy blood-sugar support in otherwise healthy adults | Sugar cravings | Description names healthy blood-sugar support; ten-ingredient table includes alpha-lipoic acid 25 mg, chromium 0.0125 mg and zinc 5 mg/capsule; barley and multiple botanicals present. [p1, Description; Benefits of Ingredients; Active Ingredients] | W: general label/dose/diet warnings. Daily dose absent. P: diabetes, abnormal glucose, medicines or a request to treat disease → professional review; barley is an ingredient fact, not a verified gluten-free/allergen declaration. |
| bq / S05, AUST L 383218 | Immune support, botanical preference | Mild upper respiratory infection symptoms, digestion, antioxidant | Benefits names immune support; Active Ingredients table shows bromelains, quercetin, Nigella, andrographis and turmeric. [p1, Description; Benefits; Active Ingredients] | W: pineapple allergy exclusion; contraindications list antibiotics, sedatives, anticoagulants; andrographis allergy warning, including anaphylaxis and immediate medical attention. “Adults Only” dose conflicts with under-2 warning: v1 adult-only. P: no infection-treatment or automatic allergy remedy route. |
| rrr / S06, AUST L 521752 | Cellular metabolism support, standard preference | Antioxidant, tissue regeneration | Description names nicotinic acid and nicotinamide as NAD+ precursors. Benefits names metabolism and tissue regeneration. [p1, Description; Benefits] | W: not recommended pregnancy/lactation; not recommended with reduced calories AND increased activity; empty-stomach flushing/redness/itching described. P: do not repeat “harmless” as a blanket reassurance; no longevity / DNA-repair outcome promise. |
| coq10 / S07, AUST L 316798 | Energy support | Heart/blood health, antioxidant, immunity; blood-pressure, weight-loss and hair claims withheld | Benefits explicitly names energy support. F: CoQ10 150 mg, vitamin E amount 38.5 mg, natural fish oil 500 mg/capsule. [p1, Benefits; Active Ingredients] | W: not for asthma/allergy sufferers or children; not recommended with reduced calories AND increased activity. P: fish-derived ingredient blocks vegan preference; no hypertension, weight loss or heart-disease treatment route. Do not silently delete unusual warnings as presumed copy errors. |
| detox / S08, AUST L 322109 | Skin/hair/nail wellbeing | Antioxidant, natural detoxification, eye protection | Description names skin, hair and nails. F: glutathione 125 mg/tablet; grape-seed quantity is extract-equivalent dry seed in the ingredient table, not 45 g of actual extract. [p1, Description; Benefits; Active Ingredients] | W: adults only; not recommended pregnancy/lactation; persistent symptoms → stop and consult. P: withhold skin whitening, wrinkle removal, “toxin removal,” superiority and “leading market” promises. |
| boost / S09, AUST L 395833 | Cellular metabolism support, sustained-release preference | Antioxidant, tissue regeneration | Description calls formula sustained release; Benefits claims absorption over 8–10 hours. Contains nicotinic acid and nicotinamide. [p1, Description; Benefits] | W: pregnancy/planning/breastfeeding → doctor/pharmacist; not recommended with reduced calories AND increased activity; flushing warning includes stop/consult if severe or persistent. P: mutually exclusive with R.R.R.; no superiority or guaranteed all-day-energy claim. 8–10 hours remains unverified C. |
| vision / S10, AUST L 393078 | Eye wellbeing | Eye strain, dry eyes, light adaptation/night vision, antioxidant | Description names healthy eye function; table lists beta-carotene 1 mg, microalgal DHA 40 mg, Tagetes 10 mg and bilberry dry-fruit equivalent 3000 mg/capsule. [p1, Description; Active Ingredients] | W: general label/dose/diet warnings. Daily dose absent. P: sudden changes, pain or persistent symptoms → professional review; no disease-prevention route. Microalgal DHA does not establish vegan capsule/excipients. |
| ampk / S11, AUST L 322110 | Body-fat / weight-management interest | Metabolism, wellbeing, fibre | Benefits claims body-fat reduction in healthy individuals. F: table includes psyllium dry-herb equivalent 800 mg, oyster shell 10 mg, vitamin K2 60 mcg/tablet. [p1, Benefits; Active Ingredients] | W: adults only; take with food or within one hour, sufficient water; use caution with reduced calories AND increased activity. P: send that combination to professional review, rather than invent a ban; oyster shell blocks vegan preference; no guaranteed loss, timeline or AMPK-activation claim. |
| antioxidant / S12, AUST L 320772 | General antioxidant wellbeing | Healthy cell function | Benefits names free-radical damage and general wellbeing. F: ingredient table includes vitamin C 100 mg, acetyl levocarnitine HCl 125 mg, beta-carotene 1 mg, quercetin 8.4 mg/tablet plus botanicals. [p1, Benefits; Active Ingredients] | W: not recommended pregnancy/lactation, stated under Dosage; general label/diet warnings. P: do not turn the hourglass image into an anti-ageing or lifespan claim. |

**Shared W:** read label; observe dosage; keep away from children; do not use if seal is broken; storage instructions vary by product (25°C or 30°C). Do not replace these with one universal temperature. Vitamin/mineral diet caveat is present on many, not all, sheets. Keep product-specific warning records.

**Source-dose reference, not quiz instructions:** S02/S07: 1 capsule daily with meal; S03/S06/S08/S09: 1–3 tablets daily with food/meal; S05: 2 tablets twice daily; S11: 1 tablet with food or within an hour, 1–3 daily plus sufficient water; S12: 1 tablet once or twice daily with food. S01/S04/S10: daily dose not provided. Do not choose or optimise a dose in the quiz; use current label on the product detail page after verification.


## Source register

All 12 documents are one page. The source files were read only. Table locators refer to printed section headings; image-based ingredient tables were inspected visually. These are supplier documents, not independent clinical sources.

- **S01** — [Cellife Product Sheet - Stress Relief.pdf](</private/var/folders/vt/qlg0csh55yj5vscjrljnvyp80000gn/T/codex-file-preview-Hb3rAN/Cellife Product Sheet - Stress Relief.pdf>) · p1 · SHA-256 `dc6e8eacac6bd36490a9e638f377a27e1ca6ea623a1fe5d53fa8623a9c8a0784`

- **S02** — [Cellife Product Sheet - Propolis.pdf](</private/var/folders/vt/qlg0csh55yj5vscjrljnvyp80000gn/T/codex-file-preview-Uato2N/Cellife Product Sheet - Propolis.pdf>) · p1 · SHA-256 `09b3d6b791b3cfa3d86725ca34e9fcd81c7c9e2e5df7fa22848c4ec379cb9594`

- **S03** — [Cellife Product Sheet - Man Power (520645).pdf](</private/var/folders/vt/qlg0csh55yj5vscjrljnvyp80000gn/T/codex-file-preview-pieVK4/Cellife Product Sheet - Man Power (520645).pdf>) · p1 · SHA-256 `aef635d446fdc456b4ff9fc187fe15bc9c3279a67f3753cdea00e440241038eb`

- **S04** — [Cellife Product Sheet - Sugar Support.pdf](</private/var/folders/vt/qlg0csh55yj5vscjrljnvyp80000gn/T/codex-file-preview-Dg7B7C/Cellife Product Sheet - Sugar Support.pdf>) · p1 · SHA-256 `b1173ff3c8cd28fb34fe6fcabf04de6011cbe3ebfcb1d7192ce3a7987372529e`

- **S05** — [Cellife Product Sheet - Bromelains & Quercetin.pdf](</private/var/folders/vt/qlg0csh55yj5vscjrljnvyp80000gn/T/codex-file-preview-LMJ1N9/Cellife Product Sheet - Bromelains & Quercetin.pdf>) · p1 · SHA-256 `21e890581cb0609032957125c270e18b15d38029931100fca1a31fd44e02110e`

- **S06** — [Cellife Product Sheet - R.R.R. (521752).pdf](</private/var/folders/vt/qlg0csh55yj5vscjrljnvyp80000gn/T/codex-file-preview-5qkEJM/Cellife Product Sheet - R.R.R. (521752).pdf>) · p1 · SHA-256 `a1e02d8b0e8230a135779b5e9807215d53685efcc0dfc1c5f93b51c11fd849d2`

- **S07** — [Cellife Product Sheet - COQ10 (316798).pdf](</private/var/folders/vt/qlg0csh55yj5vscjrljnvyp80000gn/T/codex-file-preview-jmktj2/Cellife Product Sheet - COQ10 (316798).pdf>) · p1 · SHA-256 `94346ad41d76cef8e26e57b019b83351ec1ac2ffa58c3c20214c10fd9ed4ea71`

- **S08** — [Cellife Product Sheet - DETOX (322109).pdf](</private/var/folders/vt/qlg0csh55yj5vscjrljnvyp80000gn/T/codex-file-preview-iWMHKy/Cellife Product Sheet - DETOX (322109).pdf>) · p1 · SHA-256 `e2500231bf9033c2038d6753659edc96ca7fd05184e7763222c61de3ac82e568`

- **S09** — [Cellife Product Sheet - R.R.R. Boost (395833).pdf](</private/var/folders/vt/qlg0csh55yj5vscjrljnvyp80000gn/T/codex-file-preview-1VHOAa/Cellife Product Sheet - R.R.R. Boost (395833).pdf>) · p1 · SHA-256 `29ae99e23467f01eb4acc814fcc87eb4f1d9fbfe6ae3e8fee3e29036a6a221d3`

- **S10** — [Cellife Product Sheet - Vision+.pdf](</private/var/folders/vt/qlg0csh55yj5vscjrljnvyp80000gn/T/codex-file-preview-7FFZhg/Cellife Product Sheet - Vision+.pdf>) · p1 · SHA-256 `6acfa5292fc0c238708be174289024eae77112268a0e5be3be02d2def7b92195`

- **S11** — [Cellife Product Sheet - AMPK Fatburst.pdf](</Users/mills/Downloads/Cellife Supplement-2/Cellife Product Sheet - AMPK Fatburst.pdf>) · p1 · SHA-256 `9b0b401c944607f99d60f430ac66218df7a288e2b6bb93de6e62763717054c39`

- **S12** — [Cellife Product Sheet - Antioxidant.pdf](</Users/mills/Downloads/Cellife Supplement-2/Cellife Product Sheet - Antioxidant.pdf>) · p1 · SHA-256 `2be2647db05b2838428c88684a5c876de257cc1b8d3e34fac3869b692031c7bb`
