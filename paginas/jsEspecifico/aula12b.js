function vermensagem(){
var nome = window.document.getElementById('anome')
var idade = window.document.getElementById('aidade')
var sexo = window.document.getElementById('sex')
var imagem = window.document.getElementById('imagem')

var name = String(nome.value)
var id = Number(idade.value)
var sex = String(sexo.value)

var mensagem =window.document.getElementById('mes')

var game = window.document.getElementById('jogo');
var jogo = String(game.value)

var ilustracao = window.document.getElementById('il');

if (id <= 12 && sex === 'Feminino'){
    imagem.src = '../imagens/aula12b/menina.png'; 
}
else if(id <= 12 && sex === 'Masculino'){
    imagem.src = '../imagens/aula12b/menino.png'
}
else if(id > 12 && id <= 18  && sex === 'Feminino'){
    imagem.src = '../imagens/aula12b/adolecentef.png'
}
else if(id > 12 && id <= 18 && sex === 'Masculino'){
    imagem.src = '../imagens/aula12b/adolecentem.png'
}
else if(id > 18 && id <= 50 && sex === 'Feminino'){
    imagem.src = '../imagens/aula12b/mulher.png'
}
else if(id > 18 && id <= 50 && sex === 'Masculino'){
    imagem.src = '../imagens/aula12b/homem.png'
}
else if(id > 50 && sex === 'Feminino'){
    imagem.src = '../imagens/aula12b/idosa.png'
}
else if(id > 50 && sex === 'Masculino'){
    imagem.src = '../imagens/aula12b/idoso.png'
}

mensagem.innerHTML = `<p>Nome: ${name}, do sexo ${sex} e com ${id} anos;</p>`;

    if(jogo==='fortnite'){
            ilustracao.src = '../imagens/aula12a/bomdia.png';
    }else if(jogo === 'free'){
        ilustracao.src = '../imagens/aula12a/bomdia.png';
    }else if (jogo === 'fg'){
        ilustracao.src = '../imagens/aula12a/bomdia.png';
    }else if (jogo === 'mc'){
        ilustracao.src = '../imagens/aula12a/bomdia.png';
    }

}