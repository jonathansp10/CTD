create database dh_tube;
use dh_tube;

create table avatar(
idAvatar int not null auto_increment primary key,
nome varchar(45),
urlImagem varchar (250)
);

create table pais(
idPais int not null auto_increment primary key,
nome varchar(100)
);


create table usuario(
idUsuario int not null auto_increment primary key,
nome varchar (45),
email varchar (45),
senha varchar (45),
dataNascimento datetime,
cep varchar (45),
pais_idPais int,
avatar_idAvatar int,
	foreign key (pais_idPais)
    references pais(idPais),
    foreign key (avatar_idAvatar)
    references avatar(idAvatar)
    
);

create table playlist(
idPlaylist int not null auto_increment primary key,
nome varchar (45),
dataCriacao datetime,
privado smallint (6),
usuario_idUsuario int,
	foreign key (usuario_idUsuario)
    references usuario (idUsuario)
);

create table video(
idVideo int not null auto_increment primary key,
usuario_idUsuario int,
titulo varchar (100),
descricao text,
tamanho double,
imagem varchar (100),
qtdReproducoes int,
qtdLikes int,
qtsDislikes int,
privado smallint,
dataPublicacao datetime,
	foreign key (usuario_idUsuario)
	references usuario(idUsuario)
    
);

create table playslist_video(
video_idVideo int,
playlist_idPlaylist int,
	foreign key (video_idVideo)
    references video (idVideo),
    foreign key (playlist_idPlaylist)
    references playlist (idPlaylist)
);

create table canal(
idCanal int not null auto_increment primary key,
nome varchar (45),
descricao text,
dataCriacao datetime,
usuario_idUsuario int,
	foreign key (usuario_idUsuario)
	references usuario(idUsuario)
);








 