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
              <div class="field">
                <input
                  class="field__input"
                  :type="item.category === 'email' ? 'text' : 'password'"
                  v-model="currentAnwser"
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

              <div class="mt-5" v-html="item.additional"></div>
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

import "@vueform/multiselect/themes/default.css";
const checked = (value) => value === true;
const Token = "999999999911111111aaaaaa";

export default {
  name: "Quiz",
  components: {
    FormWizard,
    TabContent,
  },
  data() {
    return {
      quiz: [],
      questionIndex: 0,
      isReady: false,
      storeState: store.state,
      userName: "",
      currentAnwser: "",
      isShowNext: true,
      isRequire: true,
      isValidNext: true,
      isShowFieldRequire: false,
      localQuiz: null,
      loading: true,
      listAutoComplete: [],
      multiValue: [],
      ingredients: [],
      isValidAnwserQuestion: true,
      emailValue: "",
    };
  },
  computed: {},
  async mounted() {
    this.quiz = [
      {
        category: "email",
        slug: "where-should-we-send-your-results",
        subtitle: null,
        additional:
          '<label>PROVEN never spams or shares your information.<br>By providing your email, you agree to receive exclusive news and promotions from PROVEN compliant with our<br><a href="/terms-and-conditions" target="_blank">Terms &amp; Conditions</a>&nbsp;and&nbsp;<a href="/privacy-policy" target="_blank">Privacy Policy.</a>&nbsp; You can withdraw your consent at any time.</label>',
        title: "Where should we send your results?",
        type: "Text",
      },
      {
        category: "password",
        slug: "to-protect-your-privacy-please-create-a-password",
        subtitle: null,
        additional: `<div class="src-components-account-password-validation" style="
    display: block;
"><div class="src-components-account-password-validation"><ul><li>We require passwords contain at least:</li><li><i class="src-components-account-password-validation-checks-___styles__error___1oLPE"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></i> one uppercase letter</li><li><i class="src-components-account-password-validation-checks-___styles__error___1oLPE"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></i> one lower case letter</li><li><i class="src-components-account-password-validation-checks-___styles__error___1oLPE"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></i> 6 characters in length</li><li><i class="src-components-account-password-validation-checks-___styles__error___1oLPE"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></i> one number</li></ul></div></div>`,
        title: "To protect your privacy, please create a password.",
        type: "Text",
      },
    ];

    //TODO Renable
    this.isReady = true;
    this.localQuiz = localStorage.getItem("quiz");
    console.log(this.localQuiz);
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
          if (this.localQuiz.name) {
            this.userName = this.localQuiz.name;
          }
          localStorage.setItem("quiz", JSON.stringify(this.localQuiz));
          this.loading = false;
        });
    } else {
      this.localQuiz = JSON.parse(this.localQuiz);

      if (this.localQuiz.name) {
        this.userName = this.localQuiz.name;
      }
      this.localQuiz.lead_choices.forEach((choices) => {
        choices.ingredients.forEach((ing) => {
          this.ingredients.push(ing);
        });
      });
    }
  },
  methods: {
    onFormChange(item, $event) {
      this.isShowFieldRequire = false;
      if (item.category === "email") {
        this.isValidAnwserQuestion =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
            this.currentAnwser
          );
      }

      if (item.category === "password") {
        // const checkSpecial = /[*@!#%&()^~{}$]+/.test(this.currentAnwser);
        const hasNumber = /\d/.test(this.currentAnwser);
        const hasUpper = /[A-Z]/.test(this.currentAnwser);
        const hasLower = /[a-z]/.test(this.currentAnwser);
        const aboveSixCharacters = /^.{6,}$/.test(this.currentAnwser);
        if (!hasNumber || !hasUpper || !hasLower || !aboveSixCharacters) {
          this.isValidAnwserQuestion = false;
        } else {
          this.isValidAnwserQuestion = true;
        }
      }

      if (this.currentAnwser === "") {
        this.isShowFieldRequire = true;
      }

      this.$forceUpdate();
    },
    async nextStep() {
      this.isShowFieldRequire = false;
      if (!this.isValidAnwserQuestion) {
        return;
      }
      if (
        !this.isValidNext ||
        (this.isRequire && (this.currentAnwser === "" || !this.currentAnwser))
      ) {
        this.isShowFieldRequire = true;
        return;
      }

      let payload = {
        lead_id: this.localQuiz.id,
      };

      this.emailValue = this.currentAnwser;

      this.isValidNext = false;
      this.questionIndex++;
      this.$refs.formwizard.triggerNext(this.questionIndex);
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
      this.isValidNext = true;
      this.currentAnwser = "";
      this.isRequire = true;
    },
    async onComplete() {
      this.isShowFieldRequire = false;
      if (!this.isValidAnwserQuestion) {
        return;
      }
      if (
        !this.isValidNext ||
        (this.isRequire && (this.currentAnwser === "" || !this.currentAnwser))
      ) {
        this.isShowFieldRequire = true;
        return;
      }

      let payload = {
        lead_id: this.localQuiz.id,
        email: this.emailValue,
      };

      payload[this.quiz[this.questionIndex].category] = this.currentAnwser;

      this.isValidNext = false;
      await fetch(
        "https://mellow-badlands-ejgkwjycd9xj.vapor-farm-c1.com/api/customer/",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + Token,
          },
        }
      )
        .then((rs) => rs.json())
        .then((result) => {
          // localStorage.clear();
          this.$router.push("/result");
        });
    },
  },
};
</script>

<style scoped lang="css">
.mt-5 {
  margin-top: 2.5rem;
}
</style>

<style >
.src-components-account-password-validation ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.src-components-account-password-validation li {
  display: flex;
  align-items: center;
}

.src-components-account-password-validation li i {
  height: 22px;
  margin-right: 9px;
  width: 20px;
}

.src-components-account-password-validation li svg path {
  fill: #fe8da1;
}
</style>