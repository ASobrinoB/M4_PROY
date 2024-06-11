class Booking {
    constructor(reservation, paid, room, hotel, name, phone, adults, children, checkIn, checkOut, category, datePost, datePut) {
        this.reservation = reservation;
        this.paid = paid;
        this.room = room;
        this.hotel = hotel;
        this.name = name;
        this.phone = phone;
        this.adults = adults;
        this.children = children;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.category = category;
        this.datePost = datePost;
        this.datePut = datePut;
    }
}

class Capacity {
    constructor(room, hotel, adults, children, priceUsd, category, roomState) {
        this.room = room;
        this.hotel = hotel;
        this.adults = adults;
        this.children = children;
        this.priceUsd = priceUsd;
        this.category = category;
        this.roomState = roomState;
    }
}
module.exports = Booking;
module.exports = Capacity;
