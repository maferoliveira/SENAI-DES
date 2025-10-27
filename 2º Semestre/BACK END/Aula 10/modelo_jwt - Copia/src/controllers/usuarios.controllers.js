const db = require("../data/connection");
const jsonwebtoken = require("jsonwebtoken");
const crypto = require('node:crypto');

const login = async (req, res) =>{
    const {usuario, psw} = req.body;
    try{
        const senhahash = crypto.createHash('MD5').update(psw).digest('hex').toString();
        const usuario = await db.query("select * from usuarios where email = ? and senha = ?", [usuario, senhahash]);

        if (usuario[0].length === 0) res.status(401).send({message: 'E-mail ou Senha incorretos!'});
        const token = jsonwebtoken.sign(
            {
                id: usuario[0][0].id,
                nome: usuario[0][0].nome,
                cargo: usuario[0][0].cargo

            },
            process.env.SECRET_JWT,
            { expiresIn: "60min"}
        );
        res.status(200).json({token: token}).end();
    }catch(err){
        res.status(500).send(err).end();
    }
    res.status(200).end();
}

const cadastrar = async (req, res) => {
    const { nome, email, senha, cargo, especialidade } = req.body;

    try {
        const senhahash = crypto.createHash('MD5').update(senha).digest('hex').toString();

        const resultado = await db.query("INSERT INTO usuarios VALUES (DEFAULT, ?, ?, ?,?)", [nome, email, senhahash, cargo, especialidade]);

        const novoUsuario = { 
            id: resultado[0].insertId, 
            nome: nome,
            email: email,
            especialidade: especialidade
        };
        
        res.status(201).json(novoUsuario).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const listarcadastro = async (req, res)=>{
    const lista =  await dataPosts.query('select * from usuarios');
    res.json(lista[0]).end();
}

module.exports = {
    login,
    cadastrar,
    listarcadastro
}