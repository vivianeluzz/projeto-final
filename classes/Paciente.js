//medico
//marcarconsulta
//receita

//nome cpf maior que 18 anos e patologia

import { Medico } from './Medico.js'
export class Paciente {

    consultaMarcada = 0;

    constructor(nomeCompleto, idade, medico){
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
        this.medico = medico
    }

    // requestPaciente(paciente, senha){
    //     if(senha !== this.senha){
    //         console.log('Senha inválida');
    //         return;
    //     }
    // }

    consultaMarcada(idade) {
        if(idade >= 18) {
            this.consultaMarcada
    
        } else {
            throw "Consulta só pode ser marcada se a idade for acima de 18 anos"
        }

        if(!(Medico instanceof Medico)){
            console.log("O parâmetro é inválido")
            return
        }
    } 
}

