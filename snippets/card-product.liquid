{% comment %}
  Renders a product card

  Accepts:
  - card_product: {Object} Product Liquid object (optional)
  - media_aspect_ratio: {String} Size of the product image card. Values are "square" and "portrait". Default is "square" (optional)
  - image_shape: {String} Image mask to apply to the product image card. Values are "arch", "blob", "chevronleft", "chevronright", "diamond", "parallelogram", and "round". (optional)
  - show_secondary_image: {Boolean} Show the secondary image on hover. Default: false (optional)
  - show_vendor: {Boolean} Show the product vendor. Default: false
  - show_rating: {Boolean} Show the product rating. Default: false
  - extend_height: {Boolean} Card height extends to available container space. Default: true (optional)
  - lazy_load: {Boolean} Image should be lazy loaded. Default: true (optional)
  - skip_styles: {Boolean} Don't include component styles. Useful when rendering multiple product cards in a loop. Default: false (optional)
  - quick_add: {Boolean} Show the quick add button.
  - section_id: {String} The ID of the section that contains this card.
  - horizontal_class: {Boolean} Add a card--horizontal class if set to true. Default: false (optional)
  - horizontal_quick_add: {Boolean} Changes the quick add button styles when set to true. Default: false (optional)
  - placeholder_image: {String} The placeholder image to use when no product exists. Default: 'product-apparel-2' (optional)

  Usage:
  {% render 'card-product', show_vendor: section.settings.show_vendor %}
{% endcomment %}
{%- unless skip_styles -%}
  {{ 'component-rating.css' | asset_url | stylesheet_tag }}
  {{ 'component-volume-pricing.css' | asset_url | stylesheet_tag }}

  {{ 'component-price.css' | asset_url | stylesheet_tag }}
  {{ 'quick-order-list.css' | asset_url | stylesheet_tag }}
  {{ 'quantity-popover.css' | asset_url | stylesheet_tag }}
{%- endunless -%}
{%- if card_product and card_product != empty -%}
  {%- liquid
    assign ratio = 1
    if card_product.featured_media and media_aspect_ratio == 'portrait'
      assign ratio = 0.8
    elsif card_product.featured_media and media_aspect_ratio == 'adapt'
      assign ratio = card_product.featured_media.aspect_ratio
    endif
    if ratio == 0 or ratio == null
      assign ratio = 1
    endif
  -%}
  <div class="card-wrapper product-card-wrapper underline-links-hover">
    <div
      class="
        card card--{{ settings.card_style }}
        {% if card_product.featured_media %} card--media{% else %} card--text{% endif %}
        {% if settings.card_style == 'card' %} color-{{ settings.card_color_scheme }} gradient{% endif %}
        {% if image_shape and image_shape != 'default' %} card--shape{% endif %}
        {% if extend_height %} card--extend-height{% endif %}
        {% if card_product.featured_media == nil and settings.card_style == 'card' %} ratio{% endif %}
        {% if horizontal_class %} card--horizontal{% endif %}
      "
      style="--ratio-percent: {{ 1 | divided_by: ratio | times: 100 }}%;"
    >
      <div
        class="card__inner {% if settings.card_style == 'standard' %}color-{{ settings.card_color_scheme }} gradient{% endif %}{% if card_product.featured_media or settings.card_style == 'standard' %} ratio{% endif %}"
        style="--ratio-percent: {{ 1 | divided_by: ratio | times: 100 }}%;"
      >
        {%- if card_product.featured_media -%}
          <div class="card__media{% if image_shape and image_shape != 'default' %} shape--{{ image_shape }} color-{{ settings.card_color_scheme }} gradient{% endif %}">
            <div class="media media--transparent media--hover-effect">
              {% comment %}theme-check-disable ImgLazyLoading{% endcomment %}
              <img
                srcset="
                  {%- if card_product.featured_media.width >= 165 -%}{{ card_product.featured_media | image_url: width: 165 }} 165w,{%- endif -%}
                  {%- if card_product.featured_media.width >= 360 -%}{{ card_product.featured_media | image_url: width: 360 }} 360w,{%- endif -%}
                  {%- if card_product.featured_media.width >= 533 -%}{{ card_product.featured_media | image_url: width: 533 }} 533w,{%- endif -%}
                  {%- if card_product.featured_media.width >= 720 -%}{{ card_product.featured_media | image_url: width: 720 }} 720w,{%- endif -%}
                  {%- if card_product.featured_media.width >= 940 -%}{{ card_product.featured_media | image_url: width: 940 }} 940w,{%- endif -%}
                  {%- if card_product.featured_media.width >= 1066 -%}{{ card_product.featured_media | image_url: width: 1066 }} 1066w,{%- endif -%}
                  {{ card_product.featured_media | image_url }} {{ card_product.featured_media.width }}w
                "
                src="{{ card_product.featured_media | image_url: width: 533 }}"
                sizes="(min-width: {{ settings.page_width }}px) {{ settings.page_width | minus: 130 | divided_by: 4 }}px, (min-width: 990px) calc((100vw - 130px) / 4), (min-width: 750px) calc((100vw - 120px) / 3), calc((100vw - 35px) / 2)"
                alt="{{ card_product.featured_media.alt | escape }}"
                class="motion-reduce"
                {% unless lazy_load == false %}
                  loading="lazy"
                {% endunless %}
                width="{{ card_product.featured_media.width }}"
                height="{{ card_product.featured_media.height }}"
              >
              {% comment %}theme-check-enable ImgLazyLoading{% endcomment %}

              {%- if card_product.media[1] != null and show_secondary_image -%}
                <img
                  srcset="
                    {%- if card_product.media[1].width >= 165 -%}{{ card_product.media[1] | image_url: width: 165 }} 165w,{%- endif -%}
                    {%- if card_product.media[1].width >= 360 -%}{{ card_product.media[1] | image_url: width: 360 }} 360w,{%- endif -%}
                    {%- if card_product.media[1].width >= 533 -%}{{ card_product.media[1] | image_url: width: 533 }} 533w,{%- endif -%}
                    {%- if card_product.media[1].width >= 720 -%}{{ card_product.media[1] | image_url: width: 720 }} 720w,{%- endif -%}
                    {%- if card_product.media[1].width >= 940 -%}{{ card_product.media[1] | image_url: width: 940 }} 940w,{%- endif -%}
                    {%- if card_product.media[1].width >= 1066 -%}{{ card_product.media[1] | image_url: width: 1066 }} 1066w,{%- endif -%}
                    {{ card_product.media[1] | image_url }} {{ card_product.media[1].width }}w
                  "
                  src="{{ card_product.media[1] | image_url: width: 533 }}"
                  sizes="(min-width: {{ settings.page_width }}px) {{ settings.page_width | minus: 130 | divided_by: 4 }}px, (min-width: 990px) calc((100vw - 130px) / 4), (min-width: 750px) calc((100vw - 120px) / 3), calc((100vw - 35px) / 2)"
                  alt="{{ card_product.media[1].alt | escape }}"
                  class="motion-reduce"
                  loading="lazy"
                  width="{{ card_product.media[1].width }}"
                  height="{{ card_product.media[1].height }}"
                >
              {%- endif -%}
            </div>
          </div>
        {%- endif -%}
        <div class="card__content">
          <div class="card__information">
            <h3
              class="card__heading"
              {% if card_product.featured_media == null and settings.card_style == 'standard' %}
                id="title-{{ section_id }}-{{ card_product.id }}"
              {% endif %}
            >
              <a
                href="{{ card_product.url }}"
                id="StandardCardNoMediaLink-{{ section_id }}-{{ card_product.id }}"
                class="full-unstyled-link"
                aria-labelledby="StandardCardNoMediaLink-{{ section_id }}-{{ card_product.id }} NoMediaStandardBadge-{{ section_id }}-{{ card_product.id }}"
              >
                {{ card_product.title | escape }}
              </a>
            </h3>
          </div>
          <div class="card__badge {{ settings.badge_position }}">
            {%- if card_product.available == false -%}
              <span
                id="NoMediaStandardBadge-{{ section_id }}-{{ card_product.id }}"
                class="badge badge--bottom-left color-{{ settings.sold_out_badge_color_scheme }}"
              >
                {{- 'products.product.sold_out' | t -}}
              </span>
            {%- elsif card_product.compare_at_price > card_product.price and card_product.available -%}
              <span
                id="NoMediaStandardBadge-{{ section_id }}-{{ card_product.id }}"
                class="badge badge--bottom-left color-{{ settings.sale_badge_color_scheme }}"
              >
                {{- 'products.product.on_sale' | t -}}
              </span>
            {%- endif -%}
          </div>
        </div>
      </div>
      <div class="card__content">
        <div class="card__information">
          <h3
            class="card__heading{% if card_product.featured_media or settings.card_style == 'standard' %} h5{% endif %}"
            {% if card_product.featured_media or settings.card_style == 'card' %}
              id="title-{{ section_id }}-{{ card_product.id }}"
            {% endif %}
          >
            <a
              href="{{ card_product.url }}"
              id="CardLink-{{ section_id }}-{{ card_product.id }}"
              class="full-unstyled-link"
              aria-labelledby="CardLink-{{ section_id }}-{{ card_product.id }} Badge-{{ section_id }}-{{ card_product.id }}"
            >
              {{ card_product.title | escape }}
            </a>
          </h3>
          <div class="card-information">
            {%- if show_vendor -%}
              <span class="visually-hidden">{{ 'accessibility.vendor' | t }}</span>
              <div class="caption-with-letter-spacing light">{{ card_product.vendor }}</div>
            {%- endif -%}

            <span class="caption-large light">{{ block.settings.description | escape }}</span>

            {%- if show_rating and card_product.metafields.reviews.rating.value != blank -%}
              {% liquid
                assign rating_decimal = 0
                assign decimal = card_product.metafields.reviews.rating.value.rating | modulo: 1
                if decimal >= 0.3 and decimal <= 0.7
                  assign rating_decimal = 0.5
                elsif decimal > 0.7
                  assign rating_decimal = 1
                endif
              %}
              <div
                class="rating"
                role="img"
                aria-label="{{ 'accessibility.star_reviews_info' | t: rating_value: card_product.metafields.reviews.rating.value, rating_max: card_product.metafields.reviews.rating.value.scale_max }}"
              >
                <span
                  aria-hidden="true"
                  class="rating-star"
                  style="--rating: {{ card_product.metafields.reviews.rating.value.rating | floor }}; --rating-max: {{ card_product.metafields.reviews.rating.value.scale_max }}; --rating-decimal: {{ rating_decimal }};"
                ></span>
              </div>
              <p class="rating-text caption">
                <span aria-hidden="true">
                  {{- card_product.metafields.reviews.rating.value }} /
                  {{ card_product.metafields.reviews.rating.value.scale_max -}}
                </span>
              </p>
              <p class="rating-count caption">
                <span aria-hidden="true">({{ card_product.metafields.reviews.rating_count }})</span>
                <span class="visually-hidden">
                  {{- card_product.metafields.reviews.rating_count }}
                  {{ 'accessibility.total_reviews' | t -}}
                </span>
              </p>
            {%- endif -%}

            {% render 'price', product: card_product, price_class: '', show_compare_at_price: true %}
            {%- if card_product.quantity_price_breaks_configured? -%}
              {% if card_product.variants_count == 1 and quick_add == 'bulk' %}
                {% liquid
                  assign quantity_rule = card_product.selected_or_first_available_variant.quantity_rule
                  assign has_qty_rules = false
                  if quantity_rule.increment > 1 or quantity_rule.min > 1 or quantity_rule.max != null
                    assign has_qty_rules = true
                  endif
                %}
                <quantity-popover>
                  <button class="card__information-volume-pricing-note card__information-volume-pricing-note--button card__information-volume-pricing-note--button-{{ settings.card_text_alignment }} quantity-popover__info-button--icon-only button button button--tertiary medium-hide small-hide">
                    <span class="caption">{{ 'products.product.volume_pricing.note' | t }}</span>
                  </button>
                  <button class="card__information-volume-pricing-note card__information-volume-pricing-note--button card__information-volume-pricing-note--button-{{ settings.card_text_alignment }} quantity-popover__info-button--icon-with-label button button--tertiary large-up-hide">
                    <span class="caption">{{ 'products.product.volume_pricing.note' | t }}</span>
                  </button>
              {% else %}
                <div class="card__information-volume-pricing-note">
                  <span class="caption">{{ 'products.product.volume_pricing.note' | t }}</span>
                </div>
              {% endif %}
              {% if card_product.variants_count == 1 and quick_add == 'bulk' %}
                <div
                  class="global-settings-popup quantity-popover__info"
                  tabindex="-1"
                  hidden
                  id="quantity-popover-info-{{ card_product.selected_or_first_available_variant.id }}"
                >
                  {%- if has_qty_rules -%}
                    <div class="quantity__rules caption no-js-hidden">
                      {%- if quantity_rule.increment > 1 -%}
                        <span class="divider">
                          {{- 'products.product.quantity.multiples_of' | t: quantity: quantity_rule.increment -}}
                        </span>
                      {%- endif -%}
                      {%- if quantity_rule.min > 1 -%}
                        <span class="divider">
                          {{- 'products.product.quantity.min_of' | t: quantity: quantity_rule.min -}}
                        </span>
                      {%- endif -%}
                      {%- if quantity_rule.max != null -%}
                        <span class="divider">
                          {{- 'products.product.quantity.max_of' | t: quantity: quantity_rule.max -}}
                        </span>
                      {%- endif -%}
                    </div>
                  {%- endif -%}
                  <button
                    class="button-close button button--tertiary large-up-hide"
                    type="button"
                    aria-label="{{ 'accessibility.close' | t }}"
                  >
                    {{- 'icon-close.svg' | inline_asset_content -}}
                  </button>
                  {%- if card_product.selected_or_first_available_variant.quantity_price_breaks.size > 0 -%}
                    <volume-pricing class="parent-display">
                      <ul class="list-unstyled">
                        <li>
                          <span>{{ card_product.selected_or_first_available_variant.quantity_rule.min }}+</span>
                          {%- assign price = card_product.selected_or_first_available_variant.price
                            | money_with_currency
                          -%}
                          <span>{{ 'sections.quick_order_list.each' | t: money: price }}</span>
                        </li>
                        {%- for price_break in card_product.selected_or_first_available_variant.quantity_price_breaks -%}
                          <li>
                            <span>
                              {{- price_break.minimum_quantity -}}
                              <span aria-hidden="true">+</span></span
                            >
                            {%- assign price = price_break.price | money_with_currency -%}
                            <span> {{ 'sections.quick_order_list.each' | t: money: price }}</span>
                          </li>
                        {%- endfor -%}
                      </ul>
                    </volume-pricing>
                  {%- endif -%}
                </div>
                </quantity-popover>
              {% endif %}
            {%- endif -%}
          </div>
        </div>
        {% assign product_form_id = 'quick-add-' | append: section_id | append: card_product.id %}
        {% if quick_add == 'standard' %}
          <div class="quick-add no-js-hidden">
            {%- liquid
              assign qty_rules = false
              if card_product.selected_or_first_available_variant.quantity_rule.min > 1 or card_product.selected_or_first_available_variant.quantity_rule.max != null or card_product.selected_or_first_available_variant.quantity_rule.increment > 1
                assign qty_rules = true
              endif
            -%}
            {%- if card_product.variants_count > 1 or qty_rules -%}
              <modal-opener data-modal="#QuickAdd-{{ card_product.id }}">
                <button
                  id="{{ product_form_id }}-submit"
                  type="submit"
                  name="add"
                  class="quick-add__submit button button--full-width button--secondary{% if horizontal_quick_add %} card--horizontal__quick-add animate-arrow{% endif %}"
                  aria-haspopup="dialog"
                  aria-labelledby="{{ product_form_id }}-submit title-{{ section_id }}-{{ card_product.id }}"
                  data-product-url="{{ card_product.url }}"
                >
                  {{ 'products.product.choose_options' | t }}
                  {%- if horizontal_quick_add -%}
                    <span class="icon-wrap">
                      {{- 'icon-arrow.svg' | inline_asset_content -}}
                    </span>
                  {%- endif -%}
                  {%- render 'loading-spinner' -%}
                </button>
              </modal-opener>
              <quick-add-modal id="QuickAdd-{{ card_product.id }}" class="quick-add-modal">
                <div
                  role="dialog"
                  aria-label="{{ 'products.product.choose_product_options' | t: product_name: card_product.title | escape }}"
                  aria-modal="true"
                  class="quick-add-modal__content global-settings-popup"
                  tabindex="-1"
                >
                  <button
                    id="ModalClose-{{ card_product.id }}"
                    type="button"
                    class="quick-add-modal__toggle"
                    aria-label="{{ 'accessibility.close' | t }}"
                  >
                    {{- 'icon-close.svg' | inline_asset_content -}}
                  </button>
                  <div id="QuickAddInfo-{{ card_product.id }}" class="quick-add-modal__content-info"></div>
                </div>
              </quick-add-modal>
            {%- else -%}
              <product-form data-section-id="{{ section.id }}">
                {%- form 'product',
                  card_product,
                  id: product_form_id,
                  class: 'form',
                  novalidate: 'novalidate',
                  data-type: 'add-to-cart-form'
                -%}
                  <input
                    type="hidden"
                    name="id"
                    value="{{ card_product.selected_or_first_available_variant.id }}"
                    class="product-variant-id"
                    {% if card_product.selected_or_first_available_variant.available == false %}
                      disabled
                    {% endif %}
                  >
                  <button
                    id="{{ product_form_id }}-submit"
                    type="submit"
                    name="add"
                    class="quick-add__submit button button--full-width button--secondary{% if horizontal_quick_add %} card--horizontal__quick-add{% endif %}"
                    aria-haspopup="dialog"
                    aria-labelledby="{{ product_form_id }}-submit title-{{ section_id }}-{{ card_product.id }}"
                    aria-live="polite"
                    data-sold-out-message="true"
                    {% if card_product.selected_or_first_available_variant.available == false %}
                      disabled
                    {% endif %}
                  >
                    <span>
                      {%- if card_product.selected_or_first_available_variant.available -%}
                        {{ 'products.product.add_to_cart' | t }}
                      {%- else -%}
                        {{ 'products.product.sold_out' | t }}
                      {%- endif -%}
                    </span>
                    <span class="sold-out-message hidden">
                      {{ 'products.product.sold_out' | t }}
                    </span>
                    {%- if horizontal_quick_add -%}
                      <span class="icon-wrap">
                        {{- 'icon-plus.svg' | inline_asset_content -}}
                      </span>
                    {%- endif -%}
                    {%- render 'loading-spinner' -%}
                  </button>
                {%- endform -%}
              </product-form>
            {%- endif -%}
          </div>
        {% elsif quick_add == 'bulk' %}
          {% if card_product.variants_count == 1 %}
            <quick-add-bulk
              data-min="{{ card_product.selected_or_first_available_variant.quantity_rule.min }}"
              id="quick-add-bulk-{{ card_product.selected_or_first_available_variant.id }}-{{ section.id }}"
              class="quick-add-bulk"
              data-index="{{ card_product.selected_or_first_available_variant.id }}"
            >
              {% if card_product.selected_or_first_available_variant.available == false %}
                <button
                  id="{{ product_form_id }}-submit"
                  type="submit"
                  name="add"
                  class="quick-add__submit button button--full-width button--secondary"
                  aria-labelledby="{{ product_form_id }}-submit title-{{ section_id }}-{{ card_product.id }}"
                  data-sold-out-message="true"
                  disabled
                >
                  <span>{{ 'products.product.sold_out' | t }}</span>
                  <span class="sold-out-message hidden">
                    {{ 'products.product.sold_out' | t }}
                  </span>
                </button>
              {% else %}
                {% render 'quantity-input', variant: card_product.selected_or_first_available_variant, min: 0 %}
              {% endif %}
            </quick-add-bulk>
          {% else %}
            <div class="quick-add no-js-hidden">
              {%- liquid
                assign product_form_id = 'quick-add-' | append: section_id | append: card_product.id
                assign qty_rules = false
                if card_product.selected_or_first_available_variant.quantity_rule.min > 1 or card_product.selected_or_first_available_variant.quantity_rule.max != null or card_product.selected_or_first_available_variant.quantity_rule.increment > 1
                  assign qty_rules = true
                endif
              -%}
              <modal-opener
                id="QuickBulk-{{ card_product.id }}-{{ section_id }}"
                data-modal="#QuickAddBulk-{{ card_product.id }}-{{ section.id }}"
              >
                <button
                  id="{{ product_form_id }}-submit"
                  type="submit"
                  name="add"
                  class="quick-add__submit button button--full-width button--secondary"
                  aria-haspopup="dialog"
                  aria-labelledby="{{ product_form_id }}-submit title-{{ section_id }}-{{ card_product.id }}"
                  data-product-url="{{ card_product.url }}"
                >
                  {{ 'products.product.choose_options' | t }}
                  {%- render 'loading-spinner' -%}
                </button>
              </modal-opener>
              <modal-dialog
                id="QuickAddBulk-{{ card_product.id }}-{{ section_id }}"
                class="quick-add-modal color-{{ section.settings.color_scheme }}"
              >
                <div
                  role="dialog"
                  aria-label="{{ 'products.product.choose_product_options' | t: product_name: card_product.title | escape }}"
                  aria-modal="true"
                  class="quick-add-modal__content quick-add-modal__content--bulk global-settings-popup"
                  tabindex="-1"
                >
                  <button
                    id="ModalClose-{{ card_product.id }}"
                    type="button"
                    class="quick-add-modal__toggle"
                    aria-label="{{ 'accessibility.close' | t }}"
                  >
                    {{- 'icon-close.svg' | inline_asset_content -}}
                  </button>
                  <div
                    id="QuickAddInfo-{{ card_product.id }}"
                    class="quick-add-modal__content-info quick-add-modal__content-info--bulk"
                  >
                    <div class="quick-add__content-info__media">
                      <div class="quick-add__info">
                        {%- if card_product.featured_media -%}
                          <div
                            class="quick-add__product-media"
                          >
                            <div class="quick-add__product-container global-media-settings">
                              {% comment %}theme-check-disable ImgLazyLoading{% endcomment %}
                              <img
                                srcset="
                                  {%- if card_product.featured_media.width >= 165 -%}{{ card_product.featured_media | image_url: width: 165 }} 165w,{%- endif -%}
                                  {%- if card_product.featured_media.width >= 360 -%}{{ card_product.featured_media | image_url: width: 360 }} 360w,{%- endif -%}
                                  {%- if card_product.featured_media.width >= 533 -%}{{ card_product.featured_media | image_url: width: 533 }} 533w,{%- endif -%}
                                  {%- if card_product.featured_media.width >= 720 -%}{{ card_product.featured_media | image_url: width: 720 }} 720w,{%- endif -%}
                                  {%- if card_product.featured_media.width >= 940 -%}{{ card_product.featured_media | image_url: width: 940 }} 940w,{%- endif -%}
                                  {%- if card_product.featured_media.width >= 1066 -%}{{ card_product.featured_media | image_url: width: 1066 }} 1066w,{%- endif -%}
                                  {{ card_product.featured_media | image_url }} {{ card_product.featured_media.width }}w
                                "
                                src="{{ card_product.featured_media | image_url: width: 533 }}"
                                sizes="(min-width: {{ settings.page_width }}px) {{ settings.page_width | minus: 130 | divided_by: 4 }}px, (min-width: 990px) calc((100vw - 130px) / 4), (min-width: 750px) calc((100vw - 120px) / 3), calc((100vw - 35px) / 2)"
                                alt="{{ card_product.featured_media.alt | escape }}"
                                class="motion-reduce"
                                {% unless lazy_load == false %}
                                  loading="lazy"
                                {% endunless %}
                                width="{{ card_product.featured_media.width }}"
                                height="{{ card_product.featured_media.height }}"
                              >
                              {% comment %}theme-check-enable ImgLazyLoading{% endcomment %}
                            </div>
                          </div>
                        {%- endif -%}
                        <a
                          {% if card_product == blank %}
                            role="link" aria-disabled="true"
                          {% else %}
                            href="{{ card_product.url }}"
                          {% endif %}
                          class="link product__view-details animate-arrow small-hide medium-hide"
                        >
                          {{ 'products.product.view_full_details' | t -}}
                          {{- 'icon-arrow.svg' | inline_asset_content -}}
                        </a>
                      </div>
                      <div class="quick-add-modal__content-info--bulk-details large-up-hide">
                        <a href="{{ card_product.url }}" class="full-unstyled-link">
                          <h3>{{ card_product.title | escape }}</h3>
                        </a>
                        {% render 'price', product: card_product, price_class: '', show_compare_at_price: true %}
                        {%- if card_product.quantity_price_breaks_configured? -%}
                          <div class="card__information-volume-pricing-note">
                            <span class="caption">{{ 'products.product.volume_pricing.note' | t }}</span>
                          </div>
                        {%- endif -%}
                      </div>
                    </div>
                    <div>
                      <div class="quick-add-modal__content-info--bulk-details small-hide medium-hide">
                        <a href="{{ card_product.url }}" class="full-unstyled-link">
                          <h3 class="h2">
                            {{ card_product.title | escape }}
                          </h3>
                        </a>
                        {% render 'price', product: card_product, price_class: '', show_compare_at_price: true %}
                        {%- if card_product.quantity_price_breaks_configured? -%}
                          <div class="card__information-volume-pricing-note">
                            <span class="caption">{{ 'products.product.volume_pricing.note' | t }}</span>
                          </div>
                        {%- endif -%}
                      </div>
                      <bulk-modal
                        id="QuickBulkModal-{{ card_product.id }}-{{ section_id }}"
                        data-url="{{ card_product.url }}"
                        data-section-id="{{ section_id }}"
                        data-product-id="{{ card_product.id }}"
                      >
                      </bulk-modal>
                    </div>
                  </div>
                </div>
              </modal-dialog>
            </div>
          {% endif %}
        {% endif %}
        <div class="card__badge {{ settings.badge_position }}">
          {%- if card_product.available == false -%}
            <span
              id="Badge-{{ section_id }}-{{ card_product.id }}"
              class="badge badge--bottom-left color-{{ settings.sold_out_badge_color_scheme }}"
            >
              {{- 'products.product.sold_out' | t -}}
            </span>
          {%- elsif card_product.compare_at_price > card_product.price and card_product.available -%}
            <span
              id="Badge-{{ section_id }}-{{ card_product.id }}"
              class="badge badge--bottom-left color-{{ settings.sale_badge_color_scheme }}"
            >
              {{- 'products.product.on_sale' | t -}}
            </span>
          {%- endif -%}
        </div>
      </div>
    </div>
  </div>
{%- else -%}
  {%- liquid
    assign ratio = 1
    assign placeholder = true
    if media_aspect_ratio == 'portrait'
      assign ratio = 0.8
    endif
  -%}
  <div class="card-wrapper product-card-wrapper underline-links-hover">
    <div
      class="
        card card--{{ settings.card_style }}
        {% if extend_height %} card--extend-height{% endif %}
        {% if image_shape and image_shape != 'default' %} card--shape{% endif %}
        {% if settings.card_style == 'card' %} color-{{ settings.card_color_scheme }} gradient{% endif %}
      "
      style="--ratio-percent: {{ 1 | divided_by: ratio | times: 100 }}%;"
    >
      <div
        class="card__inner{% if settings.card_style == 'standard' %} color-{{ settings.card_color_scheme }} gradient{% endif %} ratio"
      >
        <div
          class="card__media {% if image_shape and image_shape != 'default' %} shape--{{ image_shape }} color-{{ settings.card_color_scheme }} gradient{% endif %}"
        >
          <div
            class="media media--transparent"
          >
            {%- if placeholder_image -%}
              {{ placeholder_image | placeholder_svg_tag: 'placeholder-svg' }}
            {%- else -%}
              {{ 'product-apparel-2' | placeholder_svg_tag: 'placeholder-svg' }}
            {% endif %}
          </div>
        </div>
      </div>
      <div class="card__content">
        <div class="card__information">
          <h3 class="card__heading card__heading--placeholder{% if settings.card_style == 'standard' %} h5{% endif %}">
            <a role="link" aria-disabled="true" class="full-unstyled-link">
              {{ 'onboarding.product_title' | t }}
            </a>
          </h3>
          <div class="card-information">
            {%- if show_vendor -%}
              <span class="visually-hidden">{{ 'accessibility.vendor' | t }}</span>
              <div class="caption-with-letter-spacing light">{{ 'products.product.vendor' | t }}</div>
            {%- endif -%}
            {% render 'price', placeholder: placeholder, show_compare_at_price: true %}
          </div>
        </div>
      </div>
    </div>
  </div>
{%- endif -%}
