function enviar(){
   var fano = document.getElementById('iano')
   var res= document.querySelector('div#resultado')
   var data = new Date()
   var ano = data.getFullYear()
   if(fano.value.length < 4 || fano.value > ano){
    window.alert('Confira os campos preenchidos')
   }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked){
        genero = 'Homem'
        img.setAttribute('src', 'img/ex002/homem.jpg')
    }else{
        genero = 'Mulher'
        img.setAttribute('src', 'img/ex002/mulher.jpg')
    }
    res.innerHTML= `<p>Você é ${genero} e tem ${idade} anos de idade</p>`
    res.appendChild(img)
    
   }
}