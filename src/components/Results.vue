<template>
  <template v-if="isReady">
    <div class="result-container page-width">
      <div class="grid welcome">
        <img
          class="welcome__image"
          src="https://www.provenskincare.com/cdn-cgi/image/f=auto,onerror=redirect/https://media.provenskincare.com/img/results/1120mega-3products-desktop.png"
          alt="PROVEN system"
        />
        <div class="welcome__body">
          <h1 class="welcome__body__title">
            {{ results.user.name }}, <br />meet your <br /><span
              class="highlight"
              >custom skincare</span
            >
          </h1>
          <p>
            PROVEN’s scientists have formulated your skincare system with clean
            and scientific ingredients to cleanse, protect, and renew your
            particular skin.
          </p>
          <span class="welcome__body__more">Learn More</span>
        </div>
        <button class="welcome__cta button" aria-label="Get my system">
          GET MY SYSTEM
        </button>
        <div class="welcome__ctainfo breakout">
          <div class="welcome__ctainfo__body">
            <span>4-Product System</span>
            <span class="welcome_ctainfo__title highlight">$129.99</span>
            <span class="strike">$189.97 USD</span>
          </div>
          <span class="highlight">SAVE $60 + FREE SHIPPING</span>
        </div>
        <span class="muted center"
          >4-product system auto-refilled. Cancel Anytime</span
        >
      </div>
      <template v-for="(concern, index) in results.skin" :key="index + 'skin'">
        <template v-if="concernDisplay(concern.title)">
          <div
            :class="
              'result animation-element spaced-section ' +
              (index === 0 ? ' in-view' : '')
            "
          >
            <div class="result__images">
              <svg
                class="result__images__container__pattern"
                fill="currentColor"
                viewBox="0 0 60 60"
                role="img"
                aria-labelledby="svg-workcation"
              >
                <defs>
                  <pattern
                    id="ad119f34-7694-4c31-947f-5c9d249b21f3"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="7"
                      height="7"
                      class="text-gray-200"
                      fill="currentColor"
                    ></rect>
                  </pattern>
                </defs>
                <rect
                  width="60"
                  height="60"
                  fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
                ></rect>
              </svg>
              <div class="grid result__images__container">
                <figure class="result__images__container__figure">
                  <img
                    class="result__images__container__figure__image"
                    :src="copyBeforeImage(concern.title)"
                    alt="Before"
                  />
                  <figcaption
                    class="result__images__container__figure__caption"
                  >
                    Before
                  </figcaption>
                </figure>
                <figure class="result__images__container__figure">
                  <img
                    class="result__images__container__figure__image"
                    :src="copyAfterImage(concern.title)"
                    alt="After"
                  />
                  <figcaption
                    class="result__images__container__figure__caption"
                  >
                    After
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="result__body">
              <h2 class="result__body__targets">Your system targets</h2>
              <h1 class="result__body__title" v-text="concern.title"></h1>
              <p
                class="result__body__about"
                v-text="copyDescription(concern.title)"
              ></p>
            </div>
            <div class="result__ingredient">
              <template v-if="concern.ingredients.length !== 0">
                <h4 class="">Ingredients</h4>
                <div class="">
                  <carousel
                    :settings="settings" :breakpoints="breakpoints"
                  >
                    <slide
                      v-for="(ingredient, index) in concern.ingredients"
                      :key="'concern' + index + 'skin-ingredients'"
                    >
                      <div class="carousel__item">
                        <img
                          class="carousel__item__image"
                          src="https://dl7bo1dy930sf.cloudfront.net/img/results/ingredient-images/Green-Tea-Extract.png"
                        />
                        <!-- <img :src="ingredient.image"/>-->
                        <span class="carousel__item__title">{{
                          ingredient.ConsumerTitle
                        }}</span>
                      </div>
                    </slide>
                    <template #addons>
                      <navigation />
                      <pagination />
                    </template>
                  </carousel>
                </div>
              </template>
            </div>
            <div class="result__quote__container">
              <svg
                class="result__quote__container__svg"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 144 144"
                aria-hidden="true"
              >
                <path
                  stroke-width="2"
                  d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                />
              </svg>
              <blockquote class="result__quote_container__blockquote">
                <h1
                  class="result__quote_container__blockquote__title"
                  v-if="copyClinicalPercent(concern.title)"
                >
                  {{ copyClinicalPercent(concern.title) }}%
                </h1>
                <p class="result__quote_container__blockquote__body">
                  {{ copyClinicalText(concern.title) }}
                </p>
              </blockquote>
            </div>
          </div>
        </template>
      </template>
      <template
        v-for="(product, index) in results.products"
        :key="index + 'product'"
      >
        <product :product="product"></product>
      </template>
      <div class="subscribe spaced-section animation-element">
        <h1>Subscribe & Thrive</h1>
        <p>
          Our subscribers get more than products – we go above and beyond to
          help you achieve your skincare goals. Get access to our team of
          estheticians and wellness experts, on demand on your PROVEN dashboard
          or via email.
        </p>
        <div class="subscribe__grid grid">
          <div class="subscribe__grid__item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <h4>Priority Support</h4>
            <p>
              PROVEN members get priority support for all their questions and
              concerns
            </p>
          </div>
          <div class="subscribe__grid__item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <h4>Priority Support</h4>
            <p>
              PROVEN members get priority support for all their questions and
              concerns
            </p>
          </div>
          <div class="subscribe__grid__item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <h4>Priority Support</h4>
            <p>
              PROVEN members get priority support for all their questions and
              concerns
            </p>
          </div>
          <div class="subscribe__grid__item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <h4>Priority Support</h4>
            <p>
              PROVEN members get priority support for all their questions and
              concerns
            </p>
          </div>
        </div>
      </div>
      <div class="breakout highlight__container spaced-section">
        <ul class="highlight__list">
          <li class="highlight__list__item">Award-Winning Technology</li>
          <li class="highlight__list__item">Dermatologist Recommended</li>
          <li class="highlight__list__item">Clean & Non-Toxic</li>
          <li class="highlight__list__item">Made In USA</li>
        </ul>
      </div>
    </div>
  </template>

  <div class="loading-evyana" v-if="!isReady" style="background: #fff">
    <img :src="'/assets/transition-desktop-cosmo2.gif'" alt="" />
    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="200" viewBox="0 0 214 25">
      <path
          class="cls-1"
          d="M0 25V0h13.6v2.3H2.5v9h10.7v2.2H2.5v9.2h11V25zM45.1 25h-2.4L32.5 0h2.8L44 21.9 52.7 0h2.7zM83.6 16.6V25h-2.4v-8.4L72.6 0h2.7l7 14 7.3-14h2.7zM120.2 0h-2.8l-10.6 25h2.6l3-6.8L118.8 3l5.7 13.7 3.6 8.4h2.7zM203.3 0h-2.7l-10.7 25h2.6l3-6.8L202 3l5.7 13.7 3.6 8.4h2.7zM167.8 25L153 3v22h-2.4V0h3.3l14 20.7V0h2.4v25z"
      ></path>
    </svg>

    <div id="loading"></div>

    <p class="text-loading">
      3 minutes to your best skincare, let's go!
    </p> -->
  </div>
</template>

<script>
// import Multiselect from "vue-multiselect";

import "@vueform/multiselect/themes/default.css";
import Product from "./Quiz/Product";

const Token = "0DaJUC7nMCkGSuRoFHl4Xr6TWBCEJzCZav8AMLV7";
import concernCopy from "../mixins/concernCopy";
import animation from "../mixins/animation";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "Results",
  mixins: [concernCopy, animation],
  components: {
    Product,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      settings: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
      isReady: false,
      results: [],
    };
  },
  computed: {},
  async mounted() {
    const response = await fetch(
      "https://mellow-badlands-ejgkwjycd9xj.vapor-farm-c1.com/api/quiz/1/lead/93f99a44-cd35-4b7b-9211-92fe60755e84/results",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + Token,
        },
      }
    );
    response.json().then(async (rs) => {
      this.results = rs.data;
      console.log(this.results);
      setTimeout(() => {
        this.isReady = true;
      }, 1000);
    });
  },
  methods: {
    getLookupTitle(title) {
      const lookup = title
        .replace(/\s/g, "")
        .replace("\\", "")
        .replace("/", "")
        .toLowerCase();
      console.log(lookup);
      if (!this.$data[lookup]) {
        return false;
      }
      return lookup;
    },
    concernDisplay(title) {
      const lookup = this.getLookupTitle(title);
      return !lookup ? false : this.$data[lookup].display;
    },
    copyClinicalPercent(title) {
      const lookup = this.getLookupTitle(title);
      return !lookup ? "" : this.$data[lookup].clinical_percent;
    },
    copyClinicalText(title) {
      const lookup = this.getLookupTitle(title);
      return !lookup ? "" : this.$data[lookup].clinical_text;
    },
    copyDescription(title) {
      const lookup = this.getLookupTitle(title);
      return !lookup ? "" : this.$data[lookup].description;
    },
    copyBeforeImage(title) {
      const lookup = this.getLookupTitle(title);
      return !lookup ? "" : this.$data[lookup].img_before;
    },
    copyAfterImage(title) {
      const lookup = this.getLookupTitle(title);
      return !lookup ? "" : this.$data[lookup].img_after;
    },
  },
};
</script>

<style>
</style>