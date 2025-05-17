import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'preact/hooks';

const defaultCopy = document.getElementById('tshirt-printing-description')?.innerHTML || '';
const width = window.innerWidth;

window.s3_tshirt_printing_controller = {
  openModal: () => {},
  closeModal: () => {},
  isOpen: false,
};

const TShirtPrinting = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isInputInvalid, setIsInputInvalid] = useState(false);
  const [name, setName] = useState('');

  const closeModal = () => setIsModalOpen(false);

  const calculateStyles = (name: string) => {
    const length = name?.length;
    if (width && width < 640) {
      const top = '25%';
      const letterSpacing = '0.01px';
      if (length <= 6) {
        return {
          fontSize: '37px',
          letterSpacing,
          top,
        };
      } else if (length <= 9) {
        return {
          fontSize: '27px',
          letterSpacing,
          top,
        };
      } else
        return {
          fontSize: '20px',
          letterSpacing,
          top,
        };
    } else {
      const top = '23%';
      if (length <= 6) {
        return {
          fontSize: '37px',
          top,
        };
      } else if (length <= 9) {
        return {
          fontSize: '26px',
          top,
        };
      } else
        return {
          fontSize: '21px',
          top,
        };
    }
  };

  useEffect(() => {
    if (window.s3_tshirt_printing_controller) {
      window.s3_tshirt_printing_controller.openModal = () => setIsModalOpen(true);
      window.s3_tshirt_printing_controller.closeModal = () => setIsModalOpen(false);
      window.s3_tshirt_printing_controller.isOpen = isModalOpen;
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (name) {
      document.getElementById('tshirt-printing-description')!.innerHTML =
        `Uniquely Yours — You are making this ${window.s3_product_name} truly yours by personalising with <span id="the-tshirt-text">${name}</span>`;
      document.getElementsByClassName('product-form__submit button')[0]?.classList?.add('glowing');
    } else {
      document.getElementById('tshirt-printing-description')!.innerHTML = defaultCopy;
      document.getElementsByClassName('product-form__submit button')[0]?.classList?.remove('glowing');
    }
  }, [name]);

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content
          onOpenAutoFocus={(event) => event.preventDefault()}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 1000,
            overflow: 'auto',
            background: 'white',
          }}
        >
          <Dialog.Title />
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: '4rem',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                width: '100%',
                padding: width < 640 ? '0rem 1rem' : '0rem 3rem',
                marginTop: width < 640 ? '0rem' : '1rem',
              }}
            >
              <svg
                onClick={() => {
                  setIsModalOpen(false);
                }}
                width={24}
                height={24}
                aria-hidden="true"
                fill="none"
                strokeWidth={2}
                stroke="var(--gray-90)"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <h2
                  style={{
                    margin: '0rem',
                  }}
                >
                  Personalise this <br />
                  {window.s3_product_name}
                </h2>
                <p style={{ color: 'var(--gray-50)' }}>
                  Make this T-Shirt truly yours by getting something printed on it.
                </p>
              </div>
              <svg
                onClick={() => {
                  setIsModalOpen(false);
                }}
                width={26}
                height={26}
                aria-hidden="true"
                fill="none"
                strokeWidth={2}
                stroke="var(--gray-90)"
                viewBox="0 0 26 26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div style={{ width: '100%', padding: '4rem 2rem', background: '#f5f5f5' }}>
              <h4
                className="tshirt-printing-font"
                style={{
                  position: 'relative',
                  bottom: '-85px',
                  height: '24px',
                  color: window.s3_tshirt_printing_config?.tshirtTextColor || '#fff',
                  zIndex: 9999,
                  margin: 0,
                  //   fontSize: '3rem',
                  ...calculateStyles(name),
                }}
              >
                {name}
              </h4>

              <Tshirt tshirtColor={window.s3_tshirt_printing_config?.tshirtColor} />
            </div>

            <input
              maxLength={12}
              autoComplete="off"
              spellcheck={false}
              style={{
                marginTop: window.innerWidth > 740 ? '5rem' : '2rem',
              }}
              onInput={(e: Event) => {
                const target = e.target as HTMLInputElement;
                const newValue = target.value;
                if (isTextAlphanumeric(newValue)) {
                  setIsInputInvalid(false);
                  setName(newValue.toUpperCase() || '');
                } else {
                  setIsInputInvalid(true);
                  target.value = name;
                }
              }}
              value={name}
              className="services-input"
              type="text"
              placeholder={'Your Personalisation'}
            />
            <div>
              {isInputInvalid && (
                <p
                  style={{
                    color: 'red',
                    marginTop: '0.5rem',
                  }}
                >
                  Only letters and numbers are allowed.
                </p>
              )}
            </div>
            <div
              style={{
                marginTop: window.innerWidth > 740 ? '3rem' : '2rem',
                display: 'flex',
                gap: '1rem',
              }}
            >
              <button
                autoFocus
                className="button button--secondary"
                onClick={() => {
                  setName('');
                  closeModal();
                }}
              >
                {name.length > 0 ? 'Remove' : 'Close'}
              </button>
              <button
                style={{
                  padding: '1.8rem 2.2rem',
                }}
                disabled={name.length === 0}
                className="button"
                onClick={closeModal}
              >
                Personalise
              </button>
            </div>

            <p
              style={{
                color: 'var(--gray-20)',
                maxWidth: '600px',
                marginTop: '3rem',
                fontSize: '1.2rem',
                padding: '0 4px',
                lineHeight: '1.3',
              }}
            >
              Note: This is for representation purposes only. The text will be printed on the back of the T-Shirt. Cash
              on Delivery is not applicable for orders containing Personalised T-Shirts.
            </p>
          </section>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const Tshirt = ({ tshirtColor = '#000000' }) => {
  return (
    <div className="" style={{ position: 'relative', width: 'max-content', margin: '0 auto' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 458.9 500"
        style={
          {
            width: '100%',
            enableBackground: 'new 0 0 458.9 500',
          } as any
        }
        xmlSpace="preserve"
      >
        <defs>
          <filter id="spotlight">
            <feBlend in="SourceGraphic" mode="lighten" />
          </filter>
        </defs>

        <style>
          {
            '.st3{clip-path:url(#SVGID_8_);fill:#3e3e40}.st4{clip-path:url(#SVGID_10_)}.st4,.st5{fill:#3e3e40}.st5,.st6{clip-path:url(#SVGID_12_)}.st7{opacity:.7}'
          }
        </style>
        <g id="Layer_1">
          <defs>
            <path
              id="SVGID_1_"
              d="M31.7 107.7c3.4-8.7 6.6-17.2 9.3-25.4 4.9-15 6.7-23.2 18.5-31-.2 7.7 1.4 25.7 4.4 36.9 1.1 4.2 2.3 8.3 3.4 12 5 17.4 9.6 29.7 13.5 39.2 9.6 23.2 16 39.9 15.8 47.6-2 3.6-3.4 7.1-4.7 10.8-1.7 4.7-3.1 9.8-5.6 15.7-2.8 8.2-11.6 2.9-16.5 1.5-9.5-2.7-19.3-5.5-29.2-8.3-7.2-2.1-14.4-4.1-21.5-6.1-1.5-.4-3.1-.9-4.6-1.3-1.4-.4-2.7-.8-4-1.2C6.6 197-1 195 1.2 189.2c7.8-27.6 20.3-55.5 30.5-81.5z"
            />
          </defs>
          <defs>
            <path
              id="SVGID_2_"
              d="M427.1 107.7c-3.4-8.7-6.6-17.2-9.3-25.4-4.9-15-6.7-23.2-18.5-31 .2 7.7-1.4 25.7-4.4 36.9-1.1 4.2-2.3 8.3-3.4 12-5 17.4-9.6 29.7-13.5 39.2-9.6 23.2-16 39.9-15.8 47.6 2 3.6 3.4 7.1 4.7 10.8 1.6 4.7 3.1 9.8 5.6 15.7 2.8 8.2 11.6 2.9 16.5 1.5 9.5-2.7 19.3-5.5 29.2-8.3 7.2-2.1 14.4-4.1 21.5-6.1 1.5-.4 3.1-.9 4.6-1.3 1.4-.4 2.7-.8 4-1.2 3.9-1.1 11.5-3.1 9.3-8.9-7.8-27.6-20.2-55.5-30.5-81.5z"
            />
          </defs>
          <defs>
            <path
              id="SVGID_3_"
              d="M360.7 438.6c-4.6-91.5-6.7-61.6-5.7-88.3 1.9-47.8-.4-90.9 2.6-136.2 3.3-48.3 34.8-90.2 40.8-143.4.7-6.3 1.1-12.7 1-19.3-4.9-4.7-20.9-12.6-39.1-20.7-23.6-10.5-51-21.5-62.7-26.7C285-1.6 252 7.9 229.3 7.9c-22.6 0-55.7-9.6-68.3-3.9-9.8 4.4-30.5 12.8-50.9 21.6-22.7 9.8-44.9 20.1-50.9 25.8-.1 6.6.3 13.1 1 19.3 6 53.1 37.5 95 40.8 143.4 3 45.2.7 88.3 2.6 136.2 1.1 26.7-3.2-3.3-5.7 88.3-.2 8.1-3.8 14.7-3.9 21.3.4 6.2 10.2 12.8 23.9 17.8 28.9 10.7 53.5 22.3 111.4 21.3 65.5-1.1 89.4-12.3 117-24.6 9.8-4.3 17.9-9.4 18.3-14.6-.3-6.9-3.6-14.7-3.9-21.2z"
            />
          </defs>
          <use
            xlinkHref="#SVGID_1_"
            style={{
              overflow: 'visible',
              fill: tshirtColor,
            }}
          />
          <use
            xlinkHref="#SVGID_2_"
            style={{
              overflow: 'visible',
              fill: tshirtColor,
            }}
          />
          <use
            xlinkHref="#SVGID_3_"
            style={{
              overflow: 'visible',
              fill: tshirtColor,
            }}
          />
          <clipPath id="SVGID_4_">
            <use
              xlinkHref="#SVGID_1_"
              style={{
                overflow: 'visible',
              }}
            />
          </clipPath>
          <clipPath
            id="SVGID_5_"
            style={{
              clipPath: 'url(#SVGID_4_)',
            }}
          >
            <use
              xlinkHref="#SVGID_2_"
              style={{
                overflow: 'visible',
              }}
            />
          </clipPath>
          <clipPath
            id="SVGID_6_"
            style={{
              clipPath: 'url(#SVGID_5_)',
            }}
          >
            <use
              xlinkHref="#SVGID_3_"
              style={{
                overflow: 'visible',
              }}
            />
          </clipPath>
          <path
            style={{
              clipPath: 'url(#SVGID_6_)',
              fill: tshirtColor,
            }}
            d="M-3.4-2h466.6v504.1H-3.4z"
          />
        </g>
        <text x="50%" y="25%" textAnchor="middle" fontSize="58" letterSpacing={0.01}></text>
        <image
          href={window.s3_tshirt_printing_config?.texturePath || ''}
          width="100%"
          style={{ filter: `url("#spotlight")`, opacity: 0.2 }}
        ></image>
      </svg>
    </div>
  );
};

const isTextAlphanumeric = (text: string): boolean => {
  const alphanumericRegex = /^[a-zA-Z. ]*$/;
  return alphanumericRegex.test(text);
};

export default TShirtPrinting;
