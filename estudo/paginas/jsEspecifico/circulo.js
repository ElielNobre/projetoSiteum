var telac = document.getElementById("circulo"); 
let raio = document.getElementById("raio");   
let resposta = document.getElementById("respcir")  
let contexto = telac.getContext("2d")

function desenharcirculo(){         
            let r = Number(raio.value); 
            const p = Math.PI 
            let area = Math.pow(r,2)*p;
            contexto.fillStyle ='green';
            contexto.arc(150,80,r,0, p*2);
            contexto.fill();
            resposta.innerHTML = `A area do círculo é: ${area.toFixed(2)}pixels quadrados.`
}

function limparcirculo(){     
    contexto.clearRect(0,0,2000,2000);
    /*desenharcirculo() = null;*/
    window.location.reload();
    /*não é o ideal mas é só pra ter o prazer de dizer 
    que não perdi essa batalha;*/ 
}