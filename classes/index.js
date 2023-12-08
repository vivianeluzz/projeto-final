import { Clinica } from "./Clinica.js";
import { Paciente } from "./Paciente.js";
import { Medico } from "./Medico.js";

const clinica = new Clinica('marcada');
clinica.consultaMarcada();

const paciente = new Paciente('Maria Luz', 32);
console.log(paciente);

const medico = new Medico('Dr. Cannabis');

const paciente1 = new Paciente('Carla Vilas', 30, medico);

const paciente2 = new Paciente('Silvo Almeida', 40, 'silviolen@hotmail.com', medico);

console.log(Paciente.pacientes);

paciente.marcarConsulta();
// medico.consultaMedica();
paciente.agendarConsulta();
paciente.liberarReceita();
paciente1.liberarReceita();
paciente1.novaReceita();
paciente.novaReceita();
paciente2.liberarReceita();
console.log(paciente1);

console.log(paciente2);
