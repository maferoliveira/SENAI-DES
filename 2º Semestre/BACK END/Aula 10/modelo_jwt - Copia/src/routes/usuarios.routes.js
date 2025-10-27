const usuarioscontroller = require('../controllers/usuarios.controllers');
const express = require('express');
const usuariosroutes = express.Router();
const validate = require('../middlewares/auth');
const { validaadm, validaatendente } = require('../middlewares/validacargo');

usuariosroutes.post('/usuario', usuarioscontroller.login);
usuariosroutes.get('/validate', validate);
usuariosroutes.post('/registro', validate, validaadm, validaatendente, usuarioscontroller.cadastrar);
usuariosroutes.post('/listarcadastros', validate, validaadm,  usuarioscontroller.listarcadastro);

module.exports = usuariosroutes;