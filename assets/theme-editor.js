// Theme editor specific logic

/**
 * @param {Event} event
 */
document.addEventListener('shopify:block:select', function (event) {
  if (event.target instanceof HTMLElement) {
    const slide = event.target.closest('slideshow-slide');

    if (slide) {
      /** @type {import('./slideshow').Slideshow | null} */
      const slideshow = slide.closest('slideshow-component');

      if (slideshow) {
        const index = Array.from(slide.parentElement?.children ?? []).indexOf(slide);

        if (index !== -1) {
          // Pause autoplay
          slideshow.pause();
          slideshow.select(index);
        }
      }
    }
  }
});

document.addEventListener('shopify:block:deselect', function (event) {
  if (event.target instanceof HTMLElement) {
    /** @type {import('./slideshow').Slideshow | null} */
    const slideshow = event.target.closest('slideshow-component');

    if (slideshow) {
      // Resume playback
      slideshow.resume();
    }
  }
});

/**
 * When in the theme editor, it can be frustrating to be tweaking the design of features that are implemented as a dialog
 * or any sort of overlay, because the theme editor will refresh the page and close the dialog.
 *
 * This script is used to save the state of these features and restore it when the page is refreshed, to make things a little more seamless.
 */
if (window.Shopify?.designMode) {
  (function editorStateManager() {
    const EDITOR_PREFIX = 'editor-save-state';

    /**
     * @param {string} name
     */
    function getEditorState(name) {
      const state = sessionStorage.getItem(`${EDITOR_PREFIX}-${name}`);
      return state ? JSON.parse(state) : null;
    }

    /**
     * @param {string} name
     * @param {boolean} isOpen
     * @param {string | undefined} instanceId
     */
    function saveEditorState(name, isOpen, instanceId) {
      sessionStorage.setItem(`${EDITOR_PREFIX}-${name}`, JSON.stringify({ isOpen, instanceId }));
    }

    /** @type {{name: string, selector: string, matches: (el: Element) => boolean, isOpen: (el: Element) => boolean, open: (el: Element, instanceId?: string) => void, getInstanceId?: (el: Element) => string | undefined}[]} */
    const features = [
      {
        name: 'account-popover',
        selector: '.account-popover',
        matches(el) {
          return el.matches(this.selector);
        },
        isOpen: (el) => el.getAttribute('open') != null,
        open: (el) => el.setAttribute('open', ''),
      },
      {
        name: 'account-drawer',
        selector: '.account-drawer',
        matches(el) {
          return !!el.closest(this.selector);
        },
        isOpen: (el) => el.getAttribute('open') != null,
        // @ts-ignore
        open: (el) => el.showDialog(),
      },
      {
        name: 'localization-dropdown',
        selector: 'dropdown-localization-component',
        matches(el) {
          return !!el.closest(this.selector);
        },
        isOpen: (el) => el.getAttribute('aria-expanded') === 'true',
        // @ts-ignore
        open: (el) => el.showPanel(),
      },
      {
        name: 'search-modal',
        selector: '.search-modal',
        matches(el) {
          return !!el.closest(this.selector);
        },
        isOpen: (el) => el.getAttribute('open') != null,
        // @ts-ignore
        open: (el) => el.showDialog(),
      },
      {
        name: 'cart-drawer',
        selector: 'cart-drawer-component',
        matches(el) {
          return !!el.closest(this.selector);
        },
        isOpen: (el) => el.getAttribute('open') != null,
        open: (el) => {
          // @ts-ignore
          el.open();
        },
      },
      {
        name: 'header-drawer',
        selector: 'header-drawer',
        matches(el) {
          return !!el.closest(this.selector);
        },
        isOpen: (el) => el.getAttribute('open') != null,
        open: (el) => {
          // @ts-ignore
          el.open();
          // @ts-ignore
          el.refs.details.setAttribute('open', '');
        },
      },
      {
        name: 'local-pickup-modal',
        selector: '.pickup-location__dialog',
        matches(el) {
          return el.matches(this.selector);
        },
        isOpen: (el) => el.getAttribute('open') != null,
        open: (el) => {
          // @ts-ignore
          el.closest('dialog-component').toggleDialog();
        },
      },
      {
        name: 'quick-add-modal',
        getInstanceId: (el) => {
          // @ts-ignore
          return el.querySelector('product-price')?.dataset?.productId;
        },
        selector: '.quick-add-modal',
        matches(el) {
          return el.matches(this.selector);
        },
        isOpen: (el) => el.getAttribute('open') != null,
        open: (el, instanceId) => {
          const button = document.querySelector(
            `product-form-component[data-product-id="${instanceId}"] .quick-add__button--choose`
          );

          // @ts-ignore
          button?.click();
        },
      },
      {
        name: 'floating-panel-component',
        getInstanceId: (el) => {
          return el.id;
        },
        selector: '.facets__panel',
        matches(el) {
          return el.matches(this.selector);
        },
        isOpen: (el) => el.getAttribute('open') != null,
        open: (el, instanceId) => document.querySelector(`#${instanceId}`)?.setAttribute('open', ''),
      },
      {
        name: 'facets-panel',
        selector: '.facets--drawer',
        matches(el) {
          return el.matches(this.selector);
        },
        isOpen: (el) => el.getAttribute('open') != null,
        open: (el) => el?.setAttribute('open', ''),
      },
    ];

    // On page load, restore the state of the features
    features.forEach((feature) => {
      const el = document.querySelector(feature.selector);
      if (!el) return;

      const state = getEditorState(feature.name);
      const shouldBeOpen = state?.isOpen;
      const instanceId = state?.instanceId;

      if (shouldBeOpen) {
        // Prevents race condition with the open methods not always being available immediately
        setTimeout(() => {
          feature.open(el, instanceId);
        });
      }
    });

    /** @param {Element} el */
    const update = (el) => {
      const feature = features.find((f) => f.matches(el));
      if (!feature) return;

      const isOpen = feature.isOpen(el);
      const instanceId = feature.getInstanceId?.(el);

      saveEditorState(feature.name, isOpen, instanceId);
    };

    const trackedAttributes = ['open', 'aria-expanded'];

    // Track state changes via attribute changes
    const observer = new MutationObserver((list) => {
      for (const mutation of list) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName &&
          trackedAttributes.includes(mutation.attributeName)
        ) {
          const element = /** @type {Element} */ (mutation.target);
          update(element);
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      attributes: true,
      attributeFilter: trackedAttributes,
      subtree: true,
    });
  })();
}
