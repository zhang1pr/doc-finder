import type { Product } from '../types';

const PRODUCTS: Product[] = ['XDocs', 'XDelivery', 'XReview'];

type Props = {
  selected: Product[];
  onChange: (next: Product[]) => void;
};

export function FacetFilter({ selected, onChange }: Props) {
  const toggle = (p: Product) =>
    onChange(selected.includes(p) 
      ? 
      selected.filter(x => x !== p) 
      : 
      [...selected, p]
    );

  return (
    <fieldset>
      <legend>Product</legend>
      {
        PRODUCTS.map(p => (
          <div key={p}>
            <input
              id={`facet-${p}`}
              type="checkbox"
              checked={selected.includes(p)}
              onChange={() => toggle(p)}
            />
            <label htmlFor={`facet-${p}`}>{p}</label>
          </div>
        ))
      }
    </fieldset>
  );
}