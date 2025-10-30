const express = require("express");
const router = express.Router();
const reservasController = require("../controllers/reservas.controllers");

router.get("/", reservasController.listar);
router.post("/", reservasController.cadastrar);
router.put("/:id/finalizar", reservasController.finalizar);

module.exports = router;