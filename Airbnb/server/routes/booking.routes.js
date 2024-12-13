import express from 'express';
import { createBooking, getUserBookings } from '../controllers/booking.controller.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.use(auth);
router.post('/', createBooking);
router.get('/user', getUserBookings);

export default router;