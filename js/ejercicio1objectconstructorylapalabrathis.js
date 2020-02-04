//ejercicio1 objectconstructor y la palabrathis.js

//objeto literal 

const personas={

nombre: 'ricardo',
edad: 80,
anioNacimiento: function(){
    return new Date().getFullYear()-this.edad;
}



};

console.log(personas.anioNacimiento());
//existen dos manenas de crear un object contructor 
























/*


//asi se crea un object constructor 

//manera numero1 
// Object constructor 

function Tarea(nombre, urgencia){

    this.nombre= nombre;
    this.urgencia= urgencia;

}

// crear nuevas tareas 

const tarea1= new Tarea('Aprender javascript', 'urgente');
const tarea2= new Tarea('Aprender Matematicas', 'urgente');
const tarea3= new Tarea('Aprender fisica', 'urgente');
const tarea4= new Tarea('Aprender quimica', 'urgente');

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);
*/


















//manera numero2  este object contructor es transformado hacia clases 


class Tarea{
    constructor(nombre, urgencia){
        this.nombre=nombre;
        this.urgencia=urgencia; 
    }
}
// -------------------------crear nuevas tareas------------------------------------

const tarea1= new Tarea('Aprender javascript', 'urgente');
const tarea2= new Tarea('Aprender Matematicas', 'urgente');
const tarea3= new Tarea('Aprender fisica', 'urgente');
const tarea4= new Tarea('Aprender quimica', 'urgente');

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);