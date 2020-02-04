/*Segun el sitio web: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/switch
La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, 
y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.
*/
//Primer Ejercicio.

let permissao; //comun, gerente, director
permissao= "gerente";
switch (permissao) {
  case "comun":
    console.log("usuario comun");
    break;

  case "gerente":
    console.log("usuario gerente");
    break;

  case "director":
    console.log("usuario director");
    break;

  default:
    console.log("no existe");
}
