type Props = { 
  value: string; 
  onChange: (value: string) => void 
};

export function SearchBar({ 
  value, 
  onChange 
}: Props) {
  return (
    <div>
      <label htmlFor="search">Search topics</label>
      <input
        id="search"
        type="search"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}