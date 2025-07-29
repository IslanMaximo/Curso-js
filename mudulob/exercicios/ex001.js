function carregar(){
    var msg = document.getElementById('msg')
var foto = document.getElementById('foto')
var body = document.querySelector('body')
var data = new Date()
var hora = data.getHours()
if( hora >= 5 && hora <= 12){
    msg.innerHTML= `<h3> Bom dia são  ${hora} Horas !</h3>`
    foto.style.background ='url(img/ex001/manha.jpg) center center'
    body.style.background = '#dd9d54ff'
}else if(hora >= 13 && hora <= 16){
    msg.innerHTML= `<h3> Bom dia são  ${hora} Horas !</h3>` 
    foto.style.background ='url(img/ex001/dia.jpg) center center'
    body.style.background = '#86acceff'
}else if(hora >= 17 && hora <= 20){
    msg.innerHTML= `<h3> Boa Tarde são  ${hora} Horas !</h3>`
    foto.style.background ='url(img/ex001/tarde.jpg) center center'
    body.style.background = '#a15848ff'
}else{
    msg.innerHTML= `<h3> Boa noite são  ${hora} Horas !</h3>`
    foto.style.background ='url(img/ex001/noite.jpg) center center'
    body.style.background = '#092658ff'
}
}
