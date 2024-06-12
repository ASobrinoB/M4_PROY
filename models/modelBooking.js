class Booking
{
    constructor(reservation, timeStamp, hotel, room, category, name, phone, numberOfPassengers, checkIn, checkOut, paid)
    {
        this.reservation = reservation;
        this.timeStamp = timeStamp;
        this.hotel = hotel;
        this.room = room;
        this.category = category;  // Standard, Gold, Platinum, Esmeralda (VIP)
        this.name = name;
        this.phone = phone;
        this.numberOfPassengers = numberOfPassengers;
        this.checkIn = checkIn;    // fecha de llegada
        this.checkOut = checkOut;  // fecha de salida
        this.paid = paid;          // null (sin pagar), Credit Card, Debit Card, Cash, Electronic Pay, Refund, Purchase Order, Gift Card, Other, Promotion
    }
};

module.exports = Booking;

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