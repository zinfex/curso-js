var idade = 18
if (idade < 16) {      //Se idade for menor que 16
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {     //Se senão idade for menor que 18  OU  maior que 65
        console.log('Voto Opcional')   
    } else {             //Senão idade for maior que 18
        console.log('Voto obrigatório')
    }