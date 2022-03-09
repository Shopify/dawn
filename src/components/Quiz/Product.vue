<template>
  <div class="product grid">
    <div class="product__image__container breakout">
      <img
        src="https://www.provenskincare.com/cdn-cgi/image/f=auto,onerror=redirect/https://media.provenskincare.com/img/home/cleanser-individual-bottle.png"
        alt="Your Personalized Cleanser"
        class="product__image__container__image"
      />
    </div>
    <div class="product__body">
      <span class="product__body__subtitle"
        >Cleanser, toner and exfoliator in one</span
      >
      <h2 class="product__body__title" data-cy="proven-cleanser-title">
        Your Personalized {{ product.title }}
      </h2>
      <button class="product__body__button">
        <span class="product__body__button__title">GET CLEANSER</span>
        <span class="product__body__button__price">$34.99 USD</span>
      </button>
      <p class="product__body__description">
        A 3-in-1 cleanser, toner, and exfoliator, your personalized step one
        gently cleans pores, dirt and impurities. Mandelic acid accelerates cell
        turnover by gently exfoliating dead skin cells and boosts collagen
        production. Powerhouse Azelaic Acid clears the bumps and swelling caused
        by rosacea. Sodium Hyaluronate and Primrose oil evenly hydrate and
        smooth the skin for smoothness and reduced fine lines while also
        protecting skin from hard water deposits. This multifunctional cleanser
        helps maximize absorption of all the nutrients to come in your
        personalized moisturizers.
      </p>
      <div class="product__body__tags">
        <span class="product__body__tags__item">Eczema Level 1</span>
        <span class="product__body__tags__item">Sensitivity Level 7</span>
        <span class="product__body__tags__item">Dryness Level 6</span>
        <span class="product__body__tags__item">Hyperpigmentation Level 6</span>
        <span class="product__body__tags__item">Mild Dehydration</span>
        <span class="product__body__tags__item">Acne Level 5</span>
        <span class="product__body__tags__item">Wrinkles Level 5</span>
        <span class="product__body__tags__item">Firmness Level 5</span>
        <span class="product__body__tags__item">Humid Air</span>
      </div>
      <div class="product__body__ingredients">
        <h3 class="product__body__ingredients__title">Your Active ingredients:</h3>
        <div class="product__body__ingredients__carousel">
<!--          <carousel :itemsToShow="12" :itemsToScroll="3" :snapAlign="'start'">-->
              <div
                  v-for="(ingredient, index) in product.ingredients"
                  :key="'concern' + index + 'skin-ingredients'"
                  class="carousel__item">
                <img class="carousel__item__image"
                  src="https://dl7bo1dy930sf.cloudfront.net/img/results/ingredient-images/Green-Tea-Extract.png"
                  alt="{{ ingredient.ConsumerTitle }}"
                />
                <span class="carousel__item__item">{{ ingredient.ConsumerTitle }}</span>
              </div>
<!--            <template #addons>-->
<!--              <navigation />-->
<!--              <pagination />-->
<!--            </template>-->
<!--          </carousel>-->
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
          <li class="product__body__ingredients__list__item"
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

export default {
  name: "Product",
  props: ["product"],
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      productBreakpoints: {
        0: {
          itemsToShow: 1,
          wrapAround: false,
          snapAlign: "start",
        },
        1000: {
          itemsToShow: 4.95,
          wrapAround: false,
          snapAlign: "center",
        },
      },
      showIngredients: false,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
 .mt-5{
   margin-top: 2.5rem
 }
</style>