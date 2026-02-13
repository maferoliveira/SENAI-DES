// const con = require("../data/connection");
// const listar = async (req, res) => {
//     try{
//         const [lista] = await con.query("select * from lista");
//         res.json(lista).status(200).end();
//     }catch (err) {
//         res.json(err).status(500).end();
//     }
// };

const prisma = require("../data/prisma");

const listarclientes = async (req, res) =>{
    try{
        const lista = await prisma.cliente.findMany();
    }catch(err){
        res.json(err).status(500).end();
    }
};

const cadastrarcliente = async (req, res) =>{
    try{
        const dados = req.body;
        const novocliente = await prisma.cliente.create({
            data: dados
        });
        res.json(novocliente).status(201).end();
    }catch(err){
        res.json(err).status(500).end();
    }
};

module.exports = {
    listarclientes,
    cadastrarcliente
}