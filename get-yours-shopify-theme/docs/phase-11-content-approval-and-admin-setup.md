# Phase 11 Content Approval And Admin Setup

## Scope

This is a review and Admin-setup preparation report only. No Shopify Admin pages, menus, policies, settings, or theme files were changed.

## Publication Status

### Ready For Unpublished Admin Draft Creation

After merchant review, these drafts can be created in Shopify Admin as unpublished pages with the stated handles:

| Page | Handle | Source draft |
| --- | --- | --- |
| Help | `help` | `docs/content-pages/help.md` |
| Customer Service | `customer-service` | `docs/content-pages/customer-service.md` |
| Shipping Information | `shipping-information` | `docs/content-pages/shipping-information.md` |
| Returns & Refunds | `returns-and-refunds` | `docs/content-pages/returns-and-refunds.md` |
| Payment Information | `payment-information` | `docs/content-pages/payment-information.md` |
| FAQ | `faq` | `docs/content-pages/faq.md` |

The existing Contact page should retain its Dawn contact form. Use `docs/content-pages/contact-page-notes.md` only to guide its future content and configuration review.

### Live Publication Status

**NOT READY FOR LIVE ADMIN PUBLICATION**

Every support/information page still contains unresolved operational, policy, payment, shipping, or support-contact details. Do not publish a live page with a `[CONFIRM BEFORE LAUNCH]` marker still visible.

## Admin-Ready Copy Assessment

### Help

**NOT READY FOR LIVE ADMIN PUBLICATION**

Safe copy that can remain after review: the Get Yours introduction, product browsing guidance, order-placement steps, and generic Returns & Refunds guidance.

Remove or replace before live publication:

- Payment-method confirmation.
- Delivery estimate and tracking-process markers.
- Support email marker.
- Any support-page links until their destination pages exist.

### Customer Service

**NOT READY FOR LIVE ADMIN PUBLICATION**

Safe copy that can remain after review: the calm support introduction, the order details customers should provide, and the reminder not to send card/account details through support channels.

Remove or replace before live publication:

- Delivery estimate and return-rule markers.
- Support email and support hours placeholders.
- Any response-time claim until confirmed.

### Shipping Information

**NOT READY FOR LIVE ADMIN PUBLICATION**

Safe copy that can remain after review: South Africa launch focus, address-accuracy guidance, supplier-partner transparency, and the statement that shipping charges are shown at checkout.

Remove or replace before live publication:

- Shipping-rate marker.
- Free-shipping-over-R500 marker and related sentence if the offer is not enabled.
- Delivery estimate and tracking-process markers.
- Any language that could imply a confirmed fulfilment or delivery time.

### Returns & Refunds

**NOT READY FOR LIVE ADMIN PUBLICATION**

Safe copy that can remain after review: contact support first, do not send an item back before instructions, requested order details, and damaged/incorrect-item photo guidance.

Remove or replace before live publication:

- Damaged/incorrect-item reporting window marker.
- Change-of-mind return-rule marker.
- Refund-processing-time marker.
- Non-returnable-items marker.
- Any draft content that is not aligned with the final approved policy.

### Payment Information

**NOT READY FOR LIVE ADMIN PUBLICATION**

Safe copy that can remain after review: payments are completed through Shopify checkout and active providers, failed/cancelled-payment guidance, and the instruction not to send card/account details by email or contact form.

Remove or replace before live publication:

- Active payment-method marker.
- PayFast activation marker. Do not mention PayFast publicly unless it is active at checkout.
- PayPal status marker. Remove PayPal copy unless it is enabled.
- Refund-process marker and any wording not aligned with the final Returns & Refunds information and policy.

### FAQ

**NOT READY FOR LIVE ADMIN PUBLICATION**

Safe copy that can remain after review: Get Yours overview, South Africa-only launch focus, supplier-partner transparency, and why delivery time can vary.

Remove or replace before live publication:

- Shipping-rate, free-shipping, and delivery-estimate markers.
- Cancellation and return-rule markers.
- Active payment-method marker.
- Any answer that refers to a support page before that page is created.

### Contact Page

**NOT READY FOR LIVE ADMIN PUBLICATION** for new support details.

The current contact form can remain available as an existing store page. Before adding new supporting copy or links, confirm the support email, support hours, response-time wording, contact-form recipient, and destination support pages.

## Unresolved Confirmation Markers

The following items must be resolved or intentionally removed from live customer-facing copy:

| Confirmation item | Affected drafts | Required live action |
| --- | --- | --- |
| Active payment methods | Help, Payment Information, FAQ | Confirm actual checkout methods, then name only active methods or retain the generic checkout wording. |
| PayFast activation | Payment Information | Confirm PayFast is active before mentioning it publicly. |
| PayPal public status | Payment Information | Remove PayPal copy unless it is enabled. |
| Refund process | Payment Information | Align with the final approved Returns & Refunds information and policy. |
| Shipping rates | Shipping Information, FAQ | Set/test rates, then publish the matching wording. |
| Free shipping over R500 | Shipping Information, FAQ, Help | Enable the offer and matching rate, or remove the offer wording. |
| Delivery estimates | Help, Customer Service, Shipping Information, FAQ | Confirm operational estimates without overpromising. |
| Tracking process | Help, Shipping Information | Confirm who supplies tracking and how customers are notified. |
| Support email | Help, Customer Service, Contact notes | Confirm a monitored address and add it consistently. |
| Support hours and response-time wording | Customer Service, Contact notes | Confirm operational capacity before publishing. |
| Damaged/incorrect item reporting window | Returns & Refunds | Set an approved reporting rule with the final policy. |
| Change-of-mind return rules | Returns & Refunds, Customer Service, FAQ | Approve eligibility, instructions, costs, and exclusions. |
| Refund processing times | Returns & Refunds | Confirm a policy-aligned timeframe. |
| Non-returnable items | Returns & Refunds | Confirm category-specific exclusions. |
| Cancellation rules | FAQ | Confirm whether cancellation is possible at each fulfilment stage. |

## Final Menu Wiring Plan

### Main Menu

- Home -> `/`
- Shop All -> `/collections/all`
- Home Organisation -> `/collections/home-organisation`
- Office & Desk -> `/collections/office-desk-essentials`
- Kitchen & Storage -> `/collections/kitchen-storage`
- Travel -> `/collections/travel`
- Tech Accessories -> `/collections/tech-accessories`
- Help -> `/pages/help`

### Footer Shop Menu

- Shop All -> `/collections/all`
- Featured Practical Finds -> `/collections/featured-practical-finds`
- New Arrivals -> `/collections/new-arrivals`
- Best Sellers -> `/collections/best-sellers`
- Home Organisation -> `/collections/home-organisation`
- Office & Desk Essentials -> `/collections/office-desk-essentials`

### Footer Support Menu

- Help -> `/pages/help`
- Customer Service -> `/pages/customer-service`
- Shipping Information -> `/pages/shipping-information`
- Returns & Refunds -> `/pages/returns-and-refunds`
- Payment Information -> `/pages/payment-information`
- FAQ -> `/pages/faq`
- Contact -> `/pages/contact`

### Footer Legal Menu

- Privacy Policy -> Shopify policy URL
- Terms of Service -> Shopify policy URL
- Refund Policy -> Shopify policy URL, once configured
- Shipping Policy -> Shopify policy URL, once configured

In Theme Editor, assign distinct Footer Shop, Footer Support, and Footer Legal menus to the existing Dawn footer link-list blocks. Do not change routes or menus in theme code.

## Remaining Launch Blockers

- All unresolved confirmation markers listed above.
- Missing approved Shopify policy setup for Privacy, Terms, Refund, and Shipping policies.
- Missing support email, hours, response-time wording, and contact-form recipient confirmation.
- PayFast activation and payment/refund testing still outstanding.
- Shipping configuration and free-shipping-over-R500 alignment still outstanding.
- Help and Customer Service pages currently do not exist, so their routes return 404.
- No full test order, failed/cancelled payment test, or refund test has been completed.

## Recommended Next Action

Review and approve the Phase 10 content with the required operational and policy decisions resolved. Then explicitly authorize creation of the Shopify Admin pages and menus as unpublished drafts, followed by final storefront QA against the real page URLs.
