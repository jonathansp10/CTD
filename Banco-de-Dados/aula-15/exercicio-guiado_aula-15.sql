select format (sum(f.Transporte),2) as TotalFatura, c.Pais
from Faturas f
inner join Clientes c on f.ClienteId = c.ClienteId
group by c.Pais;

select contato, upper(titulo) as Titulo
from clientes c
inner join faturas f on c.clienteid = f.clienteid
where f.datafatura < "1996-12-31"
order by contato asc;

select right(concat('00000000',f.faturaid),8) as FaturaId,
date_format(f.datafatura,'%d-%m-%Y') as DataFatura, c.cidade, f.cidadeEnvio
from faturas f
inner join clientes c on f.clienteid = c.clienteid
where c.cidade <> f.cidadeEnvio and c.pais = 'uk';



