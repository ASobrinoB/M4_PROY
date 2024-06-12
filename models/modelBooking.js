class Booking
{
    constructor(reservation, timeStamp, hotel, room, category, name, phone, family, checkIn, checkOut, paid)
    {
        this.reservation = reservation;
        this.timeStamp = timeStamp;// fecha de la reserva
        this.hotel = hotel;
        this.room = room;
        this.category = category;  // Standard, Gold, Platinum, Esmeralda (VIP)
        this.name = name;          // nombre del pasajero
        this.phone = phone;        // telefono del pasajero
        this.family = family;      // cantidad de personas
        this.checkIn = checkIn;    // fecha de llegada
        this.checkOut = checkOut;  // fecha de salida
        this.paid = paid;          // null -> sólo reservado
    }                              // Credit Card
                                   // Debit Card
                                   // Cash
                                   // Electronic Pay
                                   // Refund
                                   // Purchase Order
                                   // Gift Card
                                   // Other
                                   // Promotion
};

module.exports = Booking;