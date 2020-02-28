function carregar () {
var msg = document.querySelector ("#msg")
var img = document.querySelector ("#imagem")
var hdj = document.querySelector ("#hdj")
var data = new Date()
var hora = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds().toString().padStart(2,"0")
hdj.innerHTML = `Hoje é dia ${data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear().toString()}`
//var hora = 17
//msg.innerHTML = `Agora são ${hora} horas.`


if (hora >= 0 && hora < 12) {
    //BOM DIA
    img.src = 'Imagens/manha.png'
    msg.innerHTML = `Bom dia, agora são ${hora}`
    document.body.style.background= '#e2cd9f'

} else if (hora > 12 && hora < 18){
    //BOA TARDE
    img.src = 'Imagens/tarde.png'
    msg.innerHTML = `Bom tarde, agora são ${hora}`
    document.body.style.background= '#b9846f'

}else {
    //BOA NOITE
    img.src = 'Imagens/noite.png'
    msg.innerHTML = `Boa noite, agora são ${hora}`
    document.body.style.background= '#515164'
}
}

