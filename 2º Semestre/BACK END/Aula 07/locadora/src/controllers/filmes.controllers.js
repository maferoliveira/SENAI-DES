const db = require("../data/connection");

const listarfilmes = async (req, res) =>{
    const lista = await db.query("select * from filmes; ");
    res.json(lista[0]).end();
}
const buscarfilme =  async (req, res) =>{
    const id = req.params.id;
    const filme = await db.query("select * from filmes where id = " + id);
    res.send(filme[0][0]).end();
}
const cadastrarfilme = async (req, res) =>{
    const {titulo, categoria, preco} = req.body;
    const novofilme = await db.query("insert into filmes values (default, ?, ?, ?)", [titulo, categoria, preco]);
    const filme = {
        id: novofilme[0].insertId,
        titulo: titulo,
        categoria: categoria,
        preco: preco
    }
    res.json(filme).status(201).end();
}
const excluirfilme = async (req, res) =>{
    const id = req.params.id;
    try{
        const remove = await db.query("delete * from filmes where id = ?", [id]);
        console.log(remove);
        res.status(200).end();
    }catch(error){
        console.log(error);
        const err = {msg: ""};
        if(error.errno == 1064){
            err.msg = "Filme possui registros";
        }
        res.status(500).json(err).end();
    }
}
const atualizarfilme = async (req, res)=>{
    const {id, titulo, categoria, preco} = req.body;
    try{
        const update = await db.query("update filmes set titulo = ?, categoria = ?, preco = ? where id = ?",[titulo, categoria, preco, id]);
        const info = {msg: ""};
        if(update[0].affectedRows === 1){
            info.msg = "Atualizado com sucesso";
        }else if(update[0].affectedRows === 0){
            info.msg = "Filme não encontrado";
        }
        res.status(200).json(info).end();
    }catch(error){
        console.log(error);
        res.status(500).end();
    }
}
const QntdDeLocporCat = async (req, res) => {
    try{
    const qntd = await db.query('SELECT filmes.categoria, count(locacoes.id) as "Quantidade de locações por categoria" FROM locacoes INNER JOIN filmes on locacoes.filme_id = filmes.id group by filmes.id order by filmes.categoria');
    res.json(qntd[0]).end();
}catch(error){
    console.log(error);
    res.status(500).json(error).end();
}
}
const faturamentoCat = async (req, res) =>{
    try{
        const fatu = await db.query('select filmes.categoria, sum(filmes.preco) as "Faturamento por categoria total" from filmes inner join locacoes on locacoes.filme_id = filmes.id group by filmes.categoria order by "Faturamento por categoria total" desc');
        res.json(fatu[0]);
    }catch(error){
        console.log(error);
        res.status(500).json(error).end();
    }
}
module.exports = {
    listarfilmes,
    buscarfilme,
    cadastrarfilme,
    excluirfilme,
    atualizarfilme,
    QntdDeLocporCat,
    faturamentoCat
}