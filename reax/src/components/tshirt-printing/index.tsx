import { render } from 'preact';
import TShirtPrinting from './TShirtPrinting.tsx';

const preactRoot = document.getElementById('tshirt-printing-modal');

render(<TShirtPrinting />, preactRoot!);
