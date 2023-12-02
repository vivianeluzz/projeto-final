import { Clinica } from "./Clinica.js";
import { Paciente } from "./Paciente.js";
import { Medico } from "./Medico.js";

const clinica = new Clinica('marcada');
clinica.consultaMarcada();

const paciente = new Paciente('Maria Luz', 32)
console.log(paciente)