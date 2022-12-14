let tempoPadrao = 10;
let tempoUsuario = 5;

if ( (tempoPadrao*2 < tempoUsuario) && (tempoPadrao*3 > tempoUsuario)) {
    console.log("Passou do tempo")
} else if(tempoUsuario < tempoPadrao){
    console.log("Tempo Insuficiente")
} else if (tempoPadrao*3 < tempoUsuario){
    console.log("kabummmm")
} else {
    console.log("Ok")
}