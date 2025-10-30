require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const pacientesroutes = require('./src/routes/pacientes.routes');
const usuariosroutes = require('./src/routes/usuarios.routes');
const consultasroutes = require('./src/routes/consultas.routes');

app.use(express.json());
app.use(cors());

app.use(pacientesroutes);
app.use(usuariosroutes);
app.use(consultasroutes);


app.listen(port, () => {
    console.log('Servidor online na ' + port);
})