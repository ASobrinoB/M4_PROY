require ('dotenv').config(); // permite obtener variables definidas en .env

const Room = require('./models/model');
const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()) // middleware para procesar peticiones tipo JSON
app.use(express.urlencoded({ extended: true }))
app.use('/api', userRoutes)

// Definiendo las habitaciones

let totalCapacity = 0;
let capacity = [];

capacity.push = new Room ("Miramar-101", 2, 2);
totalCapacity++;
capacity.push = new Room ("Miramar-102", 4, 1);
totalCapacity++;
capacity.push = new Room ("Miramar-103", 6, 2);
totalCapacity++;
capacity.push = new Room ("Miramar-104", 2, 1);
totalCapacity++;
capacity.push = new Room ("Miramar-105", 4, 2);
totalCapacity++;
capacity.push = new Room ("Miramar-106", 6, 1);
totalCapacity++;
capacity.push = new Room ("Miramar-107", 2, 2);
totalCapacity++;
capacity.push = new Room ("Miramar-108", 4, 1);
totalCapacity++;
capacity.push = new Room ("Miramar-109", 6, 2);
totalCapacity++;
capacity.push = new Room ("Miramar-110", 2, 1);
totalCapacity++;

capacity.push = new Room ("Enjoy-101", 2, 2);
totalCapacity++;
capacity.push = new Room ("Enjoy-102", 4, 4);
totalCapacity++;
capacity.push = new Room ("Enjoy-103", 6, 2);
totalCapacity++;
capacity.push = new Room ("Enjoy-104", 2, 4);
totalCapacity++;
capacity.push = new Room ("Enjoy-105", 4, 2);
totalCapacity++;
capacity.push = new Room ("Enjoy-106", 6, 4);
totalCapacity++;
capacity.push = new Room ("Enjoy-107", 2, 2);
totalCapacity++;
capacity.push = new Room ("Enjoy-108", 4, 4);
totalCapacity++;
capacity.push = new Room ("Enjoy-109", 6, 2);
totalCapacity++;
capacity.push = new Room ("Enjoy-110", 2, 4);
totalCapacity++;

console.log (capacity);

app.listen(port, () => {
    console.log('Servidor iniciado en el puerto ' + port);
})

// http:localhost:3000/api/usuario