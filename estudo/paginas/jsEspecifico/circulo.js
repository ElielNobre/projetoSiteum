var telac = document.getElementById("canvas2"); 
var contexto = telac.getContext("2d")        
var raio = document.getElementById("raio"); 
var resposta = document.getElementById("respcir")  

function desenharcirculo(){
    if(telac.getContext){
            let r = Number(raio.value);
            let p = Math.PI
            let area = Math.pow(r,2)*p;
            contexto.arc(150,80,r,0, p*2)
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