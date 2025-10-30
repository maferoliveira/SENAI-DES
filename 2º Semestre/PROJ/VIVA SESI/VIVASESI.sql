CREATE DATABASE VIVASESI;

USE VIVASESI;

CREATE TABLE aluno(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200),
    email VARCHAR(200),
    turma VARCHAR(20)
);

CREATE TABLE notificacoes (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    conteudo VARCHAR(500),
    data_envio DATE
);

CREATE TABLE administrador (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200),
    email VARCHAR(200),
    funcao VARCHAR(100)
);

CREATE TABLE eventos (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200),
    descricao VARCHAR(600),
    data DATE
);

CREATE TABLE jogo(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(300),
    descricao VARCHAR(600),
    quantidade_fases INTEGER
);