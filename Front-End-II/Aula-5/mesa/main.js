function manipularVisibilidadeBotao(){

    let body = document.querySelector('body')

    body.classList.toggle('dark')
    
    body.style.backgroundColor ='white'

}

manipularVisibilidadeBotao();

// let containerRef = document.querySelector('.container')

// const itens = [

//     {
//         img: './imagens/tiger.jpg',
//         titulo: 'O tigre',
//         descricao: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
//     },
    
//     {
//         img: './imagens/tiger.jpg',
//         titulo: 'O tigre',
//         descricao: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
//     }

// ]

// for (let item of itens) {
//     containerRef.innerHTML += `
//         <div class="item">
//             <img src="${item.img}">
//             <h2>${item.titulo}</h2>
//             <p>${item.descricao}</p>
//         </div>
//     `

// }

