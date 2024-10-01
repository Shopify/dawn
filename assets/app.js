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
      </div>
      <!-- Mini Cart -->
      <transition name="slide">
        <div class="mini-cart" :class="{ open: isMiniCartOpen }">
          <button class="close-btn" @click="closeMiniCart">X</button>
          <h3>Mini Cart</h3>
          <div class="cart-items">
            <table v-if="cartItems.length > 0">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in cartItems" :key="index" class="cart-item">
                  <td style="text-align:left;"><img :src="item.image || demoImage" alt="Product Image" class="cart-image" /> {{ item.title }}</td>
                  <td style="text-align:left;">{{ item.quantity }}</td>
                  <td style="text-align:left;">{{ formatPrice(item.price) }}</td>
                </tr>
              </tbody>
            </table>
            <p v-if="cartItems.length === 0">Your cart is empty.</p>
          </div>
          <p>Total: {{ formatPrice(cartTotal) }}</p>
          <div class="cart-buttons">
            <button class="checkout-btn" @click="checkout">Checkout</button>
            <button class="view-cart-btn" @click="viewCart">View Cart</button>
          </div>
        </div>
      </transition>
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
          'X-Shopify-Access-Token': 'Your-Access-Token',
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
        arrows: true, // Enable default arrows
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
collectionApp.mount('#collection-app');

// Product Search Vue.js App
const ProductSearchApp = {
  data() {
    return {
      products: [], // List of products
      searchQuery: '', // Search term entered by user
      minPrice: '', // Minimum price filter
      maxPrice: '', // Maximum price filter
      isLoading: false, // Loading indicator
      error: null, // Error handling
      isMiniCartOpen: false, // Mini cart visibility
    };
  },
  computed: {
    // Filter products based on name and price
    filteredProducts() {
      let filtered = this.products;

      // Filter by name
      if (this.searchQuery.trim() !== '') {
        filtered = filtered.filter((product) => product.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }

      // Filter by price range
      if (this.minPrice !== '' || this.maxPrice !== '') {
        filtered = filtered.filter((product) => {
          const price = parseFloat(product.price);
          const min = this.minPrice ? parseFloat(this.minPrice) : 0;
          const max = this.maxPrice ? parseFloat(this.maxPrice) : Infinity;
          return price >= min && price <= max;
        });
      }

      return filtered;
    },
  },
  methods: {
    // Fetch products from Shopify API
    async fetchProducts() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await fetch('https://homeceuconnectiontest.myshopify.com/admin/api/2023-01/products.json', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': 'Your-Access-Token', // Replace with your Shopify API Access Token
          },
        });

        const data = await response.json();
        this.products = data.products.map((product) => ({
          id: product.variants[0].id,
          title: product.title,
          price: parseFloat(product.variants[0].price),
          image: product.images[0] ? product.images[0].src : 'https://via.placeholder.com/150',
          url: `https://homeceuconnectiontest.myshopify.com/products/${product.handle}`,
        }));
      } catch (error) {
        this.error = 'Failed to fetch products';
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    // Add a product to the cart using Shopify AJAX API
    async addToCart(product) {
      const item = {
        id: product.id,
        quantity: 1,
      };

      try {
        const response = await fetch('/cart/add.js', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(item),
        });

        if (!response.ok) {
          throw new Error('Failed to add item to cart');
        }

        this.openMiniCart();
      } catch (error) {
        console.error(error);
      }
    },
    // Open the mini cart
    openMiniCart() {
      this.isMiniCartOpen = true;
    },
    // Close the mini cart
    closeMiniCart() {
      this.isMiniCartOpen = false;
    },
    // Redirect to Shopify cart page
    goToCart() {
      window.location.href = 'https://homeceuconnectiontest.myshopify.com/cart';
    },
    // Redirect to Shopify checkout page
    goToCheckout() {
      window.location.href = 'https://homeceuconnectiontest.myshopify.com/checkout';
    },
  },
  mounted() {
    // Fetch products when the component is mounted
    this.fetchProducts();
  },
  template: `
    <div class="product-search-container">
      <!-- Search input field and price filter -->
      <div class="search-bar">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search by name..."
          class="search-input"
        />
        <input
          type="number"
          v-model="minPrice"
          placeholder="Min price"
          class="price-input"
        />
        <input
          type="number"
          v-model="maxPrice"
          placeholder="Max price"
          class="price-input"
        />
      </div>

      <!-- Loading indicator -->
      <div v-if="isLoading">Loading products...</div>

      <!-- Error message -->
      <div v-if="error" class="error">{{ error }}</div>

      <!-- Product list -->
      <div v-if="!isLoading && !error" class="product-list">
        <div v-if="filteredProducts.length === 0">
          No products found.
        </div>
        <ul>
          <li v-for="(product, index) in filteredProducts" :key="index" class="product-item">
            <a :href="product.url" target="_blank">
              <img :src="product.image" :alt="product.title" class="product-image" />
              <p>{{ product.title }}</p>
              <p>Price: {{ product.price }}</p>
            </a>
            <div class="cart-buttons">
              <button @click="addToCart(product)">Add to Cart</button>
            </div>
          </li>
        </ul>
      </div>

      <!-- Mini Cart -->
      <div class="mini-cart" :class="{ open: isMiniCartOpen }">
        <button @click="closeMiniCart">Close</button>
        <h3>Mini Cart</h3>
        <p>Your items have been added to the cart.</p>
        
        <!-- Cart and Checkout Buttons -->
        <div class="cart-buttons-group">
          <button @click="goToCart">View Cart</button>
          <button @click="goToCheckout">Checkout</button>
        </div>
      </div>
    </div>
  `,
};

// Create and mount the Vue app
Vue.createApp(ProductSearchApp).mount('#product-search-app');

// Styles for the mini cart and product cards
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
    transition: transform 0.2s;
  }
  .product-card:hover {
    transform: scale(1.05);
  }
  .add-to-cart {
    background-color: green;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
    .checkout-btn {
    background-color: green;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
    .view-cart-btn{
    background-color: green;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    }

  .mini-cart {
    position: fixed;
    right: 10px;
    top: 60px; /* Adjusted to avoid overlap with sticky header */
    border: 1px solid #ccc;
    padding: 10px;
    background-color: white;
    display: none;
    width: 50%;
    max-height: 400px; /* Set a maximum height for scrolling */
    overflow-y: auto; /* Enable scrolling when items exceed the height */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000; /* Ensure it appears above other elements */
  }
  .mini-cart.open {
    display: block;
    animation: slide-in 0.3s forwards;
  }
  .close-btn {
    background-color: red;
    color: white;
    border: none;
    float: right;
    cursor: pointer;
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
  .cart-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  th, td {
    border: 1px solid #ccc;
    padding: 5px;
    text-align: center;
  }
  th {
    background-color: #f5f5f5;
  }

   .product-search-container {
      padding: 20px;
    }
    .search-bar {
      margin-bottom: 20px;
    }
    .search-input {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    .product-list ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
    }
    .product-item {
      width: 200px;
      margin: 10px;
      text-align: center;
      border: 1px solid #ddd;
      padding: 10px;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .product-item img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      margin-bottom: 10px;
    }
    .error {
      color: red;
    }

  @keyframes slide-in {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
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
