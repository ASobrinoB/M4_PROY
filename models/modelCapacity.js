class Capacity
{
    constructor(hotel, room, category, price, adults, children, roomState)
    {
        this.hotel = hotel;
        this.room = room;
        this.category = category;    // Standard, Gold, Platinum, Esmeralda (VIP)
        this.price = price;          // precio diario USD
        this.adults = adults;        // capacidad de adultos
        this.children = children;    // capacidad de niños
        this.roomState = roomState;  // Blocked (en reparacion/en remodelación), Available (disponible), Busy (ocupada)
    }
}

module.exports = Capacity;
