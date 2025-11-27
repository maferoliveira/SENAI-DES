const pedidoscontroller = require('../controllers/pedidos.controllers');
const express = require('express');
const pedidosroutes = express.Router();

pedidosroutes.post("/pedidos", pedidoscontroller.cadastrar);
pedidosroutes.get("/listarpedidos", pedidoscontroller.listar);
pedidosroutes.put("/pedido/:id", pedidoscontroller.atualizar);
pedidosroutes.delete("/pedido/:id", pedidoscontroller.deletar);
pedidosroutes.get("/faturamento", pedidoscontroller.totalfaturado);

module.exports = pedidosroutes;