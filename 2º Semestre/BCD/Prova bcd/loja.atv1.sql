CREATE DATABASE loja;
USE loja;
CREATE TABLE clientes(
    id integer AUTO_INCREMENT PRIMARY KEY,
    nome varchar(100),
    email varchar(100)
);
Create table pedidos(
    id integer AUTO_INCREMENT PRIMARY KEY,
    cliente_id integer,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    data_pedido date,
    status varchar(50)
);
INSERT into clientes (id, nome, email) VALUES (DEFAULT, "José da Silva", "silva@gmail.com");
INSERT into clientes (id, nome, email) VALUES (DEFAULT, "Maria Oliveira", "ma.oliv@gmail.com");
INSERT into clientes (id, nome, email) VALUES (DEFAULT, "Amalia Carlos", "amaca@gmail.com");

INSERT into pedidos (id, cliente_id, data_pedido, status) VALUES (DEFAULT, "1", "2025/04/15", "entregue");
INSERT into pedidos (id, cliente_id, data_pedido, status) VALUES (DEFAULT, "2", "2025/03/20", "enviado");
INSERT into pedidos (id, cliente_id, data_pedido, status) VALUES (DEFAULT, "3", "2025/09/30", "entregue");

UPDATE clientes SET email = "mariaoliveiira@gmail.com" WHERE id = 2;
DELETE from pedidos where id = 3;