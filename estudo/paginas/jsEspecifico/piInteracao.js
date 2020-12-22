var num1 = window.document.getElementById('a');
var num2 = window.document.getElementById('b');
var num3 = window.document.getElementById('c');
var resp = window.document.getElementById('resultado');

function calcular(){
var a= Number(num1.value)
var b= Number(num2.value)
var c= Number(num3.value)

    resp.innerHTML +=`O valor de a: ${a}<br/>O valor de b: ${b}<br/>O valor de c: ${c}<br/>`
    var delta = (Math.pow(b,2))-(4*a*c)
    resp.innerHTML += `O valor de Delta é: ${delta}<br/>`

    if (delta >= 0){
        var x1 = ((b*(-1))+(Math.sqrt(delta)))/(2*a)
        var x2 = ((b*(-1))-(Math.sqrt(delta)))/(2*a)
        let xx1 = parseFloat(x1)
        let xx2 = parseFloat(x2)
        resp.innerHTML += `O valor de x1: ${xx1}<br/>`
        resp.innerHTML += `O valor de x2: ${xx2}<br/>`
    }

}
var stage = window.document.getElementById("canvas")
stage.width = "500";
stage.height = "100";
stage.style.background= "rgba(0,0,0,1)";
document.body.appendChild(stage);
var cnv= stage.getContext("2d");
var w = stage.width;
var h = stage.height;
var r = 30;
var angle = 1;
var limite = 20;
var colorPacMan= "yellow";
var opening = true;
var interval = 10;

function desenhar(){
cnv.fillStyle = "black";
cnv.strokeStyle = "black";
cnv.lineWidth = 0; 
cnv.arc(w/2, h/2, r, 0, Math.PI*2);
cnv.stroke();
cnv.fill();
ang = (Math.PI/180)*angle;
cnv.beginPath();
cnv.fillStyle = colorPacMan;
cnv.strokeStyle = colorPacMan;
cnv.lineWidth = 40; 
cnv.arc(w/2, h/2, r-10, ang, -ang, false);
cnv.stroke();
}
function animate(){
  setInterval(function(){
    desenhar();
    if(opening)
      ++angle;
      else
      --angle;
    
    if(angle <= 1 || angle >= limite)
      opening = angle <= 1 ? true : false; 
  },interval);
}