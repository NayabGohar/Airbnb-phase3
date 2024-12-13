export interface Listing {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  images: string[];
  type: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  host: {
    name: string;
    image: string;
  };
}

export interface BookingFormData {
  checkIn: string;
  checkOut: string;
  guests: number;
}