const express = require('express');
const usuarioController = require('../controllers/controller');

const router = express.Router();

router.post   ('/reservas', usuarioController.createBooking);
router.get    ('/reservas', usuarioController.getBookingsBySome);
router.get    ('/reservas/:id', usuarioController.getBookingById);
router.put    ('/reservas/:id', usuarioController.updateBookingById);
router.delete ('/reservas/:id', usuarioController.deleteBookingById);

module.exports = router