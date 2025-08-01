let n = window.document.getElementById('n')
let lista = window.document.getElementById('listan')
let res = window.document.querySelector('div#res')
let an = []
function adicionar(){
    let verificar = an.indexOf(n.value)
    if(n.value.length == 0 || Number(n.value) > 100){
        window.alert('Campo Número vazio ou invalido')
    }else if(verificar == -1){
        an.push(Number(n.value))
        let item = document.createElement('option')
        item.text = `Número ${n.value} adicionado`
        lista.appendChild(item)
    }else{
        window.alert('o numero ja esta na')
    }
    n.value = ''
    n.focus()
}
 function finalizar(){
    res.innerHTML = ''
    if(an.value == 0){
        window.alert('Não foi inserido nenhum numero')
    }else{
        res.innerHTML += `<p>Ao todo temos ${an.length} Números cadastrados</p>`
        an.sort()
        final = Number(an.length) - 1
        res.innerHTML += `<p>O menor numero é ${an[0]}</p>`
        res.innerHTML += `O maior numero é ${an[final]}`
        let soma = 0
        let media = 0
        for(let pos in an){
            soma += an[pos]
        }
        media = soma / an.length
        res.innerHTML += `<p>O menor numero é ${soma}</p>`
        res.innerHTML += `<p>O menor numero é ${media}</p>`


    }

}