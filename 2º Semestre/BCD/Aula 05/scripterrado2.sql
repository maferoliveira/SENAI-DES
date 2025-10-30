CREATE DATABASE errado2;
USE errado2;
CREATE TABLE usuarios (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100)
);

CREATE TABLE cursos (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100)
);

CREATE TABLE aulas (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  curso_id INT,
  titulo VARCHAR(100),
  FOREIGN KEY (Curso_id) REFERENCES cursos(id)
);

CREATE TABLE progresso (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  usuario_id INTEGER,
  aula_id INTEGER,
  status VARCHAR(20),
  data_conclusao DATE,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (aula_id) REFERENCES aulas(id)
);
