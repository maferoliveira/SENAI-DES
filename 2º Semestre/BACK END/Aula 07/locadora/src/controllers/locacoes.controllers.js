const db = require("../data/connection");

const listarlocacoes = async (req, res) =>{
    const lista = await db.query("select * from locacoes; ");
    res.json(lista[0]).end();
}
const listarlocacaoporid = async (req, res) =>{
    const idlocacao = req.params.id;
    const locacao = await db.query("select * from locacoes where id = " + idlocacao);
    res.send(locacao[0]).end();
}
const listarlocacaoporstatus = async (req, res) =>{
    const status = req.params.status;
    const locacao = await db.query("select * from locacoes where status = ? ", [status]);
    res.send(locacao[0]).end();
}
const buscarlocacao =  async (req, res) =>{
    const id = req.params.id;
    const locacao = await db.query("select * from locacoes where id = " + id);
    res.send(locacao[0]).end();
}
const cadastrarlocacao = async (req, res) =>{
    const {cliente_id, filme_id,data_locacao, status, preco} = req.body;
    const novolocacao = await db.query("insert into locacoes values (default, ?, ?, ?, ?, ?)", [cliente_id, filme_id,data_locacao, status, preco]);
    const locacao = {
        id: novolocacao[0].insertId,
        cliente_id: cliente_id,
        filme_id: filme_id,
        data_locacao: data_locacao,
        status: status,
        preco: preco
    }
    res.json(locacao).status(201).end();
}
const excluirlocacao = async (req, res) =>{
    const idlocacao = req.params.id;
    try{
        const remove = await db.query("delete from locacoes where id = ?", [idlocacao]);
        console.log(remove);
        res.status(200).end();
    }catch(error){
        console.log(error);
        const err = {msg: ""};
        if(error.errno == 1064){
            res.status(400).json({"msg" : "Locação possui registros"}).end();
        }else{
             res.status(500).json(err).end();
        }
       
    }
}
const atualizarlocacao = async (req, res)=>{
    const {id, cliente_id, filme_id, data_locacao, status, preco} = req.body;
    try{
        const update = await db.query("update locacoes set cliente_id = ?, filme_id = ?, data_locacao = ?, status = ?, preco = ? where id = ?",[ cliente_id, filme_id, data_locacao, status, preco, id]);
        const info = {msg: ""};
        if(update[0].affectedRows === 1){
            info.msg = "Atualizado com sucesso";
        }else if(update[0].affectedRows === 0){
            info.msg = "Locação não encontrada";
        }
        res.status(200).json(info).end();
    }catch(error){
        console.log(error);
        res.status(500).end();
    }
}
const faturamentolocacoes = async (req, res) => {
    try {
        const resultado = await db.query('SELECT SUM(preco) AS faturamento FROM locacoes where status = "entregue"');
        res.json(resultado[0][0]).end();
    } catch (error) {
        console.log(error);
        res.status(500).json(error).end();
    }
}
const FatEQntdDeLocPorMes = async (req, res) =>{
    try{
    const mes = await db.query('select month(l.data_locacao) as "Mes", count(l.id) AS "Qtd_locacoes", SUM(f.preco) AS "Faturamento" FROM locacoes l INNER JOIN filmes f ON l.filme_id = f.id WHERE l.status = "entregue" GROUP BY MONTH(l.data_locacao)');
    res.json(mes[0]);
    }catch(error){
        console.log(error);
        res.status(500).json(error).end();
    }
}
const QntdLocETotalrsPorStatus = async(req, res) =>{
    try{
        const total = await db.query('select locacoes.status, count(locacoes.id) as "Quantidade locações", sum(filmes.preco) as "Faturamento" from locacoes inner join filmes on locacoes.filme_id = filmes.id group by locacoes.status');
        res.json(total[0]);
    }catch(error){
        console.log(error);
        res.status(500).json(error).end();
    }
}
const QntdLocporClienteeStatus = async (req, res) =>{
     try{
        const por = await db.query('select clientes.nome, locacoes.status, count(locacoes.id) as "Quantidade locações", sum(filmes.preco) as "Faturamento" from locacoes inner join filmes on locacoes.filme_id = filmes.id inneR join clientes on locacoes.cliente_id = clientes.id group by clientes.nome, locacoes.status');
        res.json(por[0]);
    }catch(error){
        console.log(error);
        res.status(500).json(error).end();
    }
}
module.exports = {
    listarlocacoes,
    listarlocacaoporid,
    listarlocacaoporstatus,
    buscarlocacao,
    cadastrarlocacao,
    excluirlocacao,
    atualizarlocacao,
    faturamentolocacoes,
    FatEQntdDeLocPorMes,
    QntdLocETotalrsPorStatus,
    QntdLocporClienteeStatus
}