var agora = new Date();
var diaSemana = 1;
var hora = agora.getHours();



switch(diaSemana){
    case 0:
        diaSemana = 'Domingo'
        break
    case 1: 
        diaSemana = 'Segunda-feira'
        break
    case 2: 
        diaSemana = 'Terça-feira'
        break
    case 3: 
        diaSemana = 'Quarta-feira'
        break
    case 4: 
        diaSemana = 'Quinta-feira'
        break    
    case 5: 
        diaSemana = 'Sexta-feira'
        break
    case 6: 
        diaSemana = 'Sábado'
        break
}

if (hora >= 6 && hora <12){
    console.log(`Bom dia!! Hoje é ${diaSemana}`)
}else if(hora >= 0 && hora <6){
    console.log(`Bom madrugada!! Hoje é ${diaSemana}`)
}else if (hora >=12 && hora < 18){
    console.log(`Boa Tarde!! Hoje é ${diaSemana}`)
}else if (hora >= 18 && hora < 24){
    console.log(`Boa Noite Hoje é ${diaSemana}`)
}
