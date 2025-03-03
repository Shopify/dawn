import { render } from 'preact';
import Stringing from './Stringing.tsx';

const preactRoot = document.getElementById('stringing-root');

const stringingCollectionId = preactRoot?.dataset['stringingCollectionId'] || null;

render(<Stringing stringingCollectionId={stringingCollectionId} />, preactRoot!);
