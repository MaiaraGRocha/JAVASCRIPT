
function carregar (){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')

    var agora = new Date()                    
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    
    msg.innerHTML = `São  ${hora} horas e ${minutos} minutos`

    if (hora>=0 && hora<12){
        
        img.src = 'amanhecer.jpg'
        document.body.style.background = '#316E93'
        
    }else
        if (hora>=12 && hora<18){
            img.src = 'entardecer.jpg'
            document.body.style.background = '#FDBE3E'

        }else{
            img.src = 'anoitecer.jpg'
            document.body.style.background = '#3C3F60'

        }
    

}



