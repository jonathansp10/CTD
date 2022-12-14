/*
 CheckPoint 03 - Equipe 7

    - Claudio Leite
    - Danilo Gaspar
    - Gabriely Paz
    - Leticia Leite
    - Luis Gustavo Braga
    - Regiane Pereira
    - Vanilza Silvestre
 */

class Aluno {
    constructor(nome = "", qtdFaltas, notas = []) {
        this.nome = nome;
        this.qtdFaltas = qtdFaltas;
        this.notas = notas;
    }

    faltas () {
        this.qtdFaltas++;
        return this.qtdFaltas;
    }

    calcularMedia() {
        let soma = 0;

        for(let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        
        let media = soma / this.notas.length;
        return media;

    }
}

const curso = {
    nomeCurso: "Curso CTD",
    notaAprovacao: 7.0,
    faltasMaximas: 5,
    estudantes: [],

    adicionarAluno(nome, qtdFaltas, notas) {
        const novoAluno = new Aluno(nome, qtdFaltas, notas);
        this.estudantes.push(novoAluno);
    },

    buscarAluno(estudanteInformado) {
        for(let estudante of this.estudantes) {
            if(estudanteInformado === estudante.nome) {
                return estudante;
            }
        }
    },

    verificarAprovacao(estudante) {

        const estudanteVerificado = curso.buscarAluno(estudante);
        const media = estudanteVerificado.calcularMedia(); 

        const aprovacaoFaltaIguais = this.notaAprovacao + this.notaAprovacao*0.1; // 7.7
       
        if (estudanteVerificado.qtdFaltas == this.faltasMaximas && media >= aprovacaoFaltaIguais) {
            return true;
        }
        else if (media >= this.notaAprovacao && estudanteVerificado.qtdFaltas < this.faltasMaximas) {
            return true; 
        } else {
            return false;
        }

    },

    listaAprovados() {
        let lista = [];
        
        for(let i = 0; i < this.estudantes.length; i++) {
            let aprovacao = curso.verificarAprovacao(this.estudantes[i].nome);
            lista.push(this.estudantes[i].nome + ': ' + aprovacao); 
        }

        return lista;
    
    }
}

curso.adicionarAluno("Leticia", 5, [8, 6, 10]); 
curso.adicionarAluno("Caroline", 6, [10, 10, 3]);  
curso.adicionarAluno("Regiane", 2, [10, 10, 10]); 
curso.adicionarAluno("Valquiria", 0, [1, 4, 9]);

console.log("Adicionado " + curso.estudantes[3].faltas() + " falta ao Aluno(a) " + curso.estudantes[3].nome);
console.log("Media Aluno(a) " + curso.estudantes[2].nome + ": " + curso.estudantes[2].calcularMedia())

console.log(curso.estudantes);
console.log(curso.buscarAluno("Regiane"));
console.log(curso.verificarAprovacao("Leticia"));
console.log(curso.verificarAprovacao("Caroline"));
console.log(curso.listaAprovados());