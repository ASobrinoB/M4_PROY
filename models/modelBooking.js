class Booking
{
    constructor(id, timeStamp, hotel, room, category, name, phone, email, qttyGuest, specialFood, checkIn, checkOut, paid)
    {
        this.id = id;
        this.timeStamp = timeStamp;
        this.hotel = hotel;
        this.room = room;
        this.category = category;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.qttyGuest = qttyGuest;
        this.specialFood = specialFood;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.paid = paid;
    };
};

module.exports = Booking;