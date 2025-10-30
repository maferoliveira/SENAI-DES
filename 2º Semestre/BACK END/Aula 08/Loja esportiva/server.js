const express = require('express');
const cors = require('cors');

const clientesroutes = require("./src/routes/clientes.routes");
const estoquesroutes = require("./src/routes/estoque.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(clientesroutes);
app.use(estoquesroutes);

app.listen(3000, ()=>{
    console.log("Servidor online na porta 3000");
});