# Phase 12B PayFast And Shipping Controlled Setup Report

## Scope And Outcome

Phase 12B began with a controlled inspection attempt on 2026-07-10 at approximately 19:36 SAST and continued with authenticated Shopify Admin inspection on 2026-07-11.

The initial inspection could not reach the authenticated Shopify Admin or PayFast configuration surfaces. The Shopify Admin browser session presented the Shopify login page, the Shopify CLI shipping-scope authorization was not completed, and the public storefront redirected to its password page. After the merchant signed in, the continuation inspected Shopify Payments, Shipping and Delivery, and Markets without changing them. The PayFast dashboard remained signed out.

Current outcome after continuation: **Shopify Admin inspection completed; PayFast dashboard inspection remains authentication-blocked**.

No sensitive credentials, payment details, customer credentials, API keys, passwords, or provider secrets were requested, entered, captured, or stored.

## Authenticated Inspection — 2026-07-11

Authenticated Shopify Admin inspection was completed on 2026-07-11 at approximately 04:45 SAST. The PayFast dashboard at `my.payfast.io` presented its login page and was not authenticated, so private PayFast merchant verification, settlement, fee, and refund details were not inspected.

| Area | Verified state | Evidence | Change required? | Approval required |
| --- | --- | --- | --- | --- |
| PayFast activation | Inactive / not configured in Shopify | PayFast is absent from active providers. Searching Shopify's available-provider list for `PayFast` returned `No results found.` | Yes, if PayFast remains the launch provider decision. | Explicit approval plus a supported integration path is required before connecting or configuring it. |
| PayFast merchant-account connection | No PayFast account is attached to this store | No active PayFast provider appears in Shopify. The separate PayFast dashboard was signed out. | Yes, if PayFast will be used. | Merchant must authenticate PayFast and approve the supported connection process; do not expose merchant or banking details. |
| Sandbox/test availability | PayFast-specific sandbox status unknown; Shopify Test payment gateway is active | Shopify Payments settings show `Test payment gateway`. No connected PayFast configuration exists to expose a PayFast test mode. | Decision required before PayFast testing. | Confirm supported PayFast integration and sandbox availability. If unavailable, approve an exact low-value live test amount and method later. |
| Enabled payment methods | Shopify Test payment gateway and PayPal are active; PayFast is not active | Payments settings list Test payment gateway and PayPal as active. Checkout display was not tested because the storefront is password-protected. | Yes, before launch: test gateway must not be treated as a live PayFast setup, and PayPal's active state conflicts with the earlier launch plan. | Separate approval is required for any provider activation, deactivation, or replacement. |
| Refund route | PayFast route unavailable / not verifiable | No PayFast provider or PayFast test order exists. The signed-out PayFast dashboard exposed no merchant workflow. | Yes, before PayFast launch. | Approve provider setup first, then inspect and test the documented Shopify/PayFast refund route. |
| Shipping origin | `Shop location`, South Africa | General profile shows one fulfilment location: Shop location, South Africa. | No immediate change established. | Approval required only if the origin must change. |
| South Africa zone | Configured in the General profile | Domestic zone is South Africa. One general profile covers all products and one of one location. | No zone creation required. | Approval required for any zone edit. |
| Standard rate | `Standard` — R100; displayed estimate 3–5 business days | Domestic rate list shows Standard at R100, becoming free from R770. | Decision required on whether to retain the rate name, amount, estimate, and threshold. | Merchant must approve the exact customer-facing name and rate before any edit. |
| Free shipping over R500 | Not configured | Free Standard begins at R770, not R500. | Yes, because the announcement says R500. | Merchant must approve free shipping over R500 after margin review, or separately approve changing/removing the announcement. |
| International rates | Configured but not market-enabled | International zone covers 28 countries with an R310 rate. Shopify says countries must be added to a market; Markets shows only South Africa active. | Review required; no customer-enabled international market is currently active. | Approval required before removing the dormant rate or activating any international market. |
| R500 announcement alignment | **Not aligned** | Announcement promises free standard shipping over R500; configured Standard becomes free only from R770. | Yes, before launch. | Approve either a tested R500 threshold or a later announcement change. No change was made here. |

## Part 1: PayFast Setup And Testing

| Check | Status | Evidence / notes |
| --- | --- | --- |
| PayFast active or inactive for the correct Shopify store | Inactive / not configured | PayFast is absent from active providers, and provider search returned no PayFast result. No configuration action was run. |
| Connected to the correct verified merchant account | Not connected in Shopify; merchant verification unknown | No PayFast account is attached to the store. The PayFast dashboard was not authenticated, and no private account details were inspected. |
| Test or sandbox mode available | PayFast-specific availability unknown | Shopify Test payment gateway is active, but this is not evidence of PayFast sandbox support. |
| Payment methods displayed at Shopify checkout | Admin state verified; storefront display not tested | Shopify Admin lists Test payment gateway and PayPal as active. PayFast is not active. The password-protected storefront prevented checkout verification. |
| Successful payment test | Not completed | No test mode was confirmed. No real live payment was authorized. |
| Failed-payment test | Not completed | Requires an approved test/sandbox method or controlled test procedure. |
| Cancelled-payment test | Not completed | Requires an approved test/sandbox method or controlled test procedure. |
| Refund test | Not completed | Requires a completed approved test order and authenticated Shopify/PayFast workflow. |

### Payment Evidence Record

- Inspection date/time: initial attempt on 2026-07-10 at approximately 19:36 SAST; authenticated Shopify continuation on 2026-07-11 at approximately 04:45 SAST.
- Test order number: None created.
- Payment reference: None created.
- Shopify payment state: Not applicable; no order or transaction was created.
- PayFast/payment-provider state: PayFast inactive/not configured; Shopify Test payment gateway and PayPal active.
- Visible fee/reference note: Shopify labels PayPal with a 2% transaction fee plus PayPal processing fees. No PayFast fee, settlement, payout, cancellation, or refund reference was visible because PayFast is not connected and its dashboard was signed out.
- Screenshot/note status: Admin state and login gates observed; no sensitive screenshot or credential was captured.

### PayFast Control Point

Do not run a live transaction until the merchant explicitly confirms:

- The exact low-value test amount.
- The payment method to use.
- That a live charge is acceptable.
- The test customer details to use.
- The cancellation/refund path to follow after payment.

Preferred next outcome: confirm and use PayFast test/sandbox mode. If sandbox testing is unavailable, record `Low-value live test needed; merchant approval required` and obtain the exact approval above.

PayPal was already active when inspected. It was not activated, deactivated, opened for reconfiguration, or tested in this phase. Its active state requires a separate merchant decision because the earlier launch plan placed PayPal later.

## Part 2: South Africa Shipping Setup And Testing

### Configuration Inspection

| Check | Status | Evidence / notes |
| --- | --- | --- |
| Active shipping origin/location | Verified | General profile uses `Shop location` in South Africa, with one of one location included. |
| South Africa shipping zone | Verified | Domestic South Africa zone exists in the General profile. |
| Standard shipping rate | Verified | `Standard` is R100, shows 3–5 business days, and becomes free for orders R770 and up. |
| Additional domestic rate | Verified | `Express` is R150 and shows 1–2 business days. No claim was made that these estimates are operationally validated. |
| Free standard shipping over R500 | Not configured | The current free Standard threshold is R770, not R500. |
| Unsupported international zones/rates | Configured but not market-enabled | International zone covers 28 countries with an R310 rate. Only South Africa is an active market, and Shopify says the international countries must be added to a market before selling there. |
| Products and locations in profile | Verified | One General profile covers all products not in other profiles; no other profile is listed, new products are added by default, and Shop location is included. Demo products therefore fall under the General profile based on the visible configuration. |

### Checkout Rate Tests

No checkout shipping-rate tests were completed.

- Cart below R500: Not tested.
- Cart above R500: Not tested.
- First South African province address: Not tested.
- Second South African province address: Not tested.
- Unsupported international address: Not tested.

Reason: the customer storefront redirected to `https://getyours.online/password`, so product, cart, and checkout could not be reached without the storefront password or an authenticated preview path. No test address, email, or customer data was submitted.

Before changing the existing Standard rate, the merchant must approve the exact rate amount, customer-facing name, and whether the displayed estimate should remain. Before changing free shipping from R770 to R500, the merchant must confirm the margin decision.

## Part 3: R500 Announcement Alignment

Current storefront announcement supplied for this phase:

`FREE STANDARD SHIPPING ON ORDERS OVER R500`

Classification: **Not aligned**.

The configured Standard rate becomes free for orders of R770 and up, while the announcement promises free standard shipping over R500. Treat this mismatch as a launch blocker until one of these paths is completed:

1. Confirm margin approval, configure free standard shipping over R500, and test below/above-threshold checkout behaviour; or
2. Remove or change the announcement before launch if the matching rate will not be offered.

The announcement and theme were not changed in this phase.

## Part 4: Launch Blocker Update

| Area | Status | Evidence | Remaining blocker | Recommended next action |
| --- | --- | --- | --- | --- |
| PayFast activation | Inactive / not configured | PayFast absent from active providers; provider search returned no results. | Supported PayFast integration and account connection required if PayFast remains the launch choice. | Confirm supported integration path, then request separate setup approval. |
| Successful payment test | Not completed | No order or payment reference created. | Test mode and approach unconfirmed. | Confirm sandbox mode or explicitly approve exact live test amount/method. |
| Failed payment test | Not completed | No transaction attempted. | Approved failure-test method unavailable. | Define and approve provider-supported test procedure. |
| Cancelled payment test | Not completed | No transaction attempted. | Approved cancellation-test method unavailable. | Define and approve provider-supported test procedure. |
| Refund test | Not completed | No test order exists. | Successful test order and refund path required. | Complete only after payment test approval and order creation. |
| South Africa shipping zone | Configured | Domestic South Africa zone exists in General profile. | Checkout behaviour still untested. | Retain unless the merchant approves a change; later test provincial addresses. |
| Standard shipping rate | Configured | Standard R100; free from R770; displayed estimate 3–5 business days. | Merchant must approve whether these values and wording are correct. | Provide exact approved amount and customer-facing name before any edit. |
| Free shipping over R500 | Not configured | Existing free Standard threshold is R770. | R500 announcement mismatch. | Approve R500 after margin review or separately approve announcement change. |
| Unsupported international shipping | Rate configured, market inactive | International R310 rate exists for 28 countries; only South Africa market is active. | Dormant international configuration should be reviewed before launch. | Decide whether to leave dormant or remove in a separately approved change. |
| R500 announcement alignment | **Not aligned** | R500 announcement versus R770 configured threshold. | Launch-blocking mismatch. | Approve rate threshold change or later announcement change; then test checkout. |

## Part 5: Strict No-Change Confirmation

| Area | Changed? | Confirmation |
| --- | --- | --- |
| Support pages published | No | All publication actions remained out of scope. |
| Menus wired | No | No navigation mutation or Admin menu action was run. |
| Contact updated | No | The Contact page was not opened or changed. |
| Theme files changed | No | No Liquid, CSS, JavaScript, JSON, header, footer, announcement, or template file was changed. |
| Shopify policies changed | No | Privacy, Terms, Refund Policy, and Shipping Policy were untouched. |
| PayPal activated | No action taken | PayPal was already active before inspection; it was not activated, deactivated, or reconfigured. |
| CJ supplier order created | No | No supplier, product, fulfilment, or payment action was run. |
| Live payment completed | No | No checkout or payment was reached. |
| Shipping setting changed | No | No zone, rate, origin, market, or delivery profile was changed. |

## Tests Completed

- Completed authenticated Shopify Admin Payments inspection.
- Confirmed PayFast is not active or attached and is unavailable in Shopify's visible provider search.
- Confirmed Shopify Test payment gateway and PayPal are active.
- Confirmed the separate PayFast dashboard is not signed in, without entering credentials.
- Completed authenticated Shipping and Delivery inspection.
- Confirmed Shop location in South Africa, one General profile covering all products, domestic and international zones, and current rates/conditions.
- Confirmed South Africa is the only active market.
- Classified the R500 announcement as not aligned with the configured R770 threshold.
- Validated a read-only Admin GraphQL query for shipping origins, delivery zones, rates, and price conditions.
- Attempted read-only shipping inspection and recorded the access denial caused by incomplete scope authorization.
- Confirmed the customer storefront is password-protected and checkout is not currently reachable without approved access.
- Confirmed no live payment, shipping configuration, or external order was created.

## Tests Not Completed

- PayFast merchant-dashboard verification and supported integration confirmation.
- PayFast sandbox/test-mode verification.
- Checkout payment-method display review.
- Successful, failed, cancelled, and refund payment flows.
- Below-R500, above-R500, two-province, and unsupported-international checkout tests.
- Checkout confirmation of the shipping thresholds and international rejection.

## Recommended Next Approval

Shopify Admin inspection is complete. If PayFast remains the launch choice, the merchant should sign in to the PayFast dashboard without sharing credentials in chat or the repository, then authorize read-only PayFast merchant-status inspection.

If configuration is missing after inspection, obtain two explicit decisions before making changes:

1. The exact South Africa Standard shipping amount and customer-facing name. Current state is `Standard`, R100, with a displayed 3–5 business-day estimate.
2. Whether free standard shipping over R500 is approved after margin review. Current free threshold is R770.

If the eventual supported PayFast integration has no sandbox mode, obtain explicit approval for the exact low-value live payment amount and payment method before creating a test order. Also obtain a separate decision on the already-active PayPal provider; do not change it without approval. Page publication, menu wiring, Contact changes, policy changes, CJ fulfilment, and theme changes remain excluded.
