import { useEffect, useState } from 'preact/hooks';
import { fetchCollectionQuery } from '../../lib/gql';
import client from '../../lib/shopify-client';
import { ProductNodes, TConfig } from '../../types';

function Stringing({
  stringingCollectionId,
  maxTension,
}: {
  stringingCollectionId: string | null;
  maxTension: string | null;
}) {
  const maxTensionPounds = parseInt((maxTension || '69').replace(/[^\d.]/g, ''));
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
          setStringingProducts(dataCol?.collection.products.nodes || []);
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
    <form id="stringing-form" style={{ marginTop: '2rem' }}>
      <div id="strings-container">
        <legend className="form__label">
          <span>Choose String</span>
        </legend>
        {stringingProducts
          .filter((y) => y.availableForSale)
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
                    scrollTo('string-variants-container');
                  }}
                  required
                  type="radio"
                  name="string-product"
                  id={id}
                />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    width={80}
                    height={80}
                    src={string.featuredImage?.url}
                    alt={string.featuredImage?.altText || ''}
                  />
                  <span style={{ color: 'var(--gray-80)', fontSize: '1.5rem' }}>{string?.title}</span>
                </div>
                <div style={{ fontSize: '1.2rem' }}>
                  {parseInt(string.priceRange.minVariantPrice.amount)} {string.priceRange.minVariantPrice.currencyCode}
                </div>
              </label>
            );
          })}
      </div>

      <div
        style={{
          scrollMarginTop: '10rem',
        }}
        id="string-variants-container"
      >
        {config.stringProduct ? (
          <div>
            <legend className="form__label">
              <span>Choose the Color</span>
            </legend>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              {config.stringProduct.variants.nodes
                .sort((a, b) => (a.id > b.id ? 1 : -1))
                .sort((x, _) => (x.availableForSale ? -1 : 1))
                .filter((x) => x.availableForSale)
                .map((variant) => {
                  const id = variant.id.split('/').pop();
                  const hex = config.stringProduct?.options[0].optionValues.find((x) => x.name == variant.title)?.swatch
                    ?.color;

                  const isOutOfStock = variant.availableForSale === false;

                  return (
                    <label
                      className={`sheet`}
                      key={id}
                      htmlFor={id}
                      style={{
                        opacity: isOutOfStock ? 0.1 : 1,
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
                        data-sku={variant.sku}
                        data-string={(config?.stringProduct?.title || '') + ' - ' + variant.title}
                        disabled={variant.availableForSale === false}
                        onChange={(_) => {
                          setConfig({
                            stringProduct: config.stringProduct,
                            stringVariant: variant,
                            tension: config.tension,
                          });
                          scrollTo('string-tensions-container');
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

      <div
        style={{
          scrollMarginTop: '10rem',
        }}
        id="string-tensions-container"
      >
        {config.stringVariant ? (
          <div>
            <legend className="form__label">
              <span>adjust Tension</span>
            </legend>
            <div
              style={{
                display: 'grid',
                gap: '1.5rem',
                justifyContent: 'start',
                gridTemplateColumns: 'repeat(4, 1fr)',
                marginTop: '1rem',
              }}
            >
              {Array.from({ length: 20 }, (_, i) => i + 21).map((tension) => {
                return (
                  <label
                    className="sheet"
                    key={tension}
                    htmlFor={String(tension)}
                    style={{
                      fontSize: window.innerWidth > 768 ? '1.6rem' : '1.4rem',
                      display: maxTensionPounds < tension ? 'none' : 'block',
                      //   borderRadius: 'var(--variant-pills-radius)',
                      padding: '0.8rem 0',
                      textAlign: 'center',
                      outline: config.tension === tension ? '2px solid var(--accent-color)' : '2px solid transparent',
                      color: config.tension === tension ? 'black' : 'var(--gray-70)',
                      transition: 'all 0.3s',
                    }}
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

      {config.stringVariant && config.tension ? (
        <div
          style={{
            background: 'rgb(233, 255, 241)',
            padding: '0.2rem 2rem',
            borderRadius: '10px',
            color: '#002d03',
            fontSize: '1.5rem',
            lineHeight: '1.6',
            letterSpacing: '0.03rem',
          }}
        >
          <p>
            All set for the court! You are customising this {window.s3_product_name} Racket with{' '}
            {config.stringVariant?.selectedOptions[0].value} {config.stringProduct?.title}, strung at the tension of{' '}
            {config.tension} LBS.
          </p>
        </div>
      ) : null}
    </form>
  );
}

const scrollTo = (where: string) => {
  const element = document.getElementById(where);
  if (element) {
    setTimeout(() => {
      window.document.getElementById(where)?.scrollIntoView({
        behavior: 'smooth',
      });
    }, 500);
  }
};

export default Stringing;
