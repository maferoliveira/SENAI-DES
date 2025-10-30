DROP DATABASE IF EXISTS clinicavida;
CREATE DATABASE clinicavida;

USE clinicavida;

CREATE TABLE usuarios (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(160),
telefone VARCHAR(17),
email VARCHAR(100),
senha VARCHAR(10),
cargo VARCHAR(100)
);

CREATE TABLE pacientes (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100),
telefone VARCHAR(100)
);


CREATE TABLE consultas (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
data DATE,
hora VARCHAR(100),
status VARCHAR(100),
id_medico VARCHAR(160),
id_paciente VARCHAR(17)
);

INSERT INTO usuarios
VALUES (DEFAULT, "Maria de carmo moraes", "19 998989809", "Marinadecarmo@gmail", "123senha", "cardiologista");

INSERT INTO usuarios
VALUES (DEFAULT, "Otavio pedroso", "19 2222333334", "Alexandrelimeira@gmail", "rere1234", "Ortopedista");

INSERT INTO usuarios
VALUES (DEFAULT, "Renata carvalho", "19 2222333334", "Alexandrelimeira@gmail", "oi9977654r", "Atendente");


INSERT INTO consultas
VALUES (DEFAULT, "2025-12-12", "12:50", "Em andamento", "1", "2");

INSERT INTO consultas
VALUES (DEFAULT, "2025-12-11", "08:30", "Finalizada", "2", "1");


INSERT INTO pacientes
VALUES (DEFAULT, "Alexandre limeira", "19 99299094");

INSERT INTO pacientes
VALUES (DEFAULT, "Mariene oliveira", "19 123433333");


