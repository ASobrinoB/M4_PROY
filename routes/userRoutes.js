const express = require('express');
const usuarioController = require('../controllers/controller');

const router = express.Router();

router.post   ('/reservas', usuarioController.createBooking);
router.get    ('/reservas', usuarioController.getBookingsByCheckIn);
router.get    ('/reservas/:reservation', usuarioController.getBookingByReservation);
router.put    ('/reservas/:reservation', usuarioController.updateBookingByReservation);
router.delete ('/reservas/:reservation', usuarioController.deleteBookingByReservation);

module.exports = router