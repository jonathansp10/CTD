drop database if exists  adocao_animais;
create database adocao_animais;
use adocao_animais;

--
-- Estrutura da tabela para tabela 'enderecos'
--

create table enderecos ( 
id_endereco int not null auto_increment primary key,
logradouro varchar(150),
numero int,
cidade varchar (100),
estado varchar (100),
cep varchar (10),
complemento varchar (100)	
);

--
-- Inserindo values na tabela 'enderecos'
--
insert into enderecos (id_endereco, logradouro, numero, cidade, estado, cep, complemento)
values (1,'Rua Americo Brasiliense', 25, 'Campinas', 'SP', 13100-436, 'bar do tutu-bola');

insert into enderecos (id_endereco, logradouro, numero, cidade, estado, cep, complemento)
values (2,'Rua Rafael Andrade Duarte', 74, 'Campinas', 'SP', 13136438, 'nao possui');

update enderecos set cep = '13100436' where id_endereco = 1;

insert into enderecos (id_endereco, logradouro, numero, cidade, estado, cep, complemento)
values (3,'Rua Triangulo Alto', 59, 'Sao Paulo', 'SP', 13136528, 'Rua Americana');

insert into enderecos (id_endereco, logradouro, numero, cidade, estado, cep, complemento)
values (4,'Rua Carlos Stevenson', 20, 'Campinas', 'SP', 13286438, null);

select * from enderecos;

--
-- Estrutura da tabela para tabela 'lares temporarios'
--

create table lares_temporarios(
id_lar_temporario int not null auto_increment primary key,
nome varchar (150),
id_endereco int,
	foreign key (id_endereco)
    references enderecos (id_endereco)
);

--
-- Inserindo values na tabela 'lares temporarios'
--

insert into lares_temporarios (id_lar_temporario, nome, id_endereco)
values ( 1,'Anjos com patas',2);

insert into lares_temporarios (id_lar_temporario, nome, id_endereco)
values ( 2,'ONG Gaava',1);
select * from lares_temporarios;

--
-- Estrutura da tabela para tabela 'tutores'
--

create table tutores ( 
id_tutor int not null auto_increment primary key,
nome varchar (150),
sobrenome varchar (100),
data_nascimento date,
id_endereco int,
	foreign key (id_endereco)
    references enderecos (id_endereco)
);

--
-- Inserindo dados na tabela 'tutores'
--
insert into tutores (id_tutor, nome, sobrenome, data_nascimento, id_endereco)
values ( 1,'Larissa', 'Becker', '1999-05-03',3);

insert into tutores (id_tutor, nome, sobrenome, data_nascimento,id_endereco)
values ( 2,'Bruno', 'Luan', '1997-11-23',4);

select * from tutores;

--
-- Estrutura da tabela para tabela 'animais'
--

create table animais (
id_Animal int not null auto_increment primary key,
tipo varchar(80),
nome varchar(100),
porte varchar(50),
nr_microchip int,
id_lar_temporario int,
	foreign key (id_lar_temporario)
    references lares_temporarios (id_lar_temporario),
id_tutor int ,
	foreign key (id_tutor)
    references tutores (id_tutor)
);

--
-- Inserindo values na tabela 'animais'
--
insert into animais (id_Animal, tipo, nome, porte, nr_microchip,id_lar_temporario,id_tutor)
values ( 1,'cachorro', 'Nina', 'medio', 20,1,2);

insert into animais (id_Animal, tipo, nome, porte, nr_microchip,id_lar_temporario,id_tutor)
values ( 2,'gato', 'Roger', 'pequeno', 23,2,1);

insert into animais (id_Animal, tipo, nome, porte, nr_microchip,id_lar_temporario,id_tutor)
values ( 3,'cachorro', 'Lua', 'pequeno', 25,1,1);


-- Exclusao de dados:
delete from animais where id_Animal = 3;



-- Selecao de registros incluindo join com agregacao:

select a.nome as NomeAnimal, a.tipo, concat(t.nome, ' ', t.sobrenome) as NomeTutor, concat(e.logradouro, ', ', e.numero,', ', e.cidade, ', ', e.estado) as endereco
from animais a
inner join tutores t 
on a.id_tutor = t.id_tutor
inner join enderecos e
on e.id_endereco = t.id_endereco;

select count(a.id_Animal), l.nome 
from animais a
inner join lares_temporarios l
on a.id_lar_temporario = l.id_lar_temporario
group by l.nome
having l.nome like 'ONG%';
