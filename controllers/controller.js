const Usuario = require('../models/model');
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');
 
let users = [];
 
exports.createUser = async (req, res) => {
    const uniqueKey = uuidv4();
    const { nombre, email, rol } = req.body;
//  const newUser = new Usuario(users.length + 1, nombre, email, rol, moment())
    const newUser = new Usuario(uniqueKey, nombre, email, rol, moment())
 
    users.push(newUser);
 
    res.json({
        msg: "Usuario creado con éxito.",
        data: newUser
    });
};
 
exports.getUsers = async (req, res) => {
    const { rol, fecha_inicio, fecha_fin } = req.query;
 
    if (rol) {
        const usersFiltered = users.filter(user => user.rol === rol);
        if (usersFiltered.length === 0) {
            return res.status(404).json({ msg: 'No se encontraron usuarios' });
        }
 
        return res.json({
            msg: "Usuarios",
            data: usersFiltered
        })
    } else if (fecha_inicio && fecha_fin){
        const startDate = moment (fecha_incio);
        const endDate = moment (fecha_fin);

        const usersFiltered = users.filter(user => user.fechaCreacion.isBetween (startDate, endDate) === true);
        if (usersFiltered.length === 0) {
            return res.status(404).json({ msg: 'No se encontraron usuarios' });
        }
        return res.json({
            msg: "Usuarios",
            data: usersFiltered
        })
    }
    else {
        return res.json({
            msg: 'Usuarios',
            data: users
        })
    }
}

exports.getUsersById = async (req, res) => {
    const userId = req.params.id;
    const user = users.find(user => user.id === userId);

    if (!user) {
        return res.status(404).json({ msg: "Usuario no encontrado." })
    }
 
    return res.json({
        msg: 'Usuario obtenido con éxito.',
        data: user
    })
}

exports.updateUsersById = async (req, res) => {
    const userId = req.params.id;
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1){
        return res.status(404).json({ msg: "Usuario no encontrado." })
    }

    users[userIndex] = { ...users[userIndex], ...req.body} // spread

    return res.json({
        msg: 'Usuario modificado con éxito.',
        data: users[userIndex]
    })
}

exports.deleteUsersById = async (req, res) => {
    const userId = req.params.id;
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1){
        return res.status(404).json({ msg: "Usuario no encontrado." })
    }

    users.splice (userIndex,1)

    return res.json({
        msg: 'Usuario eliminado con éxito.',
    })

}