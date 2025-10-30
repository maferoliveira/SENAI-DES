const albuns = require("../data/albuns.data");

//define função utilizada na rota
//req -> request (requisicao)
//res -> response (resposta)

const listar = (req, res) => {
    res.send(albuns).end();
};
const buscar = (req, res) => {
    const id = req.params.id;

    var alb = "";

    albuns.forEach((album, index) => {
        if (album.id === id) {
            alb = album;
        }
    });
    if (alb === "") alb = "Não encontrado";

    res.send(alb).end();
};

const criar = (req, res) => {
    const data = req.body;
    albuns.push(data);
    res.status(201).send("Adicionada com sucesso").end();

};

const apagar = (req, res) => {
    const id = req.params.id;

    var indice = -1;

    albuns.forEach((album, index) => {
        if (album.id === id) {
            indice = index;
        }
    });

    if (indice === -1) {
        res.status(404).end();
    } else {
        albuns.splice(indice, 1);
        res.status(200).send("Apagado com sucesso!").end();
    }

};

const atualizar = (req, res) => {
    const alb = req.body;

    var encontrei = false;
    albuns.forEach((album, index) => {
        if (album.id === alb.id) {
            albuns[index] = alb;
            encontrei = true;
        }

    });
    if (encontrei == false) {
        res.status(404).send("ID não localizado").end();
    } else {
        res.status(201).send("Cadastrado com sucesso").end();
    }
};
const alterar = (req, res) => {
    const id = req.params.id;
    const albupdate = req.body;

    var indice = -1;
    albuns.forEach((album, index) => {
        if (album.id == id) {
            indice = index;
        }
    });
    if (indice === -1) {
        res.status(404).send("ID não localizado").end();
    } else {
        Object.keys(albupdate).forEach((chave) => {
            albuns[indice][chave] = albupdate[chave];
        });
        res.status(200).send("Alterado com sucesso").end();
    }

};

module.exports = {
    listar,
    buscar,
    criar,
    apagar,
    atualizar,
    alterar
};

