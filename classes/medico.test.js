const { Medico } = require('./Medico.js');
const { Paciente } = require('./Paciente.js');

test('Medico só pode liberar receita, se o paciente fizer a consulta', () => {
    const medico = new Medico('Dr. Cannabis'); 
    const paciente = new Paciente('Silvo Almeida', 40, 'silviolen@hotmail.com', medico);

    medico.consultaMedica(paciente);
    expect(medico.pacientes.includes(paciente)).toBe(true);

    expect(paciente.receitaLiberada).toBe(0);

    paciente.liberarReceita();

    console.log('Valor atual da receita:', paciente.receitaLiberada);

});

