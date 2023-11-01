(async function(algolia) {
  'use strict';

  if (!algolia.config.autocomplete_enabled) return;

  const autocomplete = algolia.externals.autocomplete;

  const index_suffix = await algolia.config.index_suffix;

  algolia.searchClient.addAlgoliaAgent('Shopify Integration');

  if (algolia.config.dynamic_selector) {
    const search_url = algolia?.shopify?.routes?.search_url || `${window.Shopify.routes.root}/search`;
    const default_form_search = `form[action="${search_url}"]`;
    algolia.config.input_selector += `, ${default_form_search}`;
  }
  
  // Retrieve the container from Shopify's config
  const containers = Array.from(document.querySelectorAll(algolia.config.input_selector));
  containers.forEach(container => {
    container.innerHTML = ''
    const containerClasses = container.classList;
    containerClasses.add('aa-MainContainer');
  });

  // Set plugins
  const { productsPlugin, collectionsPlugin, articlesPlugin, pagesPlugin, querySuggestionsPlugin } = algolia;
  const plugins = [
    algolia.config.index_products && productsPlugin,
    algolia.config.index_collections && collectionsPlugin,
    algolia.config.index_articles && articlesPlugin,
    algolia.config.index_pages && pagesPlugin,
    algolia.config.autocomplete_query_suggestions && querySuggestionsPlugin
  ];

  const cssFile = document.getElementById('template_algolia_autocomplete.css');
  //Set CSS variables
  document.documentElement.style.setProperty(`--aa-text-color-rgb`, `${algolia.helpers.hexToRGB(algolia.config.colors.secondary)}`);
  document.documentElement.style.setProperty(`--aa-primary-color-rgb`, `${algolia.helpers.hexToRGB(algolia.config.colors.main)}`);
  document.documentElement.style.setProperty(`--aa-muted-color-rgb`, `${algolia.helpers.hexToRGB(algolia.config.colors.muted)}`);
  document.documentElement.style.setProperty(`--aa-highlight-color-rgb`, `${algolia.helpers.hexToRGB(algolia.config.colors.highlight)}`);
  //Link CSS
  algolia.appendStyle(cssFile.text);

  const autocompleteOptions = {
    openOnFocus: false,
    debug: algolia.config.autocomplete_debug,
    insights: algolia.config.analytics_enabled,
    plugins,
    render({ elements, render, html, state }, root) {
      const sourceIdsToExclude = ['products'];
      const hasLeftPanelResults = state.collections
              .filter(
                      ({ source }) => sourceIdsToExclude.indexOf(source.sourceId) === -1
              )
              .reduce((prev, curr) => prev + curr.items.length, 0) > 0;
      const [querySuggestionsPluginResults] = state.collections.filter(({source}) => source.sourceId === 'querySuggestionsPlugin');
      const displaySuggestions = algolia.config.autocomplete_query_suggestions && querySuggestionsPluginResults.items.length > 0;
      render(
              hasLeftPanelResults ?
              algolia.mainTemplate({ html, state }, elements, displaySuggestions)
              : algolia.mainProductsTemplate({ html, state }, elements),
              root
      );
    },
    renderNoResults({ render, html, state }, root) {
      render(
              algolia.noResultsTemplate({ html, state }),
              root
      )
    },
    onSubmit({ state }) {
      window.location.href = `${window.Shopify.routes.root}search?q=${encodeURIComponent(state.query)}`;
    }
  }
  
  containers.forEach(container => {
    autocomplete({
      container,
      ...autocompleteOptions
    });
  });
})(window.algoliaShopify);
