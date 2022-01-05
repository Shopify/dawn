const LOCAL_STORAGE_WISHLIST_KEY = 'shopify-wishlist';
const LOCAL_STORAGE_DELIMITER = ',';
const BUTTON_ACTIVE_CLASS = 'active';
const GRID_LOADED_CLASS = 'loaded';

const selectors = {
  button: '[button-wishlist]',
  grid: '[grid-wishlist]'
};

document.addEventListener('DOMContentLoaded', () => {
  initButtons();
  initGrid();
});

document.addEventListener('shopify-wishlist:updated', (event) => {
  console.log('[Shopify Wishlist] Wishlist Updated ✅', event.detail.wishlist);
  initGrid();
});

document.addEventListener('shopify-wishlist:init-product-grid', (event) => {
  console.log('[Shopify Wishlist] Wishlist Product List Loaded ✅', event.detail.wishlist);
});

document.addEventListener('shopify-wishlist:init-buttons', (event) => {
  console.log('[Shopify Wishlist] Wishlist Buttons Loaded ✅', event.detail.wishlist);
});

const fetchProductCardHTML = (handle) => {
  const productTileTemplateUrl = `/collections/all`;
  return fetch(productTileTemplateUrl)
  .then((res) => res.text())
  .then((res) => {
    const text = res;
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(text, 'text/html');
    // const productCard = htmlDocument.documentElement.querySelector(selectors.productCard+`-${handle}`);
    const productCard = htmlDocument.documentElement.querySelector(`.grid__item-${handle}`);
    return productCard.outerHTML;
  })
  .catch((err) => console.error(`[Shopify Wishlist] Failed to load content for handle: ${handle}`, err));
};

const setupGrid = async (grid) => {
  const wishlist = getWishlist();
  const requests = wishlist.map(fetchProductCardHTML);
  const responses = await Promise.all(requests);
  const wishlistProductCards = responses.join('');
  grid.innerHTML = wishlistProductCards;
  grid.classList.add(GRID_LOADED_CLASS);
  initButtons();

  const event = new CustomEvent('shopify-wishlist:init-product-grid', {
    detail: { wishlist: wishlist }
  });
  document.dispatchEvent(event);
};

const wishlistButtons = document.querySelectorAll('.button-wishlist');
const setupButtons = (wishlistButtons) => {
  wishlistButtons.forEach((button) => {
    const productHandle = button.dataset.productHandle || false;
    if (!productHandle) return console.error('[Shopify Wishlist] Missing `data-product-handle` attribute. Failed to update the wishlist.');
    if (wishlistContains(productHandle)) button.classList.add(BUTTON_ACTIVE_CLASS);
    button.addEventListener('click', () => {
      updateWishlist(productHandle);
      button.classList.toggle(BUTTON_ACTIVE_CLASS);
      // alert(handle);
    });
  });
};

const initGrid = () => {
  const grid = document.querySelector(selectors.grid) || false;
  if (grid) setupGrid(grid);
};

const initButtons = () => {
  const buttons = document.querySelectorAll(selectors.button) || [];
  if (buttons.length) setupButtons(buttons);
  else return;
  const event = new CustomEvent('shopify-wishlist:init-buttons', {
    detail: { wishlist: getWishlist() }
  });
  document.dispatchEvent(event);
};

const getWishlist = () => {
  const wishlist = localStorage.getItem(LOCAL_STORAGE_WISHLIST_KEY) || false;
  if (wishlist) return wishlist.split(LOCAL_STORAGE_DELIMITER);
  return [];
};

const setWishlist = (array) => {
  const wishlist = array.join(LOCAL_STORAGE_DELIMITER);
  if (array.length) localStorage.setItem(LOCAL_STORAGE_WISHLIST_KEY, wishlist);
  else localStorage.removeItem(LOCAL_STORAGE_WISHLIST_KEY);

  const event = new CustomEvent('shopify-wishlist:updated', {
    detail: { wishlist: array }
  });
  document.dispatchEvent(event);

  return wishlist;
};

const updateWishlist = (handle) => {
  const wishlist = getWishlist();
  const indexInWishlist = wishlist.indexOf(handle);
  if (indexInWishlist === -1) wishlist.push(handle);
  else wishlist.splice(indexInWishlist, 1);
  return setWishlist(wishlist);
};

const wishlistContains = (handle) => {
  const wishlist = getWishlist();
  return wishlist.includes(handle);
};

const resetWishlist = () => {
  return setWishlist([]);
};

document.addEventListener('DOMContentLoaded', () => {
  const wishlistEmpty = document.querySelector('.wishlist__empty');
  if(getWishlist().length <= 0){
    wishlistEmpty.style.display='block';
  }
});

document.addEventListener('shopify-wishlist:updated', () => {
  const wishlistEmpty = document.querySelector('.wishlist__empty');
  if(getWishlist().length <= 0){
    wishlistEmpty.style.display='block';
  }
});