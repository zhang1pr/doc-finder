import { useEffect, useState } from 'react';
import { getTopics } from '../api';
import type { Product, Topic } from '../types';

export function useTopics(query: string, products: Product[]) {
  const [data, setData] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      getTopics(query, products, controller.signal)
        .then(result => {
          setData(result);
          setLoading(false);
        })
        .catch(err => {
          if (err.name === 'AbortError') return;
          setError('Could not load topics.');
          setLoading(false);
        });
    }, 250);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query, products]);

  return { data, loading, error };
}