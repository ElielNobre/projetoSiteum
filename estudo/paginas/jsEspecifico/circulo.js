var telac = document.getElementById("canvas2"); 
var contexto = telac.getContext("2d")        
var raio = document.getElementById("raio"); 
var resposta = document.getElementById("respcir")  
var area = Math.pow(raio,2)*Math.PI;

function desenharcirculo(){
    if(telac.getContext){
            var r = Number(raio.value);
            var area = Math.pow(r,2)*Math.PI;
            contexto.arc(150,80,r,0,Math.PI*2)
            contexto.fill();
            resposta.innerHTML = `A area do círculo é: ${area.toFixed(2)}pixels quadrados.`
    }
}
function limparcirculo(){
    contexto.clearRect(0,0,2000,2000);
    window.location.reload();
    /*não é o ideal mas é só pra ter o prazer de dizer 
    que não perdi essa batalha;*/ 
}