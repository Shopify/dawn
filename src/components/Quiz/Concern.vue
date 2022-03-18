<template>
    <div v-if="show"
        class="result spaced-section slide animation-element" v-bind:class="{ 'in-view': index === 0 }">
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
        <div class="result__images__container">
          <figure class="result__images__container__figure">
            <img
                class="result__images__container__figure__image"
                :src="beforeImage"
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
                :src="afterImage"
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
        <h1 class="result__body__title" v-text="title"></h1>
        <p
            class="result__body__about"
            v-text="description"
        ></p>
      </div>
      <div class="result__ingredient">
        <template v-if="concern.ingredients.length !== 0">
          <h4 class="">Ingredients</h4>
          <div class="">
            <carousel :settings="settings" :breakpoints="breakpoints">
              <slide v-for="(ingredient, index) in concern.ingredients"
                  :key="'concern' + index + 'skin-ingredients'">
                <div class="carousel__item">
                  <img class="carousel__item__image"
                      src="https://dl7bo1dy930sf.cloudfront.net/img/results/ingredient-images/Green-Tea-Extract.png"
                  />
                  <!-- <img :src="ingredient.image"/>-->
                  <span class="carousel__item__title" v-text="ingredient.ConsumerTitle"></span>
                </div>
              </slide>
              <template #addons>
                <navigation />
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
              v-if="percent" v-text="percent + '%'">
          </h1>
          <p class="result__quote_container__blockquote__body" v-text="percentBody"></p>
        </blockquote>
      </div>
    </div>
</template>
<script>
import { Carousel, Slide, Navigation } from "vue3-carousel";
import concernCopy from "../../mixins/concernCopy";
import CarouselBreakpoints from "../../mixins/CarouselBreakpoints"
export default {
  name: "Concern",
  props: ["concern", "index"],
  mixins:[concernCopy,CarouselBreakpoints],
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      currentInfo: false,
      visible: false,
    };
  },
  computed: {
    lookupTitle(){
      const lookup = this.concern.title
          .replace(/\s/g, "")
          .replace("\\", "")
          .replace("/", "")
          .toLowerCase();
      return lookup;
    },
    title() {
      return this.$data[this.lookupTitle] ? this.$data[this.lookupTitle].title : this.product.title;
    },
    beforeImage() {
      return this.$data[this.lookupTitle] ? this.$data[this.lookupTitle].img_before : false;
    },
    afterImage() {
      return this.$data[this.lookupTitle] ? this.$data[this.lookupTitle].img_after : false;
    },
    description() {
      return this.$data[this.lookupTitle] ? this.$data[this.lookupTitle].description : '';
    },
    percent() {
      return this.$data[this.lookupTitle] ? this.$data[this.lookupTitle].clinical_percent : false;
    },
    percentBody() {
      return this.$data[this.lookupTitle] ? this.$data[this.lookupTitle].clinical_text : false;
    },
    show(){
      return this.$data[this.lookupTitle] ? this.$data[this.lookupTitle].display : false;
    }
  },
  methods: {
    onChange(entry, unobserve) {
      // After loading Cancel monitoring, optimise performance
      console.log(this.concern.title)
      if (entry.isIntersecting) {
        unobserve()
      }
      this.currentInfo = entry.isIntersecting ? this.imageSrc : 'https://avatars2.githubusercontent.com/u/20992106?s=460&v=4'
    }
  },
};
</script>