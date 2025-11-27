const db = require("../data/connection");

const cadastrar = async (req, res) =>{
    const {nome, turma} = req.body;
    if(!nome || !turma){
        return res.status(400).json({message:'Todos os  campos devem ser preenchidos.'});
    }
    try {
        const resultado = await db.query("insert into alunos (id, nome, turma) values (default, ?, ?)", [nome, turma]);
        const novoaluno = {
            id: resultado[0].insertId,
            nome: nome,
            turma: turma
    
        };
        res.status(201).json(novoaluno).end();
    } catch (error) {
        console.error("Erro ao cadastrar aluno:", error);
        res.status(500).json({ message: "Internet Server Error" });
    }
}

const listar = async (req, res) => {
    try {
        const [aluno] = await db.query("select * from alunos");
        res.status(200).json(aluno);
    } catch (error) {
        console.error("Erro ao buscar Aluno:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const { nome, turma } = req.body;
    if (!nome || !turma) {
        return res.status(400).json({ message: "Todos os campos devem ser preenchidos." });
    }
    try {
        const [resultado] = await db.query("update alunos set nome = ?, turma = ? where id = ?", [nome, turma, id]);
        if(resultado.affectedRows === 0){
            return res.status(404).json({message: "Aluno não encontrado."});
        }
        res.status(200).json({message: "Aluno atualizado com sucesso."});
    } catch (error) {
        console.error("Erro ao buscar aluno:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const deletar = async (req, res) => {
    const {id} = req.params;
    try {
        const [resultado] = await db.query("delete from alunos where id = ?", [id]);
        if (resultado.affectedRows === 0) {
            return res.status(404).json({ message: "Aluno não encontrado." });}
             res.status(200).json({ message: "Aluno deletado com sucesso." });
    } catch (error) {
        console.error("Erro ao buscar Aluno:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const totalgastoporaluno = async (req, res) =>{
    try{
        const resultado = await db.query("select alunos.id as 'ID do aluno', alunos.nome as 'Aluno', alunos.turma as 'Turma', sum(pedidos.quantidade * produtos.valor) as 'Total gasto' from alunos inner join pedidos on alunos.id = pedidos.id_aluno inner join produtos on produtos.id = pedidos.id_produto group by alunos.id, alunos.nome, alunos.turma order by alunos.id;")
        res.status(200).json(resultado[0]);
}catch(error){
    console.error("Erro ao buscar aluno: ", error);
    res.status(500).json({message:"Internal server error"});
}
}

module.exports = {
    cadastrar,
    listar,
    atualizar,
    deletar,
    totalgastoporaluno
}