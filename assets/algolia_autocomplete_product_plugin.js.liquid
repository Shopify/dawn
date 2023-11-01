(async function(algolia) {
  'use strict';

  const getAlgoliaResults = algolia.externals.getAlgoliaResults;
  const { config, translations, headerTemplate, productTemplate, footerTemplate } = algolia;

  // Filters for stock policy
  let stockPolicyFilter = '';

  if (algolia.config.stock_policy === 'deny') {
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

  const index_suffix = await config.index_suffix;

  algolia.productsPlugin = {
    getSources({ query, setContext }) {
      return [
        {
          sourceId: 'products',
          getItems() {
            return getAlgoliaResults({
              searchClient: algolia.searchClient,
              queries: [
                {
                  indexName: config.index_prefix + 'products' + index_suffix,
                  query,
                  params: {
                    hitsPerPage: config.products_autocomplete_hits_per_page,
                    clickAnalytics: config.analytics_enabled,
                    filters: stockPolicyFilter,
                    distinct: algolia.config.show_products
                  },
                },
              ],
              transformResponse({ results, hits }) {
                setContext({
                  nbProducts: results[0].nbHits,
                });
                return hits;
              },
            });
          },
          templates: {
            header({ html, state }) {
              const resource = translations.products;
              return headerTemplate({ html, state }, resource);
            },
            item({ item, html, components }) {
              const distinct = config.show_products;
              const variantInfo = !distinct && item.objectID !== item.id ? `?variant= ${item.objectID}` : '';
              const itemLink = `${window.Shopify.routes.root}products/${item.handle}/${variantInfo}`;
              const getConversionData = (e, item) => {
                if (!algolia.config.analytics_enabled) return;
                const clickData = {
                  index: item.__autocomplete_indexName,
                  eventName: 'Added to cart',
                  queryID: item.__autocomplete_queryID,
                  objectIDs: [item.objectID],
                };

                /**
                 * Uncomment the following function call to start storing data in
                 * local storage for conversion tracking
                 */
                // algolia.saveForConversionTracking(clickData);
              }
              return productTemplate({ item, html, components }, distinct, itemLink, getConversionData);
            },
            footer({ state, html }){
              const {autocomplete_see_all, products_autocomplete_hits_per_page} = config;
              const showFooter = autocomplete_see_all && state.context.nbProducts > products_autocomplete_hits_per_page
              return showFooter && footerTemplate({ html, state });
            },
          },
        }
      ];
    },
  }
})(window.algoliaShopify);
