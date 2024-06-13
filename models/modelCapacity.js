// Inventario de habitaciones por Hotel

class Capacity
{
    constructor(hotel, room, category, price, adults, children, roomState)
    {
        this.hotel = hotel;
        this.room = room;
        this.category = category;    // Standard, Gold, Platinum, VIP
        this.price = price;          // precio diario USD
        this.adults = adults;        // cantidad de adultos
        this.children = children;    // cantidad de niños
        this.roomState = roomState;  // Blocked (habitación en reparacion o remodelación), Available (habitación disponible), Busy (habitación ocupada)
    }
}

module.exports = Capacity;
