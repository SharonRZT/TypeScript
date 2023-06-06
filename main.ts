import { Direccion } from "./Direccion"
import { Mail } from "./Mail"
import { Persona } from "./Persona"
import { Telefono } from "./Telefono"

//Instancias de las clases
const direccion1 = new Direccion("Luro", 348, 2, "A", 1856, "Glew", "Buenos Aires");
const direccion2 = new Direccion("Esmeralda", 19, 2, "C", 1267, "Palermo", "Entre Rios");
const direccion3 = new Direccion("Deyanira", 59, 4, "16", 28022, "Rejas", "Madrid");

const mail1 = new Mail("trabajo", "ychavez@hotmail.com");
const mail2 = new Mail("personal", "jorge25chavez@gmail.com");
const mail3 = new Mail("trabajo", "afernandez@trabajamos.com");

const telefono1 = new Telefono("movil", 655698321);
const telefono2 = new Telefono("movil", 156581299);
const telefono3 = new Telefono("movil", 654267133);

// Registro de Personas
// Registro Persona 1 
const persona1 = new Persona(
    'Yolanda',
    'Chavez',
    63,
    "19256355Y",
    new Date(1959, 2, 16),
    'violeta',
    'mujer',
    [direccion1],
    [mail1], 
    [telefono1],
    'hola mundo');

// Registro Persona 2 
const persona2 = new Persona(
    'Jorge',
    'Campana',
    45,
    "12548965Y",
    new Date(1975, 10, 24),
    'azul',
    'hombre',
    [direccion2],
    [mail2], 
    [telefono2],
    'chau mundo');

// Registro Persona 3 
const persona3 = new Persona(
    'Andrea',
    'Fernandez',
    33,
    "85423655W",
    new Date(1989, 6, 9),
    'verde',
    'mujer',
    [direccion3],
    [mail3], 
    [telefono3],
    'hola de nuevo')

// Mostrar los registros en la terminal
console.log('Registro de Personas');
console.log('---------------------');
console.log(persona1.mostrarContactos());
console.log('---------------------');
console.log(persona2.mostrarContactos());
console.log('---------------------');
console.log(persona3.mostrarContactos());
console.log('---------------------');

//Modificacion de uno de los registros---------------->
const dniBuscado = '85423655W'; // DNI de la persona buscada

// Busqueda por DNI 
const personaEncontrada = [persona1, persona2, persona3].find(persona => persona.getDni() === dniBuscado);

if (personaEncontrada) {
// Modificar direccion, telefono y mail
const nuevaDireccion = new Direccion('Uspallata', 1151, 1, 'H', 18560, 'Parque Patricios', 'CABA'); 
const nuevoTelefono = new Telefono('Trabajo', 626242622);
const nuevoMail = new Mail('Personal', 'nuevocorreo@yahoo.com');

personaEncontrada.cambiarDireccion(nuevaDireccion);
personaEncontrada.cambiarTelefono(nuevoTelefono);
personaEncontrada.cambiarMail(nuevoMail);

// Mostrar los 3 registros con el cambio realizado 
console.log('Registro Modificado');
console.log('---------------------');
console.log(persona1.mostrarContactos());
console.log('---------------------');
console.log(persona2.mostrarContactos());
console.log('---------------------');
console.log(personaEncontrada.mostrarContactos());
console.log('---------------------');    
} else {
console.log('No se encontro ninguna persona con el DNI ${dniBuscado}')
}