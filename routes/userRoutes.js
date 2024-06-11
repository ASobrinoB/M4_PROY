const express = require('express');
const usuarioController = require('../controllers/controller');

const router = express.Router();

router.post('/reservas', usuarioController.createBooking);
router.get('/reservas/:checkIn', usuarioController.getBookingsByDate);
router.get('/reservas/:reservation', usuarioController.getBookingByReservation);
router.put('/reservas/:reservation', usuarioController.updateBookingByReservation);
router.delete('/reservas/:reservation', usuarioController.deleteBookingByReservation);

//router.get("/reservas/?hotel=", usuarioController.getBookingsByHotel);
//router.get("/reservas/?checkIn=&checkOut=", usuarioController.getBookingsByPeriod);
//router.get("/reservas/?category=", usuarioController.getBookingsByCategory);
//router.get("/reservas/?paid=", usuarioController.getBookingsByPaid);
//router.get("/reservas/?guest=", usuarioController.getBookingsByGuest);

module.exports = router

// http:localhost:3000/api/reservas