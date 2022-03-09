<template>
  <div class="product-card">
    <div class="product--card__img__container">
      <img
        src="https://www.provenskincare.com/cdn-cgi/image/f=auto,onerror=redirect/https://media.provenskincare.com/img/home/cleanser-individual-bottle.png"
        alt="Your Personalized Cleanser"
        class=""
      />
    </div>
    <div class="">
      <span class="product--card__subtitle"
        >Cleanser, toner and exfoliator in one</span
      >
      <h2 class="product--card__title" data-cy="proven-cleanser-title">
        Your Personalized {{ product.title }}
      </h2>
      <div class="">
        <button class="product--card__buy_button">
          <span class="product--card__buy_button_title">GET CLEANSER</span>
          <span class="product--card__buy_button_alt">$34.99 USD</span>
        </button>
      </div>
      <p class="">
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
      <div class="product--card__tags">
        <span>Eczema Level 1</span>
        <span>Sensitivity Level 7</span>
        <span>Dryness Level 6</span>
        <span>Hyperpigmentation Level 6</span>
        <span>Mild Dehydration</span>
        <span>Acne Level 5</span>
        <span>Wrinkles Level 5</span>
        <span>Firmness Level 5</span>
        <span>Humid Air</span>
      </div>
      <div class="product--card__ingredients">
        <h3>Your Active ingredients:</h3>
        <div class="productCarousel mt-5">
          <carousel :itemsToShow="12" :itemsToScroll="3" :snapAlign="'start'">
            <slide
              v-for="(ingredient, index) in product.ingredients"
              :key="'concern' + index + 'skin-ingredients'"
            >
              <div class="carousel__item">
                <img
                  src="https://dl7bo1dy930sf.cloudfront.net/img/results/ingredient-images/Green-Tea-Extract.png"
                  alt="{{ ingredient.ConsumerTitle }}"
                />
                <span>{{ ingredient.ConsumerTitle }}</span>
              </div>
            </slide>
            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
        </div>

        <button
          v-on:click="showIngredients = !showIngredients"
          class="product--card__ingredient_button"
        >
          Full Ingredients List +
        </button>
        <transition-group
          v-if="showIngredients"
          name="fadeLeft"
          tag="ul"
          class="product--card__ingredients"
        >
          <li
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