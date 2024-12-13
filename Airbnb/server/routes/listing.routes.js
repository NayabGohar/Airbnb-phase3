import express from 'express';
import { getListings, getListing, createListing } from '../controllers/listing.controller.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getListings);
router.get('/:id', getListing);
router.post('/', auth, createListing);

export default router;