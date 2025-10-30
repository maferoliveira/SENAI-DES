const express = require("express");
const router = express.Router();

const faixascontroller = require("../controllers/faixas.controllers");

router.get("/", faixascontroller.listar);
router.get("/:id", faixascontroller.buscar);
router.post("/", faixascontroller.criar);
router.delete("/:id", faixascontroller.apagar);
router.put("/:id", faixascontroller.atualizar);
router.patch("/:id", faixascontroller.alterar);

module.exports = router;