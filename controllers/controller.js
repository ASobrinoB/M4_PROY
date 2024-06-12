//JSON para Thunder Client
//
//{
//    "hotel": "Dreams",
//    "room": "501",
//    "category": "Platinum",
//    "name": "Juan Perez",
//    "phone": "+56990022000",
//    "numberOfPassengers": "2",
//    "checkIn": "20241224",
//    "checkOut": "20241229",
//    "paid": "Cash"
//}

const Booking = require("../models/modelBooking");
const moment = require("moment");
const { v4: uuidv4 } = require("uuid");

let arrBooking = [];

// CU -> Como viajero, quiero hacer una reserva en el hotel "Hotel Paraíso" para el 15 de mayo de 2023
//       Necesito una habitación doble para dos adultos y un niño

exports.createBooking = async (req, res) => {
  const reservation = uuidv4();

  const {
    hotel,
    room,
    category,
    name,
    phone,
    numberOfPassengers,
    checkIn,
    checkOut,
    paid,
  } = req.body;

  const newBooking = new Booking(
    reservation,
    moment().format("YYYYMMDDHHMMSS"),
    hotel,
    room,
    category,
    name,
    phone,
    numberOfPassengers,
    checkIn,
    checkOut,
    paid
  );

  arrBooking.push(newBooking);

  res.json({ msg: "Reserva creada con éxito", data: newBooking });
};

// CU -> Como gerente del hotel, quiero ver una lista de todas las reservas para hoy
//       para poder planificar el trabajo del personal de limpieza y recepción
//
// CU -> Como gerente de una cadena de hoteles
//       quiero ver todas las reservas para el "Hotel Paraíso"
//       para el próximo mes
//
// CU -> Como gerente del hotel, quiero ver todas las reservas para la semana de Navidad
//       para poder planificar el personal y las actividades necesarias
//
exports.getBookingsBySome = async (req, res) => {
  const { checkin, hotel, fecha_inicio, fecha_fin } = req.query;

  if (checkin) {
    const bookingFiltered = arrBooking.filter(
      booking => booking.checkIn === checkin
    );

    if (bookingFiltered.length === 0) {
      return res
        .status(404)
        .json({ msg: "No se encontraron reservas con esta fecha de check-in" });
    }

    return res.json({
      msg: "Reservas encontradas con esta fecha de check-in",
      data: bookingFiltered,
    });
  } else if (hotel) {
    const bookingFiltered = arrBooking.filter(
      booking => booking.hotel === hotel
    );

    if (bookingFiltered.length === 0) {
      return res
        .status(404)
        .json({ msg: "No se encontraron reservas para el hotel" });
    }

    let month = moment().add(1, "months").format("MM");
    let year = moment().add(1, "months").format("YYYY");
    const dateFrom = `${year}${month}01`;
    const dateTo = `${year}${month}31`;

    const bookingFilteredByDate = bookingFiltered.filter(booking =>
      moment(booking.checkIn).isBetween(dateFrom, dateTo)
    );

    if (bookingFilteredByDate.length === 0) {
      return res.status(404).json({
        msg:
          "No se encontraron reservas para el hotel con check-in = próximo mes",
      });
    }

    return res.json({
      msg: "Reservas encontradas para el hotel con check-in = próximo mes",
      data: bookingFilteredByDate,
    });
  } else if (fecha_inicio && fecha_fin) {
    const bookingFiltered = booking.filter(booking =>
      moment(booking.checkIn).isBetween(fecha_inicio, fecha_fin)
    );

    if (bookingFiltered.length === 0) {
      return res.status(404).json({
        msg: "No se encontraron reservas para el rango de fechas",
      });
    }

    return res.json({
      msg: "Reservas encontradas para el rango de fechas",
      data: bookingFiltered,
    });
  }

  return res.json({
    msg: "Listado de reservas existentes (no hay filtros)",
    data: arrBooking,
  });
};

// CU -> Como recepcionista, necesito verificar los detalles de la reserva del huésped
//       que acaba de llegar al hotel. Su número de reserva es 12345

exports.getBookingByReservation = async (req, res) => {
  const reservation = req.params.reservation;
  const booking = arrBooking.find(
    booking => booking.reservation === reservation
  );

  if (!booking) {
    return res.status(404).json({ msg: "Reserva no encontrada" });
  }

  return res.json({ msg: "Reserva encontrada con éxito", data: booking });
};

// CU -> Como huésped, necesito cambiar mi reserva en el hotel "Hotel Paraíso"
//       Originalmente reservé una habitación doble, pero ahora necesito una suite familiar
//       Mi número de reserva es 12345

exports.updateBookingByReservation = async (req, res) => {
  const reservation = req.params.reservation;
  const bookingIndex = arrBooking.findIndex(
    booking => booking.reservation === reservation
  );

  if (bookingIndex === -1) {
    return res.status(404).json({ msg: "Reserva no encontrada" });
  }

  arrBooking[bookingIndex] = { ...arrBooking[bookingIndex], ...req.body };

  return res.json({
    msg: "Reserva modificada con éxito",
    data: arrBooking[bookingIndex],
  });
};

// CU -> Como viajero, tuve un cambio de planes y
//       ya no necesito la habitación que reservé en el hotel "Hotel Paraíso"
//       Mi número de reserva es 12345

exports.deleteBookingByReservation = async (req, res) => {
  const reservation = req.params.reservation;
  const bookingIndex = arrBooking.findIndex(
    booking => booking.reservation === reservation
  );

  if (bookingIndex === -1) {
    return res.status(404).json({ msg: "Reserva no encontrada" });
  }

  arrBooking.splice(bookingIndex, 1);

  return res.json({ msg: "Reserva eliminada con éxito" });
};
