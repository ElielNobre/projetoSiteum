var telac = document.getElementById("circulo"); 
let resposta = document.getElementById("respcir");  
let contexto = telac.getContext("2d");
let raio = document.getElementById("raio");   
const p =Math.PI 

function desenharcirculo(){ 
        let r = Number(raio.value);  
        let area = Math.pow(r,2)*p;
        contexto.beginPath();
        contexto.fillStyle ='green';
        contexto.arc(150,80,r,0, p*2);
        contexto.closePath();
        contexto.fill();
        resposta.innerHTML = `A area do círculo é: ${area.toFixed(2)}pixels quadrados.`
}

function limparcirculo(){     
    contexto.clearRect(0,0,telac.width,telac.height);
    /*desenharcirculo() = null;*/
    /*window.location.reload();*/
    /*não é o ideal mas é só pra ter o prazer de dizer 
    que não perdi essa batalha;*/ 
}
/*function meupau(){
    if(raio = 0){
    raio = document.getElementById("raio"); )
    }
    }*/