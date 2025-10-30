const express = require("express");
const router = express.Router();

const Livroscontroller = require("../controllers/livros.controller");

router.get("/livros", Livroscontroller.listar);
router.get("/livros/:matricula", Livroscontroller.procurar);
router.post("/livro", Livroscontroller.cadastrar);

module.exports = router;