function Relogio(){
   
   
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundos = data.getSeconds();
    let horaTotal = hora + ':' + minuto + ':' + segundos;
    let tempo = document.getElementById('display');

    tempo.innerHTML = horaTotal

}

setInterval(Relogio, 500);