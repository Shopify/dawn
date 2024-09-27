Vue.component('my-component', {
  template: '<div>Hello from My Component!</div>',
  // Add your component's data, methods, etc. here
});

const app2 = Vue.createApp({
  data() {
    return {
      message: 'Hello World!',
    };
  },
});

app.mount('#app2');
