const { Medico } = require('./Medico.js');
const { Paciente } = require('./Paciente.js');

test('Liberar receita para paciente com consulta agendada', () => {
    const medico = new Medico('Dr Cannabis');
    const paciente = new Paciente('Silvo Almeida', 40, 'silviolen@hotmail.com', medico);

    medico.consultaMedica(paciente);
    medico.liberarReceita(paciente);
});

test('Medico só pode liberar receita, se o paciente fizer a consulta', () => {
    const medico = new Medico('Dr. Cannabis'); 
    const paciente = new Paciente('Silvo Almeida', 40, 'silviolen@hotmail.com', medico);

    medico.consultaMedica(paciente);
    expect(medico.pacientes.includes(paciente)).toBe(true);

    expect(paciente.receitaLiberada).toBe(0);

    paciente.liberarReceita();

    console.log('Valor atual da receita:', paciente.receitaLiberada);

});

test('validar nomeMedico', () => {
    const medico = new Medico('Dr. Cannabis'); 
    expect(medico.nomeMedico).toEqual('Dr. Cannabis');
});

test('Consulta marcada incrementa corretamente a quantidade de pacientes', () => {
    const medico = new Medico('Dr. Cannabis');
    const paciente = new Paciente('Silvo Almeida', 40);
    medico.consultaMedica(paciente);
    expect(medico.pacientes.length).toBe(1);
});

test('Medico só pode liberar receita, se o paciente fizer a consulta', () => {
    const medico = new Medico('Dr. Cannabis'); 
    const paciente = new Paciente('Silvo Almeida', 40, medico);

    medico.consultaMedica(paciente);

    paciente.liberarReceita();

});