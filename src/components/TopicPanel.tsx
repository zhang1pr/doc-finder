import { useEffect, useRef } from 'react';
import { renderXml } from '../renderXml';
import type { Topic } from '../types';

export function TopicPanel({ topic }: { topic?: Topic }) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, [topic?.id]);

  if (!topic) return <p>Select a topic.</p>;

  return (
    <article>
      <h2 ref={headingRef} tabIndex={-1}>{topic.title}</h2>
      {renderXml(topic.bodyXml)}
    </article>
  );
}