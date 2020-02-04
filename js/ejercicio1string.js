//existen dos tipos de string
//uno de tipo primitivo
//otro de tipo objeto

//tipo primitivo 

const mensagem= 'minha primeira mensagem';
console.log(mensagem);

//tipo objeto

const outraMensagem = new String('bom dia');

console.log(typeof mensagem);

console.log(typeof outraMensagem);
console.log(outraMensagem[2]);  /*esta forma te muestra el elemento que hay
                                     en la posicion 2 del obejto*/

console.log (mensagem.includes('primeira')); /*resultado true--- te dice si una palaba esta 
                                                dentro de la cadena de texto*/

console.log (mensagem.indexOf('primeira'));

console.log(mensagem.replace('minha', 'sua'));

console.log(mensagem.split(' ')); // me divide todo el mensaje y puedo ver todos los elementos y espacios dentro