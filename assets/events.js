/**
 * @namespace ThemeEvents
 * @description A collection of theme-specific events that can be used to trigger and listen for changes anywhere in the theme.
 * @example
 * document.dispatchEvent(new VariantUpdateEvent(variant, sectionId, { html }));
 * document.addEventListener(ThemeEvents.variantUpdate, (e) => { console.log(e.detail.variant) });
 */
export class ThemeEvents {
  /** @static @constant {string} Event triggered when a variant is selected */
  static variantSelected = 'variant:selected';
  /** @static @constant {string} Event triggered when a variant is changed */
  static variantUpdate = 'variant:update';
  /** @static @constant {string} Event triggered when the cart items or quantities are updated */
  static cartUpdate = 'cart:update';
  /** @static @constant {string} Event triggered when a cart update fails */
  static cartError = 'cart:error';
  /** @static @constant {string} Event triggered when a media (video, 3d model) is loaded */
  static mediaStartedPlaying = 'media:started-playing';
  // Event triggered when quantity-selector value is changed
  static quantitySelectorUpdate = 'quantity-selector:update';
  /** @static @constant {string} Event triggered when a predictive search is expanded */
  static megaMenuHover = 'megaMenu:hover';
  /** @static @constant {string} Event triggered when a zoom dialog media is selected */
  static zoomMediaSelected = 'zoom-media:selected';
  /** @static @constant {string} Event triggered when a discount is applied */
  static discountUpdate = 'discount:update';
  /** @static @constant {string} Event triggered when changing collection filters */
  static FilterUpdate = 'filter:update';
}

/**
 * Event fired when a variant is selected
 * @extends {Event}
 */
export class VariantSelectedEvent extends Event {
  /**
   * Creates a new VariantSelectedEvent
   * @param {Object} resource - The new variant object
   * @param {string} resource.id - The id of the variant
   */
  constructor(resource) {
    super(ThemeEvents.variantSelected, { bubbles: true });
    this.detail = {
      resource,
    };
  }
}

/**
 * Event fired after a variant is updated
 * @extends {Event}
 */
export class VariantUpdateEvent extends Event {
  /**
   * Creates a new VariantUpdateEvent
   * @param {Object} resource - The new variant object
   * @param {string} resource.id - The id of the variant
   * @param {boolean} resource.available - Whether the variant is available
   * @param {boolean} resource.inventory_management - Whether the variant has inventory management
   * @param {Object} [resource.featured_media] - The featured media of the variant
   * @param {string} [resource.featured_media.id] - The id of the featured media
   * @param {Object} [resource.featured_media.preview_image] - The preview image of the featured media
   * @param {string} [resource.featured_media.preview_image.src] - The src URL of the preview image
   * @param {string} sourceId - The id of the element the action was triggered from
   * @param {Object} data - Additional event data
   * @param {Document} data.html - The new document fragment for the variant
   * @param {string} data.productId - The product ID of the updated variant, used to ensure the correct product form is updated
   * @param {Object} [data.newProduct] - If a new product was loaded as part of the variant update (combined listing)
   * @param {string} data.newProduct.id - The id of the new product
   * @param {string} data.newProduct.url - The url of the new product
   */
  constructor(resource, sourceId, data) {
    super(ThemeEvents.variantUpdate, { bubbles: true });
    this.detail = {
      resource: resource || null,
      sourceId,
      data: {
        html: data.html,
        productId: data.productId,
        newProduct: data.newProduct,
      },
    };
  }
}

/**
 * Event class for cart additions
 * @extends {Event}
 */
export class CartAddEvent extends Event {
  /**
   * Creates a new CartAddEvent
   * @param {Object} [resource] - The new cart object
   * @param {string} [sourceId] - The id of the element the action was triggered from
   * @param {Object} [data] - Additional event data
   * @param {boolean} [data.didError] - Whether the cart operation failed
   * @param {string} [data.source] - The source of the cart update
   * @param {string} [data.productId] - The id of the product card that was updated
   * @param {number} [data.itemCount] - The number of items in the cart
   * @param {string} [data.variantId] - The id of the product variant that was added
   * @param {Record<string, string>} [data.sections] - The sections affected by the cart operation
   */
  constructor(resource, sourceId, data) {
    super(CartAddEvent.eventName, { bubbles: true });
    this.detail = {
      resource,
      sourceId,
      data: {
        ...data,
      },
    };
  }

  static eventName = ThemeEvents.cartUpdate;
}

/**
 * Event class for cart updates
 * @extends {Event}
 */
export class CartUpdateEvent extends Event {
  /**
   * Creates a new CartUpdateEvent
   * @param {Object} resource - The new cart object
   * @param {string} sourceId - The id of the element the action was triggered from
   * @param {Object} [data] - Additional event data
   * @param {boolean} [data.didError] - Whether the cart operation failed
   * @param {string} [data.source] - The source of the cart update
   * @param {string} [data.productId] - The id of the product card that was updated
   * @param {number} [data.itemCount] - The number of items in the cart
   * @param {string} [data.variantId] - The id of the product variant that was updated
   * @param {Record<string, string>} [data.sections] - The sections affected by the cart operation
   */
  constructor(resource, sourceId, data) {
    super(ThemeEvents.cartUpdate, { bubbles: true });
    this.detail = {
      resource,
      sourceId,
      data: {
        ...data,
      },
    };
  }
}

/**
 * Event class for cart errors
 * @extends {Event}
 */
export class CartErrorEvent extends Event {
  /**
   * Creates a new CartErrorEvent
   * @param {string} sourceId - The id of the element the action was triggered from
   * @param {string} message - A message from the server response
   */
  constructor(sourceId, message) {
    super(ThemeEvents.cartError, { bubbles: true });
    this.detail = {
      sourceId,
      data: {
        message,
      },
    };
  }
}

/**
 * Event class for quantity-selector updates
 * @extends {Event}
 */
export class QuantitySelectorUpdateEvent extends Event {
  /**
   * Creates a new QuantitySelectorUpdateEvent
   * @param {number} quantity - Quantity value
   * @param {number} [cartLine] - The id of the updated cart line
   */
  constructor(quantity, cartLine) {
    super(ThemeEvents.quantitySelectorUpdate, { bubbles: true });
    this.detail = {
      quantity,
      cartLine,
    };
  }
}

/**
 * Event class for quantity-selector updates
 * @extends {Event}
 */
export class DiscountUpdateEvent extends Event {
  /**
   * Creates a new DiscountUpdateEvent
   * @param {Object} resource - The new cart object
   * @param {string} sourceId - The id of the element the action was triggered from
   */
  constructor(resource, sourceId) {
    super(ThemeEvents.discountUpdate, { bubbles: true });
    this.detail = {
      resource,
      sourceId,
    };
  }
}

/**
 * Event class for media playback starts
 * @extends {Event}
 */
export class MediaStartedPlayingEvent extends Event {
  /**
   * Creates a new MediaStartedPlayingEvent
   * @param {HTMLElement} resource - The element containing the video that emitted the event
   */
  constructor(resource) {
    super(ThemeEvents.mediaStartedPlaying, { bubbles: true });
    this.detail = {
      resource,
    };
  }
}

/**
 * @typedef {Object} SlideshowSelectEventData
 * @property {number} index
 * @property {string | null} id
 * @property {Element} slide
 * @property {number} previousIndex
 * @property {boolean} userInitiated
 * @property {'select' | 'scroll' | 'drag'} trigger
 */

export class SlideshowSelectEvent extends Event {
  /**  @param {SlideshowSelectEventData} data */
  constructor(data) {
    super(SlideshowSelectEvent.eventName, { bubbles: true });
    this.detail = data;
  }

  /** @type {SlideshowSelectEventData} */
  detail;

  static eventName = 'slideshow:select';
}

/**
 * Event class for zoom dialog media selection
 * @extends {Event}
 */
export class ZoomMediaSelectedEvent extends Event {
  /**
   * Creates a new ZoomMediaSelectedEvent
   * @param {number} index - The index of the selected media
   */
  constructor(index) {
    super(ThemeEvents.zoomMediaSelected, { bubbles: true });
    this.detail = {
      index,
    };
  }
}

/**
 * Event class for mega menu hover being hovered over
 * @extends {Event}
 */
export class MegaMenuHoverEvent extends Event {
  constructor() {
    super(ThemeEvents.megaMenuHover, { bubbles: true });
  }
}

/** Event class for facet filtering updates */
export class FilterUpdateEvent extends Event {
  /** @param {URLSearchParams} queryParams */
  constructor(queryParams) {
    super(ThemeEvents.FilterUpdate, { bubbles: true });
    this.detail = {
      queryParams,
    };
  }

  shouldShowClearAll() {
    return [...this.detail.queryParams.entries()].filter(([key]) => key.startsWith('filter.')).length > 0;
  }
}
