const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");

// swagger
const path = require("path");
const swaggerUI = require ("swagger-ui-express");
const swaggerJsDoc = require ("swagger-jsdoc");

const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "NodeJS API Booking",
            version: "1.0.0",
        }, 
        servers: [
            {
                url: "http://localhost:3001",
            },
        ],
    },
//  apis: [`${path.join("", "./routes/userRoutes.js")}`],
    apis: [`${path.join("", "/users/alejandrosobrino/onedrive/udd/m4_proy/routes/userRoutes.js")}`],
};

// settings
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", userRoutes);
app.use(
    "/api-doc",
    swaggerUI.serve,
    swaggerUI.setup(swaggerJsDoc(swaggerSpec))
);

const arrCapacity = [];
const Capacity = require("./models/modelCapacity");
arrCapacity.push (new Capacity ("Enjoy Santiago",       101, "Standard",  80, 2, 1, "Available"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       102, "Gold",     140, 4, 2, "Available"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       103, "Platinum", 200, 6, 3, "Available"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       104, "Standard",  80, 2, 1, "Available"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       105, "Gold",     140, 4, 2, "Available"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       201, "Standard",  80, 2, 1, "Bloqued"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       202, "Gold",     140, 4, 2, "Bloqued"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       203, "Platinum", 200, 6, 3, "Bloqued"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       204, "Standard",  80, 2, 1, "Bloqued"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       205, "Gold",     140, 4, 2, "Bloqued"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       301, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       302, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       303, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  101, "Standard",  80, 2, 1, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  102, "Gold",     140, 4, 2, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  103, "Platinum", 200, 6, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  104, "Standard",  80, 2, 1, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  105, "Gold",     140, 4, 2, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  201, "Standard",  80, 2, 1, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  202, "Gold",     140, 4, 2, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  203, "Platinum", 200, 6, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  204, "Standard",  80, 2, 1, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  205, "Gold",     140, 4, 2, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  301, "Standard",  80, 2, 1, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  302, "Gold",     140, 4, 2, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  303, "Platinum", 200, 6, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  304, "Standard",  80, 2, 1, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  305, "Gold",     140, 4, 2, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  701, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  702, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  703, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  801, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  802, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  803, "VIP",      400, 8, 3, "Available"));

module.exports = arrCapacity;

app.listen(port, () => console.log("Open port -> " + port));
