var num1 = window.document.getElementById('a');
var num2 = window.document.getElementById('b');
var num3 = window.document.getElementById('c');
var resp = window.document.getElementById('resultado');

var a= Number(num1.value)
var b= Number(num2.value)
var c= Number(num3.value)

function calcular(){
    resp.innerHTML +=`O valor de a: ${a}<br/>O valor de b: ${b}<br/>O valor de c: ${c}`
}
     /*`O valor de a: ${a}<br/>O valor de b: ${b}<br/>O valor de c: ${c}`;*/

/*
var delta = (Math.pow(b,2))-(4*a*c)

console.log(delta)
    if (delta>=0){
        var x1 =((b*(-1))+Math.sqrt(delta))/(2*a)
        var x2 =((b*(-1))-Math.sqrt(delta))/(2*a)
         
        var resul1 = (a*(Math.pow(x1,2)))+(b*x1)+c
        var resul2 = (a*(Math.pow(x2,2)))+(b*x2)+c
        
        console.log(`valores de x1: ${x1} e x2: ${x2}`)
        console.log(`O resultado para X1 é ${resul1} e para X2 é ${resul2}`);

    }else{
        console.log('Não é um número real por causa do Delta')
    }
*/