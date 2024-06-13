//JSON para usar en Thunder Client
//
//{ 
//    "hotel": "Monticello Rancagua",
//    "room": 701,
//    "category": "VIP",
//    "name": "Juan Perez Gonzalez",
//    "phone": "+56990022000",
//    "qttyGuest": 2,
//    "checkIn":  "20241220",
//    "checkOut": "20241231",
//    "paid": "Pending"
//}

class Booking
{
    constructor(id, timeStamp, hotel, room, category, name, phone, qttyGuest, checkIn, checkOut, paid)
    {
        this.id = id;
        this.timeStamp = timeStamp;
        this.hotel = hotel;
        this.room = room;
        this.category = category;  // Standard, Gold, Platinum, VIP
        this.name = name;
        this.phone = phone;
        this.qttyGuest = qttyGuest;
        this.checkIn = checkIn;    // llegada
        this.checkOut = checkOut;  // salida
        this.paid = paid;          // Pending, Credit-Card, Debit-Card, Cash, Electronic-Pay, Refund, Purchase-Order, Gift-Card, Other, Promotion
    }
};

module.exports = Booking;