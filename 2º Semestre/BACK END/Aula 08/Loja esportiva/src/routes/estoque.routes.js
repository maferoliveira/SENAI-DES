const express = require("express");
const router = express.Router();

const estoquecontrollers = require("../controllers/estoque.controllers");

router.get("/estoque", estoquecontrollers.listarestoque);
router.get("/estoque/:id", estoquecontrollers.buscarestoque);
router.post("/estoque", estoquecontrollers.cadastrarestoque);
router.put("/estoque", estoquecontrollers.atualizarestoque);

module.exports = router;