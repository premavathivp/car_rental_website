const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  member: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
  vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'vehicle' },
  startDate: Date,
  endDate: Date,
  status: { type: String, enum: ['reserved', 'cancelled','pending'], default: 'reserved' }
});

module.exports = mongoose.model('Reservation', reservationSchema);
