const alunoscontroller = require('../controllers/alunos.controllers');
const express = require('express');
const alunosroutes = express.Router();

alunosroutes.post("/alunos", alunoscontroller.cadastrar);
alunosroutes.get("/listaralunos", alunoscontroller.listar);
alunosroutes.put("/aluno/:id", alunoscontroller.atualizar);
alunosroutes.delete("/aluno/:id", alunoscontroller.deletar);
alunosroutes.get("/totalgasto", alunoscontroller.totalgastoporaluno);

module.exports = alunosroutes;