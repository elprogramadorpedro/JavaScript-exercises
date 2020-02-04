
//ejercicio if- else

const puntaje = 1000;
if (puntaje===1000) {
    console.log('si estas logueado');
}else{
    console.log('inicia sesion');
}


//ejercicio if- else
const edad=18;

if(edad>=18){
    console.log('es mayor de edad');
}else{
    console.log('es menor de edad');
}


//ejercicio if- else if 

let dinero1 =900;
let totalcarrito2= 1800;
let tarjeta=false;


if (dinero1>totalcarrito2){
    console.log('pago correcto');
}
else if(totalcarrito2<dinero1){
    console.log('paga con targeta');
}
else{
    console.log('fondos insuficientes');
}