function adicionar(){
var numero = window.document.getElementById('numero')
var areav = window.document.getElementById('areavalores');
var resultado = window.document.getElementById('resultado')

var num = Number(numero.value);


    if (num===0){
        resultado.innerHTML ='<h4>Digite um número, Por favor</h4>';
    }else{
        areav.innerHTML = `Número ${num} adicionado com sucesso<br/>`;
    }
}

