const express = require('express');
const router = express.Router();
const reviewController = require('../controller/reviewController');

// POST /api/reviews - add review
router.post('/', reviewController.addReview);

// GET /api/reviews/:carId - get reviews for a car
router.get('/:vehicleId', reviewController.getReviewsByVehicle);


module.exports = router;
