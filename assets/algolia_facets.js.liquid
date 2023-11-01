(function(algolia) {
  'use strict';
  var rangeSlider = algolia.externals.widgets.rangeSlider;
  var menu = algolia.externals.widgets.menu;
  var refinementList = algolia.externals.widgets.refinementList;
  var translations = algolia.translations;

  var TYPES_TO_WIDGET = {
    slider: { name: 'rangeSlider', useDefault: true, widget: rangeSlider },
    menu: { name: 'menu', params: { limit: 10 }, widget: menu },
    conjunctive: {
      name: 'refinementList',
      params: { operator: 'and', limit: 10 },
      widget: refinementList,
    },
    disjunctive: {
      name: 'refinementList',
      params: { operator: 'or', limit: 10 },
      widget: refinementList,
    },
  };

  var sortByRefined = function sortByRefined(sortFunction) {
    return function(a, b) {
      if (a.refined !== b.refined) {
        if (a.refined) {
          return -1;
        }
        if (b.refined) {
          return 1;
        }
      }
      return sortFunction(a, b);
    };
  };

  /*
   * Sorting functions : Allows to chose in which order you want to display the facets
   * Algolia will always send you back the most relevant values for each facet (the ones
   * with the highest count). These sorting functions won't change which results come back
   * but how they are displayed. To retrieve more results, change the maxValuesPerFacet
   * parameter in your Algolia Dashboard.
   * The default sort function is refined > count > name.
   */
  algolia.facetSortFunctions = {
    price_range: sortByRefined(function sortRanges(a, b) {
      if (a.name.length === b.name.length) {
        return a.name.localeCompare(b.name);
      }
      return a.name.length - b.name.length;
    }),
  };

  /*
   * Display functions
   * When the object sent back for a facet item doesn't match how you would want it to look
   * like, use a function to reformat it how you want.
   */
  algolia.facetDisplayFunctions = {
    price_range: function displayRange(value) {
      var values = value.split(':');

      return values
        .map(e => {
          return algolia.formatMoney(Number(e) * 100).replace(/\.\d+/, '');
        })
        .join(' - ');
    },
  };

  algolia.facetCssClasses = {
    root: 'ais-facet',
    header: 'ais-facet--header',
    body: 'ais-facet--body',
    item: 'ais-facet--item',
    label: 'ais-facet--label',
    checkbox: 'ais-facet--checkbox',
    active: 'ais-facet--active',
    count: Boolean(algolia.config.show_products) ? 'ais-facet--count-distinct' : 'ais-facet--count',
  };

  var enabledFacets = algolia.config.facets.filter(facet => {
    return facet.enabled || parseInt(facet.enabled, 10);
  });
  algolia.facets = enabledFacets.map(facet => { 
    const facetTitle = translations?.facets?.find(f => f.name === facet.name);
    const title = facetTitle ? facetTitle.title : facet.title;
    return {
      ...facet,
      title: title,
      escapedName: encodeURIComponent(facet.name),
    }
  });
  algolia.shownFacets = algolia.facets.filter(facet => {
    return facet.type !== 'hidden';
  });
  algolia.hiddenFacets = algolia.config.facets.filter(facet => {
    return facet.type === 'hidden';
  });

  var facetToWidget = function(facet) {
    var widget = TYPES_TO_WIDGET[facet.type];
    var params = algolia.assign({}, widget.params);

    params.container =
      "[class~='ais-facet-" + facet.escapedName + "-container']";
    params.attribute = facet.name;
    params.templates = {};
    params.cssClasses = algolia.facetCssClasses;

    /**
     * Providing a custom "Show more" template to confirm to the custom
     */
    params.templates.showMoreText = function showMoreText(data, {html}) {
      return algolia.instantSearchShowMore(data, html)
    }

    if (facet.searchable) {
      params.searchable = true;
      params.searchablePlaceholder = 'Search for ' + facet.title;
      params.templates.searchableNoResults = '<div> No matching for ' + facet.title + '</div>';
    }

    params.templates.header = function() {
      return facet.title;
    };

    if (!widget.useDefault) {
      params.templates.item = (item, {html}) => {
        return algolia.instantSearchFacetItem(item, html)
      }
    }

    if (algolia.facetSortFunctions[facet.name]) {
      params.sortBy = algolia.facetSortFunctions[facet.name];
    }

    var displayFunction = algolia.facetDisplayFunctions[facet.name];
    params.transformItems = function(items) {
      return items.map(item => ({
        ...item,
        type: facet.type,
        label: displayFunction ? displayFunction(item.value) : item.value
      }));
    }

    return {
      name: widget.name,
      params: params,
      widget: widget.widget,
    };
  };

  // try to fetch facets for current collection or fallback to collections default
  var collection_facets =
    algolia.current_collection_id &&
    algolia.config.collection_facets &&
    algolia.config.collection_facets[algolia.current_collection_id]
      ? algolia.config.collection_facets[algolia.current_collection_id]
      : algolia.config.collection_facets &&
        algolia.config.collection_facets.default;

  if (collection_facets) {
    var enabledCollectionFacets = collection_facets.filter(facet => {
      return facet.enabled || parseInt(facet.enabled, 10);
    });

    algolia.collectionFacets = enabledCollectionFacets.map(facet => ({
      ...facet,
      escapedName: encodeURIComponent(facet.name)
    }));
    algolia.collectionShownFacets = algolia.collectionFacets.filter(facet => {
      return facet.type !== 'hidden';
    });
    algolia.collectionHiddenFacets = collection_facets.filter(facet => {
      return facet.type === 'hidden';
    });
    algolia.collectionFacetsWidgets = algolia.collectionShownFacets.map(facetToWidget);
  }
  algolia.facetsWidgets = algolia.shownFacets.map(facetToWidget);
})(window.algoliaShopify);
