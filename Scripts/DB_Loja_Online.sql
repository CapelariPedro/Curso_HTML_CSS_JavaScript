-- Criação da tabela "clientes"
CREATE TABLE clientes (
    cliente_id INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100)
);

-- Criação da tabela "produtos"
CREATE TABLE produtos (
    produto_id INT PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    preco DECIMAL(10,2) NOT NULL
);

-- Criação da tabela "pedidos"
CREATE TABLE pedidos (
    pedido_id INT PRIMARY KEY,
    cliente_id INT,
    data_pedido DATE,
    FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id)
);

-- Criação da tabela "itens_pedido"
CREATE TABLE itens_pedido (
    item_id INT PRIMARY KEY,
    pedido_id INT,
    produto_id INT,
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(pedido_id),
    FOREIGN KEY (produto_id) REFERENCES produtos(produto_id)
);

-- Criação da tabela "pagamentos"
CREATE TABLE pagamentos (
    pagamento_id INT PRIMARY KEY,
    pedido_id INT,
    valor DECIMAL(10,2) NOT NULL,
    metodo_pagamento VARCHAR(50),
    FOREIGN KEY (pedido_id) REFERENCES pedidos(pedido_id)
);