const express = require("express");
const router = express.Router();

const pedidosController = require("../controllers/pedidos.controllers");

router.get("/pedidos", pedidosController.listar);
router.post("/pedidos", pedidosController.cadastrar);
router.put("/pedidos/:codigo", pedidosController.atualizar);

module.exports = router;