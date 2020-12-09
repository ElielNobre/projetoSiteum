function vermensagem(){
var nome = window.document.getElementById('anome')
var idade = window.document.getElementById('aidade')
var sexo = window.document.getElementById('sex')
var imagem = window.document.getElementById('imagem')

var name = String(nome.value)
var id = Number(idade.value)
var sex = String(sexo.value)

var mensagem =window.document.getElementById('mes')


if (id <= 12 && sex === 'Feminino'){
    imagem.src = '../imagens/menina.png' 
}
else if(id <= 12 && sex === 'Masculino'){
    imagem.src = '../imagens/menino.png'
}
else if(id > 12 && id <= 18  && sex === 'Feminino'){
    imagem.src = '../imagens/adolecentef.png'
}
else if(id > 12 && id <= 18 && sex === 'Masculino'){
    imagem.src = '../imagens/adolecentem.png'
}
else if(id > 18 && id <= 50 && sex === 'Feminino'){
    imagem.src = '../imagens/mulher.png'
}
else if(id > 18 && id <= 50 && sex === 'Masculino'){
    imagem.src = '../imagens/homem.png'
}
else if(id > 50 && sex === 'Feminino'){
    imagem.src = '../imagens/idosa.png'
}
else if(id > 50 && sex === 'Masculino'){
    imagem.src = '../imagens/idoso.png'
}

mensagem.innerHTML = `<p>Nome: ${name}, do sexo ${sex} e com ${id} anos;</p>`;
}