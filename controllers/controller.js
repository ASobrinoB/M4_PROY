const Booking = require("../models/modelBooking");
const moment = require("moment");
const { v4: uuidv4 } = require("uuid");

let arrBooking = [];

// CU -> Como viajero, quiero hacer una reserva en el hotel Hotel Paraíso para el 15 de mayo de 2023
//       Necesito una habitación doble para dos adultos y un niño

exports.createBooking = async (req, res) =>
{
  const { hotel, room, category, name, phone, email, qttyGuest, specialFood, checkIn, checkOut, paid } = req.body;

  const newBooking = new Booking(uuidv4(), moment().format("YYYY-MM-DD HH:MM:SS"), hotel, parseInt(room), category, name, phone, email, parseInt(qttyGuest), specialFood, checkIn, checkOut, paid);

  arrBooking.push(newBooking);

  res.json({ msg: "Reserva creada con éxito", data: newBooking });

  arrBooking.forEach ( booking => console.log (booking) );
  console.log ('Total reservas -> ' + arrBooking.length);
}

// CU -> Como recepcionista, necesito verificar los detalles de la reserva del huésped
//       que acaba de llegar al hotel. Su número de reserva es 12345

exports.getBookingById = async (req, res) =>
{
  const id = req.params.id;
  const booking = arrBooking.find(booking => booking.id === id);

  if (!booking)
  {
    return res
    .status(404)
    .json({ msg: "Reserva no encontrada" });
  }

  arrBooking.forEach ( booking => console.log (booking) );
  console.log ('Total reservas -> ' + arrBooking.length);

  return res.json({ msg: "Reserva encontrada con éxito", data: booking });
};

// CU -> Como huésped, necesito cambiar mi reserva en el hotel Hotel Paraíso
//       Originalmente reservé una habitación doble, pero ahora necesito una suite familiar
//       Mi número de reserva es 12345

exports.updateBookingById = async (req, res) =>
{
  const id = req.params.id;
  const bookingIndex = arrBooking.findIndex(booking => booking.id === id);

  if (bookingIndex === -1)
  {
    return res
    .status(404)
    .json({ msg: "Reserva no encontrada" });
  }

  req.body.room      = parseInt(req.body.room);
  req.body.qttyGuest = parseInt(req.body.qttyGuest);

  arrBooking[bookingIndex] = { ...arrBooking[bookingIndex], ...req.body };

  arrBooking.forEach ( booking => console.log (booking) );
  console.log ('Total reservas -> ' + arrBooking.length);

  return res.json({ msg: "Reserva modificada con éxito", data: arrBooking[bookingIndex] });
};

// CU -> Como viajero, tuve un cambio de planes y
//       ya no necesito la habitación que reservé en el hotel Hotel Paraíso
//       Mi número de reserva es 12345

exports.deleteBookingById = async (req, res) =>
{
  const id = req.params.id;
  const bookingIndex = arrBooking.findIndex(booking => booking.id === id);

  if (bookingIndex === -1)
  {
    return res
    .status(404)
    .json({ msg: "Reserva no encontrada" });
  }

  arrBooking.splice(bookingIndex, 1);

  arrBooking.forEach ( booking => console.log (booking) );
  console.log ('Total reservas -> ' + arrBooking.length);

  return res.json({ msg: "Reserva eliminada con éxito" });
};

// CU01 -> Como gerente del hotel, quiero ver una lista de todas las reservas para hoy
//         para poder planificar el trabajo del personal de limpieza y recepción
//
// CU02 -> Como gerente de una cadena de hoteles
//         quiero ver todas las reservas para el Hotel Paraíso
//         para el próximo mes
//
// CU03 -> Como gerente del hotel, quiero ver todas las reservas para la semana de Navidad
//         para poder planificar el personal y las actividades necesarias
//
// CU04 -> Como gerente del hotel, quiero ver todas las reservas para nuestras suites de lujo
//         para el próximo mes para asegurarme de que todo esté en perfectas condiciones
//         para nuestros huéspedes VIP
//
// CU05 -> Como gerente del hotel, quiero ver todas las reservas que están pendientes de pago
//         para poder hacer un seguimiento con los clientes
//
// CU06 -> Como gerente del hotel, quiero ver todas las reservas para grupos de más de 5
//         personas para el próximo mes, para poder planificar las necesidades adicionales
//         de estos grupos grandes

exports.getBookingsBySome = async (req, res) =>
{
    const { fecha, hotel, fecha_inicio, fecha_fin, tipo_habitacion, estado, num_huespedes } = req.query;
  
    if (fecha) // se puede consultar cualquier fecha y no tan solo hoy
    {
      const bookingFiltered = arrBooking.filter(booking => booking.checkIn === fecha);
  
      if (bookingFiltered.length === 0)
      {
          return res
          .status(404)
          .json({ msg: "No se encontraron reservas para la fecha de llegada" });
      }
  
      return res.json({ msg: "Reservas encontradas para la fecha de llegada", data: bookingFiltered });
  
    } else
          if (hotel) // se puede consultar cualquier hotel
          {
             const bookingFiltered = arrBooking.filter(booking => booking.hotel === hotel);
  
             if (bookingFiltered.length === 0)
             {
                return res
                .status(404)
                .json({ msg: "No se encontraron reservas para el hotel" });
             }
  
             let month = moment().add(1, "months").format("MM");
             let year = moment().add(1, "months").format("YYYY");
  
             const dateFrom = `${year}-${month}-01`;
             const dateTo = `${year}-${month}-31`;
  
             const bookingFilteredByDateRange = bookingFiltered.filter(booking => moment(booking.checkIn).isBetween(dateFrom, dateTo, 'days', '[]'));
  
             if (bookingFilteredByDateRange.length === 0)
             {
                return res
                .status(404)
                .json({ msg: "No se encontraron reservas para el hotel con llegada el mes próximo" });
             }
  
             return res.json({ msg: "Reservas encontradas para el hotel con llegada el mes próximo", data: bookingFilteredByDateRange });
  
          } else
                if (fecha_inicio && fecha_fin) // se puede consultar un rango de fechas y no tan solo la semana de navidada
                {
                   const bookingFiltered = booking.filter(booking => moment(booking.checkIn).isBetween(fecha_inicio, fecha_fin));
  
                   if (bookingFiltered.length === 0)
                   {
                      return res
                      .status(404)
                      .json({ msg: "No se encontraron reservas para llegada en el rango de fechas" });
                   }
  
                   return res.json({ msg: "Reservas encontradas para llegada en el rango de fechas", data: bookingFiltered });
  
                } else
                      if (tipo_habitacion) // se puede consultar cualquier tipo de habitacion y no tan solo VIP
                      {
                         const bookingFiltered = arrBooking.filter(booking => booking.category === tipo_habitacion);
          
                         if (bookingFiltered.length === 0)
                         {
                            return res
                            .status(404)
                            .json({ msg: "No se encontraron reservas para el tipo de habitación" });
                         }
          
                         let month = moment().add(1, "months").format("MM");
                         let year = moment().add(1, "months").format("YYYY");
          
                         const dateFrom = `${year}-${month}-01`;
                         const dateTo = `${year}-${month}-31`;

                         console.log (dateFrom, dateTo);
          
                         const bookingFilteredByDateRange = bookingFiltered.filter(booking => moment(booking.checkIn).isBetween(dateFrom, dateTo, 'days', '[]'));
          
                         if (bookingFilteredByDateRange.length === 0)
                         {
                            return res
                            .status(404)
                            .json({ msg: "No se encontraron reservas para el tipo de habitacion con llegada el mes próximo" });
                         }
  
                         return res.json({ msg: "Reservas encontradas para el tipo de habitación con llegada el mes próximo", data: bookingFilteredByDateRange });
  
                        } else
                              if (estado) // se puede consultar cualquier medio de pago y no tan solo los estado = Pending
                              {
                                 const bookingFiltered = arrBooking.filter(booking => booking.paid === estado);
            
                                 if (bookingFiltered.length === 0)
                                 {
                                    return res
                                    .status(404)
                                    .json({ msg: "No se encontraron reservas para el estado solicitado" });
                                 }
  
                                 return res.json({ msg: "Reservas encontradas para el estado solicitado", data: bookingFiltered });
  
                              } else
                                    if (num_huespedes) 
                                    {
                                       const bookingFiltered = arrBooking.filter(booking => booking.qttyGuest >= num_huespedes);
                    
                                       if (bookingFiltered.length === 0)
                                       {
                                          return res
                                          .status(404)
                                          .json({ msg: "No se encontraron reservas por cantidad mayor o igual de huespedes" });
                                       }
                    
                                       let month = moment().add(1, "months").format("MM");
                                       let year = moment().add(1, "months").format("YYYY");
                    
                                       const dateFrom = `${year}-${month}-01`;
                                       const dateTo = `${year}-${month}-31`;
                    
                                       const bookingFilteredByDateRange = bookingFiltered.filter(booking => moment(booking.checkIn).isBetween(dateFrom, dateTo, 'days', '[]'));
                    
                                       if (bookingFilteredByDateRange.length === 0)
                                       {
                                          return res
                                          .status(404)
                                          .json({ msg: "No se encontraron reservas por cantidad mayor o igual de huespedes para el mes próximo" });
                                       }
              
                                       return res.json({ msg: "Reservas encontradas por cantidad mayor o igual de huespedes para el mes próximo", data: bookingFilteredByDateRange });
            
                                  };
  
                                  return res.json({ msg: "Listado de reservas existentes (sin poner un filtro)", data: arrBooking });
}