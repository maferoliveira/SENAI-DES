const pacientecontroller = require('../controllers/pacientes.controllers');
const express = require('express');
const pacienteroutes = express.Router();
const validate = require('../middlewares/auth');
const { validaadm, validaatendente} = require('../middlewares/validacargo');

pacienteroutes.post('/paciente', validate, validaadm, validaatendente, pacientecontroller.cadastrarPaciente);
pacienteroutes.get('/listapacientes', validate, validaadm, pacientecontroller.listarpaciente);
pacienteroutes.get('/paciente/:id', validate, validaadm, pacientecontroller.buscarpacienteID);
pacienteroutes.put('/paciente/:id', validate, validaadm, pacientecontroller.atualizarPaciente);
pacienteroutes.delete('/paciente/:id', validate, validaadm, pacientecontroller.deletarPaciente);

module.exports = pacienteroutes;