import { topics } from './data/topics';
import type { Product, Topic } from './types';

export function getTopics(
  query: string,
  products: Product[],
  signal?: AbortSignal
): Promise<Topic[]> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      const q = query.trim().toLowerCase();
      const result = topics.filter(topic =>
        (products.length === 0 || products.includes(topic.product)) &&
        (q === '' || topic.title.toLowerCase().includes(q))
      );
      resolve(result);
    }, 200);

    signal?.addEventListener('abort', () => {
      clearTimeout(timer);
      reject(new DOMException('Aborted', 'AbortError'));
    });
  });
}