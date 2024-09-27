<template>
    <div>
      <h1>Shopify Products</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.title }} - {{ product.price | currency }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { id: 1, title: 'Product A', price: 29.99 },
          { id: 2, title: 'Product B', price: 19.99 },
          { id: 3, title: 'Product C', price: 39.99 },
          { id: 4, title: 'Product D', price: 49.99 },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any styles you need */
  </style>
  