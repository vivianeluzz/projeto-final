export class Medico {
    consultaMarcada = 0;
    pacientes = [];

    constructor(nomeMedico){
        this.nomeMedico = nomeMedico;
    }

    consultaMedica(paciente) {
        this.consultaMarcada++;
        this.pacientes.push(paciente);
        console.log(`Consulta marcada com sucesso!`);
        paciente.exibirInformacoes();
    }

    liberarReceita(paciente) {
        if (this.pacientes.includes(paciente)) {
            
            console.log('Receita liberada para o uso de óleo CDB.');
            console.log('Receita:', paciente.liberarReceita());

            // console.log(`Receita liberada para ${paciente.nomeCompleto}`);
        } else {
            console.log(`Não é possível liberar a receita para ${paciente.nomeCompleto}. Consulta não agendada.`);
        }
    }
}