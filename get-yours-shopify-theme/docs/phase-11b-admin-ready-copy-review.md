# Phase 11b Admin-Ready Copy Review

## Scope

This documentation-only pass creates clean customer-facing source copy for future Shopify Admin pages. No Shopify Admin pages, menus, settings, policies, theme code, templates, products, collections or checkout settings were changed.

## Files Created

- `docs/admin-ready-pages/help.md`
- `docs/admin-ready-pages/customer-service.md`
- `docs/admin-ready-pages/shipping-information.md`
- `docs/admin-ready-pages/returns-and-refunds.md`
- `docs/admin-ready-pages/payment-information.md`
- `docs/admin-ready-pages/faq.md`
- `docs/admin-ready-pages/contact-page-content.md`

## Customer-Facing Placeholder Removal

The Admin-ready copies contain no `[CONFIRM BEFORE LAUNCH]` markers. The following unconfirmed details were removed from customer-facing page bodies:

- Support email address, support hours, WhatsApp number and response-time claims.
- Named payment providers, including PayFast and PayPal.
- Fixed shipping charges, delivery estimates and refund timeframes.
- Confirmed tracking-process claims, cancellation rules, change-of-mind eligibility and non-returnable-item lists.
- Any promise of local stock, supplier stock, dispatch timing or guaranteed delivery.

The copy instead states that available payment methods, shipping options and charges are shown at checkout. It keeps conditional R500 wording: where enabled, free standard shipping may apply to qualifying orders over R500.

## Unresolved Operational Decisions

The following decisions remain outside the customer-facing body and must be completed before launch:

- Activate and test PayFast, then verify that the payment methods displayed at checkout are correct.
- Configure and test South Africa shipping rates.
- Align the R500 free-shipping announcement with the actual shipping configuration, or remove the offer wording.
- Confirm tax and VAT treatment and any customer-facing tax statements.
- Confirm a monitored support inbox, support hours and the contact-form recipient.
- Approve final legal and policy content, including Privacy, Terms, Refund and Shipping policies.
- Confirm cancellation, damaged/incorrect-item reporting, change-of-mind, refund and non-returnable-item rules for the final policy.
- Complete an end-to-end test order, failed or cancelled payment review, fulfilment communication check and approved refund cycle.

## Shopify Admin Draft Status

All seven files are safe sources for **unpublished Shopify Admin draft creation** after merchant review.

| Page | Handle | Draft status | Live publication status |
| --- | --- | --- | --- |
| Help | `help` | Ready for unpublished draft | Hold until linked support pages and launch operations are reviewed. |
| Customer Service | `customer-service` | Ready for unpublished draft | Hold until the support inbox and contact-form recipient are operating. |
| Shipping Information | `shipping-information` | Ready for unpublished draft | Hold until shipping rates and R500 offer wording are aligned. |
| Returns & Refunds | `returns-and-refunds` | Ready for unpublished draft | Hold until the final policy is approved. |
| Payment Information | `payment-information` | Ready for unpublished draft | Hold until checkout payment methods are active and tested. |
| FAQ | `faq` | Ready for unpublished draft | Hold until delivery, returns and payment operations have been reviewed. |
| Contact | `contact` | Ready as content for the existing Dawn contact page | Hold until the form recipient is monitored and support operations are ready. |

The marker-free wording prevents unresolved details from being exposed, but it does not replace the operational and legal approvals required for live publication.

## Menu Wiring After Admin Page Creation

After the pages exist with the listed handles, create or update the menus in Shopify Admin:

- Add Help to the Main menu: `/pages/help`.
- Assign Help, Customer Service, Shipping Information, Returns & Refunds, Payment Information, FAQ and Contact to the Footer Support menu.
- Keep collection links in the Footer Shop menu.
- Keep Privacy Policy, Terms of Service, Refund Policy and Shipping Policy in the Footer Legal menu only after the Shopify policies are configured.

Use the existing Dawn header and footer menu settings. Do not add custom routes or change theme code for this wiring.

## Remaining Launch Blockers

- PayFast activation and checkout testing.
- Shipping rate setup and testing.
- R500 announcement wording aligned with actual shipping setup.
- Tax and VAT confirmation.
- Support email, hours and contact-form recipient confirmation.
- Final legal and policy review.
- Test order and refund cycle.
- Shopify Admin page creation and menu wiring still to be completed.

## Recommended Next Action

Review and approve these Admin-ready drafts, then explicitly authorize creation of the Shopify Admin pages as unpublished drafts. Wire the approved menus only after the pages and Shopify policy URLs exist, then complete real-URL storefront QA before publication.
