const cliente = {
  nombre: "alejandra",
  tipo: "premiun",
  datos: {
    ubicacion: {
      ciudad: "mexico",
      pais: "mexico"
    },
    cuenta: {
      desde: "10-12-2012",
      saldo: 4000
    }
  },
  gustos:{
      musica:['trance','rock']
  }
};


//console.log(cliente);

//forma nueva 
let {nombre, tipo}= cliente;




let {datos: {ubicacion:{ciudad}}}= cliente;



let {datos:{cuenta:{desde,saldo}}}=cliente;

let {gustos:musica}=cliente;

console.log(ciudad);
console.log(nombre, tipo);
console.log(desde, saldo);
console.log(musica);

//console.log(tipo);