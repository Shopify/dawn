// @ts-check
const { test, expect } = require('@playwright/test');
const { runSnapshotTest } = require('utils/visualRegressionTests');

runSnapshotTest('/products/carry-on-copy', 'product');
