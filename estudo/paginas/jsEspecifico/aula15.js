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
            areav.innerHTML += `Número ${num} adicionado com sucesso.<br/>`
            vetor.push(num);
        }else{
            areav.innerHTML ='Digite um número e que não seja repetido<br/>'
        }
        num.value= ''
        num.focus()
}
function analisar(){
    let maior = Math.max.apply(null,vetor)
    let minimo = Math.min.apply(null,vetor)
    let soma = 0;
    for (let i = 0; i < vetor.length; i++){soma += vetor[i]}
    let media = soma / vetor.length;

    resultado.innerHTML = `O vetor tem ${vetor.length} números;<br/>`
    resultado.innerHTML += `O maior valor da lista é ${maior};<br/>`
    resultado.innerHTML += `O menor valor da lista é ${minimo};<br/>`
    resultado.innerHTML += `A media dos numeros é ${media}`

}

