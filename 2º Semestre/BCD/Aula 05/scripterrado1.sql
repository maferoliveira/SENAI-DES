CREATE DATABASE errado1;

USE errado1;

CREATE TABLE departamento (
  id integer auto_increment PRIMARY KEY,
  nome VARCHAR(100)
);

CREATE TABLE funcionarios (
  id integer auto_increment PRIMARY KEY,
  nome VARCHAR(100),
  cargo VARCHAR(50),
  departamento INTEGER,
  FOREIGN KEY (departamento) REFERENCES departamento(id)
);