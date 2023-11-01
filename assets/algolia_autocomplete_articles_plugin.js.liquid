(async function(algolia) {
  'use strict';

  const getAlgoliaResults = algolia.externals.getAlgoliaResults;
  const { config, translations, headerTemplate, articlesTemplate } = algolia;
  
  const index_suffix = await config.index_suffix;

  algolia.articlesPlugin = {
    getSources({ query }) {
      return [
        {
          sourceId: 'articles',
          getItems() {
            return getAlgoliaResults({
              searchClient: algolia.searchClient,
              queries: [
                {
                  indexName: config.index_prefix + 'articles',
                  query,
                  params: {
                    hitsPerPage: config.articles_autocomplete_hits_per_page,
                    clickAnalytics: config.analytics_enabled
                  },
                },
              ],
            });
          },
          templates: {
            header({ html, state }) {
              const resource = translations.articles;
              return headerTemplate({ html, state }, resource);
            },
            item({ item, html, components }) {
              const itemLink = `${window.Shopify.routes.root}blogs/${item.blog.handle}/${item.handle}`;
              return articlesTemplate({ item, html, components }, itemLink);
            },
          },
        }
      ];
    },
  }
})(window.algoliaShopify);