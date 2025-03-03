export interface TProps {
  referenceIds: {
    contents: TShopifyGlobalId[];
  };
}

export type TShopifyGlobalId = string;

export type TResponse = {
  metaobject: TUIMedia | TFiftyFifty | TUISwipeable;
};

export type TUIMedia = {
  handle: string;
  type: 'ui_media';
  fields: [{ value: TShopifyGlobalId; key: 'for_desktop' }, { value: TShopifyGlobalId; key: 'for_mobile' }];
  actualMediaList?: TMediaData[];
};

export type TUISwipeable = {
  handle: string;
  type: 'ui_swipeable';
  fields: [{ value: string; key: 'swipeable_list' }];
  actualMediaList?: TMediaData[];
  actualBlockDataList?: TBlockSwipeable[];
};

export type TBlockSwipeable = {
  handle: string;
  type: 'block_swipeable';
  fields: [
    { key: 'description'; value: string },
    { key: 'media'; value: TShopifyGlobalId },
    { key: 'title'; value: string },
  ];
};

export type TFiftyFifty = {
  handle: string;
  type: 'ui_fifty_fifty';
  fields: [
    { key: 'description'; value: string },
    { key: 'image_side'; value: 'Left' | 'Right' },
    { key: 'media'; value: TShopifyGlobalId },
    { key: 'title'; value: string },
  ];
  actualMedia?: TMediaData[];
};

export type TMediaData = {
  id: string;
  __typename: 'MediaImage';
  image: {
    url: string;
    altText: string;
  };
};
