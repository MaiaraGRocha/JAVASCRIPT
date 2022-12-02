
function contar(){
    let inic = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

    if (inic.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Preencha os dados...')
    }else{
        res.innerHTML = 'Contando: '
        let i = Number(inic.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(i < f ){
            for(let c = i; c <= f; c += p){
            res.innerHTML+=` ${c} \u{1F449}`
            }
                res.innerHTML+= `\u{1F3C1}`
        }else{
            for( let c = i; c >= f; c -= p){
                res.innerHTML+= ` ${c} \u{1F449}`
            }
            res.innerHTML+= `\u{1F3C1}`
        }
        
        
    }
        
            
}
    

