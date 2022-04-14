import { useState } from 'react';
import type { Category as CategoryType } from '../../types/categories';
import Item from '../Item';

import './Category.css';

type Props = CategoryType;

// style={{ backgroundColor: color }}
export default function Category ({ title, color, icon, items }: Props) {
  const [hasLinksOpen, setHasLinksOpen] = useState(false);

  return (
    <div className="category--container">
      <div
        className="category"
        onClick={() => setHasLinksOpen(!hasLinksOpen)}
      >
        <span className="category--icon">
          <i className={`fa-solid ${icon}`}></i>
        </span>
        <h2>{title}</h2>
      </div>
      <div className={`category--links ${hasLinksOpen ? 'category--links__open' : ''}`}>
        {items.map((item) => (
          <Item key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
