const usuarios = require("../data/usuarios.data");

//define função utilizada na rota
//req -> request (requisicao)
//res -> response (resposta)

const listar = (req, res) => {
    res.send(usuarios).end();
};
const buscar = (req, res) => {
    const matricula = req.params.matricula;

    var user = "";

    usuarios.forEach((usuario, index) => {
        if (usuario.matricula === matricula) {
            user = usuario;
        }
    });
    if (user === "") user = "Não encontrado";

    res.send(user).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    usuarios.push(data);
    res.status(201).send("Cadastrado com sucesso").end();

};

const apagar = (req, res) => {
    const matricula = req.params.matricula;

    var indice = -1;

    usuarios.forEach((usuario, index) => {
        if (usuario.matricula === matricula) {
            indice = index;
        }
    });

    if (indice === -1) {
        res.status(404).end();
    } else {
        usuarios.splice(indice, 1);
        res.send(200).end();
    }

};

const atualizar = (req, res) => {
    const user = req.body;

    var encontrei = false;

    usuarios.forEach((usuario, index) => {
        if (usuario.matricula === user.matricula) {
            usuarios[index] = user;
            encontrei = true;
        }

    });
    if (encontrei == false) {
        res.send(404).end();
    } else {
        res.status(201).end();
    }
};
const alterar = (req, res) => {
    const matricula = req.params.matricula;
    const userupdate = req.body;

    var indice = -1;
    usuarios.forEach((usuario, index) => {
        if (usuario.matricula == matricula) {
            indice = index;
        }
    });
    if (indice === -1) {
        res.status(404).end();
    } else {
        Object.keys(userupdate).forEach((chave) => {
            usuarios[indice][chave] = userupdate[chave];
        });
        res.status(200).end();
    }

};

module.exports = {
    listar,
    buscar,
    cadastrar,
    apagar,
    atualizar,
    alterar
};

