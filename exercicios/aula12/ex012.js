var agora = new Date()                    //hora atual 
var hora = agora.getHours()
var minutos = agora.getMinutes()
console.log(`São exatamente ${hora} horas e ${minutos} minutos`)

if(hora<12) {
    console.log(`Bom Dia`)
}else{
    if (hora >=18){
        console.log(`Boa noite`)

    }else
    console.log(`Boa Tarde`)
}