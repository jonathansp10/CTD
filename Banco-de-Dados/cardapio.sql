-- drop database if exists cardapio;
create database if not exists cardapio;
use cardapio;

create table categorias (
idCategoria int not null auto_increment primary key,
nomeCategoria varchar (30),
url_imagem varchar(300)
);

create table produtos(
idProduto int not null auto_increment primary key,
idCategoria int,
nome varchar(100),
descricao varchar (300),
imagem varchar(300),
valor decimal(5,2),
constraint fk_cat_prod
	foreign key (id_Categoria)
    references categorias(idCategoria)
);

create table clientes(
idClientes int not null auto_increment primary key,
nome varchar(50),
sobrenome varchar (100),
cpf char (11),
nrCelular char (15),
email varchar (150)
);

create table pedidos(
idPedido int not null auto_increment primary key,
idProduto int,
idCliente int,
quantidade int,
precoTotal decimal(10,2),
constraint fk_ped_prod
	foreign key (idProduto)
    references produtos(idProduto),
constraint fk_ped_cli
	foreign key (id_cliente)
    references clientes(idCliente)
);

create table vendas(
idVendas int not null auto_increment primary key,
idPedido int,
dataAtual date,
horaAtual time,
total decimal (10,2),
constraint fk_vendas_pedidos
	foreign key (idPedido)
    references pedidos (idPedido)
);

insert into categorias (nomeCategoria, url_imagem)
values ('pratos','https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2022/08/Brasileiro-lanca-mao-de-vale-refeicao-para-comer-mais-carne-em-restaurantes-shutterstock_2125609706.jpg?fit=1024%2C686&ssl=1'),
('lanches', '(https://img.freepik.com/fotos-gratis/vista-frontal-deliciosas-batatas-fritas-com-cheeseburgers-em-fundo-escuro-lanche-prato-fast-food-torrada-hamburguer-jantar_140725-158687.jpg?w=2000'),
('sobremesas', 'https://receitinhas.com.br/wp-content/uploads/2022/06/pote-da-felicidade-de-chocolate-730x365.jpg'),
('bebidas', 'https://conteudo.imguol.com.br/c/entretenimento/74/2022/09/13/drinques-bebida-alcoolica-tequila-cerveja-chopp-gim-martini-alcool-copos-tacas-1663094165597_v2_900x506.jpg');

