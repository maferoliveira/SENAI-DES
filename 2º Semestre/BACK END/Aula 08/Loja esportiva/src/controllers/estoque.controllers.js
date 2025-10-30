const db = require("../data/connection");

const cadastrarestoque = async (req, res) => {
    const {nome, equipamento_id, quantidade_disponivel } = req.body;
    const novoestoque = await db.query(
        'insert into estoque (nome, equipamento_id, quantidade_disponivel) values (?, ?, ?)',
        [nome, equipamento_id, quantidade_disponivel]
    );
    const estoque = {
        id: novoestoque[0].insertId,
        equipamento_id,
        quantidade_disponivel
    }
    res.status(201).json(estoque);
}
const buscarestoque = async (req, res) => {
    const id = req.params.id;
    const estoque = await db.query("select * from estoque where id = " + id);
    res.send(estoque[0]).end();
}
const listarestoque = async (req, res)=>{
    const lista = await db.query("select * from estoque");
    res.json(lista[0]).end();
}

const atualizarestoque = async (req, res) => {
    const {id, nome, equipamento_id, quantidade_disponivel} = req.body;
    try {
        const update = await db.query(
            'update estoque set nome = ?, equipamento_id = ?, quantidade_disponivel = ? where id = ?',
            [nome, equipamento_id, quantidade_disponivel, id]
        );
        const info = {msg: ""};

        if (update[0].affectedRows === 1) {
            info.msg = "Atualizado com sucesso";
        } else {
            info.msg = "Estoque não encontrado";
        }
        res.status(200).json(info).end();
    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
}
module.exports = {
    cadastrarestoque,
    buscarestoque,
    listarestoque,
    atualizarestoque
}