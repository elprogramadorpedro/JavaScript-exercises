const persona = [
  { nombre: "jose", edad: 42 },
  { nombre: "andres", edad: 52 },
  { nombre: "mariano", edad: 32 },
  { nombre: "gonzalo", edad: 32 },
  { nombre: "javier", edad: 32 },
  { nombre: "Alejandra", apellido: "Gonzales", edad: 32, estatura: 1.7 }
];

console.table(persona); // tabla por consola

const personas = [
  { nombre: "jose", edad: 22 },
  { nombre: "andres", edad: 22 },
  { nombre: "Alejandra", apellido: "Gonzales", edad: 32, estatura: 1.7 },
  { nombre: "gonzalo", edad: 31 },
  { nombre: "javier", edad: 33 }
];

//esto va a iterar y va a mostrar las personas que sean mayores de 25 años

//obtener las personas mayores de 25 años
const mayores = personas.filter(persona => persona.edad > 25);

console.log(mayores);

// Extraer informacion de alejandra

const alejandra = personas.find(persona => persona.nombre === "Alejandra");
console.log(alejandra);

let { aprendiendo } = alejandra;
console.log(aprendiendo);

//reduce me trae acumulado de los registros

let total = personas.reduce((edadTotal, persona) => {
  return edadTotal + persona.edad;
}, 0);

console.log("promerdio de edad de las personas " + total / personas.length); //promedio de personas
