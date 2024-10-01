const { createApp } = Vue;

// MyComponent to handle products and mini cart
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
              <p>Price: {{ product.price | formatPrice }}</p>
            </a>
            <button class="add-to-cart" @click="addToCart(product, product.variants[0].id)">Add to Cart</button>
            <p v-if="product.cartMessage" class="cart-message">{{ product.cartMessage }}</p>
          </div>
        </div>
      </div>
      <!-- Mini Cart -->
      <div class="mini-cart" :class="{ open: isMiniCartOpen }">
        <button class="close-btn" @click="closeMiniCart">X</button>
        <h3>Mini Cart</h3>
        <ul v-if="cartItems.length > 0">
          <li v-for="(item, index) in cartItems" :key="index">
            <p>{{ item.title }} - {{ item.quantity }} x {{ item.price | formatPrice }}</p>
          </li>
        </ul>
        <p v-if="cartItems.length === 0">Your cart is empty.</p>
        <p>Total: {{ cartTotal | formatPrice }}</p>
        <button class="checkout-btn" @click="checkout">Checkout</button>
      </div>
    </div>
  `,
  data() {
    return {
      message: 'Initial message from MyComponent!',
      products: [],
      cartItems: [],
      cartTotal: 0,
      isMiniCartOpen: false,
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
          'X-Shopify-Access-Token': 'Your-Access-Token',
        },
      });

      const data = await response.json();
      this.products = data.products.map((product) => ({
        title: product.title,
        price: product.variants[0].price,
        url: `https://homeceuconnectiontest.myshopify.com/products/${product.handle}`,
        image: product.images.length > 0 ? product.images[0].src : null,
        variants: product.variants,
        cartMessage: '',
      }));
      this.$nextTick(() => this.initSlickSlider());
    },
    initSlickSlider() {
      $('.slick-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev">&#10094;</button>',
        nextArrow: '<button class="slick-next">&#10095;</button>',
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
        product.cartMessage = 'Product added to cart successfully!';
        this.fetchCart();
        this.openMiniCart();

        setTimeout(() => {
          product.cartMessage = '';
        }, 3000);
      } else {
        product.cartMessage = 'Failed to add to cart.';
      }
    },
    async fetchCart() {
      const response = await fetch('/cart.js');
      const data = await response.json();
      this.cartItems = data.items.map((item) => ({
        title: item.title,
        quantity: item.quantity,
        price: item.final_price / 100,
      }));
      this.cartTotal = data.total_price / 100;
    },
    openMiniCart() {
      this.isMiniCartOpen = true;
    },
    closeMiniCart() {
      this.isMiniCartOpen = false;
    },
    checkout() {
      window.location.href = '/checkout'; // Redirect to checkout page
    },
    formatPrice(value) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(value);
    },
  },
  mounted() {
    this.fetchProducts();
  },
};

// CollectionComponent to show a list of Shopify collections
const CollectionComponent = {
  template: `
    <div>
      <h3>Collections</h3>
      <div v-if="collections.length > 0">
        <ul>
          <li v-for="(collection, index) in collections" :key="index">
            <a :href="collection.url" target="_blank" rel="noopener noreferrer">
              {{ collection.title }}
            </a>
          </li>
        </ul>
      </div>
      <div v-if="loading">Loading collections...</div>
      <div v-if="error" style="color:red;">{{ error }}</div>
    </div>
  `,
  data() {
    return {
      collections: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchCollections() {
      this.loading = true;
      this.error = null;

      try {
        const response = await fetch(
          'https://homeceuconnectiontest.myshopify.com/admin/api/2023-01/custom_collections.json',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'X-Shopify-Access-Token': 'Your-Access-Token',
            },
          }
        );

        const data = await response.json();
        this.collections = data.custom_collections.map((collection) => ({
          title: collection.title,
          url: `https://homeceuconnectiontest.myshopify.com/collections/${collection.handle}`,
        }));
      } catch (error) {
        this.error = 'Failed to load collections.';
        console.error('Error fetching collections:', error);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.fetchCollections();
  },
};

// Create the first Vue app for products
const productApp = createApp({
  components: {
    MyComponent,
  },
  template: `
    <div>
      <h2>Product Section</h2>
      <MyComponent />
    </div>
  `,
});

// Create the second Vue app for collections
const collectionApp = createApp({
  components: {
    CollectionComponent,
  },
  template: `
    <div>
      <h2>Collection Section</h2>
      <CollectionComponent />
    </div>
  `,
});

// Mount the Vue apps to different DOM elements
productApp.mount('#product-app');
collectionApp.mount('#collection-app');

// Add some CSS for layout
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: Arial, sans-serif;
  }
  .slick-slider {
    margin: 20px 0;
  }
  .product-card {
    border: 1px solid #ccc;
    padding: 16px;
    text-align: center;
  }
  .add-to-cart {
    background-color: #28a745;
    color: #fff;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 4px;
  }
  .mini-cart {
    position: fixed;
    right: -300px;
    top: 0;
    width: 300px;
    height: 100%;
    background: #fff;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
    padding: 20px;
    transition: right 0.3s ease;
    overflow-y: auto;
    z-index: 1000;
  }
  .mini-cart.open {
    right: 0;
  }
  .close-btn {
    background: #f00;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    float: right;
  }
  .checkout-btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
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
