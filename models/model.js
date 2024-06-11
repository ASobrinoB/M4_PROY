class Booking {
    constructor(id, room, hotel, name, phone, people, checkIn, checkOut, category, datePost, datePut) {
        this.id = id;
        this.room = room;
        this.hotel = hotel;
        this.name = name;
        this.phone = phone;
        this.people = people;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.category = category;
        this.datePost = datePost;
        this.datePut = datePut;
    }
}

class Capacity {
    constructor(room, hotel, adults, children, priceUsd, category, state) {
        this.room = room;
        this.hotel = hotel;
        this.adults = adults;
        this.children = children;
        this.priceUsd = priceUsd;
        this.category = category;
        this.state = state;
    }
}
module.exports = Booking;
module.exports = Capacity;
