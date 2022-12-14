function adicionar (num1, num2){
return num1 + num2

}

function subtracao (num1, num2){
    return num1 - num2
}

function multiplicacao (num1, num2){
    return num1 * num2

}

function divisao (num1, num2){
    return num1 / num2
}

function quadradoDoNumero (num1){
    return multiplicacao (num1, num1)
}

function mediaDeTresNumeros (num1, num2, num3){
    let resultado = adicionar (num1, num2)
    let resultadoparcial = adicionar (num3,resultado)
    return divisao (resultadoparcial,3)

}

//function calculaPorcentagem (valortotal,valorPercentual)
   // return (valortotal* valorPercentual)/100
    //return divisao(multiplicacao(valortotal,valorPercentual),100);
// verificar essa parte


console.log ("-------------- Teste de Operações / Calculadora --------------")

let resultado = adicionar(2, 5)
let resultado2 = subtracao (3,8)
console.log ('o valor da soma é:'+ resultado, 'e o valor da subtracao é' + resultado2)

let resultado3 = multiplicacao (5,8)
console.log ('o valor da multipilcacao é: '+ resultado3)

let resultado4 = divisao (25,5)
console.log ('o valor da divisao é: '+ resultado4)

let resultado5 = divisao (5,0)
console.log ('o valor da divisao é: '+ resultado5)

let resultado6 = quadradoDoNumero (5)
console.log ('o valor do quadrado do numero é: '+ resultado6)

let resultado7 = mediaDeTresNumeros (5,7.5,8)
console.log ('o valor da media de tres numeros é: '+ resultado7)

 //let resultado8 = calculaPorcentagem (300,15)
 //console.log ('o valor do calculo de porcentagem é: '+ resultado8)
// verificar essa parte

