DROP DATABASE IF EXISTS teste;
CREATE DATABASE teste;
USE teste;

CREATE TABLE alunos(
    id integer AUTO_INCREMENT PRIMARY KEY,
    nome varchar(100),
    email varchar(100)
);
CREATE TABLE cursos(
    id integer AUTO_INCREMENT PRIMARY KEY,
    materia varchar(100)
);
CREATE TABLE matriculas(
    id integer AUTO_INCREMENT PRIMARY KEY,
    aluno_id integer,
    FOREIGN KEY (aluno_id) REFERENCES alunos(id),
    curso_id integer,
    FOREIGN KEY (curso_id) REFERENCES cursos(id),
    data_matricula date
);