import { GetCollectionByIdQuery } from './lib/types/storefront.generated';

declare global {
  interface Window {
    shopUrl: string;
    s3_pat: string;
    s3_product_name: string | undefined;
    s3_product_type: TRemixProductType | undefined;
    s3_brand: string | undefined;
    s3_stringing_service_variant_id: string | undefined;
    s3_bxgy: unknown;
    s3_bxgy_variants: unknown;
    s3_product_collections: string[] | undefined;
    s3_remix_modal_controller:
      | {
          openModal: () => void;
          closeModal: () => void;
          isOpen: boolean;
        }
      | undefined;
    s3_remix_config:
      | {
          racketFrameColor: string;
          racketGripColor: string;
          logoColor: string;
          stickerTextColor: string;
          modelPath: string;
        }
      | undefined;
    s3_tshirt_printing_controller:
      | {
          openModal: () => void;
          closeModal: () => void;
          isOpen: boolean;
        }
      | undefined;
    s3_tshirt_printing_config:
      | { tshirtColor: string; tshirtTextColor: string; texturePath: string | undefined }
      | undefined;
  }
}

export type TRemixProductType = 'Badminton Racket' | 'Pickleball Paddle';

// First, get the type from your GetCollectionByIdQuery
export type CollectionType = GetCollectionByIdQuery['collection'];

// Then extract the nodes type from the products property
export type ProductNodes = NonNullable<CollectionType>['products']['nodes'];

// If you want to get a single node type:
export type SingleProductNode = ProductNodes[number];

export type TConfig = {
  stringProduct: SingleProductNode | null;
  stringVariant: NonNullable<SingleProductNode>['variants']['nodes'][number] | null;
  tension: number | null;
};
