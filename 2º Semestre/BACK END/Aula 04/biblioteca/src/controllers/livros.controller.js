const livros = require("../data/livros.data");

const listar = (req, res) => {
    res.send(livros).end();
};

const procurar = (req, res) =>{
    const matricula = req.params.matricula;

    var book="";
    livros.forEach((livro, index)=>{
        if(livro.matricula === matricula){
            book = livro;
        }
    });
    if(book === "") book = "Não encontrado";
    res.send(book).end();
};
const cadastrar=(req, res) =>{
    const data = req.body;
    livros.push(data);
    res.status(201).send("Cadastro feito com sucesso!").end();
};

module.exports = {
    listar,
    procurar,
    cadastrar
};