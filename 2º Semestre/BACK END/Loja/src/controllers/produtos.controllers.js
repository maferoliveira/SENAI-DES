const produtos = require("../data/produtos.data");

const cadastrar = (req, res) => {
    const data = req.body;
    produtos.push(data);
    res.status(201).send("Adicionada com sucesso").end();

};
const buscar = (req, res) => {
    const cadastro = req.params.cadastro;
    var objeto = "";
    produtos.forEach((produto, index)=>{
        if(produto.cadastro === cadastro){
            objeto = produto;
        }
    });
    if (objeto === "") objeto = "Não encontrado";
    res.send(objeto).end();
};

const apagar = (req, res) => {
    const cadastro = req.params.cadastro;
    var indice = -1;
    produtos.forEach((produto, index)=>{
        if(produto.cadastro === cadastro){
            indice = index;
        }
    });
    if(indice === -1){
        res.status(404).end();
    }else{
        produtos.splice(indice, 1);
        res.status(200).end();
    }
};

const atualizar = (req, res) =>{
    const objeto = req.body;
    var encontrado = false;
    produtos.forEach((produto, index)=>{
        if(produto.cadastro === objeto.cadastro){
            produtos[index] = objeto;
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
    cadastrar,
    buscar,
    apagar,
    atualizar
};