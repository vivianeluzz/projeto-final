//medico
//marcarconsulta
//receita
//nome cpf maior que 18 anos e patologia

export class Paciente {
    nomeCompleto;
    idade;
    email;
    medico;
    consultaMarcada = 0;
    receitaLiberada = 0;
    receita = [];

    static pacientes = [];

    constructor(nomeCompleto, idade, email, medico) {
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
        this.email = email;
        this.medico = medico;
        Paciente.pacientes.push({nomeCompleto, idade, email, medico: medico ? medico.nomeMedico : null});
    }


    marcarConsulta() {
        if(this.idade >= 18) {
            this.consultaMarcada++;
            return 'Consulta marcada com sucesso';
    
        } else {
            throw "Consulta só pode ser marcada se a idade for acima de 18 anos"
        }

        // if(!(Medico instanceof Medico)){
        //     console.log("O parâmetro é inválido")
        // }
    } 

    agendarConsulta() {
       if (this.numeroConsultas === 0) {
            throw new Error('Paciente não marcou consulta');
    }
    //    } else {
    //         console.log('Médico não possui paciente');
    //    }
    }

    liberarReceita() {
        if(this.numeroConsultas > 0) {
           if (this.medico) {
            const novaReceita = `Receita para uso de óleo de CDB - ${new Date().toLocaleDateString()}`;
            this.receita.push(novaReceita);
            this.receitaLiberada++;
                console.log('Receita liberada para o uso de óleo CDB.');
                console.log('Receita:', novaReceita);
            // console.log(`Receita liberada para paciente ${this.paciente1}`);
           } else {
            console.log(`Paciente não agendou ${this.nomeCompleto}`);
           }
        }
    } 

    novaReceita() {
        const novaReceita = `Nova receita - ${new Date().toLocaleDateString()}`;
        this.receita.push(novaReceita);
        console.log('Nova receita criada:');
        console.log('Receita:', novaReceita);
    }

    exibirInformacoes() {
        console.log('Paciente:');
        console.log('Nome Completo:', this.nomeCompleto);
        console.log('Idade:', this.idade);
        console.log('Médico:', this.medico ? this.medico.nomeMedico : 'Nenhum médico atribuído.');
    }
} 

    // requestPaciente(paciente, senha){
    //     if(senha !== this.senha){
    //         console.log('Senha inválida');
    //         return;
    //     }
    // }
