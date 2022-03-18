<template>
  <transition-group name="slide-fade">
    <div v-if="selected" :key="name">
      <slot></slot>
    </div>
  </transition-group>
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
    name: {
      type: String
    }
  },
  data() {
    return {
      isActive: false,
      isValidated: false,
    };
  },
  created() {
    // this.isActive = this.selected;
  },
  methods: {
    triggerTab(value) {
      this.isActive = value;
    },
  },
};
</script>