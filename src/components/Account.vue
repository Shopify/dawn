<template>
  <div class="wrap-form">
    <div class="step-body">

    </div>

    <div class="step-footer">
      <template v-if="!submitSuccess">
        <div class="lg-hidden">
          <button
              @click="nextTab"
              v-if="currentTab < totalTabs - 1 && isShowNext"
              class="button step-button step-button-next"
          >
            Next
          </button>
          <button
              @click="onSubmit"
              v-if="currentTab === totalTabs - 1"
              class="button step-button step-button-submit"
          >
            Submit
          </button>
        </div>
      </template>
      <div class="mobile-footer">
        <div class="mobile-info">
          <h3>Personalizing {{ name ? "for " + name : "" }}...</h3>
          <div class="step-progress">
            <span class="bar progressbar" :style="{ width: progressW + '%' }"></span>
          </div>

          <transition-group name="fadeRight" class="list-ingredients" tag="ul" v-if="listIngredients && listIngredients.length > 0">
            <li
                v-for="(item, key) in listIngredients"
                :key="key + '1'"
                style="animation-duration: 0.3s"
            >
              <!--                      <img :src="item.image" alt="" />-->
              <img class="image" src="https://dl7bo1dy930sf.cloudfront.net/img/results/ingredient-images/vitamin-c-stabalized-active-min.png">
              <span>{{ item.ConsumerTitle }}</span>
            </li>
          </transition-group>
        </div>
        <img class="product-image" src="https://cdn.shopify.com/s/files/1/0016/6913/6419/products/Routine1.jpg?v=1628376181" />
      </div>
    </div>
  </div>
</template>

<script>
// import Multiselect from "vue-multiselect";

const Token = "8PdmqOGEOt2mvVh4WJTOfgoi4E081z1LR3DAiQ8p";
import concernCopy from "../mixins/concernCopy";
import animation from "../mixins/animation";
import "vue3-carousel/dist/carousel.css";
import {Carousel, Slide, Pagination, Navigation} from "vue3-carousel";
import Concern from "./Quiz/Concern"

export default {
  name: "Account",
  mixins: [],
  components: {

  },
  data() {
    return {
      isReady: true,
      results: [],
    };
  },
  computed: {},
  async mounted() {
    const response = await fetch(
        "https://mellow-badlands-ejgkwjycd9xj.vapor-farm-c1.com/api/customer",
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