import * as Progress from '@radix-ui/react-progress';
import { useEffect, useState } from 'react';

// Constants
const API_ENDPOINT = 'https://shopify-server-peach.vercel.app/shipment-updates';
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds
const MOBILE_BREAKPOINT = 768;

// Progress mapping
const PROGRESS_MAP = {
  // Completed states
  FULFILLED: 90,

  // In progress states
  IN_PROGRESS: 75,
  PARTIALLY_FULFILLED: 60,
  PENDING_FULFILLMENT: 50,

  // Early states
  SCHEDULED: 40,
  OPEN: 25,
  UNFULFILLED: 25,

  // Problem states
  ON_HOLD: 30,
  REQUEST_DECLINED: 20,
  RESTOCKED: 10,

  // Default
  DEFAULT: 25,
};

// Error messages
const ERROR_MESSAGES = {
  NETWORK: 'Unable to connect to the server. Please check your connection and try again.',
  NOT_FOUND: 'Order not found. Please check your order number and email.',
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
  } | null;
  cancelled_at: string | null;
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
  return orderNumber.replace(/-/g, '').trim().toUpperCase();
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
    padding: '1rem',
    backgroundColor: '#fee',
    border: '1px solid #fcc',
    borderRadius: '4px',
    color: '#c00',
    marginBottom: '1rem',
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

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div style={styles.errorBox}>
    <strong>Error:</strong> {message}
  </div>
);

const OrderProgress: React.FC<{ progress: number; color: string; orderStatus: string }> = ({
  progress,
  color,
  orderStatus,
}) => {
  console.log({ orderStatus });
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

            background: color || 'red',
            height: '13px',
            borderRadius: '9999px',
            width: '100%',
            transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
          }}
        />
      </Progress.Root>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
        {['Processing', 'Preparing', 'Shipped', 'Delivered'].map((stage) => (
          <p key={stage} style={{ textAlign: 'right', width: '25%', margin: '0.5rem 0' }}>
            {stage}
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
              onInput={(e: any) => setOrderNumber(e.target?.value!)}
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

const OrderDetails: React.FC<{
  order: OrderResponse;
  progress: number;
  onTrackAnother: () => void;
}> = ({ order, progress, onTrackAnother }) => {
  const isCancelled = Boolean(order.cancelled_at);
  const colorTheme = isCancelled ? 'red' : 'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)';

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
          <div>
            {order.order_id && <p style={{ marginBottom: 0 }}>{order.order_id}</p>}
            {order.order_time && (
              <p style={{ marginTop: '0.25rem' }}>
                <span style={{ opacity: 0.6 }}>Order Date</span> {formatDate(order.order_time)}
              </p>
            )}
          </div>

          {order.tracking_link ? (
            <a
              style={{
                display: 'flex',
                gap: '0.5rem',
                alignItems: 'center',
                background: colorTheme,
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '100px',
                textDecoration: 'none',
              }}
              href={order.tracking_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span style={{ fontSize: isMobile() ? '1rem' : '1.5rem', letterSpacing: '0px' }}>Track Shipment</span>
              <svg width={14} fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24">
                <path d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ) : null}
        </div>

        <OrderProgress orderStatus={order.fulfillment_status || 'UNFULFILLED'} progress={progress} color={colorTheme} />
        <p>{order.latest_status?.status_code || ''}</p>
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
  ) : null;
};

// Main Component
const Track: React.FC = () => {
  const [loadingState, setLoadingState] = useState<LoadingState>('idle');
  const [trackingData, setTrackingData] = useState<OrderResponse | null>(null);
  const [error, setError] = useState<ErrorState | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check for query parameters on mount
    const queryData = getQueryParams();
    if (queryData) {
      fetchOrder(queryData);
    }
  }, []);

  const calculateProgress = (status: string | null): number => {
    if (!status) return PROGRESS_MAP.DEFAULT;
    return PROGRESS_MAP[status as keyof typeof PROGRESS_MAP] || PROGRESS_MAP.DEFAULT;
  };

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
      setProgress(calculateProgress(cached.fulfillment_status));
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
      setProgress(calculateProgress(data.fulfillment_status));
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
    return <OrderDetails order={trackingData} progress={progress} onTrackAnother={handleTrackAnother} />;
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
