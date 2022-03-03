<template>
  <div v-if="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tab-content",
  props: {
    selected: {
      default: false,
    },
    title: {
      type: String,
    },
  },
  data() {
    return {
      isActive: false,
      isValidated: false,
    };
  },
  created() {
    this.isActive = this.selected;
  },
};
</script>