const express = require("express");
const router = express.Router();

const clientescontrollers = require("../controllers/clientes.controllers");

router.get("/clientes", clientescontrollers.listarclientes);
router.post("/cliente", clientescontrollers.cadastrarcliente);
router.delete("/cliente/:id", clientescontrollers.deletarcliente);
router.put("/cliente", clientescontrollers.atualizarcliente);

module.exports = router;