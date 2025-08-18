import { ProductNodes } from '../../types';

interface StringGuideProps {
  closeStringsGuide: () => void;
  stringingProducts: ProductNodes;
}

const ProgressRing = ({ rating, metricName }: { rating: number; metricName: string }) => {
  const maxRating = 10;
  const normalizedRadius = 40;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (rating / maxRating) * circumference;

  const getColor = () => {
    switch (metricName) {
      case 'Durability':
        return '#17c37b';
      case 'Control':
        return '#0bbcd6';
      case 'Repulsion Power':
        return '#ff4081';
      case 'Hitting Sound':
        return '#ffd101';
      case 'Shock Absorption':
        return '#083ea7';
      default:
        return '#000';
    }
  };

  const getName = () => {
    switch (metricName) {
      case 'Shock Absorption':
        return 'Absorption';
      case 'Hitting Sound':
        return 'Sound';
      case 'Repulsion Power':
        return 'Repulsion';
      default:
        return metricName;
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        height: '130px',
        width: '130px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 100 100"
        style={{ position: 'absolute', transform: 'rotate(-90deg)' }}
      >
        <circle
          stroke="#ccc"
          strokeWidth="7"
          fill="transparent"
          r={normalizedRadius}
          cx="50"
          cy="50"
          style={{ strokeDasharray: `${circumference} ${circumference}` }}
        />
        <circle
          stroke={getColor()}
          strokeWidth="7"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.35s' }}
          fill="transparent"
          r={normalizedRadius}
          cx="50"
          cy="50"
        />
      </svg>
      <div style={{ position: 'absolute', textAlign: 'center' }}>
        <div style={{ fontSize: '16px', fontWeight: '600' }}>
          {rating}/{maxRating}
        </div>
        <div style={{ fontSize: '12px' }}>{getName()}</div>
      </div>
    </div>
  );
};

const getProductStats = (product: ProductNodes[number]) => {
  const stats: { name: string; value: number }[] = [];

  // Check if metafields exist and extract performance data
  if ((product as any).metafields && Array.isArray((product as any).metafields)) {
    const metafieldMap = new Map((product as any).metafields.map((m: any) => [m.key, parseInt(m.value) || 0]));

    // Map metafield keys to display names and extract values
    const statMappings = [
      { key: 'durability', name: 'Durability' },
      { key: 'control', name: 'Control' },
      { key: 'repulsion_power', name: 'Repulsion Power' },
      { key: 'hitting_sound', name: 'Hitting Sound' },
      { key: 'shock_absorption', name: 'Shock Absorption' },
    ];

    statMappings.forEach(({ key, name }) => {
      const value = metafieldMap.get(key);
      if (typeof value === 'number' && value > 0) {
        stats.push({ name, value });
      }
    });
  }

  // Sort by rating (highest to lowest) and return top 3
  return stats.sort((a, b) => b.value - a.value).slice(0, 3);
};

const getProductMaterials = (product: ProductNodes[number]) => {
  const materials: { name: string; value: string }[] = [];

  // Check if metafields exist and extract material data
  if ((product as any).metafields && Array.isArray((product as any).metafields)) {
    const metafieldMap = new Map((product as any).metafields.map((m: any) => [m.key, m.value]));

    // Map metafield keys to display names
    const materialMappings = [
      { key: 'core_material', name: 'CORE MATERIAL' },
      { key: 'outer_material', name: 'OUTER MATERIAL' },
    ];

    materialMappings.forEach(({ key, name }) => {
      const value = metafieldMap.get(key);
      if (value && typeof value === 'string' && value.trim()) {
        materials.push({ name, value });
      }
    });
  }

  return materials;
};

const StringGuide = ({ closeStringsGuide, stringingProducts }: StringGuideProps) => {
  return (
    <div
      style={{
        position: 'relative',
        padding: '12px',
        marginTop: '8rem',
        background: 'white',
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
        pointerEvents: 'auto',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          maxWidth: '768px',
          margin: '0 auto',
          paddingBottom: '5rem',
        }}
      >
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            padding: '18px 0',
          }}
        >
          <span
            onClick={closeStringsGuide}
            style={{
              outline: 'none',
              display: 'flex',
              gap: '4px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <span>← Back to product</span>
          </span>
          <button
            onClick={closeStringsGuide}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
            }}
          >
            ×
          </button>
        </div>

        <section style={{ lineHeight: '1.6', color: 'var(--gray-70)' }}>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>Badminton Strings Guide</h3>
            <p style={{ marginTop: '8px' }}>
              Selecting the right string for your racket is crucial as it significantly affects your performance on the
              court. Our collection provides strings that cater to every playing style.
            </p>
          </div>

          <div
            style={{
              marginTop: '32px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              color: 'var(--gray-90)',
            }}
          >
            {stringingProducts
              .filter((product) => product.availableForSale)
              .map((product, index) => (
                <div key={product.id}>
                  <div style={{ padding: '20px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <img width={90} src={product.featuredImage?.url} alt={product.featuredImage?.altText || ''} />
                    </div>
                    <div style={{ marginTop: '16px' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>{product.title}</h4>
                      <p style={{ lineHeight: '1.4' }}>
                        {product.metafield?.value ||
                          'High-quality string designed for optimal performance and durability.'}
                      </p>

                      {/* Materials Section */}
                      {getProductMaterials(product).length > 0 && (
                        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                          {getProductMaterials(product).map((material) => (
                            <div key={material.name}>
                              <h3
                                style={{
                                  fontSize: '12px',
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.05em',
                                  color: 'var(--gray-70)',
                                  marginBottom: '4px',
                                }}
                              >
                                {material.name}
                              </h3>
                              <p style={{ fontSize: '16px', lineHeight: '1.3', color: 'black', margin: '0' }}>
                                {material.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {getProductStats(product).length > 0 && (
                        <div
                          style={{
                            marginTop: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '20px',
                          }}
                        >
                          {getProductStats(product).map((stat) => (
                            <ProgressRing key={stat.name} metricName={stat.name} rating={stat.value} />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  {index < stringingProducts.filter((p) => p.availableForSale).length - 1 && (
                    <hr style={{ margin: '0', backgroundColor: '#e4e4e4', border: 'none', height: '1px' }} />
                  )}
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default StringGuide;
