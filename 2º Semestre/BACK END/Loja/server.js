const express = require("express");
const cors = require ("cors");

const clientesRoutes = require("./src/routes/clientes.routes");
const produtosRoutes = require("./src/routes/produtos.routes");
const pedidosRoutes = require("./src/routes/pedidos.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(clientesRoutes);
app.use(produtosRoutes);
app.use(pedidosRoutes);

app.get("/", (req, res) => {
    res.send("API loja");
});

app.listen(3000, () => {
    console.log("Servidor online na porta 3000");
});
