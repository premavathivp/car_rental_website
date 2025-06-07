const express = require('express');
const { addVehicle, editVehicle, deleteVehicle, getAllMembers, deleteMember } = require('../controller/adminController');

const router = express.Router();

router.post('/vehicle', addVehicle);
router.put('/vehicle/:id', editVehicle);
router.delete('/vehicle/:id', deleteVehicle);
router.get('/members', getAllMembers);
router.delete('/member/:id', deleteMember);

module.exports = router;
