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
              <p>Price: {{ formatPrice(product.price) }}</p>
            </a>
            <button class="add-to-cart" @click="addToCart(product, product.variants[0].id)">Add to Cart</button>
            <p v-if="product.cartMessage" class="cart-message">{{ product.cartMessage }}</p>
          </div>
        </div>
        <button class="slick-prev" @click="prevSlide" style="background-color:red;color:#fff;position:absolute; left:10px; z-index: 1;">&#10094;</button>
        <button class="slick-next" @click="nextSlide" style="background-color:red;color:#fff;position:absolute; right:10px; z-index: 1;">&#10095;</button>
      </div>
      <!-- Mini Cart -->
      <div class="mini-cart" :class="{ open: isMiniCartOpen }">
        <button class="close-btn" @click="closeMiniCart">X</button>
        <h3>Mini Cart</h3>
        <ul v-if="cartItems.length > 0">
          <li v-for="(item, index) in cartItems" :key="index" class="cart-item">
            <img :src="item.image || demoImage" alt="Product Image" class="cart-image" />
            <div class="cart-info">
              <p>{{ item.title }}</p>
              <p>{{ item.quantity }} x {{ formatPrice(item.price) }}</p>
            </div>
          </li>
        </ul>
        <p v-if="cartItems.length === 0">Your cart is empty.</p>
        <p>Total: {{ formatPrice(cartTotal) }}</p>
        <div class="cart-buttons">
          <button class="checkout-btn" @click="checkout">Checkout</button>
          <button class="view-cart-btn" @click="viewCart">View Cart</button>
        </div>
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
      storeCurrency: 'USD', // Default currency
    };
  },
  methods: {
    changeMessage() {
      this.message = 'Message has been changed!';
    },
    async fetchStoreCurrency() {
      try {
        const response = await fetch('/cart.js');
        const data = await response.json();
        this.storeCurrency = data.currency; // Get currency from cart data
      } catch (error) {
        console.error('Failed to fetch store currency:', error);
      }
    },
    async fetchProducts() {
      const response = await fetch('https://homeceuconnectiontest.myshopify.com/admin/api/2023-01/products.json', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': 'Your-access-token',
        },
      });

      const data = await response.json();
      this.products = data.products.map((product) => ({
        title: product.title,
        price: product.variants[0].price, // Price in cents
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
        arrows: false, // Disable default arrows to use custom buttons
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
      });
    },
    nextSlide() {
      $('.slick-slider').slick('slickNext');
    },
    prevSlide() {
      $('.slick-slider').slick('slickPrev');
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
        await this.fetchCart();
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
        price: item.final_price / 100, // Convert from cents to dollars
        image: item.image || this.demoImage,
        id: item.id, // Store the item ID for removal
      }));
      this.cartTotal = data.total_price / 100; // Convert from cents to dollars
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
    viewCart() {
      window.location.href = '/cart'; // Redirect to cart page
    },
    formatPrice(value) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: this.storeCurrency, // Use the dynamically fetched store currency
      }).format(value);
    },
  },
  mounted() {
    this.fetchStoreCurrency(); // Fetch the store currency on component mount
    this.fetchProducts();
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
productApp.mount('#product-app');

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
              'X-Shopify-Access-Token': 'Your-access-token',
            },
          }
        );

        const data = await response.json();
        this.collections = data.custom_collections.map((collection) => ({
          title: collection.title,
          url: `https://homeceuconnectiontest.myshopify.com/collections/${collection.handle}`,
        }));
      } catch (error) {
        this.error = 'Failed to fetch collections.';
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.fetchCollections();
  },
};

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
collectionApp.mount('#collection-app');

// Add some CSS for layout
const style = document.createElement('style');
style.innerHTML = `
  .slick-slider {
    margin: 20px 0;
  }
  .product-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    text-align: center;
    display: inline-block;
    width: 150px;
  }
  .add-to-cart {
    background-color: green;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  .mini-cart {
    position: fixed;
    right: 10px;
    top: 10px;
    border: 1px solid #ccc;
    padding: 10px;
    background-color: white;
    display: none;
  }
  .mini-cart.open {
    display: block;
  }
  .cart-item {
    display: flex;
    margin-bottom: 10px;
  }
  .cart-image {
    width: 50px;
    height: auto;
    margin-right: 10px;
  }
  .cart-info {
    flex-grow: 1;
  }
  .cart-buttons {
    display: flex;
    justify-content: space-between;
  }
`;
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
