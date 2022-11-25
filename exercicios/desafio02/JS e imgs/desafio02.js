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
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        

        if (fsex [0].checked){
            gênero = 'Mulher'

            if(idade>=0 && idade<12){
                img.setAttribute('src', 'infanciaf.jpg')

            }else if (idade <25){
                img.setAttribute('src', 'jovemf.jpg')

            }else if (idade <60){
                img.setAttribute('src', 'adultof.jpg')

            }else{                
                img.setAttribute('src', 'idosof.jpg')
            }      

        }else if (fsex [1].checked){
            gênero = 'Homem'
            if(idade>=0 && idade<12){
                img.setAttribute('src', 'infanciam.jpg')

            }else if (idade <25){
                img.setAttribute('src', 'jovemm.jpg')

            }else if (idade <60){
                img.setAttribute('src', 'adultom.jpg')

            }else{
                img.setAttribute('src', 'idosom.jpg')

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ` Detectamos ${gênero} com ${idade} anos` 
        res.appendChild(img)
    }
   

   
}