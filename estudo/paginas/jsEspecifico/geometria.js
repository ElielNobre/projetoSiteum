var tela = document.getElementById("canvas");
var mensagem = document.getElementById("mensagem")
var cat1 = document.getElementById("ct1");
var cat2 = document.getElementById("ct2");
  
function desenhar() {    
    if (tela.getContext) {
      var contexto = tela.getContext("2d");
      let c1 = Number(cat1.value)
      let c2 = Number(cat2.value)
      let quad = c1 * c2
      let tria = (c1*c2)/2
        let hipo = Math.sqrt(Math.pow(c1,2)+ Math.pow(c2,2))
        let hp = parseFloat(hipo.toFixed(2));
    
      contexto.fillStyle = "rgb(20,20,10)";
      contexto.fillRect(20, 20, c1, c2);
      mensagem.innerHTML = `A área do quadrado é: ${quad} pixels.<br/>`
      mensagem.innerHTML += `A área do quadrado é: ${tria} pixels.<br/>`
      mensagem.innerHTML += `O valor da hipotenusa ou da diagonal do retangulo é: ${hp} pixels.`
     /* contexto.fillStyle = "rgba(0, 0, 200, 0.5)";
      contexto.fillRect (30, 30, 55, 50);*/
    }
  }
function limpartela(){
  var contexto = tela.getContext("2d");
  contexto.clearRect(0,0,2000,2000);
}