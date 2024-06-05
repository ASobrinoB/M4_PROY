const express = require('express');
const usuarioController = require('../controllers/controller');

const router = express.Router();

router.post("/usuario", usuarioController.createUser);
router.get("/usuario", usuarioController.getUsers);
router.get("/usuario/:id", usuarioController.getUsersById);
router.put("/usuario/:id", usuarioController.updateUsersById);
router.delete("/usuario/:id", usuarioController.deleteUsersById);

module.exports = router;


// http:localhost:3000/api/usuario