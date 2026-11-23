import { useState } from 'react';
import { useTopics } from './hooks/useTopics';
import { SearchBar } from './components/SearchBar';
import { FacetFilter } from './components/FacetFilter';
import { ResultsList } from './components/ResultsList';
import { TopicPanel } from './components/TopicPanel';
import type { Product } from './types';

export default function App() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { data, loading, error } = useTopics(query, products);

  const countText = `${data.length} ${data.length === 1 ? 'result' : 'results'}`;
  const selected = data.find(t => t.id === selectedId);
  
  return (
    <>
      <a className="skip-link" href="#detail">Skip to topic detail</a>
      <main className="app">
        <header className="app-header">
          <h1>Doc Finder</h1>
        </header>
  
        <aside className="sidebar">
          <SearchBar value={query} onChange={setQuery} />
          <FacetFilter selected={products} onChange={setProducts} />
        </aside>
  
        <section className="results" aria-label="Results">
        <p className="status" role="status" aria-live="polite">
          {loading ? 'Loading…' : countText}
        </p>
          {error && <p role="alert" className="error">{error}</p>}
          <ResultsList topics={data} selectedId={selectedId} onSelect={setSelectedId} />
        </section>
  
        <section className="detail" id="detail" aria-label="Topic detail">
          <TopicPanel topic={selected} />
        </section>
      </main>
    </>
  ); 
}