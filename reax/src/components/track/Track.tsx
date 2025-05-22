import * as Progress from '@radix-ui/react-progress';
import { useState } from 'preact/hooks';

const isMobile = window.innerWidth < 768;

const Track = () => {
  const styles = {
    sectionTitle: {
      fontSize: isMobile ? '1.3rem' : '1.5rem',
      textTransform: 'uppercase',
    },
    sectionSubtitle: {
      marginBottom: '1rem',
      fontWeight: 200,
      opacity: 0.7,
    },
  };
  const [progress, setProgress] = useState(13);
  const [trackingData, setResponse] = useState<OrderResponse | null | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const fetchOrder = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    fetch('https://shopify-server-peach.vercel.app/shipment-updates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order_id: e.target.elements['order-number']?.value || '', //'ST1030',
        email: e.target.elements['email'].value || '', //'saurabh@lining.studio',
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Success:', data);
        setResponse(data);
        try {
          (document.getElementsByClassName('main-page-title')[0] as HTMLElement).style.display = 'none';
        } catch (error) {}
        const shopifyOrderStatus = (data as OrderResponse)?.fulfillment_status;
        if (shopifyOrderStatus === 'FULFILLED') {
          setProgress(100);
        } else if (shopifyOrderStatus === 'IN_PROGRESS') {
          setProgress(50);
        } else {
          setProgress(25);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setResponse(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return isLoading ? (
    <p>Loading</p>
  ) : trackingData === undefined ? (
    <section
      style={
        isMobile
          ? {
              padding: '2rem 2rem',
            }
          : {
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              maxWidth: '1100px',
              margin: '0 auto',
              padding: '2rem 3rem',
            }
      }
    >
      <div
        style={
          isMobile
            ? {
                borderBottom: '1px solid #e4e4e4',
                paddingBottom: '2rem',
              }
            : {
                gridColumn: '1/7',
                borderRight: '1px solid #e4e4e4',
                paddingRight: '2rem',
              }
        }
      >
        <h3>Login to see your orders</h3>
        <p>Sign in with your {window.s3_brand} account to see all your past orders.</p>
        <a className="button button--secondary button--xlarge link" href="/account/login">
          LOGIN TO VIEW ORDERS
        </a>
      </div>
      <div
        style={
          isMobile
            ? {
                paddingTop: '2rem',
              }
            : {
                gridColumn: '7/12',
                paddingLeft: '4rem',
              }
        }
      >
        <form onSubmit={fetchOrder} style="">
          <h3>Find a specific order</h3>

          <div className="field">
            <input
              //   defaultValue={'prnx@hndrd.co'}
              //   defaultValue={'saurabh@lining.studio'}
              className="field__input"
              placeholder="Order Email"
              type="email"
              name="email"
              id="order-email"
            />
            <label className="field__label" htmlFor="order-email">
              Order Email
            </label>
          </div>
          <div
            style={{
              margin: '2rem 0',
            }}
            className="field"
          >
            <input
              //   defaultValue={'SST-1100'}
              //   defaultValue={'ST1030'}
              className="field__input"
              placeholder="Order Number"
              type="text"
              name="order-number"
              id="order-number"
            />
            <label className="field__label" htmlFor="order-number">
              Order Number
            </label>
          </div>
          <button className="button button--primary button--xlarge button--full-width" type="submit">
            Track
          </button>
        </form>
      </div>
    </section>
  ) : trackingData?.order_id ? (
    <section
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '2rem 2rem',
      }}
    >
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            {trackingData.order_id ? (
              <p
                style={{
                  marginBottom: 0,
                }}
              >
                #{trackingData.order_id}
              </p>
            ) : null}
            {trackingData.order_time ? (
              <p
                style={{
                  marginTop: 0,
                }}
              >
                <span
                  style={{
                    opacity: 0.6,
                  }}
                >
                  Order Date
                </span>{' '}
                {formatDate(trackingData.order_time)}
              </p>
            ) : null}
          </div>
          {trackingData.tracking_link ? (
            <div>
              <a
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  alignItems: 'center',
                  background: 'var(--accent-color)',
                  color: 'white',
                  padding: '1.1rem 2rem',
                  borderRadius: '100px',
                  textDecoration: 'none',
                }}
                className=""
                href={trackingData.tracking_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  style={{
                    fontSize: isMobile ? '1rem' : '1.5rem',
                    letterSpacing: '0px',
                  }}
                >
                  Track Shipment
                </span>
                <svg
                  width={14}
                  aria-hidden="true"
                  fill="none"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ) : null}
        </div>
        <div>
          <div>
            <Progress.Root
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '9999px',
                height: '13px',
                backgroundColor: '#f2f2f2',
                transform: 'translateZ(0)',
              }}
              value={10}
              max={100}
            >
              <Progress.Indicator
                style={{
                  display: 'block',
                  transform: `translateX(-${100 - progress}%)`,
                  background: 'var(--accent-color)',
                  height: '13px',
                  borderRadius: '9999px',
                  width: '100%',
                  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
                }}
              />
            </Progress.Root>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {['Processing', 'Preparing', 'Shipped', 'Delivered'].map((x) => (
              <p
                style={{
                  textAlign: 'right',
                  width: '25%',
                }}
              >
                {x}
              </p>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div>
        <h4
          style={{
            ...styles.sectionTitle,
          }}
        >
          Shipping Details
        </h4>
        <p>
          <h5 style={{ ...styles.sectionSubtitle }}>Address</h5>
          {trackingData.shipping_address?.address1} <br />
          {trackingData.shipping_address?.city}, {trackingData.shipping_address?.zip} <br />
          {trackingData.shipping_address?.country}
        </p>
      </div>
      <hr />
      <div>
        <h4
          style={{
            ...styles.sectionTitle,
          }}
        >
          Products in this order
        </h4>
        <ul className={'list-unstyled'}>
          {trackingData.product_details?.map((product: ProductDetail) => (
            <li
              style={{
                marginBottom: '1rem',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    gridColumn: '1/4',
                    border: '1px solid #e4e4e4',
                    borderRadius: '7px',
                    width: '90px',
                    height: '90px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img width={75} height={75} src={product.image!} alt={product.name} />
                </div>
                <div
                  style={{
                    gridColumn: '4/9',
                    padding: '0 1rem',
                  }}
                >
                  <h5
                    style={{
                      fontSize: '1.5rem',
                      textTransform: 'capitalize',
                    }}
                  >
                    {product.name}
                  </h5>
                </div>
                <div
                  style={{
                    gridColumn: '9/13',
                    textAlign: 'right',
                  }}
                >
                  <h5
                    style={{
                      fontSize: '1.5rem',
                    }}
                  >
                    {trackingData.currency_code} {` `}
                    {product.price} x {product.quantity}
                  </h5>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div>
        <h4
          style={{
            ...styles.sectionTitle,
          }}
        >
          Order Summary
        </h4>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '1.5rem',
          }}
        >
          <p style={{}}>Order Total</p>
          <p>
            {trackingData.currency_code} {trackingData.sub_total}
          </p>
        </div>
        <p
          style={{
            marginTop: '-1px',
          }}
        >
          All prices are tax inclusive.
        </p>
      </div>
      <hr />
      <div>
        <h4
          style={{
            ...styles.sectionTitle,
          }}
        >
          Need help with this order?
        </h4>
        <p>Reach out to us on below mentioned channels</p>
      </div>
    </section>
  ) : null;
};

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch (e) {
    return dateString;
  }
};

type Scan = {
  timestamp: string;
  location: string;
  text: string;
  description: string;
};

type LatestStatus = {
  text: string;
  timestamp: string;
  status_code: string;
};

type Misc = {
  is_stuck: boolean;
};

export type ProductDetail = {
  name: string;
  sku: string;
  quantity: number;
  description: string;
  price: string;
  product_url: string;
  image: string | null;
};

type ShippingAddressResponse = {
  address1: string;
  city: string;
  zip: string;
  country: string;
};

export type OrderResponse = {
  latest_status: LatestStatus | null;
  scans: Scan[] | null;
  misc: Misc | null;
  carrier_name: string | null;
  awb: string | null;
  tracking_link: string | null;
  order_id: string | null;
  order_time: string | null;
  product_details: ProductDetail[] | null;
  fulfillment_status: string | null;
  shipping_address: ShippingAddressResponse | null;
  sub_total: number | null;
  tax_total: number | null;
  payment_method: string | null;
  currency_code: string | null;
};

export default Track;
