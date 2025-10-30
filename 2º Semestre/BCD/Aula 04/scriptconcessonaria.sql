DROP DATABASE concessionaria;
CREATE DATABASE concessionaria;
USE concessionaria;

CREATE TABLE clientes (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(160),
cpf VARCHAR(14)
);

CREATE TABLE veiculos (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
modelo VARCHAR(100),
placa VARCHAR(7),
categoria VARCHAR(100)
);

CREATE TABLE manutencoes (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
tipo VARCHAR(100),
data DATE,
observacao VARCHAR(200),
veiculo_id INTEGER,
FOREIGN KEY (veiculo_id) REFERENCES veiculos(id)
);

CREATE TABLE contratos (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
data_inicio DATE,
data_fim DATE,
valor VARCHAR(100),
cliente_id INTEGER,
FOREIGN KEY (cliente_id) REFERENCES clientes(id),
veiculo_id INTEGER,
FOREIGN KEY (veiculo_id) REFERENCES veiculos(id)
);

INSERT INTO clientes (id, nome, cpf) VALUES (DEFAULT, "Maria Clara Moraes", "215.456.365-85");

INSERT INTO veiculos (id, modelo, placa, categoria) VALUES (DEFAULT, "Civic", "aadc1d25", "sedan");

INSERT INTO manutencoes (id, data, observacao, tipo, veiculo_id) VALUES (DEFAULT, "2025-03-05", "quebrado", "cambio", "1");

INSERT INTO contratos (id, data_inicio, data_fim, valor, veiculo_id, cliente_id) VALUES (DEFAULT, "2020-05-20", "2030-05-20", "3000", "1", "1");