# LP-3B.5C Contact Notification Routing And Message-Source Inspection

## Executive Summary

The read-only inspection found that Shopify is not currently routing native Contact-form submissions to `info@getyours.online`. Shopify's store/contact email and the Notifications > Sender email field all use the same private, non-public address. Shopify documents that native online-store Contact submissions are delivered to the store's Sender email.

A separate sender warning is visible because the configured sender uses a public email domain. Shopify displays a `store+<shop-id>@shopifyemail.com` fallback identity to customers. This outbound sender/authentication warning does not, by itself, prove the cause of any inbound Contact-delivery failure.

The theme implementation is Dawn-native and correct. The current success message comes from the English Dawn locale, not Shopify Admin or a section setting.

## Prior LP-3B.5B Evidence

- Hosted Contact submission was accepted.
- The form cleared and `contact_posted=true` appeared in the URL.
- Shopify rendered a success message.
- No message was found at `info@getyours.online` at the time of the merchant report.
- The public mailbox is independently verified as functional.

## Shopify Email Configuration

| Item | Read-only finding |
| --- | --- |
| Store email | A private non-public address is configured. It is not `info@getyours.online`. |
| Admin API `contactEmail` | The same private non-public address. |
| Sender email | The same private non-public address is visible in Notifications. |
| Customer-facing sender identity | Shopify warns that the public-domain sender cannot support custom sending and customers see a `store+<shop-id>@shopifyemail.com` fallback identity. |
| Authentication status | No branded-domain verified/pending/failed label was shown. The visible state is a public-domain limitation with fallback sender behaviour. |
| Separate Contact recipient | No separate native Contact-recipient control was visible. Shopify identifies Sender email as the Contact-form destination. |
| Approved public mailbox present | `info@getyours.online` was not present in the inspected Shopify store/contact/sender configuration. |
| Forwarding or alias | No forwarding or alias relationship was visible in the inspected Shopify interface. |

Private addresses, account details and credentials are intentionally omitted.

## Contact-Form Destination Findings

Shopify's official Help Center states that native online-store Contact-form submissions are delivered to the store's Sender email. The current expected destination is therefore the configured private non-public sender mailbox, not `info@getyours.online`.

The merchant should check that configured private mailbox's Inbox and Junk/Spam for the LP-3B.5B message before any configuration change. Codex did not access or inspect any mailbox.

No Shopify Contact delivery log was available in the inspected interface.

## Theme Implementation Findings

| Item | Finding |
| --- | --- |
| Template | `templates/page.contact.json` loads the `contact-form` section. |
| Section | `sections/contact-form.liquid` |
| Form mechanism | Native Shopify `{% form 'contact' %}` with id `ContactForm`. |
| Success state | `form.posted_successfully?` |
| Fields | Name, required email, phone and comment/message are present. |
| Custom destination | None hard-coded. Shopify controls the native destination. |
| Custom JavaScript | No Contact submission interceptor was found in theme source. |
| Anti-bot customization | None found in the Contact section or theme JavaScript. Shopify supplies platform anti-bot handling. |

The theme matches Shopify's expected native Contact implementation. Classification D does not apply.

## Success-Message Source

**Source classification: A. Dawn locale text.**

| Item | Finding |
| --- | --- |
| File | `locales/en.default.json` |
| Key | `templates.contact.form.post_success` |
| Current text | `Thanks for contacting us. We'll get back to you as soon as possible.` |
| Render point | `sections/contact-form.liquid` inside `form.posted_successfully?` |
| Theme setting | None. |
| Future change required | Yes, because current text conflicts with the approved no-guaranteed-response position. |
| Approval required | Separate theme-source/content approval. No change is authorized in LP-3B.5C. |

Approved future replacement:

> Thanks for contacting Get Yours. Your message has been received.
>
> Please keep your order number available if your enquiry relates to an order. Do not send card details, banking passwords, one-time PINs, account passwords or other sensitive payment information through this form.
>
> We will review your message and respond through the contact details you provided.

## Email-Domain Status

- The configured sender is on a public email domain rather than `getyours.online`.
- Shopify displays fallback `shopifyemail.com` sender behaviour for customer-facing outbound mail.
- No branded-domain authentication success was visible for the current sender.
- No DNS, SPF, DKIM, DMARC, sender or forwarding setting was changed.
- The sender-domain warning is evidence for a future branding/authentication correction; it is not proof of the missing inbound Contact delivery.

## Classification

**F. Multiple configuration issues found.**

1. **Confirmed routing issue:** Shopify's native Contact destination is a different private mailbox, not `info@getyours.online`.
2. **Confirmed sender warning:** public-domain sender configuration causes Shopify fallback sender behaviour.
3. **Confirmed content mismatch:** Dawn's success locale differs from the approved neutral acknowledgement.
4. **Not an issue:** the theme uses Shopify's native Contact form correctly.

## Confirmed Facts

- `info@getyours.online` is an independently working mailbox.
- Shopify's store/contact/sender configuration uses a different private address.
- Native Shopify Contact submissions are expected at the configured Sender email.
- Hosted form submission and success rendering work.
- The current success text is stored in `locales/en.default.json`.
- No separate Contact recipient or Contact delivery log was visible.

## Unresolved Questions

- Whether the LP-3B.5B message arrived at the currently configured private Sender email.
- Whether the merchant wants Shopify's Sender email and native Contact destination changed to `info@getyours.online`.
- Whether `getyours.online` sender-domain authentication is ready for Shopify CNAME/DMARC requirements.
- Whether any mailbox forwarding, quarantine or tenant filtering exists outside Shopify.
- Whether the final acknowledgement should be updated in other enabled locales after English is approved.

## Recommended Correction Plan

Treat each action as a separately approved phase:

1. **Merchant mailbox evidence:** check the currently configured private Sender mailbox Inbox/Junk for the LP-3B.5B message. Do not expose its address or credentials.
2. **Destination decision:** approve or reject changing Shopify Sender email to `info@getyours.online`. Do not apply without explicit approval.
3. **Domain-authentication plan:** if the branded sender is approved, prepare Shopify-required DNS records and Hostinger/DNS-owner steps. Do not change DNS in this phase.
4. **Acknowledgement correction:** separately approve replacing the English Dawn locale value with the approved text; review other enabled locales. Do not edit theme source in this phase.
5. **Hosted retest:** after approved corrections, submit exactly one merchant-operated synthetic Contact test and verify Inbox/Junk delivery.
6. **Support escalation:** if routing is confirmed correct but delivery remains missing, prepare a sanitized Shopify Support case with timestamp, destination class and success URL; do not include credentials or private mailbox details.

## Remaining Contact Launch Gates

- Merchant decision on the Shopify Sender email/native Contact destination.
- Branded sender-domain authentication plan and evidence.
- Confirmed Contact delivery and Inbox/Junk routing after correction.
- Approved acknowledgement implemented and retested.
- Contact privacy presentation and South African legal review.
- Backup support coverage.

## Shopify References

- [Add a Contact Us page to your store](https://help.shopify.com/en/manual/online-store/themes/customizing-themes/common-customizations/add-contact-page): native Contact submissions are sent to the store's Sender email.
- [Setting up your email](https://help.shopify.com/en/manual/intro-to-shopify/initial-setup/setup-your-email): explains Store email, Sender email, domain authentication and fallback sender behaviour.

## Strict No-Change Confirmation

LP-3B.5C used read-only Admin GraphQL, Shopify Admin UI, official Shopify documentation and local theme inspection. No Contact submission, Shopify setting, email address, notification recipient, DNS record, page, policy, menu, theme source, payment, shipping, order, refund, fulfilment or CJ state changed.
