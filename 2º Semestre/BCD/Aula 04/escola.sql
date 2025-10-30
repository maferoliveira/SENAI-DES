CREATE TABLE professores (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(160),
email VARCHAR(100),
telefone VARCHAR(11)
);

CREATE TABLE disciplinas (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(160),
);

CREATE TABLE turmas (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
nome varchar(160),
periodo VARCHAR(5) NOT NULL
);

CREATE TABLE aulas (
professor_id INTEGER,
turma_id INTEGER,
disciplina_id INTEGER,
FOREIGN KEY (professor_id) REFERENCES professores(id),
FOREIGN KEY(disciplina_id) REFERENCES disciplinas(id),
FOREIGN KEY(turma_id) REFERENCES turmas(id)
);