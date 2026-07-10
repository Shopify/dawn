# Phase 11C Shopify Admin Page Creation Pack

## Scope

This is an execution pack for a future manual Shopify Admin session. It does not create pages, menus, policies, settings or theme changes. Use the Admin-ready Markdown copies as the customer-facing source; do not use the earlier drafts that contain confirmation markers.

## Final Page Creation Table

| Page title | Shopify handle | Source Markdown file | Recommended visibility | Menu placement | Notes |
| --- | --- | --- | --- | --- | --- |
| Help | `help` | `docs/admin-ready-pages/help.md` | Unpublished draft first | Main menu and Footer Support | Primary support overview. |
| Customer Service | `customer-service` | `docs/admin-ready-pages/customer-service.md` | Unpublished draft first | Footer Support | Use generic contact wording until support details are approved. |
| Shipping Information | `shipping-information` | `docs/admin-ready-pages/shipping-information.md` | Unpublished draft first | Footer Support | Keep checkout and R500 wording conditional. |
| Returns & Refunds | `returns-and-refunds` | `docs/admin-ready-pages/returns-and-refunds.md` | Unpublished draft first | Footer Support | Customer information only; it does not replace the final policy. |
| Payment Information | `payment-information` | `docs/admin-ready-pages/payment-information.md` | Unpublished draft first | Footer Support | Do not add provider names unless they are active and approved. |
| FAQ | `faq` | `docs/admin-ready-pages/faq.md` | Unpublished draft first | Footer Support | Review support-page links after the pages exist. |

In Shopify Admin, use the equivalent hidden or unpublished state available for a page. Do not make a page visible on the Online Store until its copy, linked destinations and launch conditions have been reviewed.

## Contact Page Update Plan

- Source: `docs/admin-ready-pages/contact-page-content.md`
- Existing page: `/pages/contact`
- Recommendation: update the existing Contact page carefully; do not create a second Contact page.
- Keep the existing contact form where Shopify and Dawn provide one.
- Before editing, copy the current page content for rollback reference.
- Paste only the approved supporting copy around the existing form. Keep the form fields and submission handling unchanged.

## Manual Shopify Admin Page Creation Steps

1. Sign in to Shopify Admin.
2. Go to **Online Store > Pages**.
3. Select **Add page**.
4. Enter the page title from the final page table.
5. Paste the approved Markdown content as formatted page content.
6. Set the page handle to the exact value in the final page table.
7. Keep the page unpublished or hidden from the Online Store until final approval.
8. Save the page.
9. Repeat for the remaining five new pages.
10. Update the existing Contact page only after its current content has been copied and reviewed.
11. Open each saved page URL in the unpublished development theme before making it visible.

## Main Menu Setup

Configure the existing `main-menu` in Shopify Admin with these destinations:

- Home -> `/`
- Shop All -> `/collections/all`
- Home Organisation -> `/collections/home-organisation`
- Office & Desk -> `/collections/office-desk-essentials`
- Kitchen & Storage -> `/collections/kitchen-storage`
- Travel -> `/collections/travel`
- Tech Accessories -> `/collections/tech-accessories`
- Help -> `/pages/help`

## Footer Shop Menu Setup

- Shop All -> `/collections/all`
- Featured Practical Finds -> `/collections/featured-practical-finds`
- New Arrivals -> `/collections/new-arrivals`
- Best Sellers -> `/collections/best-sellers`
- Home Organisation -> `/collections/home-organisation`
- Office & Desk Essentials -> `/collections/office-desk-essentials`

## Footer Support Menu Setup

- Help -> `/pages/help`
- Customer Service -> `/pages/customer-service`
- Shipping Information -> `/pages/shipping-information`
- Returns & Refunds -> `/pages/returns-and-refunds`
- Payment Information -> `/pages/payment-information`
- FAQ -> `/pages/faq`
- Contact -> `/pages/contact`

## Footer Legal Menu Setup

- Privacy Policy -> Shopify policy URL
- Terms of Service -> Shopify policy URL
- Refund Policy -> Shopify policy URL if configured
- Shipping Policy -> Shopify policy URL if configured

Create or update these menus in Shopify Admin, then assign them to the existing Dawn footer link-list blocks in Theme Editor. Do not add custom routes or modify footer theme code.

## Pre-Publication Blockers

- PayFast has not been fully activated and tested.
- Shipping rates have not been fully tested.
- The R500 free-shipping announcement must match the checkout shipping setup.
- The tax and VAT position must be confirmed.
- Support email and hours still need approval if they will be shown.
- Final legal and policy review is still required.
- A test order and refund cycle are still outstanding.

## Real URL QA After Page Creation

Open each URL in the unpublished development theme:

- `/pages/help`
- `/pages/customer-service`
- `/pages/shipping-information`
- `/pages/returns-and-refunds`
- `/pages/payment-information`
- `/pages/faq`
- `/pages/contact`

For each page, verify:

- The page loads without a 404.
- No placeholder text is visible.
- Internal page links work.
- Content is readable at 360px, 400px and 430px.
- Content remains readable at 1200px.
- Footer Support menu links work.
- The header Help link works.
- Footer Legal policy links work once their Shopify policies are configured.

## Recommended Next Action

Review and approve this pack and the Admin-ready copy. Then explicitly authorize a manual Shopify Admin session to create the six new pages as unpublished drafts, update the existing Contact page, and wire the approved menus. Complete real-URL QA and resolve the pre-publication blockers before making pages visible or publishing the theme.
