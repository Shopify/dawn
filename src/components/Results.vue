<template>
  <template v-if="isReady">
    <div class="result-container page-width">
      <div class="welcome">
        <img class="hero"
             src="https://www.provenskincare.com/cdn-cgi/image/f=auto,onerror=redirect/https://media.provenskincare.com/img/results/1120mega-3products-desktop.png"
             alt="PROVEN system">
        <div class="welcome__meet">
            <h1>{{ results.user.name }}, <br>meet your <br><span>custom skincare</span></h1>
          <p>PROVEN’s
            scientists have formulated your skincare system with clean and scientific ingredients to cleanse, protect,
            and renew your particular skin.</p>
          <span>Learn More</span>
        </div>
        <button class="cta button step-button step-button-next" aria-label="Get my system">
          GET MY SYSTEM
        </button>
        <div class="ctainfo">
          <div class="ctainfo__inline">
            <span>4-Product System</span>
            <span class="big">$129.99</span>
            <span class="strike">$189.97 USD</span>
          </div>
          <span class="save">SAVE $60 + FREE SHIPPING</span>
        </div>
        <span class="cta__muted muted-small">4-product system auto-refilled. Cancel Anytime</span>
      </div>
      <template v-for="(concern, index) in results.skin" :key="index + 'skin'">
        <template v-if="concernDisplay(concern.title)">
          <div :class="(index % 2 == 0) ? 'result-card-reverse' : 'result-card'">
          <div class="image-container">
            <svg class="pattern" fill="currentColor" viewBox="0 0 60 60" role="img" aria-labelledby="svg-workcation">
              <defs>
                <pattern id="ad119f34-7694-4c31-947f-5c9d249b21f3" x="0" y="0" width="10" height="10"
                         patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="7" height="7" class="text-gray-200" fill="currentColor"></rect>
                </pattern>
              </defs>
              <rect width="60" height="60" fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"></rect>
            </svg>
            <div class="img-src">
              <figure class="image-with-tag">
                <img :src="copyBeforeImage(concern.title)" alt="Before"/>
                <figcaption class="image-tag">Before</figcaption>
              </figure>
              <figure class="image-with-tag">
                <img :src="copyAfterImage(concern.title)" alt="After"/>
                <figcaption class="image-tag">After</figcaption>
              </figure>
            </div>
          </div>
          <div class="targets">
            <h2>Your system targets</h2>
            <h1 v-text="concern.title"></h1>
            <p v-text="copyDescription(concern.title)"></p>
          </div>
          <div class="result-ing">
            <template v-if="concern.ingredients.length !== 0">
              <h4 class="src-components-account-congratulationsAB-B-results-shared-ingredients-slider-___styles__title___232vw">
                Ingredients</h4>
              <div class="">
                <carousel :breakpoints="breakpoints">
                  <template v-for="(ingredient, index) in concern.ingredients"
                            :key="'concern'+index + 'skin-ingredients'">
                    <slide style="">
                      <div class="carousel__item">
                        <img
                            src="https://dl7bo1dy930sf.cloudfront.net/img/results/ingredient-images/Green-Tea-Extract.png"/>
                        <span>{{ ingredient.ConsumerTitle }}</span>
                      </div>
                    </slide>
                  </template>
                  <template #addons>
                    <navigation/>
                  </template>
                </carousel>
              </div>
            </template>
          </div>
          <div class="image-about">
            <div class="quote-container">
              <svg
                  class="quote-svg"
                  stroke="currentColor" fill="none" viewBox="0 0 144 144" aria-hidden="true">
                <path stroke-width="2"
                      d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"/>
              </svg>
              <blockquote class="border-none">
                <h1 v-if="copyClinicalPercent(concern.title)">{{copyClinicalPercent(concern.title)}}%</h1>
                <p>{{copyClinicalText(concern.title)}}</p>
              </blockquote>
            </div>
          </div>
        </div>
        </template>
      </template>
    </div>
  </template>

  <div class="loading-evyana" v-if="!isReady" style="background: #fff">
    <img :src="'/assets/transition-desktop-cosmo2.gif'" alt="">
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

const Token = "0DaJUC7nMCkGSuRoFHl4Xr6TWBCEJzCZav8AMLV7";
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';
import concernCopy from "../mixins/concernCopy"
export default {
  name: "Results",
  mixins: [concernCopy],
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      breakpoints: {
        0: {
          itemsToShow: 1,
          wrapAround: false,
          snapAlign: 'start'
        },
        1000: {
          itemsToShow: 4.95,
          wrapAround: false,
          snapAlign: 'center'
        }
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
      }, 6000);
    });
  },
  methods: {
    getLookupTitle(title){
      const lookup = title.replace(/\s/g,'').replace('\\', '').replace('/', '').toLowerCase()
      console.log(lookup)
      if(!this.$data[lookup]){
        return false
      }
      return lookup
    },
    concernDisplay(title){
      const lookup = this.getLookupTitle(title)
      return !lookup ? false: this.$data[lookup].display
    },
    copyClinicalPercent(title) {
      const lookup = this.getLookupTitle(title)
      return !lookup ? '': this.$data[lookup].clinical_percent
    },
    copyClinicalText(title) {
      const lookup = this.getLookupTitle(title)
      return !lookup ? '': this.$data[lookup].clinical_text
    },
    copyDescription(title) {
      const lookup = this.getLookupTitle(title)
      return !lookup ? '': this.$data[lookup].description
    },
    copyBeforeImage(title) {
      const lookup = this.getLookupTitle(title)
      return !lookup ? '': this.$data[lookup].img_before
    },
    copyAfterImage(title) {
      const lookup = this.getLookupTitle(title)
      return !lookup ? '': this.$data[lookup].img_after
    }

  },
};
</script>

<style>
</style>