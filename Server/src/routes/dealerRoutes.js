const express = require('express');
const { dealerAddVehicle, dealerEditVehicle, dealerDeleteVehicle, getDealerVehicles } = require('../controller/dealerController');

const router = express.Router();

router.post('/vehicle', dealerAddVehicle);
router.delete('/vehicle/:id', dealerDeleteVehicle);
router.get('/vehicles/:dealerId', getDealerVehicles);

module.exports = router;
