<template>
  <div class="wrap-form">
    <template v-if="isReady">
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
          <div class="question-header">
            <!--                <div style="width: 30px" ></div>-->
            <div v-if="item.svg" class="icon" v-html="item.svg"></div>
            <h2>
              {{ item.title }}
              <small>
                {{ item.subtitle }}
              </small>
            </h2>
          </div>
          <div class="question-options">
            <template
              v-if="
                item.type === 'MultipleChoice' || item.type === 'SingleChoice'
              "
            >
              <ul class="ks-cboxtags">
                <li
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
                </li>
              </ul>
            </template>
            <template v-if="item.type === 'Text'">
              <div class="field">
                <input
                  class="field__input"
                  type="text"
                  :name="item.slug"
                  @keyup="onFormChange(item, $event)"
                />
                <div class="error" v-if="isShowFieldRequire">
                  This field is required.
                </div>

                <div class="error" v-if="!isValidAnwserQuestion">
                  {{ item.category }} is not valid.
                </div>
              </div>
            </template>
            <template
              v-if="
                item.type === 'TextAutoComplete' && listAutoComplete.length > 0
              "
            >
              <Multiselect
                v-model="multiValue"
                mode="tags"
                :searchable="true"
                :groups="false"
                :options="listAutoComplete"
                :close-on-select="false"
                label="name"
                track-by="name"
                @change="onAddItemAutoComplete()"
              />
            </template>
          </div>
        </tab-content>
      </template>
    </form-wizard>
  </template>
    <div class="loading-evyana" v-if="!isReady">
    <svg xmlns="http://www.w3.org/2000/svg" width="200" viewBox="0 0 214 25">
      <path
        class="cls-1"
        d="M0 25V0h13.6v2.3H2.5v9h10.7v2.2H2.5v9.2h11V25zM45.1 25h-2.4L32.5 0h2.8L44 21.9 52.7 0h2.7zM83.6 16.6V25h-2.4v-8.4L72.6 0h2.7l7 14 7.3-14h2.7zM120.2 0h-2.8l-10.6 25h2.6l3-6.8L118.8 3l5.7 13.7 3.6 8.4h2.7zM203.3 0h-2.7l-10.7 25h2.6l3-6.8L202 3l5.7 13.7 3.6 8.4h2.7zM167.8 25L153 3v22h-2.4V0h3.3l14 20.7V0h2.4v25z"
      ></path>
    </svg>

    <div id="loading"></div>

    <p class="text-loading">3 minutes to your best skincare, let's go!</p>
  </div>
  </div>
</template>

<script>
import FormWizard from "./FormWizard/FormWizard";
import TabContent from "./FormWizard/TabContent.vue";
import { store } from "../store/form_store.js";
import { FilterOperator, FilterType } from "../js/constant.js";
// import Multiselect from "vue-multiselect";
import Multiselect from "@vueform/multiselect";

import "@vueform/multiselect/themes/default.css";
const checked = (value) => value === true;
const Token = "0DaJUC7nMCkGSuRoFHl4Xr6TWBCEJzCZav8AMLV7";

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
      isValidAnwserQuestion: true,
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
      console.log(this.quiz, "deo");
      //TODO Renable
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

      this.isValidAnwserQuestion = true;
      if (item.category === "zip") {
        this.isValidAnwserQuestion = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(
          this.currentAnwser
        );
      }
      if (item.category === "email") {
        this.isValidAnwserQuestion = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
          this.currentAnwser
        );
      }

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
      if(!this.isValidAnwserQuestion){
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
        this.quiz[this.questionIndex].category === "email" ||
        this.quiz[this.questionIndex].category === "skintone" ||
        this.quiz[this.questionIndex].category === "skintype" ||
        this.quiz[this.questionIndex].category === "age"
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
    async onComplete() {
      let payload = {
        email: this.currentAnwser,
      };
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
          this.$router.push("/result");
        });
    },
  },
};
</script>

<style >
.loading-evyana {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background-color: #f8f4d5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.loading-evyana svg.logo-loading {
  margin-bottom: 150px;
}

.loading-evyana p.text-loading {
  margin-top: 150px;
}

.loading-dot {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  filter: url("#goo");
  animation: rotate-move 2s ease-in-out infinite;
}

.dot {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #000;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: block !important;
}

.dot-3 {
  background-color: #f74d75;
  animation: dot-3-move 2s ease infinite, index 6s ease infinite;
}

.dot-2 {
  background-color: #10beae;
  animation: dot-2-move 2s ease infinite, index 6s -4s ease infinite;
}

.dot-1 {
  background-color: #ffe386;
  animation: dot-1-move 2s ease infinite, index 6s -2s ease infinite;
}

.multiselect {
  border-radius: 0.4rem;
  box-shadow: 0 0 0 0.1rem rgba(var(--color-button), 0.45);
  font-size: 1rem;
  padding: 0;
  background: #fff;
  border: none;
  padding-right: 1rem;
}

.multiselect .multiselect-tags {
  padding: 0 1.5rem;
  min-height: 49.5px;
}

.multiselect .multiselect-tags .multiselect-tag {
  min-height: 30px;
  font-size: 10px;
  background: #fe8da1;
  padding: 1rem;
}

.multiselect-tags .multiselect-caret {
  width: 2rem;
  height: 2rem;
}

@keyframes dot-3-move {
  20% {
    transform: scale(1);
  }
  45% {
    transform: translateY(-18px) scale(0.45);
  }
  60% {
    transform: translateY(-90px) scale(0.45);
  }
  80% {
    transform: translateY(-90px) scale(0.45);
  }
  100% {
    transform: translateY(0px) scale(1);
  }
}

@keyframes dot-2-move {
  20% {
    transform: scale(1);
  }
  45% {
    transform: translate(-16px, 12px) scale(0.45);
  }
  60% {
    transform: translate(-80px, 60px) scale(0.45);
  }
  80% {
    transform: translate(-80px, 60px) scale(0.45);
  }
  100% {
    transform: translateY(0px) scale(1);
  }
}

@keyframes dot-1-move {
  20% {
    transform: scale(1);
  }
  45% {
    transform: translate(16px, 12px) scale(0.45);
  }
  60% {
    transform: translate(80px, 60px) scale(0.45);
  }
  80% {
    transform: translate(80px, 60px) scale(0.45);
  }
  100% {
    transform: translateY(0px) scale(1);
  }
}

@keyframes rotate-move {
  55% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  80% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes index {
  0%,
  100% {
    z-index: 3;
  }
  33.3% {
    z-index: 2;
  }
  66.6% {
    z-index: 1;
  }
}
</style>