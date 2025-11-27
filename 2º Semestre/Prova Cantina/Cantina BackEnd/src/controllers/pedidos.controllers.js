const db = require("../data/connection");

const cadastrar = async (req, res) =>{
    const {data, quantidade, id_aluno, id_produto} = req.body;
    if( !data || !quantidade || !id_aluno || !id_produto){
        return res.status(400).json({message:'Todos os  campos devem ser preenchidos.'});
    }
    try {
        const resultado = await db.query("insert into pedidos (id, data, quantidade, id_aluno, id_produto) values (default, ?, ?, ?, ?)", [ data, quantidade, id_aluno, id_produto]);
        const novopedido = {
            id: resultado[0].insertId,
            data: data,
            quantidade: quantidade, 
            id_aluno: id_aluno,
            id_produto: id_produto
    
        };
        res.status(201).json(novopedido).end();
    } catch (error) {
        console.error("Erro ao cadastrar pedido:", error);
        res.status(500).json({ message: "Internet Server Error" });
    }
}

const listar = async (req, res) => {
    try {
        const [pedido] = await db.query("select * from pedidos");
        res.status(200).json(pedido);
    } catch (error) {
        console.error("Erro ao buscar pedido:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const {data, quantidade, id_aluno, id_produto } = req.body;
    if (!data || !quantidade || !id_aluno || !id_produto) {
        return res.status(400).json({ message: "Todos os campos devem ser preenchidos." });
    }
    try {
        const [resultado] = await db.query("update pedidos set data = ?, quantidade = ?, id_aluno = ?, id_produto = ? where id = ?", [data, quantidade, id_aluno, id_produto, id]);
        if(resultado.affectedRows === 0){
            return res.status(404).json({message: "Pedido não encontrado."});
        }
        res.status(200).json({message: "Pedido atualizado com sucesso."});
    } catch (error) {
        console.error("Erro ao buscar pedido:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const deletar = async (req, res) => {
    const {id} = req.params;
    try {
        const [resultado] = await db.query("delete from pedidos where id = ?", [id]);
        if (resultado.affectedRows === 0) {
            return res.status(404).json({ message: "Pedido não encontrado." });}
             res.status(200).json({ message: "Pedido deletado com sucesso." });
    } catch (error) {
        console.error("Erro ao buscar pedido:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const totalfaturado = async (req, res) =>{
    try{
        const resultado = await db.query("select sum(pedidos.quantidade * produtos.valor) as 'Total faturado' from pedidos inner join produtos on produtos.id = pedidos.id_produto;")
        res.status(200).json(resultado[0]);
}catch(error){
    console.error("Erro ao buscar pedido: ", error);
    res.status(500).json({message:"Internal server error"});
}
}

module.exports = {
    cadastrar,
    listar,
    atualizar,
    deletar,
    totalfaturado
}