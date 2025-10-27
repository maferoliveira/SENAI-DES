drop database if EXISTS clinica_vidamais;
create database clinica_vidamais;
use clinica_vidamais;

create table usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL,
    cargo VARCHAR(50) NOT NULL
);
create table paciente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);
create table consultas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    titulo VARCHAR(200) NOT NULL,
    conteudo TEXT NOT NULL,
    data_hora date not null,
    status varchar(100) not null,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

insert into usuarios (id, nome, email, senha, cargo) values (DEFAULT, "Carla Defendi Moraes", "moraescla@gmail.com", "202cb962ac59075b964b07152d234b70", "administradora");
insert into usuarios (id, nome, email, senha, cargo) values (DEFAULT, "Jorge Carlos", "carlos@gmail.com", "250cf8b51c773f3f8dc8b4be867a9a02", "atendente");
insert into usuarios (id, nome, email, senha, cargo) values (DEFAULT, "Joao Souza", "joaolucas@gmail.com", "68053af2923e00204c3ca7c6a3150cf7", "médico");
insert into usuarios (id, nome, email, senha, cargo) values (DEFAULT, "Maiara Louves", "louves@gmail.com", "7f975a56c761db6506eca0b37ce6ec87", "paciente");

insert into consultas (id, usuario_id, titulo, conteudo) values (default, "4", "Dor estomacal", "Dores fortes e constantes na barriga com apertos");