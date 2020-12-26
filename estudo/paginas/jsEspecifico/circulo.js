var telac = document.getElementById("canvas2"); 
var contexto = telac.getContext("2d")
var raio = document.getElementById("raio");
  

function desenharcirculo(){
    if(telac.getContext){  
        var r = Number(raio.value);
        contexto.arc(150,80,r,0,Math.PI*2)
        contexto.fill();
    }
}

function limparcirculo(){
    let ctx = telac.getContext("2d")
    ctx.clearRect(10,10,20,20);
}