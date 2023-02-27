var tesoura = 3
var papel = 2
var pedra = 1


function verificarGanhador (usuario, oponente) {
    if (usuario === oponente ) {
        console.log('Empate!!')
        return;
    }
    if(usuario === pedra && oponente === papel) {

        console.log (`Oponente ganhou!, sua opcao foi ${usuario} e o oponente foi ${oponente}`) 
    
        numeroVezesOponenteVenceu = numeroVezesOponenteVenceu + 1
    }
    
    else if(usuario === pedra && oponente === tesoura) {
        
        console.log (`Usuario ganhou!, sua opcao foi ${usuario} e o oponente foi ${oponente}`) 
        numeroVezesUsuarioVenceu = numeroVezesUsuarioVenceu + 1
    }

    else if (usuario === papel && oponente === pedra) {

        console.log (`Usuario ganhou!, sua opcao foi ${usuario} e o oponente foi ${oponente}`) 
        numeroVezesUsuarioVenceu = numeroVezesUsuarioVenceu + 1
    }

    else if (usuario === papel && oponente === tesoura) {

        console.log (`Oponente ganhou!, sua opcao foi ${usuario} e o oponente foi ${oponente}`) 
        numeroVezesOponenteVenceu = numeroVezesOponenteVenceu + 1
    }
    
    else if (usuario === tesoura && oponente === papel) {

        console.log (`Usuario ganhou!, sua opcao foi ${usuario} e o oponente foi ${oponente}`) 
        numeroVezesUsuarioVenceu = numeroVezesUsuarioVenceu + 1
    }
    
    else if (usuario === tesoura && oponente === pedra) {

        console.log (`Oponente ganhou!, sua opcao foi ${usuario} e o oponente foi ${oponente}`) 
        numeroVezesOponenteVenceu = numeroVezesOponenteVenceu + 1
    }
}

var numeroVezesUsuarioVenceu = 2
var numeroVezesOponenteVenceu = 0 

function comecarJogo(){
    
    while(numeroVezesOponenteVenceu < 2 && numeroVezesUsuarioVenceu < 2){

    let jogadaUsuario = Number(prompt('O que voce deseja jogar? 1 = pedra, 2 = papel, 3 = tesoura'))
    let jogadaOponente = Math.floor(Math.random() * 3) + 1

    verificarGanhador(jogadaUsuario,jogadaOponente)
    

    }  
}

function perguntarUsuarioDesejaJogar() {

    let usuarioDesejaJogar = confirm('Você gostaria de jogar?')
    
    if(usuarioDesejaJogar === true) {
        comecarJogo()
    
    } else {
    
        alert ('Obrigada por visitar nossa pagina.')
    
    }

}

perguntarUsuarioDesejaJogar()
