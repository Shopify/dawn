import * as Progress from '@radix-ui/react-progress';
import { useEffect, useState } from 'react';

// Constants
const API_ENDPOINT =
  window.s3_brand == 'Studio'
    ? 'https://sitemap.lining.studio/shipment-updates'
    : 'https://sitemap.hndrd.co/shipment-updates';
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds
const MOBILE_BREAKPOINT = 768;

enum COLOR {
  GREEN = 'linear-gradient(to right bottom, rgb(67, 233, 123) 0%, rgb(48, 211, 172) 100%)',

  RED = "var('--danger-red')",
}

const getStatus = (bucketNumber: number | undefined, isConfimedByShopify: boolean, isCancelledInShopify: boolean) => {
  switch (bucketNumber) {
    case 1:
      return {
        status: 'Order Placed',
        stage: 'Preparing',
        message: 'We are preparing to dispatch your order.',
        progress: 52,
        color: COLOR.GREEN,
      };

    case 2:
      return {
        status: 'Dispatched',
        stage: 'Shipped',
        message: 'Your order has been dispatched and is on its way to your destination.',
        progress: 65,
        color: COLOR.GREEN,
      };

    case 3:
      return {
        status: 'On Its Way',
        stage: 'Shipped',
        message: 'Your order is on its way to you.',
        progress: 75,
        color: COLOR.GREEN,
      };

    case 4:
      return {
        status: 'Out For Delivery',
        stage: 'Shipped',
        message: 'Your order should be delivered soon.',
        progress: 90,
        color: COLOR.GREEN,
      };

    case 5:
      return {
        status: 'Delivery Failed',
        stage: 'Shipped',
        message: 'We could not deliver your order. The delivery may or may not be reattempted tomorrow',
        progress: 90,
        color: COLOR.RED,
      };

    case 6:
      return {
        status: 'Delivered',
        stage: 'Delivered',
        message: 'We have successfully delivered your order.',
        progress: 100,
        color: COLOR.GREEN,
      };

    case 7:
      return {
        status: 'Returned',
        stage: 'Cancelled',
        message: 'The products in this order are on their way back to us.',
        progress: 100,
        color: COLOR.RED,
      };

    default: {
      if (isConfimedByShopify) {
        return {
          status: 'Order Confirmed',
          stage: 'Preparing',
          message: 'We have received your order and are now processing it.',
          progress: 40,
          color: COLOR.GREEN,
        };
      }

      if (isCancelledInShopify) {
        return {
          status: 'Order Cancelled',
          stage: 'Cancelled',
          message: 'We have gone ahead and cancelled this order.',
          progress: 100,
          color: COLOR.RED,
        };
      }

      return {
        status: 'Order Placed',
        stage: 'Processing',
        message: 'We are now processing your order.',
        progress: 25,
        color: COLOR.GREEN,
      };
    }
  }
};

// Error messages
const ERROR_MESSAGES = {
  NETWORK: 'Unable to connect to the server. Please check your connection and try again.',
  NOT_FOUND: 'We could not find this order. Double check the details and try again?',
  INVALID_INPUT: 'Please enter both email and order number.',
  GENERIC: 'Something went wrong. Please try again later.',
};

// Types
interface FormData {
  email: string;
  orderNumber: string;
}

interface CacheEntry {
  data: OrderResponse;
  timestamp: number;
}

type LoadingState = 'idle' | 'loading' | 'success' | 'error';

interface ErrorState {
  message: string;
  code?: string;
}

export interface ProductDetail {
  name: string;
  sku: string;
  quantity: number;
  description: string;
  price: string;
  product_url: string;
  image: string | null;
}

interface ShippingAddressResponse {
  name: string;
  address1: string;
  city: string;
  zip: string;
  country: string;
}

export interface OrderResponse {
  latest_status: {
    text: string;
    timestamp: string;
    status_code: string;
    status_description: string;
    status_code_int: number;
    status_bucket_code_int: number;
  } | null;
  cancelled_at: string | null;
  confimed: boolean;
  scans: Array<{
    timestamp: string;
    location: string;
    text: string;
    description: string;
  }> | null;
  misc: {
    is_stuck: boolean;
  } | null;
  carrier_name: string | null;
  awb: string | null;
  tracking_link: string | null;
  order_id: string | null;
  order_time: string | null;
  product_details: ProductDetail[] | null;
  discount_codes: unknown[];
  fulfillment_status: string | null;
  shipping_address: ShippingAddressResponse | null;
  sub_total: number | null;
  tax_total: number | null;
  payment_method: string | null;
  currency_code: string | null;
}

// Utility functions
const isMobile = () => window.innerWidth < MOBILE_BREAKPOINT;

const cleanOrderNumber = (orderNumber: string): string => {
  const trimmed = orderNumber.trim();

  // If there's already a dash anywhere, return as-is
  if (trimmed.includes('-')) {
    return trimmed;
  }

  // Check if it matches pattern: 3 letters followed by digits
  const match = trimmed.match(/^([A-Z]{3})(\d+)$/);
  if (match) {
    return `${match[1]}-${match[2]}`;
  }

  // If it doesn't match expected pattern, return as-is
  return trimmed;
};

const getCacheKey = (email: string, orderNumber: string): string => {
  return `order_${email}_${cleanOrderNumber(orderNumber)}`;
};

const getFromCache = (email: string, orderNumber: string): OrderResponse | null => {
  try {
    const key = getCacheKey(email, orderNumber);
    const cached = sessionStorage.getItem(key);
    if (!cached) return null;

    const entry: CacheEntry = JSON.parse(cached);
    const now = Date.now();

    if (now - entry.timestamp > CACHE_DURATION) {
      sessionStorage.removeItem(key);
      return null;
    }

    return entry.data;
  } catch {
    return null;
  }
};

const setCache = (email: string, orderNumber: string, data: OrderResponse): void => {
  try {
    const key = getCacheKey(email, orderNumber);
    const entry: CacheEntry = {
      data,
      timestamp: Date.now(),
    };
    sessionStorage.setItem(key, JSON.stringify(entry));
  } catch (e) {
    console.warn('Failed to cache order data:', e);
  }
};

const getQueryParams = (): FormData | null => {
  try {
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email');
    const order = params.get('order');

    if (email && order) {
      return {
        email: email.trim(),
        orderNumber: order.trim(),
      };
    }
  } catch {
    // Ignore query param errors
  }
  return null;
};

const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return dateString;
  }
};

// Styles
const styles = {
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    fontSize: isMobile() ? '1.25rem' : '1.5rem',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    textTransform: 'uppercase' as const,
    marginBottom: '1rem',
  },
  sectionSubtitle: {
    marginBottom: '1rem',
    fontWeight: 200,
    opacity: 0.7,
  },
  button: {
    padding: '0.8rem 1.7rem',
    borderRadius: '100px',
    fontSize: isMobile() ? '1rem' : '1.5rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
  },
  primaryButton: {
    backgroundColor: 'var(--accent-color, #000)',
    color: 'white',
  },
  secondaryButton: {
    backgroundColor: '#f0f0f0',
    color: '#000',
  },
  errorBox: {
    padding: '2rem',
    border: '1px solid var(--danger-red)',
    borderRadius: '6px',
    color: 'var(--danger-red)',
    marginBottom: '2rem',
    lineHeight: '1.4',
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '200px',
  },
};

// Components
const LoadingSpinner: React.FC = () => (
  <div style={styles.loadingContainer}>
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          width: '40px',
          height: '40px',
          border: '3px solid #f3f3f3',
          borderTop: '3px solid var(--accent-color, #333)',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 1rem',
        }}
      />
      <p>Loading order details...</p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  </div>
);

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => <div style={styles.errorBox}>{message}</div>;

const OrderProgress = ({ progress, color, stage }: { progress: number; color: string; stage: string }) => {
  const isCancelled = stage.toLowerCase() === 'cancelled';
  const stageList = isCancelled
    ? ['REDACTED', 'REDACTED', 'REDACTED', 'Cancelled']
    : ['Processing', 'Preparing', 'Shipped', 'Delivered'];

  return (
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
        value={progress}
        max={100}
      >
        <Progress.Indicator
          style={{
            display: 'block',
            transform: `translateX(-${100 - progress}%)`,

            background: color || 'var(--danger-red)',
            height: '13px',
            borderRadius: '9999px',
            width: '100%',
            transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
          }}
        />
      </Progress.Root>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
        {stageList.map((x) => (
          <p
            key={x}
            style={{
              textAlign: 'right',
              letterSpacing: 0,
              width: '25%',
              margin: '0.5rem 0',
              opacity: x == stage ? 1 : 0.3,
              color: 'black',
              fontSize: isMobile() ? '1.3rem' : '1.6rem',
            }}
          >
            {x == 'REDACTED' ? '' : x}
          </p>
        ))}
      </div>
    </div>
  );
};

const ProductList: React.FC<{ products: ProductDetail[]; currencyCode: string }> = ({ products, currencyCode }) => (
  <ul style={{ listStyle: 'none', padding: 0 }}>
    {products.map((product, index) => (
      <li key={`${product.sku}-${index}`} style={{ marginBottom: '1rem' }}>
        <div style={{ ...styles.grid, alignItems: 'center' }}>
          <div
            style={{
              gridColumn: '1/4',
              border: '1px solid #e4e4e4',
              borderRadius: '7px',
              width: isMobile() ? '70px' : '90px',
              height: isMobile() ? '70px' : '90px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {product.image ? (
              <img width={isMobile() ? 65 : 75} height={isMobile() ? 65 : 75} src={product.image} alt={product.name} />
            ) : (
              <div style={{ color: '#999' }}>No image</div>
            )}
          </div>
          <div style={{ gridColumn: '4/9' }}>
            <p style={{ textTransform: 'capitalize', margin: '0' }}>{product.name}</p>
          </div>
          <div style={{ gridColumn: '9/13', textAlign: 'right' }}>
            <p style={{ margin: '0' }}>
              {currencyCode} {product.price} × {product.quantity}
            </p>
          </div>
        </div>
      </li>
    ))}
  </ul>
);

const OrderForm: React.FC<{
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
  error?: ErrorState | null;
  initialData?: FormData | null;
}> = ({ onSubmit, isLoading, error, initialData }) => {
  const [email, setEmail] = useState(initialData?.email || '');
  const [orderNumber, setOrderNumber] = useState(initialData?.orderNumber || '');

  const handleSubmit = (e?: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => {
    if (e) e.preventDefault();
    if (!email || !orderNumber) return;
    onSubmit({ email, orderNumber });
  };

  const mobile = isMobile();

  return (
    <section
      style={{
        ...(mobile ? { padding: '2rem' } : styles.grid),
        ...(!mobile && { ...styles.container }),
      }}
    >
      <div
        style={
          mobile
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
        <p>Sign in with your {(window as any).s3_brand || 'store'} account to see all your past orders.</p>
        <a className="button button--secondary button--xlarge link" href="/account/login">
          LOGIN TO VIEW ORDERS
        </a>
      </div>

      <div
        style={
          mobile
            ? {
                paddingTop: '2rem',
              }
            : {
                gridColumn: '7/12',
                paddingLeft: '4rem',
              }
        }
      >
        <div>
          <h3>Find a specific order</h3>

          {error && <ErrorMessage message={error.message} />}

          <div className="field" style={{ marginBottom: '1rem' }}>
            <input
              className="field__input"
              placeholder="Order Email"
              type="email"
              name="email"
              id="order-email"
              value={email}
              onInput={(e: any) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === 'Enter' && orderNumber) {
                  handleSubmit();
                }
              }}
            />
            <label className="field__label" htmlFor="order-email">
              Order Email
            </label>
          </div>

          <div className="field" style={{ marginBottom: '2rem' }}>
            <input
              //   defaultValue={'SST-1100'}
              //   defaultValue={'ST1030'}
              className="field__input"
              placeholder="Order Number"
              type="text"
              name="order-number"
              id="order-number"
              value={orderNumber}
              onInput={(e: any) => setOrderNumber(e.target?.value?.toUpperCase())}
              required
              disabled={isLoading}
              onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === 'Enter' && email) {
                  handleSubmit();
                }
              }}
            />
            <label className="field__label" htmlFor="order-number">
              Order Number
            </label>
          </div>

          <button
            className="button button--primary button--xlarge button--full-width"
            onClick={() => handleSubmit()}
            disabled={isLoading}
            style={{ opacity: isLoading ? 0.7 : 1 }}
          >
            {isLoading ? 'Tracking...' : 'Track'}
          </button>
        </div>
      </div>
    </section>
  );
};

const OrderDetails = ({
  order,
  progress,
  onTrackAnother,
  cssColor,
  stage,
  message,
}: {
  order: OrderResponse;
  progress: number;
  onTrackAnother: () => void;
  cssColor: string;
  stage: string;
  message: string;
}) => {
  return (
    <section style={{ ...styles.container, maxWidth: '900px' }}>
      <div style={{ marginBottom: '2rem' }}>
        <button
          onClick={onTrackAnother}
          style={{
            ...styles.button,
            ...styles.secondaryButton,
            textTransform: 'none',
            marginBottom: '1rem',
          }}
        >
          ← Track Another Order
        </button>
      </div>

      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{}}>
            {order.order_id && <p style={{ marginBottom: 0 }}>{order.order_id}</p>}
            {order.order_time && (
              <p style={{ marginTop: '0.25rem', letterSpacing: '0px' }}>
                <span style={{ opacity: 0.6 }}>Placed on</span> {formatDate(order.order_time)}
              </p>
            )}
          </div>

          {order.tracking_link ? (
            <a
              style={{
                display: 'flex',
                gap: '0.5rem',
                alignItems: 'center',
                background: cssColor,
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '100px',
                textDecoration: 'none',
              }}
              href={order.tracking_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span style={{ fontSize: isMobile() ? '1.1rem' : '1.5rem', letterSpacing: '0px' }}>Track Shipment</span>
              <svg width={14} fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24">
                <path d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ) : null}
        </div>

        <OrderProgress progress={progress} color={cssColor} stage={stage} />
        <p>{message || ''}</p>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      {order.shipping_address && (
        <>
          <div>
            <h4 style={styles.sectionTitle}>Shipping Details</h4>
            <div>
              <h5 style={styles.sectionSubtitle}>Address</h5>
              <p>
                {order.shipping_address.name}
                <br />
                {order.shipping_address.address1}
                <br />
                {order.shipping_address.city}, {order.shipping_address.zip}
                <br />
                {order.shipping_address.country}
              </p>
            </div>
            {order.awb && order.carrier_name && (
              <div>
                <h5 style={styles.sectionSubtitle}>Shipment</h5>
                <p>
                  {order.carrier_name} (AWB: {order.awb})
                </p>
              </div>
            )}
          </div>
          <hr style={{ margin: '2rem 0' }} />
        </>
      )}

      {order.product_details && order.product_details.length > 0 && (
        <>
          <div>
            <h4 style={styles.sectionTitle}>Products in this order</h4>
            <ProductList products={order.product_details} currencyCode={order.currency_code || 'USD'} />
          </div>
          <hr style={{ margin: '2rem 0' }} />
        </>
      )}

      {order.sub_total !== null && (
        <>
          <div>
            <h4 style={styles.sectionTitle}>Order Summary</h4>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <p>Order Total</p>
              <p style={{ fontWeight: 'bold' }}>
                {order.currency_code} {order.sub_total}
              </p>
            </div>
            <p style={{ marginTop: '-0.5rem', opacity: 0.7 }}>All prices are tax inclusive.</p>
          </div>
          <hr style={{ margin: '2rem 0' }} />
        </>
      )}

      <div>
        <h4 style={styles.sectionTitle}>Need help with this order?</h4>
        <p>Reach out to us on below mentioned channels</p>
      </div>
    </section>
  );
};

// Main Component
const Track: React.FC = () => {
  const [loadingState, setLoadingState] = useState<LoadingState>('idle');
  const [trackingData, setTrackingData] = useState<OrderResponse | null>(null);
  const [error, setError] = useState<ErrorState | null>(null);
  const [progress, setProgress] = useState(0);

  const [stage, setStage] = useState('Processing');
  const [message, setMessage] = useState('');
  const [cssColor, setCssColor] = useState('#000000');

  useEffect(() => {
    // Check for query parameters on mount
    const queryData = getQueryParams();
    if (queryData) {
      fetchOrder(queryData);
    }
  }, []);

  useEffect(() => {
    const {
      progress: progression,
      stage,
      message,
      color,
    } = getStatus(
      trackingData?.latest_status?.status_bucket_code_int,
      trackingData?.confimed || false,
      Boolean(trackingData?.cancelled_at),
    );

    setProgress(progression);
    setStage(stage);
    setCssColor(color);
    setMessage(message);
  }, [trackingData]);

  const fetchOrder = async (formData: FormData) => {
    const { email, orderNumber } = formData;

    // Validate inputs
    if (!email || !orderNumber) {
      setError({ message: ERROR_MESSAGES.INVALID_INPUT });
      return;
    }

    // Check cache first
    const cached = getFromCache(email, orderNumber);
    if (cached) {
      setTrackingData(cached);
      setLoadingState('success');
      setError(null);

      // Hide main page title if exists
      try {
        const mainTitle = document.getElementsByClassName('main-page-title')[0] as HTMLElement;
        if (mainTitle) mainTitle.style.display = 'none';
      } catch {}

      return;
    }

    setLoadingState('loading');
    setError(null);

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order_id: cleanOrderNumber(orderNumber),
          email: email.trim(),
        }),
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(ERROR_MESSAGES.NOT_FOUND);
        }
        throw new Error(ERROR_MESSAGES.NETWORK);
      }

      const data: OrderResponse = await response.json();

      // Cache successful response
      setCache(email, orderNumber, data);

      setTrackingData(data);
      setLoadingState('success');

      // Hide main page title if exists
      try {
        const mainTitle = document.getElementsByClassName('main-page-title')[0] as HTMLElement;
        if (mainTitle) mainTitle.style.display = 'none';
      } catch {}
    } catch (err) {
      console.error('Error fetching order:', err);
      setError({
        message: err instanceof Error ? err.message : ERROR_MESSAGES.GENERIC,
      });
      setLoadingState('error');
    }
  };

  const handleTrackAnother = () => {
    setTrackingData(null);
    setLoadingState('idle');
    setError(null);
    setProgress(0);

    // Clear URL parameters
    if (window.history.replaceState) {
      const url = new URL(window.location.href);
      url.searchParams.delete('order');
      url.searchParams.delete('email');
      window.history.replaceState({}, '', url.toString());
    }
  };

  if (loadingState === 'loading') {
    return <LoadingSpinner />;
  }

  if (trackingData && loadingState === 'success') {
    return (
      <OrderDetails
        order={trackingData}
        progress={progress}
        stage={stage}
        message={message}
        cssColor={cssColor}
        onTrackAnother={handleTrackAnother}
      />
    );
  }

  return (
    <OrderForm
      onSubmit={fetchOrder}
      // @ts-ignore
      isLoading={loadingState === 'loading'}
      error={error}
      initialData={getQueryParams()}
    />
  );
};

export default Track;
