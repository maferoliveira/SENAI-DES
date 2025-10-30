const express = require("express");
const router = express.Router();

const produtosController = require("../controllers/produtos.controllers");

router.post("/produtos", produtosController.cadastrar);
router.get("/produtos/:codigo", produtosController.buscar);
router.delete("/produtos/:codigo", produtosController.apagar);
router.put("/produtos/:codigo", produtosController.atualizar);

module.exports = router;