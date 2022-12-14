// Funções 

function escolhaComida(comida){

    if(comida == 1){
        return 10;
    } else if(comida == 2){
        return 8;
    } else if(comida==3){
        return 15;
    } else if(comida==4){
        return 12;
    } else if (comida==5) {
        return 8;
    } else {
        return 0;
    }
}

function nomeComida(comida){

    if(comida == 1){
        return "Pipoca";
    } else if(comida == 2){
        return "Macarrão";
    } else if(comida==3){
        return "Carne";
    } else if(comida==4){
        return "Feijão";
    } else if (comida==5) {
        return "Brigadeiro";
    }
}

function microondas(tempoUsuario, tempoPadrao) {
    
    if(tempoPadrao == 0){
        console.log("Essa opção não tem em nosso menu.") 
    } 
    else if ( (tempoPadrao*2 < tempoUsuario) && (tempoPadrao*3 > tempoUsuario)) {
        console.log("A comida queimou!")
    } 
    else if(tempoUsuario < tempoPadrao){
        console.log("Tempo Insuficiente!")
    } 
    else if (tempoPadrao*3 < tempoUsuario){
        console.log("Kabummmm!!!")
    } else {
        console.log("Prato pronto, bom apetite!!!")
    }
}

// Menu do Microondas

console.log(`

    Microondas:

    1 - Pipoca – 10 segundos (padrão);
    2 - Macarrão – 8 segundos (padrão);
    3 - Carne – 15 segundos (padrão);
    4 - Feijão – 12 segundos (padrão);
    5 - Brigadeiro – 8 segundos (padrão); 

`);

// Conversa com Usuário

var readlineSync = require('readline-sync');

let comida = readlineSync.question('Escolha uma comida: ');
let tempo = readlineSync.question('Defina um tempo de preparo: ');

let padrao = escolhaComida(comida);
// Respostas da Aplicação


microondas(tempo, padrao);

//console.log(`Sua opção escolhida foi ${nomeComida(comida)} e o tempo foi de ${tempo}`);
//console.log(escolhaComida(comida));

