import { useState } from 'preact/hooks';

const Track = () => {
  const [trackingData, setResponse] = useState<ShipmentTrackingResponse | null | undefined>(undefined);
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
  ) : (
    <section>
      <form onSubmit={fetchOrder} style="display: flex; justify-content: center">
        <input placeholder="Order Email" type="email" name="email" id="order-email" />
        <input placeholder="Order Number" type="text" name="order-number" id="order-number" />
        <button type="submit">Track</button>
      </form>

      {trackingData === undefined ? null : trackingData === null ? (
        <p>We were not able to track your order</p>
      ) : (
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '16px',
          }}
        >
          <div>
            <h1
              style={{
                fontSize: '1.5rem',
                color: 'white',
                borderRadius: ' 100px',
                backgroundColor: 'var(--accent-color)',
                display: 'inline-block',
                padding: '1rem 2rem',
                margin: 0,
              }}
            >
              {get(trackingData, 'latestStatus.text', 'Tracking Your Package')}
            </h1>
            <p
              style={{
                color: 'var(--gray-70)',
                margin: 0,
              }}
            >
              {get(trackingData, 'latestStatus.statusCode', '')}
            </p>
            {trackingData.latestStatus?.timestamp && (
              <p style={{ fontSize: '1.5rem', color: 'var(--gray-40)', margin: 0 }}>
                Last update on {formatDate(trackingData.latestStatus.timestamp)}
              </p>
            )}
          </div>

          <div
            style={{
              margin: '4rem 0',
            }}
          >
            <div>Shipment Details</div>

            <div>
              <div>Carrier:</div>
              <div>{trackingData.carrierName || 'N/A'}</div>
            </div>

            <div>
              <div>Ship to:</div>
              <div>
                {trackingData.shippingAddress ? (
                  <>
                    {trackingData.shippingAddress.address1}
                    <br />
                    {trackingData.shippingAddress.city}, {trackingData.shippingAddress.zip}
                    <br />
                    {trackingData.shippingAddress.country}
                  </>
                ) : (
                  'N/A'
                )}
              </div>
            </div>
          </div>

          <div
            style={{
              margin: '4rem 0',
            }}
          >
            <div>Order Summary</div>

            {trackingData.product_details?.map((product, index) => (
              <div key={index}>
                <div></div>
                <div>
                  <div style={{ fontWeight: 500 }}>{product.description}</div>
                  <div style={{ fontSize: '14px', color: 'var(--gray-50)' }}>
                    SKU: {product.sku} • Qty: {product.quantity}
                  </div>
                  <div style={{ fontWeight: 500, marginTop: '4px' }}>₹{product.price}</div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              margin: '4rem 0',
            }}
          >
            <div>
              <div>Subtotal:</div>
              <div>₹{trackingData.subTotal}</div>
            </div>
            <div>
              <div>Tax:</div>
              <div>₹{trackingData.taxTotal}</div>
            </div>
            <div>
              <div>Total:</div>
              <div>
                ₹{(parseFloat(trackingData.subTotal || '0') + parseFloat(trackingData.taxTotal || '0')).toFixed(2)}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div
            style={{
              margin: '4rem 0',
            }}
          >
            <div>
              <div>Tracking History</div>
              {(trackingData?.scans?.length || 0) > 0 ? (
                trackingData?.scans?.map((scan, index) => (
                  <div key={index}>
                    <div></div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600 }}>{scan.text}</div>
                      <div style={{ fontSize: '14px', margin: '4px 0' }}>{scan.description}</div>
                      <div
                        style={{
                          fontSize: '12px',
                          color: 'var(--gray-50)',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span>{formatDate(scan.timestamp || '')}</span>
                        <span>{scan.location}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>No tracking updates available</div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
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

// Safe access to nested properties
const get = (obj: any, path: string, fallback = '') => {
  return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : fallback), obj);
};

interface ShipmentStatus {
  text?: string | null;
  timestamp?: string | null;
  statusCode?: string | null;
}

interface ShipmentScan {
  timestamp?: string | null;
  location?: string | null;
  text?: string | null;
  description?: string | null;
}

interface ProductDetail {
  description?: string | null;
  images?: string | null;
  product_url?: string | null;
  quantity?: number | null;
  price?: number | null;
  sku?: string | null;
}

interface ShippingAddress {
  address1?: string | null;
  city?: string | null;
  zip?: string | null;
  country?: string | null;
}

interface MiscInfo {
  isStuck?: boolean | null;
}

interface ShipmentTrackingResponse {
  latestStatus?: ShipmentStatus | null;
  scans?: ShipmentScan[] | null;
  product_details?: ProductDetail[] | null;
  misc?: MiscInfo | null;
  carrierName?: string | null;
  shippingAddress?: ShippingAddress | null;
  subTotal?: string | null;
  taxTotal?: string | null;
}

export default Track;
