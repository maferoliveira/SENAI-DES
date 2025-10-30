DROP DATABASE musicas;
CREATE DATABASE musicas;
use musicas;
CREATE TABLE usuarios(
    id integer AUTO_INCREMENT PRIMARY KEY,
    nome varchar(100),
    email varchar(100)
);
CREATE TABLE musicas(
    id integer AUTO_INCREMENT PRIMARY KEY,
    titulo varchar(100),
    artista varchar(100),
    duracao varchar(100)
);
CREATE TABLE playlist(
    id integer AUTO_INCREMENT PRIMARY KEY,
    nome varchar(100),
    usuario_id integer,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
CREATE TABLE playlist_musica(
    id integer AUTO_INCREMENT PRIMARY KEY,
    ordem varchar(100),
    musica_id integer,
    FOREIGN KEY (musica_id) REFERENCES musicas(id),
    playlist_id integer,
    FOREIGN KEY (playlist_id) REFERENCES playlist(id)
);

INSERT into usuarios(id, nome, email) VALUES(DEFAULT,"Maria Fernanda Oliveira","mafer@gmail.com");

INSERT into musicas(id, titulo, artista, duracao) VALUES(DEFAULT,"The smallest man who ever lived","Taylor Swift", "4m.05s");

INSERT into playlist(id, nome, usuario_id) VALUES(DEFAULT,"Tay","1");

INSERT into playlist_musica(id, ordem, musica_id, playlist_id) VALUES(DEFAULT, "crescente","1", "1");