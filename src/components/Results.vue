<template>
  <template v-if="isReady">
    <div class="result-container page-width">
      <div class="welcome">
        <img
            class="welcome__image"
            src="https://www.provenskincare.com/cdn-cgi/image/f=auto,onerror=redirect/https://media.provenskincare.com/img/results/1120mega-3products-desktop.png"
            alt="PROVEN system"
        />
        <div class="welcome__body">
          <h1 class="welcome__body__title">
            {{ results.user.name }}, <br/>meet your <br/><span
              class="highlight"
          >custom skincare</span
          >
          </h1>
          <p>
            PROVEN’s scientists have formulated your skincare system with clean
            and scientific ingredients to cleanse, protect, and renew your
            particular skin.
          </p>
          <div class="welcome__body__more">
            <span class="welcome__body__more_description">Learn More</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="welcome__body__more__image" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>

        </div>
        <button class="welcome__cta button" aria-label="Get my system">
          GET MY SYSTEM
        </button>
        <div class="welcome__ctainfo breakout breakout--mobile">
          <div class="welcome__ctainfo__body">
            <span>4-Product System</span>
            <span class="welcome_ctainfo__title highlight">$129.99</span>
            <span class="strike">$189.97 USD</span>
          </div>
          <span class="highlight">SAVE $60 + FREE SHIPPING</span>
        </div>
        <span class="welcome_ctainfo__disclaimer muted center"
        >4-product system auto-refilled. Cancel Anytime</span
        >
      </div>
      <template v-for="(concern, index) in results.skin" :key="index + 'skin'">
        <concern :concern="concern"/>
      </template>

      <div class="spaced-section enviroment">
        <h1 class="everything__title">Enviroment section goes here</h1>
      </div>

      <div class="spaced-section lifestyle">
        <h1 class="everything__title">Lifestyle Section goes here</h1>
      </div>

      <div class="spaced-section everything">
        <img class="everything__image" src="https://www.provenskincare.com/cdn-cgi/image/f=auto,onerror=redirect/https://media.provenskincare.com/img/results/inside-your-proven-img-mobile.png"/>
        <h1 class="everything__title">Everything You Need in One Simple System</h1>
        <p class="everything__body">Your system has 3 multi-taskers that each do the job of several products - we’ve streamlined the cleansing, exfoliating, toning, hydrating, protecting and nourishing phases into a refined, powerful, and simple routine. Your skin is thoroughly cared for in just 3 products, saving you time, money and effort.</p>
      </div>
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
        <div class="subscribe__grid">
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
          <li class="highlight__list__item">
            <svg class="highlight__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><defs></defs><title>badge</title><polygon points="23 2 24.593 5 28 5.414 25.5 7.667 26 11 23 9.125 20 11 20.5 7.667 18 5.414 21.5 5 23 2"></polygon><path d="M22.7168,13.249l-1.9375-.498A6.9942,6.9942,0,1,1,15.7505,4.22l.499-1.9365A8.99,8.99,0,0,0,8,17.689V30l6-4,6,4V17.7078A8.9627,8.9627,0,0,0,22.7168,13.249ZM18,26.2627l-4-2.6665-4,2.6665V19.05a8.9238,8.9238,0,0,0,8,.0062Z"></path><rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" class="cls-1" width="32" height="32" style="fill:none"></rect></svg>
            <span class="highlight__body">Award-Winning Technology</span></li>
          <li class="highlight__list__item">
            <svg class="highlight__svg" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="currentColor"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M13,11.33L18,18H6l5-6.67V6h2 M15.96,4H8.04C7.62,4,7.39,4.48,7.65,4.81L9,6.5v4.17L3.2,18.4C2.71,19.06,3.18,20,4,20h16 c0.82,0,1.29-0.94,0.8-1.6L15,10.67V6.5l1.35-1.69C16.61,4.48,16.38,4,15.96,4L15.96,4z"></path></g></svg>
            <span class="highlight__body">Dermatologist Recommended</span></li>
          <li class="highlight__list__item">
            <svg class="highlight__svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5883 2.36575L12.5166 2.44429C12.4102 2.5604 12.3177 2.65963 12.2363 2.7445C12.1783 2.6674 12.131 2.60442 12.1069 2.57222C12.0962 2.55804 12.0901 2.54982 12.0895 2.54901C11.781 2.14919 11.521 1.85543 11.2421 1.61995C10.8599 1.29718 10.4625 1.10176 10 1.10176C9.75073 1.10176 9.51343 1.16296 9.29033 1.27123C8.80211 1.50815 8.44017 1.90299 7.95721 2.57792C7.93063 2.61506 7.88552 2.67912 7.83669 2.74871C7.74548 2.6579 7.64046 2.55003 7.51765 2.42149L7.44953 2.35008C6.89581 1.76866 6.74857 1.6202 6.50141 1.4188C6.26666 1.22751 6.05621 1.09922 5.79569 1.03537C5.22149 0.894639 4.64828 1.18504 4.43938 1.76057C4.1503 2.55696 4 3.41174 4 4.28812C4 8.2285 6.21172 11 10 11C13.7883 11 16 8.2285 16 4.28812C16 3.41174 15.8497 2.55696 15.5606 1.76057C15.3529 1.18826 14.7801 0.89035 14.2009 1.03736C13.938 1.10408 13.7302 1.23584 13.4994 1.43184C13.2609 1.63445 13.1249 1.77767 12.5883 2.36575ZM10 9.00002C7.42805 9.00002 6 7.21053 6 4.28812C6 4.10858 6.00853 3.93059 6.02539 3.75471L6.07157 3.80311C6.48039 4.23101 6.73147 4.4747 6.99228 4.67463C7.63975 5.17099 8.29621 5.36404 8.89641 4.67838C9.00414 4.55531 9.10967 4.4156 9.25158 4.21495C9.26057 4.20223 9.28945 4.16095 9.32704 4.10719C9.41015 3.98837 9.53586 3.80861 9.58368 3.74178C9.75942 3.4962 9.90624 3.31505 10.0126 3.20218C10.1467 3.32743 10.3081 3.51428 10.5059 3.77068C10.4612 3.71264 11.0562 4.50836 11.2051 4.67838C11.8078 5.36697 12.4722 5.16831 13.1048 4.66706C13.3559 4.46807 13.5972 4.22516 13.9795 3.80818C13.9931 3.96663 14 4.12675 14 4.28812C14 7.21053 12.572 9.00002 10 9.00002Z" fill="currentColor"></path><path d="M9 11C9 10.4477 9.44772 10 10 10C10.5523 10 11 10.4477 11 11V17.5C11 18.0523 10.5523 18.5 10 18.5C9.44772 18.5 9 18.0523 9 17.5V11Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.7672 13.015C9.58159 14.8489 8.14539 17.1796 9.32942 18.5906C10.4954 19.9802 13.7081 19.2188 15.6239 17.6112C17.4921 16.0436 18.344 13.7765 17.18 12.3893C16.016 11.0021 13.6354 11.4474 11.7672 13.015ZM10.9199 17.3432C10.9062 17.3379 10.8943 17.3318 10.8841 17.325L10.9024 17.3544C10.9103 17.3611 10.915 17.3586 10.9199 17.3432ZM14.3383 16.0792C13.2305 17.0087 11.3237 17.5007 10.9199 17.3432C10.9221 17.3361 10.9244 17.3262 10.927 17.3132C10.9648 17.1241 11.0828 16.8557 11.2748 16.5442C11.6794 15.8876 12.3519 15.1352 13.0528 14.5471C14.1872 13.5951 15.3919 13.3698 15.6479 13.6749C15.9039 13.98 15.4728 15.1272 14.3383 16.0792Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.93234 13.015C10.1179 14.8489 11.5541 17.1796 10.3701 18.5906C9.20411 19.9802 5.99142 19.2188 4.07561 17.6112C2.20741 16.0436 1.35552 13.7765 2.51954 12.3893C3.68355 11.0021 6.06414 11.4474 7.93234 13.015ZM8.77963 17.3432C8.79329 17.3379 8.80524 17.3318 8.81537 17.325L8.79712 17.3544C8.78924 17.3611 8.78449 17.3586 8.77963 17.3432ZM5.36119 16.0792C6.46901 17.0087 8.37582 17.5007 8.77963 17.3432C8.77738 17.3361 8.77511 17.3262 8.7725 17.3132C8.73467 17.1241 8.61671 16.8557 8.42471 16.5442C8.02015 15.8876 7.34762 15.1352 6.64676 14.5471C5.5123 13.5951 4.30762 13.3698 4.05162 13.6749C3.79563 13.98 4.22673 15.1272 5.36119 16.0792Z" fill="currentColor"></path></svg>
            <span class="highlight__body">Clean & Non-Toxic</span></li>
          <li class="highlight__list__item">
            <svg class="highlight__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M 3 7 L 3 17 L 15 17 L 17 17 L 29 17 L 29 15 L 17 15 L 17 13 L 29 13 L 29 11 L 17 11 L 17 9 L 29 9 L 29 7 L 17 7 L 15 7 L 3 7 z M 5 8 C 5.552 8 6 8.448 6 9 C 6 9.552 5.552 10 5 10 C 4.448 10 4 9.552 4 9 C 4 8.448 4.448 8 5 8 z M 9 8 C 9.552 8 10 8.448 10 9 C 10 9.552 9.552 10 9 10 C 8.448 10 8 9.552 8 9 C 8 8.448 8.448 8 9 8 z M 13 8 C 13.552 8 14 8.448 14 9 C 14 9.552 13.552 10 13 10 C 12.448 10 12 9.552 12 9 C 12 8.448 12.448 8 13 8 z M 7 11 C 7.552 11 8 11.448 8 12 C 8 12.552 7.552 13 7 13 C 6.448 13 6 12.552 6 12 C 6 11.448 6.448 11 7 11 z M 11 11 C 11.552 11 12 11.448 12 12 C 12 12.552 11.552 13 11 13 C 10.448 13 10 12.552 10 12 C 10 11.448 10.448 11 11 11 z M 15 11 C 15.552 11 16 11.448 16 12 C 16 12.552 15.552 13 15 13 C 14.448 13 14 12.552 14 12 C 14 11.448 14.448 11 15 11 z M 5 14 C 5.552 14 6 14.448 6 15 C 6 15.552 5.552 16 5 16 C 4.448 16 4 15.552 4 15 C 4 14.448 4.448 14 5 14 z M 9 14 C 9.552 14 10 14.448 10 15 C 10 15.552 9.552 16 9 16 C 8.448 16 8 15.552 8 15 C 8 14.448 8.448 14 9 14 z M 13 14 C 13.552 14 14 14.448 14 15 C 14 15.552 13.552 16 13 16 C 12.448 16 12 15.552 12 15 C 12 14.448 12.448 14 13 14 z M 3 19 L 3 21 L 29 21 L 29 19 L 3 19 z M 3 23 L 3 25 L 29 25 L 29 23 L 3 23 z"></path></svg>
            <span class="highlight__body">Made In USA</span></li>
        </ul>
      </div>
    </div>
  </template>

  <div class="loading-evyana" v-if="!isReady" style="background: #fff">
    <img src="//d201v9s59ezpea.cloudfront.net/searching.gif" alt="loading"/>
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

const Token = "999999999911111111aaaaaa";
import concernCopy from "../mixins/concernCopy";
import animation from "../mixins/animation";
import "vue3-carousel/dist/carousel.css";
import {Carousel, Slide, Pagination, Navigation} from "vue3-carousel";
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
    this.localQuiz = localStorage.getItem("quiz");
    if(!this.localQuiz){
      this.$router.push("/quiz");
      return;
    }
    this.localQuiz = JSON.parse(this.localQuiz);
    const response = await fetch(
        `https://mellow-badlands-ejgkwjycd9xj.vapor-farm-c1.com/api/quiz/1/lead/${this.localQuiz.id}/results`,
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
  methods: {},
};
</script>

<style>
</style>