var hora = 13
var imagem = Window.document.getElementById('mensagem')
function vermensagem(){
if (hora <= 12){
    imagem.src = 'imagens/bomdia.png'
}else{
    imagem.src = 'imagens/Boatarde.png'
}
}
