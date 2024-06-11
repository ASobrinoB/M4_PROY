const express = require('express');
const usuarioController = require('../controllers/controller');

const router = express.Router();

router.post("/reservas", usuarioController.createBooking);
router.put("/reservas/:id", usuarioController.updateBookingById);
router.delete("/reservas/:id", usuarioController.deleteBookingById);

router.get("/reservas/?checkIn=", usuarioController.getBookingsByCkeckIn);
router.get("/reservas/:id", usuarioController.getBookingById);
router.get("/reservas/?hotel=", usuarioController.getBookingsByHotel);
router.get("/reservas/?checkIn=&checkOut=", usuarioController.getBookingsByPeriod);
router.get("/reservas/?category=", usuarioController.getBookingsByCategory);
router.get("/reservas/?pago=", usuarioController.getBookingsByPaid);
router.get("/reservas/?guest=", usuarioController.getBookingsByGuest);

module.exports = router

// http:localhost:3000/api/reservas