import * as Dialog from '@radix-ui/react-dialog';
import GraphemeSplitter from 'grapheme-splitter';
import { useEffect, useRef, useState } from 'preact/hooks';
import {
  AmbientLight,
  Color,
  DirectionalLight,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const defaultCopy = document.getElementById('remix-description')!.innerHTML;

window.s3_remix_modal_controller = {
  openModal: () => {},
  closeModal: () => {},
  isOpen: false,
};

const Remix = () => {
  const threeModelPath = window?.s3_remix_config?.modelPath;
  const productType = window?.s3_product_type;
  const shortType = productType === 'Badminton Racket' ? 'Racket' : productType === 'Pickleball Paddle' ? 'Paddle' : '';
  const maxStickerLength = productType === 'Pickleball Paddle' ? 12 : 8;
  const inputRef = useRef<HTMLInputElement>(null);
  const cursorPositionRef = useRef<number | null>(null);

  const [isAnimating, setIsAnimating] = useState(true);
  const [_, setStickerError] = useState('');
  const [isModelLoading, setIsModelLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(true);

  const [stickerName, setStickerName] = useState('');

  useEffect(() => {
    setIsAnimating(true);
    if (window.s3_remix_modal_controller) {
      window.s3_remix_modal_controller.openModal = () => setIsModalOpen(true);
      window.s3_remix_modal_controller.closeModal = () => setIsModalOpen(false);
      window.s3_remix_modal_controller.isOpen = isModalOpen;
    }

    let controls: any = null;
    let renderer: any = null;
    let ambientLight: any = null;
    let directionalLight: any = null;
    let scene: any = null;
    let logPositionChange: any = null;

    if (!threeModelPath) {
      console.error('No 3D model URL provided');
      return;
    }

    try {
      (async () => {
        scene = new Scene();
        scene.background = new Color(0xfafafa);

        // CAMERA SETTINGS 📸
        const camera = new PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.lookAt(0, 0, 0);
        camera.position.set(0, 0, 10);

        // HELPERS
        // const axesHelper = new AxesHelper(5);
        // scene.add(axesHelper);

        // const size = 10;
        // const divisions = 10;
        // const gridHelper = new GridHelper(size, divisions);
        // scene.add(gridHelper);

        // RENDERER SETTINGS 🎨
        renderer = new WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true;
        renderer.setSize(window.innerWidth, window.innerHeight);

        const rootElement = document.getElementById('model');
        if (rootElement) {
          rootElement.innerHTML = ''; // Clear previous renderers
          rootElement.appendChild(renderer.domElement);
        }

        // CONTROLS 🎮
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.screenSpacePanning = true;
        controls.minDistance = 1;
        controls.maxDistance = 100;

        // DEBUG: Log position changes during mouse interaction
        logPositionChange = () => {
          console.log(
            'Camera position:',
            camera.position.x.toFixed(2),
            camera.position.y.toFixed(2),
            camera.position.z.toFixed(2),
          );
        };
        controls.addEventListener('change', logPositionChange);

        // IMPORT THE 3D MODEL 🫰🏻
        let model: any = null;
        const loader = new GLTFLoader();
        loader.load(
          threeModelPath,
          function (gltf) {
            try {
              document.getElementsByTagName('canvas')[0].style.height = '100%';
            } catch (error) {
              console.log('cant set canvas height');
            }
            console.log('model loaded:', gltf.scene);
            setIsModelLoading(false);
            model = gltf.scene;
            model.position.set(0, 0, 0);
            model.scale.set(1, 1, 1);

            model.traverse((child: any) => {
              if (child.isMesh) {
                if (child.name === 'Cylinder003') {
                  // BODY
                  const hexFrameColor = window.s3_remix_config?.racketFrameColor || '#8348ff';
                  const frameColor = new Color(getHexColor(hexFrameColor as string));
                  child.material = new MeshStandardMaterial({
                    color: frameColor,
                    roughness: 0.2,
                    metalness: hexFrameColor == '#FFFFFF' ? 0.2 : 0.6,
                  });
                }

                if (child.name === 'Cylinder003_1') {
                  // HANDLE
                  const gripColor = new Color(window?.s3_remix_config?.racketGripColor as string);
                  child.material = new MeshStandardMaterial({
                    color: gripColor,
                    roughness: 0.7,
                    metalness: 0.1,
                  });
                }

                if (child.name === 'Cylinder003_2') {
                  // BOTTOM_LOGO
                  const logoColor = new Color(window?.s3_remix_config?.logoColor as string);
                  child.material = new MeshStandardMaterial({
                    color: logoColor,
                    roughness: 0.5,
                    metalness: 0,
                  });
                }

                if (child.name === 'Cylinder003_3') {
                  // RIM
                  const rimColor = new Color(0xffffff);
                  child.material = new MeshStandardMaterial({
                    color: rimColor,
                    roughness: 0.9,
                    metalness: 0,
                  });
                }
              }
            });

            // HELPERS
            // const bbox = new Box3().setFromObject(model);
            // const bboxHelper = new Box3Helper(bbox, new Color(0xff0000));
            // scene.add(bboxHelper);

            // const axesHelper = new AxesHelper(1); // Adjust the size as needed
            // model.add(axesHelper); // Adding the helper to the model makes the axes local to the model

            scene.add(model);

            // INITIATE RACKET ROTATION 📸
            (() => {
              const duration = 3500;
              const startTime = Date.now();

              function updateModel() {
                const elapsedTime = Date.now() - startTime;
                const t = Math.min(elapsedTime / duration, 1);

                const angle = t * 2 * Math.PI;
                if (model) {
                  model.rotation.z = angle;
                }

                if (t < 1 && productType === 'Badminton Racket') {
                  requestAnimationFrame(updateModel);
                }
              }

              updateModel();
            })();

            // INITIATE CAMERA MOVEMENTS 🎥
            (() => {
              const duration = productType === 'Pickleball Paddle' ? 3500 : 4500;
              const startTime = Date.now();

              const getCameraPositions = (productType: string | undefined) => {
                switch (productType) {
                  case 'Badminton Racket':
                    return {
                      start: new Vector3(0, 0, 10),
                      end: new Vector3(-2, 1, 0),
                    };
                  case 'Pickleball Paddle':
                  default:
                    return {
                      start: new Vector3(0, 15, 2),
                      end: new Vector3(-3, 0, 0),
                    };
                }
              };

              const { start: startPosition, end: endPosition } = getCameraPositions(productType);

              function updateCamera() {
                const elapsedTime = Date.now() - startTime;
                const t = Math.min(elapsedTime / duration, 1);

                // Use the custom easing function to calculate the eased value
                const easedT = easeInOutCubic(t);
                // const easedT = cubicBezier(t, 0.17, 0.67, 0.83, 0.67);

                // Manually calculate the camera position based on the eased value
                camera.position.x = startPosition.x + (endPosition.x - startPosition.x) * easedT;
                camera.position.y = startPosition.y + (endPosition.y - startPosition.y) * easedT;
                camera.position.z = startPosition.z + (endPosition.z - startPosition.z) * easedT;

                // camera.position.lerpVectors(startPosition, endPosition, t);

                if (t < 1) {
                  requestAnimationFrame(updateCamera);
                } else {
                  setIsAnimating(false);
                }
              }

              updateCamera();
            })();
          },
          function () {
            console.log('loading the model. hang on');
          },
          function (error) {
            console.error('error loading model:', error);
          },
        );

        // ADD LIGHTS 🎇
        ambientLight = new AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);

        directionalLight = new DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        // RENDER ENDLESSLY ➿
        function animate() {
          controls.update();
          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        }
        animate();
      })();
    } catch (error) {
      console.error({ error });
    }

    return () => {
      console.log('clear');
      if (controls) {
        controls.removeEventListener('change', logPositionChange);
        controls.dispose();
      }
      renderer?.dispose();
      ambientLight?.dispose();
      directionalLight?.dispose();
      scene?.clear();
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (inputRef.current && cursorPositionRef.current !== null) {
      inputRef.current.selectionStart = cursorPositionRef.current;
      inputRef.current.selectionEnd = cursorPositionRef.current;
    }

    if (stickerName) {
      document.getElementById('remix-description')!.innerHTML =
        `Uniquely Yours — You are making this ${window.s3_product_name} truly yours by personalising with <span id="the-sticker" class='emojiFont'>${stickerName}</span>`;
      document.getElementsByClassName('product-form__submit button')[0]?.classList?.add('glowing');
    } else {
      document.getElementById('remix-description')!.innerHTML = defaultCopy;
      document.getElementsByClassName('product-form__submit button')[0]?.classList?.remove('glowing');
    }
  }, [stickerName]);

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content
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
          <section>
            <div>
              <div id="model"></div>

              {isModelLoading ? (
                <div
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: 'var(--gray-70)',
                  }}
                >
                  <h2
                    style={{
                      fontSize: '1.5rem',
                      letterSpacing: '0px',
                    }}
                  >
                    Part of the pleasure is the build up. Are you ready?
                  </h2>
                </div>
              ) : (
                <div>
                  <div
                    style={{
                      position: 'absolute',
                      top: '2rem',
                      width: '100%',
                      textAlign: 'center',
                      fontSize: '2.2rem',
                      zIndex: 50,
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '2rem 4rem',
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
                        <h3
                          style={{
                            letterSpacing: '-1px',
                            margin: 0,
                          }}
                        >
                          <span style="background: linear-gradient(90deg, rgb(183, 33, 255) 0%, rgb(33, 212, 253) 100%) padding-box text; color: transparent;">
                            ✨ {shortType} Remix
                          </span>{' '}
                          {` `}
                          by {window.s3_brand}
                        </h3>
                      </div>
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
                        <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p
                      style={{
                        marginTop: '0.5rem',
                        color: 'var(--gray-30)',
                        lineHeight: '140%',
                        fontSize: '1.7rem',
                        letterSpacing: '0px',
                      }}
                    >
                      Add your name, initials or emojis <br /> and show off this uniquely yours {shortType}.
                    </p>
                  </div>

                  <h2
                    style={{
                      color: window.s3_remix_config?.stickerTextColor || '#fff',
                      position: 'absolute',
                      width: '100%',
                      inset: 0,
                      height: '100%',
                      margin: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '5rem',
                      transition: 'opacity 0.5s ease',
                      opacity: isAnimating ? 0 : 0.8,
                    }}
                  >
                    <span
                      style={{
                        position: stickerName.length > 6 ? 'relative' : 'static',
                        right: stickerName.length > 6 ? '3rem' : '0rem',
                      }}
                      className="emojiFont"
                      id="sticker-name"
                    >
                      {stickerName}
                    </span>
                  </h2>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'absolute',
                      bottom: '10rem',
                      width: '100%',
                      transition: 'opacity 0.5s ease',
                      opacity: isAnimating ? 0 : 1,
                    }}
                  >
                    <div
                      className="emojiFont"
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        color: 'black',
                      }}
                      onClick={() => {
                        document.getElementById('sticker-name-input')?.focus();
                      }}
                    >
                      {validEmojis.map((emoji) => {
                        return (
                          <div
                            style={{
                              outline: 'none',
                              appearance: 'none',
                              background: 'none',
                              border: 'none',
                              fontSize: '2.5rem',
                              margin: '0 0.4rem',
                            }}
                            key={emoji}
                            onClick={() => {
                              setStickerError('');
                              const splitter = new GraphemeSplitter();
                              const currentStickerName = stickerName || '';
                              const graphemes = splitter.splitGraphemes(currentStickerName);
                              const noOfEmojisInName = graphemes.filter((x) => !isCharAlphanumeric(x)).length + 1;

                              if (noOfEmojisInName > 2) {
                                return setStickerError('You cannot have more than 2 emojis in the sticker');
                              } else {
                                const stickerName = [
                                  ...graphemes.slice(0, inputRef.current?.selectionStart!),
                                  emoji,
                                  ...graphemes.slice(inputRef.current?.selectionStart!),
                                ]
                                  .slice(0, maxStickerLength)
                                  .join('');

                                cursorPositionRef.current = inputRef.current?.selectionStart! + 2;

                                setStickerName(stickerName);
                              }
                            }}
                          >
                            {emoji}
                          </div>
                        );
                      })}
                    </div>

                    {/* <div
                      style={{
                        width: '40vw',
                        minWidth: '350px',
                        maxWidth: '450px',
                        marginTop: '1rem',
                      }}
                      className="field"
                    >
                      <input
                        style={{
                          textTransform: 'uppercase',
                        }}
                        className="field__input emojiFont"
                        autoComplete="off"
                        ref={inputRef}
                        onInput={(e: Event) => {
                          const target = e.target as HTMLInputElement;
                          const splitter = new GraphemeSplitter();
                          const inputValue = target.value;

                          const filteredValue = splitter
                            .splitGraphemes(inputValue)
                            .filter((grapheme) => validEmojis.includes(grapheme) || isCharAlphanumeric(grapheme))
                            .slice(0, 8)
                            .join('')
                            .toUpperCase();

                          target.value = filteredValue;

                          setStickerName(filteredValue);

                          cursorPositionRef.current = target.selectionStart;
                        }}
                        type="text"
                        id="sticker-name-input"
                        name="name"
                        value={stickerName}
                        placeholder="Your-Personalisation"
                      />
                      <label class="field__label" for="sticker-name-input">
                        Your Personalisation
                      </label>
                    </div> */}

                    <div
                      style={{
                        position: 'relative',
                      }}
                    >
                      <input
                        className="emojiFont services-input"
                        type="text"
                        name="name"
                        id="sticker-name-input"
                        placeholder="Your-Personalisation"
                        value={stickerName}
                        autoComplete="off"
                        ref={inputRef}
                        onInput={(e: Event) => {
                          const target = e.target as HTMLInputElement;
                          const splitter = new GraphemeSplitter();
                          const inputValue = target.value;

                          const filteredValue = splitter
                            .splitGraphemes(inputValue)
                            .filter((grapheme) => validEmojis.includes(grapheme) || isCharAlphanumeric(grapheme))
                            .slice(0, maxStickerLength)
                            .join('')
                            .toUpperCase();

                          target.value = filteredValue;

                          setStickerName(filteredValue);

                          cursorPositionRef.current = target.selectionStart;
                        }}
                      />
                      <svg
                        onClick={() => {
                          setIsModalOpen(false);
                        }}
                        style={{
                          width: '24px',
                          height: '24px',
                          position: 'absolute',
                          right: '1.5rem',
                          top: '47%',
                        }}
                        data-slot="icon"
                        fill="none"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>

                    <div
                      style={{
                        opacity: stickerName.length > 0 ? 1 : 0,
                        transition: 'opacity 0.2s ease-in-out',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        marginTop: '2rem',
                      }}
                    >
                      <button
                        onClick={() => {
                          setStickerName('');
                          setIsModalOpen(false);
                        }}
                        style={{ color: 'var(--gray-90)', backgroundColor: 'white', borderColor: 'white' }}
                        className={'button'}
                      >
                        Remove
                      </button>
                      <button
                        onClick={() => {
                          setIsModalOpen(false);
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        className={'button'}
                      >
                        <span>Personalise</span>
                        <span>
                          <svg
                            style={{
                              width: '2rem',
                              fill: 'currentColor',
                              stroke: 'currentColor',
                              marginLeft: '0.5rem',
                            }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            strokeWidth="1.5"
                          >
                            <path
                              d="M8 15C12.8747 15 15 12.949 15 8C15 12.949 17.1104 15 22 15C17.1104 15 15 17.1104 15 22C15 17.1104 12.8747 15 8 15Z"
                              strokeWidth="1.5"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M2 6.5C5.13376 6.5 6.5 5.18153 6.5 2C6.5 5.18153 7.85669 6.5 11 6.5C7.85669 6.5 6.5 7.85669 6.5 11C6.5 7.85669 5.13376 6.5 2 6.5Z"
                              strokeWidth="1.5"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>

                    {/* {stickerError ? <p style={{ color: 'red' }}>{stickerError}</p> : null} */}
                  </div>

                  <p
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      fontSize: '1.1rem',
                      color: 'var(--gray-30)',
                      width: '100%',
                      textAlign: 'center',
                    }}
                  >
                    No modifications after the order is placed.
                  </p>
                </div>
              )}
            </div>
          </section>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 2.5) / 2;
}

export const convertHexToEmoji = (hex: string) => String.fromCodePoint(Number('0x' + hex));

export const convertEmojiToHex = (emoji: string) => emoji.codePointAt(0)?.toString(16);

export const getHexColor = (hexColor: string) => {
  try {
    return parseInt((hexColor || DefaultColors.RacketFrame).replace('#', ''), 16);
  } catch (error) {
    return 0x8348ff;
  }
};

const isCharAlphanumeric = (char: string) => {
  const alphanumericRegex = /^[a-zA-Z0-9. ]*$/;
  return alphanumericRegex.test(char);
};

export const getHexColorByName = (colorName: string) => {
  // enum of "white", 'red', 'gold'
  switch (colorName) {
    case 'white':
      return 0xffffff;

    case 'red':
      return 0xba0d00;

    case 'gold':
      return 0xffd101;

    case 'black':
      return 0x000000;

    default:
      return 0xffffff;
  }
};

enum DefaultColors {
  RacketFrame = '#8348ff',
  BrandLogo = 'white',
  StickerText = '#ffffff',
  RacketGrip = 'black',
}

const validEmojis = [
  '😊',
  '😘',
  '😍',
  '😂',
  '😎',
  '🌈',
  '🔥',
  '🌊',
  '🍀',
  '👽',
  //   '💀',
  '👑',
  '✨',
  '🪄',
  '🤍',
];

export default Remix;
