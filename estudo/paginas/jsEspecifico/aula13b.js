function calcular() {        
    var num = window.document.getElementById('txti')
    var res = window.document.getElementById('res')   
   
    if (num.value.length==0) {
         res.innerHTML= '[ERRO] Faltam dados'     
    }else{
         res.innerHTML = 'Resultado<br/>'
         let n = Number(num.value)
         let mult = Number(1)    
           
         while(mult<=20){
            let resul = n * mult
         res.innerHTML += `${n} X ${mult} = ${resul}<br/>`;
         mult++;
        }
    }
  }