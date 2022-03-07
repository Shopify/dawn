<template>
  <template v-if="isReady">
    <div class="result-container">
      <div class="result-card">
      <div class="">
        <h2>Your system targets</h2>
        <h1>Rosacea</h1>
        <p>In an independent clinical study, 77% of people reported a brighter and more uniform complexion with PROVEN's
          personalized regime.*</p>
        <div class="result-ing">
          <h4 class="src-components-account-congratulationsAB-B-results-shared-ingredients-slider-___styles__title___232vw">
            Ingredients</h4>
          <div class="">
            <div class="slick-list">
              <div class="slick-item" style="">
                <img src="https://dl7bo1dy930sf.cloudfront.net/img/results/ingredient-images/Green-Tea-Extract.png"/>
                <span>Green Tea Extract</span>
              </div>
              <div class="slick-item" style="">
                <img src="https://dl7bo1dy930sf.cloudfront.net/img/results/ingredient-images/Green-Tea-Extract.png"/>
                <span>Green Tea Extract</span>
              </div>
              <div class="slick-item" style="">
                <img src="https://dl7bo1dy930sf.cloudfront.net/img/results/ingredient-images/Green-Tea-Extract.png"/>
                <span>Green Tea Extract</span>
              </div>
              <div class="slick-item" style="">
                <img src="https://dl7bo1dy930sf.cloudfront.net/img/results/ingredient-images/Green-Tea-Extract.png"/>
                <span>Green Tea Extract</span>
              </div>
              <div class="slick-item" style="">
                <img src="https://dl7bo1dy930sf.cloudfront.net/img/results/ingredient-images/Green-Tea-Extract.png"/>
                <span>Green Tea Extract</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <figure class="image-with-tag">
          <img src="https://dl7bo1dy930sf.cloudfront.net/img/results/redness-before2.jpg" alt="Before"/>
          <figcaption class="image-tag">Before</figcaption>
        </figure>
        <figure class="image-with-tag">
          <img src="https://dl7bo1dy930sf.cloudfront.net/img/results/redness-after2.jpg" alt="After"/>
          <figcaption class="image-tag">After</figcaption>
        </figure>
      </div>
    </div>
    </div>>

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

export default {
  name: "Results",
  components: {},
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
      }, 6000);
    });
  },
  methods: {},
};
</script>

<style>
</style>