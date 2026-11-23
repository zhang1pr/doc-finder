import type { Topic } from '../types';

type Props = {
  topics: Topic[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export function ResultsList({ 
  topics, 
  selectedId, 
  onSelect 
}: Props) {
  if (topics.length === 0) {
    return <p>No topics match your search.</p>;
  }

  return (
    <ul>
      {topics.map(t => (
        <li key={t.id}>
          <button
            type="button"
            aria-current={t.id === selectedId ? 'true' : undefined}
            onClick={() => onSelect(t.id)}
          >
            {t.title} <small>({t.product})</small>
          </button>
        </li>
      ))}
    </ul>
  );
}