# Phase 9 Payments, Shipping, Tax And Operations

## Decisions Confirmed

- Launch payment priority: PayFast first.
- Launch market: South Africa only.
- Launch shipping: flat standard shipping.
- Free shipping over R500: enable only after margin validation confirms it is sustainable.
- Fulfilment: manual CJ Dropshipping workflow first.
- No international launch, CJ API integration, custom automation, or paid operational apps at this stage.
- PayPal is verified but should remain a later activation decision until PayFast and the manual operating flow are proven.

## Scope

This is a documentation-only operational runbook. No theme code, Shopify Admin settings, checkout configuration, payment gateway, shipping rate, tax, market, policy, or supplier setting was changed.

## PayFast Launch Readiness

### Activate And Verify

- [ ] Confirm the PayFast account is verified and linked to the correct legal business and settlement bank account.
- [ ] Activate PayFast as the Shopify payment provider using the current PayFast/Shopify setup instructions.
- [ ] Confirm which payment methods will appear at checkout and whether test/sandbox mode is available for the chosen integration.
- [ ] Confirm current PayFast fees, settlement/payout timing, minimum payout rules, failed-payment behavior, cancellation handling, and refund procedure in the PayFast merchant dashboard or current official PayFast documentation.
- [ ] Verify the checkout displays PayFast correctly on desktop and mobile.
- [ ] Run successful, failed, and cancelled test payments before launch.
- [ ] Run and document a refund test before accepting live customer orders.

Do not infer payout timing from another merchant's experience. The PayFast dashboard and official merchant documentation are the source of truth.

## PayPal Position

- [ ] Confirm the verified PayPal account is a business account and has an approved withdrawal path.
- [ ] Confirm current PayPal fees, payout timing, currency conversion, refund, dispute, and chargeback rules in the PayPal dashboard/documentation.
- [ ] Decide after PayFast testing whether PayPal adds enough customer value to justify its operational complexity.
- [ ] If enabled later, test successful payment, cancellation, refund, and customer order notifications separately.

Recommended starter position: do not activate or advertise PayPal until PayFast, shipping, refunds, and manual CJ fulfilment have been tested end to end.

## First-Orders Cash Flow

Customer payment and supplier funding are separate events:

1. A customer pays Get Yours through Shopify using PayFast.
2. The payment provider processes the charge and releases funds according to its payout schedule.
3. CJ Dropshipping normally requires payment before it fulfils the supplier order.
4. The supplier may need to be paid before the gateway payout arrives in the business bank account.

This creates a working-capital risk. A customer can pay today while CJ needs payment today and the gateway payout arrives later. Without an operating float, fulfilment can be delayed.

Starter rules:

- Keep early products low-cost and avoid expensive upfront fulfilment.
- Build a small fulfilment float as soon as cash flow permits.
- Confirm actual stock, supplier cost, shipping method, and address before paying CJ.
- Do not promise same-day or next-day fulfilment.
- Keep the launch South Africa-only until the domestic workflow is reliable.

## Manual CJ Dropshipping Workflow

1. Customer places an order in Shopify.
2. Confirm Shopify payment status is paid.
3. Confirm the product SKU and CJ supplier mapping.
4. Confirm the customer shipping address and contact details.
5. Confirm CJ availability, supplier cost, and available shipping method.
6. Pay the CJ order manually.
7. Save the CJ order reference against the Shopify order.
8. Add tracking when CJ provides it.
9. Send the approved customer update.
10. Handle delays, cancellations, and refunds under the approved policy.

### Starter Tracking Spreadsheet

Use one row per Shopify order with these columns:

- Shopify order number
- Customer name
- Product
- Shopify payment status
- Supplier SKU
- CJ order number
- Supplier cost
- Shipping cost
- Payment gateway used
- Gateway payout status
- Fulfilment status
- Tracking number
- Customer update sent
- Notes

Do not automate this workflow until the manual process produces accurate orders, tracking updates, and refund handling consistently.

## South Africa Shipping Setup

### Shopify Admin Checklist

- [ ] Confirm the shipping origin/location and dispatch process.
- [ ] Create a South Africa shipping zone only.
- [ ] Do not enable international zones or rates at launch.
- [ ] Configure one clear flat standard shipping rate below R500.
- [ ] Decide whether free standard shipping above R500 is profitable after reviewing average order value, CJ product cost, CJ shipping cost, gateway fees, refunds, and packaging/operational costs.
- [ ] Test rates below R500 and above R500 using addresses across several South African provinces.
- [ ] Confirm no international address accidentally receives a rate.
- [ ] Publish delivery estimates only when actual CJ routes and service levels are operationally confirmed.

### Critical Alignment Gate

The current theme announcement says `FREE STANDARD SHIPPING ON ORDERS OVER R500`. Do one of the following before launch:

1. Enable a matching free-shipping rate after margin validation; or
2. Change the announcement before launch so it does not promise an unavailable benefit.

Do not launch with the announcement and checkout shipping settings out of alignment.

## Tax And VAT Readiness

- [ ] Confirm whether Get Yours is VAT registered.
- [ ] Confirm whether product prices include VAT and whether tax should be charged at checkout.
- [ ] Confirm invoice/receipt requirements and refund tax handling.
- [ ] Review Shopify manual tax settings only after confirming the correct treatment.
- [ ] Obtain accountant and SARS guidance before launch where required.

This runbook does not provide tax advice and does not configure tax automatically.

## Customer Content And Communication Checklist

Before launch, prepare and approve content for:

- [ ] Shipping Policy
- [ ] Returns/Refund Policy
- [ ] Help page
- [ ] Customer Service page
- [ ] Contact page and support inbox recipient
- [ ] Payment information
- [ ] Order tracking guidance
- [ ] Careful, legally reviewed dropshipping delivery disclosure

Operational communication sequence:

- Shopify order confirmation after successful payment.
- Manual confirmation only after CJ order payment/availability is checked.
- Tracking update once a valid tracking reference is available.
- Delay/cancellation/refund updates using approved policy wording.

Do not invent delivery dates, stock guarantees, refund eligibility, or support commitments before policy and operations are approved.

## Test-Order Plan

Keep password protection enabled and use test products, low-value transactions, and no real customer data.

- [ ] PayFast successful payment.
- [ ] PayFast failed payment.
- [ ] PayFast cancelled payment.
- [ ] PayPal successful payment only if PayPal is activated.
- [ ] Shopify order confirmation email.
- [ ] Customer address capture.
- [ ] Flat shipping below R500.
- [ ] Free shipping above R500 only if enabled.
- [ ] Order cancellation.
- [ ] Refund.
- [ ] Manual CJ order reference and tracking-note workflow.
- [ ] Customer tracking/fulfilment notification.
- [ ] Abandoned checkout behavior, if available on the Shopify plan.

## Launch Gates

- [ ] PayFast activation and tests complete.
- [ ] Payout timing, fees, and working-capital process understood.
- [ ] South Africa shipping rates tested.
- [ ] R500 announcement matches checkout shipping behavior.
- [ ] Tax/VAT position confirmed.
- [ ] Shipping, refund, privacy, terms, payment, and support content approved.
- [ ] Help and Customer Service pages created.
- [ ] Footer Support and Legal menus configured.
- [ ] Domain, SSL, sender email, and password-protection process verified.
- [ ] One end-to-end test order completed.
- [ ] Cancellation and refund workflow tested.
- [ ] Customer notifications reviewed.
- [ ] Theme remains unpublished until final approval.

## Current Launch Blockers

- PayFast still needs Shopify activation and test-order validation.
- Shipping rate and free-shipping margin decision are not yet configured/tested.
- The R500 announcement must be reconciled with the final shipping setup.
- Tax/VAT treatment needs confirmation.
- Help, Customer Service, shipping, returns, payment, and final policy content need Admin setup/approval.
- Footer Support and Legal menus need separate, approved destinations.
- CJ SKU mappings, availability checks, and manual supplier-funding process need testing.
- A full payment-to-refund test cycle is outstanding.

## Recommended Phase 10

Create approved Help, Customer Service, Shipping, Returns, Payment, and FAQ page content, then create the corresponding Shopify Admin pages and wire the final header/footer menus. Continue using manual CJ fulfilment until the operational workflow is proven.
