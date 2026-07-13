# LP-3B.5 Controlled Contact-Form Verification

## Scope

Two synthetic Contact-form attempts were separately authorized: an initial automated attempt and one human-hCaptcha follow-up. No Contact content, recipient configuration, Shopify Admin setting, page, policy, menu, payment, shipping, order, refund, fulfilment, CJ, theme or live-store state was changed.

## Initial Test Record

| Item | Result |
| --- | --- |
| Page used | Development-theme preview: `/pages/contact` |
| Attempt timestamp | 2026-07-13 03:31:29 SAST |
| Synthetic name | Get Yours QA |
| Synthetic message subject | `[TEST] Get Yours Contact Form Verification` |
| Customer/order/payment data | None used |
| Form labels | Name, Email, Phone number and Comment were visible and labelled. |
| Attempt count | One initial attempt. No retry was made under the initial approval. |
| Storefront result | No success message or redirect appeared after the single Send action. |
| Form state | Name, email and comment remained visible in the rendered form after the attempt. |
| Challenge state | `Protected by hCaptcha` appeared after the Send action. No CAPTCHA was solved. |
| Console result | No warning or error was captured. |
| Network result | No safe HTTP failure was observed from the available storefront inspection. |

## Approved Human-hCaptcha Follow-Up

The merchant separately approved one follow-up attempt and agreed to complete hCaptcha manually.

| Item | Result |
| --- | --- |
| Follow-up attempt timestamp | 2026-07-13 03:53:24 SAST |
| Form data | Same synthetic name and harmless launch-readiness message; no customer, order or payment data. |
| hCaptcha | Completed manually by the merchant. |
| Post-hCaptcha result | Shopify displayed `Your connection needs to be verified before you can proceed`. |
| Page title | `Verifying your connection...` |
| Resulting URL | Local development preview `/contact#ContactForm` |
| Contact success message | None. |
| Console result | No warning or error was captured. |
| Submission conclusion | Shopify connection verification blocked the local development proxy before a Contact submission was accepted. |

## Classification

**Environment-blocked; not classified as a broken or failed Contact form.** The Contact page rendered and the merchant completed hCaptcha, but Shopify's second connection-verification layer did not accept the POST through `127.0.0.1`. The form submission, storefront acknowledgement and mailbox routing were therefore not tested.

No additional submission is authorized under LP-3B.5. Any further test requires separate explicit approval and should avoid treating the local-preview connection-verification result as a mailbox failure.

## Merchant Mailbox Result

The merchant confirmed that no LP-3B.5 test message was received at `info@getyours.online`. The merchant also supplied evidence that the mailbox can send and receive ordinary test email through Outlook. This separates mailbox health from the local-proxy limitation. Because Shopify did not accept the Contact POST, Inbox/Junk routing was not tested.

| Check | Result |
| --- | --- |
| Inbox/Junk result | Not tested; Shopify did not accept the Contact submission. |
| Mailbox send/receive capability | Active; independently verified by the merchant. |
| Shopify Contact-form delivery | Unverified. |
| Storefront acknowledgement | Not tested. |
| Spam-routing conclusion | Not tested. |

## Follow-Up

1. Retain this as a local-preview environment limitation, not a Contact-form or mailbox defect.
2. Obtain separate approval before another synthetic form submission or any anti-spam/configuration change.
3. A future controlled test should use an approved Shopify-hosted storefront path or normal merchant browser context and still stop if Shopify presents another verification barrier.
4. Keep Contact and support-page publication blocked pending a completed controlled form test and privacy/legal review.

## Strict No-Change Confirmation

LP-3B.5 performed two separately approved synthetic storefront attempts: the initial hCaptcha-blocked attempt and one human-hCaptcha follow-up that Shopify connection verification blocked through the local proxy. No Contact POST was accepted, and no Shopify configuration, content, menu, policy, payment, shipping, order, refund, fulfilment, CJ, theme or live-store mutation occurred.
