const express = require('express');
const usuarioController = require('../controllers/controller');
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      booking:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  description: numero de reserva 
 *              timeStamp:
 *                  type: date-time
 *                  description: fecha de creacion en formato YYYY-MM-DD HH:MM:SS
 *              hotel:
 *                  type: string
 *                  description: nombre del hotel
 *              room:
 *                  type: integer
 *                  description: numero de habitacion 
 *              category:
 *                  type: string
 *                  description: Standard, Gold, Platinum, VIP
 *              name:
 *                  type: string
 *                  description: nombre del pasajero
 *              phone:
 *                  type: string
 *                  description: telefono del pasajero 
 *              email:
 *                  type: string
 *                  description: correo del pasajero 
 *              qttyGuest:
 *                  type: integer
 *                  description: cantidad de personas
 +              specialFood:
 *                  type: string
 *                  description: comida especial
 *              checkIn:
 *                  type: date-time
 *                  description: fecha de llegada en formato YYYY-MM-DD
 *              checkOut:
 *                  type: date-time
 *                  description: fecha de salida en formato YYYY-MM-DD
 *              paid:
 *                  type: string
 *                  description: Pending (no pagada), Credit-Card, Debit-Card, Cash, Electronic-Pay, Refund, Purchase-Order, Gift-Card, Other, Promotion
 *          required:
 *              - hotel
 *              - room
 *              - category
 *              - name
 *              - phone
 *              - email
 *              - qttyGuest
 *              - specialFood
 *              - checkIn
 *              - checkOut
 *              - paid
 *          example:
 *              id: cdc9cd34-c1b2-4b72-b4b6-bff30e0308bd
 *              timeStamp: 2024-06-13 16:58:00
 *              hotel: Enjoy Santiago
 *              room: 702
 *              category: VIP
 *              name: Juan Perez Gonzalez
 *              phone: +56990022000
 *              email: telemensajes@hotmail.com
 *              qttyGuest: 3
 *              specialFood: Kosher
 *              checkIn: 2024-12-20
 *              checkOut: 2024-12-31
 *              paid: Cash
 */
router.post   ('/reservas', usuarioController.createBooking);
router.get    ('/reservas', usuarioController.getBookingsBySome);
router.get    ('/reservas/:id', usuarioController.getBookingById);
router.put    ('/reservas/:id', usuarioController.updateBookingById);
router.delete ('/reservas/:id', usuarioController.deleteBookingById);

module.exports = router