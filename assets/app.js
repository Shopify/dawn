const { createApp } = Vue;
// Define your component
const MyComponent = {
  template: `
    <div>
      <h3>This is My Component!</h3>
      <p>{{ message }}</p>
      <button @click="changeMessage">Change Message</button>
      <div v-if="products.length > 0">
        <h3>Product List:</h3>
        <div class="slick-slider">
          <div class="product-card" v-for="(product, index) in products" :key="index">
            <a :href="product.url" target="_blank" rel="noopener noreferrer">
              <center><img :src="product.image || demoImage" :alt="product.title" /></center>
              <h4>{{ product.title }}</h4>
              <p>Price: {{ product.price }}</p>
            </a>
            <button @click="addToCart(product, product.variants[0].id)">Add to Cart</button>
            <p v-if="product.cartMessage" class="cart-message">{{ product.cartMessage }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      message: 'Initial message from MyComponent!',
      products: [],
      demoImage: 'https://via.placeholder.com/150',
    };
  },
  methods: {
    changeMessage() {
      this.message = 'Message has been changed!';
    },
    async fetchProducts() {
      const response = await fetch('https://homeceuconnectiontest.myshopify.com/admin/api/2023-01/products.json', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': 'your-access-token',
        },
      });

      const data = await response.json();
      this.products = data.products.map((product) => ({
        title: product.title,
        price: product.variants[0].price,
        url: `https://homeceuconnectiontest.myshopify.com/products/${product.handle}`,
        image: product.images.length > 0 ? product.images[0].src : null,
        variants: product.variants, // Keep the variants for adding to cart
        cartMessage: '', // Initialize cart message for each product
      }));
      this.$nextTick(() => this.initSlickSlider());
    },
    initSlickSlider() {
      // Initialize the Slick slider
      $('.slick-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow:
          '<button class="slick-prev" style="background-color:#000;color:#fff;position:absolute; left:10px; z-index: 1;">&#10094;</button>',
        nextArrow:
          '<button class="slick-next" style="background-color:#000;color:#fff;position:absolute; right:10px; z-index: 1;">&#10095;</button>',
      });
    },
    async addToCart(product, variantId) {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: [{ id: variantId, quantity: 1 }] }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Item added to cart:', data);
        product.cartMessage = 'Product added to cart successfully!'; // Set success message for the specific product

        // Hide message after 3 seconds
        setTimeout(() => {
          product.cartMessage = '';
        }, 3000);
      } else {
        console.error('Failed to add to cart:', response.statusText);
        product.cartMessage = 'Failed to add to cart.'; // Set error message for the specific product
      }
    },
  },
  mounted() {
    this.fetchProducts();
  },
};

// Create your Vue app
const testApp = createApp({
  data() {
    return {
      greeting: 'Hello from Vue!',
    };
  },
  components: {
    MyComponent,
  },
  template: `
    <div>
      <h2>{{ greeting }}</h2>
      <MyComponent />
    </div>
  `,
});

// Mount your app
testApp.mount('#vue-test');

// Add some CSS for the layout
const style = document.createElement('style');
style.textContent = `
  .slick-slider {
    margin: 20px 0;
    position: relative; /* Ensure relative positioning for arrows */
  }
  .product-card {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 16px;
    text-align: center;
  }
  .product-card img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }
  .product-card button {
    margin-top: 10px;
    background-color: #000;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
  }
  .cart-message {
    margin-top: 10px;
    color: green;
  }
`;

// Append the style to the document head
document.head.appendChild(style);

// Load Slick CSS and JS
const slickCss = document.createElement('link');
slickCss.rel = 'stylesheet';
slickCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css';
document.head.appendChild(slickCss);

const slickThemeCss = document.createElement('link');
slickThemeCss.rel = 'stylesheet';
slickThemeCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css';
document.head.appendChild(slickThemeCss);

const slickJs = document.createElement('script');
slickJs.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';
document.head.appendChild(slickJs);
