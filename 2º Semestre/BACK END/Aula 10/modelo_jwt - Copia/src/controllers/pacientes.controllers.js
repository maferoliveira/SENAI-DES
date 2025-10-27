const db = require("../data/connection");

const cadastrarPaciente = async (req, res) => {
    const { nome, telefone} = req.body;
    if (!nome || !telefone) {
        return res.status(400).json({ message: "Todos os campos devem ser preenchidos." });
    }
    try {
        await db.query("INSERT INTO pacientes (nome, telefone) VALUES (?, ?)", [nome, telefone]);
        res.status(201).json({ message: "Paciente criado com sucesso." });
    } catch (error) {
        console.error("Erro ao criar paciente:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const listarpaciente = async (req, res) => {
    try {
        const user = req.headers('user');
        if(user.cargo === 'administrador'){
            const [paciente] = await db.query("SELECT * FROM paciente");
            res.status(200).json(paciente);
        }else if(user.cargo === 'atendente'){
            const [paciente] = await db.query("SELECT id, nome, telefone FROM pacientes");
            res.status(200).json(paciente);
        }else{
            const medico = req.header('id_equipe');
            const [paciente] = await db.query("SELECT p.id, p.nome, p.telefone FROM pacientes p JOIN consultas c ON p.id = c.id_paciente WHERE c.id_equipe = ?", [medico]);
            res.status(200).json(paciente);
        }
    } catch (error) {
        console.error("Erro ao buscar paciente:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const buscarpacienteID = async (req, res) => {
    const { id } = req.params;
    try {
        const [paciente] = await db.query("SELECT * FROM paciente WHERE id_paciente = ?", [id]);
        if (paciente.length === 0) {
            return res.status(404).json({ message: "Paciente não encontrado." });
        }
        res.status(200).json(paciente[0]);
    }catch (error) {
        console.error("Erro ao buscar paciente:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const atualizarPaciente = async (req, res) => {
    const { id } = req.params;
    const { nome, telefone } = req.body;
    if (!nome ||  !telefone) {
        return res.status(400).json({ message: "Todos os campos devem ser preenchidos." });
    }

    try {
        const [result] = await db.query("UPDATE paciente SET nome = ?, telefone = ? WHERE id_paciente = ?", [nome, telefone, id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Paciente não encontrado." });
        }
        res.status(200).json({ message: "Paciente atualizado com sucesso." });
    } catch (error) {
        console.error("Erro ao atualizar paciente:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const deletarPaciente = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.query("DELETE FROM paciente WHERE id_paciente = ?", [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Paciente não encontrado." });
        }
        res.status(200).json({ message: "Paciente deletado com sucesso." });
    } catch (error) {
        console.error("Erro ao deletar paciente:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

module.exports = {
    cadastrarPaciente,
    listarpaciente,
    buscarpacienteID,
    atualizarPaciente,
    deletarPaciente
};