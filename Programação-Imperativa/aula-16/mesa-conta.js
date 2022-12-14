
class Conta{
    constructor(conta,tipo,saldo,titular){
    this.conta = conta;
    this.tipo = tipo;
    this.saldo= saldo;
    this.titular = titular;
    }
}

// function Conta(conta,tipo,saldo,titular){
//     return new Conta(conta,tipo,saldo,titular)
//   }


const banco = {
    clientes:[],
    adicionarCliente(conta,tipo,saldo,titular){
      const novaConta = new Conta(conta,tipo,saldo,titular)
      this.clientes.push(novaConta);
    }, 

    consultarCliente(titular){
        const arrayDeEncontrados = [];
        for(let cliente of this.clientes){
          if(cliente.titular.includes(titular)){
            arrayDeEncontrados.push(cliente);
          }
        }
        return arrayDeEncontrados;
      },

      deposito(titular,saldo){
        for(let cliente of this.clientes){
            if(cliente.titular.includes(titular)){
                cliente.saldo = cliente.saldo + saldo;
                console.log ('Depósito realizado, seu novo saldo é: ' + cliente.saldo);
            }    
      }
    },

    saque(titular,valor){
        for(let cliente of this.clientes){
            if(cliente.titular.includes(titular)){
                cliente.saldo = cliente.saldo - valor;
                console.log ('Extração realizada com sucesso, seu novo saldo é: ' + cliente.saldo);
            }    
      }
    }

}

banco.adicionarCliente(5486273622,'Conta Corrente',27771,'Abigael Natte');
banco.adicionarCliente(1183971869,'Conta Poupança',8675,'Ramon Connell');
banco.adicionarCliente(9582019689,'Conta Poupança',27363,'Jarret Lafuente');
banco.adicionarCliente(1761924656,'Conta Poupança',32415,'Ansel Ardley');
banco.adicionarCliente(7401971607,'Conta Poupança',18789,'Jacki Shurmer');
banco.adicionarCliente(630841470,'Conta Corrente',28776,'Jobi Mawtus');
banco.adicionarCliente(4223508636,'Conta Corrente',2177,'Thomasin Latour');
banco.adicionarCliente(185979521,'Conta Poupança',25994,'Lonnie Verheijden');
banco.adicionarCliente(3151956165,'Conta Corrente',7601,'Alonso Wannan');
banco.adicionarCliente(2138105881,'Conta Poupança',33196,'Bendite Huggett');

// console.table (banco.clientes);


console.log (banco.consultarCliente('Jarret Lafuente'));

banco.deposito('Jarret Lafuente',50);

console.log (banco.consultarCliente('Jarret Lafuente'));

banco.saque ('Jarret Lafuente',100);

console.log (banco.consultarCliente('Jarret Lafuente'));