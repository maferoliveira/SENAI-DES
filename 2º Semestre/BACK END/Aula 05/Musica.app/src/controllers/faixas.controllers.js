const faixas = require("../data/faixas.data");
//define função utilizada na rota
//req -> request (requisicao)
//res -> response (resposta)

const listar = (req, res) => {
    res.send(faixas).end();
};
const buscar = (req, res) => {
    const id = req.params.id;

    var fx = "";

    faixas.forEach((faixa, index) => {
        if (faixa.id === id) {
            fx = faixa;
        }
    });
    if (fx === "") fx = "Não encontrado";

    res.send(fx).end();
};

const criar = (req, res) => {
    const data = req.body;
    faixas.push(data);
    res.status(201).send("Adicionada com sucesso").end();

};

const apagar = (req, res) => {
    const id = req.params.id;

    var indice = -1;

    faixas.forEach((faixa, index) => {
        if (faixa.id === id) {
            indice = index;
        }
    });

    if (indice === -1) {
        res.status(404).send("ID não localizado").end();
    } else {
        faixas.splice(indice, 1);
        res.status(200).send("Operação realizada com sucesso").end();
    }

};

const atualizar = (req, res) => {
    const fx = req.body;

    var encontrei = false;

    faixas.forEach((faixa, index) => {
        if (faixa.id === fx.id) {
            faixas[index] = fx;
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
    const fxupdate = req.body;

    var indice = -1;
    faixas.forEach((faixa, index) => {
        if (faixa.id == id) {
            indice = index;
        }
    });
    if (indice === -1) {
        res.status(404).send("ID não localizado").end();
    } else {
        Object.keys(fxupdate).forEach((chave) => {
            faixas[indice][chave] = fxupdate[chave];
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

