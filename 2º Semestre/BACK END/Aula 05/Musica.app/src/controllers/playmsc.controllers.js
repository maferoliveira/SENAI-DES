const playmsc = require("../data/playmsc.data");
//define função utilizada na rota
//req -> request (requisicao)
//res -> response (resposta)
const listar = (req, res) => {
    res.send(playmsc).end();
};

const buscar = (req, res) => {
    const id = req.params.id;
    let musica = "";

    playmsc.forEach((msc) => {
        if (msc.id === id) {
            musica = msc;
        }
    });
    if (musica === "") musica = "Não encontrado";

    res.send(musica).end();
};

const criar = (req, res) => {
    const data = req.body;
    playmsc.push(data);
    res.status(201).send("Adicionada com sucesso").end();
};

const apagar = (req, res) => {
    const id = req.params.id;
    let indice = -1;

    playmsc.forEach((msc, index) => {
        if (msc.id === id) {
            indice = index;
        }
    });

    if (indice === -1) {
        res.status(404).send("ID não localizado").end();
    } else {
        playmsc.splice(indice, 1);
        res.status(200).send("Apagado com sucesso!").end();
    }
};

const atualizar = (req, res) => {
    const musica = req.body;
    let encontrei = false;

    playmsc.forEach((msc, index) => {
        if (msc.id === musica.id) {
            playmsc[index] = musica;
            encontrei = true;
        }
    });

    if (!encontrei) {
        res.status(404).send("ID não localizado").end();
    } else {
        res.status(200).send("Atualizado com sucesso").end();
    }
};

const alterar = (req, res) => {
    const id = req.params.id;
    const musicaupdate = req.body;
    let indice = -1;

    playmsc.forEach((msc, index) => {
        if (msc.id === id) {
            indice = index;
        }
    });

    if (indice === -1) {
        res.status(404).send("ID não localizado").end();
    } else {
        Object.keys(musicaupdate).forEach((chave) => {
            playmsc[indice][chave] = musicaupdate[chave];
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