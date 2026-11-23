import { describe, it, expect } from 'vitest';
import { getTopics } from './api';
import { topics } from './data/topics';

describe('getTopics', () => {
  it('filters by search query', async () => {
    const result = await getTopics('pdf', []);
    expect(result.map(t => t.title)).toEqual(['Publish to PDF']);
  });

  it('treats no selected products as all products', async () => {
    const result = await getTopics('', []);
    expect(result).toHaveLength(topics.length);
  });

  it('filters by product', async () => {
    const result = await getTopics('', ['XDocs']);
    expect(result.every(t => t.product === 'XDocs')).toBe(true);
  });

  it('filters by the third product', async () => {
    const result = await getTopics('', ['XReview']);
    expect(result.map(t => t.title)).toEqual([
      'Configure review workflow',
      'Approve a review',
    ]);
  });
});