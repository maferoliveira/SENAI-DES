const db = require("../data/connection");

const listarclientes = async (req, res) => {
    const lista = await db.query("select * from clientes;");
    res.json(lista[0]).end();
}
const buscarcliente = async (req, res) => {
    const idcliente = req.params.id;
    const cliente = await db.query("select * from clientes where id = " + idcliente);
    res.send(cliente[0][0]).end();
}
const cadastrarcliente = async (req, res) => {
    const { nome, email } = req.body;
    const novocliente = await db.query("insert into clientes values (default, ?, ?)", [nome, email]);
    const cliente = {
        id: novocliente[0].insertId,
        nome: nome
    }
    res.json(cliente).status(201).end();
}

const excluircliente = async (req, res) => {
    const id = req.params.id;
    try {
        const remove = await db.query("delete from clientes where id = ?", [id]);
        console.log(remove);
        res.status(200).end();
    } catch (error) {
        console.log(error);
        const err = { msg: "" };
        if (error.errno == 1451) {
            err.msg = "Usuário com locação registrada";
        }
        res.status(500).json(err).end();
    }
}
    const atualizarcliente = async (req, res) => {
    const { id, nome, email } = req.body;

    try {
        const update = await db.query("update clientes set nome = ?, email = ? where id = ?", [nome, email, id]);
    
        const info = { msg: ""};

        if (update[0].affectedRows === 1) {
            info.msg = "Atualizado com sucesso";
        } else if (update[0].affectedRows === 0) {
            info.msg = "Usuario não encontrado";
        }

        res.status(200).json(info).end();
    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
}
const totalgastocliente = async (req, res) => {
    try{
        const total = await db.query('select clientes.*, sum(locacoes.cliente_id) as "Total gasto" from clientes inner join locacoes on locacoes.cliente_id = clientes.id group by clientes.nome order by clientes.id');
        res.json(total[0]).end();
    }catch(error){
        console.log(error);
        res.status(500).end();
    }
}

module.exports = {
    listarclientes,
    buscarcliente,
    cadastrarcliente,
    excluircliente,
    atualizarcliente,
    totalgastocliente
}