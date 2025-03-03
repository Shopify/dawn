import { render } from 'preact';
import SPlus from './SPlus.tsx';
import type { TProps } from './types.ts';

const sPlusRoot = document.getElementById('splus-root');

const sPlusReferenceIds = sPlusRoot?.dataset.splusReferenceIds;

const sPlusReferenceIdsParsed: TProps['referenceIds'] = JSON.parse(sPlusReferenceIds!);

try {
  if (
    sPlusRoot &&
    sPlusReferenceIds != null &&
    sPlusReferenceIdsParsed != null &&
    'contents' in sPlusReferenceIdsParsed &&
    sPlusReferenceIdsParsed.contents.length > 0
  ) {
    render(<SPlus referenceIds={JSON.parse(sPlusReferenceIds)} />, sPlusRoot!);
  }
} catch (error) {
  console.error(error);
}
