create view FATURAS_NACIONAIS as
select p.pagamento_id, p.data_pagamento, p.valor, c.cliente_id, c.nome, c.sobrenome
from pagamento p
inner join cliente c
on p.cliente_id = c.cliente_id
inner join endereco e 
on c.endereco_id = e.endereco_id
inner join cidade cd
on e.cidade_id = cd.cidade_id
inner join pais pa
on cd.pais_id = pa.pais_id
where pa.pais = '%Brazil%';

drop view FATURAS_NACIONAIS;

create view FATURAS_NACIONAIS as
select p.pagamento_id, p.data_pagamento, p.valor, c.cliente_id, c.nome, c.sobrenome,pa.pais_id
from pagamento p
inner join cliente c
on p.cliente_id = c.cliente_id
inner join endereco e 
on c.endereco_id = e.endereco_id
inner join cidade cd
on e.cidade_id = cd.cidade_id
inner join pais pa
on cd.pais_id = pa.pais_id
where pa.pais = 'Brazil';

SELECT * FROM FATURAS_NACIONAIS;




create view LATINOS as
select p.pagamento_id, p.data_pagamento, p.valor, c.cliente_id, c.nome, c.sobrenome,pa.pais_id
from pagamento p
inner join cliente c
on p.cliente_id = c.cliente_id
inner join endereco e 