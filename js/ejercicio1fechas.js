const diaHoy = new Date();

let valor = diaHoy;

// Retorna el numero del mes=0 = Enero 
valor=diaHoy.getMonth(); //nos devuelve el mes actual 

//Retorna el numero del dia: 0 = Domingo 
valor= diaHoy.getDay();

//retorna el numero de dia del mes
valor=diaHoy.getDate();

//año actual
valor=diaHoy.getFullYear();

//minutos de la hora
valor=diaHoy.getMinutes();

//las horas del dia
valor=diaHoy.getHours();

//valor de los milisegundos actuales
valor=diaHoy.getTime();


// con get obtienes con set quitas y vuelves a obtener con get 
/*
valor= diaHoy.getFullYear();
valor= diaHoy.setFullYear(); //con set reescribes el valor 
valor= diaHoy.getFullYear();
*/


console.log(valor);    //esta es la forma para tomar una fecha actual 


/*-------------------------------------------------------------------------------------------*/

//mediante este objeto poderemos adivinar que dia era la fecha de tu nacimiento 

const unDia= new Date('4-17-1991');

let valore;
valore = unDia.getDay();


console.log(valore);


