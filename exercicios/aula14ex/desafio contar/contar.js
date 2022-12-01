function contar(){
    let inic = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res =  document.getElementById('res')
    
    // para testar o JS e se estiver faltando algum dado, aparece o 'alert'
    if(inic.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] falta dados...')
    }else{
        res.innerHTML = 'Contando:'
        
        //convertendo a caixa de texto em numero:
        let i = Number(inic.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i < f){
            for( let c = i; c <= f; c += p ){
                res.innerHTML += ` ${c} \u{1F449} `
            }
            res.innerHTML+= `\u{1F3C1}`
        }else{
                for ( let c = i; c >= f; c -= p){
                    res.innerHTML+= `${c} \u{1F449}`
                }
                res.innerHTML+= `\u{1F3C1}`
            }
        
        
    }



        
    
}