var tela = document.getElementById("principal")
var contexto = tela.getContext("2d")

function draw(){
    contexto.beginPath();
    contexto.fillStyle ='yellow';
    contexto.arc(150,80,50,0, Math.PI*2);
    contexto.stroke();
    contexto.closePath();
    /*contexto.closePath();*/
    contexto.beginPath();
    contexto.fillStyle ="blue";
    contexto.arc(130,60,8,0, Math.PI*2)
    contexto.fill();
    contexto.closePath();

    contexto.beginPath();
    contexto.fillStyle ="blue";
    contexto.arc(175,60,8,0, Math.PI*2)
    contexto.fill();
    contexto.closePath();

    contexto.beginPath();
    contexto.fillStyle ="black";
    contexto.arc(152,80,30,0, Math.PI*1)
    contexto.stroke();
    contexto.closePath();

    contexto.beginPath();
    contexto.moveTo(150,80);
    contexto.lineTo(160,80);
    contexto.lineTo(150,75);
    contexto.fill();
    contexto.closePath();
}
