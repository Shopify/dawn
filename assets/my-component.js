import { createApp, ref } from 'vue';

createApp({
  setup() {
    const message = ref('Hello Vue!');
    return {
      message,
    };
  },
}).mount('#app');
