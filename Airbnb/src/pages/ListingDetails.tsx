import React from 'react';
import { useParams } from 'react-router-dom';
import { Listing } from '../types';

// Mock data - will be replaced with API calls later
const LISTING: Listing = {
  id: '1',
  title: 'Luxury Beach Villa',
  description: 'Beautiful villa with ocean views',
  location: 'Malibu, California',
  price: 550,
  images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80'],
  type: 'Entire villa',
  guests: 8,
  bedrooms: 4,
  bathrooms: 3,
  amenities: ['Pool', 'Beach access', 'WiFi', 'Kitchen'],
  host: {
    name: 'John Doe',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }
};

export default function ListingDetails() {
  const { id } = useParams();

  return (
    <div className="pt-24 pb-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">{LISTING.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={LISTING.images[0]}
              alt={LISTING.title}
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">{LISTING.type}</h2>
                <p className="text-gray-500">{LISTING.location}</p>
              </div>
              <div className="text-2xl font-bold">${LISTING.price}<span className="text-base font-normal">/night</span></div>
            </div>
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{LISTING.description}</p>
            </div>
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2">Details</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="font-semibold">{LISTING.guests}</p>
                  <p className="text-gray-500">Guests</p>
                </div>
                <div>
                  <p className="font-semibold">{LISTING.bedrooms}</p>
                  <p className="text-gray-500">Bedrooms</p>
                </div>
                <div>
                  <p className="font-semibold">{LISTING.bathrooms}</p>
                  <p className="text-gray-500">Bathrooms</p>
                </div>
              </div>
            </div>
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2">Amenities</h3>
              <div className="grid grid-cols-2 gap-2">
                {LISTING.amenities.map((amenity, index) => (
                  <div key={index} className="text-gray-600">{amenity}</div>
                ))}
              </div>
            </div>
            <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-semibold hover:bg-rose-600 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}