const prisma = require("../data/prisma");

const novaturma = async (req, res) =>{
    const turma = req.body;

    const nturma = await prisma.turmas.create({
        data: turma
    });
    res.json(nturma).status(201).end();
};

const listarturmas = async (req, res) =>{
    const turmas = await prisma.turmas.findMany();
    res.json(turmas).status(201).end();
};

const buscarturma = async (req, res) =>{
    const {id} = req.params;

    const turma = await prisma.turmas.findUnique({
        where: {id},
        include: {
            alunos: true
        }
    });
    res.json(turma).status(201).end();
};

const apagarturma = async (req, res) =>{
    const {id} = req.params;

    const turma = await prisma.turma.delete({
        where: {id}
    });
    res.json(turma).status(201).end();

};

const atualizarturma = async (req, res) =>{
    const {id} = req.params;
    const dados = req.body;

    const turma = await prisma.turmas.update({
        where: {id},
        data: dados
    });
    res.json(turma).status(201).end();
}
module.exports =  {
    novaturma,
    listarturmas,
    buscarturma,
    apagarturma,
    atualizarturma
}