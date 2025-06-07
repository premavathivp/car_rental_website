const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  pricePerDay: Number,
  availability: { type: Boolean, default: true },
  dealer: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
