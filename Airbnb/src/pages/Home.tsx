import React, { useEffect, useState } from 'react';
import ListingCard from '../components/ListingCard';
import ListingFilters from '../components/listings/ListingFilters';
import { listings } from '../services/api';
import { Listing } from '../types';

export default function Home() {
  const [listingsData, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const { data } = await listings.getAll();
        setListings(data);
      } catch (error) {
        console.error('Failed to fetch listings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (loading) {
    return (
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-8">
      <ListingFilters />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {listingsData.map(listing => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </div>
  );
}