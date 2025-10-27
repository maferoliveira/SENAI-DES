const dataPosts = require("../data/connection");
const validate = require("../middlewares/auth");
const {validaatendente} = require('../middlewares/validacargo');
const {validaadm} = require('../middlewares/validacargo');
const {consultas} = require("../routes/consultas.routes");

const criarconsulta = async (req, res) => {
    const { id_paciente, id_medico, data_consulta, status } = req.body;
    if (!id_paciente || !id_medico || !data || !status) {
        return res.status(400).json({ message: "Todos os campos devem ser preenchidos." });
    }
    try {
        await db.query("INSERT INTO consultas (id_paciente, id_medico, data, status) VALUES (?, ?, ?, ?)", [id_paciente, id_medico, data_consulta, status]);
        res.status(201).json({ message: "Consulta criada com sucesso." });
    } catch (error) {
        console.error("Erro ao criar consulta:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const listarconsultas = async (req, res) => {
    try {
        const [consultas] = await db.query("SELECT * FROM consultas");
        res.status(200).json(consultas);
    }catch (error) {
        console.error("Erro ao buscar consultas:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const consultarID = async (req, res) => {
    const { id } = req.params;
    try {
        const [consulta] = await db.query("SELECT * FROM consultas WHERE id_consulta = ?", [id]);
        if (consulta.length === 0) {
            return res.status(404).json({ message: "Consulta não encontrada." });
        }
        res.status(200).json(consulta[0]);
    }catch (error) {
        console.error("Erro ao buscar consulta:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const atualizarconsulta = async (req, res) => {
    const { id } = req.params;
    const { id_paciente, id_medico, data, status } = req.body;
    if (!id_paciente || !id_medico || !data || !status) {
        return res.status(400).json({ message: "Todos os campos devem ser preenchidos." });
    }
    try {
        const [resultado] = await db.query("UPDATE consultas SET id_paciente = ?, id_medico = ?, data = ?, status = ? WHERE id_consulta = ?", [id_paciente, id_medico, data, status, id]);
        if (resultado.affectedRows === 0) {
            return res.status(404).json({ message: "Consulta não encontrada." });
        }
        res.status(200).json({ message: "Consulta atualizada com sucesso." });
    } catch (error) {
        console.error("Erro ao atualizar consulta:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const deletarconsulta = async (req, res) => {
    const { id } = req.params;
    try {
        const [resultado] = await db.query("DELETE FROM consultas WHERE id_consulta = ?", [id]);
        if (resultado.affectedRows === 0) {
            return res.status(404).json({ message: "Consulta não encontrada." });
        }
        res.status(200).json({ message: "Consulta deletada com sucesso." });
    } catch (error) {
        console.error("Erro ao deletar consulta:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const consultasPorcargo = async (req, res) => {
    try {
        const [consultas] = await db.query("SELECT * FROM consultas GROUP BY cargo");
        res.status(200).json(consultas);
    } catch (error) {
        console.error("Erro ao buscar consultas:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

module.exports = {
    criarconsulta,
    deletarconsulta,
    consultarID,
    listarconsultas,
    atualizarconsulta,
    consultasPorcargo
}