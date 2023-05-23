var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora}Hrs`)

if (hora < 12 && hora >= 5) {
    console.log('Bom dia')
} else if (hora >= 18) {
    console.log('Boa noite')
} else if (hora <= 4) {
    console.log('Boa madrugada')
} else {
    console.log('Boa tarde')
}