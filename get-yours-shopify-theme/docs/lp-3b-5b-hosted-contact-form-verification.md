# LP-3B.5B Hosted Contact-Form Verification

## Scope

The merchant manually submitted exactly one synthetic Contact message through the normal hosted storefront. Codex did not operate the merchant browser or access the mailbox. No Contact page, recipient configuration, Shopify Admin setting, menu, policy, theme, payment, shipping, order, refund, fulfilment or CJ state was changed.

## Merchant-Reported Result

| Item | Result |
| --- | --- |
| Evidence timestamp | Approximately 2026-07-13 04:06 SAST, based on the merchant-provided screenshot. |
| Page used | `https://getyours.online/pages/contact` |
| Resulting URL | `https://getyours.online/pages/contact?contact_posted=true#ContactForm` |
| Submission accepted | Yes. |
| Exact storefront message | `Thanks for contacting us. We'll get back to you as soon as possible.` |
| Form cleared | Yes; the screenshot shows empty form fields after submission. |
| Unexpected redirect | No; the Contact page retained the form anchor and added `contact_posted=true`. |
| Message received | Not found at `info@getyours.online` at the time of the merchant report. |
| Received timestamp | Not applicable. |
| Subject/body/sender verification | Not possible because no message was found. |

## Classification

**C. Submitted successfully but not found.** Shopify accepted the hosted Contact submission and rendered a success acknowledgement, but the merchant did not receive the message at the confirmed support mailbox.

This closes the storefront-rendering, hosted-submission and success-state checks. It does not close delivery or Inbox/Junk routing.

## Acknowledgement Wording Finding

The rendered Shopify message is not the merchant-approved neutral acknowledgement. `We'll get back to you as soon as possible` creates a response expectation, while LP-3B.4 approved no guaranteed response-time commitment. The customer-facing acknowledgement must be reviewed and aligned before Contact launch readiness can close.

## Remaining Technical Checks

1. Inspect the Shopify Contact notification destination and sender configuration in a separately approved read-only Admin phase.
2. Confirm Inbox and Junk/Spam after allowing for normal delivery delay.
3. Review sender-domain authentication and mailbox filtering only with separate approval and without exposing credentials.
4. After any approved correction, run one separately approved hosted synthetic retest.
5. Complete Contact privacy presentation review.

## LP-3B.5C Routing Finding

Read-only inspection found that Shopify's native Contact destination is the configured Sender email, which is a different private mailbox rather than `info@getyours.online`. The theme implementation is native and valid. See `docs/lp-3b-5c-contact-routing-inspection.md`.

## Strict No-Change Confirmation

LP-3B.5B records one merchant-operated synthetic hosted submission and its reported result. No Shopify configuration, content, menu, policy, theme, payment, shipping, order, refund, fulfilment or CJ mutation occurred.
