
//metodos
//funciones que estan dentro de los objetos se conocen como metodos

const musica={

    reproducir: function(cancion){
        console.log('reproduciendo la cancion :' + cancion);

    },

    pausar: function() {
        console.log('paused...');
    }

}

//los metodos tambien pueden ir por fuera 
musica.borrar=function(id){
    console.log('Borrando la cancion con el ID : '+ id);
}



musica.reproducir('hotel california');
musica.pausar();
musica.reproducir('hotel costes');
musica.borrar(1221);