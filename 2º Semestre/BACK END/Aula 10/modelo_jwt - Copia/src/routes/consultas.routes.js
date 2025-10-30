const consultascontroller = require("../controllers/consultas.controller");

const express = require('express');

const validate = require('../middlewares/auth');
const {validaatendente, validaadm} = require("../middlewares/validacargo");

const consultasroutes = express.Router();

consultasroutes.post('/consultas', validate, validaadm, validaatendente, consultascontroller.cadastrarconsulta);
consultasroutes.put('/consulta/:id', validate, validaadm, consultascontroller.atualizarconsulta);
consultasroutes.delete('/consulta/:id', validate, validaadm, consultascontroller.deletarconsulta);
consultasroutes.get('/listarconsultas', validate, validaadm, consultascontroller.listarconsultas);
consultasroutes.get('/consulta/:id', validate, validaadm, consultascontroller.ConsultaPorID);
consultasroutes.get('/consulta/cargo', validate, validaadm, consultascontroller.consultasPorcargo);

module.exports = consultasroutes;