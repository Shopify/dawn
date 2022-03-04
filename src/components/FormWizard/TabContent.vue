<template>
  <div>

  </div>
  <div v-if="selected">
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
    // this.isActive = this.selected;
  },
  methods:{
    triggerTab(value){
      this.isActive = value;
    }
  }
};
</script>