//consulta agendada
//paciente
//receita

export class Medico {
    consultaMarcada = 0;

    constructor(nomeMedico, nomePaciente, receitaMedica){
        this.nomeMedico = nomeMedico;
        this.nomePaciente = nomePaciente;
        this.receitaMedica = receitaMedica;
    }

    consultaMedica() {
        this.consultaMarcada++;
        this.consultaMedica += this.receitaMedica;
    }
}