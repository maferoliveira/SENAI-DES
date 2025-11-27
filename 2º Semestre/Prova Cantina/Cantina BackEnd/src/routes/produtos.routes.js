const produtoscontroller = require('../controllers/produtos.controllers');
const express = require('express');
const produtosroutes = express.Router();

produtosroutes.post("/produtos", produtoscontroller.cadastrar);
produtosroutes.get("/listarprodutos", produtoscontroller.listar);
produtosroutes.put("/produto/:id", produtoscontroller.atualizar);
produtosroutes.delete("/produto/:id", produtoscontroller.deletar);
produtosroutes.get("/totalpedidosporprodutos", produtoscontroller.totalpedidosporprodutos);

module.exports = produtosroutes;