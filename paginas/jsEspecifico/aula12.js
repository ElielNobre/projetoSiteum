function vermensagem(){
var msg = window.document.getElementById('msg');
var imagem = window.document.getElementById('imagem');
var boasvindas = window.document.getElementById('boasvindas');
var data = new Date();
var hora = data.getHours();

msg.innerHTML = `<h4>Agora são ${hora} horas.</h4>`

if (hora >= 6 && hora < 12){
    boasvindas.innerHTML  = '<p>Bom dia</p>';
    imagem.src = '../imagens/bomdia.png';
    document.body.style.background = 'rgb(80,248,231)';
} else if (hora >= 12 && hora < 18){
    boasvindas.innerHTML = '<p>Boa tarde<p>';
    imagem.src = '../imagens/Boatarde.png';
    document.body.style.background = 'rgb(242,233,57)';
}else if (hora >= 18 && hora < 24){
    boasvindas.innerHTML = '<p>Boa Noite</p>';
    imagem.src = '../imagens/boaNoite.png';
    document.body.style.background = 'rgb(24,24,248)';
}else {
    boasvindas.innerHTML = '<p>Boa Madrugada</p>';
    imagem.src = '../imagens/boamadrugada.png';
    document.body.style.background = 'rgb(35,0,128)';
}

}
