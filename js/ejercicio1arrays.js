//segun el sitio web: https://developer.mozilla.org/es/docs/Glossary/Arreglos.
/*Un array es una colección ordenada de datos (tanto primitivos u objetos dependiendo del lenguaje). Los 
arrays se emplean para almacenar multiples valores en una sola variable, frente a las variables que sólo 
pueden almacenar un valor (por cada variable).

Cada item en un array tiene un número al que está asociado, llamado "índice numérico" (numeric index), que 
permite acceder a él.

En JavaScript, los arrays comienzan a partir del índice cero y pueden ser manipulados con varios métodos.

Un array en JavaScript sería así:

var myArray = [1, 2, 3, 4];

var catNamesArray = ["Jacqueline", "Sophia", "Autumn"];

//Los arreglos en Javascript pueden guardar distintos tipos de datos como se muestra anteriormente*/

//dentro de los arrays se pueden incluir objetos
//tambien se puede pasar un array dentro de otro array 


// array basico utilizando la propiead length podemos visualizar el numero de argumentos.
var frutas=["manzana", "banana"];
console.log(frutas.length);

//array puro 

let numero=[1, 5255, 45522, 551515, 25151, 15151, 84514, 141415];

console.log(numero);


//array con objetos dentro

let colores=["amarillo", "verde", "morado", {coloresindustriales:'verde', color2:'azul'}, 'naranja' ];

console.log(colores);

//Acceder (por índice) a un elemento Array

let numeroAi=[1, 5255, 45522, 551515, 25151, 15151, 84514, 141415];
let ultimo = numeroAi[numeroAi.length - 1]; //de esta manera puedo acceder al ultimo indice de mi array 

console.log(numeroAi[5]);   //respuesta: 15151
console.log(ultimo);        //respuesta: 141415

//<--------------------------------------

//Bucle sobre un Array
// de esta manera me enseña cuales son las expresiones que existen dentro de un array y el numero de indice de cada uno. 

numeroAi.forEach(function (elemento, indice, array) {
    console.log(elemento, indice);
});




