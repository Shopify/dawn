import { useEffect, useState } from 'preact/hooks';
import { getMetaobjectQuery, getNodesQuery } from '../../lib/gql';
import client from '../../lib/shopify-client';
import ErrorBoundary from './ErrorBoundary';
// import { TBlockSwipeable, TMediaData, TProps, TResponse } from './types';
import { Maybe, Metaobject, MetaobjectField } from '../../lib/types/storefront.types';
import { TBlockSwipeable, TMediaData, TProps } from './types';

type X = Maybe<
  Pick<Metaobject, 'type' | 'handle'> & {
    fields: Array<Pick<MetaobjectField, 'value' | 'key'>>;
  } & {
    actualMediaList?: Maybe<TMediaData[]>;
    actualMedia?: Maybe<TMediaData[]>;
    actualBlockDataList?: Maybe<TBlockSwipeable[]>;
  }
>;

const SPlusContent = ({ referenceIds }: TProps) => {
  const [sPlusData, setSPlusData] = useState<X[] | null>(null);

  const isMobile = useIsMobile();

  useEffect(() => {
    try {
      (async () => {
        const topLevelMetaobjectsPromise = [];
        //1. fetch top level mos
        for (const referenceId of referenceIds.contents) {
          const res = client.request(getMetaobjectQuery, {
            variables: {
              id: referenceId,
            },
          });

          topLevelMetaobjectsPromise.push(res);
        }

        const topLevelMetaobjects = await Promise.all(topLevelMetaobjectsPromise).then((x) => x.map((y) => y.data));

        console.log(topLevelMetaobjects);

        for await (const component of topLevelMetaobjects) {
          if (!component || !component.metaobject) {
            continue;
          }
          const metaobject = component.metaobject;
          switch (metaobject.type) {
            case 'ui_media': {
              const desktopMedia = metaobject.fields.find((x) => x.key === 'for_desktop')?.value || '';
              const mobileMedia = metaobject.fields.find((x) => x.key === 'for_mobile')?.value || '';

              const { data: mediaData } = await client.request(getNodesQuery, {
                variables: {
                  ids: [desktopMedia, mobileMedia],
                },
              });

              //   @ts-ignore
              metaobject.actualMediaList = mediaData?.nodes;

              break;
            }

            case 'ui_fifty_fifty': {
              const media = metaobject.fields.find((x) => x.key === 'media')?.value || '';
              const { data: mediaData } = await client.request(getNodesQuery, {
                variables: {
                  ids: [media],
                },
              });
              //   @ts-ignore
              metaobject.actualMedia = mediaData?.nodes;
              break;
            }

            case 'ui_swipeable': {
              const blockIDs = metaobject?.fields[0]?.value;
              const swipeableBlockListPromise = [];

              if (!blockIDs) {
                break;
              }
              for (const blockRefId of JSON.parse(blockIDs)) {
                const res = client.request(getMetaobjectQuery, {
                  variables: {
                    id: blockRefId,
                  },
                });
                swipeableBlockListPromise.push(res);
              }

              // @ts-ignore
              const swipeableBlockData: { metaobject: TBlockSwipeable }[] = await Promise.all(
                swipeableBlockListPromise,
                // @ts-ignore
              ).then((x) => x.map((y) => y.data).filter((z) => Boolean(z.metaobject)));

              console.log({ swipeableBlockData });

              const { data } = await client.request(getNodesQuery, {
                variables: {
                  ids: swipeableBlockData.map((x) => x.metaobject.fields.find((y) => y.key === 'media')?.value!),
                },
              });
              //   @ts-ignore
              metaobject.actualMediaList = data?.nodes;
              //   @ts-ignore
              metaobject.actualBlockDataList = swipeableBlockData.map((x) => x.metaobject);

              break;
            }

            default:
              break;
          }
        }

        console.log(topLevelMetaobjects);
        if (topLevelMetaobjects.length > 0) {
          setSPlusData(topLevelMetaobjects.map((x) => x?.metaobject!).filter(Boolean));
        }
      })();
    } catch (error) {
      console.log({ error });
    }
  }, [referenceIds]);

  return (
    <div>
      {sPlusData?.map((comp) => {
        switch (comp?.type) {
          case 'ui_media': {
            // account for desktop nand mobile media and handle video files too
            const index = isMobile ? 1 : 0;
            return comp.actualMediaList ? (
              <img
                style={{
                  width: '100%',
                  overflow: 'hidden',
                }}
                src={comp.actualMediaList[index]?.image?.url}
                alt={comp.actualMediaList[index]?.image?.altText}
              />
            ) : null;
          }

          case 'ui_fifty_fifty': {
            const side = comp.fields.find((x) => x.key === 'image_side')?.value;
            return comp.actualMedia ? (
              <section
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: isMobile ? 'column' : side === 'Left' ? 'row' : 'row-reverse',
                  margin: isMobile ? '2rem 0' : '1rem 0',
                }}
              >
                <img
                  style={{
                    width: isMobile ? '100%' : '50%',
                  }}
                  src={comp.actualMedia[0]?.image?.url}
                  alt=""
                />
                <div style={{ maxWidth: isMobile ? '100%' : '50%', padding: isMobile ? '2rem 0' : '0rem 3rem' }}>
                  <h2
                    style={{
                      fontSize: isMobile ? '2rem' : '4rem',
                      letterSpacing: isMobile ? '-1px' : '-1.5px',
                      fontWeight: 'bold',
                      margin: 0,
                    }}
                  >
                    {comp.fields.find((x) => x.key === 'title')?.value}
                  </h2>
                  <p
                    style={{
                      letterSpacing: '0px',
                      fontSize: isMobile ? '1.5rem' : '1.8rem',
                      color: 'var(--gray-80)',
                      marginTop: '5px',
                      lineHeight: '180%',
                    }}
                  >
                    {comp.fields.find((x) => x.key === 'description')?.value}
                  </p>
                </div>
              </section>
            ) : null;
          }

          case 'ui_swipeable': {
            // TODO: account for more than 3 on desktop
            return (
              <div
                style={{
                  margin: '4rem 0',
                }}
              >
                <h3
                  style={{
                    margin: '0rem',
                    padding: '1rem 0.5rem',
                  }}
                >
                  {comp.fields.find((x) => x.key === 'title')?.value}
                </h3>
                <div
                  className={'no-scrollbar'}
                  style={{
                    display: 'flex',
                    gap: '1.5rem',
                    overflowX: 'scroll',
                    scrollSnapType: 'x mandatory',
                    width: '100%',
                    padding: '1rem 0.5rem',
                  }}
                >
                  {comp.actualBlockDataList?.map((block) => {
                    const image = comp.actualMediaList?.find(
                      (x) => x.id === block.fields.find((y) => y.key === 'media')?.value,
                    );
                    return (
                      <div
                        className="sheet"
                        style={{
                          minWidth: isMobile ? '75%' : comp.actualBlockDataList?.length == 3 ? '32%' : '24%',
                          overflow: 'hidden',
                        }}
                      >
                        <img
                          style={{
                            width: '100%',
                            maxHeight: '80%',
                            objectFit: 'cover',
                          }}
                          src={image?.image.url}
                          alt={image?.image.altText}
                        />
                        <div
                          style={{
                            padding: '1.5rem',
                          }}
                        >
                          <h3
                            style={{
                              margin: '0rem',
                              textTransform: 'uppercase',
                              fontWeight: 800,
                              letterSpacing: '0px',
                            }}
                          >
                            {block.fields.find((x) => x.key === 'title')?.value}
                          </h3>
                          <p
                            style={{
                              margin: '0.5rem 0',
                              letterSpacing: '0px',
                              lineHeight: '157%',
                              fontSize: '1.5rem',
                              color: 'var(--gray-70)',
                            }}
                          >
                            {block.fields.find((x) => x.key === 'description')?.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }

          default: {
            return null;
          }
        }
      })}
    </div>
  );
};

const SPlus = (props: TProps) => {
  return (
    <ErrorBoundary>
      <SPlusContent {...props} />
    </ErrorBoundary>
  );
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return isMobile;
};

export default SPlus;
