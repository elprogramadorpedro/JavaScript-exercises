/*
complete a codigo deste exercicio verificando se a variavel lista (que a un array ) possui  mais de um elemento.

se sim , o valor da variavel serultado deve ser igual ao primeiro elemento do array lista 
se ñao, o valor da variavel resultado deve ser igual a "array vazio".

obs: Neste exercicio, as variaveis lista e resultado ja estao declaradas, voce nao precisa crialas, apenas completar o codigo.

function retornaPrimeiroElemento(lista) {
  var resultado;

  if (lista.length > 0) {
    resultado = lista[0];
  } else {
    resultado = "array vazio";
  }

  return resultado;
}
*/

/*a propiedad length de un objeto que es una instancia de tipo Array establece 
o devuelve la cantidad de elementos en esa matriz. El valor es un entero sin signo 
de 32 bits que siempre es numéricamente mayor que el índice más alto en la matriz.

---------------------------------------------------------------------------------

const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

console.log(clothing.length);
// expected output: 4


*/