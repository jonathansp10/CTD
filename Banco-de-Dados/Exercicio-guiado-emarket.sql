select *
from produtos;

select ProdutoID, ProdutoNome, CategoriaID, PrecoUnitario,
format ((PrecoUnitario - (PrecoUnitario * 20)/100),2) as PrecoPromocional
from Produtos
order by PrecoUnitario desc;

select * from clientes;

select Empresa, Contato, Titulo, Pais
from clientes
where pais like 'bra_il';

select CategoriaNome
from categorias
order by CategoriaNome;

select Empresa, Contato, Titulo, Pais
from clientes
where titulo like '%Sale%';

select * from provedores;

select ProvedorID, Empresa, Contato, Pais
from provedores
where pais like '%brazil%';

select produtoID, ProdutoNome, ProvedorID,CategoriaID, PrecoUnitario,
format ((PrecoUnitario - (PrecoUnitario * 50)/100),2) as PrecoPromocional
from produtos
where ProvedorID = 7;



select ProdutoID,ProdutoNome, CategoriaID,
format (PrecoUnitario,2) as PrecoUnitario
from produtos
where PrecoUnitario between 10 and 20;

