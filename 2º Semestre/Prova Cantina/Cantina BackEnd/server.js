require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const alunosroutes = require('./src/routes/alunos.routes');
const produtosroutes = require('./src/routes/produtos.routes');
const pedidosroutes = require('./src/routes/pedidos.routes');

app.use(express.json());
app.use(cors());

app.use(alunosroutes);
app.use(produtosroutes);
app.use(pedidosroutes);

app.listen(port, () =>{
    console.log("Servidor online na " + port);
})