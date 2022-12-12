    
let num = document.getElementById('numb')
let val = document.getElementById('value')
let res = document.getElementById('result')
let valores = [] // VAZIO (pra zerar o valor). Esse vetor é p analizar os dados
    
function isNumero(n){  // verificar se (n) é um número
    if(Number(n) >= 1 && Number(n) <= 100){
        return true // nao vai aparecer nada na tela, so RETORNA VERDADEIRO
     }else{
        return false
    }
}
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}
function adicionar(){  
  
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) 
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        val.appendChild(item)
        res.innerHTML= '' // quando add um elemento, ele tem que limpar o resultado anterior
    }else{
        window.alert('Valor inválido ou já encontra-se na lista')
    }
    num.value = ''    // vai apaga depois que vc escrever 
    num.focus()        // o cursor voltar a piscar na caixa
       
}

function finalizar(){
    if(valores.length == 0){
        window.alert(' Adicionar valores antes de finalizar')
    }else{
        let tot = valores.length
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0

        for(let pos in valores){  // laço de percurso, que vai varrere o valor inteiro . o "for" vai analizar um por um e verif. qual é o maior

            soma += valores[pos]
            if(valores[pos] > maior)
              maior = valores[pos]

            if( valores [pos] < menor)
                menor = valores [pos]
        }
         media = soma / tot   
        res.innerHTML = '' // pra zerar o valor
        res.innerHTML += `<p>Ao todo, temos ${tot} números  cadastrados <p>`
        res.innerHTML+=`<p> O maior valor informado foi ${maior}.<p>`
        res.innerHTML+=`<p>O menor valor informado foi ${menor}.<p>`
        res.innerHTML+= `<p>A soma de todos os valores é ${soma}<p>`
        res.innerHTML+= `<p>O média dos valores é ${media}<p>`
    }
    
    
}
    


