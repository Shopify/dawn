<template>
  <div class="product spaced-section">
    <div class="product__image__container breakout breakout--mobile" :class="classcolor">
      <img
        :src="image"
        alt="Your Personalized Cleanser"
        class="product__image__container__image"
      />
    </div>
    <div class="product__body">
      <span class="product__body__subtitle" v-text="subtitle"></span
      >
      <h2 class="product__body__title" data-cy="evyana-cleanser-title">
        {{title}}
      </h2>
      <button
          @click="addToCart"
          :disabled="isAdding"
          class="product__body__button">
        <div class="adding" style="width: 15px; height: 15px; margin-right: 10px;" v-if="isAdding"></div>
        <span class="product__body__button__title">TRY MY SYSTEM FREE</span>
        <span class="product__body__button__price">14 Days</span>
      </button>
      <p class="product__body__description" v-text="description"></p>
      <div class="product__body__tags">
<!--        <span class="product__body__tags__item">Eczema Level 1</span>-->
<!--        <span class="product__body__tags__item">Sensitivity Level 7</span>-->
<!--        <span class="product__body__tags__item">Dryness Level 6</span>-->
<!--        <span class="product__body__tags__item">Hyperpigmentation Level 6</span>-->
<!--        <span class="product__body__tags__item">Mild Dehydration</span>-->
<!--        <span class="product__body__tags__item">Acne Level 5</span>-->
<!--        <span class="product__body__tags__item">Wrinkles Level 5</span>-->
<!--        <span class="product__body__tags__item">Firmness Level 5</span>-->
<!--        <span class="product__body__tags__item">Humid Air</span>-->
      </div>
      <div class="product__body__ingredients">
        <h3 class="product__body__ingredients__title">
          Your Active ingredients:
        </h3>
        <div class="product__body__ingredients__carousel absoluted-wrap">
          <div class="wrap-carousel-inside-grid">
            <carousel :settings="settings" :breakpoints="breakpoints">
            <template v-for="(ingredient, index) in product.ingredients" :key="'concern' + index + 'skin-ingredients'">
              <slide v-if="ingredient.image"
              class="carousel__item"
            >
              <img
                class="carousel__item__image"
                :src="ingredient.image"
                :alt="ingredient.ConsumerTitle"
              />
              <span class="carousel__item__item">{{
                ingredient.ConsumerTitle
              }}</span>

            </slide>
            </template>
            <template #addons>
              <navigation />
            </template>
          </carousel>
          </div>
        </div>

        <button
          v-on:click="showIngredients = !showIngredients"
          class="product__body__ingredients__button"
        >
          Full Ingredients List +
        </button>
        <transition-group
          v-if="showIngredients"
          name="fadeLeft"
          tag="ul"
          class="product__body__ingredients__list"
        >
          <li
            class="product__body__ingredients__list__item"
            v-for="(ing, index) in product.full_ingredients"
            :key="index + 'producting'"
          >
            {{ ing.title }}
          </li>
        </transition-group>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
// import productCopy from "../../mixins/productCopy";
import productCopy from "../../mixins/productCopy";
import CarouselBreakpoints from "../../mixins/CarouselBreakpoints"
export default {
  name: "Product",
  props: ["product"],
  mixins:[productCopy, CarouselBreakpoints],
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      isAdding: false,
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
      showIngredients: false,
    };
  },
  computed: {
    lookupTitle(){
      const lookup = this.product.title
          .replace(/\s/g, "")
          .replace("\\", "")
          .replace("/", "")
          .toLowerCase();
      return lookup;
    },
    classcolor(){
      return this.$data[this.lookupTitle] ? this.$data[this.lookupTitle].class : '';
    },
    title() {
      return this.$data[this.lookupTitle] ? this.$data[this.lookupTitle].title : this.product.title;
    },
    subtitle() {
      return this.$data[this.lookupTitle] ? this.$data[this.lookupTitle].subtitle : this.product.subtitle;
    },
    description() {
      return this.$data[this.lookupTitle] ? this.$data[this.lookupTitle].description : this.product.description;
    },
    image() {
      return this.$data[this.lookupTitle] ? this.$data[this.lookupTitle].image : this.product.image;
    },
    type() {
      return this.$data[this.lookupTitle] ? this.$data[this.lookupTitle].type : 'product';
    },
    price() {
      return this.$data[this.lookupTitle] ? this.$data[this.lookupTitle].price : '';
    },
  },
  methods: {
    async addToCart(){
      this.isAdding = true;
      await fetch(
          '/cart/clear.js',
          {
            method: "POST"
          }
      );
      const result = await fetch("/cart/add.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          id: 39956980826155,
          quantity: 1,
          selling_plan: 506331179
        })
      })
      window.location.href = '/checkout';
      this.isAdding = false;
    },

  },
};
</script>

<style scoped>
.mt-5 {
  margin-top: 2.5rem;
}
</style>