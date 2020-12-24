function desenhar() {
    var tela = document.getElementById("canvas");
    if (tela.getContext) {
      var contexto = tela.getContext("2d");

      contexto.fillStyle = "rgb(200,0,0)";
      contexto.fillRect (10, 10, 55, 50);

      contexto.fillStyle = "rgba(0, 0, 200, 0.5)";
      contexto.fillRect (30, 30, 55, 50);
    }
  }
