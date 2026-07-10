# Phase 12 Payments, Shipping And Launch Operations Checklist

## Scope

This is a documentation-only operational checklist for moving Get Yours from theme and content preparation into commerce readiness. It does not configure Shopify Admin, payment providers, shipping, tax, checkout, pages, menus, Contact, products, fulfilment, policies, or theme code.

Do not mark an item complete without checking the relevant Shopify Admin screen, provider dashboard, test order, or approved professional advice. Record evidence and decisions in the Notes column or the appropriate operating record.

## Current Launch State

- [x] Six support pages exist in Shopify Admin as unpublished drafts: Help, Customer Service, Shipping Information, Returns & Refunds, Payment Information, and FAQ.
- [x] The support pages remain unpublished.
- [x] Main and footer menus have not been wired to the support pages.
- [x] The existing Contact page has not been updated.
- [x] Phase 11F Option B remains active: keep pages unpublished and postpone menu wiring.
- [ ] The store is ready for public launch.

The store is **not ready for public launch** until the payment, shipping, announcement, tax/VAT, support, policy, and end-to-end test blockers in this checklist are resolved.

## Payment Setup Checklist

### PayFast Activation And Configuration

- [ ] Confirm the PayFast merchant account is verified and connected to the correct business and settlement account.
- [ ] Confirm PayFast is activated for the correct Shopify store.
- [ ] Review whether the current PayFast integration provides a test or sandbox mode and document the approved test method.
- [ ] Confirm the payment methods actually displayed at checkout. Do not infer them from draft content or marketing material.
- [ ] Confirm current fees, payout/settlement rules, failed-payment behaviour, cancellation handling, and refund procedure using the PayFast dashboard or current official documentation.
- [ ] Document the working-capital process for paying CJ before payment-provider funds reach the business account, if applicable.

### Payment QA

- [ ] Complete a successful checkout test.
- [ ] Complete a failed-payment test and confirm no paid order is created incorrectly.
- [ ] Complete a cancelled-payment test and confirm the resulting Shopify order/payment state.
- [ ] Complete an approved refund test through the intended operating workflow.
- [ ] Confirm the customer receives the expected Shopify order-confirmation email after a successful checkout.
- [ ] Review payment-method presentation and readability on mobile widths of 360px, 400px, and 430px.
- [ ] Review payment-method presentation and readability at 1200px desktop width.
- [ ] Record screenshots, order numbers, payment references, timestamps, and outcomes without storing card or account credentials.

PayPal remains optional and later-stage. Do not activate or mention PayPal publicly unless the merchant explicitly approves it and its payment, cancellation, refund, dispute, and notification flows are tested separately.

## Shipping Setup Checklist

### South Africa Shipping Configuration

- [ ] Confirm the Shopify shipping origin/location and manual dispatch process.
- [ ] Configure and verify a South Africa shipping zone.
- [ ] Configure the approved standard shipping rate.
- [ ] Configure free standard shipping over R500 only if margin review approves it and the Shopify rate is active.
- [ ] Confirm no unsupported international shipping zones or rates are available at launch.
- [ ] Confirm checkout does not offer a rate to an unsupported international address.

### Shipping QA

- [ ] Test a cart below R500 using a valid South African address and record the rate shown.
- [ ] Test a cart above R500 using a valid South African address and record the rate shown.
- [ ] Test representative addresses across more than one South African province.
- [ ] Confirm the displayed rate, order total, and threshold behaviour match the approved setup.
- [ ] Confirm Shipping Information, Help, FAQ, announcement, and checkout wording describe the same active shipping offer.
- [ ] Do not publish delivery estimates until fulfilment routes and service levels have been operationally confirmed.

## R500 Announcement Alignment

The current storefront announcement says `FREE STANDARD SHIPPING ON ORDERS OVER R500`.

Before launch, complete exactly one approved path:

- [ ] Configure, margin-check, and test a matching free standard shipping rate for qualifying South Africa orders over R500; or
- [ ] Change or remove the announcement before launch if the offer is not configured and sustainable.

An announcement promising free shipping while checkout charges shipping is a launch blocker. The announcement, checkout rate, support-page wording, and FAQ must remain aligned.

## Tax And VAT Checklist

- [ ] Confirm whether Get Yours is VAT registered.
- [ ] Confirm whether displayed product prices include or exclude VAT.
- [ ] Confirm whether and how Shopify should calculate or display tax at checkout.
- [ ] Complete a checkout test and record the tax presentation on product totals, shipping, and the final order total.
- [ ] Confirm invoice, receipt, credit-note, and refund wording and records.
- [ ] Confirm any customer-facing VAT or tax statement before publication.
- [ ] Review Shopify tax settings only after the correct treatment is confirmed.
- [ ] Record the adviser, date, and source supporting the final decision.

This section requires accountant and SARS-informed review before launch. It is an operational checklist, not tax advice.

## Support Operations Checklist

### Support Channels

- [ ] Confirm a monitored support email address.
- [ ] Confirm the Shopify Contact form sends to the intended monitored inbox.
- [ ] Test a Contact form submission and verify receipt without updating the public Contact page.
- [ ] Confirm support hours only if they will be published.
- [ ] Confirm response-time wording only if it will be published and operationally achievable.
- [ ] Confirm which team member or role owns the support inbox and backup coverage.

### Customer-Service Workflow

- [ ] Document order-status query handling.
- [ ] Document payment query and failed-payment handling.
- [ ] Document shipping and tracking query handling.
- [ ] Document damaged, incorrect, or incomplete item evidence and escalation handling.
- [ ] Document cancellation and change-of-mind request handling.
- [ ] Document approved refund handling and recordkeeping.
- [ ] Confirm staff never request card or account credentials by email, social media, or Contact form.
- [ ] Prepare approved response templates without promising unconfirmed delivery or refund timelines.

## Manual CJ Fulfilment Checklist

Complete these checks for every manually fulfilled CJ order:

- [ ] Match the Shopify product and variant SKU to the correct CJ supplier SKU.
- [ ] Confirm CJ stock or availability before supplier payment.
- [ ] Confirm current supplier item cost and shipping cost before supplier payment.
- [ ] Confirm the customer's delivery address and contact details.
- [ ] Confirm the Shopify payment status is paid before paying the supplier.
- [ ] Confirm the selected CJ shipping route is appropriate for the supported South Africa workflow.
- [ ] Pay the supplier only after the payment and order checks are complete.
- [ ] Record the CJ supplier order reference against the Shopify order.
- [ ] Record supplier cost, shipping cost, fulfilment status, and notes in the manual tracking record.
- [ ] Add tracking to Shopify when a valid tracking reference becomes available.
- [ ] Send the approved customer update when tracking becomes available.
- [ ] Escalate delays, cancellations, damaged items, and refunds under the approved policy and support workflow.

Do not describe CJ stock, dispatch, delivery, or tracking as guaranteed. Keep fulfilment manual until the process consistently produces accurate orders, tracking updates, and refund records.

## Test Order And Refund Cycle

Use a low-value test order, approved test payment method, South African test address, and no real customer credentials beyond what is required for the controlled test.

- [ ] Record the test date, tester, product, cart value, and expected shipping outcome.
- [ ] Place the low-value test order.
- [ ] Confirm the payment outcome in the payment provider and Shopify.
- [ ] Confirm Shopify order and payment statuses are correct.
- [ ] Confirm the order-confirmation email and any merchant notifications are received.
- [ ] Confirm the intended shipping rate or R500 threshold is applied correctly.
- [ ] Exercise the manual CJ review steps without creating an unintended supplier commitment.
- [ ] Cancel and/or refund the test order using the approved test path.
- [ ] Confirm the Shopify refund status and payment-provider refund status.
- [ ] Confirm customer-facing cancellation/refund notifications are accurate.
- [ ] Record discrepancies, owners, corrective action, and retest results before launch.
- [ ] Mark the end-to-end cycle complete only when all material issues have been resolved or formally accepted.

## Launch Blockers

| Blocker | Current status | Owner | Required resolution | Notes |
| --- | --- | --- | --- | --- |
| PayFast activation | Outstanding / not verified | Merchant / payments owner | Activate against the correct store and confirm the live or approved test configuration. | Do not name active methods publicly until checkout confirms them. |
| Successful, failed, and cancelled payment tests | Outstanding | Payments owner | Complete and document all three outcomes. | Retain order/payment references as evidence. |
| Refund test | Outstanding | Payments and support owners | Complete an approved refund and verify Shopify/provider states and notifications. | Do not promise a refund timeline from assumptions. |
| South Africa shipping zone and standard rate | Outstanding / not verified | Merchant / operations owner | Configure and test supported South Africa rates. | No international launch. |
| Free shipping over R500 | Decision and configuration outstanding | Merchant / finance owner | Validate margin, then configure/test the rate or remove the offer. | Must match the announcement and support copy. |
| R500 announcement alignment | Blocked by shipping decision | Merchant / storefront owner | Match the announcement to tested checkout behaviour. | Any mismatch blocks launch. |
| Tax and VAT treatment | Outstanding | Merchant with accountant/tax adviser | Confirm registration, pricing, checkout, invoice, and refund treatment. | Requires accountant/SARS-informed review. |
| Support email and Contact inbox | Outstanding / not verified | Customer-service owner | Confirm monitored inbox, form delivery, ownership, and backup coverage. | Contact-page copy remains unchanged. |
| Support hours and response wording | Decision outstanding | Customer-service owner | Approve only if accurate and sustainable, otherwise omit. | No unsupported response-time promise. |
| Customer-service procedures | Outstanding | Customer-service and operations owners | Approve workflows for order, payment, shipping, damaged item, cancellation, and refund queries. | Align with final policies. |
| Manual CJ workflow | Outstanding / untested end to end | Fulfilment owner | Verify SKU mapping, costs, payment gate, supplier reference, tracking, and updates. | No supplier guarantees. |
| Final legal and policy review | Outstanding | Merchant / legal adviser | Approve Privacy, Terms, Refund, and Shipping policies and linked customer copy. | Support pages do not replace policies. |
| Test order and refund cycle | Outstanding | Payments, operations, and support owners | Complete, document, resolve issues, and retest. | Required before public launch. |
| Support-page publication | Intentionally postponed | Merchant approval | Publish only after content and operational blockers are accepted. | All six pages remain drafts. |
| Menu wiring | Intentionally postponed | Merchant approval | Wire only after published page URLs and policies are verified. | Phase 11F Option B remains active. |
| Contact page update | Not approved | Merchant approval | Review and approve under a separate phase. | Do not combine with menu wiring. |

## Recommended Sequence

1. Activate and test PayFast, including successful, failed, cancelled, and refund outcomes.
2. Configure and test South Africa standard shipping and the approved R500 threshold behaviour.
3. Align or remove the R500 announcement based on the tested checkout setup.
4. Confirm tax and VAT treatment with accountant/SARS-informed review, then verify checkout and records.
5. Confirm support channels, ownership, customer-service procedures, and approved communication wording.
6. Verify the manual CJ fulfilment record and complete the end-to-end test order/refund cycle.
7. Review the six Admin page drafts against the confirmed operating setup.
8. Approve and publish the six support pages only.
9. Verify all six real storefront URLs and internal page links.
10. Separately approve and wire the Main, Footer Shop, Footer Support, and Footer Legal menus.
11. Update the existing Contact page only after separate approval and inbox verification.
12. Complete final password-protected storefront QA before any public launch decision.

## Recommended Next Approval

Keep Phase 11F Option B in effect. The next approval should authorize operational configuration and controlled testing of PayFast and South Africa shipping only. It should not authorize page publication, menu wiring, Contact changes, or theme changes.
