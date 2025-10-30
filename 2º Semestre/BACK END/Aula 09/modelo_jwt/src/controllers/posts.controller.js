const dataPosts = require("../data/connection");
const validate = require("../middlewares/auth");
const { validagerente } = require("../middlewares/validacargo");
const { post } = require("../routes/posts.routes");

const createpost = async (req, res) => {
    try {
        const { titulo, conteudo } = req.body;
        const userId = req.headers['user'].id;

        const resultado = await dataPosts.query("INSERT INTO posts VALUES (DEFAULT, ?, ?, ?)", [userId, titulo, conteudo]);

        const novoPost = {
            id: resultado[0].insertId,
            titulo: titulo,
            conteudo: conteudo
        };

        res.status(201).json(novoPost).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const editarpost = async (req, res)=>{
    const {id, user_id, titulo, conteudo} = req.body;
    try{
        const update = await dataPosts.query("update posts set user_id = ?, titulo = ?, conteudo = ? where id = ?",[user_id, titulo, conteudo, id]);
        const info = {msg: ""};
        if(update[0].affectedRows === 1){
            info.msg = "Atualizado com sucesso";
        }else if(update[0].affectedRows === 0){
            info.msg = "Post não encontrado";
        }
        res.status(200).json(info).end();
    }catch(error){
        console.log(error);
        res.status(500).end();
    }
}

const listarpost = async (req, res) => {
    const lista = await dataPosts.query('select * from posts;');
    res.json(lista[0]).end();
};

const buscarpostespecifico = async (req, res) => {
    const idpost = req.params.id;
    const post = await dataPosts.query("select * from posts where id = ?", [idpost]);
    if(!post[0] || post[0].length === 0) return res.status(404).json({msg: "Post não encontrado"});
    res.status(200).json(post[0][0]).end();
};

const excluirpost = async(req, res)=>{
    const id = req.params.id;
    try{
        const remove = await dataPosts.query('delete from posts where id = ?', [id]);
        console.log(remove);
        res.status(200).end();
    }catch(error){
        console.log(error);
        res.status(500).end();
    }
};

//apenas gerente 

const listarusuarios = async(req, res)=>{
    const lista = await dataPosts.query('select * from users;');
    res.json(lista[0]).end();
};

const buscarpostPorAutor =  async (req, res)=>{
    const idautor = req.params.id;
    if(!idautor) return res.status(400).json({msg: "Autor não encontrado"}).end();

    const result = await dataPosts.query("select * from posts where user_id = ?", [idautor]);
    return res.status(200).json(result[0]).end();
}

const totalPosts = async (req, res)=>{
    try{
        const total = await dataPosts.query('select count(*) as Total from posts');
        res.json(total[0]).end();
    }catch(error){
        console.log(error);
        res.status(500).end();
    }
}
module.exports = {
    createpost,
    editarpost,
    listarpost,
    buscarpostespecifico,
    excluirpost,
    listarusuarios,
    buscarpostPorAutor,
    totalPosts
}