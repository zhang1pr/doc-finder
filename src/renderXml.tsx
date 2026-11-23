import { Fragment } from 'react';
import type { ReactNode } from 'react';
import './components/doc-callout';

function renderNode(node: Node, key: number): ReactNode {
  if (node.nodeType === Node.TEXT_NODE) return node.textContent;
  if (node.nodeType !== Node.ELEMENT_NODE) return null;

  const el = node as Element;
  const children = Array.from(el.childNodes).map((c, i) => renderNode(c, i));

  switch (el.nodeName) {
    case 'topic':
      return <Fragment key={key}>{children}</Fragment>;
    case 'title':
      return null;
    case 'p':
      return <p key={key}>{children}</p>;
    case 'note':
      return <doc-callout key={key} type="note">{children}</doc-callout>;
    default:
      return <span key={key}>{children}</span>;
  }
}

export function renderXml(xml: string): ReactNode {
  const doc = new DOMParser().parseFromString(xml, 'application/xml');
  if (doc.querySelector('parsererror')) {
    return <p role="alert">Could not display this topic.</p>;
  }
  return renderNode(doc.documentElement, 0);
}