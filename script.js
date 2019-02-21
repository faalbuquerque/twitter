document.querySelector(".btn-twittar").disabled= true

function twittar(){
    let tweet= document.getElementById("tweet").value
    return tweet
}

function criarTweet(){
    let elemento= document.createElement("textarea")
    elemento.textContent= twittar()
    document.body.appendChild(elemento)
}

function limparTweet(){
    document.querySelector(".btn-twittar").disabled= true
    document.getElementById("tweet").value= " "
    document.getElementById("contador").innerHTML= 140
}

let botao= document.querySelector(".btn-twittar")
botao.addEventListener("click", criarTweet)
botao.addEventListener("click", limparTweet)

function contaCaracteres(){
    let tweets= document.getElementById("tweet").value.length
    let tamanho= 140 - tweets;
    document.getElementById("contador").innerHTML= tamanho

    if(tweets < 120 && tweets <= 129){
        contador.style.color= "#000"
    }
    if(tweets >= 120 && tweets <= 129){
        contador.style.color= "#FFA500"
    }
    if(tweets >= 130 && tweets <= 140){
        contador.style.color= "#FF0000"
    }
    if(tweets > 140){
        contador.style.color= "#9932CC"
    }
  }

  function desabilitaOuNao(){
    let texto= document.getElementById("tweet").value
    let botao= document.querySelector(".btn-twittar")

    if(texto.length > 0 && texto.length <= 140) {
        botao.disabled= false
    }
    else{
        botao.disabled= true
    }
}

let tweet= document.getElementById("tweet")
tweet.addEventListener("keyup", contaCaracteres)
tweet.addEventListener("keyup", desabilitaOuNao)
