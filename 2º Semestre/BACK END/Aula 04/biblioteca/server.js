const express = require ("express"); //importa um modulo
const cors = require ("cors");

const UsuariosRoutes = require("./src/routes/usuarios.routes");
const LivrosRoutes = require("./src/routes/livros.routes");

const app = express (); //carrega config. inicial do express

app.use(cors()); //aplica cors ao express
app.use(express.json()); //habilita a comunicacao com json

app.use(UsuariosRoutes);//inclui as rotas ao express
app.use(LivrosRoutes);
//inicia a API na porta 3000
app.listen(3000, () => {
    console.log("Servidor Online na porta 3000");
});


