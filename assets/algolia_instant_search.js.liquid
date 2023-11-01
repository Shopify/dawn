/* eslint-disable object-shorthand */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable vars-on-top */
/* eslint-disable strict */
/* eslint-disable no-var */
/* eslint-disable complexity */
(async function(algolia) {
  'use strict';
  var instantsearch = algolia.externals.instantsearch;
  var algoliasearch = algolia.externals.algoliasearch;
  var searchBox = algolia.externals.widgets.searchBox;
  var stats = algolia.externals.widgets.stats;
  var sortBy = algolia.externals.widgets.sortBy;
  var clearRefinements = algolia.externals.widgets.clearRefinements;
  var panel = algolia.externals.widgets.panel;
  var hits = algolia.externals.widgets.hits;
  var pagination = algolia.externals.widgets.pagination;
  var configure = algolia.externals.widgets.configure;
  var index_suffix = await algolia.config.index_suffix;
  var connectCurrentRefinements =
    algolia.externals.connectors.connectCurrentRefinements;

  var collectionPageEnabled =
    algolia.is_collection_results_page &&
    algolia.config.instant_search_enabled_on_collection;

  if (!algolia.full_results && !algolia.is_collection_results_page) {
    /**
     * If we aren't on the search page and neither on a collection page,
     * then there's no need to proceed
     */
    return;
  } else if (algolia.full_results) {
    /**
     * If we are on the search page and instant search isn't enabled,
     * then there's no need to proceed
     */
    if (!algolia.config.instant_search_enabled) {
      return;
    }
  } else if (algolia.is_collection_results_page) {
    /**
     * If we are on a collection page and instant search on collection isn't
     * enabled, then there's no need to proceed
     */
    if (!algolia.config.instant_search_enabled_on_collection) {
      return;
    }
  }

  /**
   * Array which will contain all filters to be applied while initiating the
   * search API call.
   */
  var searchFilters = [];

  var collectionFacetFilter = null;
  var collectionRulesContextValue = null;
  var collectionHandle = null;

  if (collectionPageEnabled) {
    var matches = window.location.pathname.match(/\/collections\/([^/]+)/i);
    collectionHandle =
      Boolean(matches) && matches.length === 2 ? matches[1] : null;

    if (algolia.config.collection_id_indexing) {
      collectionFacetFilter = algolia.current_collection_id
        ? 'collection_ids:"' + algolia.current_collection_id + '"'
        : null;
    } else {
      collectionFacetFilter = 'collections:"' + collectionHandle + '"';
    }

    // Add the collection filter to the list of search filters
    searchFilters.push(collectionFacetFilter);

    collectionRulesContextValue = algolia.config.collection_id_query_rules
      ? algolia.current_collection_id
      : collectionHandle;
  }

  // Filters for stock policy
  var stockPolicyFilter = null;
  if (algolia.config.stock_policy) {
    if (algolia.config.stock_policy === 'allow') {
      /**
       * For 'allow', we don't need to add any filter as we want to continue
       * displaying all out of stock items.
       */
    } else if (algolia.config.stock_policy === 'deny') {
      // For 'deny' we will filter out all items based on inventory quantity
      stockPolicyFilter = 'inventory_quantity > 0';
    } else if (algolia.config.stock_policy === 'continue') {
      /**
       * For 'continue' we will filter on `inventory_available` attribute whose
       * value is dependent on:
       * `inventory_quantity > 0 OR inventory_policy == 'continue'`
       */
      stockPolicyFilter = 'inventory_available:true';
    }

    // Add the stock policy filter to the list of search filters
    if (stockPolicyFilter) {
      searchFilters.push(stockPolicyFilter);
    }
  }

  var results_selector = collectionPageEnabled
    ? algolia.config.collection_css_selector
    : algolia.config.results_selector;

  var activeSortOrders =
    collectionPageEnabled && algolia.collectionSortOrders
      ? algolia.collectionSortOrders
      : algolia.sortOrders;

  results_selector += ', .algolia-shopify-instantsearch';

  function getTrackedUiState(uiState) {
    var trackedUiState = {};
    Object.keys(uiState).forEach(function(k) {
      if (k === 'configure' || k === 'query' || k === 'q') {
        return;
      }
      trackedUiState[k] = uiState[k];
    });
    return trackedUiState;
  }

  /**
   * List of URL params which are "allowed" by InstantSearch.
   * These parameters won't be overwritten when the search state is written
   * to the URL.
   */
  var ALLOWED_FOREIGN_PARAMS = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
  ];
  var foreignRouteState;

  function singleIndex(indexName) {
    return {
      /**
       * `stateToRoute` method transforms the `uiState` object from InstantSearch
       * into an object that will then be serialized to construct the URL.
       */
      stateToRoute: function(uiState) {
        var route = getTrackedUiState(uiState[indexName] || {});
        route.q = uiState[indexName].query;
        return Object.assign({}, foreignRouteState, route);
      },

      /**
       * `routeToState` method transforms the route object into a `uiState` object
       * so that InstantSearch is initialized with the correct state from the
       * URL.
       */
      routeToState: function(routeState) {
        /**
         * Backup parameters from `routeState` into a different object
         * `foreignRouteState` so that we can re-inject them into the object
         * returned within `stateToRoute`.
         * This allows us to preserve the parameters specified in `ALLOWED_FOREIGN_PARAMS`
         * array.
         */
        if (!foreignRouteState) {
          foreignRouteState = ALLOWED_FOREIGN_PARAMS.reduce(function(acc, key) {
            acc[key] = routeState[key];
            return acc;
          }, {});
        }

        var state = {};
        state[indexName] = getTrackedUiState(routeState || {});
        state[indexName].query = routeState.q;
        return state;
      },
    };
  }

  var instant = {
    colors: algolia.config.colors,
    distinct: Boolean(algolia.config.show_products),
    facets: {
      hidden:
        collectionPageEnabled && algolia.collectionHiddenFacets
          ? algolia.collectionHiddenFacets
          : algolia.hiddenFacets,
      shown:
        collectionPageEnabled && algolia.collectionShownFacets
          ? algolia.collectionShownFacets
          : algolia.shownFacets,
      list:
        collectionPageEnabled && algolia.collectionFacets
          ? algolia.collectionFacets
          : algolia.facets,
      widgets:
        collectionPageEnabled && algolia.collectionFacetsWidgets
          ? algolia.collectionFacetsWidgets
          : algolia.facetsWidgets,
    },
    hitsPerPage:
      collectionPageEnabled &&
      algolia.config.collections_full_results_hits_per_page
        ? algolia.config.collections_full_results_hits_per_page
        : algolia.config.products_full_results_hits_per_page,
    search: instantsearch({
      searchClient: algoliasearch(
        algolia.config.app_id,
        algolia.config.search_api_key
      ),
      insights: algolia.config.analytics_enabled,
      indexName: algolia.config.index_prefix + 'products' + index_suffix,
      routing: {
        stateMapping: singleIndex(algolia.config.index_prefix + 'products' + index_suffix),
      },
      searchFunction: function(searchFunctionHelper) {
        // Set query parameters here because they're not kept when someone
        // presses the Back button if set in the `init` function of a custom widget
        var page = searchFunctionHelper.getPage();
        if (instant.distinct) {
          searchFunctionHelper.setQueryParameter('distinct', true);
        }

        // Assign any required filters
        if (searchFilters.length) {
          searchFunctionHelper.setQueryParameter(
            'filters',
            searchFilters.join(' AND ')
          );
        }

        // Assign any required `ruleContexts` which are required for query rules
        // targeting collection pages
        if (collectionPageEnabled) {
          // Collection page merchandising:
          // If we are on a collection page, `collectionRulesContextValue` is defined
          if (collectionRulesContextValue) {
            searchFunctionHelper.setQueryParameter('ruleContexts', [
              collectionRulesContextValue.toString(),
            ]);
          } else {
            searchFunctionHelper.setQueryParameter('ruleContexts', []);
          }
        }

        searchFunctionHelper.setPage(page);
        searchFunctionHelper.search();
      },
    }),
    selector: results_selector + ', .algolia-shopify-instantsearch',
    sortOrders: activeSortOrders
  };
  
  instant.search.client.addAlgoliaAgent('Shopify Integration');

  algolia.instantsearch = instant;


  function readjust() {
    var width = instant.$results.offsetWidth;

    var suffix = 'lg';
    if (width < 400) suffix = 'xs';
    else if (width < 800) suffix = 'sm';
    else if (width < 1200) suffix = 'md';

    instant.$results.classList.remove('ais-results-size-xs');
    instant.$results.classList.remove('ais-results-size-sm');
    instant.$results.classList.remove('ais-results-size-md');
    instant.$results.classList.remove('ais-results-size-lg');
    instant.$results.classList.add('ais-results-size-' + suffix);
  }


  //Link CSS and set up CSS variables
  const cssFile = document.getElementById('template_algolia_instant_search.css');
  document.documentElement.style.setProperty(`--main-color`, `${algolia.config.colors.main}`);
  document.documentElement.style.setProperty(`--secondary-color`, `${algolia.config.colors.secondary}`);
  document.documentElement.style.setProperty(`--highlight-bg-color`, `${algolia.helpers.hexToRGB(algolia.config.colors.highlight)}`);
  algolia.appendStyle(cssFile.text);

  if (collectionPageEnabled) {
    if (
      document.querySelectorAll(algolia.config.collection_css_selector)
        .length === 0
    ) {
      throw new Error(
        'Instant search CSS selector for collection page is incorrect\nFor more info see: https://www.algolia.com/doc/integration/shopify/advanced-customization/collection-search-page/#css-selector'
      );
    }
  } else if (
    document.querySelectorAll(algolia.config.results_selector).length === 0
  ) {
    throw new Error(
      'Instant search CSS selector is incorrect\nFor more info see: https://www.algolia.com/doc/integration/shopify/building-search-ui/instant-search/#css-selector'
    );
  }

  // Instantiating the main page
  instant.$results = document.querySelector(instant.selector);
  instant.$results.innerHTML = '';

  algolia.render(algolia.instantSearchMainTemplate, instant.$results, {
    facets: instant.facets.list,
    multipleSortOrders: activeSortOrders.length > 1,
  });

  readjust();

  window.addEventListener('resize', function() {
    readjust();
  });

  // Mobile facets display
  instant.search.addWidgets([
    {
      init: function() {
        var $button = document.querySelector('.ais-facets-button');
        $button.addEventListener('click', function() {
          var $facets = document.querySelector('.ais-facets');

          if ($facets.classList.contains('ais-facets__shown')) {
            $button.textContent = 'Show filters';
            $facets.classList.remove('ais-facets__shown');
          } else {
            $button.textContent = 'Hide filters';
            $facets.classList.add('ais-facets__shown');
          }
        });
      },
    },
  ]);

  instant.search.addWidgets([
    configure({
      hitsPerPage: instant.hitsPerPage,
      facetingAfterDistinct: Boolean(algolia.config.show_products),
    }),
  ]);

  // Search input
  instant.search.addWidgets([
    searchBox({
      container: '.ais-search-box-container',
      placeholder: algolia.translations.searchForProduct,
      showReset: false,
      showSubmit: false,
    }),
  ]);

  // Logo & clear
  instant.search.addWidgets([
    {
      init: function(opts) {
        document
          .querySelector('.ais-clear-input-icon')
          .addEventListener('click', function() {
            opts.helper.setQuery('').search();
            var input = document.querySelector('.ais-search-box--input');
            input.value = '';
            input.focus();
          });
      },
      render: function(opts) {
        if (!opts.state.query) {
          document.querySelector('.ais-clear-input-icon').style.display =
            'none';
        } else {
          document.querySelector('.ais-clear-input-icon').style.display = '';
        }
      },
    },
  ]);

  // Stats
  instant.search.addWidgets([
    stats({
      container: '.ais-stats-container',
      templates: {
        text(data, {html}){
          return algolia.instantSearchStatsTemplate(data, html)
        }
      }
    }),
  ]);

  // Sort orders
  if (activeSortOrders.length > 1) {
    instant.search.addWidgets([
      sortBy({
        container: '.ais-sort-orders-container',
        items: instant.sortOrders,
      }),
    ]);
  }

  // Change display
  instant.search.addWidgets([
    {
      init: function() {
        document
          .querySelector('.ais-search-header .ais-change-display-block')
          .addEventListener('click', function() {
            document
              .querySelector(
                '.ais-change-display-block:not(.ais-change-display-selected)'
              )
              .classList.add('ais-change-display-selected');
            document
              .querySelector(
                '.ais-change-display-list.ais-change-display-selected'
              )
              .classList.remove('ais-change-display-selected');
            document
              .querySelector('.ais-results-as-list')
              .classList.replace('ais-results-as-list', 'ais-results-as-block');
          });
        document
          .querySelector('.ais-search-header .ais-change-display-list')
          .addEventListener('click', function() {
            document
              .querySelector(
                '.ais-change-display-list:not(.ais-change-display-selected)'
              )
              .classList.add('ais-change-display-selected');
            document
              .querySelector(
                '.ais-change-display-block.ais-change-display-selected'
              )
              .classList.remove('ais-change-display-selected');
            document
              .querySelector('.ais-results-as-block')
              .classList.replace('ais-results-as-block', 'ais-results-as-list');
          });
      },
    },
  ]);

  // Hidden facets
  var list = instant.facets.hidden.map(function(facet) {
    return facet.name;
  });
  instant.search.addWidgets([
    {
      getConfiguration: function() {
        return {
          facets: list,
          disjunctiveFacets: list,
        };
      },
      init: function() {},
    },
  ]);

  // Create the render function
  var createDataAttributes = function(refinement) {
    return Object.keys(refinement)
      .map(function(key) {
        return 'data-' + key + '="' + encodeURIComponent(refinement[key] || '') + '"';
      })
      .join(' ');
  };

  var renderListItem = function(item) {
    var facet = instant.facets.list.find(function(f) {
      return f.name === item.label;
    });
    return item.refinements
      .map(function(refinement) {
        return (
          '<li class="ais-current-refined-values--item">' +
          '  <a ' +
          createDataAttributes(refinement) +
          '    class="ais-current-refined-values--link">' +
          '    <div>' +
          '      <div class="ais-current-refined-values--label">' +
          facet.title +
          '      </div>: ' +
          refinement.label +
          '    </div>' +
          '  </a>' +
          '</li>'
        );
      })
      .join('');
  };

  var renderCurrentRefinements = function(renderOptions) {
    var items = renderOptions.items;
    var refine = renderOptions.refine;
    var widgetParams = renderOptions.widgetParams;

    widgetParams.container.innerHTML =
      '<div class="ais-current-refined-values--header ais-facet--header ais-header">Selected filters</div>' +
      '<div class="ais-root ais-current-refined-values ais-facet">' +
      '  <ul class="ais-current-refined-values--list">' +
      items.map(renderListItem).join('') +
      '  </ul>' +
      '</div>';

    Array.prototype.slice
      .call(
        widgetParams.container.querySelectorAll(
          '.ais-current-refined-values--link'
        )
      )
      .forEach(function(element) {
        element.addEventListener('click', function(event) {
          var item = Object.keys(event.currentTarget.dataset).reduce(function(
            acc,
            key
          ) {
            var itemData = {};
            itemData[key] = decodeURIComponent(event.currentTarget.dataset[key]);
            return algolia.assign({}, acc, itemData);
          },
          {});

          refine(item);
        });
      });
  };

  // Create the custom widget
  var customCurrentRefinements = connectCurrentRefinements(
    renderCurrentRefinements
  );

  var hasRefinements = function(helper, facetsList) {
    return facetsList.some(function(f) {
      var isConjunctiveFacetRefined =
        helper.state.isConjunctiveFacet(f.name) &&
        helper.state.isFacetRefined(f.name);
      var isDisjunctiveFacetRefined =
        helper.state.isDisjunctiveFacet(f.name) &&
        helper.state.isDisjunctiveFacetRefined(f.name);
      var isHierarchicalFacetRefined =
        helper.state.isHierarchicalFacet(f.name) &&
        helper.state.isHierarchicalFacetRefined(f.name);

      var numericRefinements = helper.state.getNumericRefinements(f.name);
      var isNumericFacetRefined = Object.keys(numericRefinements).some(function(
        operator
      ) {
        return numericRefinements[operator].length > 0;
      });

      return (
        isNumericFacetRefined ||
        isConjunctiveFacetRefined ||
        isDisjunctiveFacetRefined ||
        isHierarchicalFacetRefined
      );
    });
  };

  /**
   * Decides whether the given `facetName` has any facet values available in
   * the current result set by checking the available `facets`,
   * `disjunctiveFacets` and `hierarchicalFacets`.
   */
  var hasFacetValues = function(resultState, facetName) {
    var isFacetValueAvailable = resultState.facets.some(function(facet) {
      return facet.name === facetName;
    });
    var isDisjunctiveFacetValueAvailable = resultState.disjunctiveFacets.some(
      function(facet) {
        return facet.name === facetName;
      }
    );
    var isHierarchicalFacetValueAvailable = resultState.hierarchicalFacets.some(
      function(facet) {
        return facet.name === facetName;
      }
    );

    return (
      isFacetValueAvailable ||
      isDisjunctiveFacetValueAvailable ||
      isHierarchicalFacetValueAvailable
    );
  };

  var customCurrentRefinementsWithPanel = panel({
    hidden: function(options) {
      return !hasRefinements(options.helper, instant.facets.list);
    },
  })(customCurrentRefinements);

  var clearRefinementsWithPanel = panel({
    hidden: function(options) {
      return !hasRefinements(options.helper, instant.facets.list);
    },
  })(clearRefinements);

  instant.search.addWidgets([
    clearRefinementsWithPanel({
      container: document.querySelector('.ais-clear-refinements-container'),
      templates: {
        resetLabel: algolia.translations.clearAll,
      },
    }),
    customCurrentRefinementsWithPanel({
      container: document.querySelector(
        '.ais-current-refined-values-container'
      ),
    }),
  ]);

  /**
   * Setup the facets for search.
   * We are using a `panel` with a custom `hidden` function which will allow
   * us to hide the parent container of the facet if there are no facet values
   * available for that particular facet.
   */
  instant.facets.widgets.forEach(function(widget) {
    var facetWithPanel = panel({
      hidden: function(options) {
        var hide = !hasFacetValues(options.results, widget.params.attribute);
        var displayStyle = hide ? 'none' : '';

        /**
         * Replacing any "." and "%" in the class name with "\." and "\%" so that querySelector
         * can work as expected. "." is supposed to be present for named tags
         * and metafield based facet names and "%" is present when the facet name has a space
         * in it because of the encoding.
         */
        var parentContainerClassName = '.ais-facet-' + encodeURIComponent(
          widget.params.attribute
        ).replace(/\./g, '\\.').replace(/\%/g, '\\%');
        var parentContainer = document.querySelector(parentContainerClassName);

        if (parentContainer) {
          parentContainer.style.display = displayStyle;
        }

        return hide;
      },
    })(widget.widget);

    instant.search.addWidgets([facetWithPanel(widget.params)]);
  });

  // Hits
  instant.search.addWidgets([
    hits({
      container: '.ais-hits-container',
      templates: {
        item(hit, {html, components}) {
          return algolia.instantSearchProductTemplate(hit, html, components);
        },
        empty(results, {html}) {
          return algolia.instantSearchNoResultTemplate(html);
        }
      },
      transformItems: function(items) {
        return items.map( item => ({
          ...item,
          _distinct: instant.distinct,
          can_order:
            item.inventory_management !== 'shopify' ||
            item.inventory_policy === 'continue' ||
            item.inventory_quantity > 0,
          queryID: item.__queryID,
          productPosition: item.__position,
          index: instant.search.mainIndex.getIndexName()
        }));
      }
    })
  ]);





  // Redirect to product on click
  instant.search.addWidgets([
    {
      init: function() {
        var container = document.querySelector('.ais-hits-container');
        container.addEventListener('click', function(e) {
          var el = e.target;
          var hit;
          do {
            if (el.matches('.ais-hit')) {
              hit = el;
              break;
            }
            el = el.parentNode;
          } while (el && el !== container);
          if (!hit) {
            return;
          }
          var $this = hit;
          var productHandle = $this.dataset.handle;
          var variant_id = $this.dataset.variantId;
          var distinct = $this.dataset.distinct;

          // Construct the link we should redirect to
          var link = '';

          // If we're on a collection page and the handle is available
          // then prefix the product link with the collection handle
          if (collectionPageEnabled && collectionHandle) {
            link = `${window.Shopify.routes.root}collections/${collectionHandle}`;
          }

          // Add the product handle to the link
          link = link + `${window.Shopify.routes.root}products/${productHandle}`;

          // Add the variant ID details to redirect to a specific
          // variant ID if we are showing variants and not products
          if (distinct !== 'true') {
            link += '?variant=' + variant_id;
          }

          if (algolia.config.analytics_enabled) {

            const clickData = {
              index: hit.dataset.algoliaIndex,
              eventName: 'click',
              queryID: hit.dataset.algoliaQueryid,
              objectIDs: [hit.dataset.algoliaObjectid],
            };

            /**
             * Uncomment the following function call to start storing data in
             * local storage for conversion tracking
             */
            // algolia.saveForConversionTracking(clickData);
          }
          window.location.href = link;
        });
      },
    },
  ]);

  // Add to cart
  instant.search.addWidgets([
    {
      init: function() {
        var container = document.querySelector('.ais-hits-container');
        container.addEventListener('click', function(e) {
          var el = e.target;
          var cartButton;
          do {
            if (el.matches('.ais-hit--cart-button')) {
              cartButton = el;
              break;
            }
            el = el.parentNode;
          } while (el && el !== container);
          if (!cartButton) {
            return;
          }

          e.stopPropagation();
          var $this = cartButton;
          var formId = $this.dataset.formId;

          if (formId) {
            document.getElementById(formId).submit();
          }
        });
      },
    },
  ]);

  // No result actions
  instant.search.addWidgets([
    {
      init: function(opts) {
        var container = document.querySelector('.ais-hits-container');
        container.addEventListener('click', function(e) {
          var el = e.target;
          var clearFilters;
          do {
            if (el.matches('.ais-hit-empty--clear-filters')) {
              clearFilters = el;
              break;
            }
            el = el.parentNode;
          } while (el && el !== container);
          if (!clearFilters) {
            return;
          }

          var helper = opts.helper;
          helper.clearTags();
          instant.facets.list.forEach(function(facet) {
            helper.clearRefinements(facet.name);
          });
          helper.search();
        });

        container.addEventListener('click', function(e) {
          var el = e.target;
          var clearInput;
          do {
            if (el.matches('.ais-hit-empty--clear-input')) {
              clearInput = el;
              break;
            }
            el = el.parentNode;
          } while (el && el !== container);
          if (!clearInput) {
            return;
          }

          opts.helper.setQuery('').search();
          var input = document.querySelector('.ais-search-box--input');
          input.value = '';
          input.focus();
        });
      },
    },
  ]);

  // Pagination
  instant.search.addWidgets([
    pagination({
      container: '.ais-pagination-container',
      padding: 2,
      maxPages: 20,
    }),
  ]);

  instant.search.start();

  algolia.contentHide.parentNode.removeChild(algolia.contentHide);
})(window.algoliaShopify);
