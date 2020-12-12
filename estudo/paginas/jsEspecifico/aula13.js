function contar() {        
   var inicio = document.getElementById('txti')
   var fim = document.getElementById('txtf')
   var passo = document.getElementById('txtp')
   var res = window.document.getElementById('res')

  
  
   if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML= '[ERRO] Faltam dados'     
   }else{
        res.innerHTML = 'Começou...<br/>'
        let begin = Number(inicio.value)
        let end = Number(fim.value)
        let pass = Number(passo.value)

        for (let i = begin;i <= end;i += pass){
          res.innerHTML += `&#128073;&#127995;${i}<br/>`
        }
        res.innerHTML += '<h1>&#9997;&#127997;</h1>'
   }
 }