/*var velatual = 120;
var limite = 100;

console.log(`A velocidade de seu carro é de ${velatual} por hora`);

if (velatual >= limite){
    console.log('O seu carro vai ser mutado por execesso de velocidade')
}else{
    console.log('Dirija com cuidado!')
};
console.log('Vai Começar')
for (var c =1; c<= 10; c++){
    console.log(`Eu sou ${c}`)
}
console.log('FIM')*/

/*let num = [1,2,3,4,5,6,7,8]
num.push(9)
num.sort()
console.log(num.sort())
console.log(num.length)
console.log(num[2])*/

/*var num =[1,5,9,2,4,1,4556,2,3,6,7,8,4,2,1,3432,23,1234,134523,222,444]
console.log(num.indexOf(4));*/

/*
for (let i = 0;i <= num.length-1; i++){
    console.log(`O valor da posição ${i} é igual á: ${num[i]}`);
}
for (let i in num){
    console.log(`O valor da posição ${i} é igual a ${num[i]}`)
}*/

/*
function parimpar(n){
    if (n % 2==0){
        return 'Par'
    }else{
        return 'Ímpar'
    }
}

console.log(parimpar(1001))*/
/*
function soma(n1=0,n2=0){
    return n1 + n2
}

console.log(soma(70,56))

var v = function(x,q){
    return x * q
}

console.log(v(12,30))

function fatorial(num){
    let fat = 1
    for (let i= num; i > 1; i--){
        fat = fat * i
    }
        return fat;
}

console.log(`O fatorial de 5 é: ${fatorial(5)}`)


var animal = ['Lion'];

animal.push('Cat')
animal.push('Dog')
console.log(`${animal}`);
const numeros = [0, 1, 2, 3, 4, 5];
let i = numeros.length - 1;

do {
  console.log(`${numeros.reverse()}`)
  i--;
} while(numeros < i);*//*
const tags = [ "Python", "C++", "F#" ];

if (tags.length >= 3) {
  for (let i = 0; i <= 2; i++) {
    console.log(tags[i]);
  }
} else {
  console.log("Insira pelo menos 3 tags");
}*/
var a = 3;
var b = -7;
var c = 4;

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








