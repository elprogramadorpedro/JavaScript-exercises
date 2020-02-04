//funcion declaration 
saludar();  //parametros
saludar('pedro', 'medico');
saludar('manuel', 'abogado');
saludar('samuel', 'panadero');
saludar('daniel', 'ingeniero');

//con function expresion podemos llamar la funcion y luego declarar mas


function saludar(nombre='Visitante', trabajo='No Sabemos!') {
    console.log('hola ' +nombre+ ' tu trabajo es ' +trabajo);
}


//function expresion 
const calculadora=function(a=0, b=0 ) {
    console.log( a+b);
    console.log( a-b);
}

calculadora(55, 24);
calculadora(2555214416165161616161616161618118656161616161515, 4545151551514651561616616161611555555);

//IIFE
(function(tecnologia){
    console.log('AQUI ESTOY APRENDIENDO ' + tecnologia); 
   })('javaScript');