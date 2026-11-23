import { 
  describe, 
  it, 
  expect
} from 'vitest';
import './doc-callout';
import type { DocCallout } from './doc-callout';

describe('doc-callout', () => {
  it('fires dismissed when the button is clicked', async () => {
    const el = document.createElement('doc-callout') as DocCallout;
    document.body.appendChild(el);
    await el.updateComplete;

    let fired = false;
    el.addEventListener('dismissed', () => { fired = true; });
    el.shadowRoot!.querySelector('button')!.click();

    expect(fired).toBe(true);
  });
});