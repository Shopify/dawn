{% comment %}
  Renders facets (filtering and sorting)

  Accepts:
  - results: {Object} Collection or Search object
  - enable_filtering: {Boolean} Show filtering when true
  - enable_sorting: {Boolean} Show sorting when true
  - filter_type: {String} Type of filter

  Usage:
  {% render 'facets', results: collection, enable_filtering: true, enable_sorting: true, filter_type: 'vertical' %}
{% endcomment %}

{{ 'component-show-more.css' | asset_url | stylesheet_tag }}

{%- liquid
  assign sort_by = results.sort_by | default: results.default_sort_by
  assign total_active_values = 0
  if results.url
    assign results_url = results.url
  else
    assign terms = results.terms | escape
    assign results_url = '?q=' | append: terms | append: '&options%5Bprefix%5D=last&sort_by=' | append: sort_by
  endif
-%}

<div class="facets-container{% if filter_type == 'drawer' %} facets-container-drawer{% endif %}">
  {%- if filter_type == 'vertical' or filter_type == 'horizontal' -%}
    <facet-filters-form class="facets small-hide">
      <form
        id="FacetFiltersForm"
        class="{% if filter_type == 'horizontal' %}facets__form{% else %}facets__form-vertical{% endif %}"
      >
        {%- if results.terms -%}
          <input type="hidden" name="q" value="{{ results.terms | escape }}">
          <input name="options[prefix]" type="hidden" value="last">
        {%- endif -%}

        {% if enable_filtering %}
          {% comment %} Heading is the first tabbable element on filter type horizontal {% endcomment %}
          <div
            id="FacetsWrapperDesktop"
            {% if filter_type == 'horizontal' %}
              class="facets__wrapper"
            {% endif %}
          >
            {%- if filter_type == 'horizontal' and results.filters != empty -%}
              <h2 class="facets__heading caption-large text-body" id="verticalTitle" tabindex="-1">
                {{ 'products.facets.filter_by_label' | t }}
              </h2>
            {%- endif -%}
            {% comment %} Pills are right below the title for filter type vertical {% endcomment %}
            {%- if filter_type == 'vertical' -%}
              <div class="active-facets active-facets-desktop">
                <div class="active-facets-vertical-filter">
                  {%- unless results.filters == empty -%}
                    <h2
                      class="facets__heading facets__heading--vertical caption-large text-body"
                      id="verticalTitle"
                      tabindex="-1"
                    >
                      {{ 'products.facets.filter_by_label' | t }}
                    </h2>
                  {%- endunless -%}
                  <facet-remove class="active-facets__button-wrapper">
                    <a href="{{ results_url }}" class="active-facets__button-remove underlined-link">
                      <span>{{ 'products.facets.clear_all' | t }}</span>
                    </a>
                  </facet-remove>
                </div>
                {%- for filter in results.filters -%}
                  {%- for value in filter.active_values -%}
                    <facet-remove>
                      <a href="{{ value.url_to_remove }}" class="active-facets__button active-facets__button--light">
                        <span class="active-facets__button-inner button button--tertiary">
                          {{ filter.label }}: {{ value.label | escape }}
                          {% render 'icon-close-small' %}
                          <span class="visually-hidden">{{ 'products.facets.clear_filter' | t }}</span>
                        </span>
                      </a>
                    </facet-remove>
                  {%- endfor -%}
                  {% if filter.type == 'price_range' %}
                    {%- if filter.min_value.value != null or filter.max_value.value != null -%}
                      <facet-remove>
                        <a href="{{ filter.url_to_remove }}" class="active-facets__button active-facets__button--light">
                          <span class="active-facets__button-inner button button--tertiary">
                            {%- if filter.min_value.value -%}
                              {{ filter.min_value.value | money }}
                            {%- else -%}
                              {{ 0 | money }}
                            {%- endif -%}
                            -
                            {%- if filter.max_value.value -%}
                              {{ filter.max_value.value | money }}
                            {%- else -%}
                              {{ filter.range_max | money }}
                            {%- endif -%}
                            {% render 'icon-close-small' %}
                            <span class="visually-hidden">{{ 'products.facets.clear_filter' | t }}</span>
                          </span>
                        </a>
                      </facet-remove>
                    {%- endif -%}
                  {% endif %}
                {%- endfor -%}
              </div>
            {%- endif -%}

            <script src="{{ 'show-more.js' | asset_url }}" defer="defer"></script>
            {% comment %} Filters for both horizontal and vertical filter {% endcomment %}
            {%- for filter in results.filters -%}
              {%- assign total_active_values = total_active_values | plus: filter.active_values.size -%}
              {% case filter.type %}
                {% when 'boolean', 'list' %}
                  <details
                    id="Details-{{ forloop.index }}-{{ section.id }}"
                    class="{% if filter_type == 'horizontal' %}disclosure-has-popup facets__disclosure{% else %} facets__disclosure-vertical{% endif %} js-filter"
                    data-index="{{ forloop.index }}"
                    {% if filter_type == 'vertical' and forloop.index == 1 %}
                      open
                    {% endif %}
                  >
                    <summary
                      class="facets__summary caption-large focus-offset"
                      aria-label="{{ filter.label }} ({{ 'products.facets.filters_selected.one' | t: count: filter.active_values.size }})"
                    >
                      <div>
                        <span>
                          {{- filter.label | escape }}
                          {%- if filter_type == 'vertical' -%}
                            <span class="facets__selected no-js-hidden{% if filter.active_values.size == 0 %} hidden{% endif %}">
                              ({{ filter.active_values.size }})</span
                            >
                          {%- endif -%}
                        </span>
                        {% render 'icon-caret' %}
                      </div>
                    </summary>
                    <div
                      id="Facet-{{ forloop.index }}-{{ section.id }}"
                      class="parent-display {% if filter_type == 'horizontal' %}facets__display{% else %}facets__display-vertical{% endif %}"
                    >
                      {%- if filter_type != 'vertical' -%}
                        <div class="facets__header">
                          <span class="facets__selected no-js-hidden">
                            {{- 'products.facets.filters_selected' | t: count: filter.active_values.size -}}
                          </span>
                          <facet-remove>
                            <a href="{{ filter.url_to_remove }}" class="facets__reset link underlined-link">
                              {{ 'products.facets.reset' | t }}
                            </a>
                          </facet-remove>
                        </div>
                      {%- endif -%}
                      <fieldset class="facets-wrap parent-wrap {% if filter_type == 'vertical' %} facets-wrap-vertical{% endif %}">
                        <legend class="visually-hidden">{{ filter.label | escape }}</legend>
                        <ul
                          class="{% if filter_type != 'vertical' %} facets__list{% endif %} list-unstyled no-js-hidden"
                          role="list"
                        >
                          {%- for value in filter.values -%}
                            <li class="list-menu__item facets__item{% if forloop.index > 10 and filter_type == 'vertical' %} show-more-item hidden{% endif %}">
                              <label
                                for="Filter-{{ filter.param_name | escape }}-{{ forloop.index }}"
                                class="facet-checkbox{% if value.count == 0 and value.active == false %} facet-checkbox--disabled{% endif %}"
                              >
                                <input
                                  type="checkbox"
                                  name="{{ value.param_name }}"
                                  value="{{ value.value }}"
                                  id="Filter-{{ filter.param_name | escape }}-{{ forloop.index }}"
                                  {% if value.active %}
                                    checked
                                  {% endif %}
                                  {% if value.count == 0 and value.active == false %}
                                    disabled
                                  {% endif %}
                                >

                                <svg
                                  width="1.6rem"
                                  height="1.6rem"
                                  viewBox="0 0 16 16"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <rect width="16" height="16" stroke="currentColor" fill="none" stroke-width="1"></rect>
                                </svg>

                                <svg
                                  aria-hidden="true"
                                  class="icon icon-checkmark"
                                  width="1.1rem"
                                  height="0.7rem"
                                  viewBox="0 0 11 7"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M1.5 3.5L2.83333 4.75L4.16667 6L9.5 1"
                                    stroke="currentColor"
                                    stroke-width="1.75"
                                    stroke-linecap="round"
                                    stroke-linejoin="round" />
                                </svg>

                                <span aria-hidden="true">{{ value.label | escape }} ({{ value.count }})</span>
                                <span class="visually-hidden">
                                  {{- value.label | escape }} (
                                  {%- if value.count == 1 -%}
                                    {{- 'products.facets.product_count_simple.one' | t: count: value.count -}}
                                  {%- else -%}
                                    {{- 'products.facets.product_count_simple.other' | t: count: value.count -}}
                                  {%- endif -%}
                                  )</span
                                >
                              </label>
                            </li>
                          {%- endfor -%}
                        </ul>
                        {% comment %} No show more for no JS {% endcomment %}
                        <ul
                          class="{% if filter_type != 'vertical' %} facets__list{% endif %} no-js-list list-unstyled no-js"
                          role="list"
                        >
                          {%- for value in filter.values -%}
                            <li class="list-menu__item facets__item">
                              <label
                                for="Filter-{{ filter.param_name | escape }}-{{ forloop.index }}-no-js"
                                class="facet-checkbox{% if value.count == 0 and value.active == false %} facet-checkbox--disabled{% endif %}"
                              >
                                <input
                                  type="checkbox"
                                  name="{{ value.param_name }}"
                                  value="{{ value.value }}"
                                  id="Filter-{{ filter.param_name | escape }}-{{ forloop.index }}-no-js"
                                  {% if value.active %}
                                    checked
                                  {% endif %}
                                  {% if value.count == 0 and value.active == false %}
                                    disabled
                                  {% endif %}
                                >

                                <svg
                                  width="1.6rem"
                                  height="1.6rem"
                                  viewBox="0 0 16 16"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <rect width="16" height="16" stroke="currentColor" fill="none" stroke-width="1"></rect>
                                </svg>

                                <svg
                                  aria-hidden="true"
                                  class="icon icon-checkmark"
                                  width="1.1rem"
                                  height="0.7rem"
                                  viewBox="0 0 11 7"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M1.5 3.5L2.83333 4.75L4.16667 6L9.5 1"
                                    stroke="currentColor"
                                    stroke-width="1.75"
                                    stroke-linecap="round"
                                    stroke-linejoin="round" />
                                </svg>

                                <span aria-hidden="true">{{ value.label | escape }} ({{ value.count }})</span>
                                <span class="visually-hidden">
                                  {{- value.label | escape }} (
                                  {%- if value.count == 1 -%}
                                    {{- 'products.facets.product_count_simple.one' | t: count: value.count -}}
                                  {%- else -%}
                                    {{- 'products.facets.product_count_simple.other' | t: count: value.count -}}
                                  {%- endif -%}
                                  )</span
                                >
                              </label>
                            </li>
                          {%- endfor -%}
                        </ul>
                      </fieldset>
                      {%- if filter.values.size > 10 and filter_type == 'vertical' -%}
                        <show-more-button>
                          <button
                            class="button-show-more link underlined-link no-js-hidden"
                            id="Show-More-{{ forloop.index }}-{{ section.id }}"
                            type="button"
                          >
                            <span class="label-show-more label-text"
                              ><span aria-hidden="true">+ </span>{{ 'products.facets.show_more' | t -}}
                            </span>
                            <span class="label-show-less label-text hidden"
                              ><span aria-hidden="true">- </span>{{ 'products.facets.show_less' | t -}}
                            </span>
                          </button>
                        </show-more-button>
                      {%- endif %}
                    </div>
                  </details>
                {% when 'price_range' %}
                  {% liquid
                    assign currencies_using_comma_decimals = 'ANG,ARS,BRL,BYN,BYR,CLF,CLP,COP,CRC,CZK,DKK,EUR,HRK,HUF,IDR,ISK,MZN,NOK,PLN,RON,RUB,SEK,TRY,UYU,VES,VND' | split: ','
                    assign uses_comma_decimals = false
                    if currencies_using_comma_decimals contains cart.currency.iso_code
                      assign uses_comma_decimals = true
                    endif
                  %}
                  <details
                    id="Details-{{ forloop.index }}-{{ section.id }}"
                    class="{% if filter_type == 'horizontal' %}disclosure-has-popup facets__disclosure{% else %} facets__disclosure-vertical{% endif %} js-filter"
                    data-index="{{ forloop.index }}"
                    {% if filter_type == 'vertical' and forloop.index == 1 %}
                      open
                    {% endif %}
                  >
                    <summary class="facets__summary caption-large focus-offset">
                      <div>
                        <span>{{ filter.label | escape }}</span>
                        {% render 'icon-caret' %}
                      </div>
                    </summary>
                    <div
                      id="Facet-{{ forloop.index }}-{{ section.id }}"
                      class="{% if filter_type == 'horizontal' %}facets__display{% else %}facets__display-vertical{% endif %}"
                    >
                      <div class="{% if filter_type == 'horizontal' %}facets__header{% else %}facets__header-vertical{% endif %}">
                        {%- assign max_price_amount = filter.range_max | money | strip_html | escape -%}
                        <span class="facets__selected">
                          {{- 'products.facets.max_price' | t: price: max_price_amount -}}
                        </span>
                        {%- if filter_type != 'vertical' -%}
                          <facet-remove>
                            <a href="{{ filter.url_to_remove }}" class="facets__reset link underlined-link">
                              {{ 'products.facets.reset' | t }}
                            </a>
                          </facet-remove>
                        {%- endif -%}
                      </div>
                      <price-range class="facets__price">
                        <span class="field-currency">{{ cart.currency.symbol }}</span>
                        <div class="field">
                          <input
                            class="field__input"
                            name="{{ filter.min_value.param_name }}"
                            id="Filter-{{ filter.label | escape }}-GTE"
                            {%- if filter.min_value.value -%}
                              {%- if uses_comma_decimals -%}
                                value="{{ filter.min_value.value | money_without_currency | replace: '.', '' | replace: ',', '.' }}"
                              {%- else -%}
                                value="{{ filter.min_value.value | money_without_currency | replace: ',', '' }}"
                              {%- endif %}
                            {%- endif -%}
                            type="number"
                            placeholder="0"
                            min="0"
                            {%- if uses_comma_decimals -%}
                              max="{{ filter.range_max | money_without_currency | replace: '.', '' | replace: ',', '.' }}"
                            {%- else -%}
                              max="{{ filter.range_max | money_without_currency | replace: ',', '' }}"
                            {% endif %}
                          >
                          <label class="field__label" for="Filter-{{ filter.label | escape }}-GTE">
                            {{- 'products.facets.from' | t -}}
                          </label>
                        </div>
                        {%- if filter_type != 'vertical' -%}
                          <span class="field-currency">{{ cart.currency.symbol }}</span>
                        {%- endif -%}
                        <div class="field">
                          <input
                            class="field__input"
                            name="{{ filter.max_value.param_name }}"
                            id="Filter-{{ filter.label | escape }}-LTE"
                            {%- if filter.max_value.value -%}
                              {%- if uses_comma_decimals -%}
                                value="{{ filter.max_value.value | money_without_currency | replace: '.', '' | replace: ',', '.' }}"
                              {%- else -%}
                                value="{{ filter.max_value.value | money_without_currency | replace: ',', '' }}"
                              {%- endif %}
                            {%- endif -%}
                            type="number"
                            min="0"
                            {%- if uses_comma_decimals -%}
                              placeholder="{{ filter.range_max | money_without_currency | replace: '.', '' | replace: ',', '.' }}"
                              max="{{ filter.range_max | money_without_currency | replace: '.', '' | replace: ',', '.' }}"
                            {%- else -%}
                              placeholder="{{ filter.range_max | money_without_currency | replace: ',', '' }}"
                              max="{{ filter.range_max | money_without_currency | replace: ',', '' }}"
                            {% endif %}
                          >
                          <label class="field__label" for="Filter-{{ filter.label | escape }}-LTE">
                            {{- 'products.facets.to' | t -}}
                          </label>
                        </div>
                      </price-range>
                    </div>
                  </details>
              {% endcase %}
            {%- endfor -%}
            <noscript>
              <button type="submit" class="facets__button-no-js button button--secondary">
                {{ 'products.facets.filter_button' | t }}
              </button>
            </noscript>
          </div>
          {% comment %} Pills after filtes on filter type horizontal {% endcomment %}
          {%- if filter_type == 'horizontal' -%}
            <div class="active-facets active-facets-desktop">
              {%- for filter in results.filters -%}
                {%- for value in filter.active_values -%}
                  <facet-remove>
                    <a href="{{ value.url_to_remove }}" class="active-facets__button active-facets__button--light">
                      <span class="active-facets__button-inner button button--tertiary">
                        {{ filter.label }}: {{ value.label | escape }}
                        {% render 'icon-close-small' %}
                        <span class="visually-hidden">{{ 'products.facets.clear_filter' | t }}</span>
                      </span>
                    </a>
                  </facet-remove>
                {%- endfor -%}
                {% if filter.type == 'price_range' %}
                  {%- if filter.min_value.value != null or filter.max_value.value != null -%}
                    <facet-remove>
                      <a href="{{ filter.url_to_remove }}" class="active-facets__button active-facets__button--light">
                        <span class="active-facets__button-inner button button--tertiary">
                          {%- if filter.min_value.value -%}
                            {{ filter.min_value.value | money }}
                          {%- else -%}
                            {{ 0 | money }}
                          {%- endif -%}
                          -
                          {%- if filter.max_value.value -%}
                            {{ filter.max_value.value | money }}
                          {%- else -%}
                            {{ filter.range_max | money }}
                          {%- endif -%}
                          {% render 'icon-close-small' %}
                          <span class="visually-hidden">{{ 'products.facets.clear_filter' | t }}</span>
                        </span>
                      </a>
                    </facet-remove>
                  {%- endif -%}
                {% endif %}
              {%- endfor -%}
              <facet-remove class="active-facets__button-wrapper">
                <a href="{{ results_url }}" class="active-facets__button-remove underlined-link">
                  <span>{{ 'products.facets.clear_all' | t }}</span>
                </a>
              </facet-remove>
            </div>
          {%- endif -%}
        {% endif %}

        {% if results.current_vendor or results.current_type %}
          <input type="hidden" name="q" value="{{ results.current_vendor }}{{ results.current_type }}">
        {% endif %}

        {%- if filter_type == 'horizontal' -%}
          {% comment %} Sorting and product count are the last elements when filter type is horizontal {% endcomment %}
          {%- if enable_sorting -%}
            <div class="facet-filters sorting caption">
              <div class="facet-filters__field">
                <h2 class="facet-filters__label caption-large text-body">
                  <label for="SortBy">{{ 'products.facets.sort_by_label' | t }}</label>
                </h2>
                <div class="select">
                  {%- assign sort_by = results.sort_by | default: results.default_sort_by -%}
                  <select
                    name="sort_by"
                    class="facet-filters__sort select__select caption-large"
                    id="SortBy"
                    aria-describedby="a11y-refresh-page-message"
                  >
                    {%- for option in results.sort_options -%}
                      <option
                        value="{{ option.value | escape }}"
                        {% if option.value == sort_by %}
                          selected="selected"
                        {% endif %}
                      >
                        {{ option.name | escape }}
                      </option>
                    {%- endfor -%}
                  </select>
                  {% render 'icon-caret' %}
                </div>
              </div>

              <noscript>
                <button type="submit" class="facets__button-no-js button button--secondary">
                  {{ 'products.facets.sort_button' | t }}
                </button>
              </noscript>
            </div>
          {%- endif -%}
          <div class="product-count light" role="status">
            <h2 class="product-count__text text-body">
              <span id="ProductCountDesktop">
                {%- if results.results_count -%}
                  {{ 'templates.search.results_with_count' | t: terms: results.terms, count: results.results_count }}
                {%- elsif results.products_count == results.all_products_count -%}
                  {{ 'products.facets.product_count_simple' | t: count: results.products_count }}
                {%- else -%}
                  {{
                    'products.facets.product_count'
                    | t: product_count: results.products_count, count: results.all_products_count
                  }}
                {%- endif -%}
              </span>
            </h2>
            <div class="loading-overlay__spinner">
              <svg
                aria-hidden="true"
                focusable="false"
                class="spinner"
                viewBox="0 0 66 66"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
              </svg>
            </div>
          </div>
        {%- endif -%}
      </form>
    </facet-filters-form>
    {% comment %} Sorting for vertical filter are grouped with filter when no JS{% endcomment %}
    {%- if enable_sorting and filter_type == 'vertical' -%}
      <facet-filters-form class="small-hide">
        <form class="no-js">
          <div class="facet-filters sorting caption">
            <div class="facet-filters__field">
              <h2 class="facet-filters__label caption-large text-body">
                <label for="SortBy">{{ 'products.facets.sort_by_label' | t }}</label>
              </h2>
              <div class="select">
                {%- assign sort_by = results.sort_by | default: results.default_sort_by -%}
                <select
                  name="sort_by"
                  class="facet-filters__sort select__select caption-large"
                  id="SortBy"
                  aria-describedby="a11y-refresh-page-message"
                >
                  {%- for option in results.sort_options -%}
                    <option
                      value="{{ option.value | escape }}"
                      {% if option.value == sort_by %}
                        selected="selected"
                      {% endif %}
                    >
                      {{ option.name | escape }}
                    </option>
                  {%- endfor -%}
                </select>
                {% render 'icon-caret' %}
              </div>
            </div>

            <noscript>
              <button type="submit" class="facets__button-no-js button button--secondary">
                {{ 'products.facets.sort_button' | t }}
              </button>
            </noscript>
          </div>

          {% if results.current_vendor or results.current_type %}
            <input type="hidden" name="q" value="{{ results.current_vendor }}{{ results.current_type }}">
          {% endif %}

          {%- if results.terms -%}
            <input type="hidden" name="q" value="{{ results.terms | escape }}">
            <input name="options[prefix]" type="hidden" value="last">
          {%- endif -%}
        </form>
      </facet-filters-form>
    {%- endif -%}
  {%- endif -%}
  {% comment %}  Drawer and mobile filter {% endcomment %}
  <menu-drawer
    class="mobile-facets__wrapper{% if filter_type == 'horizontal' or filter_type == 'vertical' %} medium-hide large-up-hide{% endif %}"
    data-breakpoint="mobile"
  >
    <details class="mobile-facets__disclosure disclosure-has-popup">
      <summary class="mobile-facets__open-wrapper focus-offset">
        <span class="mobile-facets__open{% if filter_type == 'drawer' and enable_filtering == false %} medium-hide large-up-hide{% endif %}">
          {% render 'icon-filter' %}
          <span class="mobile-facets__open-label button-label medium-hide large-up-hide">
            {%- if enable_filtering and enable_sorting -%}
              {{ 'products.facets.filter_and_sort' | t }}
            {%- elsif enable_filtering -%}
              {{ 'products.facets.filter_button' | t }}
            {%- elsif enable_sorting -%}
              {{ 'products.facets.sort_button' | t }}
            {%- endif -%}
          </span>
          <span class="mobile-facets__open-label button-label small-hide">
            {%- if enable_filtering -%}
              {{ 'products.facets.filter_button' | t }}
            {%- endif -%}
          </span>
        </span>
        <span tabindex="0" class="mobile-facets__close mobile-facets__close--no-js">{%- render 'icon-close' -%}</span>
      </summary>
      <facet-filters-form>
        <form id="FacetFiltersFormMobile" class="mobile-facets">
          <div class="mobile-facets__inner gradient">
            <div class="mobile-facets__header">
              <div class="mobile-facets__header-inner">
                <h2 class="mobile-facets__heading medium-hide large-up-hide">
                  {%- if enable_filtering and enable_sorting -%}
                    {{ 'products.facets.filter_and_sort' | t }}
                  {%- elsif enable_filtering -%}
                    {{ 'products.facets.filter_button' | t }}
                  {%- elsif enable_sorting -%}
                    {{ 'products.facets.sort_button' | t }}
                  {%- endif -%}
                </h2>
                <h2 class="mobile-facets__heading small-hide">
                  {%- if enable_filtering -%}
                    {{ 'products.facets.filter_button' | t }}
                  {%- endif -%}
                </h2>
                <p class="mobile-facets__count">
                  {%- if results.results_count -%}
                    {{ 'templates.search.results_with_count' | t: terms: results.terms, count: results.results_count }}
                  {%- elsif results.products_count == results.all_products_count -%}
                    {{ 'products.facets.product_count_simple' | t: count: results.products_count }}
                  {%- else -%}
                    {{
                      'products.facets.product_count'
                      | t: product_count: results.products_count, count: results.all_products_count
                    }}
                  {%- endif -%}
                </p>
              </div>
            </div>
            <div class="mobile-facets__main has-submenu gradient">
              {%- if enable_filtering -%}
                {%- for filter in results.filters -%}
                  {% case filter.type %}
                    {% when 'boolean', 'list' %}
                      <details
                        id="Details-Mobile-{{ forloop.index }}-{{ section.id }}"
                        class="mobile-facets__details js-filter"
                        data-index="mobile-{{ forloop.index }}"
                      >
                        <summary class="mobile-facets__summary focus-inset">
                          <div>
                            <span>{{ filter.label | escape }}</span>
                            <span class="mobile-facets__arrow no-js-hidden">{% render 'icon-arrow' %}</span>
                            <noscript>{% render 'icon-caret' %}</noscript>
                          </div>
                        </summary>
                        <div
                          id="FacetMobile-{{ forloop.index }}-{{ section.id }}"
                          class="mobile-facets__submenu gradient"
                        >
                          <button
                            class="mobile-facets__close-button link link--text focus-inset"
                            aria-expanded="true"
                            type="button"
                          >
                            {% render 'icon-arrow' %}
                            {{ filter.label | escape }}
                          </button>
                          <ul class="mobile-facets__list list-unstyled" role="list">
                            {%- for value in filter.values -%}
                              <li class="mobile-facets__item list-menu__item">
                                <label
                                  for="Filter-{{ filter.param_name | escape }}-mobile-{{ forloop.index }}"
                                  class="mobile-facets__label{% if value.count == 0 and value.active == false %} mobile-facets__label--disabled{% endif %}"
                                >
                                  <input
                                    class="mobile-facets__checkbox"
                                    type="checkbox"
                                    name="{{ value.param_name }}"
                                    value="{{ value.value }}"
                                    id="Filter-{{ filter.param_name | escape }}-mobile-{{ forloop.index }}"
                                    {% if value.active %}
                                      checked
                                    {% endif %}
                                    {% if value.count == 0 and value.active == false %}
                                      disabled
                                    {% endif %}
                                  >

                                  <span class="mobile-facets__highlight"></span>

                                  <svg
                                    width="1.6rem"
                                    height="1.6rem"
                                    viewBox="0 0 16 16"
                                    aria-hidden="true"
                                    focusable="false"
                                  >
                                    <rect width="16" height="16" stroke="currentColor" fill="none" stroke-width="1"></rect>
                                  </svg>

                                  <svg
                                    aria-hidden="true"
                                    class="icon icon-checkmark"
                                    width="1.1rem"
                                    height="0.7rem"
                                    viewBox="0 0 11 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M1.5 3.5L2.83333 4.75L4.16667 6L9.5 1" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                                  </svg>

                                  <span aria-hidden="true">{{ value.label | escape }} ({{ value.count }})</span>
                                  <span class="visually-hidden">
                                    {{- value.label | escape }} (
                                    {%- if value.count == '1' -%}
                                      {{- 'products.facets.product_count_simple.one' | t: count: value.count -}}
                                    {%- else -%}
                                      {{- 'products.facets.product_count_simple.other' | t: count: value.count -}}
                                    {%- endif -%}
                                    )</span
                                  >
                                </label>
                              </li>
                            {%- endfor -%}
                          </ul>

                          <div class="no-js-hidden mobile-facets__footer gradient">
                            <facet-remove class="mobile-facets__clear-wrapper">
                              <a href="{{ filter.url_to_remove }}" class="mobile-facets__clear underlined-link">
                                {{- 'products.facets.clear' | t -}}
                              </a>
                            </facet-remove>
                            <button
                              type="button"
                              class="no-js-hidden button button--primary"
                              onclick="this.closest('.mobile-facets__wrapper').querySelector('summary').click()"
                            >
                              {{ 'products.facets.apply' | t }}
                            </button>
                            <noscript
                              ><button class="button button--primary">
                                {{ 'products.facets.apply' | t }}
                              </button></noscript
                            >
                          </div>
                        </div>
                      </details>
                    {% when 'price_range' %}
                      <details
                        id="Details-Mobile-{{ forloop.index }}-{{ section.id }}"
                        class="mobile-facets__details js-filter"
                        data-index="mobile-{{ forloop.index }}"
                      >
                        <summary class="mobile-facets__summary focus-inset">
                          <div>
                            <span>{{ filter.label | escape }}</span>
                            <span class="mobile-facets__arrow no-js-hidden">{% render 'icon-arrow' %}</span>
                            <noscript>{% render 'icon-caret' %}</noscript>
                          </div>
                        </summary>
                        <div
                          id="FacetMobile-{{ forloop.index }}-{{ section.id }}"
                          class="mobile-facets__submenu gradient"
                        >
                          <button
                            class="mobile-facets__close-button link link--text focus-inset"
                            aria-expanded="true"
                            type="button"
                          >
                            {% render 'icon-arrow' %}
                            {{ filter.label | escape }}
                          </button>

                          {%- assign max_price_amount = filter.range_max | money | strip_html | escape -%}
                          <p class="mobile-facets__info">
                            {{ 'products.facets.max_price' | t: price: max_price_amount }}
                          </p>

                          <price-range class="facets__price">
                            <span class="field-currency">{{ cart.currency.symbol }}</span>
                            <div class="field">
                              <input
                                class="field__input"
                                name="{{ filter.min_value.param_name }}"
                                id="Mobile-Filter-{{ filter.label | escape }}-GTE"
                                {%- if filter.min_value.value -%}
                                  {%- if uses_comma_decimals -%}
                                    value="{{ filter.min_value.value | money_without_currency | replace: '.', '' | replace: ',', '.' }}"
                                  {%- else -%}
                                    value="{{ filter.min_value.value | money_without_currency | replace: ',', '' }}"
                                  {%- endif %}
                                {%- endif -%}
                                type="number"
                                placeholder="0"
                                min="0"
                                inputmode="decimal"
                                {%- if uses_comma_decimals -%}
                                  max="{{ filter.range_max | money_without_currency | replace: '.', '' | replace: ',', '.' }}"
                                {%- else -%}
                                  max="{{ filter.range_max | money_without_currency | replace: ',', '' }}"
                                {% endif %}
                              >
                              <label class="field__label" for="Mobile-Filter-{{ filter.label | escape }}-GTE">
                                {{- 'products.facets.from' | t -}}
                              </label>
                            </div>

                            <span class="field-currency">{{ cart.currency.symbol }}</span>
                            <div class="field">
                              <input
                                class="field__input"
                                name="{{ filter.max_value.param_name }}"
                                id="Mobile-Filter-{{ filter.label | escape }}-LTE"
                                {%- if filter.max_value.value -%}
                                  {%- if uses_comma_decimals -%}
                                    value="{{ filter.max_value.value | money_without_currency | replace: '.', '' | replace: ',', '.' }}"
                                  {%- else -%}
                                    value="{{ filter.max_value.value | money_without_currency | replace: ',', '' }}"
                                  {%- endif %}
                                {%- endif -%}
                                type="number"
                                min="0"
                                inputmode="decimal"
                                {%- if uses_comma_decimals -%}
                                  placeholder="{{ filter.range_max | money_without_currency | replace: '.', '' | replace: ',', '.' }}"
                                  max="{{ filter.range_max | money_without_currency | replace: '.', '' | replace: ',', '.' }}"
                                {%- else -%}
                                  placeholder="{{ filter.range_max | money_without_currency | replace: ',', '' }}"
                                  max="{{ filter.range_max | money_without_currency | replace: ',', '' }}"
                                {% endif %}
                              >
                              <label class="field__label" for="Mobile-Filter-{{ filter.label | escape }}-LTE">
                                {{- 'products.facets.to' | t -}}
                              </label>
                            </div>
                          </price-range>
                          <div class="no-js-hidden mobile-facets__footer">
                            <facet-remove class="mobile-facets__clear-wrapper">
                              <a href="{{ filter.url_to_remove }}" class="mobile-facets__clear underlined-link">
                                {{- 'products.facets.clear' | t -}}
                              </a>
                            </facet-remove>
                            <button
                              type="button"
                              class="no-js-hidden button button--primary"
                              onclick="this.closest('.mobile-facets__wrapper').querySelector('summary').click()"
                            >
                              {{ 'products.facets.apply' | t }}
                            </button>
                            <noscript
                              ><button class="button button--primary">
                                {{ 'products.facets.apply' | t }}
                              </button></noscript
                            >
                          </div>
                        </div>
                      </details>
                  {% endcase %}
                {%- endfor -%}
              {%- endif -%}

              {%- if enable_sorting -%}
                <div
                  class="mobile-facets__details js-filter{% if filter_type == 'drawer' %} medium-hide large-up-hide{% endif %}"
                  data-index="mobile-{{ forloop.index }}"
                >
                  <div class="mobile-facets__summary">
                    <div class="mobile-facets__sort">
                      <label for="SortBy-mobile">{{ 'products.facets.sort_by_label' | t }}</label>
                      <div class="select">
                        <select
                          name="sort_by"
                          class="select__select"
                          id="SortBy-mobile"
                          aria-describedby="a11y-refresh-page-message"
                        >
                          {%- for option in results.sort_options -%}
                            <option
                              value="{{ option.value | escape }}"
                              {% if option.value == sort_by %}
                                selected="selected"
                              {% endif %}
                            >
                              {{ option.name | escape }}
                            </option>
                          {%- endfor -%}
                        </select>
                        {% render 'icon-caret' %}
                      </div>
                    </div>
                  </div>
                </div>
              {%- endif -%}

              <div class="mobile-facets__footer">
                <facet-remove class="mobile-facets__clear-wrapper">
                  <a href="{{ results_url }}" class="mobile-facets__clear underlined-link">
                    {{- 'products.facets.clear_all' | t -}}
                  </a>
                </facet-remove>
                <button
                  type="button"
                  class="no-js-hidden button button--primary"
                  onclick="this.closest('.mobile-facets__wrapper').querySelector('summary').click()"
                >
                  {{ 'products.facets.apply' | t }}
                </button>
                <noscript
                  ><button class="button button--primary">{{ 'products.facets.apply' | t }}</button></noscript
                >
              </div>
            </div>

            {% if results.current_vendor or results.current_type %}
              <input type="hidden" name="q" value="{{ results.current_vendor }}{{ results.current_type }}">
            {% endif %}

            {%- if results.terms -%}
              <input type="hidden" name="q" value="{{ results.terms | escape }}">
              <input name="options[prefix]" type="hidden" value="last">
            {%- endif -%}
          </div>
        </form>
      </facet-filters-form>
    </details>
  </menu-drawer>

  <div class="active-facets active-facets-mobile medium-hide large-up-hide">
    {%- for filter in results.filters -%}
      {%- for value in filter.active_values -%}
        <facet-remove>
          <a href="{{ value.url_to_remove }}" class="active-facets__button active-facets__button--light">
            <span class="active-facets__button-inner button button--tertiary">
              {{ filter.label }}: {{ value.label | escape }}
              {% render 'icon-close-small' %}
              <span class="visually-hidden">{{ 'products.facets.clear_filter' | t }}</span>
            </span>
          </a>
        </facet-remove>
      {%- endfor -%}

      {%- if filter.type == 'price_range' -%}
        {%- if filter.min_value.value != null or filter.max_value.value != null -%}
          <facet-remove>
            <a href="{{ filter.url_to_remove }}" class="active-facets__button active-facets__button--light">
              <span class="active-facets__button-inner button button--tertiary">
                {%- if filter.min_value.value -%}
                  {{ filter.min_value.value | money }}
                {%- else -%}
                  {{ 0 | money }}
                {%- endif -%}
                -
                {%- if filter.max_value.value -%}
                  {{ filter.max_value.value | money }}
                {%- else -%}
                  {{ filter.range_max | money }}
                {%- endif -%}
                {% render 'icon-close-small' %}
                <span class="visually-hidden">{{ 'products.facets.clear_filter' | t }}</span>
              </span>
            </a>
          </facet-remove>
        {%- endif -%}
      {%- endif -%}
    {%- endfor -%}
    <facet-remove class="active-facets__button-wrapper">
      <a href="{{ results_url }}" class="active-facets__button-remove underlined-link">
        <span>{{ 'products.facets.clear_all' | t }}</span>
      </a>
    </facet-remove>
  </div>
  {% comment %} Sort, product count and filter pills at the end when filter is type of Drawer for the correct tabbing order {% endcomment %}
  {%- if enable_sorting and filter_type == 'drawer' -%}
    <facet-filters-form class="facets small-hide">
      <form id="FacetSortDrawerForm" class="facets__form">
        <div class="facet-filters sorting caption small-hide">
          <div class="facet-filters__field">
            <h2 class="facet-filters__label caption-large text-body">
              <label for="SortBy">{{ 'products.facets.sort_by_label' | t }}</label>
            </h2>
            <div class="select">
              {%- assign sort_by = results.sort_by | default: results.default_sort_by -%}
              <select
                name="sort_by"
                class="facet-filters__sort select__select caption-large"
                id="SortBy"
                aria-describedby="a11y-refresh-page-message"
              >
                {%- for option in results.sort_options -%}
                  <option
                    value="{{ option.value | escape }}"
                    {% if option.value == sort_by %}
                      selected="selected"
                    {% endif %}
                  >
                    {{ option.name | escape }}
                  </option>
                {%- endfor -%}
              </select>
              {% render 'icon-caret' %}
            </div>
          </div>

          <noscript>
            <button type="submit" class="facets__button-no-js button button--secondary">
              {{ 'products.facets.sort_button' | t }}
            </button>
          </noscript>
        </div>

        {% if results.current_vendor or results.current_type %}
          <input type="hidden" name="q" value="{{ results.current_vendor }}{{ results.current_type }}">
        {% endif %}

        {%- if results.terms -%}
          <input type="hidden" name="q" value="{{ results.terms | escape }}">
          <input name="options[prefix]" type="hidden" value="last">
        {%- endif -%}
      </form>
    </facet-filters-form>
  {%- endif -%}
  <div
    class="product-count light{% if filter_type == 'vertical' or filter_type == 'horizontal' %} medium-hide large-up-hide{% endif %}"
    role="status"
  >
    <h2 class="product-count__text text-body">
      <span id="ProductCount">
        {%- if results.results_count -%}
          {{ 'templates.search.results_with_count' | t: terms: results.terms, count: results.results_count }}
        {%- elsif results.products_count == results.all_products_count -%}
          {{ 'products.facets.product_count_simple' | t: count: results.products_count }}
        {%- else -%}
          {{
            'products.facets.product_count'
            | t: product_count: results.products_count, count: results.all_products_count
          }}
        {%- endif -%}
      </span>
    </h2>
    <div class="loading-overlay__spinner">
      <svg
        aria-hidden="true"
        focusable="false"
        class="spinner"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
      </svg>
    </div>
  </div>
  {%- if filter_type == 'drawer' -%}
    <facet-filters-form class="facets facets-pill small-hide">
      <form id="FacetFiltersPillsForm" class="facets__form">
        <div class="active-facets active-facets-desktop">
          {%- for filter in results.filters -%}
            {%- for value in filter.active_values -%}
              <facet-remove>
                <a href="{{ value.url_to_remove }}" class="active-facets__button active-facets__button--light">
                  <span class="active-facets__button-inner button button--tertiary">
                    {{ filter.label }}: {{ value.label | escape }}
                    {% render 'icon-close-small' %}
                    <span class="visually-hidden">{{ 'products.facets.clear_filter' | t }}</span>
                  </span>
                </a>
              </facet-remove>
            {%- endfor -%}

            {%- if filter.type == 'price_range' -%}
              {%- if filter.min_value.value != null or filter.max_value.value != null -%}
                <facet-remove>
                  <a href="{{ filter.url_to_remove }}" class="active-facets__button active-facets__button--light">
                    <span class="active-facets__button-inner button button--tertiary">
                      {%- if filter.min_value.value -%}
                        {{ filter.min_value.value | money }}
                      {%- else -%}
                        {{ 0 | money }}
                      {%- endif -%}
                      -
                      {%- if filter.max_value.value -%}
                        {{ filter.max_value.value | money }}
                      {%- else -%}
                        {{ filter.range_max | money }}
                      {%- endif -%}
                      {% render 'icon-close-small' %}
                      <span class="visually-hidden">{{ 'products.facets.clear_filter' | t }}</span>
                    </span>
                  </a>
                </facet-remove>
              {%- endif -%}
            {%- endif -%}
          {%- endfor -%}
          <facet-remove class="active-facets__button-wrapper">
            <a href="{{ results_url }}" class="active-facets__button-remove underlined-link">
              <span>{{ 'products.facets.clear_all' | t }}</span>
            </a>
          </facet-remove>
        </div>
      </form>
    </facet-filters-form>
  {%- endif -%}
</div>
