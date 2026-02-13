const express = require("express");
const router = express.Router();

const listacontroller = require("../controllers/lista.controller");

router.get("/listarclientes", listacontroller.listarclientes);
router.post("/cliente", listacontroller.cadastrarcliente);


module.exports = router;