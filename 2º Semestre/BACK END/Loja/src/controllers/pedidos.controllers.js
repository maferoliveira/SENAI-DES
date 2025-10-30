const clientes = require("../data/clientes.data");
const pedidos = require("../data/pedidos.data");

const listar = (req, res) => {
    res.send(pedidos).end();
};
const cadastrar = (req, res) => {
    const pedido = req.params.pedido;
    const Estoque = req.params.Estoque;
    const data = req.body;
    pedidos.push(data);
    if(pedido > Estoque){
        res.send("Quantidade indisponível no estoque.");
    }
    res.status(201).send("Adicionada com sucesso").end();

};
const atualizar = (req, res) =>{
    const encomenda = req.body;
    var encontrado = false;
    pedidos.forEach((pedido, index)=>{
        if(pedido.cadastro === encomenda.cadastro){
            pedidos[index] = encomenda;
            encontrado = true;
        }
    });
    if(encontrado==false){
        res.send(404).end();
    }else{
        res.status(201).end();
    }
};
module.exports = {
    listar,
    cadastrar,
    atualizar
};