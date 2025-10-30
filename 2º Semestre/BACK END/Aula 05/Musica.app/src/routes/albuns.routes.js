const express = require("express");
const router = express.Router();

const albunscontroller = require("../controllers/albuns.controllers");

router.get("/", albunscontroller.listar);
router.get("/:id", albunscontroller.buscar);
router.post("/", albunscontroller.criar);
router.delete("/:id", albunscontroller.apagar);
router.put("/:id", albunscontroller.atualizar);
router.patch("/:id", albunscontroller.alterar);

module.exports = router;