# Cellife homepage: first visual slice

The homepage now composes a Cellife hero, shopping pathways and Dawn's existing
featured collection. This is local theme code only; it has not been uploaded.

## Editing

In an authorized development theme's Customize screen, open Home page:

1. **Cellife photographic hero:** replace the marked placeholder using Desktop
   image; add Mobile image for a separate crop. Edit the eyebrow, heading,
   description and two links. Desktop photography occupies the right-hand panel;
   mobile photography sits below the copy so text contrast does not depend on art.
2. **Cellife shopping pathways:** replace each category image and edit its heading,
   description and destination. Reorder up to four cards. The section is limited
   to one homepage instance so its hero navigation anchor stays unique.
3. **Featured collection:** choose a curated collection and its display settings
   using Dawn's existing controls. Prices, images and availability come from real
   Shopify product data; no fake catalog entries were added.

The hero's second link scrolls to the pathways. It must be updated if that section
is removed. Empty button destinations omit the button rather than create dead links.
An absent desktop image falls back to the mobile image; absent imagery renders an
explicit placeholder. Final image alt text is managed in Shopify's image settings.

## Image brief

- Hero desktop: approximately 1800 × 1600px, product-focused still life with natural
  daylight and platinum/neutral surroundings with brand-blue cues. Product sits in the image panel;
  leave text out of the artwork. Target delivered desktop transfer ≤400KB.
- Hero mobile: approximately 900 × 900px, a tighter composition with readable
  packaging; target delivered transfer ≤250KB.
- Category images: 4:3, approximately 1200 × 900px, consistent lighting and product
  scale. Supplements, respiratory tests, drug/alcohol tests and women’s/urinary
  tests should be visually distinct without inventing packaging or credentials.
- Use real final packaging. Keep labels, ingredient details and regulatory marks
  accurate. Do not bake benefit claims or text into the image.

These are art-direction suggestions; Shopify generates responsive image sizes.

## Sources and boundaries

The current public homepage and category destinations were inspected through web
text retrieval on 22 October 2026. The four category links in the template match
those observed destinations, including the existing `respiratory-tests-copy`
handle for Drug & Alcohol Tests. That handle was preserved deliberately.
The heading “Science for better everyday health.” comes from the current homepage.
It remains subject to brand review; no new efficacy claims, ratings or testimonials
were added. No rendered current-site layout observations are claimed.

The Cellife CSS is scoped to these sections. Brand-book palette and typography
decisions are recorded in `docs/BRAND.md`. There is no added JavaScript, font
download, app, popup, subscription logic or checkout change. Images reserve their
space and the first hero receives eager/high-priority loading only in first position.

## Verification and remaining gates

Local JSON/embedded schema syntax validation passes (107 documents); whitespace
checks pass. Shopify CLI is unavailable locally, and package
access fails because the configured proxy is unreachable. A static layout browser
check was attempted with installed Playwright/Chromium, but Chromium exited before
rendering because sandbox socket operations were denied. Theme Check, actual
Liquid rendering, screenshot review, keyboard/screen-reader checks, Theme Editor
interaction and Lighthouse remain pending. This is an implementation ready for
development-theme verification, not a verified release-ready storefront.

Before release, compare the pinned local source against the official Dawn release,
confirm customer-account compatibility, and run Theme Check. In a development
preview check 390px and 1440px widths, 200% zoom, long headings, all images missing,
mobile-only image, both image crops, blank links, section reordering and image
replacements. Verify each category link, hero anchor, keyboard focus, collection
cards and unchanged cart behavior. Measure LCP/CLS with real final photography.
