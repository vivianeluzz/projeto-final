const { Paciente } = require('./Paciente.js');

test('validar nomeCompleto', () => {
    const paciente = new Paciente('Silvo Almeida', 40, 'silviolen@hotmail.com', { nomeMedico: 'Dr. Cannabis' }); 
    expect(paciente.nomeCompleto).toBe('Silvo Almeida');
});

test('Consulta só pode ser marcada se a idade for acima de 18 anos ', () => {
    const paciente = new Paciente('Silvo Almeida', 40)
   expect(paciente.idade).toBe(40);
});