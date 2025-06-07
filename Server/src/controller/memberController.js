const Vehicle = require('../model/Vehicle');
const Reservation = require('../model/Reservation');

// Search all available cars

exports.searchVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find({ availability: true });
    res.status(200).json(vehicles);
    console.log("Vehicles found:", vehicles);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch vehicles' });
  }
};

// Reserve a car
exports.reserveCar = async (req, res) => {
  try {
    const { memberId, vehicleId, startDate, endDate } = req.body;

    const reservation = new Reservation({
      member: memberId,
      vehicle: vehicleId,
      startDate,
      endDate,
      status: 'reserved'
    });

    await reservation.save();

    // Mark car as unavailable
    await Vehicle.findByIdAndUpdate(vehicleId, { available: false });

    res.status(201).json(reservation);
  } catch (err) {
    res.status(500).json({ error: 'Reservation failed' });
  }
};

// Checkout (complete reservation)
exports.checkoutCar = async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { status: 'completed' }, 
      { new: true }
    );
    res.status(200).json(reservation);
  } catch (error) {
    console.error("Checkout error:", error); 
    res.status(500).json({ error: 'Checkout failed' });
  }
};
