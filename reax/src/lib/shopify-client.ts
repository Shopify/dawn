import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const client = createStorefrontApiClient({
  storeDomain: window.shopUrl,
  apiVersion: '2025-01',
  publicAccessToken: window.s3_pat,
});

export default client;
