const express = require("express");
const router = express.Router();

const playmsccontroller = require("../controllers/playmsc.controllers");

router.get("/", playmsccontroller.listar);
router.get("/:id", playmsccontroller.buscar);
router.post("/", playmsccontroller.criar);
router.delete("/:id", playmsccontroller.apagar);
router.put("/:id", playmsccontroller.atualizar);
router.patch("/:id", playmsccontroller.alterar);

module.exports = router;