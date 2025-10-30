const express = require("express");
const router = express.Router();

const clientescontrollers = require("../controllers/clientes.controllers");

router.get("/clientes", clientescontrollers.listarclientes);
router.get("/cliente/:id", clientescontrollers.buscarcliente);
router.post("/cliente", clientescontrollers.cadastrarcliente);
router.delete("/cliente/:id", clientescontrollers.excluircliente);
router.put("/cliente", clientescontrollers.atualizarcliente);  
router.get("/cliente/total/gasto", clientescontrollers.totalgastocliente);

module.exports = router;
