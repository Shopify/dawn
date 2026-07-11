# Phase 12B PayFast And Shipping Controlled Setup Report

## Scope And Outcome

Phase 12B attempted a controlled inspection of PayFast, Shopify payment presentation, and South Africa shipping configuration on 2026-07-10 at approximately 19:36 SAST.

The inspection could not reach the authenticated Shopify Admin or PayFast configuration surfaces. The Shopify Admin browser session presented the Shopify login page, the Shopify CLI shipping-scope authorization was not completed, and the public storefront redirected to its password page. No configuration or transaction was attempted after those control gates.

Current outcome: **authentication required before controlled setup and testing can continue**.

No sensitive credentials, payment details, customer credentials, API keys, passwords, or provider secrets were requested, entered, captured, or stored.

## Part 1: PayFast Setup And Testing

| Check | Status | Evidence / notes |
| --- | --- | --- |
| PayFast active or inactive for the correct Shopify store | Not verified | Shopify Admin payment settings required login. No payment-provider mutation or configuration action was run. |
| Connected to the correct verified merchant account | Not verified | Requires authenticated Shopify Admin and PayFast dashboard comparison. No merchant identifiers or banking details were inspected. |
| Test or sandbox mode available | Not verified | Requires authenticated provider configuration or current PayFast dashboard documentation for this merchant integration. |
| Payment methods displayed at Shopify checkout | Not verified | Storefront redirected to the password page before a product or checkout could be accessed. |
| Successful payment test | Not completed | No test mode was confirmed. No real live payment was authorized. |
| Failed-payment test | Not completed | Requires an approved test/sandbox method or controlled test procedure. |
| Cancelled-payment test | Not completed | Requires an approved test/sandbox method or controlled test procedure. |
| Refund test | Not completed | Requires a completed approved test order and authenticated Shopify/PayFast workflow. |

### Payment Evidence Record

- Inspection date/time: 2026-07-10, approximately 19:36 SAST.
- Test order number: None created.
- Payment reference: None created.
- Shopify payment state: Not applicable; no order or transaction was created.
- PayFast/payment-provider state: Not verified.
- Screenshot/note status: Login and password gates observed; no sensitive screenshot or credential was captured.

### PayFast Control Point

Do not run a live transaction until the merchant explicitly confirms:

- The exact low-value test amount.
- The payment method to use.
- That a live charge is acceptable.
- The test customer details to use.
- The cancellation/refund path to follow after payment.

Preferred next outcome: confirm and use PayFast test/sandbox mode. If sandbox testing is unavailable, record `Low-value live test needed; merchant approval required` and obtain the exact approval above.

PayPal remains inactive and outside this phase.

## Part 2: South Africa Shipping Setup And Testing

### Configuration Inspection

| Check | Status | Evidence / notes |
| --- | --- | --- |
| Active shipping origin/location | Not verified | A validated read-only Admin GraphQL query was prepared, but Shopify denied location access because the required scope authorization was not completed. |
| South Africa shipping zone | Not verified | Authenticated Shopify Admin or approved shipping-scope access is required. |
| Standard shipping rate | Not verified | No rate value was supplied or created. |
| Free standard shipping over R500 | Not verified | No configuration change was made. Margin approval and authenticated inspection remain required. |
| Unsupported international zones/rates | Not verified | Authenticated delivery-profile access is required. |

### Checkout Rate Tests

No checkout shipping-rate tests were completed.

- Cart below R500: Not tested.
- Cart above R500: Not tested.
- First South African province address: Not tested.
- Second South African province address: Not tested.
- Unsupported international address: Not tested.

Reason: the customer storefront redirected to `https://getyours.online/password`, so product, cart, and checkout could not be reached without the storefront password or an authenticated preview path. No test address, email, or customer data was submitted.

Before configuring a missing standard rate, the merchant must approve the exact rate amount and name. Before configuring free shipping over R500, the merchant must confirm the margin decision.

## Part 3: R500 Announcement Alignment

Current storefront announcement supplied for this phase:

`FREE STANDARD SHIPPING ON ORDERS OVER R500`

Classification: **Decision pending**.

Checkout behaviour could not be observed, and free-shipping configuration could not be verified. Treat alignment as a launch blocker until one of these paths is completed:

1. Confirm margin approval, configure free standard shipping over R500, and test below/above-threshold checkout behaviour; or
2. Remove or change the announcement before launch if the matching rate will not be offered.

The announcement and theme were not changed in this phase.

## Part 4: Launch Blocker Update

| Area | Status | Evidence | Remaining blocker | Recommended next action |
| --- | --- | --- | --- | --- |
| PayFast activation | Unverified | Shopify Admin payment settings required login. | Provider state and merchant-account link unknown. | Merchant signs in to Shopify Admin and PayFast; perform read-only comparison first. |
| Successful payment test | Not completed | No order or payment reference created. | Test mode and approach unconfirmed. | Confirm sandbox mode or explicitly approve exact live test amount/method. |
| Failed payment test | Not completed | No transaction attempted. | Approved failure-test method unavailable. | Define and approve provider-supported test procedure. |
| Cancelled payment test | Not completed | No transaction attempted. | Approved cancellation-test method unavailable. | Define and approve provider-supported test procedure. |
| Refund test | Not completed | No test order exists. | Successful test order and refund path required. | Complete only after payment test approval and order creation. |
| South Africa shipping zone | Unverified | Shipping query validation passed; location access was denied before inspection. | Shopify shipping authorization/Admin login required. | Complete authenticated read-only shipping inspection. |
| Standard shipping rate | Unverified / not configured in this phase | No Admin settings accessed or changed. | Existing state and approved rate amount unknown. | Inspect first; if missing, merchant approves exact rate before creation. |
| Free shipping over R500 | Unverified / not configured in this phase | Checkout inaccessible and delivery profiles unavailable. | Margin decision and configuration state unknown. | Confirm margin decision, then configure/test or remove announcement. |
| Unsupported international shipping | Unverified | Delivery profile and checkout tests unavailable. | International zones/rates may still exist. | Inspect delivery zones and run a safe unsupported-address checkout test. |
| R500 announcement alignment | Decision pending | Announcement is known; checkout result is not. | Offer and checkout may be inconsistent. | Test below and above R500 after shipping access is restored. |

## Part 5: Strict No-Change Confirmation

| Area | Changed? | Confirmation |
| --- | --- | --- |
| Support pages published | No | All publication actions remained out of scope. |
| Menus wired | No | No navigation mutation or Admin menu action was run. |
| Contact updated | No | The Contact page was not opened or changed. |
| Theme files changed | No | No Liquid, CSS, JavaScript, JSON, header, footer, announcement, or template file was changed. |
| Shopify policies changed | No | Privacy, Terms, Refund Policy, and Shipping Policy were untouched. |
| PayPal activated | No | No payment provider was activated. |
| CJ supplier order created | No | No supplier, product, fulfilment, or payment action was run. |
| Live payment completed | No | No checkout or payment was reached. |
| Shipping setting changed | No | No zone, rate, origin, market, or delivery profile was changed. |

## Tests Completed

- Confirmed the Shopify Admin browser session requires merchant login.
- Validated a read-only Admin GraphQL query for shipping origins, delivery zones, rates, and price conditions.
- Attempted read-only shipping inspection and recorded the access denial caused by incomplete scope authorization.
- Confirmed the customer storefront is password-protected and checkout is not currently reachable without approved access.
- Confirmed no live payment, shipping configuration, or external order was created.

## Tests Not Completed

- PayFast activation and merchant-account verification.
- PayFast sandbox/test-mode verification.
- Checkout payment-method display review.
- Successful, failed, cancelled, and refund payment flows.
- Shipping origin, South Africa zone, standard-rate, free-rate, and international-zone inspection.
- Below-R500, above-R500, two-province, and unsupported-international checkout tests.
- R500 announcement-to-checkout alignment test.

## Recommended Next Approval

First, the merchant should sign in to Shopify Admin in the available browser session and separately make the PayFast dashboard available, without sharing credentials in chat or the repository. Then authorize continuation of read-only PayFast and shipping inspection.

If configuration is missing after inspection, obtain two explicit decisions before making changes:

1. The exact South Africa standard shipping rate and display name.
2. Whether margin approval supports free standard shipping over R500.

If PayFast has no sandbox mode, obtain explicit approval for the exact low-value live payment amount and method before creating a test order. Page publication, menu wiring, Contact changes, policy changes, PayPal activation, CJ fulfilment, and theme changes remain excluded.
