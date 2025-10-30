CREATE DATABASE livraria;
USE livraria;
CREATE TABLE livros(
    id integer AUTO_INCREMENT PRIMARY KEY,
    titulo varchar(100),
    autor varchar(100),
    ano int
);
CREATE TABLE usuarios(
    id integer AUTO_INCREMENT PRIMARY KEY,
    nome varchar(100),
    email varchar(100)
);
Create table emprestimos(
    id integer AUTO_INCREMENT PRIMARY KEY,
    usuario_id integer,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    livro_id integer,
    FOREIGN KEY (livro_id) REFERENCES livros(id),
    data_devolucao date,
    data_retirada date
);

INSERT into livros (id, titulo, autor, ano) VALUES (DEFAULT, "O homem de palha", "Pablo Zorzi", "2022");
INSERT into livros (id, titulo, autor, ano) VALUES (DEFAULT, "Suicidas", "Raphael Montes", "2019");
INSERT into livros (id, titulo, autor, ano) VALUES (DEFAULT, "Amor e gelato", "Jenna Evans Welch", "2017");

INSERT into usuarios (id, nome, email) VALUES (DEFAULT, "Maria Fernanda Moraes", "mafer@gmail.com");
INSERT into usuarios (id, nome, email) VALUES (DEFAULT, "Clara Oliveira", "claoliv@gmail.com");
INSERT into usuarios (id, nome, email) VALUES (DEFAULT, "Joana Nunes", "jonunes@gmail.com");

INSERT into emprestimos (id, usuario_id, livro_id, data_retirada) VALUES (DEFAULT, "1", "2", "2025/06/20");
INSERT into emprestimos (id, usuario_id, livro_id, data_retirada) VALUES (DEFAULT, "3", "3", "2025/06/20");
INSERT into emprestimos (id, usuario_id, livro_id, data_retirada) VALUES (DEFAULT, "2", "1", "2025/06/20");

UPDATE emprestimos SET data_devolucao = "mariaoliveiira@gmail.com" WHERE id = 2;