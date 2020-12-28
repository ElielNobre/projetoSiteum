var tela = document.getElementById("canvas");
var mensagem = document.getElementById("mensagem")
var cat1 = document.getElementById("ct1");
var cat2 = document.getElementById("ct2");

function desenhar() {    
      var contexto = tela.getContext("2d");
      let c1 = Number(cat1.value)
      let c2 = Number(cat2.value)
      let quad = c1 * c2
        let hipo = Math.sqrt(Math.pow(c1,2)+ Math.pow(c2,2))
        let hp = parseFloat(hipo.toFixed(2));
    
      contexto.fillStyle = "rgb(20,20,10)";
      contexto.fillRect(20, 20, c1, c2);

      mensagem.innerHTML = `A área do quadrilátero é: ${quad} pixels.<br/>`
      mensagem.innerHTML += `O valor da hipotenusa ou da diagonal do quadrilátero é: ${hp} pixels.`
  }
function limpartela(){
  var contexto = tela.getContext("2d")
  contexto.clearRect(0,0,2000,2000);
}

var telat = document.getElementById("triangulo");  
var ctxt = telat.getContext("2d");
var cateto1 = document.getElementById("cateto1");
var cateto2 = document.getElementById("cateto2");
var resposta = document.getElementById("resptri");

function desenhartri(){
  let a = Number(cateto1.value);
  let b = Number(cateto2.value);
  let area = (a * b)/2;
 
    ctxt.beginPath();
    ctxt.moveTo(200,30);
    ctxt.lineTo(200,100);
    ctxt.lineTo(70,100);
    ctxt.fill();
  resposta.innerHTML = `A area do triangulo é:${area} pixels quadrados.`
}
function limpartri(){
  ctxt.clearRect(0,0,telat.width,telat.height);
}
