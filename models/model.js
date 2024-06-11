class Usuario {
    constructor(id, nombre, email, rol, fechaCreacion) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
        this.fechaCreacion = fechaCreacion;
    }
}

// Definiendo las habitaciones
// ---------------------------
class Room {
    constructor(habitacion, hotel, adults, children, priceUsd, category) {
        this.habitacion = habitacion;
        this.hotel = hotel;
        this.adults = adults;
        this.children = children;
        this.priceUsd = priceUsd;
        this.category = category;
    }
}
// FIN Definiendo las habitaciones
// -------------------------------

module.exports = Usuario;

// Definiendo las habitaciones
// ---------------------------
module.exports = Room;
// FIN Definiendo las habitaciones
// -------------------------------