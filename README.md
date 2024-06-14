![Banner](./images/banner.png)

# PROYECTO 4: Reservas Hoteleras

## **ÍNDICE**

* [1. Enunciado](#1-enunciado)
* [2. Objetivos de Aprendizaje](#2-objetivos-de-aprendizaje)
* [3. Requisitos](#3-requisitos-y-entregables)
* [4. Implementación](#4-implementacion)
* [5. Para testear en Thunder Client](#5-para-testear-en-thunder-client)

****

## 1. Enunciado

En este proyecto, te encontrarás con dos actividades:

1. Construirás una aplicación de servicios para la gestión de reservas en hoteles que involucre las 4 operaciones `CRUD` y otras 6 adicionales relacionadas con filtros, utilizando Node.js y Express. 

2. Opcionalmente, realizarás un proceso de investigación relacionado con la documentación de API, usando Swagger, con la estandarización OPENAPI, la cual se utiliza en equipos internacionales para construir servicios escalables.

A continuación, determinamos las características del proyecto:

- Utilizar Node.js y Express para el desarrollo del servidor.
- Contar con un archivo `.env` para las variables de entorno, el cual establecerás el puerto.
- Contar con un archivo `.gitignore` que incluya las carpetas y archivos que deberán ocultarse para el repositorio.
- Usar una arquitectura de carpetas clara como se muestra a continuación. Es de tu gusto agregar más archivos, rutas, controladores o, si lo prefieres, sintetizar. La idea es que la asignación de responsabilidades de tu código pueda ser ubicado fácilmente.

```
EJEMPLO_TU_PROYECTO
├─ .env
├─ .prettierrc
├─ README.md
├─ controllers
│  └─ TU_CONTROLADOR.js
├─ package-lock.json
├─ package.json
├─ routes
│  └─ TU_RUTA.js
└─ server.js  <- TU ARCHIVO DE ENTRADA
```

- Implementar los siguientes 10 endpoints. 

|Descripción del Endpoint|	Método|	Endpoint| Ejemplo. Caso de uso. |
|-----------------------|----------|------------|---------|
|Crear reserva	| POST| 	/api/reservas|Como viajero, quiero hacer una reserva en el hotel "Hotel Paraíso" para el 15 de mayo de 2023. Necesito una habitación doble para dos adultos y un niño.
|Obtener la lista de reservas|	GET|	/api/reservas|Como gerente del hotel, quiero ver una lista de todas las reservas para hoy para poder planificar el trabajo del personal de limpieza y recepción.|
|Obtener información de una reserva específica	|GET|	/api/reservas/:id|Como recepcionista, necesito verificar los detalles de la reserva del huésped que acaba de llegar al hotel. Su número de reserva es 12345.
|Actualizar información de una reserva|	PUT|	/api/reservas/:id|Como huésped, necesito cambiar mi reserva en el hotel "Hotel Paraíso". Originalmente reservé una habitación doble, pero ahora necesito una suite familiar. Mi número de reserva es 12345.|
|Eliminar una reserva específica	|DELETE|	/api/reservas/:id|Como viajero, tuve un cambio de planes y ya no necesito la habitación que reservé en el hotel "Hotel Paraíso". Mi número de reserva es 12345.|
|Filtrar reservas por hotel|	GET|	/api/reservas?hotel=HOTEL|Como gerente de una cadena de hoteles, quiero ver todas las reservas para el "Hotel Paraíso" para el próximo mes.|
|Filtrar reservas por rango de fechas|	GET|	/api/reservas?fecha_inicio=FECHA_INICIO&fecha_fin=FECHA_FIN|Como gerente del hotel, quiero ver todas las reservas para la semana de Navidad para poder planificar el personal y las actividades necesarias.|
|Filtrar reservas por tipo de habitación|	GET|	/api/reservas?tipo_habitacion=TIPO_HABITACION|Como gerente del hotel, quiero ver todas las reservas para nuestras suites de lujo para el próximo mes para asegurarme de que todo esté en perfectas condiciones para nuestros huéspedes VIP.|
|Filtrar reservas por estado|	GET|	/api/reservas?estado=ESTADO|Como gerente del hotel, quiero ver todas las reservas que están pendientes de pago para poder hacer un seguimiento con los clientes.|
|Filtrar reservas por número de huéspedes|	GET|	/api/reservas?num_huespedes=NUM_HUESPEDES|Como gerente del hotel, quiero ver todas las reservas para grupos de más de 5 personas para el próximo mes, para poder planificar las necesidades adicionales de estos grupos grandes.|


- Opcionalmente, puedes utilizar este [schema](https://github.com/U-Camp/7M_FULLSTACK_M4_PROY/blob/main/schema.json) para guiarte. Si lo prefieres, puedes crearlo desde cero. Es tu decisión.
- Opcionalmente, documentar todos tus `endpoints` utilizando `Swagger` y `OpenAPI` (observa la demo para ver su implementación).
- Opcionalmente, configurar el proyecto para el despliegue en [render.com](https://render.com).


****

## 2. Objetivos de aprendizaje

- Aplicar las operaciones CRUD en un segmento de datos.
- Desarrollar una API REST
- Trabajar con datos estructurados
- Implementar la lógica de negocios
- Documentar una API

****

## 3. Requisitos y entregables

Usa esta lista para saber los requisitos mínimos del proyecto:
### GENERAL
- [ ] Realizarse de manera individual

### ARQUITECTURA DE CARPETAS

- [ ] Crear una arquitectura de carpetas y archivos, clara
 
### APLICACIÓN DE SERVICIOS CRUD

- [ ] Permitir la creación de reservas con los detalles necesarios (por ejemplo, hotel, tipo de habitación, número de huéspedes, fechas, etc.).
- [ ] Permitir la visualización de la lista de reservas.
- [ ] Permitir la obtención de la información de una reserva específica.
- [ ] Permitir la actualización de la información de una reserva.
- [ ] Permitir la eliminación de una reserva.
- [ ] Permitir la búsqueda de reservas por hotel, rango de fechas, tipo de habitación, estado y número de huéspedes.
- [ ] Almacenar los datos de las reservas en una estructura de datos.


### CONTROL DE VERSIONES
- [ ] Crear un repositorio en GitHub y subir el proyecto al mismo.


### ENTREGA A TIEMPO
- [ ] Entregar a tiempo el proyecto.


### DOCUMENTACIÓN DE LA API (OPCIONAL)

- [ ] Documentar todos los `endpoints` utilizando `Swagger` y `OpenAPI`


### DESPLIEGUE (OPCIONAL)
- [ ] Crear una URL de producción para este proyecto, a través de [render.com](https://render.com)



****

## 4. Implementación

a.- Como componentes del proyecto deberá incluirse el archivo `.env` donde se registra la siguente informacion

PORT=3001

b.- Como componentes del proyecto deberá incluirse el archivo `.gitignore` donde se registra la siguente informacion

.env
#npm install
node_modules

c.- Se incorpora en `index.js` un arreglo de objetos con la capacidad hotelera como referencia y sacar datos para generar reservas

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
arrCapacity.push (new Capacity ("Enjoy Santiago",       301, "Standard",  80, 2, 1, "Available"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       302, "Gold",     140, 4, 2, "Available"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       303, "Platinum", 200, 6, 3, "Available"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       304, "Standard",  80, 2, 1, "Available"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       305, "Gold",     140, 4, 2, "Available"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       401, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       402, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       403, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       501, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       502, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       503, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       601, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       602, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Enjoy Santiago",       603, "VIP",      400, 8, 3, "Available"));
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
arrCapacity.push (new Capacity ("Monticello Rancagua",  401, "Standard",  80, 2, 1, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  402, "Gold",     140, 4, 2, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  403, "Platinum", 200, 6, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  404, "Standard",  80, 2, 1, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  405, "Gold",     140, 4, 2, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  501, "Standard",  80, 2, 1, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  502, "Gold",     140, 4, 2, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  503, "Platinum", 200, 6, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  504, "Standard",  80, 2, 1, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  505, "Gold",     140, 4, 2, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  601, "Standard",  80, 2, 1, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  602, "Gold",     140, 4, 2, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  603, "Platinum", 200, 6, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  604, "Standard",  80, 2, 1, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  605, "Gold",     140, 4, 2, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  701, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  702, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  703, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  801, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  802, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  803, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  901, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  902, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua",  903, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua", 1001, "VIP",      400, 8, 3, "Bloqued"));
arrCapacity.push (new Capacity ("Monticello Rancagua", 1002, "VIP",      400, 8, 3, "Bloqued"));
arrCapacity.push (new Capacity ("Monticello Rancagua", 1003, "VIP",      400, 8, 3, "Bloqued"));
arrCapacity.push (new Capacity ("Monticello Rancagua", 1101, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua", 1102, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua", 1103, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua", 1201, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua", 1202, "VIP",      400, 8, 3, "Available"));
arrCapacity.push (new Capacity ("Monticello Rancagua", 1203, "VIP",      400, 8, 3, "Available"));

d.- Se agregan variables y configuraciones para poder generar documentacion `Swagger OPENAPI`

En `package.json`

{
  "name": "m4_proy",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^3.1.1"
  },
  "dependencies": {
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "moment": "^2.30.1",
    "uuid": "^9.0.1",
`    "swagger-jsdoc": "^6.2.8",`
`    "swagger-ui-express": "^5.0.1"`
  }
}

En `index.js`

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
//  apis: [`${path.join("", "./routes/userRoutes.js")}`],   <- Me falla
`Es necesario indicar que en la linea anterior no me funcionaba swagger, tuve que poner el path completo de mi macbook`
    apis: [`${path.join("", "/users/alejandrosobrino/onedrive/udd/m4_proy/routes/userRoutes.js")}`],   <- No me falla
};

app.use(
    "/api-doc",
    swaggerUI.serve,
    swaggerUI.setup(swaggerJsDoc(swaggerSpec))
);

En `userRoutes.js`

Se agregan comentarios que usa Swagger OPENAPI para contruir la documentación

/**
 * @swagger
 * components:
 *  schemas:
 *      Booking:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  description: numero de la reserva
 *              timeStamp:
 *                  type: date-time 
 *                  description: fecha de creacion
 *              hotel:
 *                  type: string
 *                  description: nombre del hotel
 *              room:
 *                  type: integer
 *                  description: numero de habitacion 
 *              category:
 *                  type: string
 *                  description: Standard Gold Platinum VIP
 *              name:
 *                  type: string
 *                  description: nombre del pasajero
 *              phone:
 *                  type: string
 *                  description: telefono del pasajero 
 *              email:
 *                  type: string
 *                  description: correo del pasajero 
 *              qttyGuest:
 *                  type: integer
 *                  description: cantidad de personas
 *              specialFood:
 *                  type: string
 *                  description: comida especial
 *              checkIn:
 *                  type: date-time
 *                  description: fecha de llegada en formato YYYY-MM-DD
 *              checkOut:
 *                  type: date-time
 *                  description: fecha de salida en formato YYYY-MM-DD
 *              paid:
 *                  type: string
 *                  description: Pending (no pagada), Credit-Card, Debit-Card, Cash, Electronic-Pay, Refund, Purchase-Order, Gift-Card, Other, Promotion
 *          required:
 *              - hotel
 *              - room
 *              - category
 *              - name
 *              - phone
 *              - email
 *              - qttyGuest
 *              - specialFood
 *              - checkIn
 *              - checkOut
 *              - paid
 *          example:
 *              hotel: "Enjoy Santiago"
 *              room: 702
 *              category: "VIP"
 *              name: "Juan Perez Gonzalez"
 *              phone: "+56990022000"
 *              email: "telemensajes@hotmail.com"
 *              qttyGuest: 3
 *              specialFood: "Kosher"
 *              checkIn: "2024-12-20"
 *              checkOut: "2024-12-31"
 *              paid: "Cash"
 */
// create a booking
/**
 * @swagger
 * /api/reservas:
 *  post:
 *      summary: create a booking
 *      tags: [Booking]
 *      requestBody:
 *          required: true
 *          content:
 *              aplication/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Booking'
 *      responses:
 *          200:
 *              description: Reserva creada con exito
 */
`router.post ("/reservas", usuarioController.createBooking);`

// get all booking by criteria
/**
 * @swagger
 * /api/reservas:
 *  get:
 *      summary: get all booking by criteria
 *      tags: [Booking]
 *      responses:
 *          200:
 *              description: Reservas encontradas
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Booking'
 */
`router.get ("/reservas", usuarioController.getBookingsBySome);`

// get a booking by id
/**
 * @swagger
 * /api/reservas/{id}:
 *  get:
 *      summary: get a booking by id
 *      tags: [Booking]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the booking id
 *      responses:
 *          200:
 *              description: Reserva encontrada con exito
 *              content:
 *                  aplication/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Booking'
 *          404:
 *              description: Reserva no encontrada
 */
`router.get ("/reservas/:id", usuarioController.getBookingById);`

// update a booking by id
/**
 * @swagger
 * /api/reservas/{id}:
 *  put:
 *      summary: update a booking by id
 *      tags: [Booking]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the booking id
 *      requestBody:
 *          required: true
 *          content:
 *              aplication/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Booking'
 *      responses:
 *          200:
 *              description: Reserva modificada con exito
 *          404:
 *              description: Reserva no encontrada
 */
`router.put ("/reservas/:id", usuarioController.updateBookingById);`

// delete a booking by id
/**
 * @swagger
 * /api/reservas/{id}:
 *  delete:
 *      summary: delete a booking by id
 *      tags: [Booking]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: the booking id
 *      responses:
 *          200:
 *              description: Reserva eliminada con exito
 *          404:
 *              description: Reserva no encontrada
 */
`router.delete ("/reservas/:id", usuarioController.deleteBookingById);`

e.- Algunos comentarios en la logica de las APIs

Para calcular el mes próximo

    let   month    = moment().add(1, "months").format("MM");
    let   year     = moment().add(1, "months").format("YYYY");
    const dateFrom = `${year}-${month}-01`;
    const dateTo   = `${year}-${month}-31`;

La sentencia a continuacion incluye para el dato `checkIn` (fecha de llegada del pasajero) el rango [dateFrom, dateTo]

`moment(booking.checkIn).isBetween(dateFrom, dateTo, "days", "[]")`

f.- Se agregan variables y configuraciones para obtener un id único de reserva `uuid`

En `package.json`

{
  "name": "m4_proy",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^3.1.1"
  },
  "dependencies": {
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "moment": "^2.30.1",
`   "uuid": "^9.0.1",`
    "swagger-jsdoc": "^6.2.8",
    "swagger-ui-express": "^5.0.1"
  }
}

En `controller.js`

const { v4: uuidv4 } = require("uuid");

let id = uuidv4()

****

## 5. Para testear en Thunder Client

`Body`

{ 
    "hotel": "Enjoy Santiago",
    "room": 702,
    "category": "VIP",
    "name": "Juan Perez Gonzalez",
    "phone": "+56990022000",
    "email": "telemensajes@hotmail.com",
    "qttyGuest": 3,
    "specialFood": "Kosher",
    "checkIn": "2024-06-30",
    "checkOut": "2024-06-30",
    "paid": "Pending"
}

`Respuesta exitosa`

{
  "msg": "Reserva creada con éxito",
  "data": {
    "id": "7b6c3299-3a76-428e-92a3-8184f8bf0855",
    "timeStamp": "2024-06-13 21:06:42",
    "hotel": "Enjoy Santiago",
    "room": 702,
    "category": "VIP",
    "name": "Juan Perez Gonzalez",
    "phone": "+56990022000",
    "email": "telemensajes@hotmail.com",
    "qttyGuest": 3,
    "specialFood": "Kosher",
    "checkIn": "2024-06-30",
    "checkOut": "2024-06-30",
    "paid": "Pending"
  }
}
