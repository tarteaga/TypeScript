import { Direccion } from "../CLASES/direccion";
import { Dni } from "../CLASES/dni";
import { Mail } from "../CLASES/mail";
import {Persona} from "../CLASES/persona";
import { Sexo } from "../CLASES/sexo";
import { Telefono } from "../CLASES/telefono";
let personas: Array<Persona> = [];
let juan = new Persona();
juan.setNombre("Juan");
juan.setApellidos("Domiguez Perez");
juan.setEdad(34);
juan.setDni(new Dni(43567543,"Y"));
juan.setCumpleañOs(new Date("1988-04-12T21:21:21.212Z"));
juan.setColorFavorito("Rojo");
juan.setSexo(Sexo.hombre);
juan.getDirecciones().push(new Direccion("Calle San Antonio",32,2,"B",8001,"Barcelona","Barcelona"));
juan.getMails().push(new Mail("personal","juandominguezperez88@gmail.com"));
juan.getTelefonos().push(new Telefono("Particular",656638555));
juan.getNotas().push("Tiene una enfermedad muy grave");
let periquito = new Persona();
periquito.setNombre("Periquito");
periquito.setApellidos("Domiguez Perez");
periquito.setEdad(33);
periquito.setDni(new Dni(86594256,"P"));
periquito.setCumpleañOs(new Date("1989-04-12T21:21:21.212Z"));
periquito.setColorFavorito("Azul");
periquito.setSexo(Sexo.hombre);
periquito.getDirecciones().push(new Direccion("Calle Tulipanes",8,21,"F",8003,"Barcelona","Barcelona"));
periquito.getMails().push(new Mail("personal","periquitodp89@gmail.com"));
periquito.getTelefonos().push(new Telefono("Particular",789456123));
periquito.getNotas().push("Tiene 3 perritos");
let andres = new Persona();
andres.setNombre("Andrés");
andres.setApellidos("Domiguez Perez");
andres.setEdad(32);
andres.setDni(new Dni(25784635,"V"));
andres.setCumpleañOs(new Date("1990-04-12T21:21:21.212Z"));
andres.setColorFavorito("Naranja");
andres.setSexo(Sexo.hombre);
andres.getDirecciones().push(new Direccion("Calle Saturno",2,3,"D",8005,"Barcelona","Barcelona"));
andres.getMails().push(new Mail("personal","andres900412@gmail.com"));
andres.getTelefonos().push(new Telefono("Particular",78585251));
andres.getNotas().push("El más joven de los hermanos Dominguez Perez");

personas.push(juan);
personas.push(periquito);
personas.push(andres);

console.log("Antes del cambio\n");
personas.forEach(function(persona){
    console.log(persona.toString());
    console.log("\n");
});

console.log("Buscando a persona con DNI: %s", new Dni(86594256,"P").toString());
var filtrado = personas.filter(persona=>persona.getDni().equals( new Dni(86594256,"P"))).pop();
console.log ("Encontrado:\n" + filtrado.toString() +"\n");
filtrado.getDirecciones().push(new Direccion("De la flor", 98,76,"p",52524,"Barcelona","Barcelona"));
filtrado.getTelefonos().push(new Telefono("Particular" , 678987868));
filtrado.getMails().push(new Mail("personal","periquitotoflama@gmail.com"));
personas.forEach;

console.log("Después del cambio\n");
personas.forEach(function(persona){
    console.log(persona.toString());
    console.log("\n");
});