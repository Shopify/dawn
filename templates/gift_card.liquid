{% layout none %}

<!doctype html>
<html lang="{{ request.locale.iso_code }}">
  <head>
    <script src="{{ 'vendor/qrcode.js' | shopify_asset_url }}" defer></script>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="theme-color" content="{{ settings.color_background }}">
    <link rel="canonical" href="{{ canonical_url }}">

    {%- if settings.favicon != blank -%}
      <link rel="icon" type="image/png" href="{{ settings.favicon | image_url: width: 32, height: 32 }}">
    {%- endif -%}

    {%- unless settings.type_header_font.system? -%}
      <link rel="preconnect" href="https://fonts.shopifycdn.com" crossorigin>
    {%- endunless -%}

    {%- assign formatted_balance = gift_card.balance | money_without_trailing_zeros | strip_html -%}

    <title>{{ 'gift_cards.issued.title' | t: value: formatted_balance, shop: shop.name }}</title>

    <meta name="description" content="{{ 'gift_cards.issued.subtext' | t }}">

    {{ content_for_header }}

    {%- liquid
      assign body_font_bold = settings.type_body_font | font_modify: 'weight', 'bold'
      assign body_font_italic = settings.type_body_font | font_modify: 'style', 'italic'
      assign body_font_bold_italic = body_font_bold | font_modify: 'style', 'italic'
    %}

    {% style %}
      {{ settings.type_body_font | font_face: font_display: 'swap' }}
      {{ body_font_bold | font_face: font_display: 'swap' }}
      {{ body_font_italic | font_face: font_display: 'swap' }}
      {{ body_font_bold_italic | font_face: font_display: 'swap' }}
      {{ settings.type_header_font | font_face: font_display: 'swap' }}

      :root {
        --font-body-family: {{ settings.type_body_font.family }}, {{ settings.type_body_font.fallback_families }};
        --font-body-style: {{ settings.type_body_font.style }};
        --font-body-weight: {{ settings.type_body_font.weight }};

        --font-heading-family: {{ settings.type_header_font.family }}, {{ settings.type_header_font.fallback_families }};
        --font-heading-style: {{ settings.type_header_font.style }};
        --font-heading-weight: {{ settings.type_header_font.weight }};

        --font-body-scale: {{ settings.body_scale | divided_by: 100.0 }};
        --font-heading-scale: {{ settings.heading_scale | times: 1.0 | divided_by: settings.body_scale }};

        {% assign scheme = settings.color_schemes | first %}
        --color-background: {{ scheme.settings.background.red }},{{ scheme.settings.background.green }},{{ scheme.settings.background.blue }};
        {% if scheme.settings.background_gradient != empty -%}
          --gradient-background: {{ scheme.settings.background_gradient }};
        {%- else -%}
          --gradient-background: {{ scheme.settings.background }};
        {%- endif %}
        --color-foreground: {{ scheme.settings.text.red }},{{ scheme.settings.text.green }},{{ scheme.settings.text.blue }};
        --color-button: {{ scheme.settings.button.red }},{{ scheme.settings.button.green }},{{ scheme.settings.button.blue }};
        --color-button-label: {{ scheme.settings.button_label.red }},{{ scheme.settings.button_label.green }},{{ scheme.settings.button_label.blue }};
        --color-secondary-button-label: {{ scheme.settings.secondary_button_label.red }},{{ scheme.settings.secondary_button_label.green }},{{ scheme.settings.secondary_button_label.blue }};
        --color-shadow: {{ scheme.settings.shadow.red }},{{ scheme.settings.shadow.green }},{{ scheme.settings.shadow.blue }};

        {% assign badge_scheme_id = settings.sold_out_badge_color_scheme | append: '' %}
        {% assign badge_scheme = settings.color_schemes[badge_scheme_id] %}
        --color-soldout-badge: {{ badge_scheme.settings.background.red }},{{ badge_scheme.settings.background.green }},{{ badge_scheme.settings.background.blue }};
        --color-soldout-badge-label: {{ badge_scheme.settings.text.red }},{{ badge_scheme.settings.text.green }},{{ badge_scheme.settings.text.blue }};

        --page-width: {{ settings.page_width | divided_by: 10 }}rem;
        --page-width-margin: {% if settings.page_width == '1600' %}2{% else %}0{% endif %}rem;

        --buttons-radius: {{ settings.buttons_radius }}px;
        --buttons-border-width: {% if settings.buttons_border_opacity > 0 %}{{ settings.buttons_border_thickness }}{% else %}0{% endif %}px;
        --buttons-border-opacity: {{ settings.buttons_border_opacity | divided_by: 100.0 }};
        --buttons-shadow-opacity: {{ settings.buttons_shadow_opacity | divided_by: 100.0 }};
        --buttons-shadow-horizontal-offset: {{ settings.buttons_shadow_horizontal_offset }}px;
        --buttons-shadow-vertical-offset: {{ settings.buttons_shadow_vertical_offset }}px;
        --buttons-shadow-blur-radius: {{ settings.buttons_shadow_blur }}px;
        --buttons-border-offset: {% if settings.buttons_radius > 0 or settings.buttons_shadow_opacity > 0 %}0.3{% else %}0{% endif %}px;

        --inputs-radius: {{ settings.inputs_radius }}px;
        --inputs-border-width: {{ settings.inputs_border_thickness }}px;
        --inputs-border-opacity: {{ settings.inputs_border_opacity | divided_by: 100.0 }};
        --inputs-shadow-opacity: {{ settings.inputs_shadow_opacity | divided_by: 100.0 }};
        --inputs-shadow-horizontal-offset: {{ settings.inputs_shadow_horizontal_offset }}px;
        --inputs-shadow-vertical-offset: {{ settings.inputs_shadow_vertical_offset }}px;
        --inputs-shadow-blur-radius: {{ settings.inputs_shadow_blur }}px;
      }
    {% endstyle %}

    {%- unless settings.type_body_font.system? -%}
      <link rel="preload" as="font" href="{{ settings.type_body_font | font_url }}" type="font/woff2" crossorigin>
    {%- endunless -%}
    {%- unless settings.type_header_font.system? -%}
      <link rel="preload" as="font" href="{{ settings.type_header_font | font_url }}" type="font/woff2" crossorigin>
    {%- endunless -%}

    {{ 'template-giftcard.css' | asset_url | stylesheet_tag }}
  </head>

  <body class="gradient gift-card">
    <header>
      <div class="gift-card__price">
        <h1>
          {% if settings.currency_code_enabled %}
            {{ gift_card.balance | money_with_currency }}
          {% else %}
            {{ gift_card.balance | money }}
          {% endif %}
        </h1>
        {%- if gift_card.enabled == false or gift_card.expired -%}
          <p class="badge badge--expired">{{ 'gift_cards.issued.expired' | t }}</p>
        {%- endif -%}
      </div>
      {% if gift_card.expires_on %}
        {%- assign gift_card_expiration_date = gift_card.expires_on | date: '%B %e, %Y' -%}
        <p class="gift-card__text">
          {{ 'gift_cards.issued.expiration_date' | t: expires_on: gift_card_expiration_date }}
        </p>
      {% endif %}
    </header>

    <main>
      <div class="gift-card__image-wrapper">
        {%- if settings.logo != blank -%}
          {%- assign logo_alt = settings.logo.alt | default: shop.name | escape -%}
          {{ settings.logo | image_url: width: 570 | image_tag: class: 'gift-card__image', alt: logo_alt }}
        {%- else %}
          <img
            class="gift-card__image"
            src="{{ 'gift-card/card.svg' | shopify_asset_url }}"
            alt=""
            height="{{ 570 | divided_by: 1.5 }}"
            width="570"
          >
        {%- endif %}
      </div>
      <h2>{{ shop.name }}</h2>
      <div class="gift-card__text-wrapper">
        <p class="gift-card__text">{{ 'gift_cards.issued.how_to_use_gift_card' | t }}</p>
      </div>
      <p id="gift-card-code" class="gift-card__number">{{ gift_card.code | format_code }}</p>
      <div class="gift-card__qr-code" data-identifier="{{ gift_card.qr_identifier }}"></div>
      {%- if gift_card.pass_url -%}
        <a href="{{ gift_card.pass_url }}" class="gift_card__apple-wallet no-print">
          <img
            src="{{ 'gift-card/add-to-apple-wallet.svg' | shopify_asset_url }}"
            width="120"
            height="40"
            alt="{{ 'gift_cards.issued.add_to_apple_wallet' | t }}"
            loading="lazy"
          >
        </a>
      {%- endif -%}
      <div class="gift-card__buttons no-print">
        <span class="gift-card__copy-success form__message" role="status"></span>
        <template>
          {%- render 'icon-success' -%}
          {{ 'gift_cards.issued.copy_code_success' | t }}
        </template>
        <button class="button gift-card__copy-button">{{ 'gift_cards.issued.copy_code' | t }}</button>
        <a
          href="{{ shop.url }}"
          class="button button--secondary"
          target="_blank"
          rel="noopener"
          aria-describedby="a11y-new-window-message"
        >
          {{ 'gift_cards.issued.shop_link' | t }}
        </a>
      </div>
    </main>

    <div hidden>
      <span id="a11y-new-window-message">{{ 'accessibility.link_messages.new_window' | t }}</span>
    </div>
  </body>
</html>

<script>
  var string = { qrImageAlt: {{ 'gift_cards.issued.qr_image_alt' | t | json }} };
  document.addEventListener('DOMContentLoaded', function() {
   new QRCode( document.querySelector('.gift-card__qr-code'), {
    text: document.querySelector('.gift-card__qr-code').dataset.identifier,
    width: 72,
    height: 72,
    imageAltText: string.qrImageAlt
    });
  });
  var template = document.getElementsByTagName("template")[0];
  var clonedTemplate = template.content.cloneNode(true);
  var isMessageDisplayed = false
  document
  .querySelector('.gift-card__copy-button')
  .addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById('gift-card-code').innerText).then(function () {
      if (!isMessageDisplayed) {
        document.querySelector('.gift-card__copy-success').appendChild(clonedTemplate);
        isMessageDisplayed = true
      }
    });
  });
</script>
