let num = [6,2,4,1,5,3]
num.push(7)          //colocar em ordem crescente
num.sort()          //vai acrescentar o valor (7) na ultima posição 
console.log(num)  
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]} `)

let pos = num.indexOf(9)
if(pos == -1){   // -1 é quando nao existe o numero solicitado, entao faz o 'if' pra aparecer a frase no lugar de -1
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor 4 esta na posição ${pos}`)

}
