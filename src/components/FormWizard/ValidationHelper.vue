<template>
  <div></div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { store } from "../../store/form_store.js";
export default {
  name: "ValidationHelper",
  mixins: [validationMixin],
  data() {
    return {
      storeState: store.state,
    };
  },
  mounted() {
    store.setValidation(this.$v);
  },
  computed: {
    rules() {
      if (this.validationRules)
        return this.validationRules[this.storeState.currentTab]
            ? this.validationRules[this.storeState.currentTab]
            : {};
      else return {};
    },
  },
  methods: {
    hasError(fieldName) {
      return (
          fieldName in this.$v.formData && this.$v.formData[fieldName].$error
      );
    },
  },
  validations() {
    return {
      formData: this.rules,
    };
  },
};
</script>