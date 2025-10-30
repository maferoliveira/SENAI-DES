CREATE DATABASE livraria;
USE livraria;

CREATE TABLE usuarios (
    id integer AUTO_INCREMENT PRIMARY KEY,
    nome varchar(100) not null,
    email varchar(100),
    nascimento date
);

CREATE TABLE livros (
    id integer AUTO_INCREMENT PRIMARY KEY,
    titulo varchar(100) not null,
    autor varchar(100) not null,
    publicacao int (4)
);

CREATE table emprestimos(
   id integer AUTO_INCREMENT PRIMARY KEY,
    usuarios_id integer,
    livros_id integer,
    FOREIGN KEY (usuarios_id) REFERENCES usuarios(id),
    FOREIGN KEY (livros_id) REFERENCES livros(id),
    data_emprestimo date,
    data_devolucao date
);


INSERT INTO usuarios (id, nome, email, nascimento) VALUES ("id", "Maria Clara Moraes", "claramaria12@gmail.com", "2007-05-12");

INSERT INTO usuarios (id, nome, email, nascimento) VALUES ("id", "Ricardo Jose Amancio", "amanciojose45@gmail.com", "2000-08-20");

INSERT INTO usuarios (id, nome, email, nascimento) VALUES ("id", "Tania Regina Moraes", "moraesregina@gmail.com", "1980-05-15");

SELECT * FROM usuarios;
SELECT * FROM usuarios where id = 2;


INSERT INTO livros (id, titulo, autor, publicacao) values ("id", "A paciente silenciosa", "Alex Michaelides", "2019");

INSERT INTO livros (id, titulo, autor, publicacao) values ("id", "A paciente silenciosa", "Alex Michaelides", "2019");

INSERT INTO livros (id, titulo, autor, publicacao) values ("id", "A paciente silenciosa", "Alex Michaelides", "2019");

SELECT * FROM livros;
SELECT titulo, publicacao FROM livros WHERE id = 3;



INSERT INTO emprestimos (id, usuarios_id, livros_id, data_emprestimo, data_devolucao) values ("id", "1", "2", "2025-08-25", "2025-09-25");

INSERT INTO emprestimos (id, usuarios_id, livros_id, data_emprestimo, data_devolucao) values ("id", "2", "3", "2025-07-29", "2025-08-29");

SELECT * FROM emprestimos;
select id, data_emprestimo from emprestimos;

UPDATE emprestimos
SET data_devolucao = "2025-08-30"
WHERE id = 2;

SELECT * FROM emprestimos;

DELETE FROM emprestimos
WHERE id = 2;

SELECT * FROM emprestimos
WHERE id = 2;