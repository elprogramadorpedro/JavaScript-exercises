/*No exercício de strings e array, é solicitado que você atribua na 
variável resultado uma string, resultado da concatenação de:


a última letra da primeira palavra da variável frase;
com a primeira letra da última palavra da variável frase;
a variável frase já está declarada, não precisa ser inicializada.
Para responder esse exercício primeiro você precisa quebrar a variável frase
 em palavras, dado que precisamos da primeira e da última palavra. Para isso você 
 pode usar a função de string split, passando como separador dessa função, uma string 
 contendo um espaço vazio " " e você precisa guardar essas palavras podendo usar uma nova
  variável:*/

/*
var palavras = frase.split(" ")
Quando você usou split, a variável palavras armazena um array com todas as palavras 
da frase. Agora que você já tem as palavras, é preciso separar a primeira e a última 
palavra. Para a primeira palavra, você pode acessar diretamente a posição dela e, para
 a última palavra, você pode calcular a última posição do array usando a propriedade 
 length da variável palavras:
*/


/*
var primeiraPalavra = palavras[0]
var ultimaPalavra = palavras[palavras.length - 1]
Você tem duas novas variáveis, primeiraPalavra e ultimaPalavra. 
Para resolver o problema, você precisa pegar a última letra da primeira 
palavra e a primeira letra da última palavra e concatenar essas duas letras
com um espaço entre elas. Para isso, você precisa usar a propriedade length da 
variável primeiraPalavra e acessar diretamente o primeiro caractere da variável 
ultimaPalavra:


var resultado = primeiraPalavra[primeiraPalavra.length - 1] + " " + ultimaPalavra[0]

*/



/* var palavras = frase.split(" ")
var primeiraPalavra = palavras[0]
var ultimaPalavra = palavras[palavras.length - 1]

var resultado = primeiraPalavra[primeiraPalavra.length - 1] + " " + ultimaPalavra[0] */