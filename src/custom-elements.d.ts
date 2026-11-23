import type { DetailedHTMLProps, HTMLAttributes } from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'doc-callout': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        type?: 'note' | 'warning';
      };
    }
  }
}