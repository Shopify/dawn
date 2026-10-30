# Focused supplement homepage

This revision supersedes the longer homepage in EDITORIAL_OVERHAUL.md. Active
sequence: photographic hero → four products → four approach tiles → moving
testimonial rail → photographic Shop/Quiz banner → first-order email offer → footer.
The hidden first-visit chooser stays enabled. Extra editorial sections are retained
disabled, not deleted; the prior composition is snapshot in
`docs/snapshots/homepage-before-focused-sequence.json`.

## Hero and quiz banner

Both show **Shop Now** and **Take The Quiz**. Shop goes to the existing supplements
collection. Set **Theme settings → Cellife shopping journeys → Quiz destination**
once the real quiz page or app is ready. Until then, both quiz links go to the
banner's clearly marked quiz-setup placeholder. No working quiz or recommendation
logic is implied. The banner has its own editable full-width image and copy.

## Four product cards

The product shelf selects four products from the existing supplements collection.
Reorder that collection to curate the four. Tag a Shopify product **BESTSELLER**
or **NEW** to show its notification badge; the comparison is case-insensitive.
If both are present, BESTSELLER takes precedence. Untagged products get no badge.
Tag names can be changed in the product shelf's section settings. The theme does
not assign tags, invent a sales ranking, change prices or create products.

## Approach tiles

The four editable placeholders cover origin/manufacture, ingredient choices,
formulation and supporting information. Replace the wording and media, then clear
the draft checkboxes. No assertion of Australian manufacture, research endorsement
or ingredient superiority is made by these draft slots.

## Testimonials: text, image or video

In **Cellife community stories**, add the real quote and attribution, optional
portrait/poster or Shopify-hosted video, and transcript. Approve content/consent
after reviewing it. Approved text-only stories render as quote cards without an
empty video frame. Unapproved stories remain explicit placeholders.

Automatic leftward movement is optional and speed-adjustable. Pause/Resume is
visible; hover, keyboard focus inside the stories, touch/wheel interaction and
video playback stop movement. Reduced-motion visitors and the Theme Editor start
paused. Offscreen/background rails do not move. Original cards are recycled;
video players, IDs and accessible content are never cloned. Fewer cards show fewer
at once so the rail can loop; one card remains static. Without JavaScript it is
an ordinary horizontal scroll area. Review-app blocks disable automatic cycling.

## 10% first-order email offer

The panel and native Shopify customer/newsletter form are implemented. It is
explicitly **not active** and does not accept signups until both a configured
discount code and the readiness checkbox are set in **Footer → Cellife first-order
offer**. This avoids collecting an email in exchange for an unconfigured reward.

To activate later:

1. Create the real 10% discount in Shopify. Define eligible first-order customers,
   exclusions, expiration and combinations using Shopify configuration or an
   established discount app. A public code or one-use limit alone does not enforce
   first-order eligibility. Test returning customers and guest checkout.
2. Enter that configured code in the section, review the signup/eligibility wording
   and privacy policy, and enable **Shopify discount configured and tested**.
3. Verify successful and invalid-email submissions in an authorized development
   store, then eligible and ineligible checkout cases. The code is displayed only
   after Shopify reports successful signup; discount validation stays in Shopify.

No discount, customer segment or app configuration was created from theme code.
There is no fabricated sample coupon, client-side eligibility decision, or new
subscription/billing logic. The older generic newsletter is retained disabled so
there is one signup panel in the requested position.

## Checks

Shopify Theme Check: zero errors, nine inherited warnings. JSON/schema syntax:
124 documents. Local Liquid/Chromium checks at 320px, 390px and 1440px cover the
requested sequence, hero and quiz links, four-product setting, merchant tag badge
states, unconfigured/configured/signup-success offer states, original popup,
rail motion, pause/resume, focus/playback pause, loop recycling and reduced motion.
Actual discount eligibility and email delivery remain Shopify configuration tests.
