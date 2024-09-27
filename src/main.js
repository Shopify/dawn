import Vue from 'vue';
import ShopifyProducts from './components/ShopifyProducts.vue';

// Currency filter
Vue.filter('currency', function (value) {
  return `$${value.toFixed(2)}`; // Adjust format as needed
});

new Vue({
  el: '#app',
  components: {
    ShopifyProducts,
  },
});
