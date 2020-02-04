/*Segun el sitio web:
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos

Un objeto es una colección de propiedades, y una propiedad es una asociación entre 
un nombre (o clave) y un valor. Un valor de una propiedad puede ser una función, en cuyo 
caso la propiedad es conocida. Además de los objetosque están predefinidos en el navegador, 
puedes definir tus propios objetos.*/

//objetos

var manzana12={
    color:'rojo',
    tamaño:'25*25*25',
    olor:'frutal',
    sabor:'dulce',
    especie:'manzanita',
    ubicacion:'caracas',
    manzanaverde:{
        color:'verde',
        sabor:'amargo'
    }
 
};

console.log(manzana12);

//objetos un objeto mas agregado

var manzana={
    color:'rojo',
    tamaño:'25*25*25',
    olor:'frutal',
    sabor:'dulce',
    especie:'manzanita',
    ubicacion:'caracas',
    manzanaverde:{
        color:'verde',
        sabor:'amargo'
    },
  //  "outra-coisa":"cambur"    //otra manera de anexar objetos.
};

console.log(manzana["outra-coisa"]);

//objetos dentro de otros objetos. 
var carro={

    marca:'chevrolet',
    color:'azul',
    dimenciones:'23*36*58',
    opciones:{
        frenos:'manuales',
        discos:'de acero',
        opciones2:{
            modelo:'convertible',
            colordepuertas:'rosado'
        }

    }

   
};

console.log(carro.opciones.opciones2.modelo);