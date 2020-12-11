var a = window.document.getElementById('area');
a.addEventListener('click',clicar);
a.addEventListener('mouseenter',entrar);
a.addEventListener('mouseleave',saiu);
function entrar() {
    a.innerText= 'Entrou';
    a.style.background = 'green';
}
function clicar() { 
    a.innerText ='Clicou';
    a.style.background = 'pink';
}
function saiu(){
    a.innerText = 'Saiu';
    a.style.background='red';
}
function somar(){
    var tnt1 = window.document.getElementById('txt1');
    var tnt2 = window.document.getElementById('txt2');
    var res = window.document.getElementById('resposta');
    var n1 = Number(tnt1.value);
    var n2 = Number(tnt2.value);
    var soma = n1 + n2;
    res.innerHTML = `A soma entre ${n1} e ${n2} é: ${soma}`;
}

