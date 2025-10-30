const express = require("express");
const router = express.Router();

const artistascontroller = require("../controllers/artistas.controllers");
//define os metodos e rotas da aplicacao
router.get("/", artistascontroller.listar);
router.get("/:id", artistascontroller.buscar);
router.post("/", artistascontroller.criar);
router.delete("/:id", artistascontroller.apagar);
router.put("/:id", artistascontroller.atualizar);
router.patch("/:id", artistascontroller.alterar);

module.exports = router;