const { test, expect } = require('@playwright/test');
const { runSnapshotTest } = require('utils/visualRegressionTests');

runSnapshotTest('/collections/facets-testing?view=test-collection', 'collection');

const facetsBaseURL = '/collections/facets-testing';
const verticalFiltersCollectionURL = `${facetsBaseURL}?view=test-vertical-filters`;
const horizontalFiltersCollectionURL = `${facetsBaseURL}?view=test-horizontal-filters`;
const verticalFiltersSortingOnlyCollectionURL = `${facetsBaseURL}?view=test-vertical-filters-sorting-only`;
const horizontalFiltersSortingOnlyCollectionURL = `${facetsBaseURL}?view=test-horizontal-filters-sorting-only`;

runSnapshotTest(verticalFiltersCollectionURL, 'vertical-filters');
runSnapshotTest(horizontalFiltersCollectionURL, 'horizontal-filters');
runSnapshotTest(verticalFiltersSortingOnlyCollectionURL, 'vertical-filters-sorting-only');
runSnapshotTest(horizontalFiltersSortingOnlyCollectionURL, 'horizontal-filters-sorting-only');
