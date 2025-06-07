const Review = require('../model/Review');

// Add a review
exports.addReview = async (req, res) => {
  try {
    const { vehicleId, memberId, rating, comment } = req.body;

    if (!vehicleId || !memberId || !rating) {
      return res.status(400).json({ message: 'vehiclId, memberId and rating are required' });
    }

    const review = new Review({
      vehicleId,
      memberId,
      rating,
      comment,
    });

    await review.save();
    res.status(201).json({ message: 'Review added successfully', review });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all reviews for a car
exports.getReviewsByVehicle = async (req, res) => {
  try {
    const reviews = await Review.find({ vehicleId: req.params.vehicleId });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

