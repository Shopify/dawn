# Phase 12B PayFast And Shipping Controlled Setup Report

## Scope And Outcome

Phase 12B began with a controlled inspection attempt on 2026-07-10 at approximately 19:36 SAST and continued with authenticated Shopify Admin inspection on 2026-07-11.

The initial inspection could not reach the authenticated Shopify Admin or PayFast configuration surfaces. The Shopify Admin browser session presented the Shopify login page, the Shopify CLI shipping-scope authorization was not completed, and the public storefront redirected to its password page. After the merchant signed in, the continuation inspected Shopify Payments, Shipping and Delivery, and Markets without changing them. The PayFast dashboard remained signed out.

Current outcome after Phase 12J: **The global post-payment setting remains `Don't fulfill any of the order's line items automatically`. The approved PayFast sandbox refund request for order #1002 created one R179 PayFast refund transaction, currently Pending. The order remains Paid and Unfulfilled while the provider-side sandbox refund is unresolved. No tracking, fulfilment, shipping-confirmation event, CJ order, or live-money movement occurred. Order #1001 remains unchanged.**

No sensitive credentials, payment details, customer credentials, API keys, passwords, or provider secrets were requested, entered, captured, or stored.

## Authenticated Inspection — 2026-07-11

> Historical note: this inspection records the Shopify configuration visible at approximately 04:45 SAST, before the later Phase 12C verification. The current PayFast state is documented in the Phase 12C section below and supersedes the earlier inactive-provider findings.

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

## Phase 12C PayFast Test-Mode Validation

Phase 12C was performed on 2026-07-11 using the authenticated internal storefront route and PayFast test mode only. No live payment credentials or real financial details were used.

### Current PayFast State

- Status: **Active**.
- Store connection: **Connected to the Get Yours Shopify store**.
- Mode: **Test mode enabled**. Shopify states that all transactions are simulated and customers cannot make real purchases through PayFast while this mode is active.
- Enabled PayFast methods: Visa, Mastercard, PayFast Instant EFT, Zapper, and Payflex.
- Disabled PayFast method: Mobicred.
- PayPal remains active as a separate provider and was not changed.
- Shopify's separate Test Payment Gateway also remains visible and was not changed.

### Validation Results

| Test | Result | Shopify state | PayFast state | Evidence | Follow-up |
| --- | --- | --- | --- | --- | --- |
| Checkout provider visibility | Passed | Checkout displayed Test Payment Gateway, PayPal, and `Payfast, zapper and payflex` as separate options. | PayFast option showed Visa, Mastercard, Instant EFT, and two additional enabled methods; Mobicred was absent. | Observed at checkout with synthetic test customer details. | No presentation change required. Review whether the separate Test Payment Gateway should remain active before launch. |
| Successful test payment | Blocked / failed before provider handoff | Shopify displayed `There was an issue processing your payment. Try again or use a different payment method.` No order was created. | No redirect occurred and no PayFast test transaction was created. | Orders and abandoned checkouts both remained empty after the attempt. | Investigate the PayFast test-mode handoff and connection without running a live transaction. |
| Cancelled checkout | Partial verification | Checkout was exited after the failed handoff. No order, abandoned checkout, paid state, or cancellation email was recorded. | No PayFast transaction existed to cancel. | Shopify Orders and Abandoned checkouts showed no records. | Repeat a provider-level cancellation test only after the handoff works. |
| Failed payment | Provider failure procedure not reached | The checkout showed an unexpected processing error and did not create a paid order. | No official PayFast simulated failure screen or transaction was reached. | Failure occurred before redirect to PayFast. | After handoff repair, use only PayFast's official test-mode failure procedure. |
| Customer confirmation email | Not generated / not verifiable | No Shopify order was created. | No PayFast transaction was created. | Synthetic checkout email was used; no order confirmation event existed. | Verify after a successful simulated order. |
| Merchant notification | Not triggered | No order or payment notification event was created. | No provider transaction existed. | Shopify Orders remained empty. | Verify after a successful simulated order. |
| Refund test | Not available | No successful test order existed to refund. | No PayFast test transaction existed. | Refund controls could not be evaluated against an order. | Inspect and test only after a successful test-mode payment. Do not substitute a live refund. |
| Desktop presentation | Passed | Provider options, explanatory text, and shipping rates were readable at desktop width. | PayFast branding and enabled-method summary were legible. | Visual checkout inspection. | None identified. |
| Mobile presentation | Passed | Payment choices and content remained readable at 400 x 800 with no observed overlap. | PayFast option remained identifiable and usable. | Responsive checkout inspection. | A 360 px recheck can follow after the payment handoff is repaired. |
| Shipping rates observed | Passed | At R79 subtotal, Standard was R100 and Express was R150. Standard showed 3–5 business days; Express showed 1–2 business days. | Not applicable. | South African Cape Town address used in checkout. | Delivery estimates still require operational confirmation before launch. |
| R500 threshold observed | **Not aligned** | At R715 subtotal, Standard still cost R100. At R864 subtotal, Standard was free. Express remained R150. | Not applicable. | Two controlled checkout observations using the same South African address. | Approve either an actual R500 free-shipping threshold or a future announcement change. |

### Test Evidence Summary

- Test date: 2026-07-11 SAST.
- Product/cart used below threshold: Desk Cable Organiser, R79 subtotal.
- Product/cart used above R500: four Desk Cable Organisers plus one Rolling Storage Cart, R715 subtotal.
- Product/cart used above the configured threshold: the R715 cart plus one Adjustable Drawer Divider Set, R864 subtotal.
- Shipping destination used: Cape Town, Western Cape, South Africa, with synthetic test customer details.
- Shopify test order number: None; no order was created.
- Payment reference: None; no PayFast transaction was created.
- Shopify payment status: Not applicable; payment failed before order creation.
- PayFast transaction status: Not created.
- No credentials, OTPs, provider secrets, card details, bank details, or personal financial information were recorded.

### Phase 12C Strict No-Change Confirmation

- No live money moved.
- No real card, bank account, Zapper, Payflex, or customer financial details were used.
- PayFast test mode was not disabled.
- Mobicred was not activated.
- PayPal was not changed.
- Shipping settings and rates were not changed.
- The R500 announcement was not changed.
- No support page was published and no menu was wired.
- Contact, policies, and theme files were not changed.
- No CJ supplier order was created.

## Phase 12D PayFast Handoff Investigation

Phase 12D was performed on 2026-07-11 as read-only diagnostics plus one controlled PayFast test-mode handoff reproduction. The reproduction reached PayFast's official sandbox successfully. The sandbox payment was not completed or cancelled.

| Diagnostic area | Result | Evidence | Root-cause relevance | Change required? |
| --- | --- | --- | --- | --- |
| PayFast merchant status | Operational dashboard access confirmed; formal verification status not confirmed | The authenticated dashboard loaded and exposed normal account and transaction surfaces without a visible restriction banner. The verification detail route subsequently required a fresh login, so verified/pending status was not safely established. | No evidence of an account restriction causing the handoff failure, but formal verification remains unknown. | No configuration change. Merchant should confirm the PayFast verification status directly in the dashboard before launch. |
| PayFast live/test capability | Test processing confirmed; live-payment permission not assessed | Shopify states PayFast test mode is on and that transactions are simulated. The reproduction reached `sandbox.payfast.co.za`. | Confirms the integration can initiate a test transaction. It does not prove live-payment readiness. | No change for this diagnostic phase. Keep test mode enabled. |
| Shopify integration status | Active and ready | Shopify's PayFast provider page showed `Active`, `Test mode is on`, and `This page is ready`. The Save button was disabled. | Strong evidence that Shopify considers provider setup complete and has no unsaved configuration. | No. |
| Store association | Connected inside the Get Yours Shopify Admin; PayFast legal-account association needs merchant confirmation | The provider page was opened under the Get Yours store. The authenticated PayFast dashboard displayed a different business-facing account name, which may be the legal merchant entity but was not independently confirmed. | Not implicated in the successful sandbox handoff, but the merchant-account association must be confirmed before live launch. | No automatic change. Merchant confirmation is required; reconnecting is explicitly out of scope. |
| Provider warnings | No setup, reconnect, permission, or authorization warning visible | The Shopify provider detail page showed Active/test mode and enabled methods only. No complete-setup or reconnect action was shown. | Makes an incomplete Shopify provider installation less likely. | No. |
| ZAR and South Africa market context | Correct for the reproduced checkout | Checkout displayed total currency ZAR, South Africa as the delivery country, and available South African shipping rates. | Makes a currency or active-market mismatch unlikely. | No. |
| Test product availability | Available in the active checkout context | The selected demo products were present in checkout and shipping methods loaded for the South African address. | Product or market availability did not block provider handoff. | No. |
| Handoff reproduction | Passed | One PayFast test-mode attempt progressed from Shopify processing to PayFast's official sandbox payment page. | The original failure was not reproducible during Phase 12D. | No configuration correction is justified from this result alone. |
| Network request | No failing request observed | The browser navigated from the Shopify checkout to `sandbox.payfast.co.za` on a sanitized payment-processing path. The available diagnostic interface did not expose a safe HTTP status or request identifier. | Confirms PayFast received the handoff; provides no failing request to classify. | No. If the error recurs, capture the timestamp and safe provider/support reference without recording payloads or credentials. |
| HTTP/error classification | No HTTP error reproduced | The sandbox page loaded and presented the simulated payment controls. No safe HTTP error code was available. | Does not support a persistent Shopify or PayFast request failure classification. | No. |
| Browser console | No warnings or errors captured | Console warning/error count was zero before and after the handoff. | No evidence of JavaScript, CSP, blocked-request, or browser-side app failure. | No. |
| PayFast logs | PayFast receipt confirmed by sandbox page; no completed transaction log | The official sandbox created a payment-processing session. The payment was intentionally left incomplete, and no completed PayFast transaction was created. | Confirms the handoff reached PayFast. It does not explain the earlier transient failure. | No. PayFast support is only indicated if the failure recurs. |
| Shopify/app logs | Shopify handoff confirmed; no provider error or safe request ID surfaced | Shopify created an abandoned checkout after redirect. Orders remained empty because the sandbox payment was not completed. No app diagnostic warning or safe request identifier was visible. | Confirms Shopify attempted the provider handoff successfully in this run. | No. |
| Root-cause classification | **G. Root cause still unknown** | The earlier failure could not be reproduced; current provider state is ready and the same checkout context reached PayFast sandbox without console errors. | A transient provider/network condition is possible, but there is insufficient evidence to classify it conclusively as F. | No configuration change should be made based on this evidence. |
| Confidence level | Medium | Current-state evidence is consistent across Shopify and the sandbox, but the original failing request was not captured. | Supports ruling out an obvious persistent setup, currency, market, or browser error; does not identify the original cause. | No. |
| Recommended corrective action | Do not change configuration. Run one separately approved end-to-end sandbox payment on a fresh low-value cart. If the failure recurs, stop and contact PayFast support with the timestamp and sanitized checkout context. | A completed sandbox test is still required to validate order creation, notifications, and refund eligibility. | This is validation rather than a configuration correction. | Merchant approval is required before creating the simulated test order. PayFast support is required only if the handoff error recurs or the sandbox transaction cannot complete. |

### Phase 12D Safe Diagnostic Summary

- PayFast received the reproduced attempt: **Yes**, through the official sandbox payment page.
- Safe HTTP/error status: **No failing HTTP status or provider error was reproduced or exposed**.
- Browser console: no warnings or errors captured.
- Shopify state after stopping: no order; one automatically generated abandoned checkout; no paid status.
- PayFast state after stopping: sandbox session opened; payment incomplete; no completed transaction.
- Selected root-cause classification: **G. Root cause still unknown**.
- Confidence: **Medium**.
- No configuration change is supported by the current evidence.

### Phase 12D Strict No-Change Confirmation

- No live payment or movement of money occurred.
- No real card, bank, Zapper, Payflex, or customer financial credentials were used.
- No provider was activated, deactivated, reinstalled, uninstalled, reconnected, or reconfigured.
- PayFast test mode and payment-method selections were not changed.
- No credential, key, passphrase, permission, or scope was changed or regenerated.
- PayPal and Shopify Test Payment Gateway were unchanged.
- No shipping, market, currency, domain, product, checkout setting, or theme file was changed.
- No page was published, no menu was wired, and Contact and policies were unchanged.
- No Shopify order, refund, or CJ supplier order was created.
- One abandoned checkout record was created automatically when Shopify handed the incomplete test checkout to PayFast sandbox; it was not edited or recovered.

## Phase 12E Successful Sandbox Order Validation

Phase 12E was performed on 2026-07-11 with explicit merchant approval for exactly one successful PayFast sandbox-only payment. A fresh cart and synthetic customer details were used. PayFast test mode was verified immediately before checkout and remained enabled.

> Historical verification note: the Shopify-side items marked pending in this section were resolved during Phase 12F below.

The sandbox payment completed successfully. Immediately afterward, the browser security policy blocked access to both the Shopify return page and Shopify Admin. The blocked access was not bypassed, and no alternate browser or API was used to reproduce the restricted verification. Shopify-side order validation therefore remains pending.

| Validation area | Result | Shopify state | PayFast state | Evidence | Follow-up |
| --- | --- | --- | --- | --- | --- |
| Fresh low-value cart | Passed | Fresh cart contained one Desk Cable Organiser at R79. | Not applicable. | New browser cart showed one line item and no reused products from the abandoned Phase 12D checkout. | None. |
| Sandbox redirect | Passed | Shopify checkout redirected to PayFast after PayFast was selected. | Official `sandbox.payfast.co.za` payment page loaded with an explicit sandbox notice. | Redirect occurred once without the earlier handoff error. | None. |
| Successful simulated payment | Passed | Shopify return state could not be inspected after the sandbox success. | PayFast displayed `Your payment was successful!` for R179 and showed the sandbox wallet-funds path. | Official sandbox success confirmation. | Verify the corresponding Shopify order before any further payment testing. |
| Shopify order creation | Pending verification | Browser security blocked the Shopify return page and Admin after payment completion. | PayFast success indicates the simulated provider payment completed, but it does not independently prove Shopify order creation. | No safe order number was available from the sandbox success page. | Perform read-only Shopify Admin verification only after browser access is restored. Do not repeat the payment. |
| Payment status | Pending verification | Financial status could not be read in Shopify Admin. | Sandbox payment status was successful. | PayFast success confirmation only. | Confirm Shopify financial status without changing the order. |
| Fulfilment status | Pending verification | Could not be inspected. | Not applicable. | Shopify Admin access was blocked. | Confirm that the order is unfulfilled; do not fulfil it. |
| Order total | Partially verified | Expected checkout total was R179. | PayFast confirmed R179. | Shopify checkout showed R79 subtotal plus R100 Standard shipping; PayFast showed R179. | Confirm the Shopify order total matches R179. |
| Shipping rate | Verified at checkout | Standard shipping was selected at R100. | PayFast received the combined total only. | Checkout cost summary showed Standard R100. | No shipping change. |
| Tax display | Verified at checkout; order display pending | Checkout displayed R10.30 included in taxes. | Not applicable. | Shopify checkout cost summary. | Confirm the order tax display without changing tax settings. |
| Customer email | Not verifiable | A reserved synthetic customer email was used; the Shopify order and notification timeline could not be inspected. | PayFast displayed that its sandbox receipt was sent to a PayFast-owned sandbox address, not the synthetic Shopify customer address. | No customer mailbox was accessed. | Verify Shopify's notification event in the order timeline when Admin access is restored. |
| Merchant notification | Pending verification | Shopify Admin and merchant notification surfaces could not be inspected after success. | Not applicable. | Browser security block. | Check Shopify Admin notification and merchant inbox without recording message bodies or private addresses. |
| PayFast transaction | Successful simulated payment confirmed; transaction log pending | No Shopify provider reference was available after the block. | Sandbox success state and R179 amount were visible. No live payment occurred. | Official sandbox success page. | Confirm a corresponding sandbox transaction entry if available; record only sanitized status/reference. |
| Duplicate-order check | Pending verification | Orders list could not be inspected. | Only one sandbox `Complete Payment` action was performed. | No second PayFast success attempt was made. | Confirm exactly one Shopify order exists. Do not retry payment. |
| Refund eligibility | Pending verification; no refund issued | Order refund action could not be inspected. | Sandbox refund eligibility could not be inspected without the resulting order or transaction record. | No refund control was clicked. | Inspect only in a separately approved read-only follow-up; do not issue a refund yet. |
| Business-account confirmation requirement | Unresolved launch requirement | Shopify PayFast provider remains connected to Get Yours. | The visible PayFast business-facing account name differs from Get Yours. | Existing Phase 12D observation; the legal-entity relationship was not confirmed. | Merchant must confirm the intended legal merchant entity and formal PayFast verification status before live activation. Do not reconnect the account. |

### Phase 12E Test Record

- Product: Desk Cable Organiser.
- Subtotal: R79.
- Shipping method: Standard.
- Shipping charge: R100.
- Total: R179 ZAR.
- Checkout tax display: R10.30 included in taxes.
- Test start: approximately 16:29 SAST on 2026-07-11.
- PayFast result: successful sandbox payment.
- Handoff error recurrence: no.
- Shopify order number: pending read-only verification.

### Phase 12E Strict No-Change Confirmation

- Exactly one PayFast sandbox `Complete Payment` action was performed.
- No second payment attempt was made after success.
- No live money moved and no live payment method was used.
- No real card, bank, Zapper, Payflex, or customer financial credentials were used.
- No refund was issued.
- No order was fulfilled or manually marked fulfilled.
- No CJ supplier order was created.
- No payment-provider configuration, payment method, PayPal setting, or Shopify Test Payment Gateway setting was changed.
- PayFast test mode remained enabled.
- No shipping rate, delivery estimate, R500 announcement, market, domain, checkout setting, product, or theme file was changed.
- No page was published, no menu was wired, and Contact and policies were unchanged.
- Shopify-side order, notification, duplicate, and refund-eligibility checks remain pending because browser access was blocked after payment success.

## Phase 12F Shopify Post-Payment Verification

Phase 12F was completed on 2026-07-11 as read-only Shopify Admin inspection of the single Phase 12E PayFast sandbox payment. No order, transaction, fulfilment, notification, refund, checkout, or configuration action was performed.

| Verification area | Result | Shopify evidence | PayFast relationship | Follow-up |
| --- | --- | --- | --- | --- |
| Order located | Passed | Exactly one matching order was present: `#1001`, internal order ID `7576446042215`, created 11 July 2026 at 16:30 SAST from Online Store. | Timeline links the order to the single Phase 12E PayFast payment. | None. |
| Test/sandbox status | Passed | Order banner states `Test order` and `Your payment gateway is in test mode.` Transaction detail shows `Test: True`. | Confirms the order is simulated and no live money moved. | Keep test mode enabled for later approved tests. |
| Financial status | Paid | Order header and payment summary both show Paid. | Shopify recorded one successful PayFast Sale transaction for R179. | None for this order. |
| Fulfilment status | **Unexpected: Fulfilled, Complete, and Archived** | Timeline states Shopify marked one item fulfilled from Shop location, then archived the order. A shipping confirmation event was generated. | Not caused by a second PayFast transaction. | Treat automatic fulfilment/archiving as a launch blocker. Inspect the relevant Shopify order-processing setting in a separately approved read-only phase before changing anything. |
| Order values | Matched | Subtotal R79; Standard shipping R100; included VAT/tax display R10.30; total and paid amount R179 ZAR. | PayFast transaction amount matches R179. | None. |
| Item and quantity | Matched | One Desk Cable Organiser, quantity 1, unit and line total R79. | Matches the Phase 12E checkout. | None. |
| Payment transaction | Passed | One transaction: Type Sale, Gateway Payfast, Status Success, Test True, created 16:29 SAST, amount R179 ZAR. Safe shortened reference: `...ydev`. | Shopify received and acknowledged PayFast's successful sandbox notification. | Do not expose or store the full provider reference. |
| Customer order confirmation | Generated/sent by Shopify; delivery unverified | Timeline states the order-confirmation email was sent at 16:30. The reserved synthetic address was not opened or checked. | Generated after PayFast success acknowledgement. | Treat actual mailbox delivery as unverified. Do not resend. |
| Customer shipping confirmation | **Generated automatically** | Timeline states a shipping-confirmation email was sent at 16:30 immediately after automatic fulfilment. | Not a PayFast function. | This wording can imply shipment before manual supplier fulfilment; resolve the auto-fulfilment workflow before launch. Do not resend. |
| Merchant notification | Unverified | The order appears in Shopify Admin, but no safe merchant email-delivery status was exposed in the order timeline. Alerts were not opened because doing so could change read state. | Not a PayFast transaction-status issue. | Verify merchant notification delivery separately without resending. |
| Duplicate-order check | Passed | Orders list contained one matching R179 order. The order has one matching PayFast transaction. | No duplicate paid or pending PayFast transaction was visible. | Do not repeat payment. |
| Abandoned checkout relationship | Separate | The earlier Phase 12D R864 abandoned checkout remains listed as Not recovered. The completed Phase 12E checkout is linked to order #1001 and is not listed as a second abandoned checkout. | Confirms the successful sandbox payment produced a distinct order. | Do not recover or edit the abandoned checkout. |
| Refund eligibility | Eligible through Shopify to original PayFast payment; no refund issued | Refund screen shows Original payment, provider Payfast, and R179 available for refund. Refund amount remained R0 and the final action was disabled. | Indicates Shopify can initiate the sandbox refund against PayFast. | Test only in the separately approved sandbox-refund phase. |
| Business-account confirmation requirement | Still unresolved | Shopify provider is connected to Get Yours. | The visible PayFast business-facing account name differs from Get Yours. | Merchant must confirm the intended legal merchant entity and formal PayFast verification status before live activation. Do not reconnect the account. |

### Phase 12F Order Summary

- Shopify order: `#1001`.
- Safe Shopify order ID: `7576446042215`.
- Created: 11 July 2026 at 16:30 SAST.
- Test indicator: true.
- Financial status: Paid.
- Fulfilment status: Fulfilled; order also marked Complete and Archived.
- Gateway: Payfast.
- Transaction: one successful test Sale for R179 ZAR, created at 16:29 SAST.
- Subtotal: R79.
- Shipping: Standard, R100.
- Tax display: R10.30 included, shown as VAT 15%.
- Grand total: R179 ZAR.
- Product: Desk Cable Organiser, quantity 1.
- Duplicate matching order: none.
- Earlier abandoned checkout: separate, R864, Not recovered.
- Refund availability: R179 to Original payment through Payfast; no refund started or issued.

### Phase 12F Strict No-Change Confirmation

- The payment was not repeated and no second order was created.
- Order #1001 was not edited, cancelled, archived, deleted, tagged, or annotated by this inspection.
- No payment was captured or marked manually.
- No refund amount was entered and no refund was issued.
- No fulfilment, delivery, tracking, or supplier action was performed.
- No customer or merchant notification was resent or opened for resend.
- The abandoned checkout was not recovered, edited, or deleted.
- No PayFast, PayPal, Test Payment Gateway, shipping, tax, market, product, customer, domain, checkout, or store setting was changed.
- No theme, page, menu, Contact, or policy change was made.
- No CJ supplier order was created.
- Fulfilment, archiving, and the shipping-confirmation event were generated automatically by Shopify at order creation; they were observed only and not changed.

## Phase 12G Automatic Fulfilment Investigation

Phase 12G was completed on 2026-07-11 as a read-only investigation of order #1001, Shopify order-processing settings, product and variant configuration, locations, installed apps, and automation surfaces. No setting, order, product, app, workflow, or notification was changed.

| Investigation area | Current state | Evidence | Root-cause relevance | Change required? |
| --- | --- | --- | --- | --- |
| Order timeline | Payment at 16:29 SAST; order, fulfilment, shipping-confirmation, completion state, and archive at 16:30 SAST | Timeline records one successful PayFast Sale, Shopify fulfilment, shipping-confirmation generation, and a separate archive event. No separate completion event is shown; Complete is the resulting state after all line items were fulfilled. | Sequence matches Shopify's configured post-payment processing exactly. | No order change. Future processing settings require correction before launch. |
| Fulfilment actor/source | Shopify | Timeline states `Shopify marked 1 item as fulfilled from Shop location.` Expanded event shows Service `Manual` and fulfilment location `Shop location`. | Rules out merchant user, PayFast, Flow, API, and third-party fulfilment service as the event actor. | No. |
| Tracking/carrier | None | Order still offers `Add tracking`; no tracking number or carrier is attached. | Confirms Shopify marked fulfilment without supplier or shipment evidence. | No change to #1001. Future paid orders must remain unfulfilled until tracking is available. |
| Automatic fulfilment setting | **Enabled** | General > Order processing has `Automatically fulfill the order's line items` selected under `After an order has been paid`. | Primary cause of the immediate fulfilment. | Yes. Proposed future correction: select `Don't fulfill any of the order's line items automatically`. Requires explicit merchant approval and Save. |
| High-risk fulfilment option | Disabled | `Automatically fulfill all orders, even those with a high risk of fraud` is unchecked. | Normal-risk paid orders are affected; high-risk orders may be excluded by Shopify. | No separate change required if automatic line-item fulfilment is disabled. |
| Shipment notification setting | **Enabled** | Nested `Notify customers of their shipment` checkbox is checked beneath automatic fulfilment. | Direct cause of the shipping-confirmation email when Shopify auto-fulfilled #1001. It is downstream from the automatic-fulfilment choice. | Correcting automatic fulfilment prevents this premature trigger. The notification setting can remain relevant for later legitimate manual fulfilment, subject to merchant review. |
| Automatic archive setting | **Enabled** | `Automatically archive the order` is checked for orders that are fulfilled and paid or fully refunded. | Downstream cause of the archive event after automatic fulfilment made the paid order complete. Disabling archive alone would leave future orders incorrectly fulfilled. | Merchant decision required after automatic fulfilment is corrected. |
| Product requires shipping | Yes | Desk Cable Organiser has `Physical product` checked. | Rules out a non-shipping/digital product classification. | No. |
| Inventory management | Shopify-tracked at Shop location | Inventory tracking is enabled and the variant has stock at Shop location. | Normal store-managed physical inventory; not an app-managed product. | No. |
| Variant fulfilment service | Manual | Order fulfilment event identifies Service `Manual`. | Rules out automatic app/custom fulfilment service assignment. | No. |
| Sample product comparison | Same store-managed physical pattern | Laundry Hamper is also a physical product with Shopify-tracked inventory at Shop location. Product list shows demo inventory managed at the store location. | Indicates the root setting is store-wide rather than Desk Cable Organiser-specific. | No product changes. |
| Fulfilment locations | One active location | Locations shows one active location: Shop location, South Africa. No app-managed or custom fulfilment location is listed. | Rules out PayFast or another app location initiating fulfilment. | No. |
| Installed apps | No fulfilment app identified | Installed apps are Shopify CLI Connector, Shopify ChatGPT MCP, three wishlist/loyalty apps, and Messaging. No CJ app or dedicated fulfilment app is installed. | No app matches the order actor; timeline explicitly attributes fulfilment to Shopify. | No app changes. |
| Shopify Flow | Not installed | Shopify Flow does not appear in the installed apps list, and no Flow workflow or run is exposed. | Rules out a Flow `order paid -> fulfil order` workflow. | No. |
| API/app fulfilment evidence | None | Timeline identifies Shopify, Manual service, and Shop location; no app/API actor or custom service appears. | Makes third-party or API fulfilment unsupported by the evidence. | No. |
| Notification trigger | Automatic Shopify fulfilment | Shipping confirmation appears in the same 16:30 sequence immediately after Shopify marked the item fulfilled. The shipment-notification checkbox is enabled. | Confirms the email was a downstream consequence of the automatic fulfilment, not PayFast or a manual resend. | Fix the underlying fulfilment setting before retesting. |
| Store-wide impact | Eligible paid orders store-wide | The responsible setting is under global General > Order processing, not a product, gateway, or location rule. | Future normal-risk paid orders through PayFast or other gateways are likely to be fulfilled automatically. | Launch blocker until corrected and retested. |
| Root-cause classification | **I. Multiple interacting settings** | Automatic fulfilment is the primary trigger; shipment notification and auto-archive are enabled downstream behaviours. | Fully explains Fulfilled, Complete, shipping confirmation, and Archived states. | Yes, but no mutation is authorized in Phase 12G. |
| Confidence | **High** | Current settings and the order timeline align exactly; product, location, app, Flow, service, and gateway alternatives were ruled out. | Root cause is established. | No further diagnostic order is required. |
| Proposed correction | Disable automatic line-item fulfilment for paid orders; separately decide whether automatic archive should remain enabled | Desired manual CJ workflow requires paid orders to remain Unfulfilled. | Prevents premature fulfilment and shipping confirmation. Auto-archive becomes irrelevant until a merchant legitimately fulfils an order. | Explicit merchant approval required to change General > Order processing and Save. |
| Retest requirement | One separately approved PayFast sandbox order after correction | Must verify Paid, Unfulfilled, operationally visible/open, no shipping-confirmation email, no tracking, and no CJ order. | Confirms the corrected workflow before manual fulfilment testing. | Separate approval required; do not retest in Phase 12G. |

### Phase 12G Root-Cause Decision

- Classification: **I. Multiple interacting settings**.
- Primary responsible setting: `Automatically fulfill the order's line items` is selected.
- Downstream notification setting: `Notify customers of their shipment` is checked.
- Downstream archive setting: `Automatically archive the order` is checked.
- Fulfilment actor: Shopify.
- Fulfilment service: Manual.
- Fulfilment location: Shop location.
- Tracking: none.
- PayFast role: payment success only; not the fulfilment actor.
- Scope: future eligible normal-risk paid orders store-wide, not only PayFast, test orders, or Desk Cable Organiser.
- Confidence: high.

### Proposed Correction And Retest Plan

1. With explicit merchant approval, change General > Order processing from `Automatically fulfill the order's line items` to `Don't fulfill any of the order's line items automatically`, then Save.
2. Decide separately whether `Automatically archive the order` should remain enabled. Leaving it enabled is compatible with manual fulfilment because archiving would occur only after the merchant later fulfils the paid order; disabling it may keep completed orders visible longer.
3. Confirm the shipment-notification setting is used only when a legitimate manual fulfilment is created. Correcting automatic fulfilment should prevent premature shipping confirmation.
4. Create one separately approved PayFast sandbox retest order.
5. Verify the retest remains Paid, Unfulfilled, operationally visible/open, without tracking, without shipping confirmation, and without a CJ supplier order.
6. In a later separate phase, test the intended manual fulfilment, tracking, and customer notification workflow.

### Phase 12G Strict No-Change Confirmation

- Order #1001 was not edited, unarchived, cancelled, refunded, fulfilled, delivered, tagged, annotated, or given tracking.
- No notification was opened for resend or resent.
- No product, variant, inventory, location, fulfilment service, app, or Shopify Flow setting was changed.
- No Shopify order-processing, automatic fulfilment, notification, or archive setting was changed or saved.
- No PayFast, PayPal, Test Payment Gateway, shipping, tax, market, policy, page, menu, Contact, checkout, domain, or theme setting was changed.
- No payment or order was repeated or created.
- No CJ supplier order was created.

## Phase 12H Automatic Fulfilment Correction

Phase 12H was completed on 2026-07-12 using explicit approval to change only the global automatic-fulfilment choice under **General > Order processing**. No order, checkout, payment, refund, fulfilment, tracking, notification, provider, shipping, tax, market, product, page, menu, policy, theme, app, or CJ action was performed.

| Area | Before | After | Verification | Notes |
| --- | --- | --- | --- | --- |
| Automatic line-item fulfilment | `Automatically fulfill the order's line items` selected | `Don't fulfill any of the order's line items automatically` selected | Saved once; verified selected after a page reload with no unsaved-change indicator. | Future eligible paid orders should remain Unfulfilled for manual CJ review. |
| Shipment notification | `Notify customers of their shipment` enabled beneath automatic fulfilment | Unchanged; conditionally hidden while automatic fulfilment is disabled | Confirmed enabled before the approved change. It disappeared from the settings surface only because the parent automatic-fulfilment option is now disabled. | It remains relevant only after a legitimate manual fulfilment. |
| Automatic archive | Enabled | Enabled | Verified checked after reload. | It can archive a paid order only after a legitimate fulfilment; it does not fulfil an order. |
| Expected manual CJ workflow | Paid orders were fulfilled automatically | Paid order should remain Unfulfilled pending merchant action | Configuration now matches the intended sequence; no order was created in this phase. | Verify payment, address, SKU, CJ availability, and supplier cost; place the CJ order manually; add tracking when available; then fulfil legitimately and send shipping confirmation. |
| Order #1001 | Fulfilled, Complete, Archived historical sandbox record | Unchanged | No interaction with the order was performed. | The historical test order was not edited, unarchived, cancelled, refunded, fulfilled, or annotated. |
| Retest | Required | Still required | No checkout or payment was created. | One separately approved PayFast sandbox retest must verify Paid + Unfulfilled, no tracking, no premature shipping confirmation, and no CJ order. |

### Phase 12H Strict No-Change Confirmation

- Only the approved automatic line-item fulfilment setting changed.
- Order #1001 was not changed, and no new order, checkout, payment, or refund was created.
- No fulfilment, tracking, notification resend, or CJ supplier order occurred.
- Automatic archive, shipment-notification configuration, and the high-risk fulfilment option were not changed.
- No PayFast, PayPal, Shopify Test Payment Gateway, shipping, tax, market, product, variant, inventory, location, policy, page, menu, Contact, theme, static-prototype, app, or Shopify Flow setting changed.
- No live money moved.

## Phase 12I Post-Correction Sandbox Retest

Phase 12I was completed on 2026-07-12 with the one explicitly approved PayFast sandbox checkout. A fresh cart and synthetic customer details were used. PayFast test mode was confirmed before checkout and remained enabled. After the single sandbox completion action, the PayFast browser page remained on its processing state; Shopify Admin is the authoritative result for this retest and recorded one successful simulated payment and one new order.

| Validation area | Expected | Actual | Result | Follow-up |
| --- | --- | --- | --- | --- |
| Corrected setting pre-check | Manual fulfilment selected; automatic archive remains enabled; no unsaved settings | `Don't fulfill any of the order's line items automatically` remained selected. Automatic archive remained enabled. | Passed | None. |
| Sandbox payment | One PayFast sandbox-only success; no live money or real credentials | One R179 PayFast sandbox payment was completed through the official sandbox flow. | Passed | PayFast browser return remained processing after completion; do not retry. Investigate the return behaviour separately if needed. |
| Shopify order creation | Exactly one new test order | Shopify created `#1002` (safe ID `7578508296295`) on 2026-07-12 at approximately 18:19 SAST. The order banner identifies it as a test order. | Passed | None. |
| Financial status | Paid | Shopify shows Paid for R179 ZAR. | Passed | None. |
| Fulfilment status | Unfulfilled | Shopify shows `Unfulfilled` with no fulfilment action taken. | Passed | Keep unfulfilled until a future, separately approved manual fulfilment test. |
| Open/archive state | Operationally visible and not prematurely archived | `#1002` remained visible in Shopify Orders and was not archived. Shopify also displays its standard `Complete` header state alongside Paid, while the fulfilment state remains explicitly Unfulfilled. | Passed | No completion or archive action was taken; use the explicit fulfilment status for the manual-CJ decision. |
| Tracking | No tracking | No tracking number or carrier was present. | Passed | None. |
| Order confirmation | Customer order-confirmation event generated | Shopify timeline states that an order-confirmation email was sent. Actual mailbox delivery was not inspected. | Passed | Verify controlled mailbox delivery separately if required; do not resend. |
| Shipping confirmation | No shipping-confirmation event | No shipping-confirmation event appeared in the Shopify timeline. | Passed | None. |
| PayFast transaction | Exactly one matching successful sandbox transaction | Shopify timeline records one R179 payment processed on Payfast. | Passed | Do not expose or store the provider reference. |
| Duplicate-order check | No duplicate paid or pending order | Orders index showed the one new `#1002` test order; no second Phase 12I order or payment attempt was made. Historical `#1001` remained separate. | Passed | None. |
| Abandoned-checkout separation | Earlier abandoned checkout remains separate and unrecovered | The retest used a new checkout that produced `#1002`; no abandoned checkout was recovered or altered. | Passed | No further action in this phase. |
| CJ workflow readiness | Paid, Unfulfilled, no tracking, no premature shipping confirmation, and available for manual review | `#1002` meets the required pre-CJ manual-review state. No CJ supplier order or fulfilment service action occurred. | Passed | Manual supplier fulfilment, tracking, and shipping-notification testing each require separate approval. |

### Phase 12I Order Summary

- Shopify order: `#1002`.
- Safe Shopify order ID: `7578508296295`.
- Created: 2026-07-12 at approximately 18:19 SAST.
- Test indicator: true.
- Product: Desk Cable Organiser, quantity 1.
- Financial status: Paid.
- Fulfilment status: Unfulfilled.
- Operational state: visible in Shopify Orders; not prematurely archived. Shopify displays a `Complete` header state, but the separate fulfilment state is explicitly Unfulfilled.
- Gateway: Payfast in test mode.
- Transaction evidence: one successful simulated Payfast payment for R179 ZAR.
- Subtotal: R79.
- Shipping: Standard, R100.
- Tax display: R10.30 included, shown as VAT 15%.
- Total: R179 ZAR.
- Tracking: none.
- Customer order confirmation: generated in the Shopify timeline; delivery unverified.
- Customer shipping confirmation: not generated.

### Phase 12I Strict No-Change Confirmation

- Exactly one simulated Shopify order, `#1002`, was created under the explicit approval.
- No live money moved and no real financial credentials were used.
- Order `#1001` was not edited, unarchived, cancelled, refunded, fulfilled, tagged, annotated, or otherwise changed.
- No manual fulfilment, delivery, shipping, completion, archive, cancellation, refund, or tracking action was taken on order `#1002`. Shopify's displayed `Complete` header state was observed alongside its explicit Unfulfilled fulfilment status.
- No notification was resent and no message body or mailbox was opened.
- No CJ supplier order was created.
- No automatic-fulfilment, archive, notification, provider, shipping, tax, market, product, page, menu, Contact, policy, app, or theme setting was changed.
- PayFast test mode remained enabled. PayPal and all other payment settings were unchanged.

## Phase 12J PayFast Sandbox Refund Validation

Phase 12J was continued on 2026-07-12 after Shopify CLI authorization was completed against the permanent store domain. Shopify pre-refund verification passed: `#1002` was a test order, Paid, Unfulfilled, refundable for R179, and had one successful PayFast Sale. The Desk Cable Organiser line was refundable at quantity 1, and `Shop location` was available for the approved restock.

The first mutation attempt was rejected before execution because the current Shopify Admin API requires an `@idempotent` key for `refundCreate`. It created no refund. The second, schema-validated request used a unique idempotency key and created exactly one Shopify refund record and one corresponding R179 PayFast refund transaction. The provider transaction is currently `PENDING`; Shopify therefore continues to show the order as Paid and total refunded as R0. No second refund was attempted.

| Validation area | Before | Action | After | Result | Follow-up |
| --- | --- | --- | --- | --- | --- |
| Pre-refund financial state | Paid; R179 total; R0 refunded | Read-only Shopify Admin and API verification | Paid before submission | Passed | None. |
| Refundable amount | R179 available | Verified against the order record | Refundable before submission; no longer refundable after the one request | Passed | Do not submit another refund. |
| Refund composition | One R79 Desk Cable Organiser plus R100 Standard shipping | Submitted one full-refund request with full shipping and quantity 1 | One R179 PayFast refund transaction created | Submitted; pending provider completion | Await PayFast sandbox finalization; do not retry. |
| Refund destination | Original successful PayFast test Sale | Submitted with the original Sale as parent transaction | One PayFast refund transaction references the original payment | Passed; pending | None. |
| Shopify refund transaction | None | `refundCreate` submitted once with a unique idempotency key | One R179 PayFast Refund transaction, status `PENDING` | Created | Do not issue a second refund. |
| PayFast refund relationship | One original sandbox Sale; no refund | Requested refund through original PayFast payment | One Sale and one pending Refund appear in Shopify | Pending | Confirm completion through Shopify/PayFast before treating the refund as final. |
| Final financial state | Paid | One refund request submitted | Paid; total refunded R0 while provider refund is pending | Pending | Re-check only after PayFast updates the transaction. |
| Fulfilment and tracking | Unfulfilled; no tracking | No fulfilment or tracking action | Unfulfilled; no tracking | Passed | None. |
| Inventory restock | No restock yet | Restock at Shop location requested with `CANCEL` restock type | Shopify marked the line non-refundable; inventory quantity could not be independently read because the CLI token lacks `read_products` | Partially verified | Do not change inventory. Reauthorize with `read_products` only if an independent inventory read is required. |
| Customer refund notification | None | Normal customer notification requested | Notification event not independently verified | Pending verification | Do not resend. |
| Archive state | Operationally visible | No manual archive action | Paid and Unfulfilled; no archive action observed | Passed | A later archive caused by a final full refund would be downstream behaviour, not a manual action. |
| Duplicate-refund check | No refund exists | One idempotent request submitted | One refund record and one pending Refund transaction | Passed | None. |
| CJ workflow state | No CJ action | No supplier or fulfilment activity | No CJ action | Passed | None. |
| Live-money confirmation | No live money | PayFast test-mode refund request only | No live money moved | Passed | None. |

### Phase 12J Strict No-Change Confirmation

- Only one approved R179 PayFast sandbox refund request was submitted. The initial non-idempotent API request was rejected before execution; the idempotent request created one Pending refund transaction.
- No new order or payment was created.
- No fulfilment, cancellation, tracking, CJ order, or notification resend occurred.
- No provider, shipping, tax, market, product-policy, inventory-policy, page, menu, Contact, app, policy, or theme setting changed.
- No live money moved and no financial credentials were used or stored.

## Part 1: PayFast Setup And Testing — Historical Phase 12B Snapshot

The following table records the earlier Phase 12B state and is superseded by the Phase 12C current-state section above.

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

## Part 4: Launch Blocker Update — Historical Phase 12B Snapshot

The PayFast rows below record the earlier Phase 12B state. Use the Phase 12C validation table for the current provider and testing status.

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
| Live payment completed | No | One PayFast sandbox payment was completed in Phase 12E. It was simulated; no live money moved. |
| Shipping setting changed | No | No zone, rate, origin, market, or delivery profile was changed. |

## Tests Completed

- Confirmed PayFast is active, connected to the Get Yours store, and in test mode.
- Confirmed Visa, Mastercard, PayFast Instant EFT, Zapper, and Payflex are enabled; Mobicred is disabled.
- Confirmed PayFast, PayPal, and the Test Payment Gateway appear separately at checkout.
- Confirmed checkout payment presentation is readable on desktop and at 400 x 800 mobile size.
- Recorded the original Phase 12C PayFast processing failure, which occurred before provider redirect.
- Reproduced the handoff once in Phase 12D; Shopify redirected successfully to PayFast's official sandbox with no console error.
- Confirmed Orders remained empty. One abandoned checkout was generated automatically because the sandbox payment was intentionally left incomplete.
- Completed exactly one PayFast sandbox payment in Phase 12E for R179; the earlier handoff error did not recur.
- Verified Shopify order #1001 in Phase 12F: test order, Paid, one successful PayFast Sale transaction, and no duplicate order.
- Confirmed Shopify automatically marked the test order Fulfilled, Complete, and Archived and generated a shipping-confirmation event.
- Confirmed R179 remains available for refund to the original PayFast payment without entering an amount or issuing a refund.
- Identified the Phase 12G root cause: global automatic line-item fulfilment, shipment notification, and automatic archive settings are enabled.
- Confirmed fulfilment actor Shopify, service Manual, location Shop location, and no tracking.
- Ruled out PayFast, product classification, app-managed fulfilment, Shopify Flow, custom locations, and Desk Cable Organiser-specific configuration.
- Corrected the global automatic line-item fulfilment setting in Phase 12H and verified after reload that `Don't fulfill any of the order's line items automatically` remains selected.
- Confirmed automatic archive remains enabled. The shipment-notification control was unchanged and is conditionally hidden while automatic fulfilment is disabled.
- Completed the approved Phase 12I post-correction PayFast sandbox retest: Shopify created exactly one new test order, `#1002`, for R179 and recorded it as Paid and Unfulfilled.
- Confirmed the Phase 12I order remains operationally visible, has no tracking, has no shipping-confirmation event, and has one matching PayFast payment event.
- Confirmed the corrected manual CJ pre-fulfilment workflow passes: payment is captured while the physical item remains available for manual review.
- Completed Shopify CLI authorization against the permanent store domain `tdaqk1-nv.myshopify.com` for the approved order and inventory workflow.
- Submitted one idempotent Phase 12J PayFast sandbox refund request for R179, covering the Desk Cable Organiser and Standard shipping. Shopify created one refund record and one PayFast Refund transaction.
- Confirmed the Phase 12J refund transaction is Pending, not duplicated; the order remains Paid and Unfulfilled, with no tracking or CJ action.
- Observed Standard at R100 and Express at R150 for a R79 subtotal.
- Observed Standard still at R100 for a R715 subtotal and free for a R864 subtotal.
- Confirmed the R500 announcement is not aligned with checkout behaviour.
- Confirmed no live payment, configuration change, page publication, menu wiring, or external order occurred.

## Tests Not Completed

- Official PayFast simulated failed-payment flow.
- Provider-level cancellation flow after a successful redirect.
- Actual customer mailbox delivery and merchant new-order email delivery verification.
- Completion of the submitted PayFast sandbox refund. It remains Pending, so Shopify has not yet marked the order Refunded or reported R179 as settled.
- Independent inventory readback after the requested restock; the current CLI authorization lacks `read_products`.
- Customer refund-notification event and controlled mailbox delivery verification.
- PayFast sandbox return/redirect behaviour after a successful payment; Shopify recorded the result even though the sandbox browser page remained processing.
- A separately approved manual fulfilment, tracking, and legitimate shipping-notification workflow test.
- Checkout tests for a second South African province and an unsupported international address.
- 360 px and 430 px payment-page rechecks after the handoff issue is resolved.

## Recommended Next Approval

Exactly one PayFast sandbox post-correction retest order has been created and verified. Do not repeat a successful payment without separate approval.

The Phase 12H correction is complete: `Don't fulfill any of the order's line items automatically` remains selected after reload. Automatic archive remains enabled; it is not a substitute for fulfilment and should remain unchanged unless separately approved.

The corrected manual CJ pre-fulfilment workflow has passed: `#1002` is Paid and Unfulfilled, has no tracking, has no premature shipping-confirmation event, and created no CJ supplier order. Its one approved sandbox refund is now Pending with PayFast. Do not issue another refund, fulfil the order, change shipping, or modify any other configuration.

After the retest, the official failed-payment, provider-cancellation, and sandbox-refund workflows each require their own approval. Shipping-rate and R500-announcement decisions remain independent.

Two independent launch decisions also remain required:

1. Confirm whether the current `Standard` R100 and `Express` R150 rates and displayed delivery estimates are operationally approved.
2. Approve free Standard shipping over R500 after margin review, or approve a later change/removal of the R500 announcement. Checkout currently charges Standard at R715 and makes it free at R864, consistent with the configured R770 threshold rather than the advertised R500 threshold.

First, use a read-only follow-up to confirm whether PayFast finalizes the existing Pending refund. Do not resubmit it. After it reaches a terminal state, the official failed-payment, provider-cancellation, and any remaining refund workflow each require separate approval. A manual fulfilment, tracking, and customer shipping-notification test also remains separate. Page publication, menu wiring, Contact changes, policy changes, CJ fulfilment, and theme changes remain excluded.
