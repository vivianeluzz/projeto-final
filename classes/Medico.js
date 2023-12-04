//consulta agendada
//paciente
//receita

export class Medico {
    consultaMarcada = 0;

    constructor(nomeMedico){
        this.nomeMedico = nomeMedico;
    }

    consultaMedica(paciente) {
        paciente.consultaMarcada = true;
        console.log(`Consulta realizada por ${this.nomeMedico} para ${paciente.nomeCompleto}`);
    }

    liberarReceita(paciente) {
        if (paciente.consultaMarcada) {
            paciente.receitaLiberada = true;

            console.log(`Receita liberada para ${paciente.nomeCompleto}`);
        } else {
            console.log(`Não é possível liberar a receita para ${paciente.nomeCompleto}. Consulta não agendada.`);
        }
    }
}