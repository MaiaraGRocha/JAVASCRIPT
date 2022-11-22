
var idade = 15
console.log(`Sua idade é ${idade} seu voto é: `)


if(idade < 16) {
    console.log('Não vota')
}else{
    if (idade >=16 && idade <18) {
        console.log( 'opcional')
    }else{
        if (idade>65){
            console.log('opcional')
        }else{
            console.log('obrigatório')
        }

    }
    
  
}