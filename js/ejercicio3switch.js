
    // não altere a linha acima
        
    /* 
     * Atribua um dos seguintes valores na variável `resultado`
     *
     * Geração silenciosa: para os nascidos até o ano de 1945;
     * Boomers: para os que nasceram depois de 1945 até 1964;
     * Geração X: para os que nasceram depois de 1964 até 1980;
     * Millennials: para os que nasceram depois de 1980 até 1996;
     * Geração Z: para os que nasceram depois de 1996;
     */


    var frutas;
    frutas="Naranja";
    switch (frutas) {
        case 'Naranja':
          console.log('El kilogramo de Naranjas cuesta $0.59.');
          break;
        case 'Manzana':
          console.log('El kilogramo de Manzanas cuesta $0.32.');
          break;
        case 'Banana':
          console.log('El kilogramo de Bananas cuesta $0.48.');
          break;
        case 'Cereza':
          console.log('El kilogramo de Cerezas cuesta $3.00.');
          break;
        case 'Mango':
        case 'Papaya':
          console.log('El kilogramo de Mangos y Papayas cuesta $2.79.');
          break;
        default:
          console.log('Lo lamentamos, por el momento no disponemos de ' + frutas + '.');
      }
      
      console.log("¿Hay algo más que te quisiera consultar?");