//CON EL OR PUEDES EVALUAR DOS CONDICIONES ||   

let dinero =300;
let totalCarrito=500; 
let tarjeta = true; 

if (dinero>totalCarrito || tarjeta){
    console.log('pago correcto');
}
else{
    console.log('fondos insuficientes paga con tarjeta');
}



let hora=14;

if (hora >0 && hora<= 12) {
    console.log('buenos dias');
}else if (hora >12 && hora<=18) {
    console.log('buenas tardes');
}else if (hora >18 && hora<=24) {
    console.log('Buenas Noches');
}else{
    console.log('horario no valido');
}


