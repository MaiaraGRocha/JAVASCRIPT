function tabuada() {

    let num = window.document.getElementById('inum')  
    let res = window.document.getElementById('ires') 
          
    if(num.value.length == 0){
        window.alert('Por favor, digite um número...')
    } else {
        let n = Number(num.value)
        let c = 0
        res.innerHTML= '' //antes de mostrar a tabuada vai limpar a area de tabuada
        while (c <= 10){
            let item = document.createElement('option') //criou o elemento do tipo 'option' . Mesma coisa de criar 'option' no <select> do html.
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // nao faz sentido pro JS, mas pra outras linguagens faz o uso dessa possibilidade pra saber qual item foi selecionado.
            res.appendChild(item)  // vai fazer a tabuada aparecer
            c++
        }
    }

}