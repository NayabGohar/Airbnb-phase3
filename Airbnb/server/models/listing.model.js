import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: [{
    type: String,
    required: true,
  }],
  type: {
    type: String,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  amenities: [{
    type: String,
  }],
  host: {
    name: String,
    image: String,
  },
}, { timestamps: true });

export default mongoose.model('Listing', listingSchema);