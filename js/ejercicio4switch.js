
/*
Este segundo exercício de objetos é muito parecido com 
o exercício anterior, com a diferença que precisamos criar duas 
novas variáveis, idade e primeiroNome com os respectivos atributos 
do objeto pessoa.

Pra começar, você declara o objeto pessoa:


var pessoa = {
  primeiroNome: "Ada",
  ultimoNome: "Lovelace",
  naturalidade: "Inglaterra",
  idade: 36
}

var idade=pessoa.idade;
var primeiroNome=pessoa.primeiroNome;


console.log(idade);
*/





/*

Veja o gabarito dessa questão
Nesse terceiro exercício de objetos, já vem com o objeto curso declarado:

var curso = {
  nome: "Curso Introdutório da Trybe!",
  modulos: {
    internet: {
      descricao: "Como a internet funciona",
      semana: 1,
      tipo: "teórica",
      estado: "completo"
    },
    shell: {
      descricao: "Shell Script",
      semana: 1,
      tipo: ["teórica", "prática"],
      estado: "completo"
    },
    html: {
      descricao: "HTML + CSS",
      semana: [2, 3],
      tipo: "prática",
      estado: "em andamento"
    }
  },
  quantidade_alunos: 100,
  arquivado: false
};
Dado o objeto curso, o exercício solicita que você faça as seguintes instruções:

criar a variável nomeDoCurso com o valor da propriedade nome;
criar a variável descricaoInternet com o valor da propriedade descricao do objeto internet;
criar a variável estadoDoHtml com o valor da propriedade estado do objeto html.





var nomeDoCurso=curso.nome;

var descricaoInternet=curso.modulos.internet.descricao;

var estadoDoHtml=curso.modulos.html.estado;
*/


//--------------------------------------------------------------------------------


/*
 * Complete o código atribuindo na variável `resultado`
 * o primeiro elemento do array `lista` se o array não estiver vazio,
 * ou a string "array vazio" se o array `lista` estiver vazio.
 * var palavras = frase.split(" ")
var primeiraPalavra = palavras[0]
var ultimaPalavra = palavras[palavras.length - 1]
var resultado = primeiraPalavra[primeiraPalavra.length - 1] + " " + ultimaPalavra[0]
 */







/*var fruta = prompt("que precio deseas saber");

switch (fruta) {
  case "mango":
    console.log("kilo de manfo 4000 pesos");
    break;

  case "fresa":
    console.log("kilo de fresa 6000 pesos");
    break;

  case "banana":
    console.log("kilo de banana 45000 pesos");
    break;

  default:
    break;
}*/