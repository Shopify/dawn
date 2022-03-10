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
        <concern :concern="concern" />
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
import Concern from "./Quiz/Concern"

export default {
  name: "Results",
  mixins: [concernCopy, animation],
  components: {
    Product,
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Concern
  },
  data() {
    return {
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

  },
};
</script>

<style>
</style>