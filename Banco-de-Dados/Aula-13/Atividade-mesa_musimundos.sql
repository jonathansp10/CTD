select * from faturas;

-- questão 1
select data_fatura, count(id) as QtdFatura
from faturas
group by data_fatura;

	-- a: 12-02-2010
    -- b: 405 faturas
    
    
-- questão 2
select pais_cobranca, data_fatura, count(id) as Qtd, sum(valor_total) as TotalFatura,
format (avg(valor_total),2) as MediaFaturas
from faturas
group by pais_cobranca, data_fatura
having data_fatura = '2010-02-12';

select pais_cobranca, data_fatura, count(id) as Qtd, sum(valor_total) as TotalFatura,
format (avg(valor_total),2) as MediaFaturas
from faturas
group by pais_cobranca, data_fatura
having data_fatura = '2010-02-12' and pais_cobranca like '%canada%';

 -- a: 303.96
 
select pais_cobranca, data_fatura, count(id) as Qtd, sum(valor_total) as TotalFatura,
format (avg(valor_total),2) as MediaFaturas
from faturas
group by pais_cobranca, data_fatura
having data_fatura = '2010-02-12' and pais_cobranca like '%brazil%';
 
  -- b: 5.43
  
select pais_cobranca, data_fatura, count(id) as Qtd, sum(valor_total) as TotalFatura,
format (avg(valor_total),2) as MediaFaturas
from faturas
group by pais_cobranca, data_fatura
having data_fatura = '2010-02-12' and pais_cobranca like '%argentina%';
 
  -- c: 7 faturas


select pais_cobranca, data_fatura, count(id) as Qtd, sum(valor_total) as TotalFatura,max(valor_total) as MaiorFatura,
format (avg(valor_total),2) as MediaFaturas
from faturas
group by pais_cobranca, data_fatura
having data_fatura = '2010-02-12' and pais_cobranca like '%usa%';

  -- d: 23.86
  
 -- questão 3

select * from clientes;

select pais, count(id) as qtd
from clientes
group by pais
having qtd > 4;

  -- a: 4 países;
  -- b: 13 clientes;
  -- c: Brazil e France;


-- questão 4

select count(id), pais, estado
from clientes
group by pais, estado
having estado like '%sp%';

  -- a: 3 clientes;

-- questão 5

select * from cancoes;

select c.id_genero,g.nome, count(c.id) as qtd_cancoes, c.preco_unitario, sum(c.preco_unitario) as valor_total
from generos g inner join cancoes c on g.id = c.id_genero
group by id_genero, preco_unitario
order by qtd_cancoes desc;

	-- a: rock;
    
select c.id_genero,g.nome, count(c.id) as qtd_cancoes, c.preco_unitario, sum(c.preco_unitario) as valor_total
from generos g inner join cancoes c on g.id = c.id_genero
group by id_genero, preco_unitario
having c.id_genero = 4;

	-- b: 328,68;
    
select preco_unitario
from cancoes 
group by preco_unitario;
	
    -- c: entre 0.99 e 1.99;
    
select c.id_genero,g.nome, count(c.id) as qtd_cancoes, c.preco_unitario, sum(c.preco_unitario) as valor_total
from generos g inner join cancoes c on g.id = c.id_genero
group by id_genero, preco_unitario
having c.id_genero = 21;

	-- d: 1.99;

	