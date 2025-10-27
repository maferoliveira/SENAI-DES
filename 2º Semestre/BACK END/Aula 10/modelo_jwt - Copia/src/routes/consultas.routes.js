const consultascontroller = require("../controllers/consultas.controller");

const express = require('express');

const validate = require('../middlewares/auth');
const {validamedico, validaadm} = require("../middlewares/validacargo");
const {validaatendente} = require("../middlewares/validacargo");
const {validapaciente} = require("../middlewares/validacargo");

const consultasRoutes = express.Router();

consultasRoutes.post('/consultas', validate, validaadm, validaatendente, consultascontroller.criarconsulta);
consultasRoutes.put('/consulta/:id', validate, validaadm, consultascontroller.atualizarconsulta);
consultasRoutes.delete('/consulta/:id', validate, validaadm, consultascontroller.deletarconsulta);
consultasRoutes.get('/listarconsultas', validate, validaadm, consultascontroller.listarconsultas);
consultasRoutes.get('/consulta/:id', validate, validaadm, consultascontroller.consultarID);
consultasRoutes.get('/consulta/cargo', validate, validaadm, consultascontroller.consultarPorcargo);

module.exports = consultasRoutes;