var agora = new Date()
var diaSem = agora.getDay()
/* 0 - Domingo
   1 - Segunda
   2 - terça
   3 - Quarta
   4 - Quinta
   5 - Sexta
   6 - Sábado  */
switch(diaSem) {
    case 0:
        console.log('hoje é domingo')
        break
    case 1:
        console.log('hoje é segunda')
        break
    case 2:
        console.log('hoje é terça')
        break
    case 3:
        console.log('hoje é quarta')
        break
    case 4:
        console.log('hoje é quinta')
        break
    case 5:
        console.log('hoje é sexta')
        break
    case 6:
        console.log('hoje é sábado')
}