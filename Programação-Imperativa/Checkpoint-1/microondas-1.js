
const pipocaTempoMinimo = 10;

const macarraoTempoMinimo = 8;

const carneTempoMinimo = 15;

const feijaoTempoMinimo = 12;

const brigadeiroTempoMinimo = 8;


// Funções 

function tempoPadraoPrato(comida){

    switch(comida){
        case 1:
            return pipocaTempoMinimo;
        case 2:
            return macarraoTempoMinimo;
        case 3:
            return carneTempoMinimo;
        case 4:
            return feijaoTempoMinimo;
        case 5:
            return brigadeiroTempoMinimo;
        default: 
            return "Prato inexistente";
    }
}

function nomeComida(comida){

    switch(comida){
        case 1:
            return "Pipoca";
        case 2:
            return "Macarrão";
        case 3:
            return "Carne";
        case 4:
            return "Feijão";
        case 5:
            return "Brigadeiro";
        default: 
            return "Prato inexistente";
    }
}


function microondas(tempoUsuario, tempoPadrao) {

    if (tempoUsuario >= tempoPadrao * 3) 
    return "kabummmm";

    else if (tempoUsuario >= tempoPadrao * 2)
    return "A comida queimou!";

    else if (tempoUsuario < tempoPadrao)
    return "Tempo Insuficiente";

    return "Prato pronto, bom apetite!!!";
    
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

let numeroComida = readlineSync.question('Escolha uma comida: ');
let tempo = readlineSync.question('Defina um tempo de preparo: ');

let nome = nomeComida (numeroComida);
if (nome == "Prato Inexistente") {
    console.log ('Prato Inexistente');
    return;
}

let padrao = tempoPadraoPrato(numeroComida);

// Respostas da Aplicação

let resultado = microondas(tempo, padrao);

console.log(`

    Resultado do Preparo: ${resultado}.

    Detalhes:
        - Comida Escolhida: ${nomeComida(numeroComida)}.
        - Tempo de Preparo: ${tempo} segundos.
        - Tempo Padrão: ${padrao} segundos.

`);

//console.log(`Sua opção escolhida foi ${nomeComida(comida)} e o tempo foi de ${tempo}`);
//console.log(escolhaComida(comida));

