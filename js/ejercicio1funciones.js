var statusTv = 'desligada';
var canalAtual=1;

function ligaDesliga() {
    if (statusTv === 'desligada') {
        statusTv = 'ligada';
    }else{
        statusTv = 'desligada';
    }
    return statusTv
}

function mudarCanal(canalEscolhido) {
    canalAtual=canalEscolhido;

    return canalAtual
}

ligaDesliga();
mudarCanal(12);
ligaDesliga();
