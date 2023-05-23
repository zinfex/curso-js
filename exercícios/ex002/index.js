function verificar() { 
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('ano')
    var res = document.getElementById('res')
   
    if (nasc.value == 0 || nasc.value > ano) { //Se a resposta fo invalida
        window.alert('[ERRO] Verefique os dados e tente novamente')
    } else { //Dê as respostas forem válidas
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')  //criei um elemnto de img no html 
        img.setAttribute('id', 'foto')        //Atribui o Id do _img_ de foto

        if(fsex[0].checked) { //se for homem
            genero = 'Homem'
            if (idade >= 0 && idade < 10) { //Criança
                img.setAttribute('src', 'imgs/kidm.png')
            } else if (idade < 21) { //Jovem
                img.setAttribute('src', 'imgs/jovemm.png')
            } else if (idade < 50) { //Adulto
                img.setAttribute('src', 'imgs/adultom.png')
            } else { //Idoso
                img.setAttribute('src', 'imgs/idosom.png')
            }

        } else { //Se for mulher
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) { //Criança
                img.setAttribute('src', 'imgs/kidf.png')
            } else if (idade < 21) { //Jovem
                img.setAttribute('src', 'imgs/jovemf.png')
            } else if (idade < 50) { //Adulto
                img.setAttribute('src', 'imgs/adultof.png')
            } else { //Idosa
               img.setAttribute('src', 'imgs/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}