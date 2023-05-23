var agora = new Date()
var hora = agora.getHours()
var img = document.getElementById('imagem')

document.getElementById('horario').innerHTML = `Agora são ${hora} horas`

if (hora > 18) {
    document.body.style.backgroundColor = '#282828' //Noite
    img.src = 'imgs/noite.png'
} else if (hora < 12 && hora > 5) {
    document.body.style.backgroundColor = '#FDD5B1' //Manhã
    img.src = 'imgs/manha.png'
} else if (hora > 12) {
    document.body.style.backgroundColor = '#C19A6B' //Tarde
    img.src = 'imgs/tarde.png'
} else {
    document.body.style.backgroundColor = '#282828' //Madrugada
    img.src = 'imgs/madrugada.png'
}