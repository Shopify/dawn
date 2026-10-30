# Cellife 10% welcome offer

Confirmed scope: supplements AND diagnostic test kits. Use the existing Shopify
customer/subscriber list and native theme signup form. No subscriber import or
custom email backend is needed. Admin settings below have not been created or
activated by code. The owner subsequently confirmed the discount and automation
are active and ready. The preview theme signup is enabled with CELLIFE10; actual
inbox delivery and checkout eligibility still require an end-to-end store test.

## 1. Create the eligibility segment

Shopify admin → Customers → Segments → Create segment.
Save as **Welcome offer — subscribed, no orders**:

```text
email_subscription_status = 'SUBSCRIBED' AND number_of_orders = 0
```

This is the checkout eligibility rule, not just an email audience. The signup
form creates/updates a Shopify customer before purchase. At checkout the customer
must use the email associated with that eligible profile. A limit of one use per
customer alone would not restrict the code to first orders.

Existing subscribed customers with zero orders can be eligible too. Existing
customers with an order do not meet the segment. Shopify segmentation excludes
test/deleted orders from order calculations; use known real-order customer
profiles when checking returning-customer exclusion.

## 2. Create the discount

Shopify admin → Discounts → Create discount → Amount off orders:

- Method: Discount code.
- Proposed code: **CELLIFE10**. This is a proposed name, not an existing code.
- Value: 10%.
- Eligibility: the segment created above.
- Maximum uses: limit to one use per customer; no total-use cap required.
- Minimum purchase: none.
- Combinations: leave other discount classes unchecked.
- Covers both supplements and test kits; amount-off-order discounts do not
  discount shipping. Do not add a product-category exclusion for test kits.
- Save with the intended start date. No expiry has been promised in the copy.

## 3. Create one welcome automation

On desktop: Apps → Messaging. If missing, install Shopify's own Messaging app.
Verify the sender email/domain using Shopify's provided authentication steps.
Keep Shopify's required business-address and unsubscribe footer intact.

Automations → Create automation → **Welcome new subscribers with a discount
email**. Use the single email initially, not a multi-email series.

In Edit workflow, keep the subscriber/consent and online-store signup conditions,
and add/confirm that the customer has zero orders before sending the discount.
This prevents a newly subscribing past purchaser receiving an unusable first-order
promotion. The discount segment separately enforces eligibility at checkout.
If double opt-in is enabled, wait for confirmed subscription.

Insert/select the exact saved discount in the email. Use a discount link/button
pointing to the store's shopping page, so Shopify can carry the code to checkout.
Do not create another discount through the email editor with different eligibility.
Save the automation without turning it on until the content/settings are checked.

### Email draft

Subject: **A little welcome from Cellife — 10% off**
Preview text: **Your first-order welcome offer is inside.**

> Welcome to Cellife.
>
> Thanks for joining us. Enjoy 10% off your first order of supplements or
> diagnostic test kits with code **CELLIFE10**.
>
> [Shop Cellife]
>
> For subscribed customers placing their first order. One use per customer.
> Cannot be combined with other discount codes. Shipping is excluded.

Replace the draft code if a different code was saved. The email's required
unsubscribe/business footer is supplied by Shopify, not this draft.

## 4. Connect the existing theme section

After the backend discount/automation are configured and tested:
Theme Editor → Footer → **Cellife first-order offer**.

- Enter the exact saved code in Configured Shopify discount code.
- Check Shopify discount configured and tested.
- Keep the headline 10% off your first order.
- Suggested eligibility copy: “For email subscribers placing their first order.
  If asked, confirm your subscription by email before using the code. Eligibility
  and offer terms are checked at checkout.”

The current section shows the shared code after a successful native signup.
The automation additionally delivers it by email. Already-subscribed customers
might not retrigger the welcome automation by submitting again; the on-screen
code still lets eligible zero-order subscribers use the offer.

The theme form adds `newsletter,cellife-first-order` customer tags. Tags can help
reporting, but subscription consent and order count determine discount eligibility.
An unpublished theme does not isolate shared Shopify customers, discounts or
email automations. Only run real signup tests with an email you control.

## 5. Verify before enabling the storefront offer

- Send a test email from the editor to your own address; inspect sender, footer,
  code, links and mobile display. A test email alone does not test the trigger.
- Turn on the automation when ready, then use one fresh email you control for
  the actual signup path; confirm opt-in if required and check delivery.
- Confirm the subscriber profile is in the eligible segment before checkout.
- At checkout use that same email. Check a supplement, a diagnostic kit and a
  mixed cart. Verify 10% on merchandise, not shipping, and discount combinations.
- Check that an existing customer with a real order cannot use the code.
- Check the code cannot be used again after a qualifying order.
- Enable the preview signup section only after those checks pass. Publishing the
  live theme remains a separate action.

The new-subscriber automation is not a request to broadcast to the existing list.
Any campaign to existing subscribers should be prepared separately.

## Official references

- Customer segments and eligibility:
  https://help.shopify.com/en/manual/discounts/managing-discounts
- Segment filter syntax:
  https://help.shopify.com/en/manual/customers/customer-segmentation/reference-guide/components
- Amount-off discount settings:
  https://help.shopify.com/en/manual/discounts/discount-types/percentage-fixed-amount
- Welcome automation setup:
  https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging/marketing-automations/create
- Sender email authentication:
  https://help.shopify.com/en/manual/intro-to-shopify/initial-setup/setup-your-email
