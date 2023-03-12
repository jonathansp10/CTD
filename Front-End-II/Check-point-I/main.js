let containerRef = document.querySelector('.posts')

const itens = [

    {
        img: './imagens/harry.jpeg',
        titulo: 'Harry Potter ',
        descricao: 'Harry James Potter é o único filho de James e Lily Potter, membros originais da chamada Ordem da Fênix. Considerado um dos bruxos mais famosos da modernidade, seu nascimento foi tomado por uma profecia, que o elegeu como aquele com o poder necessário para derrotar o vilão Lord Voldemort. Desde então, sua família passou a ficar escondida, com medo do que Voldemort poderia fazer contra Harry.Quando Harry tinha apenas um ano e três meses de vida, Lord Voldemort fez a sua primeira tentativa de acabar com a vida do garoto, com o objetivo de impedir que a profecia pudesse se tornar realidade. Entretanto, James e Lily Potter conseguiram proteger o filho, que ganhou uma cicatriz na testa durante o ataque do vilão.'
        },
    
    {
        img: './imagens/hermione.jpeg',
        titulo: 'Hermione Granger',
        descricao: 'Hermione Jean Granger nasceu dentro de uma família trouxa. Aos 11 anos de idade, ela entendeu que era uma bruxa e foi aceita na Escola de Magia e Bruxaria de Hogwarts. Ela foi sorteada para a Grifinória e sempre se mostrou uma estudante exemplar, com um excelente histórico acadêmico. Foi considerada a melhor aluna em praticamente todas as classes onde estudou.Hermione conheceu Harry Potter e Ron Weasley no Expresso de Hogwarts, e logo uma relação entre os três foi criada. Ela chegou, até mesmo, a levar a culpa no lugar dos meninos pelo trasgo que apareceu na escola em 1991. Depois, desempenhou um papel crucial ao lado de Harry ao proteger a Pedra Filosofal de Lord Voldemort.'
        },

    {
        img: './imagens/ron.jpeg',
        titulo: 'Ronald Weasley',
        descricao: 'Ronald Bilius Weasley é o quinto filho de Arthur e Molly Weasley, irmão de Bill, Charlie, Percy, Fred, George e Ginny. Em 1991, ele passou a frequentar a Escola de Magia e Bruxaria de Hogwarts, onde foi classificado para a Grifinória. Seus primeiros amigos no colégio foram Harry Potter e Hermione Granger. Em seus anos em Hogwarts, ele ajudou a proteger a Pedra Filosofal de Lord Voldemort, resgatou Ginny do basilisco da Câmara Secreta, salvou Sirius Black dos dementadores de Azkaban, guiou Harry pelo Torneio Tribruxo, ajudou a formar a Armada de Dumbledore e lutou em diversas batalhas da Segunda Guerra Bruxa, onde saiu em uma caçada para destruir todas as Horcruxes e vencer Voldemort.'    
    },

    {
        img: './imagens/dumbledore.jpeg', 
        titulo: 'Albus Dumbledore',
        descricao: 'Considerado um dos maiores bruxos de todos os tempos, ele foi Professor de Defesa Contra as Artes das Trevas, Professor de Transfiguração e Diretor da Escola de Magia e Bruxaria de Hogwarts. Ele também serviu como Bruxo Chefe da Confederação Internacional dos Bruxos e Líder da Suprema Corte dos Bruxos.Dumbledore se tornou famoso ao derrotar Gellert Grindelwald no duelo mais épico da história. Ele também ganhou reconhecimento ao desvendar os 12 usos de sangue de dragão e por seu trabalho como alquimista ao lado de Nicolas Flamel. A resistência contra Lord Voldemort foi formada através de Dumbledore, fundador da Ordem da Fênix.' 
     },

    {
        img: './imagens/severus.jpeg',
        titulo: 'Severus Snape',
        descricao: 'Severus Snape foi o único filho de Tobias e Eileen Snape. Aos nove anos de idade, conheceu Lily e Petunia Evans e se apaixonou profundamente por Lily, se tornando um amigo próximo dela por anos. Ele serviu como Professor de Poções, Diretor da Sonserina, Professor de Defesa Contra as Artes das Trevas e Diretor da Escola de Magia e Bruxaria de Hogwarts, assim como membro da Ordem da Fênix e dos Comensais da Morte. Severus começou a estudar em Hogwarts em 1971, quando foi direcionado para a Sonserina. Ele entrou na escola n mesmo ano de Lily, mas em casas rivais. Severus se tornou um grande inimigo de James Potter e Sirius Black e foi uma frequente vítima de bullying.'
        },

    {
        img: './imagens/voldemort.jpeg',
        titulo: 'Voldemort',
        descricao: 'Considerado um dos bruxos mais perigosos de todos os tempos, Riddle realizou diversas atividades significativas durante os seus anos em Hogwarts, como ter aberto a Câmara Secreta de Salazar Sonserina e usado o monstro do local para atacar estudantes trouxas. Ele também foi agente de compras da loja de artefatos escuros Borgin e Burkes e adquiriu a capacidade a capacidade de falar em Ofidioglossia. Riddle dividiu sua alma em um total de oito fragmentos e criou sete Horcruxes. Uma delas, sem que essa foi a sua intenção, foi o próprio Harry Potter. Depois disso, passou-se a chamar Lord Voldemort, um anagrama de seu nome de batismo.'
        },

    
]

for (let item of itens) {
    containerRef.innerHTML += `
        <div class="item">
            <img src="${item.img}">
            <h2>${item.titulo}</h2>
            <p>${item.descricao}</p>
        </div>
    `

}

let formulario = document.querySelector(".Cadastro-form");
formulario.addEventListener("submit", function(event) {
    console.log("Cadastro realizado com sucesso!")
    console.log(event)
   event.preventDefault()

})