
const reservas = require("../data/reservas.data");

//define função utilizada na rota
//req -> request (requisicao)
//res -> response (resposta)

const listar = (req, res) => {
    res.send(reservas).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    const hoje = new Date();
    const checkIn = new Date(data.checkIn)

    let clienteexiste = false;
    for (let i = 0; i < clientes.length; i++) {
        if (clienteId === clientes[i].id) {
            clienteexiste = true;
            break;
        }
    }
    if (!clienteexiste) {
        return res.status(400).send("Cliente não cadastrado").end();
    }
    if (checkIn < hoje) {
        return res.status(400).send("Data inválida").end();
    }
    for (let i = 0; i < reserva.length; i++) {
        if (reserva[i].clienteId === data.clienteId && reserva[i].checkOut === null) {
            res.status(400).send("Cliente já possui reserva ativa").end();
            return;
        }
    }

    for (let i = 0; i < quartos.length; i++) {
        if (quartoId === quartos[i].id) {
            if (quartos[i].status === "Ocupado") {
                return res.status(400).send("Quarto ocupado").end();
            }
        }
    }

    reservas.push(data);
    res.status(201).send("Cadastrado com sucesso").end();


};

const finalizar = (req, res) => {
    const resv = req.body;
    let encontrei = false;

    reservas.forEach((item) => {
        if (item.id === resv.id && item.checkOut === null) {
            let hoje = new date();
            let dia = hoje.getDate();
            let mes = hoje.getMonth() + 1;
            let ano = hoje.getFullYear();
            if (dia < 10) dia = "0" + dia;
            if (mes < 10) mes = "0" + mes;
            item.checkOut = dia + "/" + mes + "/" + ano;
            encontrei = true;
        }

    });

    if (encontrei == false) {
        res.status(404).send("ID não localizado").end();
    } else {
        res.status(201).send("Cadastrado com sucesso").end();
    }
};


module.exports = {
    listar,
    cadastrar,
    finalizar
};

