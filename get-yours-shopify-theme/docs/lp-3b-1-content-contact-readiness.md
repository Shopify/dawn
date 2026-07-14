# LP-3B.1 Content Alignment And Contact Readiness

## Scope

LP-3B.1 updates repository-held support-page drafts only. It does not publish pages, submit a contact form, alter Shopify Admin, change policies, wire menus or change the live store.

## Support-Page Copy Alignment

| Area | Customer-facing approved wording | Files aligned | Remaining dependency |
| --- | --- | --- | --- |
| Free Standard shipping | `Free Standard shipping applies to qualifying orders of R770 or more.` | Admin-ready Help, Shipping Information and FAQ; internal Help, Shipping Information and FAQ drafts | Controlled checkout verification at the configured threshold. |
| Delivery timing | `Delivery timing depends on the product, destination and available shipping route.` | Admin-ready Help, Shipping Information and FAQ; internal Help, Shipping Information, FAQ and Customer Service drafts | Per-SKU CJ route and fulfilment evidence. |
| Payment methods | `Only the methods shown for your order are available.` | Admin-ready Payment Information and Help; internal Payment Information draft | Final merchant payment-method decision before publication. |
| Payment provider wording | Shopify checkout and the provider selected at checkout, without named providers | Admin-ready and internal Payment Information drafts | PayFast live activation, PayPal decision and Test Gateway removal are outside this phase. |

The customer-facing copies do not name PayFast, PayPal, Payflex, Mobicred, Visa, Mastercard, Instant EFT or Zapper. This avoids publication of a provider promise while the store is still in test mode and the final customer-facing payment configuration is pending.

Historical Phase 12 and earlier operating documents may retain the superseded R500 decision and related test evidence. Treat those references as **historical value — superseded by the approved R770 starter-launch threshold**. They are not current customer policy.

## Internal Payment Status Register

| Item | Current internal state | Customer-facing treatment | Decision required before publication |
| --- | --- | --- | --- |
| PayFast | Active in test mode; no live launch authorized | Do not name it in support pages yet | Confirm live activation and final launch method set. |
| Visa / Mastercard / Instant EFT / Zapper | Intended PayFast launch methods | Refer customers only to methods shown at checkout | Confirm actual live checkout presentation. |
| Payflex | Held pending fee and margin review | Do not mention | Merchant payment decision. |
| Mobicred | Disabled | Do not mention | None unless intentionally enabled later. |
| PayPal | Active separately; final inclusion pending | Do not name it in support pages | Merchant retain/remove decision and final presentation review. |
| Shopify Test Payment Gateway | Remains in use for testing | Never mention to customers | Remove or retain only through a separately approved launch-control decision. |

## Contact Recipient, Ownership And Controlled-Test Decision Register

| Decision | Required state before Contact is launch-ready | Owner | Evidence required | Status |
| --- | --- | --- | --- | --- |
| Recipient mailbox | Confirm the exact monitored destination for Shopify contact-form messages. Do not record the address here until it is approved for public use. | Merchant / support owner | Admin confirmation and mailbox access check | Pending merchant decision |
| Public support email | Confirm whether a separate support email will be published and, if so, approve its exact public wording. | Merchant / support owner | Written approval and monitored-inbox check | Pending merchant decision |
| Primary owner | Name one person or role responsible for first response and triage. | Merchant | Written owner assignment | Pending |
| Backup/escalation owner | Name a backup for absence, payment, returns and supplier escalations. | Merchant | Written escalation route | Pending |
| Monitoring cadence | Define business-day monitoring frequency and coverage. | Support owner | Operating note | Pending |
| Customer acknowledgement | Use only wording that Shopify can actually send and that the support process can meet. | Support owner | Approved copy and observed test result | Pending |
| Response wording | Define a realistic response target only after support coverage is confirmed; do not promise a response time before then. | Support owner | Approved customer copy | Pending |
| Privacy wording | Add approved customer safety wording and an appropriate Privacy Policy link when Contact content is separately approved. | Merchant / legal | Legal/content approval | Pending |
| Spam handling | Confirm Shopify spam protection, mailbox filtering and review process. | Support owner | Controlled test plan | Pending |
| Escalation process | Define the handoff for payment, delivery, damaged-item, return/refund and supplier issues. | Merchant / support owner | Written escalation route | Pending |
| Controlled form test | Submit one synthetic test only after separate approval; confirm recipient, acknowledgement, spam behaviour and escalation handoff. | Support owner | Sanitized test evidence | Not authorized |

## LP-3B.2 Handoff

The expanded returns, cancellation, shipping, payment, Customer Service, Contact, tax and legal decision package is in `docs/lp-3b-2-support-page-publication-matrix.md`. It does not close the recipient, owner, acknowledgement, privacy, spam or controlled-test decisions in this register.

## LP-3B.3 Operational Handoff

`docs/lp-3b-3-merchant-operational-decisions.md` recommends an internal solo-founder support model and case-handling procedures. It does not assign an actual recipient, owner or public response promise, and it does not authorize a Contact-form submission.

## Publication Gate

The support pages remain unpublished. They are not ready for customer-visible menus until the remaining shipping, payment, legal and support-operation decisions are resolved and each page is separately approved for publication.

## No-Change Confirmation

LP-3B.1 changed local documentation only. No Shopify Admin setting, page publication, menu, policy, Contact form, payment setting, shipping rate, order, refund, fulfilment, CJ order or live storefront state changed.
