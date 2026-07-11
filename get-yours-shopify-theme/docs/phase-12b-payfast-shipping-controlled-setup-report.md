# Phase 12B PayFast And Shipping Controlled Setup Report

## Scope And Outcome

Phase 12B began with a controlled inspection attempt on 2026-07-10 at approximately 19:36 SAST and continued with authenticated Shopify Admin inspection on 2026-07-11.

The initial inspection could not reach the authenticated Shopify Admin or PayFast configuration surfaces. The Shopify Admin browser session presented the Shopify login page, the Shopify CLI shipping-scope authorization was not completed, and the public storefront redirected to its password page. After the merchant signed in, the continuation inspected Shopify Payments, Shipping and Delivery, and Markets without changing them. The PayFast dashboard remained signed out.

Current outcome after Phase 12D: **PayFast is active in Shopify and test mode is enabled. The earlier handoff failure did not recur: one controlled reproduction redirected successfully to PayFast's official sandbox. The sandbox payment was intentionally left incomplete, so no order, paid transaction, or live payment was created.**

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
| Live payment completed | No | Checkout was reached in PayFast test mode, but no order or provider transaction was created and no live money moved. |
| Shipping setting changed | No | No zone, rate, origin, market, or delivery profile was changed. |

## Tests Completed

- Confirmed PayFast is active, connected to the Get Yours store, and in test mode.
- Confirmed Visa, Mastercard, PayFast Instant EFT, Zapper, and Payflex are enabled; Mobicred is disabled.
- Confirmed PayFast, PayPal, and the Test Payment Gateway appear separately at checkout.
- Confirmed checkout payment presentation is readable on desktop and at 400 x 800 mobile size.
- Recorded the original Phase 12C PayFast processing failure, which occurred before provider redirect.
- Reproduced the handoff once in Phase 12D; Shopify redirected successfully to PayFast's official sandbox with no console error.
- Confirmed Orders remained empty. One abandoned checkout was generated automatically because the sandbox payment was intentionally left incomplete.
- Observed Standard at R100 and Express at R150 for a R79 subtotal.
- Observed Standard still at R100 for a R715 subtotal and free for a R864 subtotal.
- Confirmed the R500 announcement is not aligned with checkout behaviour.
- Confirmed no live payment, configuration change, page publication, menu wiring, or external order occurred.

## Tests Not Completed

- Successful PayFast simulated payment and test order creation.
- Official PayFast simulated failed-payment flow.
- Provider-level cancellation flow after a successful redirect.
- Customer confirmation email and merchant notification checks.
- Test-mode refund flow.
- Checkout tests for a second South African province and an unsupported international address.
- 360 px and 430 px payment-page rechecks after the handoff issue is resolved.

## Recommended Next Approval

The read-only handoff investigation is complete. No configuration correction is currently justified because the failure did not recur and the controlled attempt reached PayFast sandbox successfully.

The next approval should authorize one end-to-end PayFast **sandbox-only** payment using a fresh low-value cart and synthetic customer details. That test would be allowed to create one simulated Shopify order so order status, customer and merchant notifications, and test refund eligibility can be verified. It must not disable test mode or use live payment credentials.

If the handoff error recurs, stop immediately and contact PayFast support with the timestamp, store domain, and sanitized checkout context. Do not send request payloads, authorization data, merchant credentials, or customer details.

Two independent launch decisions also remain required:

1. Confirm whether the current `Standard` R100 and `Express` R150 rates and displayed delivery estimates are operationally approved.
2. Approve free Standard shipping over R500 after margin review, or approve a later change/removal of the R500 announcement. Checkout currently charges Standard at R715 and makes it free at R864, consistent with the configured R770 threshold rather than the advertised R500 threshold.

After a successful sandbox order, continue with the official failed-payment, cancellation, email/notification, and refund tests in PayFast test mode. Page publication, menu wiring, Contact changes, policy changes, CJ fulfilment, and theme changes remain excluded.
