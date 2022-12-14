const ParticipanteA = [5, 8, 4, 9, 5];
const ParticipanteB = [8, 7, 8, 6, 8];
const ParticipanteC = [7, 5, 10, 8, 3];

function pontuacaoMedia(array=[]){
    let soma = 0
    let indice = 0

for (indice >=0; indice <= (array.length-1); indice++) {
    soma = soma + array[indice];
    media = soma / array.length
}
console.log('A soma da sua pontuação é ' + soma)
console.log('A media é: ' + media);
}



pontuacaoMedia (ParticipanteB);
pontuacaoMaior (ParticipanteB);


function pontuacaoMaior(array) {
    let pontuacaoalta = 0;
  
    for (indice = 0; indice <= (array.length-1); indice++) {
      if (pontuacaoalta < array[indice]){
          pontuacaoalta = array[indice];
      } 
  
    }
  
    console.log(pontuacaoalta);
  
  }

  function competicao(ParticipanteA, ParticipanteB, ParticipanteC) {

   console.log("Os valores do participante A são: ");

   let mediaparticipante1 = pontuacaoMedia (ParticipanteA)

   console.log("Os valores do participante B são: ");

   let mediaparticipante2 = pontuacaoMedia (ParticipanteB)

   console.log("Os valores do participante C são: ");

   let mediaparticipante3 = pontuacaoMedia (ParticipanteC)

   if (mediaparticipante1 > mediaparticipante2){
    
    if (mediaparticipante1 > mediaparticipante3){
        console.log("O participante 1 está em primeiro lugar")
    }
    
    else if (mediaparticipante2 < mediaparticipante3){
        console.log (" O participante 3 está em primeiro lugar")
    }
   
} else {
    console.log("O participante 2 está em primeiro lugar")}

}

competicao(ParticipanteA,ParticipanteB,ParticipanteC)
  

