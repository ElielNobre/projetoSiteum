var numero = window.document.getElementById('numero')
var areav = window.document.getElementById('areavalores');
var resultado = window.document.getElementById('resultado');
let vetor = [];

function isNumero(n){
    if(Number(n)>=1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
        if (isNumero(numero.value) && !inLista(numero.value, vetor)){
            let num = Number(numero.value) 
            areav.innerHTML = `Número ${num} adicionado com sucesso.`
        }else{
            areav.innerHTML ='Digite um número e que não seja repetido'
        }
}

