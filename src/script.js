
let tempo = document.getElementById('display');
let alarme = document.getElementById('hora');
let btn = document.getElementById('botão');
let audio = document.getElementById('audio');

function Relogio() {

    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundos = data.getSeconds();
    let horaTotal = hora + ':' + minuto + ':' + segundos;
    let valorArlame = alarme.value;

    tempo.innerHTML = horaTotal

    if(valorArlame === `${hora}:${minuto}`){
        alarme = valorArlame; 
        audio.play();       
    }

}

setInterval(Relogio, 500);

