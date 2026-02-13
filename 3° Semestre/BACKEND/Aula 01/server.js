require("dotenv").config();
const express = require("express");
const cors = require("cors");

const listaroutes = require("./src/routes/lista.routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(listaroutes);

app.get("/", (req, res) => {
    res.send("App Online").end();
});

app.listen(3000, ()=>{
    console.log("Online na 3000");
});