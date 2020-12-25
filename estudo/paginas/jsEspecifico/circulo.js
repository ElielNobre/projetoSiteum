var telac = document.getElementById("canvas2"); 
var contexto = telac.getContext("2d")
var raio = document.getElementById("raio");
  

function desenharcirculo(){
    if(telac.getContext){  
        var r = Number(raio.value);
        contexto.beginPath();
        contexto.arc(150,80,r,0,Math.PI*2)
        contexto.fill();
    }
}

function limparcirculo(){
    contexto.clearRect(0,0,2000,2000);
}