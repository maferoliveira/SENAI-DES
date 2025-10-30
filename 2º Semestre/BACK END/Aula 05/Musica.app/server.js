const express = require("express");
const cors = require("cors");

const artistasRoutes = require("./src/routes/artistas.routes");
const albunsRoutes = require("./src/routes/albuns.routes");
const faixasRoutes = require("./src/routes/faixas.routes");
const playmscRoutes = require("./src/routes/playmsc.routes");

const app = express();

app.use(cors());
app.use(express.json());

// Use prefixos para cada grupo de rotas
app.use("/artistas", artistasRoutes);
app.use("/albuns", albunsRoutes);
app.use("/faixas", faixasRoutes);
app.use("/playmsc", playmscRoutes);

app.get("/", (req, res) => {
    res.send("API Musica");
});

app.listen(3000, () => {
    console.log("Servidor Online na porta 3000");
});