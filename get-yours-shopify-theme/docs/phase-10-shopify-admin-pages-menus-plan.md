# Phase 10 Shopify Admin Pages And Menus Plan

## Scope

This plan maps approved Markdown drafts to Shopify Admin pages and menus. It does not create pages, policies, menus, theme code, or custom routes.

## Create These Shopify Pages

| Page title | Handle | Draft source | Notes |
| --- | --- | --- | --- |
| Help | `help` | `docs/content-pages/help.md` | Primary support overview. |
| Customer Service | `customer-service` | `docs/content-pages/customer-service.md` | Add confirmed support email and hours. |
| Shipping Information | `shipping-information` | `docs/content-pages/shipping-information.md` | Keep delivery estimates and rate claims conditional until confirmed. |
| Returns & Refunds | `returns-and-refunds` | `docs/content-pages/returns-and-refunds.md` | Customer information only, not final legal policy. |
| Payment Information | `payment-information` | `docs/content-pages/payment-information.md` | Match active checkout providers only. |
| FAQ | `faq` | `docs/content-pages/faq.md` | Replace confirmation markers before publishing. |

Existing page to review:

| Page title | Handle | Draft source | Notes |
| --- | --- | --- | --- |
| Contact | `contact` | `docs/content-pages/contact-page-notes.md` | Retain the Dawn contact template and update the Admin page content/form recipient only. |

## Shopify Policies Versus Normal Pages

- Use Shopify policy settings for Privacy Policy, Terms of Service, Refund Policy and Shipping Policy once the final approved policy text exists.
- Normal pages can explain support processes in plain language, but should not replace legally reviewed policy content.
- Do not publish drafts containing `[CONFIRM BEFORE LAUNCH]` markers.
- Recheck the Terms of Service route after policy setup because the prior preview returned a 502.

## Menu Wiring Plan

### Main Menu

- Home -> `/`
- Shop All -> `/collections/all`
- Home Organisation -> `/collections/home-organisation`
- Office & Desk -> `/collections/office-desk-essentials`
- Kitchen & Storage -> `/collections/kitchen-storage`
- Travel -> `/collections/travel`
- Tech Accessories -> `/collections/tech-accessories`
- Help -> `/pages/help`

### Footer Shop

- Shop All -> `/collections/all`
- Featured Practical Finds -> `/collections/featured-practical-finds`
- New Arrivals -> `/collections/new-arrivals`
- Best Sellers -> `/collections/best-sellers`
- Home Organisation -> `/collections/home-organisation`
- Office & Desk Essentials -> `/collections/office-desk-essentials`

### Footer Support

- Help -> `/pages/help`
- Customer Service -> `/pages/customer-service`
- Shipping Information -> `/pages/shipping-information`
- Returns & Refunds -> `/pages/returns-and-refunds`
- Payment Information -> `/pages/payment-information`
- FAQ -> `/pages/faq`
- Contact -> `/pages/contact`

### Footer Legal

- Privacy Policy -> Shopify policy URL
- Terms of Service -> Shopify policy URL
- Refund Policy -> Shopify policy URL, once configured
- Shipping Policy -> Shopify policy URL, once configured

## Theme Editor Assignment

The existing Dawn footer supports separate menu assignment per link-list block. In **Online Store > Themes > Customize > Footer**:

1. Keep the Shop block assigned to the final Footer Shop menu.
2. Assign a dedicated Footer Support menu to the Support block.
3. Assign a dedicated Footer Legal menu to the Legal block.
4. Review policy links and payment icons after policies/payment providers are active.

The header uses `main-menu`. Do not use custom `/za/...` routes unless routing is approved separately.

## Approval Checklist

- [ ] Merchant reviewed each draft and removed all `[CONFIRM BEFORE LAUNCH]` markers.
- [ ] Legal/policy text reviewed by the appropriate business/legal adviser.
- [ ] Shipping wording matches active South Africa shipping settings.
- [ ] R500 free-shipping wording matches active shipping rates, or is removed/changed before launch.
- [ ] Payment content matches active providers at checkout.
- [ ] Support email, support hours and contact-form recipient are confirmed.
- [ ] Tax/VAT statements reviewed before publication.
- [ ] Pages created with the stated handles in Shopify Admin.
- [ ] Main, Footer Shop, Footer Support and Footer Legal menus configured.
- [ ] Footer checked on desktop and mobile.
- [ ] Help and Customer Service URLs no longer return 404.
- [ ] Policies and all linked pages reviewed in the unpublished development theme before publishing.

## Launch Blockers

- Any `[CONFIRM BEFORE LAUNCH]` item left unresolved in the customer-facing drafts.
- Missing Shopify policy setup and approved policy content.
- Missing support email, support hours, response-time wording, or contact-form recipient confirmation.
- PayFast not activated and tested in Shopify checkout.
- Shipping settings not aligned with the R500 free-shipping wording.
- Missing test order, failed/cancelled payment check, and refund test.

## Recommended Phase 11

After approval, create the Shopify Admin pages and menus, then run final storefront QA using the real page URLs.
