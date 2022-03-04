
<template>
  <section>
    <div class="wrap-form" v-if="isReady">
      <form-wizard
        ref="formwizard"
        @onComplete="onComplete"
        @onNextStep="nextStep"
        @afterChangeTab="afterChangeTab"
        :name="userName"
        :data="listAnwser"
        :isShowNext="isShowNext"
        :curerentIndex="questionIndex"
        :ingredients="ingredients"
      >
        <template v-for="(item, index) in quiz" :key="index + 'tab'">
          <tab-content :selected="index === questionIndex ? true : false">
            <div>
              <div style="width: 30px" v-html="item.svg"></div>
              <h2>
                {{ item.title }}
                <small>
                  {{ item.subtitle }}
                </small>
              </h2>

              <div
                v-if="
                  item.type === 'MultipleChoice' || item.type === 'SingleChoice'
                "
                style="display: flex; flex-wrap: wrap"
              >
                <div
                  class="inputGroup"
                  v-for="(answer, answer_index) in item.options"
                  :key="answer_index"
                >
                  <input
                    v-on:input="onChangeCheckbox(item, $event, item.type)"
                    :id="item.slug + '-' + answer_index"
                    :value="answer.id"
                    :checked="
                      currentAnwser
                        ? currentAnwser.indexOf(answer.value) > -1
                        : false
                    "
                    type="checkbox"
                  />
                  <label :for="item.slug + '-' + answer_index">{{
                    answer.title
                  }}</label>
                </div>
              </div>

              <div class="wrap-form-control" v-if="item.type === 'Text'">
                <div>
                  <input
                    type="text"
                    :name="item.slug"
                    @keyup="onFormChange(item, $event)"
                  />

                  <div class="error" v-if="isShowFieldRequire">
                    This field is required.
                  </div>
                </div>
              </div>

              <div
                class="wrap-form-control"
                v-if="
                  item.type === 'TextAutoComplete' &&
                  listAutoComplete.length > 0
                "
              >
                <div>
                  <Multiselect
                    v-model="multiValue"
                    mode="tags"
                    :groups="false"
                    :options="currentAnwser"
                    :search="true"
                    :close-on-select="false"
                    label="name"
                    track-by="name"
                  />
                </div>
              </div>
            </div>
          </tab-content>
        </template>
      </form-wizard>
    </div>
  </section>
</template>

<script>
import FormWizard from "./FormWizard/FormWizard";
import TabContent from "./FormWizard/TabContent.vue";
import ValidationHelper from "./FormWizard/ValidationHelper.vue";
import { store } from "../store/form_store.js";
import { FilterOperator, FilterType } from "../js/constant.js";
// import Multiselect from "vue-multiselect";
import Multiselect from "@vueform/multiselect";

import "@vueform/multiselect/themes/default.css";
const checked = (value) => value === true;
const Token = "l6HSoxCBye2GgqyaBMr3sihhZogL0XjPS44wLfiy";

export default {
  name: "Quiz",
  components: {
    FormWizard,
    TabContent,
    Multiselect,
  },
  data() {
    return {
      count: 1,
      showContinue: false,
      quiz: [],
      questionIndex: 0,
      isActive: false,
      isReady: false,
      storeState: store.state,
      formData: {},
      payload: {
        answers: {},
      },
      listAnwser: [],
      currentAnwser: [],
      isValidNext: true,
      userName: "",
      isShowNext: true,
      isRequire: false,
      isShowFieldRequire: false,
      localQuiz: null,
      loading: true,
      listAutoComplete: [],
      multiValue: [],
      ingredients: [],
    };
  },
  computed: {},
  async mounted() {
    const response = await fetch(
      "https://mellow-badlands-ejgkwjycd9xj.vapor-farm-c1.com/api/quiz/1",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + Token,
        },
      }
    );
    response.json().then(async (rs) => {
      this.quiz = rs.data.questions.filter(
        (e) => e.title.toLowerCase().indexOf("please list them") === -1
      );
      this.isReady = true;
      this.localQuiz = localStorage.getItem("quiz");
      if (!this.localQuiz) {
        this.loading = true;
        await fetch(
          "https://mellow-badlands-ejgkwjycd9xj.vapor-farm-c1.com/api/quiz/1/lead",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + Token,
            },
          }
        )
          .then((rs) => rs.json())
          .then((result) => {
            this.localQuiz = result.data;
            localStorage.setItem("quiz", JSON.stringify(this.localQuiz));
            this.loading = false;
          });
      } else {
        this.localQuiz = JSON.parse(this.localQuiz);
        this.listAnwser = [];
        let i = 0;

        if (this.localQuiz.name) {
          this.userName = this.localQuiz.name;
        }
        this.localQuiz.lead_choices.forEach((choices) => {
          choices.ingredients.forEach((ing) => {
            this.ingredients.push(ing);
          });
          if (!this.listAnwser.find((j) => j.id === choices.question)) {
            this.listAnwser.push({
              ...this.quiz.find((e) => e.id === choices.question),
              ...{ anwser: [...[choices.id]] },
            });
          } else {
            this.listAnwser.find((j) => j.id === choices.question).anwser = [
              ...this.listAnwser.find((j) => j.id === choices.question).anwser,
              ...[choices.id],
            ];
          }
          i = this.quiz.findIndex((x) => x.id === choices.question) + 1;
        });
        this.questionIndex = i;
        this.$nextTick(() => {
          this.$refs.formwizard.triggerNext(this.questionIndex);
        });
        this.loading = false;
      }
    });
  },
  methods: {
    onAddItemAutoComplete(item, event) {
      this.currentAnwser = this.multiValue;
    },
    async onChangeCheckbox(item, $event, type) {
      if (!this.currentAnwser) {
        this.currentAnwser = [];
      }
      if (this.currentAnwser.indexOf($event.target.value) > -1) {
        this.currentAnwser = this.currentAnwser.filter(
          (e) => e !== parseInt($event.target.value)
        );
      } else {
        this.currentAnwser.push(parseInt($event.target.value));
      }
      if (!this.isShowNext) {
        this.$refs.formwizard.nextTab();
      }
      this.$forceUpdate();
    },
    onFormChange(item, $event) {
      if (item.category === "name") {
        this.userName = $event.target.value;
      }
      this.currentAnwser = $event.target.value;
      this.$forceUpdate();
    },
    async nextStep() {
      if (
        !this.isValidNext ||
        (this.isRequire && (this.currentAnwser === "" || !this.currentAnwser))
      ) {
        this.isShowFieldRequire = true;
        return;
      }
      this.isShowFieldRequire = false;
      this.listAnwser[this.questionIndex] = {
        ...this.quiz[this.questionIndex],
        ...{ anwser: this.currentAnwser },
      };

      let payload = {
        answers: [],
      };
      if (
        this.quiz[this.questionIndex].category === "name" ||
        this.quiz[this.questionIndex].category === "zip" ||
        this.quiz[this.questionIndex].category === "email"
      ) {
        payload[this.quiz[this.questionIndex].category] = this.currentAnwser;
      }

      this.listAnwser
        .filter((n) => n)
        .forEach((item) => {
          if (item.type !== "Text") {
            payload.answers = [...payload.answers, ...item.anwser];
          }
        });
      this.isValidNext = false;
      this.questionIndex++;
      this.$refs.formwizard.triggerNext(this.questionIndex);
      await fetch(
        "https://mellow-badlands-ejgkwjycd9xj.vapor-farm-c1.com/api/quiz/1/lead/" +
          this.localQuiz.id,
        {
          method: "PATCH",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + Token,
          },
        }
      )
        .then((rs) => rs.json())
        .then((result) => {
          this.localQuiz = result.data;
          this.ingredients = [];
          this.localQuiz.lead_choices.forEach((choices) => {
            choices.ingredients.forEach((ing) => {
              this.ingredients.push(ing);
            });
          });
          localStorage.setItem("quiz", JSON.stringify(this.localQuiz));
        });
    },

    checkValidStep() {
      let isPassFilter = true;
      if (
        this.quiz[this.questionIndex].filters &&
        this.quiz[this.questionIndex].filters.length > 0
      ) {
        this.quiz[this.questionIndex].filters.forEach((filter) => {
          if (!isPassFilter) {
            return;
          }

          const q = this.listAnwser
            .filter((n) => n)
            .find((e) => e.id === filter.question);
          let answerQ = null;
          if (q) {
            answerQ = this.listAnwser
              .filter((n) => n)
              .find((e) => e.id === filter.question).anwser;
          }
          if (!answerQ) {
            answerQ = [];
          }
          if (filter.type === FilterType.IncludeOnlyIf) {
            if (
              this.listAnwser
                .filter((n) => n)
                .find((e) => e.id === filter.question) !== "Text"
            ) {
              isPassFilter = FilterOperator[filter.operator](
                answerQ,
                -1,
                true,
                filter.value
              );
            } else {
              isPassFilter = FilterOperator[filter.operator](
                answerQ,
                filter.value
              );
            }
          }
          if (!isPassFilter) {
            return;
          }
        });
      }
      return isPassFilter;
    },

    async afterChangeTab() {
      this.multiValue = [];
      this.isValidNext = true;
      this.currentAnwser = null;
      let isPassFilter = this.checkValidStep();

      if (!isPassFilter) {
        this.questionIndex += 1;
        this.$refs.formwizard.triggerNext(this.questionIndex);
        this.$forceUpdate();
        return;
      }

      if (
        this.quiz[this.questionIndex].category === "name" ||
        this.quiz[this.questionIndex].category === "lifestyle" ||
        this.quiz[this.questionIndex].category === "user"
      ) {
        this.isRequire = true;
      } else {
        this.isRequire = false;
      }

      if (this.quiz[this.questionIndex].type === "SingleChoice") {
        this.isShowNext = false;
      } else {
        this.isShowNext = true;
      }
      this.$forceUpdate();
      if (this.quiz[this.questionIndex].type === "TextAutoComplete") {
        const response = await fetch(
          "https://mellow-badlands-ejgkwjycd9xj.vapor-farm-c1.com/api/quiz/1/question/" +
            this.quiz[this.questionIndex].id,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + Token,
            },
          }
        );
        response.json().then((rs) => {
          this.listAutoComplete = [];
          rs.data.forEach((e) => {
            this.listAutoComplete.push({
              value: e.id,
              name: e.title,
              order: e.order,
            });
          });

          this.$forceUpdate();
        });
      }
    },
    onComplete() {
      this.router.push("result");
    },
  },
};
</script>
