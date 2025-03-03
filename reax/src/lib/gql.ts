export const getMetaobjectQuery = `#graphql
  query GetMetaobject($id: ID!) {
    metaobject(id: $id) {
      type
      handle
      fields {
        value
        key
      }
    }
  }
`;

export const getNodesQuery = `#graphql
  query GetNodes($ids: [ID!]!) {
    nodes(ids: $ids) {
      id
      __typename
      ... on MediaImage {
        image {
          url
          altText
        }
      }
    }
  }
`;

export const fetchCollectionQuery = `#graphql
query getCollectionById($id: ID!) {
  collection(id: $id) {
    title
    products(first: 10) {
      nodes {
        id
        title
        availableForSale
        tags
        options {
          optionValues {
            name
            swatch {
              color
            }
          }
        }
         priceRange {
          minVariantPrice {
            amount 
            currencyCode
          }
          maxVariantPrice {
            amount 
            currencyCode
          }
        }
        variants(first: 15) {
          nodes {
            id
            title
            availableForSale
            price {
              amount
              currencyCode
            }
            selectedOptions {
              name
              value
            }
          }
        }
        featuredImage {
          altText
          url
        }
      }
    }
  }
}
`;
