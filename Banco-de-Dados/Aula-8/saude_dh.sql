create database saude_dh;
use saude_dh;

create table pacientes (
paciente_id int not null auto_increment primary key,
paciente_idsaude int,
paciente_nome varchar(50),
paciente_sobrenome varchar(100)
);

create table especialidades(
especialidade_id int not null auto_increment primary key,
especialidade_nome varchar(100)
);

create table medicos (
medico_id int not null auto_increment primary key,
medico_nome varchar(50),
medico_sobrenome varchar(100),
medico_especialidade int,
	foreign key (medico_especialidade)
	references especialidades (especialidade_id)
);

create table consultas (
consulta_id int not null auto_increment primary key,
paciente_id int,
medico_id int,
data_consulta date, 
hora_consulta time,
	foreign key (paciente_id)
    references pacientes (paciente_id),
    foreign key (medico_id)
    references medicos (medico_id)
);

insert into pacientes (paciente_idsaude,paciente_nome,paciente_sobrenome)
values 					(203402, 'Julio', 'Santos da Rocha'),
(34356, 'Solange', 'Ferreira Lucas'),
(435676, 'Eustaquio', 'Figueiredo Souza'),
(6567876, 'Silvano', 'Silva Lopes'),
(9875768, 'João Lucas', 'Souza Costa');

select * from pacientes;

insert into consultas(paciente_id,medico_id,data_consulta,hora_consulta)
values (2, 7, '2022-11-05', '11:30');
select c.consulta_id, m.medico_nome, c.data_consulta, c.hora_consulta from consultas c inner join medicos m on c.medico_id = m.medico_id;

insert into especialidades (especialidade_nome)
values ('oftamologista'),('cardiologista'), ('otorrino'), ('oncologista'),('pediatra');

insert into medicos (medico_nome, medico_sobrenome, medico_especialidade)
values ('Antonio','Seixo', 2), ('Ana Lucia', 'Machado', 1), ('Carlos Jose','Medeiros', 5), ('Regina', 'Lucena', 4),('Fernando', 'Ramil', 3), ('Priscila', 'Alcantara',3);

select * from medicos;

select e.especialidade_nome, count(m.medico_id) as qtd_medicos
from especialidades e 
inner join medicos m
on especialidade_id = m.medico_especialidade
group by e.especialidade_nome;