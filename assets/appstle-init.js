(function (window, k) {
    if (!window.AppstleIncluded && (!urlIsProductPage() || 'V1' === 'V2')) {
      window.AppstleIncluded = true;
      appstleLoadScript = function (src, callback) {
        var script = document.createElement("script");
        script.charset = "utf-8";
            script.defer = true;
        script.src = src;
        script.onload = script.onreadystatechange = function () {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            script = k;
            callback && callback();
          }
        };
            document.getElementsByTagName("body")[0].appendChild(script)
      };


      appstleLoadScript("https://cdn.shopify.com/s/files/1/0665/5000/6018/t/21/assets/appstle-subscription.js?v=1678557265");


      window.RS = Window.RS || {};
      RS.Config = {
        "selectors": {
            "payment_button_selectors": "form[action$='/cart/add'] .shopify-payment-button",
            "subscriptionLinkSelector": "#MainContent .customer.account > div:nth-child(2) > div:nth-child(2) > h2",
            "atcButtonPlacement": "BEFORE",
            "subscriptionLinkPlacement": "BEFORE",
            "cartRowSelector": "",
            "cartLineItemSelector": "",
            "cartLineItemPerQuantityPriceSelector": "",
            "cartLineItemTotalPriceSelector": "",
            "cartLineItemSellingPlanNameSelector": "",
            "cartSubTotalSelector" : "",
            "cartLineItemPriceSelector": "",
        },
        "enableCartWidgetFeature": "false",
        "useUrlWithCustomerId": "false",
        "atcButtonSelector": ".product-form__buttons",
        "moneyFormat": "{% raw %}${{amount}}{% endraw %}",
        "oneTimePurchaseText": "One-Time Purchase ",
        "shop": "wagashiwith.myshopify.com",
        "deliveryText": "delivery",
        "purchaseOptionsText": "Purchase Options",
        "manageSubscriptionButtonText": "Manage Subscription",
        "subscriptionOptionText": "Subscribe and save",
        "sellingPlanSelectTitle": "DELIVERY FREQUENCY",
        "subscriptionPriceDisplayText": "",
        "tooltipTitle": "Subscription detail",
        "showTooltipOnClick": "false",
        "tooltipDesctiption": "<strong>Have complete control of your subscriptions<\/strong><br\/><br\/>Skip, reschedule, edit, or cancel deliveries anytime, based on your needs.",
        "tooltipDescriptionOnPrepaidPlan": "<b>Prepaid Plan Details<\/b><\/br> Total price: {{totalPrice}} ( Price for every delivery: {{pricePerDelivery}})",
        "tooltipDescriptionOnMultipleDiscount": "<b>Discount Details<\/b><\/br> Initial discount is {{discountOne}} and then {{discountTwo}}",
        "tooltipDescriptionCustomization": "{{{defaultTooltipDescription}}} <\/br>  {{{prepaidDetails}}} <\/br> {{{discountDetails}}}",
        "orderStatusManageSubscriptionTitle": "Subscription",
        "orderStatusManageSubscriptionDescription": "Continue to your account to view and manage your subscriptions. Please use the same email address that you used to buy the subscription.",
        "orderStatusManageSubscriptionButtonText": "Manage your subscription",
        "subscriptionOptionSelectedByDefault" : true,
        "totalPricePerDeliveryText" : "{{prepaidPerDeliveryPrice}}",
        "memberOnlySellingPlansJson": {},
        "nonMemberOnlySellingPlansJson": {},
        "sellingPlansJson": [{"frequencyCount":1,"frequencyInterval":"MONTH","billingFrequencyCount":1,"billingFrequencyInterval":"MONTH","frequencyName":"Monthly","frequencyDescription":"Monthly pay for monthly delivery. Auto renew.","discountOffer":6.25,"afterCycle1":0,"discountType":"PERCENTAGE","discountEnabled":true,"discountEnabledMasked":true,"id":"gid://shopify/SellingPlan/1789264130","frequencyType":"ON_SPECIFIC_DAY","specificDayValue":1,"specificDayEnabled":true,"cutOff":31,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/1789264130","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false,"formFieldJson":"null","appstleCycles":[]},{"frequencyCount":1,"frequencyInterval":"MONTH","billingFrequencyCount":3,"billingFrequencyInterval":"MONTH","frequencyName":"Monthly Delivery/ Prepaid 3 mo.","frequencyDescription":"Prepaid three-month monthly subscriptions, where your payment will be made every three months for the monthly product you will receive in the following three months. Auto renew.","discountOffer":10.93,"afterCycle1":0,"discountType":"PERCENTAGE","discountEnabled":true,"discountEnabledMasked":true,"id":"gid://shopify/SellingPlan/1789296898","frequencyType":"ON_SPECIFIC_DAY","specificDayValue":1,"specificDayEnabled":true,"cutOff":31,"prepaidFlag":"true","idNew":"gid://shopify/SellingPlan/1789296898","planType":"ADVANCED_PREPAID","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false,"memberOnly":false,"nonMemberOnly":false,"formFieldJson":"null","appstleCycles":[]},{"frequencyCount":1,"frequencyInterval":"MONTH","billingFrequencyCount":5,"billingFrequencyInterval":"MONTH","frequencyName":"Monthly Delivery/ Prepaid 6 mo.","frequencyDescription":"Prepaid semi-annual monthly subscriptions, where your payment will be made every six months for the monthly product you will receive in the following six months. Auto renew.","discountOffer":15.62,"afterCycle1":0,"discountType":"PERCENTAGE","discountEnabled":true,"discountEnabledMasked":true,"id":"gid://shopify/SellingPlan/1789329666","frequencyType":"ON_SPECIFIC_DAY","specificDayValue":1,"specificDayEnabled":true,"cutOff":31,"prepaidFlag":"true","idNew":"gid://shopify/SellingPlan/1789329666","planType":"ADVANCED_PREPAID","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false,"memberOnly":false,"nonMemberOnly":false,"formFieldJson":"null","appstleCycles":[]},{"frequencyCount":1,"frequencyInterval":"MONTH","billingFrequencyCount":12,"billingFrequencyInterval":"MONTH","frequencyName":"Monthly Delivery/ Prepaid 12 mo.","frequencyDescription":"Prepaid annual monthly subscriptions, where your payment will be made every twelve months for the monthly product you will receive in the following twelve months. Auto renew.","discountOffer":21.87,"afterCycle1":0,"discountType":"PERCENTAGE","discountEnabled":true,"discountEnabledMasked":true,"id":"gid://shopify/SellingPlan/1789362434","frequencyType":"ON_SPECIFIC_DAY","specificDayValue":1,"specificDayEnabled":true,"cutOff":31,"prepaidFlag":"true","idNew":"gid://shopify/SellingPlan/1789362434","planType":"ADVANCED_PREPAID","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false,"memberOnly":false,"nonMemberOnly":false,"formFieldJson":"null","appstleCycles":[]},{"frequencyCount":2,"frequencyInterval":"MONTH","billingFrequencyCount":2,"billingFrequencyInterval":"MONTH","frequencyName":"Subscription / Bills every 2 months","frequencyDescription":"Pay each time for two-month-cycle delivery. Auto renew.","discountOffer":4.0,"afterCycle1":0,"discountType":"FIXED","discountEnabled":true,"discountEnabledMasked":true,"id":"gid://shopify/SellingPlan/1860108546","frequencyType":"ON_SPECIFIC_DAY","specificDayValue":1,"specificDayEnabled":true,"cutOff":31,"prepaidFlag":"false","idNew":"gid://shopify/SellingPlan/1860108546","planType":"PAY_AS_YOU_GO","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false,"memberOnly":false,"nonMemberOnly":false,"formFieldJson":"null","appstleCycles":[]},{"frequencyCount":2,"frequencyInterval":"MONTH","billingFrequencyCount":12,"billingFrequencyInterval":"MONTH","frequencyName":"Subscription / Annual Billing","frequencyDescription":"Annual payment plan, with products delivered six times a year on a 2-month subscription cycle. Better price per delivery than the Pay-As-You-Go plan.","discountOffer":60.0,"afterCycle1":0,"discountType":"FIXED","discountEnabled":true,"discountEnabledMasked":true,"id":"gid://shopify/SellingPlan/1860239618","frequencyType":"ON_SPECIFIC_DAY","specificDayValue":1,"specificDayEnabled":true,"cutOff":31,"prepaidFlag":"true","idNew":"gid://shopify/SellingPlan/1860239618","planType":"ADVANCED_PREPAID","deliveryPolicyPreAnchorBehavior":"ASAP","freeTrialEnabled":false,"memberOnly":false,"nonMemberOnly":false,"formFieldJson":"null","appstleCycles":[]}],
        "widgetEnabled": true,
        "showTooltip" : false,
        "sortByDefaultSequence": true,
        "showSubOptionBeforeOneTime": false,
        "showStaticTooltip": false,
        "showAppstleLink": false,
        "sellingPlanTitleText" : "{{sellingPlanName}} ({{sellingPlanPrice}}\/delivery)",
        "oneTimePriceText" : "{{price}}",
        "selectedPayAsYouGoSellingPlanPriceText" : "{{price}}",
        "selectedPrepaidSellingPlanPriceText" : " {{TotalPrice}}",
        "selectedDiscountFormat" : "SAVE {{selectedDiscountPercentage}}",
        "manageSubscriptionBtnFormat" : "<a href='apps\/subscriptions' class='appstle_manageSubBtn' ><button class='btn' style='padding: 2px 20px'>Manage Subscription<\/button><a><br><br>",
        "manageSubscriptionUrl" : "apps\/subscriptions",
        "appstlePlanId": 163,
        "showCheckoutSubscriptionBtn": false,
        "disableLoadingJquery": false,
        "widgetEnabledOnSoldVariant": "false",
        "switchRadioButtonWidget": true,
        "appstlePlanName": "BUSINESS",
        "appstlePlanFeatures": {
	"subscriptionOrderAmount": 30000.0,
	"analytics": true,
	"enableSubscriptionManagement": true,
	"enableDunningManagement": true,
	"enableCustomerPortalSettings": true,
	"enableShippingProfiles": true,
	"enableProductSwapAutomation": true,
	"enableAdvancedSellingPlans": true,
	"enableSummaryReports": true,
	"enableCustomEmailDomain": true,
	"enableWidgetPlacement": true,
	"enableIntegrations": true,
	"enableSmsAlert": false,
	"enableCustomEmailHtml": true,
	"enableCancellationManagement": true,
	"enableBundling": true,
	"enableAutomation": true,
	"enableQuickActions": false,
	"enableExternalApi": false,
	"enableCartWidget": true,
	"enableAutoSync": true,
	"webhookAccess": false,
	"accessWidgetDesignOptions": true,
	"accessSubscriptionActivityLogs": true,
	"accessBuildABox": true,
	"accessResendEmail": true,
	"accessKlaviyoContactSync": true,
	"accessOneTimeProductUpsells": true,
	"accessAdvanceSubscriptionPlanOptions": true,
	"accessSplitContract": true,
	"accessDiscountOnCancellationAttempt": true,
	"accessQuickCheckout": false,
	"accessSubscriberLoyaltyFeatures": true,
	"accessBundling": true,
	"accessManualSubscriptionCreation": true,
	"accessAppstleMenu": false
},
        "formMappingAttributeName": "",
        "formMappingAttributeSelector": "",
        "quickViewModalPollingSelector": "",
        "scriptLoadDelay": "0",
        "formatMoneyOverride": "false",
        "appstle_app_proxy_path_prefix": "apps\/subscriptions",
        "updatePriceOnQuantityChange": "",
        "widgetParentSelector": "",
        "quantitySelector": "",
        "enableAddJSInterceptor": "false",
        "reBuyEnabled": "false",
        "loyaltyDetailsLabelText": "",
        "loyaltyPerkDescriptionText": "",
        "widgetTemplateHtml": `{% raw %}<div id="appstle-widget-template">
  <div class="appstle_sub_widget" id="appstle_subscription_widget{{widgetId}}">
<div class="appstle_widget_title">{{{purchaseOptionsText}}}</div>
      <div class="widgetSellingPlanWrapper">
{{^requires_selling_plan}}
{{^showSubOptionBeforeOneTime}}
        <div class="appstle_input_wrapper">
          <input type="radio" id="appstle_selling_plan_label_1{{widgetId}}" name="selling_plan" value="" class="appstleSellingPlan{{widgetId}}" {{^subscriptionOptionSelectedDefault}}checked{{/subscriptionOptionSelectedDefault}}>
          <label for="appstle_selling_plan_label_1{{widgetId}}">
            {{oneTimePuchaseText}}
      <span  class="appstle_lowercase appstle_sellingPlan_price appstle_onetime_amount">{{{oneTimePuchaseAmount}}}{{{oneTimeFrequencyText}}}</span>
          </label>
          
        </div>
{{/showSubOptionBeforeOneTime}}
{{/requires_selling_plan}}
        {{#sellingPlanVariants}}
           <div class="appstle_input_wrapper">
      <span class="appstle_sellingPlan_discountText">{{formattedDiscountText}}</span>
             <input type="radio" class="appstleSellingPlan{{widgetId}}" id="{{sellingPlanId}}" value="{{sellingPlanId}}" name="selling_plan" {{#isChecked}}checked{{/isChecked}}>
{{^prepaidFlag}}
             <label for="{{sellingPlanId}}">
                {{{name}}}
<div class="appstle_span_wrapper">
        <span class="appstle_lowercase appstle_sellingPlan_price appstle_price_block">{{{formattedPrice}}}<span>
<span class="appstle_lowercase appstle_sellingPlan_price appstle_formattext_block">/{{#isFrequencySubsequent}}{{frequencyCount}} {{/isFrequencySubsequent}}{{{sellingPlanFrequencyText}}}{{#isFrequencySubsequent}}{{/isFrequencySubsequent}}</span>
</div>            
 </label>
{{/prepaidFlag}}
{{#prepaidFlag}}
<label for="{{sellingPlanId}}">
                {{{name}}}
<div class="appstle_span_wrapper">
        <span class="appstle_lowercase appstle_sellingPlan_price appstle_price_block">{{{formattedPrepaidPerDeliveryPriceText}}}</span>
<span class="appstle_lowercase appstle_sellingPlan_price appstle_discount_block appstle_formattedPrepaidPerDeliveryPriceText">(total: {{{totalPrice}}})</span>
</div>             
</label>
{{/prepaidFlag}}
      
           </div>
        {{/sellingPlanVariants}}
{{^requires_selling_plan}}
{{#showSubOptionBeforeOneTime}}
        <div class="appstle_input_wrapper">
          <input type="radio" id="appstle_selling_plan_label_1{{widgetId}}" name="selling_plan" value="" class="appstleSellingPlan{{widgetId}}" {{^subscriptionOptionSelectedDefault}}checked{{/subscriptionOptionSelectedDefault}}>
          <label for="appstle_selling_plan_label_1{{widgetId}}">
            {{oneTimePuchaseText}}
      <span  class="appstle_lowercase appstle_sellingPlan_price appstle_onetime_amount">{{{oneTimePuchaseAmount}}}{{{oneTimeFrequencyText}}}</span>
          </label>
          
        </div>
{{/showSubOptionBeforeOneTime}}
{{/requires_selling_plan}}
    </div>
{{#showStaticTooltip}}
<div class="appstle_tooltip_wrapper_static"> {{{toolTipDescription}}}</div>
{{/showStaticTooltip}}
{{^showStaticTooltip}}

    <div data-appstle-icon="" class="appstle_tooltip_wrapper">
    <svg width="90" height="90" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" class="tooltip_subscription_svg">
    <path
      d="M45 0C20.1827 0 0 20.1827 0 45C0 69.8173 20.1827 90 45 90C69.8173 90 90 69.8174 90 45C90.0056 44.6025 89.9322 44.2078 89.7839 43.8389C89.6357 43.47 89.4156 43.1342 89.1365 42.8511C88.8573 42.568 88.5247 42.3432 88.158 42.1897C87.7912 42.0363 87.3976 41.9573 87 41.9573C86.6024 41.9573 86.2088 42.0363 85.842 42.1897C85.4753 42.3432 85.1427 42.568 84.8635 42.8511C84.5844 43.1342 84.3643 43.47 84.2161 43.8389C84.0678 44.2078 83.9944 44.6025 84 45C84 66.5748 66.5747 84 45 84C23.4253 84 6 66.5747 6 45C6 23.4254 23.4253 6 45 6C56.1538 6 66.3012 10.5882 73.4375 18H65.4062C65.0087 17.9944 64.614 18.0678 64.2451 18.2161C63.8762 18.3643 63.5405 18.5844 63.2573 18.8635C62.9742 19.1427 62.7494 19.4753 62.596 19.842C62.4425 20.2088 62.3635 20.6024 62.3635 21C62.3635 21.3976 62.4425 21.7912 62.596 22.158C62.7494 22.5247 62.9742 22.8573 63.2573 23.1365C63.5405 23.4156 63.8762 23.6357 64.2451 23.7839C64.614 23.9322 65.0087 24.0056 65.4062 24H79.8125C80.6081 23.9999 81.3711 23.6838 81.9337 23.1212C82.4963 22.5586 82.8124 21.7956 82.8125 21V6.59375C82.821 6.18925 82.7476 5.78722 82.5966 5.41183C82.4457 5.03644 82.2205 4.69545 81.9344 4.40936C81.6483 4.12327 81.3073 3.898 80.9319 3.7471C80.5565 3.5962 80.1545 3.52277 79.75 3.53125C79.356 3.53941 78.9675 3.62511 78.6067 3.78344C78.2458 3.94177 77.9197 4.16963 77.6469 4.45402C77.3741 4.73841 77.16 5.07375 77.0168 5.44089C76.8737 5.80803 76.8042 6.19977 76.8125 6.59375V12.875C68.6156 4.86282 57.3081 0 45 0ZM43.75 20.75C43.356 20.7582 42.9675 20.8439 42.6067 21.0022C42.2458 21.1605 41.9197 21.3884 41.6469 21.6728C41.3741 21.9572 41.16 22.2925 41.0168 22.6596C40.8737 23.0268 40.8042 23.4185 40.8125 23.8125V47.375C40.8116 47.7693 40.8883 48.16 41.0385 48.5246C41.1886 48.8892 41.4092 49.2207 41.6875 49.5L54.0938 61.9375C54.6573 62.5011 55.4217 62.8177 56.2188 62.8177C57.0158 62.8177 57.7802 62.5011 58.3438 61.9375C58.9073 61.3739 59.224 60.6095 59.224 59.8125C59.224 59.0155 58.9073 58.2511 58.3438 57.6875L46.8125 46.1875V23.8125C46.821 23.408 46.7476 23.006 46.5966 22.6306C46.4457 22.2552 46.2205 21.9142 45.9344 21.6281C45.6483 21.342 45.3073 21.1168 44.9319 20.9658C44.5565 20.8149 44.1545 20.7415 43.75 20.75Z"
    ></path>
    </svg>
    <span class="appstle_tooltip_title">{{{tooltipTitle}}}</span>
    <div class="appstle_tooltip">
    <div class="appstle_tooltip_content">
      {{{toolTipDescription}}}
    </div>
    <div class="appstle_tooltip_appstle">
      <a href="{{companyWebsite}}" class="appstle_link" target="_blank">
      {{companyName}}
      </a>
    </div>
    </div>

  </div>
{{/showStaticTooltip}}
<style>
.widgetSellingPlanWrapper {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
    grid-auto-rows: 1fr;
    margin-bottom: 6px;
}

.widgetSellingPlanWrapper input {
    display: none;
}

.widgetSellingPlanWrapper label {
    border-radius: 10px;
    border: 1px solid #ff609d;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-family: monospace;
    display: block;
    height: 100%;
    width: 100%;
    font-weight: bolder;
    text-align: center;
cursor: pointer;
}

.widgetSellingPlanWrapper input:checked+label {
    background-color: #fff4f8;
}
.appstle_lowercase {
    text-transform: lowercase;
}


.appstle_input_wrapper {
    position: relative;
}

span.appstle_sellingPlan_discountText {
    position: absolute;
    font-size: 8px;
    background-color: #724cf9;
    color: white;
    border-radius: 3px;
    padding: 1px 18px;
    left: 50%;
    display: block;
    transform: translate(-50%, -50%);
    white-space: nowrap;
}

span.appstle_sellingPlan_discountText:empty {
    display: none;
}

span.appstle_lowercase.appstle_sellingPlan_price {
    font-size: 10px;
    font-weight: normal;
}
div.appstle_span_wrapper{
	display: flex;
	justify-content: center;
}

#appstle_subscription_widget0 .appstle_tooltip_wrapper {
	font-family: monospace;
    font-size: 13px;
}
</style>
</div>
{% endraw %}`,
        "bundle": {},
        "labels": "{\"appstle.subscription.wg.yearsFrequencyTextV2\":\"Years\",\"appstle.subscription.wg.weekFrequencyTextV2\":\"Week\",\"appstle.subscription.wg.oneTimePurchaseTextV2\":\"One Time Purchase\",\"appstle.subscription.wg.loyaltyPerkDescriptionTextV2\":\"{{#isDiscountTypeFreeProduct}}<div style='display: flex;'><div style='height: 60px; width: 60px; flex-shrink: 0; margin-right: 10px;'><img style='width: 100%' src={{{featured_image}}}><\/img><\/div><div>After {{{billingCycleBlock}}} orders,<span style='color: #ffc000;font-weight: 700;';> get a FREE {{freeProductName}} <\/span><\/div><div>{{\/isDiscountTypeFreeProduct}}{{#isDiscountTypePercentage}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>{{{discount}}}% OFF your entire order<\/span><\/span>.{{\/isDiscountTypePercentage}}{{#isDiscountTypeShipping}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>shipping at {{{formatDiscountedPrice}}}<\/span><\/span>.{{\/isDiscountTypeShipping}}{{#isDiscountTypeFixed}}After <span class='appstle-loyalty-billing-cycle'><span class='appstle-loyalty-billing-cycle-count'>{{{billingCycleBlock}}}<\/span> order<\/span>, <span class='appstle-loyalty-discount'>get <span style='color: #ffc000;font-weight: 700;';>{{{formatDiscountedPrice}}} OFF your entire order<\/span><\/span>.{{\/isDiscountTypeFixed}}\",\"appstle.subscription.wg.unsubscribeFrequencyTextV2\":\"unsubscribe\",\"appstle.subscription.wg.weeksFrequencyTextV2\":\"Weeks\",\"appstle.subscription.wg.weeklyLabelTextV2\":\"Weekly\",\"appstle.subscription.wg.oneTimeFrequencyTextV2\":\"\",\"appstle.subscription.wg.dayFrequencyTextV2\":\"day\",\"appstle.subscription.wg.allowFulfilmentCountViaPropertiesV2\":\"false\",\"appstle.subscription.wg.monthsFrequencyTextV2\":\"\",\"appstle.subscription.wg.deliveryEveryFrequencyTextV2\":\"Delivery Every\",\"appstle.subscription.wg.subscribeAndSaveInitalV2\":\"Subscribe & save\",\"appstle.subscription.wg.offFrequencyTextV2\":\"Off\",\"appstle.subscription.wg.yearFrequencyTextV2\":\"Year\",\"appstle.subscription.wg.daysFrequencyTextV2\":\"Days\",\"appstle.subscription.wg.monthlyLabelTextV2\":\"Monthly\",\"appstle.subscription.wg.prepayLabelTextV2\":\"Prepay\",\"appstle.subscription.wg.subscribeAndSaveSuccessV2\":\"Subscribe success\",\"appstle.subscription.wg.monthFrequencyTextV2\":\"\",\"appstle.subscription.wg.selectDeliverOptionV2\":\"select deliver option\",\"appstle.subscription.wg.yearlyLabelTextV2\":\"Yearly\"}",
        "css": {
            "appstle_subscription_widget": {
                "margin-top": "" ,
                "margin-bottom": "10px",
            },

            "appstle_subscription_wrapper": {
                "border-width": "5px",
                "border-color": "",
            },

            "appstle_circle": {
                "border-color": "",
            },

            "appstle_dot": {
                "background-color": "",
            },

            "appstle_select": {
                "padding-top": "",
                "padding-bottom": "",
                "padding-left": "",
                "padding-right": "",
                "border-width": "",
                "border-style": "",
                "border-color": "",
                "border-radius": "",
            },

            "tooltip_subscription_svg": {
                "fill": "",
            },

            "appstle_tooltip": {
                "color": "",
                "background-color": "",
            },

            "appstle_tooltip_border_top_color": {
                "border-top-color": "",
            },

            "appstle_subscription_final_price": {
                "color": "#332a16",
            },
            "appstle_widget_text_color": {
                "color": "#332a16",
            },
            "appstle_selected_background": {
                "background": "transparent",
            },
            "customCSS": "\/*Edited by Appstle support*\/\n.appstle_tooltip_content {\n    display: none;\n}\n\n#appstle_subscription_widget0 .appstle_tooltip_wrapper {\n    font-family: monospace;\n    font-size: 13px;\n    display: none;\n}\n\n\/*Edited by JapanBite*\/\n.widgetSellingPlanWrapper label {\n    border-radius: 10px !important;\n    border: 1px solid #C5A457 !important;\n    padding: 0.5rem !important;\n    justify-content: center !important;\n    align-items: center !important;\n    font-size: 18px !important;\n    font-family: sans-serif !important;\n    display: block !important;\n    height: 85px !important;\n    max-width: 100% !important;\n    font-weight: normal!important;\n    text-align: left !important;\n    cursor: pointer !important;\n}\n.widgetSellingPlanWrapper {\n    display: block !important;\n    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;\n    gap: 1.5rem !important;\n    grid-auto-rows: 1fr !important;\n    margin-bottom: 6px !important;\n}\n.appstle_input_wrapper {\n    position: relative !important;\n    padding: 10px 0px !important;\n}\nspan.appstle_lowercase.appstle_sellingPlan_price {\n    font-size: 18px !important;\n    font-weight: normal!important;\n    font-family: sans-serif !important;\n    color: #332A16 !important;\n    margin-right: 12px;\nmargin-left:-10px!important;\n}\n.widgetSellingPlanWrapper input:checked+label {\n    background-color: #F0E1BD !important;\n}\n.appstle_span_wrapper {\n    float: left !important;\n}\nspan.appstle_sellingPlan_discountText {\n    position: absolute !important;\n    font-size: 14px !important;\n    background-color: #C5A457 !important;\n    color: white !important;\n    border-radius: 3px !important;\n    padding: 0px 16px !important;\n    left: 85% !important;\n    display: block !important;\n    transform: translate(-50%, -50%) !important;\n    white-space: nowrap !important;\n    height: 25px !important;\n    line-height: 25px !important;\n}\n#appstle_subscription_widget0 {\n    width: 100% !important;\n    text-align: left !important;\n    margin-top: 17px !important;\n    clear: both !important;\n    max-width: 400px !important;\n    margin-bottom: 40px !important;\n}\n\n#appstle_subscription_widget0 > div.widgetSellingPlanWrapper > div:nth-child(3) > label > div > span > span > span#appstle_subscription_widget0 > div.widgetSellingPlanWrapper > div:nth-child(3) > label > div > span > span > span, #appstle_subscription_widget0 > div.widgetSellingPlanWrapper > div:nth-child(3) > label > div > span > span > span, #appstle_subscription_widget0 > div.widgetSellingPlanWrapper > div:nth-child(2) > label > div > span > span > span{\ndisplay:none!important;\n}\n#appstle_subscription_widget0 > div.widgetSellingPlanWrapper > div:nth-child(1) > label > span {\n    position: absolute;\n    margin-top: 46px!important;\n    margin-left: -174px!important;\n}\n#appstle_subscription_widget0 > div.widgetSellingPlanWrapper > div:nth-child(2) > label > div > span{\n    position: absolute;\n    margin-top: 20px;\n    margin-left: 88px;\n}\n#appstle_subscription_widget0 > div.widgetSellingPlanWrapper > div:nth-child(2) > label > div > span {\n    margin-top: 46px!important;\n    margin-left: 67px!important;\n}\n\n.appstle_lowercase {\n    text-transform: capitalize!important;\n}\n\n#appstle_subscription_widget0 > div.widgetSellingPlanWrapper > div:nth-child(3) > label > div {\n    margin-top: 15px!important;\n    margin-left: 10px!important;\n}\n",
            "elementCSS": "[]",
            "customerPortalCss": ".as-skip-order {\ndisplay: none!important;\n}",
            "priceSelector": "span.price-item.price-item--regular",
            "landingPagePriceSelector": "",
            "quickViewClickSelector": "",
            "badgeTop": "",
            "pricePlacement": "BEFORE"
        }
      };

    }

    function urlIsProductPage() {
    // return null != decodeURIComponent(window.location.pathname).match(/\/products\/(([a-zA-Z0-9]|[\-\.\_\~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[\ud83c\ud83d\ud83e][\ud000-\udfff]){1,})\/?/)
    return decodeURIComponent(window.location.pathname).includes('/products/');
    }
  }
)(window);

