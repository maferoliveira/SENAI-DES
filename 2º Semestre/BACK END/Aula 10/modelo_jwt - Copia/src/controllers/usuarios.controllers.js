const db = require("../data/connection");
const jsonwebtoken = require("jsonwebtoken");
const crypto = require('node:crypto');

const login = async (req, res) => {
    const { username, password } = req.body;
   
    if (!username || !password) {
        return res.status(400).json({ message: "Todos os campos devem ser preenchidos." });
    }

    try {
        const senhaHash = crypto.createHash('md5').update(password).digest('hex').toString();

        console.log(username, senhaHash);

        const user = await db.query("SELECT * FROM usuarios WHERE email = ? AND senha = ?", [username, senhaHash]);  

        if (user.length === 0) {
            return res.status(401).json({ message: "Nome ou senha inválidos." });
        }

        const token = jsonwebtoken.sign(
            {
                id: user[0][0].id_usuario,
                nome: user[0][0].username,
                cargo: user[0][0].cargo
            },
            process.env.SECRET_JWT,
            { expiresIn: '60min' }
        );

        res.status(200).json({ token });
    }catch (error) {
        console.error("Erro durante o login:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const cadastrar = async (req, res) => {
    const { nome, email, senha, cargo } = req.body;

    try {
        const senhahash = crypto.createHash('MD5').update(senha).digest('hex').toString();

        const resultado = await db.query("INSERT INTO usuarios VALUES (DEFAULT, ?, ?, ?,?)", [nome, email, senhahash, cargo]);

        const novoUsuario = { 
            id: resultado[0].insertId, 
            nome: nome,
            email: email,
            senha: senha,
            cargo: cargo
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