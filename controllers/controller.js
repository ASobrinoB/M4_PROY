const Booking = require('../models/modelBooking');
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');

let arrBooking = [];
 
exports.createBooking = async (req, res) => {
    const reservation = uuidv4();

    const { hotel, room, category, name, phone, family, checkIn, checkOut, paid } = req.body;
    const newBooking = new Booking(reservation, moment(), hotel, room, category, name, phone, family, checkIn, checkOut, paid);
    
    arrBooking.push(newBooking);
 
    res.json({
        msg: "Reserva creada con éxito",
        data: newBooking,
    });
}

exports.getBookingsByCheckIn = async (req, res) => {
    const { checkin } = req.query; 
 
    if (checkin){
        const bookingFiltered = arrBooking.filter(booking => booking.checkIn == checkin);

        if (bookingFiltered.length === 0) {
            return res.status(404).json({ msg: "No se encontraron reservas para la fecha" });
        }

        return res.json({
            msg: "Reservas encontradas con éxito",
            data: bookingFiltered,
        });
    };

    return res.json({
        msg: "Reservas existentes",
        data: arrBooking,
    });
}

exports.getBookingByReservation = async (req, res) => {
        const reservation = req.params.reservation;
        const booking = arrBooking.find(booking => booking.reservation === reservation)
    
        if (!booking) {
            return res.status(404).json({ msg: "Reserva no encontrada" });
        }
    
        return res.json({
            msg: "Reserva encontrada con éxito",
            data: booking,
        })
}
    
exports.updateBookingByReservation = async (req, res) => {
        const reservation = req.params.reservation;
        const bookingIndex = arrBooking.findIndex(booking => booking.reservation === reservation)
    
        if (bookingIndex === -1) {
            return res.status(404).json({ msg: "Reserva no encontrada" });
        }

        arrBooking[bookingIndex] = { ...arrBooking[bookingIndex], ...req.body };
         
        return res.json({
            msg: "Reserva modificada con éxito",
            data: arrBooking[bookingIndex]
        })
}

exports.deleteBookingByReservation = async (req, res) => {
    const reservation = req.params.reservation;
    const bookingIndex = arrBooking.findIndex(booking => booking.reservation === reservation)

    if (bookingIndex === -1) {
        return res.status(404).json({ msg: "Reserva no encontrada" });
    }

    arrBooking.splice(bookingIndex, 1);

    return res.json({ msg: "Reserva eliminada con éxito" });
}
    