class Usuario {
    constructor(id, nombre, email, rol, fechaCreacion) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
        this.fechaCreacion = fechaCreacion;
    }
}

class Room {
    constructor(room, adults, children) {
        this.room = room;
        this.adults = adults;
        this.children = children;
    }
}

module.exports = Usuario;
module.exports = Room;