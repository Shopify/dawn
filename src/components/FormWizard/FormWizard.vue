<template>
  <div class="question-container">
    <div class="step-body">
      <slot></slot>
      <template v-if="!submitSuccess">
        <div class="lg-button">
          <button
            @click="nextTab"
            v-if="currentTab < totalTabs - 1 && isShowNext"
            class="button step-button step-button-next"
          >
            Next
          </button>
          <button
            @click="onSubmit"
            :disabled="loading"
            v-if="currentTab === totalTabs - 1"
            class="button step-button step-button-submit"
          >
            <div id="loading" style="width: 15px; height: 15px; margin-right: 10px;" v-if="loading"></div>
            Submit
          </button>
        </div>
      </template>
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
            :disabled="loading"
            class="button step-button step-button-submit"
          >
          <div id="loading" style="width: 15px; height: 15px; margin-right: 10px;" v-if="loading"></div>
            Submit
          </button>
        </div>
      </template>
      <div class="mobile-footer">
        <div class="mobile-info">
          <h3>Personalizing {{ name ? "for " + name : "" }}...</h3>
          <div class="step-progress">
            <span
              class="bar progressbar"
              :style="{ width: progressW + '%' }"
            ></span>
          </div>

          <transition-group
            name="fadeRight"
            class="list-ingredients"
            tag="ul"
            v-if="listIngredients && listIngredients.length > 0"
          >
            <li
              v-for="(item, key) in listIngredients"
              :key="key + '1'"
              style="animation-duration: 0.3s"
            >
              <!--                      <img :src="item.image" alt="" />-->
              <img class="image" :src="item.image" />
              <span>{{ item.ConsumerTitle }}</span>
            </li>
          </transition-group>
        </div>
        <img
          class="product-image product-image--large"
          src="//d201v9s59ezpea.cloudfront.net/4step.png"
        />
      </div>
    </div>
  </div>
</template>
<script>
import TabContent from "./TabContent.vue";
import { store } from "../../store/form_store.js";
export default {
  name: "form-wizard",
  components: {
    TabContent,
  },
  props: {
    name: {
      type: String,
    },
    data: {
      type: Array,
    },
    isShowNext: {
      type: Boolean,
    },
    ingredients: {
      type: Array,
    },
    loading: {
      type: Boolean,
    },
  },
  data() {
    return {
      tabs: [],
      currentTab: 0,
      totalTabs: 0,
      storeState: store.state,
      submitSuccess: false,
      progress: 0,
      isValidationSupport: false,
    };
  },
  computed: {
    listIngredients() {
      return this.ingredients.filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.id === value.id)
      );
    },
    progressW() {
      return this.progress;
    },
  },
  mounted() {
    this.tabs = this.$slots
      .default()[0]
      .children.filter((tab) => tab.type.name === "tab-content");
    console.log(this.$slots.default());
    this.totalTabs = this.tabs.length;
    this.currentTab = this.tabs.findIndex((tab) => tab.isActive === true);
    //Select first tab if none is marked selected
    if (this.currentTab === -1 && this.totalTabs > 0) {
      this.tabs[0].isActive = true;
      this.currentTab = 0;
    }

    //Setup Initial Progress
    this.progress = ((this.currentTab + 1) / this.totalTabs) * 100;
  },
  updated() {
    /*
          Using this lifehook - since store variable gets updated after component is mounted
          isValidationSupport checks if user is looking to perform validation on each step
        */
    this.isValidationSupport =
      Object.keys(this.storeState.v).length !== 0 &&
      this.storeState.v.constructor === Object
        ? true
        : false;
  },
  methods: {
    previousTab() {
      this._switchTab(this.currentTab - 1);
      this.$emit("onPreviousStep");
    },
    nextTab() {
      if (this._validateCurrentTab() === false) return;
      this.$emit("onNextStep");
    },
    triggerNext(tab = null) {
      if (tab) {
        this.currentTab = tab;
        this._switchTab(this.currentTab);
      } else {
        this._switchTab(this.currentTab + 1);
      }
    },
    reset() {
      this.tabs.forEach((tab) => {
        tab.isActive = false;
        tab.isValidated = false;
      });
      this._switchTab(0);
      this.submitSuccess = false;
      this.storeState.v.$reset();
      this.$emit("onReset");
    },
    changeStatus() {
      this.submitSuccess = true;
    },
    selectTab(index) {
      //Only switch to filled previous tabs
      if (index < this.currentTab) {
        this._switchTab(index);
        return;
      }
      if (this._validateCurrentTab() === false) {
        return;
      }
      if (this.tabs[index - 1].isValidated === false) {
        return;
      }
      this._switchTab(index);
    },
    onSubmit() {
      if (this._validateCurrentTab() === false) return;
      this.$emit("onComplete");
    },
    _switchTab(index) {
      //Disable all tabs
      this.tabs.forEach((tab) => {
        tab.isActive = false;
      });
      this.currentTab = index;
      this.tabs[index].isActive = true;
      this.progress = ((this.currentTab + 1) / this.totalTabs) * 100;
      this.$forceUpdate();
      this.$emit("afterChangeTab");
    },
    _validateCurrentTab() {
      if (!this.isValidationSupport)
        //Check if user wants to validate
        return true;
      this.storeState.v.$touch();
      if (this.storeState.v.$invalid) {
        this.tabs[this.currentTab].isValidated = false;
        return false;
      }
      this.tabs[this.currentTab].isValidated = true;
      return true;
    },
  },
  watch: {
    currentTab() {
      store.setCurrentTab(this.currentTab);
    },
  },
};
</script>

