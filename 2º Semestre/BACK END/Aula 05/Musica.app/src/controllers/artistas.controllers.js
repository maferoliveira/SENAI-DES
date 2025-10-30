const artistas = require("../data/artistas.data");
//define função utilizada na rota
//req -> request (requisicao)
//res -> response (resposta)

const listar = (req, res) => {
    res.send(artistas).end();
};
const buscar = (req, res) => {
    const id = req.params.id;

    var artist = "";

    artistas.forEach((artista, index) => {
        if (artista.id === id) {
            artist = artista;
        }
    });
    if (artist === "") artist = "Não encontrado";

    res.send(artist).end();
};

const criar = (req, res) => {
    const data = req.body;
    artistas.push(data);
    res.status(201).send("Adicionada com sucesso").end();

};

const apagar = (req, res) => {
    const id = req.params.id;

    var indice = -1;

    artistas.forEach((artista, index) => {
        if (artista.id === id) {
            indice = index;
        }
    });

    if (indice === -1) {
        res.status(404).end();
    } else {
        artistas.splice(indice, 1);
        res.status(200).send("Apagado com sucesso!").end();
    }

};

const atualizar = (req, res) => {
    const artist = req.body;

    var encontrei = false;

    artistas.forEach((artista, index) => {
        if (artista.id === artist.id) {
            artistas[index] = artist;
            encontrei = true;
        }

    });
    if (encontrei == false) {
        res.status(404).send("ID não localizado").end();
    } else {
        res.status(200).send("Operação realizada com sucesso").end();
    }
};
const alterar = (req, res) => {
    const id = req.params.id;
    const artistupdate = req.body;

    var indice = -1;
    artistas.forEach((artista, index) => {
        if (artista.id == id) {
            indice = index;
        }
    });
    if (indice === -1) {
        res.status(404).send("ID não localizado").end();
    } else {
        Object.keys(artistupdate).forEach((chave) => {
            artistas[indice][chave] = artistupdate[chave];
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

