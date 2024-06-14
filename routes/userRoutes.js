const express = require("express");
const usuarioController = require("../controllers/controller");
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Booking:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  description: numero de la reserva
 *              timeStamp:
 *                  type: date-time 
 *                  description: fecha de creacion
 *              hotel:
 *                  type: string
 *                  description: nombre del hotel
 *              room:
 *                  type: integer
 *                  description: numero de habitacion 
 *              category:
 *                  type: string
 *                  description: Standard Gold Platinum VIP
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
 *              specialFood:
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
 *              hotel: "Enjoy Santiago"
 *              room: 702
 *              category: "VIP"
 *              name: "Juan Perez Gonzalez"
 *              phone: "+56990022000"
 *              email: "telemensajes@hotmail.com"
 *              qttyGuest: 3
 *              specialFood: "Kosher"
 *              checkIn: "2024-12-20"
 *              checkOut: "2024-12-31"
 *              paid: "Cash"
 */
// create a booking
/**
 * @swagger
 * /api/reservas:
 *  post:
 *      summary: create a booking
 *      tags: [Booking]
 *      requestBody:
 *          required: true
 *          content:
 *              aplication/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Booking'
 *      responses:
 *          200:
 *              description: Reserva creada con exito
 */
router.post ("/reservas", usuarioController.createBooking);

// get all booking by criteria
/**
 * @swagger
 * /api/reservas:
 *  get:
 *      summary: get all booking by criteria
 *      tags: [Booking]
 *      responses:
 *          200:
 *              description: Reservas encontradas
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Booking'
 */
router.get ("/reservas", usuarioController.getBookingsBySome);

// get a booking by id
/**
 * @swagger
 * /api/reservas/{id}:
 *  get:
 *      summary: get a booking by id
 *      tags: [Booking]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the booking id
 *      responses:
 *          200:
 *              description: Reserva encontrada con exito
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Booking'
 *          404:
 *              description: Reserva no encontrada
 */
router.get ("/reservas/:id", usuarioController.getBookingById);

// update a booking by id
/**
 * @swagger
 * /api/reservas/{id}:
 *  put:
 *      summary: update a booking by id
 *      tags: [Booking]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the booking id
 *      requestBody:
 *          required: true
 *          content:
 *              aplication/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Booking'
 *      responses:
 *          200:
 *              description: Reserva modificada con exito
 *          404:
 *              description: Reserva no encontrada
 */
router.put ("/reservas/:id", usuarioController.updateBookingById);

// delete a booking by id
/**
 * @swagger
 * /api/reservas/{id}:
 *  delete:
 *      summary: delete a booking by id
 *      tags: [Booking]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the booking id
 *      responses:
 *          200:
 *              description: Reserva eliminada con exito
 *          404:
 *              description: Reserva no encontrada
 */
router.delete ("/reservas/:id", usuarioController.deleteBookingById);

module.exports = router;