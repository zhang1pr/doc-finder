import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { renderXml } from './renderXml';

describe('renderXml', () => {
  it('renders a note as a doc-callout', () => {
    const { container } = render(
      <div>{renderXml('<topic><p>Hi</p><note>Careful</note></topic>')}</div>
    );
    expect(container.querySelector('doc-callout')?.textContent).toBe('Careful');
  });

  it('shows an error for malformed XML', () => {
    const { getByRole } = render(<div>{renderXml('<topic><p>oops</topic>')}</div>);
    expect(getByRole('alert')).toBeTruthy();
  });
});