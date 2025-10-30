const express = require("express");
const router = express.Router();

const locacoescontrollers = require("../controllers/locacoes.controllers");

router.get("/locacoes", locacoescontrollers.listarlocacoes);
router.get("/locacoes/:id", locacoescontrollers.listarlocacaoporid);
router.get("/locacoes/status/:status", locacoescontrollers.listarlocacaoporstatus);
router.get("/locacao/:id", locacoescontrollers.buscarlocacao);
router.post("/locacao", locacoescontrollers.cadastrarlocacao);
router.delete("/locacao/:id", locacoescontrollers.excluirlocacao);
router.put("/locacao", locacoescontrollers.atualizarlocacao);
router.get("/locacoes/faturamento/total", locacoescontrollers.faturamentolocacoes);
router.get("/locacoes/faturamentoequantidadepormes/locacoes", locacoescontrollers.FatEQntdDeLocPorMes);
router.get("/locacoes/locacao/totalporstatus", locacoescontrollers.QntdLocETotalrsPorStatus);
router.get("/locacoes/locacao/clienteestatus", locacoescontrollers.QntdLocporClienteeStatus);

module.exports = router;