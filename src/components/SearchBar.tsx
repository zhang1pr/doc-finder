import { useRef } from 'react';

type Props = { 
  value: string; 
  onChange: (value: string) => void 
};

export function SearchBar({ 
  value, 
  onChange 
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const clear = () => {
    onChange('');
    inputRef.current?.focus();
  };

  return (
    <div>
      <label htmlFor="search">Search topics</label>
      <div className="search-field">
        <input
          ref={inputRef}
          id="search"
          type="search"
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Escape' && value) {
              e.preventDefault();
              clear();
            }
          }}
        />
        {value && (
          <button
            type="button"
            className="search-clear"
            aria-label="Clear search"
            onClick={clear}
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}