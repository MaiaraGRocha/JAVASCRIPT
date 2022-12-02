
function tabuada(){

    let num = window.document.getElementById('txtn')
    let res = window.document.getElementById('ires')

    
    if( num.value.length == 0 ){
        window.alert('[ERRO] Por favor, digite um número...')
    } else {
        let n = Number(num.value)
        let c = 0
        res.innerHTML=''
        while (c <= 10){

            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
    
            res.appendChild(item)
    
            c++
        }
      
        
    }
}