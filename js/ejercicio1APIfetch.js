descargarUsuarios(30);

function decargarUsuarios(cantidad){

const api= 'https://api.randomuser.me/?nat=US&results=${cantidad}';
//llamado a fetch
fetch(api)
    .then(respuesta => respuesta.json() )
    .then(datos=> imprimirHTML(datos.results)); 

}        
    
function imprimirHTML(datos){

    datos.forEach(usuario =>{
        const li=document.createElement('li');

        const {name:{first}, name:{last}, picture:{mediun},nat }=
        usuario;

        li.innerHTML='
        Nombre: ${first} ${last}
        Pais: ${nat}
        imagen:<img src="${mediun}">
        ';
        document.querySelector('#app')appendChild(li);

    });
        
        
        
        
        
}
