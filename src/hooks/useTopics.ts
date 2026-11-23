import { 
  useEffect, 
  useState 
} from 'react';
import { getTopics } from '../api';
import type { 
  Product, 
  Topic 
} from '../types';

type State = { 
  key: string; 
  data: Topic[]; 
  error: string | null 
};

export function useTopics(
  query: string, 
  products: Product[]
) {
  const key = JSON.stringify([query, products]);
  const [state, setState] = useState<State>({ 
    key: '',
    data: [], 
    error: null
  });

  useEffect(() => {
    const controller = new AbortController();

    const timer = setTimeout(() => {
      getTopics(query, products, controller.signal)
        .then(data => setState({ 
          key, 
          data, 
          error: null 
        }))
        .catch(err => {
          if (err.name === 'AbortError') return;
          setState({ 
            key, 
            data: [], 
            error: 'Could not load topics.' 
          });
        });
    }, 200);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [key, query, products]);

  const loading = state.key !== key;

  return {
    data: state.data,
    loading,
    error: loading ? null : state.error,
  };
}