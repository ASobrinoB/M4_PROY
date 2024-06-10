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
class Room {
    constructor(room, adults, children) {
        this.room = room;
        this.adults = adults;
        this.children = children;
    }
}
// FIN Definiendo las habitaciones

module.exports = Usuario;

// Definiendo las habitaciones
module.exports = Room;
// FIN Definiendo las habitaciones
