const clientes = require("../data/clientes.data");

const cadastrar = (req, res) => {
    const data = req.body;
    clientes.push(data);
    res.status(201).send("Adicionada com sucesso").end();

};
const buscar = (req, res) => {
    const cpf = req.params.cpf;
    var pessoa = "";
    clientes.forEach((cliente, index)=>{
        if(cliente.cpf === cpf){
            pessoa = cliente;
        }
    });
    if (pessoa === "") pessoa = "Não encontrado";
    res.send(pessoa).end();
};
module.exports = {
    cadastrar,
    buscar
};