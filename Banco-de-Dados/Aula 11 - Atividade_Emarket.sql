select * 
from Categorias;

select CategoriaNome, Descricao
from Categorias;

select * 
from Produtos;

select Descontinuado
from Produtos
where Descontinuado = 1;

select ProdutoNome,ProvedorID
from Produtos
where ProvedorID = 8;

select * 
from Produtos;

select ProdutoID, ProdutoNome, PrecoUnitario,
format (PrecoUnitario,2) as PrecoUnitario
from produtos
where PrecoUnitario between 10 and 22
order by PrecoUnitario desc;

select ProdutoID, ProdutoNome, UnidadesEstoque, NivelReabastecimento
from produtos
where (UnidadesEstoque < NivelReabastecimento);







