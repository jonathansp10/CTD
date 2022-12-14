select * from sakila.locacao;

select i.inventario_id, i.loja_id, concat(c.nome, ' ', c.sobrenome) as cliente ,f.titulo as filme,
concat(fu.nome, ' ' , fu.sobrenome) as funcionario, l.data_locacao, f.preco_locacao
from inventario i
inner join locacao l
on i.inventario_id = l.inventario_id
inner join cliente c 
on l.cliente_id = c.cliente_id
inner join funcionario fu 
on l.funcionario_id = fu.funcionario_id
inner join filme f
on i.filme_id = f.filme_id;

select f.titulo as filme, i.nome as idioma
from filme f
right join idioma i
on f.idioma_id = i.idioma_id;

select distinct concat(c.nome, ' ', c.sobrenome) as cliente, l.locacao_id,
l.data_locacao, p.data_pagamento, p.valor
from cliente c
left join locacao l
on c.cliente_id = l.cliente_id
left join pagamento p
on c.cliente_id = p.cliente_id and l.locacao_id = p.locacao_id
order by p.data_pagamento, valor desc;

select f.titulo as filme, f.preco_locacao as preco, count(l.locacao_id) as qtdLocacao
from filme f
left join inventario i
on f.filme_id - i.filme_id
left join locacao l
on i.inventario_id = l.inventario_id
group by f.titulo
order by qtdLocacao desc;


