const express = require("express");
const router = express.Router();

const clientesController = require("../controllers/clientes.controllers");

router.post("/clientes", clientesController.cadastrar);
router.get("/clientes/:cpf", clientesController.buscar);

module.exports = router;