import React from 'react';
import { Link } from 'react-router-dom';
import { Listing } from '../types';

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link to={`/listings/${listing.id}`} className="group">
      <div className="flex flex-col gap-2">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <img
            className="object-cover w-full h-full group-hover:scale-110 transition"
            src={listing.images[0]}
            alt={listing.title}
          />
        </div>
        <div className="font-semibold text-lg">{listing.location}</div>
        <div className="font-light text-neutral-500">{listing.type}</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">${listing.price}</div>
          <div className="font-light">night</div>
        </div>
      </div>
    </Link>
  );
}