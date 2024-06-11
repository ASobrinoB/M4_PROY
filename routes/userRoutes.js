const express = require('express');
const usuarioController = require('../controllers/controller');

const router = express.Router();

router.post('/usuario', usuarioController.createUser);
router.get('/usuario', usuarioController.getUsers);
router.get('/usuario/:id', usuarioController.getUserById);
router.put('/usuario/:id', usuarioController.updateUserById);
router.delete('/usuario/:id', usuarioController.deleteUserById);

//router.post("/reservas", usuarioController.createBooking);
//router.get("/reservas", usuarioController.getBookingCkeckIn);
//router.get("/reservas/:id", usuarioController.getBookingById);
//router.put("/reservas/:id", usuarioController.updateBookingById);
//router.delete("/reservas/:id", usuarioController.deleteBookingById);
//router.get("/reservas/?hotel=", usuarioController.getBookingByHotel);
//router.get("/reservas/?checkIn=&checkOut=", usuarioController.getBookingByPeriod);
//router.get("/reservas/?category=", usuarioController.getBookingByCategory);
//router.get("/reservas/?pago", usuarioController.getBookingByPaid);
//router.get("/reservas/?guest", usuarioController.getBookingByGuest);

module.exports = router

// http:localhost:3000/api/reservas