import Booking from '../models/booking.model.js';

export const createBooking = async (req, res) => {
  try {
    const booking = new Booking({
      ...req.body,
      user: req.userId,
    });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.userId })
      .populate('listing')
      .sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};