# LP-1 Customer Support Operations Pack

## Merchant Confirmation Checklist

- Monitored support inbox and backup inbox: Merchant confirmation required.
- Shopify sender email and merchant-notification recipient: Merchant confirmation required.
- Inbox access, support owner, escalation owner, support hours, and response target: Merchant confirmation required.
- Identity-verification, refund escalation, delivery-exception, and record-retention procedures: Merchant confirmation required.
- Staff must never request card or bank details through email, social media, or a contact form.

## Reusable Response Templates

Use only after the facts in the individual order are verified. Do not promise delivery or refund settlement times.

| Situation | Approved starting wording |
| --- | --- |
| Order received | `We have received your order and will review the order details before fulfilment.` |
| Payment failed | `We could not confirm payment for this order. Please check the payment option shown at checkout or contact us with your order details.` |
| Payment pending | `Your payment is still being processed. We will confirm the order once the payment provider reports a completed status.` |
| Address correction | `Please send the corrected delivery details as soon as possible. We will confirm whether the order can still be updated.` |
| Cancellation before CJ order | `We are reviewing your cancellation request before any supplier commitment is made.` |
| Cancellation after CJ order | `Your cancellation request is under review because supplier processing may already have started.` |
| Supplier order placed | `Your order is being processed with the supplier. We will share an update when verified tracking is available.` |
| Tracking not available | `Tracking is not yet available for this order. We will update you once a valid tracking reference is received.` |
| Tracking supplied | `Tracking is now available for your order. Please use the supplied reference for the latest delivery progress.` |
| Delivery delayed | `We are reviewing the delivery update with the fulfilment route and will share a further update when confirmed.` |
| Out of stock after order | `The item is currently unavailable from the supplier. We are reviewing the available options for your order.` |
| Supplier cost/route issue | `We are reviewing a fulfilment issue affecting this order and will confirm the available next steps.` |
| Incorrect/damaged/missing item | `Please share your order number and clear photos where relevant. We will review the issue before confirming next steps.` |
| Refund submitted | `Your refund has been submitted to the original payment method where applicable.` |
| Refund pending | `The payment provider is still processing your refund. We will confirm once the provider reports a completed status.` |
| Refund completed | `The payment provider has reported the refund as completed. Your bank or payment method may show the update according to its own processing cycle.` |
| Refund issue | `We are investigating the refund status with the payment process and will provide a further update once confirmed.` |
| Escalation acknowledgement | `We have received your escalation and are reviewing the order details with the relevant team.` |

## Controlled Mailbox Test Plan

Requires later approval and synthetic test data only: customer order confirmation, merchant new-order notification, refund notification, shipping confirmation, and supported failed-delivery notification. Record generated event, mailbox delivery, timestamp, and safe outcome. Do not resend notifications during testing.
