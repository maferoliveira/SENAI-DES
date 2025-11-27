DROP database if EXISTS cantina;
CREATE DATABASE cantina;
use cantina;

CREATE TABLE alunos (
    id int AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) not null,
    turma VARCHAR(50) not null
);
CREATE TABLE produtos(
    id int AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) not null,
    valor decimal(10,2) not null
);
CREATE TABLE pedidos(
    id int AUTO_INCREMENT PRIMARY KEY,
    data date not null,
    quantidade int not null,
    id_aluno int,
    id_produto int,
    FOREIGN key (id_aluno) REFERENCES alunos(id),
    FOREIGN key (id_produto) REFERENCES produtos(id)
);

INSERT into alunos (id, nome, turma) values (DEFAULT, "Maria Fernanda", "1 Ano A");
INSERT into alunos (id, nome, turma) values (DEFAULT, "Maria Fernanda", "2 Ano B");
INSERT into alunos (id, nome, turma) values (DEFAULT, "Maria Fernanda", "3 Ano C");

INSERT into produtos (id, nome, valor) values (DEFAULT, "Bolacha", 3.00);
INSERT into produtos (id, nome, valor) values (DEFAULT, "Salgado", 5.00);
INSERT into produtos (id, nome, valor) values (DEFAULT, "Chocolate", 7.00);

INSERT into pedidos (id, data, quantidade, id_aluno, id_produto) values (DEFAULT, "2025-11-12", 5, 1, 2);
INSERT into pedidos (id, data, quantidade, id_aluno, id_produto) values (DEFAULT, "2025-11-14", 4, 2, 3);
INSERT into pedidos (id, data, quantidade, id_aluno, id_produto) values (DEFAULT, "2025-11-16", 7, 3, 1);

Total de pedidos por produtos:
select produtos.nome as 'Produto', count(pedidos.id) as 'Total de pedidos' from produtos inner join pedidos on produtos.id = pedidos.id_produto group by produtos.nome;

Total de gasto por aluno:
select alunos.id as 'ID do aluno', alunos.nome as 'Aluno', alunos.turma as 'Turma',
sum(pedidos.quantidade * produtos.valor) as 'Total gasto' from alunos inner join pedidos on alunos.id = pedidos.id_aluno inner join produtos on produtos.id = pedidos.id_produto group by alunos.id, alunos.nome, alunos.turma order by alunos.id;

Total faturado:
select sum(pedidos.quantidade * produtos.valor) as 'Total faturado' from pedidos inner join produtos on produtos.id = pedidos.id_produto;
