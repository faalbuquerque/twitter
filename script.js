
function createElement(){

    let newElement= document.createElement("textarea")

    let textoNovo= document.createTextNode("Testando!")
    newElement.appendChild(textoNovo);

    let formAtual= document.getElementById("form-printar")
    
    document.body.insertBefore(textoNovo, formAtual)
  
}


function twittar(){

    let textTwitter= document.querySelector(".write-twit").value
    let getText = document.querySelector(".print-twit")

    return getText.innerHTML = textTwitter 
 
}


/*

function twittar(){

    let textTwitter= document.querySelector(".write-twit").value

    let getText = document.querySelector(".print-twit")

    return getText.innerHTML = textTwitter 
 
}

-------------------------------------------------------
document.body.onload = adcElemento;

<div id="div1">O texto acima foi criado dinamicamente.</div>

function adcElemento () { 
  // cria um novo elemento div 
  // e dá à ele conteúdo
  var divNova = document.createElement("div"); 
  var conteudoNovo = document.createTextNode("Olá, cumprimentos!"); 
  divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada 

  // adiciona o novo elemento criado e seu conteúdo ao DOM 
  var divAtual = document.getElementById("div1"); 
  document.body.insertBefore(divNova, divAtual); 
} */



























/*
var $wrapper = document.querySelector('.wrapper'),
    // Pega a string do conteúdo atual
    HTMLTemporario = $wrapper.innerHTML,
    // Novo HTML que será inserido
    HTMLNovo = 'Teste prepend com innerHTML </br>';

// Concatena as strings colocando o novoHTML antes do HTMLTemporario
HTMLTemporario = HTMLNovo + HTMLTemporario;

// Coloca a nova string(que é o HTML) no DOM
$wrapper.innerHTML = HTMLTemporario; */