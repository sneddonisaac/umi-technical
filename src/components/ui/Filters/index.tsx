// External
import React from 'react';
import { Sliders } from '@phosphor-icons/react';
import { track } from '@vercel/analytics';

// Types
import { Filters as FiltersType } from '../../../types/global.ts';

export default function Filters({
  filters,
  setFilters,
}: {
  filters: FiltersType;
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
}) {
  // Set state
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className="user__filters">
      <button aria-label="Filter" onClick={() => {
        setIsOpen(!isOpen);
        track('click', { userId: `user-filters-button` });
      }}>
        <Sliders size={20} />
      </button>
      <div className="user__filters-container" data-state={isOpen}>
        <div className="user__filters-container__item">
          <h3>Sort Order</h3>
          <select
            value={filters.sortOrder}
            onChange={(e) =>
              setFilters({ ...filters, sortOrder: e.target.value })
            }
          >
            <option>Ascending</option>
            <option>Descending</option>
          </select>
        </div>
      </div>
    </section>
  );
}
