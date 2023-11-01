(function(algolia) {
  'use strict';
  algolia.translations = {
    ...algolia.shopify.market.translations
    // Add additinonal translations here
  };

  algolia.translation_helpers = {
    no_result_for: function(text) {
      return `${algolia.translations.noResultFor} " ${text} ".`;
    },
    in: function(processingTimeMS) {
      return `${algolia.translations.in} ${processingTimeMS / 1000}s`;
    },

    outOf: function(page, hitsPerPage, nbHits) {
      return (
        page * hitsPerPage +
        1 +
        '-' +
        Math.min((page + 1) * hitsPerPage, nbHits) +
        ` ${ algolia.translations.outOf}`
      );
    },

    by: function(text) {
      if (!text) return '';
      return ` ${algolia.translations.by} ` + text;
    },

    render_title: function(text, query){
      if (text === 'Products' && query) {
        return text + ' for ' + query;
      }
      return text;
    }
  };
})(window.algoliaShopify);
