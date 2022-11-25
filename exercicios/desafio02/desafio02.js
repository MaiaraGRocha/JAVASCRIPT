function verificar() {

    var data = new Date()
    var ano = data.getFullYear()  //para ano atual
    var nasc = window.document.getElementById('iidade')
    var res = window.document.querySelector('div#frase')
    
    if (nasc.value == 0 || nasc.value >ano) {
         window.alert('[ERRO], digite o ano corretamente.')
    }else{
        var fsex = document.getElementsByName('isexo')
        var idade = ano - Number(nasc.value)
        res.innerHTML= `Você tem ${idade} anos de idade.`

    }
    if ( nasc.value >=3 && nasc.value <=11){
        
        document.body.style.background = '#316E93'
    }

   
}