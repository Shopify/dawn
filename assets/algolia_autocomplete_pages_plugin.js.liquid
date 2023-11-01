(async function(algolia) {
  'use strict';

  const getAlgoliaResults = algolia.externals.getAlgoliaResults;
  const { config, translations, headerTemplate, pagesTemplate } = algolia;

  const index_suffix = await config.index_suffix;

  algolia.pagesPlugin = {
    getSources({ query }) {
      return [
        {
          sourceId: 'pages',
          getItems() {
            return getAlgoliaResults({
              searchClient: algolia.searchClient,
              queries: [
                {
                  indexName: config.index_prefix + 'pages',
                  query,
                  params: {
                    hitsPerPage: config.pages_autocomplete_hits_per_page,
                    clickAnalytics: config.analytics_enabled
                  },
                },
              ],
            });
          },
          templates: {
            header({ html, state }) {
              const resource = translations.pages;
              return headerTemplate({ html, state }, resource);
            },
            item({ item, html, components }) {
              const itemLink = `${window.Shopify.routes.root}pages/${item.handle}`;
              return pagesTemplate({ item, html, components }, itemLink);
            },
          },
        }
      ];
    },
  }
})(window.algoliaShopify);