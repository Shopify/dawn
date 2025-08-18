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
        metafield(key: "short_description", namespace:"custom_but_hidden") {
          value
        }
        productTagMetafield: metafield(key: "product_tag", namespace:"custom_but_hidden") {
          value
        }
        metafields(identifiers: [
          {namespace: "custom", key: "durability"}
          {namespace: "custom", key: "control"}
          {namespace: "custom", key: "repulsion_power"}
          {namespace: "custom", key: "hitting_sound"}
          {namespace: "custom", key: "shock_absorption"}
          {namespace: "custom", key: "core_material"}
          {namespace: "custom", key: "outer_material"}
        ]) {
          namespace
          key
          value
        }
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
            sku
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
