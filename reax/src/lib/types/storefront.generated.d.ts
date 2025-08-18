/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as StorefrontTypes from './storefront.types';

export type GetMetaobjectQueryVariables = StorefrontTypes.Exact<{
  id: StorefrontTypes.Scalars['ID']['input'];
}>;


export type GetMetaobjectQuery = { metaobject?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Metaobject, 'type' | 'handle'>
    & { fields: Array<Pick<StorefrontTypes.MetaobjectField, 'value' | 'key'>> }
  )> };

export type GetNodesQueryVariables = StorefrontTypes.Exact<{
  ids: Array<StorefrontTypes.Scalars['ID']['input']> | StorefrontTypes.Scalars['ID']['input'];
}>;


export type GetNodesQuery = { nodes: Array<StorefrontTypes.Maybe<(
    { __typename: 'AppliedGiftCard' }
    & Pick<StorefrontTypes.AppliedGiftCard, 'id'>
  ) | (
    { __typename: 'Article' }
    & Pick<StorefrontTypes.Article, 'id'>
  ) | (
    { __typename: 'Blog' }
    & Pick<StorefrontTypes.Blog, 'id'>
  ) | (
    { __typename: 'Cart' }
    & Pick<StorefrontTypes.Cart, 'id'>
  ) | (
    { __typename: 'CartLine' }
    & Pick<StorefrontTypes.CartLine, 'id'>
  ) | (
    { __typename: 'Collection' }
    & Pick<StorefrontTypes.Collection, 'id'>
  ) | (
    { __typename: 'Comment' }
    & Pick<StorefrontTypes.Comment, 'id'>
  ) | (
    { __typename: 'Company' }
    & Pick<StorefrontTypes.Company, 'id'>
  ) | (
    { __typename: 'CompanyContact' }
    & Pick<StorefrontTypes.CompanyContact, 'id'>
  ) | (
    { __typename: 'CompanyLocation' }
    & Pick<StorefrontTypes.CompanyLocation, 'id'>
  ) | (
    { __typename: 'ComponentizableCartLine' }
    & Pick<StorefrontTypes.ComponentizableCartLine, 'id'>
  ) | (
    { __typename: 'ExternalVideo' }
    & Pick<StorefrontTypes.ExternalVideo, 'id'>
  ) | (
    { __typename: 'GenericFile' }
    & Pick<StorefrontTypes.GenericFile, 'id'>
  ) | (
    { __typename: 'Location' }
    & Pick<StorefrontTypes.Location, 'id'>
  ) | (
    { __typename: 'MailingAddress' }
    & Pick<StorefrontTypes.MailingAddress, 'id'>
  ) | (
    { __typename: 'Market' }
    & Pick<StorefrontTypes.Market, 'id'>
  ) | (
    { __typename: 'MediaImage' }
    & Pick<StorefrontTypes.MediaImage, 'id'>
    & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText'>> }
  ) | (
    { __typename: 'MediaPresentation' }
    & Pick<StorefrontTypes.MediaPresentation, 'id'>
  ) | (
    { __typename: 'Menu' }
    & Pick<StorefrontTypes.Menu, 'id'>
  ) | (
    { __typename: 'MenuItem' }
    & Pick<StorefrontTypes.MenuItem, 'id'>
  ) | (
    { __typename: 'Metafield' }
    & Pick<StorefrontTypes.Metafield, 'id'>
  ) | (
    { __typename: 'Metaobject' }
    & Pick<StorefrontTypes.Metaobject, 'id'>
  ) | (
    { __typename: 'Model3d' }
    & Pick<StorefrontTypes.Model3d, 'id'>
  ) | (
    { __typename: 'Order' }
    & Pick<StorefrontTypes.Order, 'id'>
  ) | (
    { __typename: 'Page' }
    & Pick<StorefrontTypes.Page, 'id'>
  ) | (
    { __typename: 'Product' }
    & Pick<StorefrontTypes.Product, 'id'>
  ) | (
    { __typename: 'ProductOption' }
    & Pick<StorefrontTypes.ProductOption, 'id'>
  ) | (
    { __typename: 'ProductOptionValue' }
    & Pick<StorefrontTypes.ProductOptionValue, 'id'>
  ) | (
    { __typename: 'ProductVariant' }
    & Pick<StorefrontTypes.ProductVariant, 'id'>
  ) | (
    { __typename: 'Shop' }
    & Pick<StorefrontTypes.Shop, 'id'>
  ) | (
    { __typename: 'ShopPayInstallmentsFinancingPlan' }
    & Pick<StorefrontTypes.ShopPayInstallmentsFinancingPlan, 'id'>
  ) | (
    { __typename: 'ShopPayInstallmentsFinancingPlanTerm' }
    & Pick<StorefrontTypes.ShopPayInstallmentsFinancingPlanTerm, 'id'>
  ) | (
    { __typename: 'ShopPayInstallmentsProductVariantPricing' }
    & Pick<StorefrontTypes.ShopPayInstallmentsProductVariantPricing, 'id'>
  ) | (
    { __typename: 'ShopPolicy' }
    & Pick<StorefrontTypes.ShopPolicy, 'id'>
  ) | (
    { __typename: 'TaxonomyCategory' }
    & Pick<StorefrontTypes.TaxonomyCategory, 'id'>
  ) | (
    { __typename: 'UrlRedirect' }
    & Pick<StorefrontTypes.UrlRedirect, 'id'>
  ) | (
    { __typename: 'Video' }
    & Pick<StorefrontTypes.Video, 'id'>
  )>> };

export type GetCollectionByIdQueryVariables = StorefrontTypes.Exact<{
  id: StorefrontTypes.Scalars['ID']['input'];
}>;


export type GetCollectionByIdQuery = { collection?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Collection, 'title'>
    & { products: { nodes: Array<(
        Pick<StorefrontTypes.Product, 'id' | 'title' | 'availableForSale' | 'tags'>
        & { metafield?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'value'>>, productTagMetafield?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'value'>>, metafields: Array<StorefrontTypes.Maybe<Pick<StorefrontTypes.Metafield, 'namespace' | 'key' | 'value'>>>, options: Array<{ optionValues: Array<(
            Pick<StorefrontTypes.ProductOptionValue, 'name'>
            & { swatch?: StorefrontTypes.Maybe<Pick<StorefrontTypes.ProductOptionValueSwatch, 'color'>> }
          )> }>, priceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, maxVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { nodes: Array<(
            Pick<StorefrontTypes.ProductVariant, 'id' | 'sku' | 'title' | 'availableForSale'>
            & { price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>> }
          )> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'altText' | 'url'>> }
      )> } }
  )> };

interface GeneratedQueryTypes {
  "#graphql\n  query GetMetaobject($id: ID!) {\n    metaobject(id: $id) {\n      type\n      handle\n      fields {\n        value\n        key\n      }\n    }\n  }\n": {return: GetMetaobjectQuery, variables: GetMetaobjectQueryVariables},
  "#graphql\n  query GetNodes($ids: [ID!]!) {\n    nodes(ids: $ids) {\n      id\n      __typename\n      ... on MediaImage {\n        image {\n          url\n          altText\n        }\n      }\n    }\n  }\n": {return: GetNodesQuery, variables: GetNodesQueryVariables},
  "#graphql\nquery getCollectionById($id: ID!) {\n  collection(id: $id) {\n    title\n    products(first: 10) {\n      nodes {\n        id\n        title\n        availableForSale\n        tags\n        metafield(key: \"short_description\", namespace:\"custom_but_hidden\") {\n          value\n        }\n        productTagMetafield: metafield(key: \"product_tag\", namespace:\"custom_but_hidden\") {\n          value\n        }\n        metafields(identifiers: [\n          {namespace: \"custom\", key: \"durability\"}\n          {namespace: \"custom\", key: \"control\"}\n          {namespace: \"custom\", key: \"repulsion_power\"}\n          {namespace: \"custom\", key: \"hitting_sound\"}\n          {namespace: \"custom\", key: \"shock_absorption\"}\n          {namespace: \"custom\", key: \"core_material\"}\n          {namespace: \"custom\", key: \"outer_material\"}\n        ]) {\n          namespace\n          key\n          value\n        }\n        options {\n          optionValues {\n            name\n            swatch {\n              color\n            }\n          }\n        }\n         priceRange {\n          minVariantPrice {\n            amount \n            currencyCode\n          }\n          maxVariantPrice {\n            amount \n            currencyCode\n          }\n        }\n        variants(first: 15) {\n          nodes {\n            id\n            sku\n            title\n            availableForSale\n            price {\n              amount\n              currencyCode\n            }\n            selectedOptions {\n              name\n              value\n            }\n          }\n        }\n        featuredImage {\n          altText\n          url\n        }\n      }\n    }\n  }\n}\n": {return: GetCollectionByIdQuery, variables: GetCollectionByIdQueryVariables},
}

interface GeneratedMutationTypes {
}
declare module '@shopify/storefront-api-client' {
  type InputMaybe<T> = StorefrontTypes.InputMaybe<T>;
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
