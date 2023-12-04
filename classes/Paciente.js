//medico
//marcarconsulta
//receita
//nome cpf maior que 18 anos e patologia

import { Medico } from './Medico.js'
export class Paciente {

    nomeCompleto;
    idade;
    medico;
    consultaMarcada = 0;
    receitaLiberada = 0;
    receita = '';

    static pacientes = [];

    // consultaMarcada = 0;

    constructor(nomeCompleto, idade, medico) {
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
        this.medico = medico;
        Paciente.pacientes.push({nomeCompleto, idade, medico: medico ? medico.nomeMedico : null});
    }

    consultaMarcada() {
        if(this.idade >= 18) {
            this.consultaMarcada++;
    
        } else {
            throw "Consulta só pode ser marcada se a idade for acima de 18 anos"
        }

        if(!(Medico instanceof Medico)){
            console.log("O parâmetro é inválido")
            return
        }
    } 

    agendarConsulta() {
       if (this.medico) {
        this.medico.consultaMedica(this);
       } else {
        console.log('Paciente não marcou consulta');
       }
    }

    liberarReceita() {
        if(this.medico) {
           this.medico.liberarReceita(this);
        } else {
            console.log("Paciente");
        }  
    } 
} 

    // requestPaciente(paciente, senha){
    //     if(senha !== this.senha){
    //         console.log('Senha inválida');
    //         return;
    //     }
    // }
