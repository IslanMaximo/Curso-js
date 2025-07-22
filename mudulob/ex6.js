var hora = 13
console.log = (`Agora são exatamente ${hora} Horas. `)
if(hora < 12){
    console.log = ("bom dia")
}else if(hora <=18){
    console.log = ("boa tarde")
}else if(hora < 5){
    console.log = ("vá dormir")
}