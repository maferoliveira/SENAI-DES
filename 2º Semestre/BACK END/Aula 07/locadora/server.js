const express = require('express');
const cors = require('cors');

const clientesroutes = require("./src/routes/clientes.routes");
const filmesroutes = require("./src/routes/filmes.routes");
const locacoesroutes = require("./src/routes/locacoes.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(clientesroutes);
app.use(filmesroutes);
app.use(locacoesroutes);

app.listen(3000, ()=>{
    console.log("Servidor online");
});
