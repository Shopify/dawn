import { render } from 'preact';
import Track from './Track.tsx';

const preactRoot = document.getElementById('track-root');

render(<Track />, preactRoot!);
