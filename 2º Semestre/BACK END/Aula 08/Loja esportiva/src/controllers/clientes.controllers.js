const db = require('../data/connection');

const cadastrarcliente = async (req, res) => {
    const { nome, cpf, email, telefone } = req.body;
    const info = { msg: "" };
    if (!cpf) {
        return info.msg = "O campo CPF é obrigatório";
    }
    const novocliente = await db.query('insert into clientes values (default, ?, ?, ?, ?)', [nome, cpf, email, telefone]);
    const cliente = {
        id: novocliente[0].insertId,
        nome,
        cpf
    };
    res.status(201).json(cliente);
}
const listarclientes = async (req, res) => {
    const lista = await db.query('select * from clientes');
    res.json(lista[0]).end();
}
const deletarcliente = async (req, res) => {
    const id = req.params.id;
    try {
        const remove = await db.query('delete from clientes where id = ?', [id]);
        console.log(remove);
        res.status(200).end();
    } catch (error) {
        console.log(error);
        const err = { msg: "" };
        if (error.errno === 1451) {
            err.msg = "Usuário com produtos vinculados não pode ser excluido";
        }
        res.status(500).json(err).end();
    }
}

const atualizarcliente = async (req, res) => {
    const {id, nome, cpf, email, telefone} = req.body;
    try{
        const update = await db.query('update clientes set nome = ?, cpf = ?, email = ?, telefone = ? where id = ?', [nome, cpf, email, telefone, id]);
        const info = {msg: ""};

        if(update[0].affectedRows === 1){
            info.msg = "Atualizado com sucesso";
        }else if(update[0].affectedRows === 0){
            info.msg = "Cliente não encontrado";
        }
        res.status(200).json(info).end();
    }
    catch(error){
        console.log(error);
        res.status(500).end();
    }
}

module.exports = {
    cadastrarcliente,
    listarclientes,
    deletarcliente,
    atualizarcliente
}