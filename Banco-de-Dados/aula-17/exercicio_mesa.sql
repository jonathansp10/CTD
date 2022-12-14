create view dados_cliente as 
select c.ClienteID, c.contato, c.fax, c.telefone 
from Clientes c;

select * from dados_cliente;

select * from clientes;

select c.contato,c.telefone,c.fax
from clientes c
where c.fax = "";

select * from dados_cliente
where fax = "";

create view dados_fornecedor as
select p.provedorID, p.contato, p.empresa, concat(p.endereco, ' ', p.codigoPostal, ' ', p.pais) as enderecoC
from provedores p;

select * from dados_fornecedor;

select ProvedorID, contato, Endereco, Pais 
from provedores 
where Endereco like "%Americanas%";

select * from dados_fornecedor
where enderecoC like "%Americanas%";
























