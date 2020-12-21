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
   
var canvas = document.getElementById("meuRetangulo");
var context = canvas.getContext("2d")

context.beginPath();
context.moveTo(20,20);
context.lineTo(200,20);
context.lineTo(200,100);
context.lineTo(20,100);
context.lineTo(20,20);
context.stroke(); //draw path