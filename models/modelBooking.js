class Booking
{
    constructor(id, timeStamp, hotel, room, category, name, phone, email, qttyGuest, specialFood, checkIn, checkOut, paid)
    {
        this.id = id;
        this.timeStamp = timeStamp;
        this.hotel = hotel;
        this.room = room;
        this.category = category;  // Standard, Gold, Platinum, VIP
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.qttyGuest = qttyGuest;
        this.specialFood = specialFood;
        this.checkIn = checkIn;    // llegada
        this.checkOut = checkOut;  // salida
        this.paid = paid;          // Pending, Credit-Card, Debit-Card, Cash, Electronic-Pay, Refund, Purchase-Order, Gift-Card, Other, Promotion
    };
};

module.exports = Booking;