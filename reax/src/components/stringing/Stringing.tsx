import { useEffect, useState } from 'preact/hooks';
import { fetchCollectionQuery } from '../../lib/gql';
import client from '../../lib/shopify-client';
import { ProductNodes, TConfig } from '../../types';

function Stringing({ stringingCollectionId }: { stringingCollectionId: string | null }) {
  const [stringingProducts, setStringingProducts] = useState<ProductNodes>([]);
  const [config, setConfig] = useState<TConfig>({
    stringProduct: null,
    stringVariant: null,
    tension: null,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data: dataCol, errors: errorsCol } = await client.request(fetchCollectionQuery, {
          variables: {
            id: `gid://shopify/Collection/${stringingCollectionId}`,
          },
        });

        if (errorsCol?.message) {
          console.error({ errorsCol });
        }

        if (dataCol?.collection?.products?.nodes && dataCol?.collection?.products?.nodes.length > 0) {
          const products = dataCol?.collection?.products?.nodes;
          setStringingProducts(dataCol?.collection.products.nodes || []);

          const proStringingProduct = products.find((x) => x && x.tags.includes('Service'));

          if (proStringingProduct) {
            window.s3_stringing_service_variant_id = proStringingProduct.variants.nodes[0].id.split('/').pop();
          }
        }
      } catch (error) {
        console.error(error);
        (document.getElementsByClassName('frame') as HTMLCollectionOf<HTMLElement>)[0].style.display = 'none';
      }
    })();
  }, []);

  if (stringingProducts.length == 0) {
    return <p>Loading</p>;
  }

  return (
    <form id="stringing-form" style={{}}>
      <div>
        <legend className="form__label">
          <span>String</span>
        </legend>
        {stringingProducts
          .filter((x) => !x?.tags.includes('Service'))
          .map((string) => {
            const id = string?.id.split('/').pop();
            return (
              <label
                className="sheet"
                key={id}
                htmlFor={id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '1.5rem 0',
                  justifyContent: 'space-between',
                  paddingRight: '1rem',
                  overflow: 'hidden',
                  transition: 'all 0.3s',
                  outline:
                    config.stringProduct?.id === string.id ? '2px solid var(--accent-color)' : '2px solid transparent',
                }}
              >
                <input
                  disabled={string?.availableForSale === false}
                  onChange={(_) => {
                    setConfig({
                      stringProduct: string!,
                      stringVariant: null,
                      tension: null,
                    });
                  }}
                  required
                  type="radio"
                  name="string-product"
                  id={id}
                />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img width={80} src={string.featuredImage?.url} alt={string.featuredImage?.altText || ''} />
                  <span style={{ color: 'var(--gray-80)', fontSize: '1.5rem' }}>{string?.title}</span>
                </div>
                <div style={{ fontSize: '1.2rem' }}>
                  {string.priceRange.minVariantPrice.amount} {string.priceRange.minVariantPrice.currencyCode}
                </div>
              </label>
            );
          })}
      </div>

      <div>
        {config.stringProduct ? (
          <div>
            <legend className="form__label">
              <span>Color</span>
            </legend>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {config.stringProduct.variants.nodes.map((variant) => {
                const id = variant.id.split('/').pop();
                const hex = config.stringProduct?.options[0].optionValues.find((x) => x.name == variant.title)?.swatch
                  ?.color;

                return (
                  <label
                    className={`sheet`}
                    key={id}
                    htmlFor={id}
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      marginRight: '0.4rem',
                      justifyContent: 'center',
                      outline:
                        config.stringVariant?.id === variant.id
                          ? '2px solid var(--accent-color)'
                          : '2px solid transparent',
                    }}
                  >
                    <input
                      disabled={variant.availableForSale === false}
                      onChange={(_) => {
                        setConfig({
                          stringProduct: config.stringProduct,
                          stringVariant: variant,
                          tension: config.tension,
                        });
                      }}
                      required
                      type="radio"
                      name="string-variant"
                      id={id}
                    />
                    {hex ? (
                      <span
                        style={{
                          width: '46px',
                          height: '46px',
                          background: hex,
                          borderRadius: '100%',
                          display: 'block',
                        }}
                      ></span>
                    ) : (
                      <span>{variant.title}</span>
                    )}
                  </label>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>

      <div>
        {config.stringVariant ? (
          <div>
            <legend className="form__label">
              <span>Tension</span>
            </legend>
            <div
              style={{
                display: 'grid',
                gap: '1.5rem',
                justifyContent: 'start',
                gridTemplateColumns: 'repeat(4, 1fr)',
              }}
            >
              {Array.from({ length: 20 }, (_, i) => i + 21).map((tension) => {
                return (
                  <label
                    className="sheet"
                    key={tension}
                    style={{
                      borderRadius: 'var(--variant-pills-radius)',
                      padding: '0.5rem 0',
                      textAlign: 'center',
                      outline: config.tension === tension ? '2px solid var(--accent-color)' : '2px solid transparent',
                      color: config.tension === tension ? 'black' : 'var(--gray-70)',
                      transition: 'all 0.3s',
                    }}
                    htmlFor={String(tension)}
                  >
                    <input
                      onChange={(_) => {
                        setConfig({
                          stringProduct: config.stringProduct,
                          stringVariant: config.stringVariant,
                          tension: tension,
                        });
                      }}
                      required
                      type="radio"
                      name="string-tension"
                      id={String(tension)}
                    />
                    <span>{tension}LBS</span>
                  </label>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </form>
  );
}

export default Stringing;
