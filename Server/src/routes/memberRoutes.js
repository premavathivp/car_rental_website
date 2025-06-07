const express = require('express');
const {
  searchVehicles,
  reserveCar,
  checkoutCar
} = require('../controller/memberController');

const router = express.Router();

router.get('/vehicles', searchVehicles);
router.post('/reserve', reserveCar);
router.put('/checkout/:id', checkoutCar);

module.exports = router;
