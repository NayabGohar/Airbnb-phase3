import React from 'react';

export default function ListingFilters() {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center gap-4 overflow-x-auto pb-4">
        {['All', 'Beach', 'Mountain', 'City', 'Countryside', 'Lake'].map((filter) => (
          <button
            key={filter}
            className="px-4 py-2 rounded-full border hover:border-rose-500 hover:text-rose-500 transition-colors"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}