(async function(algolia) {
  'use strict';
  var translations = algolia.translations;
  var index_suffix = await algolia.config.index_suffix;
  
  var sort_order_base = algolia.config.index_prefix + 'products' + index_suffix;
  var relevantSortOrderLabel = translations?.sort_orders?.find(sortOrder => sortOrder.key === 'relevant');
  algolia.sortOrders = [
    { value: sort_order_base, label: '' + `${relevantSortOrderLabel ? relevantSortOrderLabel.title : algolia.translations.relevance}` },
  ];

  algolia.config.sort_orders.forEach(function(sort_order) {
    if (
      sort_order.asc &&
      (sort_order.asc.active === true || sort_order.asc.active === '1')
      ) {
      const translatedSortOrder = translations?.sort_orders?.find(sortOrder => `${sortOrder.key}` === `${sort_order.key}_asc`);
      algolia.sortOrders.push({
        value: sort_order_base + '_' + sort_order.key + '_asc',
        label: translatedSortOrder ? translatedSortOrder.title : sort_order.asc.title,
      });
    }

    if (
      sort_order.desc &&
      (sort_order.desc.active === true || sort_order.desc.active === '1')
    ) {
      const translatedSortOrder = translations?.sort_orders?.find(sortOrder => `${sortOrder.key}` === `${sort_order.key}_desc`);
      algolia.sortOrders.push({
        value: sort_order_base + '_' + sort_order.key + '_desc',
        label: translatedSortOrder ? translatedSortOrder.title : sort_order.desc.title,
      });
    }
  });

  // try to fetch sort orders for current collection or fallback to collections default
  var collection_sort_orders =
    algolia.current_collection_id &&
    algolia.config.collection_sort_orders &&
    algolia.config.collection_sort_orders[algolia.current_collection_id]
      ? algolia.config.collection_sort_orders[algolia.current_collection_id]
      : algolia.config.collection_sort_orders &&
        algolia.config.collection_sort_orders.default;

  if (collection_sort_orders) {
    algolia.collectionSortOrders = [
      { value: sort_order_base, label: '' + algolia.translations.relevance },
    ];

    collection_sort_orders.forEach(function(sort_order) {
      if (
        sort_order.asc &&
        (sort_order.asc.active === true || sort_order.asc.active === '1')
      ) {
        algolia.collectionSortOrders.push({
          value: sort_order_base + '_' + sort_order.key + '_asc',
          label: sort_order.asc.title,
        });
      }

      if (
        sort_order.desc &&
        (sort_order.desc.active === true || sort_order.desc.active === '1')
      ) {
        algolia.collectionSortOrders.push({
          value: sort_order_base + '_' + sort_order.key + '_desc',
          label: sort_order.desc.title,
        });
      }
    });
  }
})(window.algoliaShopify);
