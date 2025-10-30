CREATE DATABASE errado3;
USE errado3;
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
  curso_id INTEGER,
  titulo VARCHAR(100),
  FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

CREATE TABLE progresso (
  id INT AUTO_INCREMENT PRIMARY KEY,
  status VARCHAR(20),
  data_conclusao DATE,
  usuario_id INT,
  aula_id INT,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (aula_id) REFERENCES aulas(id)
);
