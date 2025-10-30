const loginController = require('../controllers/login.controller');

const express = require('express');

const loginRoutes = express.Router();
const validate = require('../middlewares/auth');

loginRoutes.post('/login', loginController.Login);
loginRoutes.post('/register', loginController.cadastrarUsuario);
loginRoutes.get('/validate', validate);

module.exports = loginRoutes;