(async function(algolia) {
  'use strict';
  
  const createQuerySuggestionsPlugin = algolia.externals.createQuerySuggestionsPlugin;
  const { config, suggestionsTemplate } = algolia;

  const index_suffix = await config.index_suffix;

  algolia.querySuggestionsPlugin = createQuerySuggestionsPlugin({
    searchClient: algolia.searchClient,
    indexName: config.query_suggestions_index_name,
    getSearchParams() {
      return {
        hitsPerPage: config.suggestions_autocomplete_hits_per_page,
      };
    },
    transformSource({ source }) {
      return {
        ...source,
        getItemUrl({ item }) {
          return `${window.Shopify.routes.root}search?q=${encodeURIComponent(item.query)}`;
        },
        templates: {
          ...source.templates,
          item(params) {
            const { item, html, components } = params;
            return suggestionsTemplate({ item, html, components });
          },
        },
      };
    }
  });
})(window.algoliaShopify);