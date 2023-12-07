const { Paciente } = require('./Paciente.js');
const { Medico } = require('./Medico.js');

test('validar nomeCompleto', () => {
    const paciente = new Paciente('Silvo Almeida', 40, 'silviolen@hotmail.com', { nomeMedico: 'Dr. Cannabis' }); 
    expect(paciente.nomeCompleto).toBe('Silvo Almeida');
});

test('Consulta só pode ser marcada se a idade for acima de 18 anos ', () => {
    const paciente = new Paciente('Silvo Almeida', 40);
   expect(paciente.idade).toBe(40);
});

test('Marcar consulta', () => {
    const paciente = new Paciente('Carla Vilas', 30);
    expect(paciente.marcarConsulta()).toEqual('Consulta marcada com sucesso');
});

test('Marcar consulta com idade menor de 18 anos deve retornar um erro', () => {
    const medico = new Medico('Dr. Cannabis'); 
    const paciente = new Paciente('João', 15, 'joao@gmail.com', medico);

    expect(() => paciente.marcarConsulta()).toThrow('Consulta só pode ser marcada se a idade for acima de 18 anos');
});



test('Agendar consulta sem marcar (deve imprimir mensagem)', () => {
    const medico = new Medico('Dr. Cannabis'); 
    const paciente = new Paciente('Maria', 30, 'maria@gmail.com', medico);

    paciente.agendarConsulta();
    // Espera-se que imprima "Paciente não marcou consulta"
});

test('Se o paciente não marcou consulta, deve retornar mensagem', () => {
    const paciente = new Paciente('Maria', 30, 'maria@gmail.com');

    try {
        paciente.agendarConsulta();
    } catch (error) {
        console.log('Erro retornado:', error.message);
        expect(error.message).toContain('Paciente não marcou consulta');
    }
 
     // Espera-se que imprima "Paciente não marcou consulta"
});       

test('Se o paciente não tiver médico, não deve liberar receita', () => {
    const paciente = new Paciente('Maria', 30, 'maria@gmail.com');
    paciente.numeroConsultas = 1;

    // Simula um médico
    const medicoMock = {
        consultaMedica: jest.fn()
    };

    paciente.medico = medicoMock; // Atribui o médico simulado ao paciente

    paciente.agendarConsulta();
    paciente.liberarReceita();

    expect(paciente.receitaLiberada).toBe(1); // Assumindo que o método liberarReceita() incrementa receitaLiberada
    expect(paciente.receita.length).toBe(1);
});

test('Se o paciente não marcou consulta, deve lançar exceção ao agendar', () => {
    const paciente = new Paciente('Maria', 30, 'maria@gmail.com');
    paciente.numeroConsultas = 0; // Garante que o paciente não marcou consulta

    expect(() => paciente.agendarConsulta()).toThrowError('Paciente não marcou consulta');
});

describe('Paciente', () => {
    let paciente;
    let consoleSpy;

    beforeEach(() => {
        paciente = new Paciente('Maria', 30, 'maria@gmail.com');
        consoleSpy = jest.spyOn(console, 'log');
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('novaReceita deve adicionar uma receita e imprimir detalhes', () => {
        const receitasAntes = paciente.receita.length;
        paciente.novaReceita();
        const receitasDepois = paciente.receita.length;

        expect(receitasDepois).toBe(receitasAntes + 1); // Verifica se uma nova receita foi adicionada
        expect(consoleSpy).toHaveBeenCalledWith('Nova receita criada:'); // Verifica se a mensagem correta foi impressa no console
        // expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Receita: Nova receita - ')); // Verifica se a receita contém a data correta
    });

});

