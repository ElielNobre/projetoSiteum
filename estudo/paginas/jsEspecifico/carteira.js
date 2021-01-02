var entrou = document.getElementById("enter");
var saiu = document.getElementById("leave")
var saldoanterior = document.getElementById("balanceant")
var saldo = document.getElementById("balance")
var teste = document.getElementById("teste")

function escrever(){
    let enter = Number(entrou.value);
    let leave = Number(saiu.value);
    let balance = enter - leave;

    saldo.innerHTML=`entrou: ${enter}<br/>Saiu: ${leave}<br/> O saldo é de:${balance}`
}
