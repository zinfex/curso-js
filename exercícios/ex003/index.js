function contador() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let pas = document.getElementById('passo')
    let r = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        r.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')    
    } else {
        r.innerHTML = 'Contado: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if (p == 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            //Contagem Crescente
            for(let x=i; x<=f; x+=p) {
                r.innerHTML += `${x} \u{1F449}`
            }
        } else {
            //Contagem Regressiva
            for (let x=i; x>=f; x-=p) {
                r.innerHTML += `${x} \u{1F449}`
            }
        }
        r.innerHTML += `\u{1F3C1}`
    }
}