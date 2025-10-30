const express = require("express");
const router = express.Router();

const Usuarioscontroller = require("../controllers/usuarios.controller");
//define os metodos e rotas da aplicacao
router.get("/usuarios", Usuarioscontroller.listar);
router.get("/usuarios/:matricula", Usuarioscontroller.buscar);
router.post("/usuario", Usuarioscontroller.cadastrar);
router.delete("/usuarios/:matricula", Usuarioscontroller.apagar);
router.put("/usuario", Usuarioscontroller.atualizar);
router.patch("/usuario/:matricula", Usuarioscontroller.alterar);


module.exports = router;


