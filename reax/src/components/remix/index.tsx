import { render } from 'preact';
import Remix from './Remix.tsx';

const preactRoot = document.getElementById('remix-modal');

// const threeModalPath = preactRoot?.dataset['3dModelPath'] || null;

render(<Remix />, preactRoot!);
