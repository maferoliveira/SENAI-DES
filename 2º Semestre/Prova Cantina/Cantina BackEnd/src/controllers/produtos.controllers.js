const db = require("../data/connection");

const cadastrar = async (req, res) =>{
    const {nome, valor} = req.body;
    if(!nome || !valor){
        return res.status(400).json({message:'Todos os  campos devem ser preenchidos.'});
    }
    try {
        const resultado = await db.query("insert into produtos (id, nome, valor) values (default, ?, ?)", [nome, valor]);
        const novoproduto = {
            id: resultado[0].insertId,
                nome: nome,
                valor: valor
    
        };
        res.status(201).json(novoproduto).end();
    } catch (error) {
        console.error("Erro ao cadastrar produto:", error);
        res.status(500).json({ message: "Internet Server Error" });
    }
}

const listar = async (req, res) => {
    try {
        const [produto] = await db.query("select * from produtos");
        res.status(200).json(produto);
    } catch (error) {
        console.error("Erro ao buscar produto:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const { nome, valor } = req.body;
    if (!nome || !valor) {
        return res.status(400).json({ message: "Todos os campos devem ser preenchidos." });
    }
    try {
        const [resultado] = await db.query("update produtos set nome = ?, valor = ? where id = ?", [nome, valor, id]);
        if(resultado.affectedRows === 0){
            return res.status(404).json({message: "Produto não encontrado."});
        }
        res.status(200).json({message: "Produto atualizado com sucesso."});
    } catch (error) {
        console.error("Erro ao buscar produto:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const deletar = async (req, res) => {
    const {id} = req.params;
    try {
        const [resultado] = await db.query("delete from produtos where id = ?", [id]);
        if (resultado.affectedRows === 0) {
            return res.status(404).json({ message: "Produto não encontrado." });}
             res.status(200).json({ message: "Produto deletado com sucesso." });
    } catch (error) {
        console.error("Erro ao buscar produto:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const totalpedidosporprodutos = async (req, res) =>{
    try{
        const resultado = await db.query("select produtos.nome as 'Produto', count(pedidos.id) as 'Total de pedidos' from produtos inner join pedidos on produtos.id = pedidos.id_produto group by produtos.nome;")
        res.status(200).json(resultado[0]);
}catch(error){
    console.error("Erro ao buscar produto: ", error);
    res.status(500).json({message:"Internal server error"});
}
}

module.exports = {
    cadastrar,
    listar,
    atualizar,
    deletar,
    totalpedidosporprodutos
}