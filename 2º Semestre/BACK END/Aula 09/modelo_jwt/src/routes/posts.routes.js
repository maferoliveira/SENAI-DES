const postsController = require("../controllers/posts.controller");

const express = require('express');

const validate = require('../middlewares/auth');
const {validagerente} = require("../middlewares/validacargo");
const { validaeditor } = require("../middlewares/validacargo");

const postsRoutes = express.Router();
//editor e gerente
postsRoutes.post('/posts', validate, validagerente, postsController.createpost);
postsRoutes.patch('/posts/:id', validate, validaeditor, postsController.editarpost);
postsRoutes.get('/posts', validate, validagerente, postsController.listarpost);
postsRoutes.get('/post/:id', validate, validaeditor, postsController.buscarpostespecifico);

//apenas gerente

postsRoutes.delete('/posts/:id', validate, validagerente, postsController.excluirpost);
postsRoutes.get('/users', validate, validagerente, postsController.listarusuarios);
postsRoutes.get('/post/user/:id', validate, validagerente, postsController.buscarpostPorAutor);
postsRoutes.get('/posts/qtd/total', validate, validagerente, postsController.totalPosts)

module.exports = postsRoutes;