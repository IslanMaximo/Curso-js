function enviar(){
   var fano = document.getElementById('iano')
   var res= document.querySelector('div#resultado')
   var data = new Date()
   var ano = data.getFullYear()
   if(fano.value.length < 4 || fano.value > ano){
    window.alert('Confira os campos preenchidos')
   }else{
    var fsex = document.getElementById('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    if(fsex['0'].checked){
        genero = 'Homem'
    }else{
        genero = 'Mulher'
    }
    res.innerHTML= `Você é ${genero} e tem ${idade}anos de idade`
   }
}