import { ApiType, shopifyApiProject } from '@shopify/api-codegen-preset';

export default {
  schema: 'https://shopify.dev/admin-graphql-direct-proxy/2025-01',
  documents: './src/lib/gql.ts',
  projects: {
    default: shopifyApiProject({
      apiType: ApiType.Storefront,
      apiVersion: '2025-01',
      documents: ['./src/lib/gql.ts'],
      outputDir: './src/lib/types',
    }),
  },
};
