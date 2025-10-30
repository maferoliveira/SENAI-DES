const express = require("express");
const router = express.Router();

const filmescontrollers = require("../controllers/filmes.controllers");

router.get("/filmes", filmescontrollers.listarfilmes);
router.get("/filme/:id", filmescontrollers.buscarfilme);
router.post("/filme", filmescontrollers.cadastrarfilme);
router.delete("/filme/:id", filmescontrollers.excluirfilme);
router.put("/filme", filmescontrollers.atualizarfilme);
router.get("/filme/locacacoesporcategoria/locacao", filmescontrollers.QntdDeLocporCat);
router.get("/filmes/faturamento/categoria", filmescontrollers.faturamentoCat)

module.exports = router;