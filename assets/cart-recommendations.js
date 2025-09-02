class CartRecommendations extends HTMLElement {
  constructor() {
    super();

    this.limit = parseInt(this.dataset.limit) || 4;
    this.intent = this.dataset.intent || 'related';
    this.productIds = this.dataset.productIds ? this.dataset.productIds.split(',').filter((id) => id.trim()) : [];

    this.loadingElement = this.querySelector('.cart-recommendations__loading');
    this.contentElement = this.querySelector('.cart-recommendations__content');
    this.errorElement = this.querySelector('.cart-recommendations__error');
    this.headingElement = this.querySelector('.cart-recommendations__heading');

    this.recommendations = new Map(); // Cache recommendations
    this.isLoading = false;
  }

  connectedCallback() {
    console.log('[cart-recs] connected', { productIds: this.productIds, intent: this.intent, limit: this.limit });

    // Ensure component is visible when connected (may have been hidden previously)
    this.showComponent();

    // Subscribe to Dawn's cart update events
    if (typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
      this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, (event) => {
        console.log('[cart-recs] cart-update received', {
          source: event?.source,
          itemCount: event?.cartData?.item_count,
          idsBefore: this.productIds,
        });
        this.refreshRecommendations();
      });
    } else {
      console.warn('Subscribe function not available for cart recommendations');
    }

    // Load recommendations when component becomes visible
    this.loadRecommendations();
  }

  disconnectedCallback() {
    if (this.cartUpdateUnsubscriber) {
      this.cartUpdateUnsubscriber();
    }
  }

  refreshRecommendations() {
    // Get updated product IDs from the current data attribute
    const currentProductIds = this.dataset.productIds
      ? this.dataset.productIds.split(',').filter((id) => id.trim())
      : [];

    if (currentProductIds.length === 0) {
      this.hideComponent();
      return;
    }

    this.productIds = currentProductIds;
    this.isLoading = false; // Reset loading state
    this.loadRecommendations();
  }

  async loadRecommendations() {
    // Clean up product IDs and check if we have valid ones
    this.productIds = this.productIds.filter((id) => id && id.trim());

    if (this.isLoading || this.productIds.length === 0) {
      console.log('Hiding recommendations - no valid product IDs');
      this.hideComponent();
      return;
    }

    this.isLoading = true;
    this.showLoading();

    try {
      // Get recommendations for all cart products
      const recommendationPromises = this.productIds.map((productId) => this.fetchRecommendationsForProduct(productId));

      const allRecommendations = await Promise.all(recommendationPromises);

      // Flatten and deduplicate recommendations
      const uniqueRecommendations = this.deduplicateRecommendations(allRecommendations.flat().filter(Boolean));

      if (uniqueRecommendations.length > 0) {
        console.log('[cart-recs] rendering', { count: uniqueRecommendations.length });
        this.renderRecommendations(uniqueRecommendations);
        this.showContent();
      } else {
        console.log('[cart-recs] no recommendations after dedupe, hiding');
        this.hideComponent();
      }
    } catch (error) {
      console.error('[cart-recs] error:', error);
      this.showError();
    } finally {
      this.isLoading = false;
      console.log('[cart-recs] load complete');
    }
  }

  async fetchRecommendationsForProduct(productId) {
    // Check cache first
    if (this.recommendations.has(productId)) {
      return this.recommendations.get(productId);
    }

    try {
      const perProductLimit = Math.min(10, Math.max(this.limit * 2, this.limit));
      const baseUrl = `/recommendations/products.json?product_id=${productId}&limit=${perProductLimit}`;
      const url = this.intent ? `${baseUrl}&intent=${encodeURIComponent(this.intent)}` : baseUrl;
      const response = await fetch(url, {
        headers: {
          'Cache-Control': 'no-cache',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      let recommendations = data.products || [];

      // Fallback: complementary can be sparse/empty. Retry with 'related' once.
      if (recommendations.length === 0 && this.intent === 'complementary') {
        const fallbackUrl = `${baseUrl}&intent=related`;
        console.warn('[cart-recs] complementary empty; retrying with related', { productId });
        const fallbackResp = await fetch(fallbackUrl, { headers: { 'Cache-Control': 'no-cache' } });
        if (fallbackResp.ok) {
          const fbData = await fallbackResp.json();
          recommendations = fbData.products || [];
        }
      }

      // Cache the results
      this.recommendations.set(productId, recommendations);

      return recommendations;
    } catch (error) {
      console.warn(`[cart-recs] fetch failed for ${productId}:`, error);
      return [];
    }
  }

  deduplicateRecommendations(recommendations) {
    const seen = new Set(this.productIds); // Exclude cart products
    const unique = [];

    for (const product of recommendations) {
      if (!seen.has(product.id.toString()) && unique.length < this.limit) {
        seen.add(product.id.toString());
        unique.push(product);
      }
    }

    return unique;
  }

  renderRecommendations(recommendations) {
    const grid = document.createElement('div');
    grid.className = 'cart-recommendations__grid';

    // Build controls (desktop) and mount next to heading
    const controls = document.createElement('div');
    controls.className = 'cart-recommendations__controls';
    const prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = 'cart-recommendations__button cart-recommendations__button--prev';
    prevBtn.setAttribute('aria-label', 'Scroll left');
    const arrowUrl = this.dataset.iconArrowUrl;
    if (arrowUrl) {
      const img = new Image();
      img.src = arrowUrl;
      img.alt = '';
      img.className = 'cart-recommendations__icon';
      prevBtn.appendChild(img);
    } else {
      prevBtn.textContent = '◀';
    }
    const nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'cart-recommendations__button cart-recommendations__button--next';
    nextBtn.setAttribute('aria-label', 'Scroll right');
    if (arrowUrl) {
      const img = new Image();
      img.src = arrowUrl;
      img.alt = '';
      img.className = 'cart-recommendations__icon';
      nextBtn.appendChild(img);
    } else {
      nextBtn.textContent = '▶';
    }
    controls.append(prevBtn, nextBtn);

    // Ensure header wrapper exists and place controls adjacent to title
    const heading = this.querySelector('.cart-recommendations__heading');
    if (heading) {
      let headerBar = this.querySelector('.cart-recommendations__header');
      if (!headerBar) {
        headerBar = document.createElement('div');
        headerBar.className = 'cart-recommendations__header';
        heading.insertAdjacentElement('beforebegin', headerBar);
        headerBar.appendChild(heading); // move heading into header bar
      }
      const existing = headerBar.querySelector('.cart-recommendations__controls');
      if (existing) existing.remove();
      headerBar.appendChild(controls);
    }

    recommendations.forEach((product) => {
      const productCard = this.createProductCard(product);
      grid.appendChild(productCard);
    });

    this.contentElement.innerHTML = '';
    this.contentElement.appendChild(grid);

    const updateButtons = () => {
      const maxScrollLeft = grid.scrollWidth - grid.clientWidth;
      const left = Math.round(grid.scrollLeft);
      prevBtn.disabled = left <= 0;
      nextBtn.disabled = left >= maxScrollLeft - 1;
    };

    const getStep = () => {
      const first = grid.querySelector('.cart-recommendations__item');
      return first ? first.getBoundingClientRect().width + 16 : Math.max(240, Math.floor(grid.clientWidth * 0.9));
    };

    prevBtn.addEventListener('click', () => {
      grid.scrollBy({ left: -getStep(), behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      grid.scrollBy({ left: getStep(), behavior: 'smooth' });
    });
    grid.addEventListener('scroll', updateButtons, { passive: true });
    window.addEventListener('resize', updateButtons);
    setTimeout(updateButtons, 0);
  }

  createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'cart-recommendations__item';

    const primaryImage = product.featured_image || product.image || product.images?.[0];
    const rawImage = typeof primaryImage === 'string' ? primaryImage : primaryImage?.src;
    const imageUrl = rawImage ? this.appendImgParam(rawImage, 'width', 300) : '';
    const price = this.formatPrice(product.price);
    const compareAtPrice = product.compare_at_price > product.price ? this.formatPrice(product.compare_at_price) : null;

    card.innerHTML = `
      <a href="${product.url}" class="cart-recommendations__link" tabindex="0">
        <div class="cart-recommendations__image-wrapper">
          ${
            imageUrl
              ? `
            <img 
              class="cart-recommendations__image" 
              src="${imageUrl}" 
              alt="${this.escapeHtml(product.title)}"
              loading="lazy"
              width="100"
              height="100"
            />
          `
              : `
            <div class="cart-recommendations__image cart-recommendations__image--placeholder"></div>
          `
          }
        </div>
        <div class="cart-recommendations__details">
          <h4 class="cart-recommendations__title">${this.escapeHtml(product.title)}</h4>
          <div class="cart-recommendations__price">
           
            <span class="cart-recommendations__current-price">${price}</span>
          </div>
        </div>
      </a>
    `;

    return card;
  }

  appendImgParam(url, key, value) {
    try {
      const hasQuery = url.includes('?');
      const sep = hasQuery ? '&' : '?';
      return `${url}${sep}${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    } catch {
      return url;
    }
  }

  formatPrice(priceInCents) {
    if (typeof priceInCents !== 'number') return '';

    return new Intl.NumberFormat(document.documentElement.lang || 'en', {
      style: 'currency',
      currency: window.Shopify?.currency?.active || 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(priceInCents / 100);
  }

  escapeHtml(unsafe) {
    if (typeof unsafe !== 'string') return '';
    return unsafe
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  showLoading() {
    this.showComponent();
    this.loadingElement.hidden = false;
    this.contentElement.hidden = true;
    this.errorElement.hidden = true;
    if (this.headingElement) this.headingElement.hidden = true;
  }

  showContent() {
    this.showComponent();
    this.loadingElement.hidden = true;
    this.contentElement.hidden = false;
    this.errorElement.hidden = true;
    if (this.headingElement) this.headingElement.hidden = false;
  }

  showError() {
    this.showComponent();
    this.loadingElement.hidden = true;
    this.contentElement.hidden = true;
    this.errorElement.hidden = false;
    if (this.headingElement) this.headingElement.hidden = true;
  }

  hideComponent() {
    this.style.display = 'none';
  }

  showComponent() {
    // Reset any previous inline display none to let CSS handle layout
    if (this.style.display === 'none') {
      this.style.display = '';
    }
  }
}

customElements.define('cart-recommendations', CartRecommendations);
